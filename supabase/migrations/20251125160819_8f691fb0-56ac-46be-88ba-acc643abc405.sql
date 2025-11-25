-- =====================================================
-- ORALSPACE-X DATABASE SCHEMA
-- Medical Digital Health Platform
-- =====================================================

-- 1. CREATE ENUM FOR USER ROLES
CREATE TYPE public.app_role AS ENUM (
  'doctor',
  'lab_tech', 
  'patient',
  'researcher',
  'insurance_admin'
);

-- =====================================================
-- 2. PROFILES TABLE (User Information)
-- =====================================================
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  avatar_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Profiles RLS: Users can read all profiles but only update their own
CREATE POLICY "Profiles are viewable by authenticated users"
  ON public.profiles FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can update their own profile"
  ON public.profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- =====================================================
-- 3. USER_ROLES TABLE (CRITICAL FOR SECURITY)
-- =====================================================
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role app_role NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- User Roles RLS: Users can see their own roles
CREATE POLICY "Users can view their own roles"
  ON public.user_roles FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- SECURITY DEFINER FUNCTION to check roles (avoids RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- =====================================================
-- 4. PATIENTS TABLE
-- =====================================================
CREATE TABLE public.patients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  did TEXT UNIQUE NOT NULL, -- Decentralized ID
  wallet_status JSONB DEFAULT '{}'::jsonb, -- Permissions and consents
  created_by UUID REFERENCES public.profiles(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.patients ENABLE ROW LEVEL SECURITY;

-- Patients RLS
CREATE POLICY "Doctors and researchers can view all patients"
  ON public.patients FOR SELECT
  TO authenticated
  USING (
    public.has_role(auth.uid(), 'doctor') OR 
    public.has_role(auth.uid(), 'researcher') OR
    public.has_role(auth.uid(), 'insurance_admin')
  );

CREATE POLICY "Patients can view their own record"
  ON public.patients FOR SELECT
  TO authenticated
  USING (
    public.has_role(auth.uid(), 'patient') AND
    did = (SELECT did FROM public.patients WHERE created_by = auth.uid() LIMIT 1)
  );

CREATE POLICY "Doctors can insert patients"
  ON public.patients FOR INSERT
  TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'doctor'));

CREATE POLICY "Doctors can update patients"
  ON public.patients FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'doctor'));

-- =====================================================
-- 5. CLINICAL_ENCOUNTERS TABLE (Consultations)
-- =====================================================
CREATE TABLE public.clinical_encounters (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id UUID NOT NULL REFERENCES public.patients(id) ON DELETE CASCADE,
  doctor_id UUID NOT NULL REFERENCES public.profiles(id),
  encounter_date TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  fhir_bundle JSONB NOT NULL DEFAULT '{}'::jsonb, -- FHIR compliant data
  data_source TEXT NOT NULL CHECK (data_source IN ('Hospital', 'Dental Clinic')),
  risk_level TEXT CHECK (risk_level IN ('normal', 'medium', 'high')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.clinical_encounters ENABLE ROW LEVEL SECURITY;

-- Clinical Encounters RLS
CREATE POLICY "Doctors can view all encounters"
  ON public.clinical_encounters FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'doctor'));

CREATE POLICY "Patients can view their own encounters"
  ON public.clinical_encounters FOR SELECT
  TO authenticated
  USING (
    public.has_role(auth.uid(), 'patient') AND
    patient_id IN (SELECT id FROM public.patients WHERE created_by = auth.uid())
  );

CREATE POLICY "Doctors can create encounters"
  ON public.clinical_encounters FOR INSERT
  TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'doctor'));

-- =====================================================
-- 6. LAB_ORDERS TABLE (Manufacturing Orders)
-- =====================================================
CREATE TABLE public.lab_orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id UUID NOT NULL REFERENCES public.patients(id) ON DELETE CASCADE,
  lab_tech_id UUID REFERENCES public.profiles(id),
  status TEXT NOT NULL DEFAULT 'received' CHECK (status IN ('received', 'designing', 'manufacturing', 'shipped')),
  dpp_payload JSONB NOT NULL DEFAULT '{}'::jsonb, -- Digital Product Passport
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.lab_orders ENABLE ROW LEVEL SECURITY;

-- Lab Orders RLS
CREATE POLICY "Lab techs can view all orders"
  ON public.lab_orders FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'lab_tech'));

CREATE POLICY "Doctors can view orders for their patients"
  ON public.lab_orders FOR SELECT
  TO authenticated
  USING (
    public.has_role(auth.uid(), 'doctor') AND
    patient_id IN (SELECT id FROM public.patients WHERE created_by = auth.uid())
  );

CREATE POLICY "Lab techs can update orders"
  ON public.lab_orders FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'lab_tech'));

CREATE POLICY "Doctors can create orders"
  ON public.lab_orders FOR INSERT
  TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'doctor'));

-- =====================================================
-- 7. SMART_CLAIMS TABLE (Insurance Claims)
-- =====================================================
CREATE TABLE public.smart_claims (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id UUID NOT NULL REFERENCES public.patients(id) ON DELETE CASCADE,
  treatment_code TEXT NOT NULL, -- CDT code
  amount DECIMAL(10,2) NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'paid', 'fraud_detected')),
  evidence_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.smart_claims ENABLE ROW LEVEL SECURITY;

-- Smart Claims RLS
CREATE POLICY "Insurance admins can view all claims"
  ON public.smart_claims FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'insurance_admin'));

CREATE POLICY "Doctors can view claims for their patients"
  ON public.smart_claims FOR SELECT
  TO authenticated
  USING (
    public.has_role(auth.uid(), 'doctor') AND
    patient_id IN (SELECT id FROM public.patients WHERE created_by = auth.uid())
  );

CREATE POLICY "Insurance admins can update claims"
  ON public.smart_claims FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'insurance_admin'));

CREATE POLICY "Doctors can create claims"
  ON public.smart_claims FOR INSERT
  TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'doctor'));

-- =====================================================
-- 8. IOT_DEVICES TABLE (Connected Devices)
-- =====================================================
CREATE TABLE public.iot_devices (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  device_type TEXT NOT NULL CHECK (device_type IN ('autoclave', 'stock_monitor')),
  name TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('active', 'in_cycle', 'needs_reorder')),
  current_value INTEGER DEFAULT 0,
  target_value INTEGER,
  metadata JSONB DEFAULT '{}'::jsonb, -- Timers, temperature, etc.
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.iot_devices ENABLE ROW LEVEL SECURITY;

-- IoT Devices RLS
CREATE POLICY "Lab techs can view all devices"
  ON public.iot_devices FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'lab_tech'));

CREATE POLICY "Lab techs can update devices"
  ON public.iot_devices FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'lab_tech'));

-- =====================================================
-- 9. FUNCTIONS & TRIGGERS
-- =====================================================

-- Function to update updated_at timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

-- Triggers for updated_at
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_patients_updated_at
  BEFORE UPDATE ON public.patients
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_lab_orders_updated_at
  BEFORE UPDATE ON public.lab_orders
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_iot_devices_updated_at
  BEFORE UPDATE ON public.iot_devices
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Auto-create profile when user signs up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, avatar_url)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', 'Unknown User'),
    NEW.raw_user_meta_data->>'avatar_url'
  );
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();
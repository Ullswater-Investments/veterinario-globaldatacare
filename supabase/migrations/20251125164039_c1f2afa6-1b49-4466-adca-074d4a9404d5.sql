-- Create policies for auditor to have read access to all tables

-- Auditor can view all user roles
CREATE POLICY "Auditors can view all user roles" 
ON public.user_roles
FOR SELECT
USING (has_role(auth.uid(), 'auditor'::app_role));

-- Auditor can view all profiles
CREATE POLICY "Auditors can view all profiles" 
ON public.profiles
FOR SELECT
USING (has_role(auth.uid(), 'auditor'::app_role));

-- Auditor can view all patients
CREATE POLICY "Auditors can view all patients" 
ON public.patients
FOR SELECT
USING (has_role(auth.uid(), 'auditor'::app_role));

-- Auditor can view all clinical encounters
CREATE POLICY "Auditors can view all clinical encounters" 
ON public.clinical_encounters
FOR SELECT
USING (has_role(auth.uid(), 'auditor'::app_role));

-- Auditor can view all lab orders
CREATE POLICY "Auditors can view all lab orders" 
ON public.lab_orders
FOR SELECT
USING (has_role(auth.uid(), 'auditor'::app_role));

-- Auditor can view all smart claims
CREATE POLICY "Auditors can view all smart claims" 
ON public.smart_claims
FOR SELECT
USING (has_role(auth.uid(), 'auditor'::app_role));

-- Auditor can view all IoT devices
CREATE POLICY "Auditors can view all IoT devices" 
ON public.iot_devices
FOR SELECT
USING (has_role(auth.uid(), 'auditor'::app_role));
CREATE EXTENSION IF NOT EXISTS "pg_graphql";
CREATE EXTENSION IF NOT EXISTS "pg_stat_statements";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
CREATE EXTENSION IF NOT EXISTS "plpgsql";
CREATE EXTENSION IF NOT EXISTS "supabase_vault";
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
--
-- PostgreSQL database dump
--


-- Dumped from database version 17.6
-- Dumped by pg_dump version 18.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--



--
-- Name: app_role; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.app_role AS ENUM (
    'doctor',
    'lab_tech',
    'patient',
    'researcher',
    'insurance_admin',
    'auditor'
);


--
-- Name: handle_new_user(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.handle_new_user() RETURNS trigger
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
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


--
-- Name: has_role(uuid, public.app_role); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.has_role(_user_id uuid, _role public.app_role) RETURNS boolean
    LANGUAGE sql STABLE SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;


--
-- Name: update_updated_at_column(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.update_updated_at_column() RETURNS trigger
    LANGUAGE plpgsql SECURITY DEFINER
    SET search_path TO 'public'
    AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;


SET default_table_access_method = heap;

--
-- Name: clinical_encounters; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.clinical_encounters (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    patient_id uuid NOT NULL,
    doctor_id uuid,
    encounter_date timestamp with time zone DEFAULT now() NOT NULL,
    fhir_bundle jsonb DEFAULT '{}'::jsonb NOT NULL,
    data_source text NOT NULL,
    risk_level text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    CONSTRAINT clinical_encounters_data_source_check CHECK ((data_source = ANY (ARRAY['Hospital'::text, 'Dental Clinic'::text]))),
    CONSTRAINT clinical_encounters_risk_level_check CHECK ((risk_level = ANY (ARRAY['normal'::text, 'medium'::text, 'high'::text])))
);


--
-- Name: iot_devices; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.iot_devices (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    device_type text NOT NULL,
    name text NOT NULL,
    status text NOT NULL,
    current_value integer DEFAULT 0,
    target_value integer,
    metadata jsonb DEFAULT '{}'::jsonb,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    CONSTRAINT iot_devices_device_type_check CHECK ((device_type = ANY (ARRAY['autoclave'::text, 'stock_monitor'::text]))),
    CONSTRAINT iot_devices_status_check CHECK ((status = ANY (ARRAY['active'::text, 'in_cycle'::text, 'needs_reorder'::text])))
);


--
-- Name: lab_orders; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.lab_orders (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    patient_id uuid NOT NULL,
    lab_tech_id uuid,
    status text DEFAULT 'received'::text NOT NULL,
    dpp_payload jsonb DEFAULT '{}'::jsonb NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    CONSTRAINT lab_orders_status_check CHECK ((status = ANY (ARRAY['received'::text, 'designing'::text, 'manufacturing'::text, 'shipped'::text])))
);


--
-- Name: patients; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.patients (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    full_name text NOT NULL,
    did text NOT NULL,
    wallet_status jsonb DEFAULT '{}'::jsonb,
    created_by uuid,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: profiles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.profiles (
    id uuid NOT NULL,
    full_name text NOT NULL,
    avatar_url text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: smart_claims; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.smart_claims (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    patient_id uuid NOT NULL,
    treatment_code text NOT NULL,
    amount numeric(10,2) NOT NULL,
    status text DEFAULT 'pending'::text NOT NULL,
    evidence_url text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    CONSTRAINT smart_claims_status_check CHECK ((status = ANY (ARRAY['pending'::text, 'approved'::text, 'paid'::text, 'fraud_detected'::text])))
);


--
-- Name: user_roles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.user_roles (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    user_id uuid NOT NULL,
    role public.app_role NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: clinical_encounters clinical_encounters_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.clinical_encounters
    ADD CONSTRAINT clinical_encounters_pkey PRIMARY KEY (id);


--
-- Name: iot_devices iot_devices_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.iot_devices
    ADD CONSTRAINT iot_devices_pkey PRIMARY KEY (id);


--
-- Name: lab_orders lab_orders_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.lab_orders
    ADD CONSTRAINT lab_orders_pkey PRIMARY KEY (id);


--
-- Name: patients patients_did_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.patients
    ADD CONSTRAINT patients_did_key UNIQUE (did);


--
-- Name: patients patients_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.patients
    ADD CONSTRAINT patients_pkey PRIMARY KEY (id);


--
-- Name: profiles profiles_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.profiles
    ADD CONSTRAINT profiles_pkey PRIMARY KEY (id);


--
-- Name: smart_claims smart_claims_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.smart_claims
    ADD CONSTRAINT smart_claims_pkey PRIMARY KEY (id);


--
-- Name: user_roles user_roles_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT user_roles_pkey PRIMARY KEY (id);


--
-- Name: user_roles user_roles_user_id_role_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT user_roles_user_id_role_key UNIQUE (user_id, role);


--
-- Name: iot_devices update_iot_devices_updated_at; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER update_iot_devices_updated_at BEFORE UPDATE ON public.iot_devices FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();


--
-- Name: lab_orders update_lab_orders_updated_at; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER update_lab_orders_updated_at BEFORE UPDATE ON public.lab_orders FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();


--
-- Name: patients update_patients_updated_at; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER update_patients_updated_at BEFORE UPDATE ON public.patients FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();


--
-- Name: profiles update_profiles_updated_at; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();


--
-- Name: clinical_encounters clinical_encounters_doctor_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.clinical_encounters
    ADD CONSTRAINT clinical_encounters_doctor_id_fkey FOREIGN KEY (doctor_id) REFERENCES public.profiles(id);


--
-- Name: clinical_encounters clinical_encounters_patient_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.clinical_encounters
    ADD CONSTRAINT clinical_encounters_patient_id_fkey FOREIGN KEY (patient_id) REFERENCES public.patients(id) ON DELETE CASCADE;


--
-- Name: lab_orders lab_orders_lab_tech_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.lab_orders
    ADD CONSTRAINT lab_orders_lab_tech_id_fkey FOREIGN KEY (lab_tech_id) REFERENCES public.profiles(id);


--
-- Name: lab_orders lab_orders_patient_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.lab_orders
    ADD CONSTRAINT lab_orders_patient_id_fkey FOREIGN KEY (patient_id) REFERENCES public.patients(id) ON DELETE CASCADE;


--
-- Name: patients patients_created_by_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.patients
    ADD CONSTRAINT patients_created_by_fkey FOREIGN KEY (created_by) REFERENCES public.profiles(id);


--
-- Name: profiles profiles_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.profiles
    ADD CONSTRAINT profiles_id_fkey FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: smart_claims smart_claims_patient_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.smart_claims
    ADD CONSTRAINT smart_claims_patient_id_fkey FOREIGN KEY (patient_id) REFERENCES public.patients(id) ON DELETE CASCADE;


--
-- Name: user_roles user_roles_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT user_roles_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE;


--
-- Name: iot_devices Auditors can view all IoT devices; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Auditors can view all IoT devices" ON public.iot_devices FOR SELECT USING (public.has_role(auth.uid(), 'auditor'::public.app_role));


--
-- Name: clinical_encounters Auditors can view all clinical encounters; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Auditors can view all clinical encounters" ON public.clinical_encounters FOR SELECT USING (public.has_role(auth.uid(), 'auditor'::public.app_role));


--
-- Name: lab_orders Auditors can view all lab orders; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Auditors can view all lab orders" ON public.lab_orders FOR SELECT USING (public.has_role(auth.uid(), 'auditor'::public.app_role));


--
-- Name: patients Auditors can view all patients; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Auditors can view all patients" ON public.patients FOR SELECT USING (public.has_role(auth.uid(), 'auditor'::public.app_role));


--
-- Name: profiles Auditors can view all profiles; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Auditors can view all profiles" ON public.profiles FOR SELECT USING (public.has_role(auth.uid(), 'auditor'::public.app_role));


--
-- Name: smart_claims Auditors can view all smart claims; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Auditors can view all smart claims" ON public.smart_claims FOR SELECT USING (public.has_role(auth.uid(), 'auditor'::public.app_role));


--
-- Name: user_roles Auditors can view all user roles; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Auditors can view all user roles" ON public.user_roles FOR SELECT USING (public.has_role(auth.uid(), 'auditor'::public.app_role));


--
-- Name: patients Doctors and researchers can view all patients; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Doctors and researchers can view all patients" ON public.patients FOR SELECT TO authenticated USING ((public.has_role(auth.uid(), 'doctor'::public.app_role) OR public.has_role(auth.uid(), 'researcher'::public.app_role) OR public.has_role(auth.uid(), 'insurance_admin'::public.app_role)));


--
-- Name: smart_claims Doctors can create claims; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Doctors can create claims" ON public.smart_claims FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'doctor'::public.app_role));


--
-- Name: clinical_encounters Doctors can create encounters; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Doctors can create encounters" ON public.clinical_encounters FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'doctor'::public.app_role));


--
-- Name: lab_orders Doctors can create orders; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Doctors can create orders" ON public.lab_orders FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'doctor'::public.app_role));


--
-- Name: patients Doctors can insert patients; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Doctors can insert patients" ON public.patients FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'doctor'::public.app_role));


--
-- Name: patients Doctors can update patients; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Doctors can update patients" ON public.patients FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'doctor'::public.app_role));


--
-- Name: clinical_encounters Doctors can view all encounters; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Doctors can view all encounters" ON public.clinical_encounters FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'doctor'::public.app_role));


--
-- Name: smart_claims Doctors can view claims for their patients; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Doctors can view claims for their patients" ON public.smart_claims FOR SELECT TO authenticated USING ((public.has_role(auth.uid(), 'doctor'::public.app_role) AND (patient_id IN ( SELECT patients.id
   FROM public.patients
  WHERE (patients.created_by = auth.uid())))));


--
-- Name: lab_orders Doctors can view orders for their patients; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Doctors can view orders for their patients" ON public.lab_orders FOR SELECT TO authenticated USING ((public.has_role(auth.uid(), 'doctor'::public.app_role) AND (patient_id IN ( SELECT patients.id
   FROM public.patients
  WHERE (patients.created_by = auth.uid())))));


--
-- Name: smart_claims Insurance admins can update claims; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Insurance admins can update claims" ON public.smart_claims FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'insurance_admin'::public.app_role));


--
-- Name: smart_claims Insurance admins can view all claims; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Insurance admins can view all claims" ON public.smart_claims FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'insurance_admin'::public.app_role));


--
-- Name: iot_devices Lab techs can update devices; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Lab techs can update devices" ON public.iot_devices FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'lab_tech'::public.app_role));


--
-- Name: lab_orders Lab techs can update orders; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Lab techs can update orders" ON public.lab_orders FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'lab_tech'::public.app_role));


--
-- Name: iot_devices Lab techs can view all devices; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Lab techs can view all devices" ON public.iot_devices FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'lab_tech'::public.app_role));


--
-- Name: lab_orders Lab techs can view all orders; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Lab techs can view all orders" ON public.lab_orders FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'lab_tech'::public.app_role));


--
-- Name: clinical_encounters Patients can view their own encounters; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Patients can view their own encounters" ON public.clinical_encounters FOR SELECT TO authenticated USING ((public.has_role(auth.uid(), 'patient'::public.app_role) AND (patient_id IN ( SELECT patients.id
   FROM public.patients
  WHERE (patients.created_by = auth.uid())))));


--
-- Name: patients Patients can view their own record; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Patients can view their own record" ON public.patients FOR SELECT TO authenticated USING ((public.has_role(auth.uid(), 'patient'::public.app_role) AND (did = ( SELECT patients_1.did
   FROM public.patients patients_1
  WHERE (patients_1.created_by = auth.uid())
 LIMIT 1))));


--
-- Name: profiles Profiles are viewable by authenticated users; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Profiles are viewable by authenticated users" ON public.profiles FOR SELECT TO authenticated USING (true);


--
-- Name: profiles Users can update their own profile; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can update their own profile" ON public.profiles FOR UPDATE TO authenticated USING ((auth.uid() = id));


--
-- Name: user_roles Users can view their own roles; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Users can view their own roles" ON public.user_roles FOR SELECT TO authenticated USING ((auth.uid() = user_id));


--
-- Name: clinical_encounters; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.clinical_encounters ENABLE ROW LEVEL SECURITY;

--
-- Name: iot_devices; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.iot_devices ENABLE ROW LEVEL SECURITY;

--
-- Name: lab_orders; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.lab_orders ENABLE ROW LEVEL SECURITY;

--
-- Name: patients; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.patients ENABLE ROW LEVEL SECURITY;

--
-- Name: profiles; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

--
-- Name: smart_claims; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.smart_claims ENABLE ROW LEVEL SECURITY;

--
-- Name: user_roles; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

--
-- PostgreSQL database dump complete
--



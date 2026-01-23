-- =====================================================
-- FASE 1: Migración Veterinaria VetSpace-X
-- =====================================================

-- 1. Añadir campos veterinarios a la tabla patients
ALTER TABLE public.patients 
ADD COLUMN IF NOT EXISTS species TEXT,
ADD COLUMN IF NOT EXISTS breed TEXT,
ADD COLUMN IF NOT EXISTS sex TEXT,
ADD COLUMN IF NOT EXISTS is_neutered BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS microchip_id TEXT,
ADD COLUMN IF NOT EXISTS photo_url TEXT,
ADD COLUMN IF NOT EXISTS date_of_birth DATE,
ADD COLUMN IF NOT EXISTS guardian_id UUID REFERENCES public.profiles(id);

-- Índice para búsqueda por tutor (1 Tutor = N Mascotas)
CREATE INDEX IF NOT EXISTS idx_patients_guardian ON public.patients(guardian_id);

-- Índice para búsqueda por microchip
CREATE INDEX IF NOT EXISTS idx_patients_microchip ON public.patients(microchip_id);

-- 2. Tabla de historial de peso (peso dinámico por visita)
CREATE TABLE IF NOT EXISTS public.weight_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id UUID NOT NULL REFERENCES public.patients(id) ON DELETE CASCADE,
  weight_kg NUMERIC(5,2) NOT NULL,
  recorded_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  recorded_by UUID REFERENCES public.profiles(id),
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Habilitar RLS en weight_history
ALTER TABLE public.weight_history ENABLE ROW LEVEL SECURITY;

-- Políticas RLS para weight_history
CREATE POLICY "Veterinarios pueden ver todo el historial de peso"
ON public.weight_history FOR SELECT
USING (has_role(auth.uid(), 'doctor'::app_role));

CREATE POLICY "Veterinarios pueden registrar peso"
ON public.weight_history FOR INSERT
WITH CHECK (has_role(auth.uid(), 'doctor'::app_role));

CREATE POLICY "Tutores pueden ver peso de sus mascotas"
ON public.weight_history FOR SELECT
USING (
  has_role(auth.uid(), 'patient'::app_role) AND 
  patient_id IN (
    SELECT id FROM public.patients WHERE guardian_id = auth.uid()
  )
);

CREATE POLICY "Auditores pueden ver todo el historial de peso"
ON public.weight_history FOR SELECT
USING (has_role(auth.uid(), 'auditor'::app_role));

-- 3. Tabla de hospitalizaciones
CREATE TABLE IF NOT EXISTS public.hospitalizations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id UUID NOT NULL REFERENCES public.patients(id) ON DELETE CASCADE,
  cage_number TEXT NOT NULL,
  admission_date TIMESTAMPTZ NOT NULL DEFAULT now(),
  discharge_date TIMESTAMPTZ,
  current_status TEXT NOT NULL DEFAULT 'stable', -- 'stable', 'observation', 'critical'
  treatment_notes TEXT,
  next_medication_time TIMESTAMPTZ,
  attending_vet_id UUID REFERENCES public.profiles(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Habilitar RLS en hospitalizations
ALTER TABLE public.hospitalizations ENABLE ROW LEVEL SECURITY;

-- Políticas RLS para hospitalizations
CREATE POLICY "Veterinarios pueden ver todas las hospitalizaciones"
ON public.hospitalizations FOR SELECT
USING (has_role(auth.uid(), 'doctor'::app_role));

CREATE POLICY "Veterinarios pueden crear hospitalizaciones"
ON public.hospitalizations FOR INSERT
WITH CHECK (has_role(auth.uid(), 'doctor'::app_role));

CREATE POLICY "Veterinarios pueden actualizar hospitalizaciones"
ON public.hospitalizations FOR UPDATE
USING (has_role(auth.uid(), 'doctor'::app_role));

CREATE POLICY "Lab techs pueden ver hospitalizaciones"
ON public.hospitalizations FOR SELECT
USING (has_role(auth.uid(), 'lab_tech'::app_role));

CREATE POLICY "Tutores pueden ver hospitalizaciones de sus mascotas"
ON public.hospitalizations FOR SELECT
USING (
  has_role(auth.uid(), 'patient'::app_role) AND 
  patient_id IN (
    SELECT id FROM public.patients WHERE guardian_id = auth.uid()
  )
);

CREATE POLICY "Auditores pueden ver todas las hospitalizaciones"
ON public.hospitalizations FOR SELECT
USING (has_role(auth.uid(), 'auditor'::app_role));

-- Trigger para actualizar updated_at en hospitalizations
CREATE TRIGGER update_hospitalizations_updated_at
BEFORE UPDATE ON public.hospitalizations
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Índices para hospitalizations
CREATE INDEX IF NOT EXISTS idx_hospitalizations_patient ON public.hospitalizations(patient_id);
CREATE INDEX IF NOT EXISTS idx_hospitalizations_status ON public.hospitalizations(current_status);
CREATE INDEX IF NOT EXISTS idx_hospitalizations_active ON public.hospitalizations(discharge_date) WHERE discharge_date IS NULL;
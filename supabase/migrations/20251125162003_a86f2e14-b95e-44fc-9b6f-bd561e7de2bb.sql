-- Permitir que doctor_id sea nullable para datos sintéticos
ALTER TABLE public.clinical_encounters 
ALTER COLUMN doctor_id DROP NOT NULL;
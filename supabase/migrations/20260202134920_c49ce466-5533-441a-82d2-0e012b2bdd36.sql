-- Añadir columnas para tracking de aceptación de contrato y acta
ALTER TABLE public.kit_inscriptions 
ADD COLUMN IF NOT EXISTS contract_accepted boolean DEFAULT false,
ADD COLUMN IF NOT EXISTS acceptance_act_accepted boolean DEFAULT false,
ADD COLUMN IF NOT EXISTS contract_accepted_at timestamp with time zone;
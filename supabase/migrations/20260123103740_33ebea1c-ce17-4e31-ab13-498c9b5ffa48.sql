-- Actualizar constraint de data_source para valores veterinarios
ALTER TABLE public.clinical_encounters DROP CONSTRAINT clinical_encounters_data_source_check;
ALTER TABLE public.clinical_encounters ADD CONSTRAINT clinical_encounters_data_source_check 
  CHECK (data_source = ANY (ARRAY['Hospital', 'Hospital de Referencia', 'Clínica Veterinaria', 'Dental Clinic']::text[]));

-- Actualizar los registros existentes a terminología veterinaria
UPDATE public.clinical_encounters SET data_source = 'Clínica Veterinaria' WHERE data_source = 'Dental Clinic';
UPDATE public.clinical_encounters SET data_source = 'Hospital de Referencia' WHERE data_source = 'Hospital';
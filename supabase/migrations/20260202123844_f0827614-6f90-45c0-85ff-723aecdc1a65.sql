-- Create kit_inscriptions table for marketing campaign
CREATE TABLE public.kit_inscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Clinic data
  clinic_name TEXT NOT NULL,
  cif TEXT NOT NULL,
  address TEXT NOT NULL,
  postal_code TEXT NOT NULL,
  city TEXT NOT NULL,
  province TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  
  -- Contact person data
  contact_name TEXT NOT NULL,
  contact_role TEXT NOT NULL,
  contact_phone TEXT NOT NULL,
  contact_email TEXT NOT NULL,
  
  -- Additional information
  num_veterinarians INTEGER,
  num_employees INTEGER,
  current_software TEXT,
  has_website BOOLEAN,
  has_digital_records TEXT,
  
  -- Interested modules (JSON array)
  interested_modules JSONB DEFAULT '[]',
  
  -- Consents
  privacy_accepted BOOLEAN NOT NULL DEFAULT false,
  communications_accepted BOOLEAN DEFAULT false,
  terms_accepted BOOLEAN NOT NULL DEFAULT false,
  
  -- Metadata
  status TEXT DEFAULT 'pending',
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.kit_inscriptions ENABLE ROW LEVEL SECURITY;

-- Public INSERT policy (anyone can submit an inscription)
CREATE POLICY "Anyone can submit inscription"
ON public.kit_inscriptions
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Only auditors/admins can view inscriptions
CREATE POLICY "Auditors can view all inscriptions"
ON public.kit_inscriptions
FOR SELECT
TO authenticated
USING (has_role(auth.uid(), 'auditor'::app_role));

-- Only auditors/admins can update inscriptions
CREATE POLICY "Auditors can update inscriptions"
ON public.kit_inscriptions
FOR UPDATE
TO authenticated
USING (has_role(auth.uid(), 'auditor'::app_role));

-- Create trigger for updated_at
CREATE TRIGGER update_kit_inscriptions_updated_at
BEFORE UPDATE ON public.kit_inscriptions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();
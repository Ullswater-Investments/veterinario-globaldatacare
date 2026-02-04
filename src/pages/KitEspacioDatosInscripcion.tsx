import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Progress } from '@/components/ui/progress';
import { toast } from '@/hooks/use-toast';
import { Building2, User, Settings, CheckCircle2, ArrowRight, ArrowLeft, Send, Euro, PawPrint, FileText, ScrollText, ChevronDown, Home } from 'lucide-react';
import { NavigationControls } from '@/components/ui/NavigationControls';
import ContractContent from '@/components/legal/ContractContent';
import AcceptanceActContent from '@/components/legal/AcceptanceActContent';
import { GlobalFooter } from '@/components/ui/GlobalFooter';
import logoGobiernoRedEs from '@/assets/logo-gobierno-red-es.png';
import logoKitEspacioDatos from '@/assets/logo-kit-espacio-datos.jpg';

// Spanish provinces
const PROVINCES = ['Álava', 'Albacete', 'Alicante', 'Almería', 'Asturias', 'Ávila', 'Badajoz', 'Barcelona', 'Burgos', 'Cáceres', 'Cádiz', 'Cantabria', 'Castellón', 'Ciudad Real', 'Córdoba', 'Cuenca', 'Gerona', 'Granada', 'Guadalajara', 'Guipúzcoa', 'Huelva', 'Huesca', 'Islas Baleares', 'Jaén', 'La Coruña', 'La Rioja', 'Las Palmas', 'León', 'Lérida', 'Lugo', 'Madrid', 'Málaga', 'Murcia', 'Navarra', 'Orense', 'Palencia', 'Pontevedra', 'Salamanca', 'Santa Cruz de Tenerife', 'Segovia', 'Sevilla', 'Soria', 'Tarragona', 'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya', 'Zamora', 'Zaragoza', 'Ceuta', 'Melilla'];
const CONTACT_ROLES = [{
  value: 'director',
  label: 'Director/a'
}, {
  value: 'gerente',
  label: 'Gerente'
}, {
  value: 'veterinario',
  label: 'Veterinario/a responsable'
}, {
  value: 'otro',
  label: 'Otro'
}];
const MODULES = [{
  id: 'fhir',
  label: 'Gestión Clínica Digital (FHIR)'
}, {
  id: 'dpp',
  label: 'Pasaporte Digital de Producto (DPP)'
}, {
  id: 'wallet',
  label: 'Wallet para Tutores'
}, {
  id: 'onehealth',
  label: 'Investigación One Health'
}, {
  id: 'procurement',
  label: 'Abastecimiento Inteligente'
}, {
  id: 'kpi',
  label: 'Dashboard KPIs'
}];

// Form validation schema
const formSchema = z.object({
  // Clinic data
  clinic_name: z.string().min(2, 'El nombre de la clínica es obligatorio').max(200),
  cif: z.string().regex(/^[A-Z][0-9]{8}$|^[0-9]{8}[A-Z]$/, 'Formato de CIF/NIF inválido (ej: B12345678)'),
  address: z.string().min(5, 'La dirección es obligatoria').max(300),
  postal_code: z.string().regex(/^[0-9]{5}$/, 'Código postal inválido (5 dígitos)'),
  city: z.string().min(2, 'La ciudad es obligatoria').max(100),
  province: z.string().min(1, 'Selecciona una provincia'),
  phone: z.string().regex(/^[0-9+\s]{9,15}$/, 'Teléfono inválido'),
  email: z.string().email('Email inválido').max(255),
  // Contact data
  contact_name: z.string().min(2, 'El nombre del responsable es obligatorio').max(150),
  contact_role: z.string().min(1, 'Selecciona un cargo'),
  contact_phone: z.string().regex(/^[0-9+\s]{9,15}$/, 'Teléfono inválido'),
  contact_email: z.string().email('Email inválido').max(255),
  // Additional info
  num_veterinarians: z.number().min(1).max(100).optional().nullable(),
  num_employees: z.number().min(1).max(500).optional().nullable(),
  current_software: z.string().max(200).optional(),
  has_website: z.boolean().optional(),
  has_digital_records: z.enum(['si', 'no', 'parcialmente']).optional(),
  // Modules
  interested_modules: z.array(z.string()).optional(),
  // Contract & Legal Documents
  contract_accepted: z.boolean().refine(val => val === true, 'Debes leer y aceptar el Contrato de Adhesión'),
  acceptance_act_accepted: z.boolean().refine(val => val === true, 'Debes aceptar el Acta de Entrega y Conformidad'),
  // Consents
  privacy_accepted: z.boolean().refine(val => val === true, 'Debes aceptar la política de privacidad'),
  communications_accepted: z.boolean().optional(),
  terms_accepted: z.boolean().refine(val => val === true, 'Debes aceptar las condiciones de participación')
});
type FormData = z.infer<typeof formSchema>;
const KitEspacioDatosInscripcion = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      clinic_name: '',
      cif: '',
      address: '',
      postal_code: '',
      city: '',
      province: '',
      phone: '',
      email: '',
      contact_name: '',
      contact_role: '',
      contact_phone: '',
      contact_email: '',
      num_veterinarians: null,
      num_employees: null,
      current_software: '',
      has_website: false,
      has_digital_records: undefined,
      interested_modules: [],
      contract_accepted: false,
      acceptance_act_accepted: false,
      privacy_accepted: false,
      communications_accepted: false,
      terms_accepted: false
    }
  });
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const {
        data: result,
        error
      } = await supabase.from('kit_inscriptions').insert({
        clinic_name: data.clinic_name,
        cif: data.cif.toUpperCase(),
        address: data.address,
        postal_code: data.postal_code,
        city: data.city,
        province: data.province,
        phone: data.phone,
        email: data.email.toLowerCase(),
        contact_name: data.contact_name,
        contact_role: data.contact_role,
        contact_phone: data.contact_phone,
        contact_email: data.contact_email.toLowerCase(),
        num_veterinarians: data.num_veterinarians,
        num_employees: data.num_employees,
        current_software: data.current_software || null,
        has_website: data.has_website,
        has_digital_records: data.has_digital_records || null,
        interested_modules: data.interested_modules || [],
        contract_accepted: data.contract_accepted,
        acceptance_act_accepted: data.acceptance_act_accepted,
        contract_accepted_at: new Date().toISOString(),
        privacy_accepted: data.privacy_accepted,
        communications_accepted: data.communications_accepted || false,
        terms_accepted: data.terms_accepted,
        utm_source: searchParams.get('utm_source'),
        utm_medium: searchParams.get('utm_medium'),
        utm_campaign: searchParams.get('utm_campaign')
      }).select('id').single();
      if (error) throw error;
      setReferenceId(result.id.slice(0, 8).toUpperCase());
      setIsSuccess(true);
      toast({
        title: '¡Solicitud enviada!',
        description: 'Nos pondremos en contacto contigo en 48 horas.'
      });
    } catch (error: any) {
      console.error('Error submitting inscription:', error);
      toast({
        title: 'Error al enviar',
        description: 'Ha ocurrido un error. Por favor, inténtalo de nuevo.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const nextStep = async () => {
    let fieldsToValidate: (keyof FormData)[] = [];
    if (step === 1) {
      fieldsToValidate = ['clinic_name', 'cif', 'address', 'postal_code', 'city', 'province', 'phone', 'email'];
    } else if (step === 2) {
      fieldsToValidate = ['contact_name', 'contact_role', 'contact_phone', 'contact_email'];
    }
    const isValid = await form.trigger(fieldsToValidate);
    if (isValid) {
      setStep(step + 1);
    }
  };
  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  // Success screen
  if (isSuccess) {
    return <div className="min-h-screen bg-gradient-to-b from-white to-secondary/30">
        <div className="container mx-auto px-4 py-20">
          <Card className="max-w-2xl mx-auto text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-green-100">
                  <CheckCircle2 className="h-12 w-12 text-green-600" />
                </div>
              </div>
              <CardTitle className="text-2xl text-green-700">¡Solicitud Enviada con Éxito!</CardTitle>
              <CardDescription className="text-lg mt-2">
                Tu referencia: <span className="font-mono font-bold text-primary">{referenceId}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                Hemos recibido tu solicitud de inscripción al Kit Espacio de Datos. 
                Nuestro equipo se pondrá en contacto contigo en un plazo máximo de <strong>48 horas</strong>.
              </p>
              <div className="bg-secondary/50 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Mientras tanto, puedes conocer más detalles sobre las ayudas y los módulos disponibles.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link to="/propuesta-kit-espacio-datos">
                  <Button size="lg" className="w-full sm:w-auto">
                    Ver Detalles de las Ayudas
                  </Button>
                </Link>
                <Link to="/">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Volver al Inicio
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
        <GlobalFooter />
      </div>;
  }
  return <div className="min-h-screen bg-gradient-to-b from-white to-secondary/30">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <PawPrint className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl">Global Data Care</span>
            </Link>
            <div className="flex items-center gap-2 text-primary">
              <Euro className="h-5 w-5" />
              <span className="font-semibold">Kit Espacio de Datos 2025</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <NavigationControls />
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <div className="text-center mb-8">
            <a 
              href="https://www.acelerapyme.gob.es/kit-espacios-de-datos" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img 
                src={logoKitEspacioDatos} 
                alt="Kit Espacios de Datos" 
                className="mx-auto h-20 md:h-28 object-contain mb-4 hover:opacity-80 transition-opacity"
              />
            </a>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Inscripción Kit Espacio de Datos
            </h1>
            <p className="text-muted-foreground">
              Completa el formulario para solicitar las ayudas europeas de digitalización
            </p>
          </div>

          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm mb-2">
              <span className={step >= 1 ? 'text-primary font-medium' : 'text-muted-foreground'}>
                1. Datos Clínica
              </span>
              <span className={step >= 2 ? 'text-primary font-medium' : 'text-muted-foreground'}>
                2. Responsable
              </span>
              <span className={step >= 3 ? 'text-primary font-medium' : 'text-muted-foreground'}>
                3. Confirmación
              </span>
            </div>
            <Progress value={step / 3 * 100} className="h-2" />
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              {/* Step 1: Clinic Data */}
              {step === 1 && <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Building2 className="h-6 w-6 text-primary" />
                      <CardTitle>Datos de la Clínica Veterinaria</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <FormField control={form.control} name="clinic_name" render={({
                  field
                }) => <FormItem>
                          <FormLabel>Nombre de la Clínica *</FormLabel>
                          <FormControl>
                            <Input placeholder="Clínica Veterinaria..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField control={form.control} name="cif" render={({
                    field
                  }) => <FormItem>
                            <FormLabel>CIF/NIF *</FormLabel>
                            <FormControl>
                              <Input placeholder="B12345678" {...field} className="uppercase" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>} />
                      <FormField control={form.control} name="phone" render={({
                    field
                  }) => <FormItem>
                            <FormLabel>Teléfono *</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="912345678" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>} />
                    </div>

                    <FormField control={form.control} name="email" render={({
                  field
                }) => <FormItem>
                          <FormLabel>Email de la Clínica *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="clinica@ejemplo.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />

                    <FormField control={form.control} name="address" render={({
                  field
                }) => <FormItem>
                          <FormLabel>Dirección Completa *</FormLabel>
                          <FormControl>
                            <Input placeholder="Calle, número, piso..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <FormField control={form.control} name="postal_code" render={({
                    field
                  }) => <FormItem>
                            <FormLabel>Código Postal *</FormLabel>
                            <FormControl>
                              <Input placeholder="28001" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>} />
                      <FormField control={form.control} name="city" render={({
                    field
                  }) => <FormItem>
                            <FormLabel>Ciudad *</FormLabel>
                            <FormControl>
                              <Input placeholder="Madrid" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>} />
                      <FormField control={form.control} name="province" render={({
                    field
                  }) => <FormItem>
                            <FormLabel>Provincia *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Selecciona..." />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {PROVINCES.map(p => <SelectItem key={p} value={p}>{p}</SelectItem>)}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>} />
                    </div>

                    <div className="flex justify-end pt-4">
                      <Button type="button" onClick={nextStep} size="lg">
                        Siguiente
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>}

              {/* Step 2: Contact Data */}
              {step === 2 && <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <User className="h-6 w-6 text-primary" />
                      <CardTitle>Datos del Responsable</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <FormField control={form.control} name="contact_name" render={({
                  field
                }) => <FormItem>
                          <FormLabel>Nombre y Apellidos *</FormLabel>
                          <FormControl>
                            <Input placeholder="Juan García López" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />

                    <FormField control={form.control} name="contact_role" render={({
                  field
                }) => <FormItem>
                          <FormLabel>Cargo *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecciona tu cargo..." />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {CONTACT_ROLES.map(r => <SelectItem key={r.value} value={r.value}>{r.label}</SelectItem>)}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>} />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField control={form.control} name="contact_phone" render={({
                    field
                  }) => <FormItem>
                            <FormLabel>Teléfono de Contacto *</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="612345678" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>} />
                      <FormField control={form.control} name="contact_email" render={({
                    field
                  }) => <FormItem>
                            <FormLabel>Email Personal *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="contacto@ejemplo.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>} />
                    </div>

                    <div className="flex justify-between pt-4">
                      <Button type="button" onClick={prevStep} variant="outline" size="lg">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Anterior
                      </Button>
                      <Button type="button" onClick={nextStep} size="lg">
                        Siguiente
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>}

              {/* Step 3: Additional Info & Confirmation */}
              {step === 3 && <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Settings className="h-6 w-6 text-primary" />
                      <CardTitle>Información Adicional y Confirmación</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Additional Info */}
                    <div className="space-y-4">
                      <h3 className="font-medium text-foreground">Información de la clínica (opcional)</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField control={form.control} name="num_veterinarians" render={({
                      field
                    }) => <FormItem>
                              <FormLabel>Número de Veterinarios</FormLabel>
                              <FormControl>
                                <Input type="number" min={1} max={100} placeholder="Ej: 3" {...field} value={field.value ?? ''} onChange={e => field.onChange(e.target.value ? parseInt(e.target.value) : null)} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>} />
                        <FormField control={form.control} name="num_employees" render={({
                      field
                    }) => <FormItem>
                              <FormLabel>Número de Empleados Total</FormLabel>
                              <FormControl>
                                <Input type="number" min={1} max={500} placeholder="Ej: 8" {...field} value={field.value ?? ''} onChange={e => field.onChange(e.target.value ? parseInt(e.target.value) : null)} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>} />
                      </div>

                      <FormField control={form.control} name="current_software" render={({
                    field
                  }) => <FormItem>
                            <FormLabel>Software de Gestión Actual</FormLabel>
                            <FormControl>
                              <Input placeholder="Ej: Qvet, Provet, Veterges, Ninguno" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>} />

                      <FormField control={form.control} name="has_website" render={({
                    field
                  }) => <FormItem className="flex items-center gap-3">
                            <FormControl>
                              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                            <FormLabel className="!mt-0">¿La clínica tiene página web?</FormLabel>
                          </FormItem>} />

                      <FormField control={form.control} name="has_digital_records" render={({
                    field
                  }) => <FormItem>
                            <FormLabel>¿Usa sistema de historia clínica digital?</FormLabel>
                            <FormControl>
                              <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-wrap gap-4">
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="si" id="digital-si" />
                                  <label htmlFor="digital-si">Sí</label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="no" id="digital-no" />
                                  <label htmlFor="digital-no">No</label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="parcialmente" id="digital-parcial" />
                                  <label htmlFor="digital-parcial">Parcialmente</label>
                                </div>
                              </RadioGroup>
                            </FormControl>
                          </FormItem>} />
                    </div>

                    {/* Interested modules */}
                    <div className="space-y-4">
                      <h3 className="font-medium text-foreground">Módulos de interés (opcional)</h3>
                      <FormField control={form.control} name="interested_modules" render={() => <FormItem>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {MODULES.map(module => <FormField key={module.id} control={form.control} name="interested_modules" render={({
                        field
                      }) => <FormItem className="flex items-center gap-3">
                                      <FormControl>
                                        <Checkbox checked={field.value?.includes(module.id)} onCheckedChange={checked => {
                            const current = field.value || [];
                            if (checked) {
                              field.onChange([...current, module.id]);
                            } else {
                              field.onChange(current.filter((v: string) => v !== module.id));
                            }
                          }} />
                                      </FormControl>
                                      <FormLabel className="!mt-0 font-normal">{module.label}</FormLabel>
                                    </FormItem>} />)}
                            </div>
                          </FormItem>} />
                    </div>

                    {/* CONTRACT SECTION */}
                    <div className="space-y-4 pt-4 border-t">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-primary" />
                        <h3 className="font-semibold text-foreground">Contrato de Adhesión</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Lee detenidamente el siguiente contrato antes de continuar. Incluye las condiciones 
                        económicas (190€/mes durante 6 meses) y la prórroga automática en caso de concesión de la ayuda.
                      </p>
                      <div className="relative">
                        <ContractContent clinicName={form.watch('clinic_name') || '[NOMBRE DE LA CLÍNICA]'} />
                        <div className="flex items-center justify-center gap-1 mt-2 text-xs text-muted-foreground">
                          <ChevronDown className="h-4 w-4 animate-bounce" />
                          <span>Desplázate para leer todo el contrato</span>
                        </div>
                      </div>
                      <FormField control={form.control} name="contract_accepted" render={({
                    field
                  }) => <FormItem className="flex items-start gap-3 bg-primary/5 p-4 rounded-lg border border-primary/20">
                            <FormControl>
                              <Checkbox checked={field.value} onCheckedChange={field.onChange} className="mt-0.5" />
                            </FormControl>
                            <div className="flex-1">
                              <FormLabel className="!mt-0 font-medium">
                                He leído y acepto íntegramente el CONTRATO DE ADHESIÓN al Espacio de Datos Federado *
                              </FormLabel>
                              <FormDescription className="text-xs mt-1">
                                Incluye la aceptación de las 7 cláusulas del contrato y las condiciones de financiación.
                              </FormDescription>
                              <FormMessage />
                            </div>
                          </FormItem>} />
                    </div>

                    {/* ACCEPTANCE ACT SECTION */}
                    <div className="space-y-4 pt-4 border-t">
                      <div className="flex items-center gap-3">
                        <ScrollText className="h-5 w-5 text-primary" />
                        <h3 className="font-semibold text-foreground">Acta de Entrega y Conformidad</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Este documento certifica la recepción del servicio y activa irrevocablemente la financiación.
                      </p>
                      <div className="relative">
                        <AcceptanceActContent clinicName={form.watch('clinic_name') || '[NOMBRE DE LA CLÍNICA]'} contactName={form.watch('contact_name') || '[NOMBRE DEL REPRESENTANTE]'} />
                        <div className="flex items-center justify-center gap-1 mt-2 text-xs text-muted-foreground">
                          <ChevronDown className="h-4 w-4 animate-bounce" />
                          <span>Desplázate para leer todo el documento</span>
                        </div>
                      </div>
                      <FormField control={form.control} name="acceptance_act_accepted" render={({
                    field
                  }) => <FormItem className="flex items-start gap-3 bg-amber-50 p-4 rounded-lg border border-amber-200">
                            <FormControl>
                              <Checkbox checked={field.value} onCheckedChange={field.onChange} className="mt-0.5" />
                            </FormControl>
                            <div className="flex-1">
                              <FormLabel className="!mt-0 font-medium text-amber-900">
                                Acepto el ACTA DE ENTREGA Y CONFORMIDAD *
                              </FormLabel>
                              <FormDescription className="text-xs mt-1 text-amber-700">
                                Al marcar esta casilla, certifico la recepción del servicio y autorizo la activación de la financiación.
                              </FormDescription>
                              <FormMessage />
                            </div>
                          </FormItem>} />
                    </div>

                    {/* OTHER CONSENTS */}
                    <div className="space-y-4 pt-4 border-t">
                      <h3 className="font-medium text-foreground">Consentimientos Adicionales</h3>
                      
                      <FormField control={form.control} name="privacy_accepted" render={({
                    field
                  }) => <FormItem className="flex items-start gap-3">
                            <FormControl>
                              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                            <div>
                              <FormLabel className="!mt-0">
                                Acepto la <Link to="/legal" className="text-primary underline">política de privacidad</Link> *
                              </FormLabel>
                              <FormMessage />
                            </div>
                          </FormItem>} />

                      <FormField control={form.control} name="terms_accepted" render={({
                    field
                  }) => <FormItem className="flex items-start gap-3">
                            <FormControl>
                              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                            <div>
                              <FormLabel className="!mt-0">
                                He leído y acepto las <Link to="/propuesta-kit-espacio-datos" className="text-primary underline">condiciones de participación</Link> *
                              </FormLabel>
                              <FormMessage />
                            </div>
                          </FormItem>} />

                      <FormField control={form.control} name="communications_accepted" render={({
                    field
                  }) => <FormItem className="flex items-start gap-3">
                            <FormControl>
                              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                            <FormLabel className="!mt-0">
                              Acepto recibir comunicaciones sobre las ayudas Kit Espacio de Datos
                            </FormLabel>
                          </FormItem>} />
                    </div>

                    <div className="flex justify-between pt-4">
                      <Button type="button" onClick={prevStep} variant="outline" size="lg">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Anterior
                      </Button>
                      <Button type="submit" size="lg" disabled={isSubmitting}>
                        {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>}
            </form>
          </Form>

          {/* Footer info */}
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>
              Programa financiado por la Unión Europea - NextGenerationEU
            </p>
            <p className="mt-1">Tramitación gestionada por ACCURO TECHNOLOGY.</p>
            <img 
              src={logoGobiernoRedEs} 
              alt="Gobierno de España - Ministerio para la Transformación Digital - Red.es" 
              className="mx-auto mt-4 h-12 object-contain"
            />
          </div>
        </div>
      </main>

      <GlobalFooter />
    </div>;
};
export default KitEspacioDatosInscripcion;
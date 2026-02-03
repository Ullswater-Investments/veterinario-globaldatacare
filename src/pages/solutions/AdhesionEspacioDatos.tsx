import { useState, useEffect, useRef } from 'react';
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
import { 
  Building2, User, Settings, CheckCircle2, ArrowRight, ArrowLeft, Send, Euro, 
  PawPrint, FileText, ScrollText, ChevronDown, Database, Server, Network, 
  ShoppingCart, BrainCircuit, Shield, ArrowUpRight, Blocks, RefreshCcw,
  Lock, Globe, BarChart3, Award
} from 'lucide-react';
import { NavigationControls } from '@/components/ui/NavigationControls';
import ContractContent from '@/components/legal/ContractContent';
import AcceptanceActContent from '@/components/legal/AcceptanceActContent';
import { GlobalFooter } from '@/components/ui/GlobalFooter';
import logoGobiernoRedEs from '@/assets/logo-gobierno-red-es.png';
import logoKitEspacioDatos from '@/assets/logo-kit-espacio-datos.jpg';
import redFederadaActiva from '@/assets/red-federada-activa.png';
import servidoresAislados from '@/assets/servidores-aislados.png';

// Spanish provinces
const PROVINCES = ['Álava', 'Albacete', 'Alicante', 'Almería', 'Asturias', 'Ávila', 'Badajoz', 'Barcelona', 'Burgos', 'Cáceres', 'Cádiz', 'Cantabria', 'Castellón', 'Ciudad Real', 'Córdoba', 'Cuenca', 'Gerona', 'Granada', 'Guadalajara', 'Guipúzcoa', 'Huelva', 'Huesca', 'Islas Baleares', 'Jaén', 'La Coruña', 'La Rioja', 'Las Palmas', 'León', 'Lérida', 'Lugo', 'Madrid', 'Málaga', 'Murcia', 'Navarra', 'Orense', 'Palencia', 'Pontevedra', 'Salamanca', 'Santa Cruz de Tenerife', 'Segovia', 'Sevilla', 'Soria', 'Tarragona', 'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya', 'Zamora', 'Zaragoza', 'Ceuta', 'Melilla'];

const CONTACT_ROLES = [
  { value: 'director', label: 'Director/a' },
  { value: 'gerente', label: 'Gerente' },
  { value: 'veterinario', label: 'Veterinario/a responsable' },
  { value: 'otro', label: 'Otro' }
];

const MODULES = [
  { id: 'fhir', label: 'Gestión Clínica Digital (FHIR)' },
  { id: 'dpp', label: 'Pasaporte Digital de Producto (DPP)' },
  { id: 'wallet', label: 'Wallet para Tutores' },
  { id: 'onehealth', label: 'Investigación One Health' },
  { id: 'procurement', label: 'Abastecimiento Inteligente' },
  { id: 'kpi', label: 'Dashboard KPIs' }
];

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

const AdhesionEspacioDatos = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const formSectionRef = useRef<HTMLDivElement>(null);

  // SEO
  useEffect(() => {
    document.title = "Adhesión al Espacio de Datos de Salud Animal | GLOBAL DATA CARE";
    const descriptionContent = "Conecta tu clínica veterinaria al primer espacio de datos federado de España. ERP, IA y compras coordinadas manteniendo la soberanía de tus datos.";
    let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = descriptionContent;
    
    const canonicalUrl = `${window.location.origin}/solutions/adhesion`;
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonicalUrl;
  }, []);

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
      const { data: result, error } = await supabase.from('kit_inscriptions').insert({
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

  const scrollToForm = () => {
    formSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Success screen
  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4 py-20">
          <Card className="max-w-2xl mx-auto text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-green-100">
                  <CheckCircle2 className="h-12 w-12 text-green-600" />
                </div>
              </div>
              <CardTitle className="text-2xl text-green-700">¡Solicitud de Adhesión Enviada!</CardTitle>
              <CardDescription className="text-lg mt-2">
                Tu referencia: <span className="font-mono font-bold text-primary">{referenceId}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                Hemos recibido tu solicitud de adhesión al Espacio de Datos Federado de Salud Animal. 
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
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <PawPrint className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl">VetSpace-X</span>
            </Link>
            <a 
              href="/documents/Espacios_de_Datos_Elegibles_KTED.pdf#page=22"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <Award className="h-4 w-4" />
              <span className="hidden sm:inline">Ver Homologación Oficial</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </header>

      <main>
        <NavigationControls />
        
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 text-white">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
          <div className="absolute right-0 top-0 h-full w-1/2 rounded-l-full bg-primary/5 blur-3xl" />
          
          <div className="container relative z-10 mx-auto px-6">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/20 px-4 py-2 text-sm font-medium text-primary-foreground">
                <Network className="h-4 w-4" />
                <span>Espacio de Datos Federado de Salud Animal</span>
              </div>
              
              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Adhesión al
                <br />
                <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
                  Ecosistema Federado
                </span>
              </h1>
              
              <p className="mb-8 text-xl leading-relaxed text-slate-300 max-w-2xl mx-auto">
                Conecta tu clínica veterinaria al primer espacio de datos de salud animal en España. 
                Mantén la soberanía de tus datos mientras accedes a servicios de valor añadido.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={scrollToForm}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25"
                >
                  Solicitar Adhesión
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <a 
                  href="/documents/Espacios_de_Datos_Elegibles_KTED.pdf#page=22"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    Ver Catálogo Oficial RED.ES
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* QUÉ ES UN ESPACIO DE DATOS FEDERADO */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                ¿Qué es un Espacio de Datos Federado?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Un modelo de compartición de datos donde cada participante mantiene el control total de su información. 
                Los datos no se centralizan: viajan los algoritmos, no los registros.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              {/* Modelo Tradicional */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-red-600">
                  <div className="p-2 rounded-full bg-red-100">
                    <Server className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Modelo Tradicional (Centralizado)</h3>
                </div>
                <div className="relative rounded-xl border border-red-200 bg-red-50/50 p-6">
                  <img 
                    src={servidoresAislados} 
                    alt="Servidores aislados - Modelo tradicional"
                    className="w-full h-48 object-contain mb-4"
                  />
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>Tus datos salen de tu infraestructura</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>Dependencia de un proveedor único</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>Riesgos de privacidad y cumplimiento</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Modelo Federado */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-primary">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Network className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Modelo Federado (GLOBAL DATA CARE)</h3>
                </div>
                <div className="relative rounded-xl border border-primary/30 bg-primary/5 p-6">
                  <img 
                    src={redFederadaActiva} 
                    alt="Red Federada Activa - Modelo GLOBAL DATA CARE"
                    className="w-full h-48 object-contain mb-4"
                  />
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Tus datos permanecen en tu clínica</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Algoritmos viajan hacia los datos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Soberanía y cumplimiento RGPD garantizado</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PILARES DEL ESPACIO DE DATOS */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-2">
                Servicios de Valor Añadido
              </p>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Cuatro Pilares del Espacio de Datos
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Al adherirte, accedes a un ecosistema completo de servicios que potencian tu clínica sin renunciar a tu independencia.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* ERP + CRM Federado */}
              <Card className="border-l-4 border-l-emerald-500 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-emerald-100 text-emerald-600">
                      <Database className="h-7 w-7" />
                    </div>
                    <div>
                      <CardTitle>ERP + CRM Federado</CardTitle>
                      <CardDescription>Gestión clínica sincronizada</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Tu sistema de gestión se integra con las mejores prácticas de la red. 
                    Estandarización en historiales clínicos sin perder tu autonomía operativa.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-emerald-600 font-medium">
                    <Blocks className="h-4 w-4" />
                    <span>Interoperabilidad FHIR incluida</span>
                  </div>
                </CardContent>
              </Card>

              {/* Compras Coordinadas */}
              <Card className="border-l-4 border-l-cyan-500 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-cyan-100 text-cyan-600">
                      <ShoppingCart className="h-7 w-7" />
                    </div>
                    <div>
                      <CardTitle>Compras Coordinadas</CardTitle>
                      <CardDescription>Economía de escala</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Negociación colectiva automática con proveedores homologados. 
                    Ahorro de costes en farmacia, equipamiento y consumibles veterinarios.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-cyan-600 font-medium">
                    <RefreshCcw className="h-4 w-4" />
                    <span>Reposición predictiva de stock</span>
                  </div>
                </CardContent>
              </Card>

              {/* IA Federada */}
              <Card className="border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-purple-100 text-purple-600">
                      <BrainCircuit className="h-7 w-7" />
                    </div>
                    <div>
                      <CardTitle>IA Federada</CardTitle>
                      <CardDescription>Inteligencia sin mover datos</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Accede a algoritmos de diagnóstico de primer nivel entrenados con datos de toda la red, 
                    sin que tus registros individuales salgan de tu clínica.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-purple-600 font-medium">
                    <Lock className="h-4 w-4" />
                    <span>Privacy-preserving machine learning</span>
                  </div>
                </CardContent>
              </Card>

              {/* Interoperabilidad */}
              <Card className="border-l-4 border-l-amber-500 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-amber-100 text-amber-600">
                      <Globe className="h-7 w-7" />
                    </div>
                    <div>
                      <CardTitle>Interoperabilidad (FHIR)</CardTitle>
                      <CardDescription>Historiales compartibles</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Historiales clínicos en formato estándar internacional que cualquier clínica de la red 
                    puede interpretar para derivaciones o segundas opiniones.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-amber-600 font-medium">
                    <Shield className="h-4 w-4" />
                    <span>Cumplimiento RGPD y Data Governance Act</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* BENEFICIOS ECONÓMICOS */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-emerald-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-4">
                  <Euro className="h-4 w-4" />
                  <span>Financiación Pública Disponible</span>
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Kit Espacio de Datos 2025
                </h2>
                <p className="text-lg text-muted-foreground">
                  Accede a ayudas europeas de hasta 30.000 € para digitalizar tu clínica veterinaria
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto p-3 rounded-full bg-primary/10 w-fit">
                      <BarChart3 className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-3xl font-bold text-primary">15.000 - 30.000 €</CardTitle>
                    <CardDescription>Subvención según madurez digital</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto p-3 rounded-full bg-primary/10 w-fit">
                      <Euro className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-3xl font-bold text-primary">190 €/mes</CardTitle>
                    <CardDescription>Entrada fraccionada (6 meses)</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto p-3 rounded-full bg-primary/10 w-fit">
                      <FileText className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-3xl font-bold text-primary">Incluida</CardTitle>
                    <CardDescription>Tramitación administrativa</CardDescription>
                  </CardHeader>
                </Card>
              </div>

              <div className="mt-8 text-center">
                <a 
                  href="/documents/Espacios_de_Datos_Elegibles_KTED.pdf#page=22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                >
                  <img 
                    src={logoKitEspacioDatos} 
                    alt="Kit Espacio de Datos"
                    className="h-8 object-contain"
                  />
                  <span>Consultar catálogo oficial de espacios homologados</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FORMULARIO DE ADHESIÓN */}
        <section ref={formSectionRef} className="py-20 bg-background" id="formulario">
          <div className="container mx-auto px-4">
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
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  Formulario de Adhesión
                </h2>
                <p className="text-muted-foreground">
                  Completa los datos para solicitar tu adhesión al Espacio de Datos Federado
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
                  {step === 1 && (
                    <Card>
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <Building2 className="h-6 w-6 text-primary" />
                          <CardTitle>Datos de la Clínica Veterinaria</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <FormField
                          control={form.control}
                          name="clinic_name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nombre de la Clínica *</FormLabel>
                              <FormControl>
                                <Input placeholder="Clínica Veterinaria..." {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="cif"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>CIF/NIF *</FormLabel>
                                <FormControl>
                                  <Input placeholder="B12345678" {...field} className="uppercase" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Teléfono *</FormLabel>
                                <FormControl>
                                  <Input type="tel" placeholder="912345678" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email de la Clínica *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="clinica@ejemplo.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="address"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Dirección Completa *</FormLabel>
                              <FormControl>
                                <Input placeholder="Calle, número, piso..." {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <FormField
                            control={form.control}
                            name="postal_code"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Código Postal *</FormLabel>
                                <FormControl>
                                  <Input placeholder="28001" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="city"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Ciudad *</FormLabel>
                                <FormControl>
                                  <Input placeholder="Madrid" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="province"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Provincia *</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Selecciona..." />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {PROVINCES.map(p => (
                                      <SelectItem key={p} value={p}>{p}</SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="flex justify-end pt-4">
                          <Button type="button" onClick={nextStep} size="lg">
                            Siguiente
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Step 2: Contact Data */}
                  {step === 2 && (
                    <Card>
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <User className="h-6 w-6 text-primary" />
                          <CardTitle>Datos del Responsable</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <FormField
                          control={form.control}
                          name="contact_name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nombre y Apellidos *</FormLabel>
                              <FormControl>
                                <Input placeholder="Juan García López" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="contact_role"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Cargo *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Selecciona tu cargo..." />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {CONTACT_ROLES.map(r => (
                                    <SelectItem key={r.value} value={r.value}>{r.label}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="contact_phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Teléfono de Contacto *</FormLabel>
                                <FormControl>
                                  <Input type="tel" placeholder="612345678" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="contact_email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email Personal *</FormLabel>
                                <FormControl>
                                  <Input type="email" placeholder="contacto@ejemplo.com" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
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
                    </Card>
                  )}

                  {/* Step 3: Additional Info & Confirmation */}
                  {step === 3 && (
                    <Card>
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
                            <FormField
                              control={form.control}
                              name="num_veterinarians"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Número de Veterinarios</FormLabel>
                                  <FormControl>
                                    <Input
                                      type="number"
                                      min={1}
                                      max={100}
                                      placeholder="Ej: 3"
                                      {...field}
                                      value={field.value ?? ''}
                                      onChange={e => field.onChange(e.target.value ? parseInt(e.target.value) : null)}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="num_employees"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Número de Empleados Total</FormLabel>
                                  <FormControl>
                                    <Input
                                      type="number"
                                      min={1}
                                      max={500}
                                      placeholder="Ej: 8"
                                      {...field}
                                      value={field.value ?? ''}
                                      onChange={e => field.onChange(e.target.value ? parseInt(e.target.value) : null)}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <FormField
                            control={form.control}
                            name="current_software"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Software de Gestión Actual</FormLabel>
                                <FormControl>
                                  <Input placeholder="Ej: Qvet, Provet, Veterges, Ninguno" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="has_website"
                            render={({ field }) => (
                              <FormItem className="flex items-center gap-3">
                                <FormControl>
                                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                </FormControl>
                                <FormLabel className="!mt-0">¿La clínica tiene página web?</FormLabel>
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="has_digital_records"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>¿Usa sistema de historia clínica digital?</FormLabel>
                                <FormControl>
                                  <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-wrap gap-4"
                                  >
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
                              </FormItem>
                            )}
                          />
                        </div>

                        {/* Interested modules */}
                        <div className="space-y-4">
                          <h3 className="font-medium text-foreground">Módulos de interés (opcional)</h3>
                          <FormField
                            control={form.control}
                            name="interested_modules"
                            render={() => (
                              <FormItem>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                  {MODULES.map(module => (
                                    <FormField
                                      key={module.id}
                                      control={form.control}
                                      name="interested_modules"
                                      render={({ field }) => (
                                        <FormItem className="flex items-center gap-3">
                                          <FormControl>
                                            <Checkbox
                                              checked={field.value?.includes(module.id)}
                                              onCheckedChange={checked => {
                                                const current = field.value || [];
                                                if (checked) {
                                                  field.onChange([...current, module.id]);
                                                } else {
                                                  field.onChange(current.filter((v: string) => v !== module.id));
                                                }
                                              }}
                                            />
                                          </FormControl>
                                          <FormLabel className="!mt-0 font-normal">{module.label}</FormLabel>
                                        </FormItem>
                                      )}
                                    />
                                  ))}
                                </div>
                              </FormItem>
                            )}
                          />
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
                          <FormField
                            control={form.control}
                            name="contract_accepted"
                            render={({ field }) => (
                              <FormItem className="flex items-start gap-3 bg-primary/5 p-4 rounded-lg border border-primary/20">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                    className="mt-0.5"
                                  />
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
                              </FormItem>
                            )}
                          />
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
                            <AcceptanceActContent
                              clinicName={form.watch('clinic_name') || '[NOMBRE DE LA CLÍNICA]'}
                              contactName={form.watch('contact_name') || '[NOMBRE DEL REPRESENTANTE]'}
                            />
                            <div className="flex items-center justify-center gap-1 mt-2 text-xs text-muted-foreground">
                              <ChevronDown className="h-4 w-4 animate-bounce" />
                              <span>Desplázate para leer todo el documento</span>
                            </div>
                          </div>
                          <FormField
                            control={form.control}
                            name="acceptance_act_accepted"
                            render={({ field }) => (
                              <FormItem className="flex items-start gap-3 bg-amber-50 p-4 rounded-lg border border-amber-200">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                    className="mt-0.5"
                                  />
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
                              </FormItem>
                            )}
                          />
                        </div>

                        {/* OTHER CONSENTS */}
                        <div className="space-y-4 pt-4 border-t">
                          <h3 className="font-medium text-foreground">Consentimientos Adicionales</h3>
                          
                          <FormField
                            control={form.control}
                            name="privacy_accepted"
                            render={({ field }) => (
                              <FormItem className="flex items-start gap-3">
                                <FormControl>
                                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                </FormControl>
                                <div>
                                  <FormLabel className="!mt-0">
                                    Acepto la <Link to="/legal" className="text-primary underline">política de privacidad</Link> *
                                  </FormLabel>
                                  <FormMessage />
                                </div>
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="terms_accepted"
                            render={({ field }) => (
                              <FormItem className="flex items-start gap-3">
                                <FormControl>
                                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                </FormControl>
                                <div>
                                  <FormLabel className="!mt-0">
                                    He leído y acepto las <Link to="/propuesta-kit-espacio-datos" className="text-primary underline">condiciones de participación</Link> *
                                  </FormLabel>
                                  <FormMessage />
                                </div>
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="communications_accepted"
                            render={({ field }) => (
                              <FormItem className="flex items-start gap-3">
                                <FormControl>
                                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                </FormControl>
                                <FormLabel className="!mt-0">
                                  Acepto recibir comunicaciones sobre las ayudas Kit Espacio de Datos
                                </FormLabel>
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="flex justify-between pt-4">
                          <Button type="button" onClick={prevStep} variant="outline" size="lg">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Anterior
                          </Button>
                          <Button type="submit" size="lg" disabled={isSubmitting}>
                            {isSubmitting ? 'Enviando...' : 'Enviar Solicitud de Adhesión'}
                            <Send className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )}
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
          </div>
        </section>
      </main>

      <GlobalFooter />
    </div>
  );
};

export default AdhesionEspacioDatos;

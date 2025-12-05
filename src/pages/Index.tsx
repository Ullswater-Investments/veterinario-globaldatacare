import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { GlobalFooter } from '@/components/ui/GlobalFooter';

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: 'Clínicas',
      subtitle: 'Servicios Cloud Federados',
      description:
        'Conecta tu PMS local a un espacio de datos europeo sin perder la soberanía del dato. Accede a IA, interoperabilidad y compras coordinadas como servicio.',
      Icon: ArrowRight,
    },
    {
      title: 'Industria',
      subtitle: 'Pasaporte Digital de Producto',
      description:
        'Digitaliza implantes, biomateriales y dispositivos con DPP compatibles con MDR. Trazabilidad total y recomendaciones post-mercado basadas en datos reales.',
      Icon: ArrowRight,
    },
    {
      title: 'Paciente',
      subtitle: 'Wallet & Gemelo Digital 3D',
      description:
        'Ofrece a tus pacientes control total sobre su historial, facturas y consentimiento de acceso. Experiencia móvil alineada con las nuevas generaciones digitales.',
      Icon: ArrowRight,
    },
    {
      title: 'Investigación',
      subtitle: 'Marketplace de Datos Clínicos',
      description:
        'Convierte tus datos anonimizados en un activo que financia investigación e innovación sin comprometer la privacidad de tus pacientes.',
      Icon: ArrowRight,
    },
    {
      title: 'Compras',
      subtitle: 'Abastecimiento Predictivo',
      description:
        'Agrega la demanda de múltiples clínicas, negocia como un gran grupo y automatiza pedidos según la agenda real de tratamientos.',
      Icon: ArrowRight,
    },
    {
      title: 'Dirección',
      subtitle: 'KPI Clínicas e Inteligencia Operativa',
      description:
        'Un cockpit que une resultados clínicos, experiencia del paciente y rentabilidad en un único panel accionable.',
      Icon: ArrowRight,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <main className="flex-1">
        <section className="pt-16 pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-3">
                ACCURO TECHNOLOGY · GLOBAL DATA CARE
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Crea el PRIMER Espacio de Datos Federado de Odontología y Salud Bucal de Europa
              </h1>
              <p className="text-lg text-slate-600 mb-6">
                Transforma tu red de clínicas dentales en un ecosistema interoperable: IA federada, pasaportes
                digitales, compras coordinadas y wallet paciente, todo bajo un estándar europeo de datos de salud.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <button
                  onClick={() => navigate('/consulting/technical-proposal')}
                  className="inline-flex items-center px-5 py-3 rounded-full bg-blue-600 text-white text-sm font-semibold shadow-lg hover:bg-blue-700 transition"
                >
                  Ver Propuesta Técnica &amp; Arquitectura
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                <button
                  onClick={() => navigate('/business/models')}
                  className="inline-flex items-center px-5 py-3 rounded-full bg-white text-slate-800 text-sm font-semibold border border-slate-200 hover:bg-slate-50 transition"
                >
                  Explorar Casos de Negocio
                </button>
              </div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-xs text-blue-700 font-medium">
                Únete a la red europea de Datos de Salud Dental
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white border-t border-b border-slate-100">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              {features.map(({ title, subtitle, description, Icon }, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-sm font-medium text-blue-600 mb-2">{subtitle}</p>
                  <p className="text-slate-600">{description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button
                size="lg"
                onClick={() => navigate('/tech')}
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                Explorar Arquitectura Técnica
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-slate-400">ACCURO TECHNOLOGY</div>
              <div className="flex gap-6 text-sm">
                <Link to="/consulting/technical-proposal" className="text-slate-400 hover:text-white transition">
                  Whitepaper Técnico · ACCURO TECHNOLOGY / Global Data Care
                </Link>
                <Link to="/business/models" className="text-slate-400 hover:text-white transition">
                  Documento Casos de Negocio
                </Link>
                <a href="#" className="text-slate-400 hover:text-white transition">
                  Aviso Legal
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>

      <GlobalFooter />
    </div>
  );
};

export default Landing;

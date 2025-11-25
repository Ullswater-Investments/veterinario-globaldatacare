import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Network, 
  Lock, 
  Database,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';

const TechIndex = () => {
  const navigate = useNavigate();

  const techSections = [
    {
      icon: Network,
      title: 'Interoperabilidad',
      subtitle: 'HL7 FHIR',
      description: 'Hablamos el idioma universal de la salud. Descubre cómo transformamos datos legacy en recursos FHIR estandarizados para conectar clínicas con hospitales.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      link: '/tech/interoperability'
    },
    {
      icon: Lock,
      title: 'Soberanía',
      subtitle: 'IDS / Gaia-X',
      description: 'Tus datos nunca salen de tu nodo sin contrato. Explora el sistema de políticas ODRL y contratos inteligentes que garantizan el control total.',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      link: '/tech/sovereignty'
    },
    {
      icon: Database,
      title: 'Trazabilidad',
      subtitle: 'Blockchain',
      description: 'Seguridad inmutable para implantes y prótesis. Verifica la autenticidad de cualquier material desde la fábrica hasta el paciente con blockchain.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      link: '/tech/traceability'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-6">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al Inicio
        </Button>
      </div>

      {/* Hero */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
            Arquitectura de Confianza OralSpace-X
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Tecnologías que garantizan interoperabilidad, soberanía y trazabilidad en el ecosistema dental europeo
          </p>
        </div>
      </section>

      {/* Grid de Navegación */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto space-y-8">
          {techSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <Link to={section.link} key={index}>
                <Card 
                  className={`transition-all hover:shadow-2xl hover:-translate-y-2 cursor-pointer border-2 ${section.borderColor} ${section.bgColor}`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-6">
                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white border-2 ${section.borderColor}`}>
                          <Icon className={`h-8 w-8 ${section.color}`} />
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <CardTitle className="text-2xl">{section.title}</CardTitle>
                            <span className={`text-sm font-medium ${section.color}`}>
                              {section.subtitle}
                            </span>
                          </div>
                          <CardDescription className="text-base max-w-3xl">
                            {section.description}
                          </CardDescription>
                        </div>
                      </div>
                      <ArrowRight className={`h-6 w-6 ${section.color} flex-shrink-0`} />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-medium ${section.color}`}>
                        Explorar Demo Técnica
                      </span>
                      <ArrowRight className={`h-4 w-4 ${section.color}`} />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              ¿Listo para ver el sistema en acción?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Accede al modo demo completo y explora todas las funcionalidades del ecosistema
            </p>
            <Button 
              size="lg"
              onClick={() => navigate('/auth')}
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 h-auto"
            >
              Acceder al Ecosistema
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechIndex;

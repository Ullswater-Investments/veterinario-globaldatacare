import BusinessCaseLayout from '@/components/business/BusinessCaseLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { esgCertifications } from '@/lib/mockData';
import { Leaf, Award, TrendingDown, Calendar, Shield } from 'lucide-react';

const ESGCertification = () => {
  const sortedCerts = [...esgCertifications].sort((a, b) => b.score - a.score);
  const avgScore = Math.round(esgCertifications.reduce((sum, c) => sum + c.score, 0) / esgCertifications.length);
  
  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Platinum':
        return 'bg-gradient-to-r from-slate-400 to-slate-200 text-slate-900 border-slate-300';
      case 'Gold':
        return 'bg-gradient-to-r from-yellow-400 to-yellow-200 text-yellow-900 border-yellow-300';
      case 'Silver':
        return 'bg-gradient-to-r from-gray-400 to-gray-200 text-gray-900 border-gray-300';
      case 'Bronze':
        return 'bg-gradient-to-r from-orange-400 to-orange-200 text-orange-900 border-orange-300';
      default:
        return '';
    }
  };

  const getBadgeIcon = (badge: string) => {
    const size = badge === 'Platinum' ? 'h-8 w-8' : badge === 'Gold' ? 'h-7 w-7' : 'h-6 w-6';
    return <Award className={size} />;
  };

  return (
    <BusinessCaseLayout
      caseNumber={9}
      title="Certificación ESG & Sostenibilidad"
      subtitle="Dashboard Corporativo de Sostenibilidad - Auditoría ESG automática y Token Verde"
      keyMetric={{
        label: 'ARR Proyectado',
        value: '180.000€',
        trend: `${esgCertifications.length * 30} clientes estimados`
      }}
    >
      <div className="space-y-8">
        {/* Sustainability Ranking */}
        <Card className="border-2 border-green-600 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-800 dark:text-green-200">
              <Leaf className="h-5 w-5" />
              Ranking de Sostenibilidad
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sortedCerts.map((cert, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-6 border-2 rounded-lg bg-white dark:bg-slate-900 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="text-center min-w-[60px]">
                      <div className="text-3xl font-bold text-muted-foreground">#{index + 1}</div>
                    </div>
                    
                    <div className={`p-3 rounded-lg ${getBadgeColor(cert.badge)}`}>
                      {getBadgeIcon(cert.badge)}
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1">{cert.entity}</h3>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <TrendingDown className="h-4 w-4 text-green-600" />
                          CO₂ {cert.co2Reduction}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          Renovación: {cert.renewalDate}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground mb-1">ESG Score</div>
                      <div className="text-4xl font-bold text-green-600">{cert.score}</div>
                    </div>
                    
                    <Badge className={`${getBadgeColor(cert.badge)} text-lg px-4 py-2`}>
                      {cert.badge}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Metrics */}
            <div className="mt-6 grid md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-white dark:bg-slate-900 rounded-lg border">
                <div className="text-2xl font-bold">{avgScore}</div>
                <div className="text-sm text-muted-foreground">Score Promedio</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-slate-900 rounded-lg border">
                <div className="text-2xl font-bold text-yellow-600">
                  {esgCertifications.filter(c => c.badge === 'Gold' || c.badge === 'Platinum').length}
                </div>
                <div className="text-sm text-muted-foreground">Gold+</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-slate-900 rounded-lg border">
                <div className="text-2xl font-bold text-green-600">-8.6%</div>
                <div className="text-sm text-muted-foreground">CO₂ Promedio</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-slate-900 rounded-lg border">
                <div className="text-2xl font-bold">{esgCertifications.length}</div>
                <div className="text-sm text-muted-foreground">Certificadas</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Revenue Calculator */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Calculadora de Ingresos Recurrentes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-muted rounded-lg">
                  <div className="text-sm text-muted-foreground mb-2">Clientes Actuales</div>
                  <div className="text-4xl font-bold mb-2">{esgCertifications.length * 30}</div>
                  <div className="text-xs text-muted-foreground">organizaciones certificadas</div>
                </div>
                <div className="p-6 bg-muted rounded-lg">
                  <div className="text-sm text-muted-foreground mb-2">Fee Anual por Cliente</div>
                  <div className="text-4xl font-bold mb-2">1,200€</div>
                  <div className="text-xs text-muted-foreground">auditoría + certificado</div>
                </div>
                <div className="p-6 bg-primary/10 border-2 border-primary/20 rounded-lg">
                  <div className="text-sm text-muted-foreground mb-2">ARR Total</div>
                  <div className="text-4xl font-bold text-primary mb-2">180,000€</div>
                  <div className="text-xs text-green-600 font-semibold">+24% YoY</div>
                </div>
              </div>

              <div className="p-6 bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-900 rounded-lg">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-green-600" />
                  Proyección a 3 Años
                </h3>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg text-muted-foreground mb-1">2025</div>
                    <div className="text-2xl font-bold text-green-600">180k€</div>
                  </div>
                  <div>
                    <div className="text-lg text-muted-foreground mb-1">2026</div>
                    <div className="text-2xl font-bold text-green-600">360k€</div>
                  </div>
                  <div>
                    <div className="text-lg text-muted-foreground mb-1">2027</div>
                    <div className="text-2xl font-bold text-green-600">720k€</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Green Certificate Sample */}
        <Card className="border-2 border-green-600">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-green-600" />
              Certificado Verde Generado Dinámicamente
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="max-w-3xl mx-auto p-8 border-4 border-green-600 rounded-lg bg-gradient-to-br from-white to-green-50 dark:from-slate-900 dark:to-green-950 shadow-2xl">
              <div className="text-center mb-6">
                <div className="inline-block p-4 bg-green-600 rounded-full mb-4">
                  <Leaf className="h-12 w-12 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-2">OralSpace-X ESG Certification</h2>
                <p className="text-muted-foreground">Certificado de Sostenibilidad Corporativa</p>
              </div>

              <div className="border-t-2 border-b-2 border-green-600 py-6 mb-6">
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold">{sortedCerts[0].entity}</h3>
                  <p className="text-muted-foreground">ha alcanzado el nivel</p>
                </div>
                <div className="flex justify-center mb-4">
                  <Badge className={`${getBadgeColor(sortedCerts[0].badge)} text-3xl px-8 py-3`}>
                    {getBadgeIcon(sortedCerts[0].badge)}
                    <span className="ml-2">{sortedCerts[0].badge}</span>
                  </Badge>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-green-600 mb-2">{sortedCerts[0].score}/100</div>
                  <p className="text-sm text-muted-foreground">ESG Performance Score</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 text-sm mb-6">
                <div>
                  <span className="text-muted-foreground">Reducción CO₂:</span>
                  <span className="font-bold ml-2 text-green-600">{sortedCerts[0].co2Reduction}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Válido hasta:</span>
                  <span className="font-bold ml-2">{sortedCerts[0].renewalDate}</span>
                </div>
              </div>

              <div className="text-center text-xs text-muted-foreground border-t pt-4">
                Certificado blockchain: 0x9f8e...d4a2 | Verificable en oralspace-x.eu/verify
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Business Model */}
        <Card className="bg-slate-100 dark:bg-slate-900 border-2">
          <CardHeader>
            <CardTitle>Modelo de Negocio</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">💰 Fee Anual de Auditoría</h3>
                <p className="text-sm text-muted-foreground">
                  1.200€ por entidad certificada. Incluye: auditoría automática de consumos 
                  energéticos, gestión de residuos, emisión de certificado renovable anualmente.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">🌍 Cumplimiento CSRD</h3>
                <p className="text-sm text-muted-foreground">
                  Directiva UE de reporting sostenibilidad (CSRD) obliga a PYMEs desde 2025. 
                  OralSpace-X automatiza compliance, evitando sanciones de hasta 50k€.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">🪙 Token Verde Blockchain</h3>
                <p className="text-sm text-muted-foreground">
                  Certificado se emite como NFT en blockchain. Inmutable, trazable, 
                  auditable por terceros. Genera confianza en clientes B2B.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">📊 Ventaja Competitiva</h3>
                <p className="text-sm text-muted-foreground">
                  Clínicas certificadas ESG ganan licitaciones públicas (requisito en 40% de concursos). 
                  ROI: coste de certificación vs. contratos ganados = 1:15.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </BusinessCaseLayout>
  );
};

export default ESGCertification;

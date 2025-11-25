import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Beaker, Search, Leaf, AlertTriangle, CheckCircle, MapPin, Zap, Dna, Shield, CreditCard, Activity } from 'lucide-react';
import { 
  esgMetrics, 
  microbiomeData, 
  forensicMatch, 
  brushingTelemetry, 
  bnplScoring, 
  mouthguardTelemetry 
} from '@/lib/mockData';

export default function InnovationLabs() {
  const [showNeurological, setShowNeurological] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState<any>(null);
  const [accessApproved, setAccessApproved] = useState(false);
  const [forensicSearched, setForensicSearched] = useState(false);

  const handleCorrelation = () => {
    setShowNeurological(true);
  };

  const handleForensicSearch = () => {
    setForensicSearched(true);
  };

  const handleAccessApproval = () => {
    setAccessApproved(true);
  };

  const getMaxValue = (arr: { value: number }[]) => Math.max(...arr.map(item => item.value));

  return (
    <div className="space-y-8">
      {/* Hero */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-purple-100 rounded-lg">
            <Beaker className="h-6 w-6 text-purple-600" />
          </div>
          <h1 className="text-3xl font-bold text-slate-800">OralSpace-X Labs (Beta)</h1>
        </div>
        <p className="text-slate-500">Sostenibilidad, Genómica, Forense y Fintech. El futuro de la plataforma.</p>
      </div>

      <Tabs defaultValue="eco" className="w-full">
        <TabsList className="grid w-full grid-cols-5 mb-8">
          <TabsTrigger value="eco" className="flex items-center gap-2">
            <Leaf className="h-4 w-4" />
            Eco-Clinic
          </TabsTrigger>
          <TabsTrigger value="bio" className="flex items-center gap-2">
            <Dna className="h-4 w-4" />
            Bio-Genomics
          </TabsTrigger>
          <TabsTrigger value="forensic" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Forensics DVI
          </TabsTrigger>
          <TabsTrigger value="insurtech" className="flex items-center gap-2">
            <CreditCard className="h-4 w-4" />
            InsurTech
          </TabsTrigger>
          <TabsTrigger value="sports" className="flex items-center gap-2">
            <Activity className="h-4 w-4" />
            Sports
          </TabsTrigger>
        </TabsList>

        {/* Tab 1: Eco-Clinic */}
        <TabsContent value="eco" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Energy Dashboard */}
            <Card className="border-green-200 bg-gradient-to-br from-green-50 to-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-green-600" />
                  Consumo Energético
                </CardTitle>
                <CardDescription>Monitoreo en tiempo real vs. benchmark ciudad</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-amber-900">Consumo Actual</span>
                    <Badge className="bg-amber-600 text-white">
                      {esgMetrics.energyConsumption.benchmark}
                    </Badge>
                  </div>
                  <p className="text-3xl font-bold text-amber-900">
                    {esgMetrics.energyConsumption.value} {esgMetrics.energyConsumption.unit}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-slate-700">Histórico Semanal</h4>
                  {esgMetrics.energyHistory.map((day) => (
                    <div key={day.day}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-600">{day.day}</span>
                        <span className="font-medium">{day.consumption} kWh</span>
                      </div>
                      <Progress value={(day.consumption / 500) * 100} className="h-2" />
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm font-semibold text-green-900">
                      Token Verde Blockchain
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-green-600">{esgMetrics.greenTokens} Tokens</p>
                  <p className="text-xs text-slate-500 mt-1">Verificados en cadena pública</p>
                </div>
              </CardContent>
            </Card>

            {/* Waste Traceability */}
            <Card className="border-red-200 bg-gradient-to-br from-red-50 to-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                  Trazabilidad de Residuos Peligrosos
                </CardTitle>
                <CardDescription>Certificados de reciclaje blockchain</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {esgMetrics.wasteLog.map((waste, index) => (
                    <div 
                      key={index}
                      className="p-4 bg-white border-2 border-slate-200 rounded-lg"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="font-semibold text-slate-900">{waste.type}</p>
                          <p className="text-sm text-slate-600">Peso: {waste.weight}</p>
                        </div>
                        <Badge className="bg-green-600 text-white">{waste.status}</Badge>
                      </div>
                      <div className="mt-3 p-2 bg-slate-100 rounded">
                        <p className="text-xs text-slate-600">Certificado:</p>
                        <p className="font-mono text-xs text-green-700 mt-1">{waste.disposalCert}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-sm text-green-900">
                    <strong>Huella de Carbono Diaria:</strong> {esgMetrics.carbonFootprint.daily}
                  </p>
                  <Badge className="mt-2 bg-amber-600 text-white">{esgMetrics.carbonFootprint.status}</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Tab 2: Bio-Genomics */}
        <TabsContent value="bio" className="space-y-6">
          <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Dna className="h-5 w-5 text-purple-600" />
                Análisis de Microbioma Oral
              </CardTitle>
              <CardDescription>
                Correlación con condiciones neurológicas y cardiovasculares
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-white border-2 border-purple-200 rounded-lg">
                  <p className="text-sm text-slate-600 mb-1">Paciente ID</p>
                  <p className="text-lg font-bold text-slate-900">{microbiomeData.patientId}</p>
                  <p className="text-xs text-slate-500 mt-1">Análisis: {microbiomeData.analysisDate}</p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  Patógenos Detectados
                </h3>
                <div className="space-y-3">
                  {microbiomeData.pathogens.map((pathogen, index) => (
                    <div 
                      key={index}
                      className={`p-4 rounded-lg border-2 ${
                        pathogen.level === 'High' ? 'bg-red-50 border-red-300' :
                        pathogen.level === 'Medium' ? 'bg-amber-50 border-amber-300' :
                        'bg-slate-50 border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-slate-900">{pathogen.name}</span>
                        <Badge className={
                          pathogen.level === 'High' ? 'bg-red-600' :
                          pathogen.level === 'Medium' ? 'bg-amber-600' :
                          'bg-slate-600'
                        }>
                          {pathogen.level}
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-700">
                        <strong>Asociación de Riesgo:</strong> {pathogen.riskAssociation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t">
                <div className="p-4 bg-blue-50 border-2 border-blue-300 rounded-lg">
                  <div className="flex items-start gap-3 mb-4">
                    <Shield className="h-6 w-6 text-blue-600 mt-0.5" />
                    <div className="flex-1">
                      <p className="font-semibold text-blue-900">Solicitud de Acceso Cross-Domain</p>
                      <p className="text-sm text-blue-800 mt-1">
                        {microbiomeData.crossDomainAccess.requester}
                      </p>
                      <p className="text-xs text-blue-700 mt-2">
                        Motivo: {microbiomeData.crossDomainAccess.reason}
                      </p>
                    </div>
                  </div>
                  
                  {!accessApproved ? (
                    <Button 
                      onClick={handleAccessApproval}
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      Aprobar Acceso Cross-Domain
                    </Button>
                  ) : (
                    <div className="p-3 bg-green-50 border border-green-300 rounded-lg">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="text-sm font-semibold text-green-900">
                          Acceso Aprobado - Datos compartidos con cifrado E2E
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab 3: Forensics DVI */}
        <TabsContent value="forensic" className="space-y-6">
          <Card className="border-slate-300 bg-gradient-to-br from-slate-100 to-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-slate-700" />
                Sistema Forense DVI (Disaster Victim Identification)
              </CardTitle>
              <CardDescription>
                Búsqueda de implantes dentales para identificación post-mortem
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 bg-slate-900 rounded-lg text-green-400 font-mono text-sm">
                <p className="mb-2">INTERPOL DENTAL DATABASE v4.2</p>
                <p className="text-xs text-green-300">Searching global implant registry...</p>
                <p className="text-xs text-slate-500 mt-2">Case ID: {forensicMatch.policeCaseId}</p>
              </div>

              <div className="space-y-3">
                <div className="flex gap-2">
                  <Input
                    placeholder="Buscar parámetros post-mortem (ej: Implant Straumann #LOTE-X)"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="font-mono"
                  />
                  <Button 
                    onClick={handleForensicSearch}
                    variant="outline"
                    size="icon"
                  >
                    <Search className="h-4 w-4" />
                  </Button>
                </div>

                {forensicSearched && (
                  <div className="animate-fade-in">
                    <div className="p-4 bg-green-50 border-2 border-green-300 rounded-lg space-y-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-6 w-6 text-green-600" />
                        <span className="font-bold text-green-900 text-lg">
                          {forensicMatch.status}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-slate-600 mb-1">Ubicación</p>
                          <p className="font-semibold text-slate-900">{forensicMatch.location}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-600 mb-1">Confianza</p>
                          <p className="font-semibold text-green-700">{forensicMatch.matchConfidence}%</p>
                        </div>
                      </div>

                      <div className="p-3 bg-slate-100 rounded">
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-red-600 mt-0.5 animate-pulse" />
                          <div>
                            <p className="text-xs text-slate-600">Coordenadas</p>
                            <p className="font-mono text-sm text-slate-900">
                              {forensicMatch.coordinates.lat.toFixed(4)}°N, {forensicMatch.coordinates.lng.toFixed(4)}°W
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-slate-300">
                        <p className="text-xs text-slate-600 mb-2">Hash de Identidad (Ofuscado)</p>
                        <p className="font-mono text-xs text-slate-700 bg-slate-100 p-2 rounded break-all">
                          {forensicMatch.patientHash}
                        </p>
                        <div className="mt-3 p-3 bg-blue-50 border border-blue-300 rounded-lg">
                          <p className="text-xs text-blue-900">
                            <strong>Privacidad:</strong> Identidad del paciente protegida bajo Smart Contract Judicial. 
                            Solo autoridades con orden pueden descifrar.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab 4: InsurTech */}
        <TabsContent value="insurtech" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Pay-as-you-brush */}
            <Card className="border-cyan-200 bg-gradient-to-br from-cyan-50 to-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-cyan-600" />
                  Pay-as-you-Brush
                </CardTitle>
                <CardDescription>Prima dinámica basada en hábitos saludables</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="p-3 bg-red-50 rounded-lg">
                    <p className="text-xs text-red-700">Prima Actual</p>
                    <p className="text-2xl font-bold text-red-900">{bnplScoring.monthlyPremium.current}€</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <p className="text-xs text-green-700">Prima Optimizada</p>
                    <p className="text-2xl font-bold text-green-900">{bnplScoring.monthlyPremium.optimized}€</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-slate-700">Calidad de Cepillado (7 días)</h4>
                  {brushingTelemetry.map((day) => (
                    <div key={day.day} className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-600">{day.day}</span>
                        <div className="flex gap-3">
                          <span className="font-medium text-cyan-700">{day.score}/100</span>
                          <span className="text-slate-500">{day.duration}</span>
                        </div>
                      </div>
                      <Progress 
                        value={day.score} 
                        className={`h-2 ${day.score >= 90 ? 'bg-green-100' : 'bg-amber-100'}`}
                      />
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t">
                  <p className="text-sm text-slate-700">
                    Mejora tus hábitos y <strong className="text-green-700">ahorra hasta 7€/mes</strong>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* BNPL Scoring */}
            <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-blue-600" />
                  BNPL Scoring Federado
                </CardTitle>
                <CardDescription>Crédito instantáneo para tratamientos dentales</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-6 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg text-white">
                  <p className="text-sm opacity-90 mb-2">Crédito Pre-aprobado</p>
                  <p className="text-4xl font-bold">{bnplScoring.preApprovedCredit.toLocaleString()}€</p>
                  <p className="text-xs opacity-80 mt-3">Disponible de inmediato para tratamientos</p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-white border-2 border-slate-200 rounded-lg">
                    <span className="text-sm text-slate-600">Credit Score</span>
                    <span className="text-lg font-bold text-green-700">{bnplScoring.creditScore}</span>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-white border-2 border-slate-200 rounded-lg">
                    <span className="text-sm text-slate-600">Historial de Pago</span>
                    <Badge className="bg-green-600 text-white">{bnplScoring.paymentHistory}</Badge>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-white border-2 border-slate-200 rounded-lg">
                    <span className="text-sm text-slate-600">Fuentes Federadas</span>
                    <span className="text-lg font-bold text-blue-700">{bnplScoring.federatedDataSources}</span>
                  </div>
                </div>

                <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="text-xs text-amber-900">
                    <strong>Privacidad:</strong> Tu scoring se calcula mediante datos federados sin compartir 
                    información personal entre entidades.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Tab 5: Sports Performance */}
        <TabsContent value="sports" className="space-y-6">
          <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-orange-600" />
                Protector Bucal IoT (Sports Performance)
              </CardTitle>
              <CardDescription>
                Monitoreo de impactos y detección de riesgo de conmoción cerebral
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-white border-2 border-orange-200 rounded-lg">
                  <p className="text-xs text-slate-600 mb-1">Atleta</p>
                  <p className="text-lg font-bold text-slate-900">{mouthguardTelemetry.athlete}</p>
                </div>

                <div className="p-4 bg-red-50 border-2 border-red-300 rounded-lg">
                  <p className="text-xs text-red-700 mb-1">Último Impacto</p>
                  <p className="text-3xl font-bold text-red-900">{mouthguardTelemetry.lastImpact}</p>
                </div>

                <div className="p-4 bg-white border-2 border-slate-200 rounded-lg">
                  <p className="text-xs text-slate-600 mb-1">Estado</p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-red-700">{mouthguardTelemetry.timestamp}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-red-100 border-2 border-red-400 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-8 w-8 text-red-600 animate-pulse" />
                  <div>
                    <p className="font-bold text-red-900 text-lg mb-2">
                      Riesgo de Conmoción: {mouthguardTelemetry.concussionRisk}
                    </p>
                    <p className="text-sm text-red-800">
                      Impacto superior a 50G detectado. Protocolo médico activado automáticamente.
                    </p>
                    {mouthguardTelemetry.alertSent && (
                      <div className="mt-3 p-3 bg-green-50 border border-green-300 rounded">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <span className="text-sm font-semibold text-green-900">
                            Alerta enviada al médico del equipo
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-700 mb-3">Historial de Impactos</h3>
                <div className="space-y-2">
                  {mouthguardTelemetry.impactHistory.map((impact, index) => (
                    <div 
                      key={index}
                      className={`p-3 rounded-lg border-2 ${
                        impact.severity === 'High' ? 'bg-red-50 border-red-300' : 'bg-slate-50 border-slate-200'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-sm text-slate-700">{impact.time}</span>
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-slate-900">{impact.force}</span>
                          <Badge className={impact.severity === 'High' ? 'bg-red-600' : 'bg-slate-600'}>
                            {impact.severity}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

    </div>
  );
}

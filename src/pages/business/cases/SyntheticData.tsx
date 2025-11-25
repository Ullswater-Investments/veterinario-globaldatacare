import { useState, useEffect } from 'react';
import BusinessCaseLayout from '@/components/business/BusinessCaseLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { syntheticDatasets } from '@/lib/mockData';
import { Database, Shield, Download, CheckCircle2, Loader2, ShoppingCart } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const SyntheticData = () => {
  const [generatingPatient, setGeneratingPatient] = useState(false);
  const [patientCount, setPatientCount] = useState(9921);

  useEffect(() => {
    const timer = setInterval(() => {
      setGeneratingPatient(true);
      setTimeout(() => {
        setPatientCount(prev => prev + 1);
        setGeneratingPatient(false);
      }, 1500);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const validationData = [
    { metric: 'Edad', real: 45.2, synthetic: 45.1 },
    { metric: 'BMI', real: 26.8, synthetic: 26.7 },
    { metric: 'Presión', real: 128.5, synthetic: 128.6 },
    { metric: 'Colesterol', real: 195.3, synthetic: 195.4 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Ready':
        return 'bg-green-900 text-green-200 border-green-700';
      case 'Generating':
        return 'bg-blue-900 text-blue-200 border-blue-700';
      case 'Sold':
        return 'bg-purple-900 text-purple-200 border-purple-700';
      default:
        return '';
    }
  };

  return (
    <BusinessCaseLayout
      caseNumber={11}
      title="Datos Sintéticos para Pharma"
      subtitle="La Fábrica de Pacientes Virtuales - Estadísticamente idénticos, privadamente seguros"
      keyMetric={{
        label: 'Revenue Potencial',
        value: '200k€',
        trend: `${syntheticDatasets.length} datasets disponibles`
      }}
    >
      <div className="space-y-8">
        {/* Privacy Badge - Always visible */}
        <div className="fixed top-24 right-6 z-50">
          <Badge className="bg-green-900 text-green-200 border-2 border-green-600 px-4 py-2 shadow-lg">
            <Shield className="h-4 w-4 mr-2" />
            Privacy Preserved: k-anonymity & Differential Privacy
          </Badge>
        </div>

        {/* Synthetic Patient Generator */}
        <Card className="border-2 border-green-600 bg-gradient-to-br from-slate-950 to-green-950">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-400">
              <Database className="h-5 w-5" />
              Generador de Pacientes Sintéticos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative h-96 bg-slate-950 rounded-lg border-2 border-green-600 p-8 overflow-hidden">
              {/* Matrix-style background */}
              <div className="absolute inset-0 opacity-10 font-mono text-xs text-green-500 overflow-hidden">
                {Array.from({ length: 50 }).map((_, i) => (
                  <div key={i} className="animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>
                    {Math.random().toString(36).substring(2, 15)}
                  </div>
                ))}
              </div>

              {/* Avatar Visualization */}
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center">
                  <div className={`mb-6 ${generatingPatient ? 'animate-pulse' : ''}`}>
                    <svg viewBox="0 0 100 100" className="w-48 h-48 mx-auto">
                      <circle cx="50" cy="35" r="15" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-500" />
                      <path d="M 30 55 Q 50 45 70 55 L 70 85 Q 50 95 30 85 Z" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-500" />
                      {generatingPatient && (
                        <>
                          <circle cx="50" cy="35" r="15" fill="currentColor" className="text-green-500 opacity-20 animate-ping" />
                          <path d="M 30 55 Q 50 45 70 55 L 70 85 Q 50 95 30 85 Z" fill="currentColor" className="text-green-500 opacity-20 animate-ping" />
                        </>
                      )}
                    </svg>
                  </div>

                  <div className="font-mono space-y-2">
                    {generatingPatient ? (
                      <div className="text-green-400 text-lg animate-pulse">
                        <Loader2 className="h-6 w-6 inline mr-2 animate-spin" />
                        Generando Paciente Sintético #{patientCount}...
                      </div>
                    ) : (
                      <div className="text-green-500 text-lg">
                        <CheckCircle2 className="h-6 w-6 inline mr-2" />
                        Paciente #{patientCount} generado
                      </div>
                    )}
                    <div className="text-green-300 text-sm">
                      Estadísticamente idéntico, privadamente seguro
                    </div>
                    <div className="text-slate-500 text-xs mt-4">
                      k-anonymity: 5 | ε-differential privacy: 0.1
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Dataset Catalog */}
        <Card className="border-2 border-cyan-600 bg-gradient-to-br from-slate-950 to-cyan-950">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-cyan-400">
              <Database className="h-5 w-5" />
              Catálogo de Datasets Sintéticos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {syntheticDatasets.map((dataset) => (
                <div 
                  key={dataset.id}
                  className="p-6 border-2 border-cyan-700 rounded-lg bg-slate-900 hover:bg-slate-800 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <Badge variant="outline" className="mb-2 bg-cyan-950 border-cyan-700 text-cyan-300">
                        {dataset.id}
                      </Badge>
                      <h3 className="text-lg font-semibold text-cyan-100 mb-1">{dataset.name}</h3>
                      <div className="text-sm text-slate-400">
                        {dataset.size} • {dataset.format}
                      </div>
                    </div>
                    <Badge className={getStatusColor(dataset.status)}>
                      {dataset.status}
                    </Badge>
                  </div>

                  {dataset.status === 'Generating' && dataset.progress && (
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-slate-400">Progreso:</span>
                        <span className="text-cyan-400 font-semibold">{dataset.progress}%</span>
                      </div>
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-cyan-500 transition-all animate-pulse"
                          style={{ width: `${dataset.progress}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {dataset.status === 'Sold' && dataset.buyer && (
                    <div className="mb-4 p-3 bg-purple-950 border border-purple-800 rounded">
                      <div className="text-xs text-purple-300">
                        Vendido a: <span className="font-semibold">{dataset.buyer}</span>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                    <div className="text-2xl font-bold text-cyan-400">
                      {dataset.price.toLocaleString()}€
                    </div>
                    {dataset.status === 'Ready' && (
                      <Button className="bg-cyan-600 hover:bg-cyan-700">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Comprar Licencia
                      </Button>
                    )}
                    {dataset.status === 'Generating' && (
                      <Button disabled className="bg-slate-700">
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Generando...
                      </Button>
                    )}
                    {dataset.status === 'Sold' && (
                      <Button disabled className="bg-slate-700">
                        <CheckCircle2 className="h-4 w-4 mr-2" />
                        Vendido
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Validation Chart */}
        <Card className="border-2 border-purple-600 bg-gradient-to-br from-slate-950 to-purple-950">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-purple-400">
              <Download className="h-5 w-5" />
              Validación: Datos Reales vs. Datos Sintéticos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={validationData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="metric" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip 
                    contentStyle={{ background: '#0f172a', border: '1px solid #475569' }}
                    labelStyle={{ color: '#e2e8f0' }}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="real" 
                    name="Datos Reales"
                    stroke="#22c55e" 
                    strokeWidth={3}
                    dot={{ fill: '#22c55e', r: 6 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="synthetic" 
                    name="Datos Sintéticos"
                    stroke="#a855f7" 
                    strokeWidth={3}
                    strokeDasharray="5 5"
                    dot={{ fill: '#a855f7', r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-6 p-6 bg-green-950 border-2 border-green-600 rounded-lg">
              <div className="text-center">
                <div className="text-5xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-green-200">Coincidencia Estadística</div>
                <div className="text-sm text-slate-400 mt-2">
                  Indistinguibles para modelos ML • GDPR-compliant • Zero patient identification risk
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Business Model */}
        <Card className="bg-slate-900 border-2 border-slate-700">
          <CardHeader>
            <CardTitle className="text-slate-200">Modelo de Negocio</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2 text-cyan-400">💰 Venta Directa de Datasets</h3>
                <p className="text-sm text-slate-400">
                  50.000€ por dataset de 10k pacientes sintéticos. Comprado principalmente por 
                  farmacéuticas para entrenar algoritmos de descubrimiento de fármacos.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-purple-400">🔒 Garantía de Privacidad</h3>
                <p className="text-sm text-slate-400">
                  k-anonymity (k=5) + ε-differential privacy (ε=0.1) garantizan que ningún paciente 
                  individual puede ser re-identificado. Certificado por auditoría independiente.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-green-400">📊 Caso de Uso Real</h3>
                <p className="text-sm text-slate-400">
                  PharmaCorp compró dataset de "Caries Infantil" para entrenar modelo predictivo. 
                  Evitaron 18 meses de reclutamiento + costes de €500k en ensayos reales.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-blue-400">🚀 Mercado Adyacente</h3>
                <p className="text-sm text-slate-400">
                  Los mismos datos sintéticos se venden a: aseguradoras (modelos de riesgo), 
                  universidades (investigación), startups de IA (validación).
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </BusinessCaseLayout>
  );
};

export default SyntheticData;

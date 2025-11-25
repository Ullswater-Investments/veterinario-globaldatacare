import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Beaker, Search, Leaf, AlertTriangle, CheckCircle, MapPin } from 'lucide-react';

// Datos sintéticos
const microbiomeData = {
  healthy: [
    { name: 'S. salivarius', value: 85 },
    { name: 'S. mitis', value: 72 },
    { name: 'L. acidophilus', value: 68 },
  ],
  pathogens: [
    { name: 'P. gingivalis', value: 45 },
    { name: 'A. actinomycetemcomitans', value: 28 },
    { name: 'T. forsythia', value: 15 },
  ],
};

const forensicDatabase = {
  'LOT-9988-XZ': {
    clinic: 'Clínica Dental Sur',
    location: { lat: 40.4168, lng: -3.7038 },
    implantDate: '2024-09-15',
    manufacturer: 'Straumann AG',
  },
};

const ecoMetrics = {
  plasticSaved: 5.2,
  co2Reduction: 12,
  score: 'A',
  certificates: ['Clínica Sostenible', 'Blockchain Verified'],
};

export default function InnovationLabs() {
  const [showNeurological, setShowNeurological] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState<any>(null);

  const handleCorrelation = () => {
    setShowNeurological(true);
  };

  const handleForensicSearch = () => {
    const result = forensicDatabase[searchQuery as keyof typeof forensicDatabase];
    setSearchResult(result || null);
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
        <p className="text-slate-500">Casos de uso experimentales que demuestran el futuro de la plataforma</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 1. Monitor de Microbioma */}
        <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Beaker className="h-5 w-5 text-purple-600" />
              Monitor de Microbioma Oral
            </CardTitle>
            <CardDescription>
              Análisis bacteriano avanzado con correlación neurológica
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Bacterias Saludables */}
            <div>
              <h3 className="text-sm font-semibold text-green-700 mb-3">Bacterias Saludables</h3>
              <div className="space-y-2">
                {microbiomeData.healthy.map((bacteria) => (
                  <div key={bacteria.name}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-600">{bacteria.name}</span>
                      <span className="font-medium text-green-600">{bacteria.value}%</span>
                    </div>
                    <Progress 
                      value={(bacteria.value / getMaxValue(microbiomeData.healthy)) * 100} 
                      className="h-2 bg-green-100"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Patógenos */}
            <div>
              <h3 className="text-sm font-semibold text-red-700 mb-3 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                Patógenos Detectados
              </h3>
              <div className="space-y-2">
                {microbiomeData.pathogens.map((bacteria) => (
                  <div key={bacteria.name}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-600">{bacteria.name}</span>
                      <span className="font-medium text-red-600">{bacteria.value}%</span>
                    </div>
                    <Progress 
                      value={(bacteria.value / getMaxValue(microbiomeData.pathogens)) * 100} 
                      className="h-2 bg-red-100"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Acción */}
            <div className="pt-4 border-t">
              <Button 
                onClick={handleCorrelation}
                className="w-full bg-purple-600 hover:bg-purple-700"
                disabled={showNeurological}
              >
                Correlacionar con Historial Neurológico
              </Button>
              
              {showNeurological && (
                <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-amber-900">
                        Correlación Detectada
                      </p>
                      <p className="text-sm text-amber-800 mt-1">
                        Match de Riesgo Alzheimer: <span className="font-bold">15%</span>
                      </p>
                      <p className="text-xs text-amber-700 mt-2">
                        P. gingivalis detectado. Estudios recientes sugieren correlación con
                        enfermedad neurodegenerativa.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* 2. Panel Forense (DVI) */}
        <Card className="border-slate-200 bg-gradient-to-br from-slate-50 to-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5 text-slate-600" />
              Panel Forense (DVI)
            </CardTitle>
            <CardDescription>
              Sistema de Identificación de Víctimas por Implantes Dentales
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-slate-900 rounded-lg text-green-400 font-mono text-sm">
              <p className="mb-2">INTERPOL DENTAL DATABASE v4.2</p>
              <p className="text-xs text-green-300">Searching global implant registry...</p>
            </div>

            <div className="space-y-3">
              <div className="flex gap-2">
                <Input
                  placeholder="Buscar Implante Lote # (ej: LOT-9988-XZ)"
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

              {searchResult && (
                <div className="animate-fade-in">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="font-semibold text-green-900">
                        Coincidencia Encontrada
                      </span>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-green-600 mt-0.5 animate-pulse" />
                        <div>
                          <p className="font-medium text-slate-900">{searchResult.clinic}</p>
                          <p className="text-slate-600 text-xs">
                            {searchResult.location.lat.toFixed(4)}°N, {searchResult.location.lng.toFixed(4)}°W
                          </p>
                        </div>
                      </div>
                      <div className="pl-6 space-y-1 text-xs text-slate-600">
                        <p>Fecha Implantación: {searchResult.implantDate}</p>
                        <p>Fabricante: {searchResult.manufacturer}</p>
                        <p className="font-mono text-xs bg-slate-100 p-1 rounded mt-2">
                          Hash: 0x7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {searchResult === null && searchQuery && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-800">
                    No se encontraron coincidencias en la base de datos.
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* 3. Eco-Score de Clínica */}
        <Card className="border-green-200 bg-gradient-to-br from-green-50 to-white lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-green-600" />
              Eco-Score de Clínica
            </CardTitle>
            <CardDescription>
              Medición de impacto ambiental y certificación sostenible
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Medidor */}
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="relative w-48 h-48">
                  <svg viewBox="0 0 100 100" className="transform -rotate-90">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#fee2e2"
                      strokeWidth="8"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#22c55e"
                      strokeWidth="8"
                      strokeDasharray="251.2"
                      strokeDashoffset="37.68"
                      strokeLinecap="round"
                      className="transition-all duration-1000"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold text-green-600">{ecoMetrics.score}</span>
                    <span className="text-sm text-slate-600">Eco-Score</span>
                  </div>
                </div>
                <Badge className="bg-green-600 text-white">Clínica Sostenible</Badge>
              </div>

              {/* Métricas */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-slate-700">Métricas Mensuales</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="text-xs text-blue-700">Plástico Ahorrado</p>
                    <p className="text-2xl font-bold text-blue-900">{ecoMetrics.plasticSaved} kg</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <p className="text-xs text-green-700">Reducción CO₂</p>
                    <p className="text-2xl font-bold text-green-900">-{ecoMetrics.co2Reduction}%</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <p className="text-xs text-purple-700">Esterilizaciones Eficientes</p>
                    <p className="text-2xl font-bold text-purple-900">98.5%</p>
                  </div>
                </div>
              </div>

              {/* Certificados */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-slate-700">Certificaciones Blockchain</h3>
                <div className="space-y-3">
                  {ecoMetrics.certificates.map((cert, index) => (
                    <div 
                      key={index}
                      className="p-4 bg-white border-2 border-green-200 rounded-lg shadow-sm"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-slate-900">{cert}</p>
                          <p className="text-xs text-slate-500 mt-1">Emitido: 2024-11-20</p>
                          <p className="font-mono text-xs text-green-700 mt-2 break-all">
                            0x{Math.random().toString(16).substring(2, 10)}...
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                  <Button className="w-full bg-green-600 hover:bg-green-700" size="sm">
                    Descargar NFT Certificado
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

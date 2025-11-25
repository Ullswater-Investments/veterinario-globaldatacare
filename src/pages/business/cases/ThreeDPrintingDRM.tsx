import { useState } from 'react';
import BusinessCaseLayout from '@/components/business/BusinessCaseLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { drmUnlockLog } from '@/lib/mockData';
import { Lock, Unlock, Printer, FileCode, CheckCircle2, XCircle } from 'lucide-react';

const ThreeDPrintingDRM = () => {
  const [selectedDesign, setSelectedDesign] = useState<string | null>(null);
  const [unlocking, setUnlocking] = useState(false);
  const [revenue, setRevenue] = useState(15.00);

  const designs = [
    { id: 'STL-5501', name: 'Corona Anatómica', price: 5.00, locked: true },
    { id: 'STL-5502', name: 'Guía Quirúrgica', price: 5.00, locked: true },
    { id: 'STL-5503', name: 'Puente 3 Unidades', price: 5.00, locked: true },
    { id: 'STL-5504', name: 'Modelo Implante', price: 5.00, locked: false },
  ];

  const handleUnlock = (designId: string) => {
    setSelectedDesign(designId);
    setUnlocking(true);
    
    setTimeout(() => {
      setUnlocking(false);
      setRevenue(prev => prev + 5.00);
      setSelectedDesign(null);
    }, 2000);
  };

  const getStatusColor = (status: string) => {
    return status === 'Unlocked' 
      ? 'bg-green-100 text-green-800 border-green-300 dark:bg-green-950 dark:text-green-300'
      : 'bg-red-100 text-red-800 border-red-300 dark:bg-red-950 dark:text-red-300';
  };

  return (
    <BusinessCaseLayout
      caseNumber={8}
      title="DRM Impresión 3D"
      subtitle="Spotify para Diseños Dentales - Gestión de licencias de archivos STL"
      keyMetric={{
        label: 'Revenue Acumulado',
        value: `${revenue.toFixed(2)}€`,
        trend: `${Math.floor(revenue / 5)} diseños desbloqueados`
      }}
    >
      <div className="space-y-8">
        {/* Design File Viewer */}
        <Card className="border-2 border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-200">
              <FileCode className="h-5 w-5 text-purple-400" />
              Biblioteca de Diseños Protegidos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {designs.map((design) => (
                <div 
                  key={design.id}
                  className="relative p-6 border-2 border-slate-600 rounded-lg bg-slate-800 hover:bg-slate-700 transition-all group"
                >
                  <div className="absolute top-4 right-4">
                    {design.locked ? (
                      <Lock className="h-6 w-6 text-red-400" />
                    ) : (
                      <Unlock className="h-6 w-6 text-green-400" />
                    )}
                  </div>

                  <div className="mb-4">
                    <Badge variant="outline" className="mb-2 bg-slate-700 border-slate-500">
                      {design.id}
                    </Badge>
                    <h3 className="text-lg font-semibold text-slate-200">{design.name}</h3>
                  </div>

                  <div className="aspect-video bg-slate-950 rounded border border-slate-600 mb-4 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-30">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path d="M 20 80 L 50 20 L 80 80 Z" fill="currentColor" className="text-purple-400" />
                        <path d="M 30 70 L 50 40 L 70 70 Z" fill="currentColor" className="text-purple-600" />
                      </svg>
                    </div>
                    {design.locked && (
                      <div className="absolute inset-0 backdrop-blur-sm bg-slate-900/50 flex items-center justify-center">
                        <Lock className="h-12 w-12 text-slate-400" />
                      </div>
                    )}
                    <span className="text-slate-600 font-mono text-sm relative z-10">
                      {design.locked ? 'Bloqueado' : 'STL Preview'}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-slate-200">
                      {design.price.toFixed(2)}€
                    </div>
                    {design.locked ? (
                      <Button
                        onClick={() => handleUnlock(design.id)}
                        disabled={unlocking && selectedDesign === design.id}
                        className="bg-purple-600 hover:bg-purple-700"
                      >
                        <Printer className="h-4 w-4 mr-2" />
                        {unlocking && selectedDesign === design.id ? 'Desbloqueando...' : 'Desbloquear'}
                      </Button>
                    ) : (
                      <Badge className="bg-green-900 text-green-200">
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        Disponible
                      </Badge>
                    )}
                  </div>

                  {unlocking && selectedDesign === design.id && (
                    <div className="absolute inset-0 bg-purple-600/20 rounded-lg flex items-center justify-center animate-pulse">
                      <div className="text-center">
                        <div className="text-white font-semibold mb-2">Enviando a impresora...</div>
                        <div className="text-4xl font-bold text-green-400 animate-bounce">+5€</div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* License Log */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Unlock className="h-5 w-5 text-purple-600" />
              Registro de Licencias
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {drmUnlockLog.map((log, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className={`p-2 rounded-lg ${
                      log.status === 'Unlocked' 
                        ? 'bg-green-100 dark:bg-green-950' 
                        : 'bg-red-100 dark:bg-red-950'
                    }`}>
                      {log.status === 'Unlocked' ? (
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-600" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="font-mono">{log.designId}</Badge>
                        <span className="font-semibold">{log.clinic}</span>
                      </div>
                      <div className="text-sm text-muted-foreground flex items-center gap-1">
                        <Printer className="h-3 w-3" />
                        {log.printer}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Badge className={getStatusColor(log.status)}>
                      {log.status}
                    </Badge>
                    {log.fee > 0 ? (
                      <div className="text-right bg-purple-100 dark:bg-purple-900 px-3 py-2 rounded-lg">
                        <div className="text-xs text-muted-foreground">Fee</div>
                        <div className="font-bold text-purple-600">+{log.fee.toFixed(2)}€</div>
                      </div>
                    ) : (
                      <div className="text-sm text-muted-foreground">Sin licencia</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="mt-6 pt-6 border-t grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-slate-100 dark:bg-slate-800 rounded-lg">
                <div className="text-2xl font-bold">{drmUnlockLog.length}</div>
                <div className="text-sm text-muted-foreground">Intentos de Impresión</div>
              </div>
              <div className="text-center p-4 bg-green-100 dark:bg-green-900 rounded-lg">
                <div className="text-2xl font-bold text-green-600">
                  {drmUnlockLog.filter(l => l.status === 'Unlocked').length}
                </div>
                <div className="text-sm text-muted-foreground">Licencias Válidas</div>
              </div>
              <div className="text-center p-4 bg-purple-100 dark:bg-purple-900 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">
                  {drmUnlockLog.reduce((sum, l) => sum + l.fee, 0).toFixed(2)}€
                </div>
                <div className="text-sm text-muted-foreground">Revenue Total</div>
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
                <h3 className="font-semibold mb-2">💰 Pay-per-Print</h3>
                <p className="text-sm text-muted-foreground">
                  5€ por desbloqueo de archivo STL. El diseñador original recibe 60%, 
                  OralSpace-X captura 40% por gestión DRM y distribución.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">🔒 Protección de Propiedad Intelectual</h3>
                <p className="text-sm text-muted-foreground">
                  Archivos cifrados end-to-end. Solo impresoras certificadas y validadas 
                  pueden imprimir. Evita piratería de diseños premium.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">📊 Marketplace de Diseños</h3>
                <p className="text-sm text-muted-foreground">
                  Conecta diseñadores CAD independientes con 5.000+ clínicas. 
                  Proyección: 50.000 impresiones/mes = 250k€ en fees.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">🎯 Caso de Uso Real</h3>
                <p className="text-sm text-muted-foreground">
                  Diseñador crea guía quirúrgica innovadora. Sin DRM: 10 ventas. 
                  Con DRM OralSpace: 1.000 impresiones licenciadas en red global.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </BusinessCaseLayout>
  );
};

export default ThreeDPrintingDRM;

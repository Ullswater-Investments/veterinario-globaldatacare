import { useState, useEffect } from 'react';
import BusinessCaseLayout from '@/components/business/BusinessCaseLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { dppIssuanceLog } from '@/lib/mockData';
import { Shield, TrendingUp, Package, Hash } from 'lucide-react';

const DigitalPassports = () => {
  const [revenue, setRevenue] = useState(0);
  const [visibleLogs, setVisibleLogs] = useState<typeof dppIssuanceLog>([]);
  const [blockchainBlocks, setBlockchainBlocks] = useState<number>(0);

  useEffect(() => {
    // Simulate blockchain blocks stacking
    const blockTimer = setInterval(() => {
      setBlockchainBlocks(prev => prev + 1);
    }, 1500);

    // Simulate log streaming
    let index = 0;
    const logTimer = setInterval(() => {
      if (index < dppIssuanceLog.length) {
        setVisibleLogs(prev => [dppIssuanceLog[index], ...prev]);
        setRevenue(prev => prev + dppIssuanceLog[index].fee);
        index++;
      }
    }, 2000);

    return () => {
      clearInterval(blockTimer);
      clearInterval(logTimer);
    };
  }, []);

  return (
    <BusinessCaseLayout
      caseNumber={6}
      title="Pasaportes Digitales de Producto (DPP)"
      subtitle="La Casa de la Moneda Digital - Certificación Blockchain unitaria por implante"
      keyMetric={{
        label: 'Ingresos Generados Hoy',
        value: `${revenue.toFixed(2)}€`,
        trend: `${visibleLogs.length} DPPs emitidos`
      }}
    >
      <div className="space-y-8">
        {/* Blockchain Generator Visualization */}
        <Card className="border-2 border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-200">
              <Package className="h-5 w-5 text-blue-400" />
              Generador de Blockchain en Vivo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative h-80 flex items-end justify-center gap-2 px-4">
              {Array.from({ length: Math.min(blockchainBlocks, 20) }).map((_, index) => (
                <div
                  key={index}
                  className="relative flex-1 max-w-[40px]"
                  style={{
                    animation: 'slideUp 0.5s ease-out',
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div 
                    className="bg-gradient-to-t from-blue-600 to-blue-400 rounded-t border-2 border-blue-300 hover:from-blue-500 hover:to-blue-300 transition-all cursor-pointer"
                    style={{ height: `${Math.random() * 150 + 100}px` }}
                  >
                    <div className="absolute top-1 left-1/2 -translate-x-1/2 text-xs font-mono text-white opacity-70">
                      #{20 - index}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Revenue Ticker */}
            <div className="mt-6 p-6 bg-gradient-to-r from-green-900/50 to-emerald-900/50 border-2 border-green-600 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-8 w-8 text-green-400 animate-pulse" />
                  <div>
                    <div className="text-sm text-slate-300">Ingresos en Tiempo Real</div>
                    <div className="text-4xl font-bold text-green-400 font-mono">
                      {revenue.toFixed(2)}€
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-slate-300">Proyección Hoy</div>
                  <div className="text-2xl font-bold text-slate-200">4,240€</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Live Issuance Log */}
        <Card className="border-2 border-slate-600">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-blue-600" />
              Log de Emisión en Vivo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {visibleLogs.length === 0 && (
                <div className="text-center py-8 text-muted-foreground animate-pulse">
                  Esperando emisiones de DPP...
                </div>
              )}
              {visibleLogs.map((log, index) => (
                <div 
                  key={`${log.id}-${index}`}
                  className="flex items-center justify-between p-4 border rounded-lg bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950 animate-in fade-in slide-in-from-top-2 duration-500"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <Badge variant="outline" className="font-mono bg-blue-100 dark:bg-blue-900 border-blue-300 dark:border-blue-700">
                      {log.id}
                    </Badge>
                    <div>
                      <div className="font-semibold">{log.product}</div>
                      <div className="text-sm text-muted-foreground">Lote: {log.batch}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground">Timestamp</div>
                      <div className="font-mono text-sm">{log.timestamp}</div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
                        <Hash className="h-3 w-3" />
                        Blockchain Hash
                      </div>
                      <div className="font-mono text-sm text-blue-600">{log.hash}</div>
                    </div>
                    <div className="text-right bg-green-100 dark:bg-green-900 px-3 py-2 rounded-lg border border-green-300 dark:border-green-700">
                      <div className="text-xs text-muted-foreground">Fee</div>
                      <div className="font-bold text-green-600 dark:text-green-400">+{log.fee.toFixed(2)}€</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Stats */}
            <div className="mt-6 pt-6 border-t grid grid-cols-4 gap-4">
              <div className="text-center p-4 bg-slate-100 dark:bg-slate-800 rounded-lg">
                <div className="text-2xl font-bold">{visibleLogs.length}</div>
                <div className="text-sm text-muted-foreground">DPPs Emitidos</div>
              </div>
              <div className="text-center p-4 bg-slate-100 dark:bg-slate-800 rounded-lg">
                <div className="text-2xl font-bold">{blockchainBlocks}</div>
                <div className="text-sm text-muted-foreground">Bloques Creados</div>
              </div>
              <div className="text-center p-4 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">2€</div>
                <div className="text-sm text-muted-foreground">Fee Unitario</div>
              </div>
              <div className="text-center p-4 bg-green-100 dark:bg-green-900 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{revenue.toFixed(2)}€</div>
                <div className="text-sm text-muted-foreground">Revenue Total</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Business Model */}
        <Card className="bg-slate-100 dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700">
          <CardHeader>
            <CardTitle>Modelo de Negocio</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">💰 Fee Unitario</h3>
                <p className="text-sm text-muted-foreground">
                  2€ por cada Pasaporte Digital emitido. El fabricante paga por la certificación 
                  blockchain inmutable que garantiza trazabilidad completa del implante.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">🔗 Valor de la Blockchain</h3>
                <p className="text-sm text-muted-foreground">
                  Cada DPP incluye: origen de materias primas, parámetros de fabricación, 
                  certificados regulatorios (CE/FDA), historial de custodia hasta implantación.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">📈 Escala Industrial</h3>
                <p className="text-sm text-muted-foreground">
                  Proyección: 10.000 implantes/día en red europea = 20.000€ diarios = 7.3M€ anuales 
                  solo en certificación DPP.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">🛡️ Cumplimiento MDR</h3>
                <p className="text-sm text-muted-foreground">
                  Reglamento UE 2017/745 exige trazabilidad completa. OralSpace-X DPP es 
                  la infraestructura que hace posible el compliance automático.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            transform: translateY(100px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </BusinessCaseLayout>
  );
};

export default DigitalPassports;

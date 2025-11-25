import { useState, useEffect } from 'react';
import BusinessCaseLayout from '@/components/business/BusinessCaseLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { computeNodes } from '@/lib/mockData';
import { Server, Activity, DollarSign, Shield, Cpu } from 'lucide-react';

const FederatedCompute = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const [totalHours, setTotalHours] = useState(100);
  const [totalRevenue, setTotalRevenue] = useState(50000);

  useEffect(() => {
    const logMessages = [
      '> Initiating federated training round 4...',
      '> Connecting to Node-Paris-01... [OK]',
      '> Connecting to Node-Berlin-09... [OK]',
      '> Node-Madrid-03 idle, skipping...',
      '> Sending model weights (encrypted)...',
      '> Receiving gradient updates...',
      '> Aggregating parameters (FedAvg)...',
      '> Model accuracy: 94.2% (+0.3%)',
      '> Training round 4 complete. Next round in 60s...',
    ];

    let index = 0;
    const timer = setInterval(() => {
      if (index < logMessages.length) {
        setLogs(prev => [...prev, logMessages[index]]);
        index++;
      } else {
        // Reset and start over
        setLogs([]);
        index = 0;
      }
    }, 1200);

    // Revenue counter
    const revenueTimer = setInterval(() => {
      setTotalRevenue(prev => prev + Math.random() * 10);
      setTotalHours(prev => prev + 0.1);
    }, 2000);

    return () => {
      clearInterval(timer);
      clearInterval(revenueTimer);
    };
  }, []);

  return (
    <BusinessCaseLayout
      caseNumber={12}
      title="Compute Federado como Servicio"
      subtitle="AWS Descentralizado - Alquiler de capacidad de cómputo distribuido"
      keyMetric={{
        label: 'Facturado Este Mes',
        value: `${totalRevenue.toFixed(0).toLocaleString()}€`,
        trend: `${totalHours.toFixed(0)}h de cómputo`
      }}
    >
      <div className="space-y-8">
        {/* Privacy Badge */}
        <div className="fixed top-24 right-6 z-50">
          <Badge className="bg-green-900 text-green-200 border-2 border-green-600 px-4 py-2 shadow-lg">
            <Shield className="h-4 w-4 mr-2" />
            Privacy Preserved: Encrypted Gradients Only
          </Badge>
        </div>

        {/* Terminal Console */}
        <Card className="border-2 border-green-600 bg-slate-950">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-green-400 font-mono">
                <Activity className="h-5 w-5" />
                user@oralspace:~$
              </CardTitle>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="bg-black rounded-lg p-6 h-96 overflow-y-auto font-mono text-sm">
              {logs.map((log, index) => (
                <div 
                  key={index} 
                  className="text-green-400 mb-1 animate-in fade-in slide-in-from-top-2"
                  style={{ animationDuration: '0.3s' }}
                >
                  {log}
                </div>
              ))}
              {logs.length > 0 && (
                <div className="text-green-400 animate-pulse inline-block">▋</div>
              )}
            </div>

            {/* Revenue Ticker */}
            <div className="mt-6 p-6 bg-gradient-to-r from-green-950 to-emerald-950 border-2 border-green-600 rounded-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="text-sm text-green-300 mb-2">Tiempo de Cómputo Total</div>
                  <div className="text-4xl font-bold text-green-400 font-mono">
                    {totalHours.toFixed(1)}h
                  </div>
                </div>
                <div>
                  <div className="text-sm text-green-300 mb-2">Revenue Acumulado</div>
                  <div className="text-4xl font-bold text-green-400 font-mono">
                    {totalRevenue.toFixed(0).toLocaleString()}€
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Compute Nodes Grid */}
        <Card className="border-2 border-cyan-600 bg-gradient-to-br from-slate-950 to-cyan-950">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-cyan-400">
              <Server className="h-5 w-5" />
              Red de Nodos de Cómputo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {computeNodes.map((node) => (
                <div 
                  key={node.nodeId}
                  className={`p-6 border-2 rounded-lg transition-all ${
                    node.status === 'Computing' 
                      ? 'border-green-600 bg-slate-900 animate-pulse' 
                      : node.status === 'Idle'
                      ? 'border-yellow-600 bg-slate-900'
                      : 'border-slate-700 bg-slate-900 opacity-50'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${
                        node.status === 'Computing' ? 'bg-green-500 animate-ping' :
                        node.status === 'Idle' ? 'bg-yellow-500' :
                        'bg-slate-600'
                      }`} />
                      <Badge className={`font-mono ${
                        node.status === 'Computing' ? 'bg-green-900 text-green-200' :
                        node.status === 'Idle' ? 'bg-yellow-900 text-yellow-200' :
                        'bg-slate-800 text-slate-400'
                      }`}>
                        {node.status}
                      </Badge>
                    </div>
                  </div>

                  <h3 className="font-mono text-cyan-300 font-semibold mb-2">{node.nodeId}</h3>
                  <div className="text-sm text-slate-400 mb-4">{node.task}</div>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-400 flex items-center gap-1">
                        <Cpu className="h-3 w-3" />
                        CPU Usage
                      </span>
                      <span className="text-cyan-400 font-semibold">{node.cpu}</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all ${
                          node.status === 'Computing' ? 'bg-green-500' : 'bg-slate-600'
                        }`}
                        style={{ width: node.cpu }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                    <span className="text-sm text-slate-400">Earnings</span>
                    <span className={`text-xl font-bold font-mono ${
                      node.earnings > 0 ? 'text-green-400' : 'text-slate-600'
                    }`}>
                      {node.earnings.toFixed(2)}€
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="mt-6 grid md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-slate-900 rounded-lg border border-slate-700">
                <div className="text-2xl font-bold text-cyan-400">{computeNodes.length}</div>
                <div className="text-sm text-slate-400">Total Nodos</div>
              </div>
              <div className="text-center p-4 bg-slate-900 rounded-lg border border-slate-700">
                <div className="text-2xl font-bold text-green-400">
                  {computeNodes.filter(n => n.status === 'Computing').length}
                </div>
                <div className="text-sm text-slate-400">Activos</div>
              </div>
              <div className="text-center p-4 bg-slate-900 rounded-lg border border-slate-700">
                <div className="text-2xl font-bold text-yellow-400">
                  {computeNodes.filter(n => n.status === 'Idle').length}
                </div>
                <div className="text-sm text-slate-400">En Espera</div>
              </div>
              <div className="text-center p-4 bg-green-950 rounded-lg border border-green-700">
                <div className="text-2xl font-bold text-green-400">
                  {computeNodes.reduce((sum, n) => sum + n.earnings, 0).toFixed(2)}€
                </div>
                <div className="text-sm text-slate-400">Total Earnings</div>
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
                <h3 className="font-semibold mb-2 text-cyan-400">💰 Pago por Hora de Cómputo</h3>
                <p className="text-sm text-slate-400">
                  500€/hora de cómputo GPU. Las clínicas alquilan su infraestructura ociosa 
                  (especialmente impresoras 3D y workstations de CAD/CAM) durante la noche.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-green-400">🔒 Privacidad Garantizada</h3>
                <p className="text-sm text-slate-400">
                  Solo se envían gradientes cifrados, nunca datos crudos. Imposible reconstruir 
                  datos de pacientes individuales desde actualizaciones de modelo agregadas.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-purple-400">📊 Ventaja vs. Cloud</h3>
                <p className="text-sm text-slate-400">
                  AWS/Azure cobran 2€/hora GPU. OralSpace-X ofrece 0.50€/hora aprovechando 
                  infraestructura subutilizada. Margen: 0.50€ = 100% profit.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-blue-400">🚀 Escala Global</h3>
                <p className="text-sm text-slate-400">
                  Red de 500 nodos activos × 8h noche × 30 días = 120.000h/mes × 500€/h = 
                  60M€ facturados potenciales (margen 50% = 30M€).
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </BusinessCaseLayout>
  );
};

export default FederatedCompute;

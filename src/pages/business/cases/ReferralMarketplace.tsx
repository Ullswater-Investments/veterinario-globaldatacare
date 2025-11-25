import { useState, useEffect } from 'react';
import BusinessCaseLayout from '@/components/business/BusinessCaseLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { referralTransactions } from '@/lib/mockData';
import { ArrowRight, TrendingUp, CheckCircle2, Clock, AlertCircle } from 'lucide-react';

const ReferralMarketplace = () => {
  const [todayRevenue, setTodayRevenue] = useState(0);
  const completedTransactions = referralTransactions.filter(t => t.status === 'Completed');
  const totalRevenue = completedTransactions.reduce((sum, t) => sum + t.commission, 0);

  useEffect(() => {
    // Simulate revenue accumulating
    let current = 0;
    const increment = totalRevenue / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= totalRevenue) {
        current = totalRevenue;
        clearInterval(timer);
      }
      setTodayRevenue(current);
    }, 30);

    return () => clearInterval(timer);
  }, [totalRevenue]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed':
        return <CheckCircle2 className="h-4 w-4 text-green-600" />;
      case 'In Progress':
        return <Clock className="h-4 w-4 text-orange-600" />;
      case 'Pending':
        return <AlertCircle className="h-4 w-4 text-blue-600" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'In Progress':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Pending':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return '';
    }
  };

  return (
    <BusinessCaseLayout
      caseNumber={1}
      title="Marketplace de Derivación"
      subtitle="El Uber de las derivaciones clínicas - Conecta dentistas generales con especialistas"
      keyMetric={{
        label: 'Ingreso Generado Hoy',
        value: `${todayRevenue.toFixed(2)}€`,
        trend: '+12% vs. ayer'
      }}
    >
      <div className="space-y-8">
        {/* Network Visualization Placeholder */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Red de Derivaciones en Vivo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative h-80 bg-muted/30 rounded-lg border-2 border-dashed flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="flex justify-center gap-8">
                  {/* Simulated Network Nodes */}
                  {['Clínica Norte', 'Dr. Maxilofacial', 'Centro Oeste'].map((node, i) => (
                    <div key={i} className="relative">
                      <div className="w-24 h-24 rounded-full bg-primary/20 border-4 border-primary flex items-center justify-center">
                        <div className="text-xs font-bold text-center px-2">{node}</div>
                      </div>
                      {i < 2 && (
                        <ArrowRight className="absolute top-1/2 -right-8 -translate-y-1/2 h-6 w-6 text-primary animate-pulse" />
                      )}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Visualización de red en tiempo real mostrando flujos de derivación
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Transactions Table */}
        <Card>
          <CardHeader>
            <CardTitle>Transacciones en Vivo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {referralTransactions.map((transaction) => (
                <div 
                  key={transaction.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <Badge variant="outline" className="font-mono">
                      {transaction.id}
                    </Badge>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium">{transaction.from}</span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{transaction.to}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Paciente</div>
                      <div className="font-medium">{transaction.patient}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Tratamiento</div>
                      <div className="font-medium">{transaction.treatment}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Valor</div>
                      <div className="font-bold">{transaction.value}€</div>
                    </div>
                    <div className="text-right bg-primary/10 px-3 py-2 rounded-lg">
                      <div className="text-xs text-muted-foreground">Comisión 3%</div>
                      <div className="font-bold text-primary">{transaction.commission}€</div>
                    </div>
                    <Badge className={getStatusColor(transaction.status)}>
                      <span className="flex items-center gap-1">
                        {getStatusIcon(transaction.status)}
                        {transaction.status}
                      </span>
                    </Badge>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="mt-6 pt-6 border-t">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-2xl font-bold text-foreground">{referralTransactions.length}</div>
                  <div className="text-sm text-muted-foreground">Total Derivaciones</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{completedTransactions.length}</div>
                  <div className="text-sm text-muted-foreground">Completadas</div>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-2xl font-bold text-primary">{totalRevenue}€</div>
                  <div className="text-sm text-muted-foreground">Total Comisiones</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Business Model Explanation */}
        <Card className="bg-muted/30">
          <CardHeader>
            <CardTitle>Modelo de Negocio</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">💰 Monetización</h3>
                <p className="text-sm text-muted-foreground">
                  Comisión del 3% sobre el valor del tratamiento derivado. Sin costes para el paciente, 
                  la comisión es asumida por el especialista receptor.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">📈 Escalabilidad</h3>
                <p className="text-sm text-muted-foreground">
                  Proyección: 100 clínicas activas × 30 derivaciones/mes × valor medio 2.000€ = 180.000€ en transacciones → 5.400€ en comisiones mensuales.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </BusinessCaseLayout>
  );
};

export default ReferralMarketplace;

import BusinessCaseLayout from '@/components/business/BusinessCaseLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { storageComparison } from '@/lib/mockData';
import { Database, TrendingDown, Server, CheckCircle2, Loader2 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const FederatedStorage = () => {
  const chartData = [
    {
      name: 'AWS S3',
      cost: storageComparison.awsCost,
      fill: '#ef4444'
    },
    {
      name: 'OralSpace Federado',
      cost: storageComparison.oralSpaceCost,
      fill: '#22c55e'
    }
  ];

  const savingsPercentage = ((storageComparison.savings / storageComparison.awsCost) * 100).toFixed(1);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Online':
        return <CheckCircle2 className="h-4 w-4 text-green-600" />;
      case 'Syncing':
        return <Loader2 className="h-4 w-4 text-orange-600 animate-spin" />;
      default:
        return null;
    }
  };

  return (
    <BusinessCaseLayout
      caseNumber={3}
      title="Almacenamiento Federado"
      subtitle="Infraestructura distribuida que reduce costes cloud hasta un 56%"
      keyMetric={{
        label: 'Ahorro Anual Proyectado',
        value: `${(storageComparison.savings * 12).toLocaleString()}€`,
        trend: `-${savingsPercentage}% vs. AWS`
      }}
    >
      <div className="space-y-8">
        {/* Cost Comparison Chart */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingDown className="h-5 w-5 text-green-600" />
              Comparativa de Costes (Mensual)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip 
                    formatter={(value: number) => [`${value.toLocaleString()}€`, 'Coste Mensual']}
                    contentStyle={{ background: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}
                  />
                  <Legend />
                  <Bar dataKey="cost" name="Coste Mensual" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-6 p-6 bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-900 rounded-lg">
              <div className="text-center">
                <div className="text-sm text-muted-foreground mb-2">Ahorro Mensual</div>
                <div className="text-5xl font-bold text-green-600 mb-2">
                  {storageComparison.savings.toLocaleString()}€
                </div>
                <div className="text-lg text-muted-foreground">
                  Equivalente a {savingsPercentage}% de reducción en costes de almacenamiento
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Storage Metrics */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6 text-center">
              <Database className="h-12 w-12 mx-auto mb-4 text-primary" />
              <div className="text-3xl font-bold mb-2">{storageComparison.totalStoredTB} TB</div>
              <div className="text-sm text-muted-foreground">Total Almacenado</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Server className="h-12 w-12 mx-auto mb-4 text-primary" />
              <div className="text-3xl font-bold mb-2">{storageComparison.nodeDistribution.length}</div>
              <div className="text-sm text-muted-foreground">Nodos Federados</div>
            </CardContent>
          </Card>
          <Card className="bg-primary/5">
            <CardContent className="pt-6 text-center">
              <TrendingDown className="h-12 w-12 mx-auto mb-4 text-green-600" />
              <div className="text-3xl font-bold mb-2 text-green-600">2.5M€</div>
              <div className="text-sm text-muted-foreground">Ahorro Sectorial Anual</div>
            </CardContent>
          </Card>
        </div>

        {/* Node Distribution Map */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Server className="h-5 w-5 text-primary" />
              Monitor de Nodos Federados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {storageComparison.nodeDistribution.map((node, index) => (
                <div key={index} className="border rounded-lg p-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-4">
                    {getStatusIcon(node.status)}
                    <div>
                      <div className="font-semibold">{node.region}</div>
                      <Badge variant="outline" className="text-xs mt-1">{node.status}</Badge>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="w-64">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">Uso de Capacidad</span>
                        <span className="font-semibold">{node.usage}</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary transition-all"
                          style={{ width: node.usage }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-muted/30 rounded-lg">
              <div className="text-sm text-muted-foreground text-center">
                Red distribuida geográficamente garantiza latencia &lt;50ms y cumplimiento GDPR con datos residentes en UE
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
                <h3 className="font-semibold mb-2">💰 Margen por TB Gestionado</h3>
                <p className="text-sm text-muted-foreground">
                  En lugar de comprar almacenamiento centralizado (AWS/Azure), OralSpace-X intermedia 
                  capacidad entre clínicas con exceso de infraestructura, capturando margen.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">🔒 Valor Añadido</h3>
                <p className="text-sm text-muted-foreground">
                  Cifrado end-to-end, backups automáticos, geo-replicación para disaster recovery, 
                  cumplimiento GDPR nativo con data residency europea.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </BusinessCaseLayout>
  );
};

export default FederatedStorage;

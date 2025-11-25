import BusinessCaseLayout from '@/components/business/BusinessCaseLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { stockAutomations } from '@/lib/mockData';
import { Package, TrendingUp, Zap, Clock, Building2 } from 'lucide-react';

const IoTInventory = () => {
  const totalValue = stockAutomations.reduce((sum, order) => sum + order.value, 0);
  const totalFees = stockAutomations.reduce((sum, order) => sum + order.fee, 0);

  const getTriggerIcon = (trigger: string) => {
    if (trigger.includes('Sensor')) return <Zap className="h-4 w-4 text-orange-600" />;
    if (trigger.includes('AI')) return <TrendingUp className="h-4 w-4 text-purple-600" />;
    return <Clock className="h-4 w-4 text-blue-600" />;
  };

  const getTriggerColor = (trigger: string) => {
    if (trigger.includes('Sensor')) return 'bg-orange-100 text-orange-800 border-orange-200';
    if (trigger.includes('AI')) return 'bg-purple-100 text-purple-800 border-purple-200';
    return 'bg-blue-100 text-blue-800 border-blue-200';
  };

  return (
    <BusinessCaseLayout
      caseNumber={5}
      title="Gestión Stock IoT"
      subtitle="Supply Chain Control Tower - Reposición automática con sensores inteligentes"
      keyMetric={{
        label: 'Comisión Generada (1.5%)',
        value: `${totalFees.toFixed(2)}€`,
        trend: `${stockAutomations.length} pedidos automatizados`
      }}
    >
      <div className="space-y-8">
        {/* Automated Orders List */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5 text-primary" />
              Pedidos Automatizados en Curso
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stockAutomations.map((order) => (
                <div 
                  key={order.id}
                  className="border rounded-lg p-4 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline" className="font-mono">{order.id}</Badge>
                        <Badge className={getTriggerColor(order.trigger)}>
                          <span className="flex items-center gap-1">
                            {getTriggerIcon(order.trigger)}
                            {order.trigger}
                          </span>
                        </Badge>
                      </div>
                      <h3 className="font-semibold text-lg mb-1">{order.item}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Building2 className="h-4 w-4" />
                        <span>{order.supplier}</span>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-2xl font-bold text-foreground mb-1">
                        {order.value}€
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {order.quantity} unidades
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t">
                    <div className="text-sm text-muted-foreground">
                      Comisión de gestión (1.5%)
                    </div>
                    <div className="text-lg font-bold text-primary">
                      +{order.fee.toFixed(2)}€
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="mt-6 p-6 bg-primary/5 border-2 border-primary/20 rounded-lg">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-1">Total Pedidos</div>
                  <div className="text-3xl font-bold text-foreground">{stockAutomations.length}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-1">Valor Compras</div>
                  <div className="text-3xl font-bold text-foreground">{totalValue.toLocaleString()}€</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-1">Comisiones</div>
                  <div className="text-3xl font-bold text-primary">{totalFees.toFixed(2)}€</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Invoice Visualization */}
        <Card>
          <CardHeader>
            <CardTitle>Ticket de Compra Automatizado (Ejemplo)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 rounded-lg p-6 bg-background space-y-4 max-w-2xl mx-auto">
              <div className="flex justify-between items-start pb-4 border-b">
                <div>
                  <h3 className="font-bold text-lg">OralSpace-X Supply Chain</h3>
                  <p className="text-sm text-muted-foreground">Pedido Automatizado</p>
                </div>
                <div className="text-right">
                  <div className="font-mono text-sm">{stockAutomations[0].id}</div>
                  <div className="text-xs text-muted-foreground">
                    {new Date().toLocaleDateString('es-ES')}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between py-2">
                  <span className="text-muted-foreground">Proveedor:</span>
                  <span className="font-semibold">{stockAutomations[0].supplier}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-muted-foreground">Producto:</span>
                  <span className="font-semibold">{stockAutomations[0].item}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-muted-foreground">Cantidad:</span>
                  <span className="font-semibold">{stockAutomations[0].quantity} unidades</span>
                </div>
              </div>

              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Subtotal:</span>
                  <span>{stockAutomations[0].value.toFixed(2)}€</span>
                </div>
                <div className="flex justify-between py-1 bg-primary/10 px-3 py-2 rounded">
                  <span className="font-semibold text-primary">
                    Fee de Gestión OralSpace-X (1.5%):
                  </span>
                  <span className="font-bold text-primary">
                    {stockAutomations[0].fee.toFixed(2)}€
                  </span>
                </div>
                <div className="flex justify-between py-2 text-lg font-bold border-t">
                  <span>Total:</span>
                  <span>{(stockAutomations[0].value + stockAutomations[0].fee).toFixed(2)}€</span>
                </div>
              </div>

              <div className="text-xs text-center text-muted-foreground pt-4 border-t">
                Pedido generado automáticamente por sensor de stock bajo
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Efficiency Metrics */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <Clock className="h-12 w-12 text-green-600" />
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-1">45h/mes</div>
                  <div className="text-sm text-muted-foreground">
                    Tiempo ahorrado en gestión manual de pedidos
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <TrendingUp className="h-12 w-12 text-blue-600" />
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">2M€</div>
                  <div className="text-sm text-muted-foreground">
                    Volumen mensual de compras gestionadas
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Business Model Explanation */}
        <Card className="bg-muted/30">
          <CardHeader>
            <CardTitle>Modelo de Negocio</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">💰 Comisión sobre Compras</h3>
                <p className="text-sm text-muted-foreground">
                  Fee del 1.5% sobre el valor de cada pedido automatizado. Los sensores IoT detectan 
                  niveles bajos de stock y disparan órdenes automáticas a proveedores integrados.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">🤖 Automatización Inteligente</h3>
                <p className="text-sm text-muted-foreground">
                  Algoritmos de predicción basados en histórico de consumo, estacionalidad y tendencias. 
                  Reduce roturas de stock en 87% y optimiza capital circulante.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </BusinessCaseLayout>
  );
};

export default IoTInventory;

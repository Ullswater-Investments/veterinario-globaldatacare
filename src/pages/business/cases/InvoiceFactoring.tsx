import { Banknote, TrendingUp, Clock, CheckCircle2, DollarSign, Shield, ArrowRight } from 'lucide-react';
import BusinessCaseLayout from '@/components/business/BusinessCaseLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { factoringInvoices } from '@/lib/mockData';
import { useState } from 'react';

const InvoiceFactoring = () => {
  const [selectedInvoices, setSelectedInvoices] = useState<string[]>([]);
  const [transferred, setTransferred] = useState(false);

  const totalAmount = factoringInvoices
    .filter(inv => selectedInvoices.includes(inv.id))
    .reduce((sum, inv) => sum + inv.amount, 0);

  const totalAdvance = factoringInvoices
    .filter(inv => selectedInvoices.includes(inv.id))
    .reduce((sum, inv) => sum + inv.advanceOffer, 0);

  const totalFee = factoringInvoices
    .filter(inv => selectedInvoices.includes(inv.id))
    .reduce((sum, inv) => sum + inv.fee, 0);

  const pendingTotal = factoringInvoices.reduce((sum, inv) => sum + inv.amount, 0);

  const handleToggle = (id: string) => {
    setSelectedInvoices(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleAdvance = () => {
    setTransferred(true);
    setTimeout(() => setTransferred(false), 3000);
  };

  return (
    <BusinessCaseLayout
      caseNumber={20}
      title="Factoring de Facturas"
      subtitle="Liquidez inmediata mediante adelanto de cobros pendientes de aseguradoras"
      keyMetric={{
        label: "Capital Disponible para Adelanto",
        value: `${pendingTotal.toLocaleString()}€`,
        trend: "Días medio de cobro: 48 días"
      }}
    >
      <div className="max-w-6xl space-y-8">
        {/* Security Badges */}
        <div className="flex flex-wrap gap-3">
          <Badge variant="outline" className="bg-emerald-950/30 border-emerald-500/30 text-emerald-400 px-4 py-2">
            <Shield className="h-4 w-4 mr-2" />
            PSD2 Compliant
          </Badge>
          <Badge variant="outline" className="bg-blue-950/30 border-blue-500/30 text-blue-400 px-4 py-2">
            Bank-Grade Security
          </Badge>
          <Badge variant="outline" className="bg-purple-950/30 border-purple-500/30 text-purple-400 px-4 py-2">
            PCI-DSS Ready
          </Badge>
        </div>

        {/* Treasury Dashboard */}
        <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Banknote className="h-6 w-6 text-emerald-400" />
              Dashboard de Tesorería
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-950/50 rounded-lg p-6 border border-slate-700">
                <Clock className="h-8 w-8 text-amber-400 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">48 días</div>
                <div className="text-slate-400 text-sm">Días Medio de Cobro</div>
              </div>
              <div className="bg-slate-950/50 rounded-lg p-6 border border-slate-700">
                <DollarSign className="h-8 w-8 text-blue-400 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{pendingTotal.toLocaleString()}€</div>
                <div className="text-slate-400 text-sm">Saldo Pendiente Aseguradoras</div>
              </div>
              <div className="bg-slate-950/50 rounded-lg p-6 border border-emerald-700 border-2">
                <TrendingUp className="h-8 w-8 text-emerald-400 mb-3" />
                <div className="text-3xl font-bold text-emerald-400 mb-1">
                  {(pendingTotal * 0.97).toLocaleString()}€
                </div>
                <div className="text-slate-400 text-sm">Disponible para Adelanto (97%)</div>
              </div>
            </div>

            <div className="mt-6 bg-amber-900/20 border border-amber-700 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-amber-400 mt-1" />
                <div className="text-amber-100 text-sm">
                  <strong>Problema de Liquidez:</strong> Las aseguradoras pagan entre 30-90 días después
                  del servicio, pero tú necesitas pagar nóminas, proveedores y alquiler <strong>ahora</strong>.
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Invoice Selection */}
        <Card className="bg-white border-slate-200">
          <CardHeader className="border-b border-slate-200">
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-blue-600" />
                Selecciona Facturas para Adelantar
              </span>
              <Badge variant="outline" className="text-sm">
                {selectedInvoices.length} seleccionadas
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="text-left p-4 w-12"></th>
                    <th className="text-left p-4 text-sm font-semibold text-slate-700">Factura ID</th>
                    <th className="text-left p-4 text-sm font-semibold text-slate-700">Pagador</th>
                    <th className="text-left p-4 text-sm font-semibold text-slate-700">Importe</th>
                    <th className="text-left p-4 text-sm font-semibold text-slate-700">Vencimiento</th>
                    <th className="text-left p-4 text-sm font-semibold text-slate-700">Recibirás</th>
                    <th className="text-left p-4 text-sm font-semibold text-slate-700">Coste</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {factoringInvoices.map((invoice) => {
                    const isSelected = selectedInvoices.includes(invoice.id);
                    return (
                      <tr
                        key={invoice.id}
                        className={`hover:bg-slate-50 transition-colors cursor-pointer ${
                          isSelected ? 'bg-blue-50' : ''
                        }`}
                        onClick={() => handleToggle(invoice.id)}
                      >
                        <td className="p-4">
                          <Checkbox
                            checked={isSelected}
                            onCheckedChange={() => handleToggle(invoice.id)}
                          />
                        </td>
                        <td className="p-4 font-mono text-sm text-slate-600">{invoice.id}</td>
                        <td className="p-4 text-sm font-medium text-slate-900">{invoice.payer}</td>
                        <td className="p-4 text-sm font-semibold text-slate-900">
                          {invoice.amount.toLocaleString()}€
                        </td>
                        <td className="p-4">
                          <Badge variant="outline" className="bg-amber-100 text-amber-700 border-amber-200">
                            <Clock className="h-3 w-3 mr-1" />
                            {invoice.dueIn}
                          </Badge>
                        </td>
                        <td className="p-4 text-sm font-bold text-emerald-600">
                          {invoice.advanceOffer.toLocaleString()}€
                        </td>
                        <td className="p-4 text-sm text-red-600">-{invoice.fee}€</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Advance Summary */}
        {selectedInvoices.length > 0 && (
          <Card className="bg-gradient-to-br from-blue-600 to-blue-700 border-0 text-white">
            <CardContent className="p-8">
              <div className="flex items-center justify-between gap-8 mb-6">
                <div>
                  <div className="text-blue-100 text-sm mb-2">Importe Total Seleccionado</div>
                  <div className="text-5xl font-bold">{totalAmount.toLocaleString()}€</div>
                </div>
                <ArrowRight className="h-12 w-12 text-blue-200" />
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="text-blue-100 text-sm mb-2">Recibirás en tu Cuenta</div>
                  <div className="text-5xl font-bold text-emerald-400">
                    {totalAdvance.toLocaleString()}€
                  </div>
                  <div className="text-blue-200 text-sm mt-2">
                    Coste financiero: {totalFee}€ ({((totalFee / totalAmount) * 100).toFixed(1)}%)
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full bg-white text-blue-700 hover:bg-blue-50 font-bold text-lg py-6"
                onClick={handleAdvance}
                disabled={transferred}
              >
                {transferred ? (
                  <>
                    <CheckCircle2 className="h-6 w-6 mr-2 animate-pulse" />
                    Transferencia Enviada
                  </>
                ) : (
                  <>
                    <Banknote className="h-6 w-6 mr-2" />
                    Adelantar Dinero Ahora
                  </>
                )}
              </Button>

              {transferred && (
                <div className="mt-4 bg-emerald-500 rounded-lg p-4 animate-fade-in">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                    <div className="text-white">
                      <div className="font-semibold">Transferencia completada</div>
                      <div className="text-sm text-emerald-100">
                        {totalAdvance.toLocaleString()}€ enviados a ES91 2100 0418 4502 0005 1332
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Business Metrics */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-emerald-50 border-emerald-200">
            <CardContent className="p-6">
              <TrendingUp className="h-8 w-8 text-emerald-600 mb-3" />
              <div className="text-3xl font-bold text-emerald-900 mb-1">3%</div>
              <div className="text-emerald-700 text-sm">Coste Financiero Medio</div>
              <div className="text-emerald-600 text-xs mt-2">vs 8-12% créditos tradicionales</div>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <Clock className="h-8 w-8 text-blue-600 mb-3" />
              <div className="text-3xl font-bold text-blue-900 mb-1">&lt;24h</div>
              <div className="text-blue-700 text-sm">Tiempo de Adelanto</div>
              <div className="text-blue-600 text-xs mt-2">vs 30-90 días espera</div>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <DollarSign className="h-8 w-8 text-purple-600 mb-3" />
              <div className="text-3xl font-bold text-purple-900 mb-1">45k€</div>
              <div className="text-purple-700 text-sm">ARR por Clínica Media</div>
              <div className="text-purple-600 text-xs mt-2">Fees de gestión factoring</div>
            </CardContent>
          </Card>
        </div>

        {/* Value Proposition */}
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Ventaja Competitiva</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                <div>
                  <div className="font-semibold text-blue-800">
                    Verificación Automática de Facturas
                  </div>
                  <div className="text-sm text-blue-700">
                    Como OralSpace-X emite las facturas (via Smart Claims), no hay riesgo de impago
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                <div>
                  <div className="font-semibold text-blue-800">
                    Sin Garantías ni Avales Personales
                  </div>
                  <div className="text-sm text-blue-700">
                    La factura verificada es la garantía. No se requiere aval del dentista.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                <div>
                  <div className="font-semibold text-blue-800">
                    Proyección: 2.4M€ ARR con 500 Clínicas
                  </div>
                  <div className="text-sm text-blue-700">
                    Ticket medio clínica: 100k€/año facturas | Fee: 3% | Penetración: 80%
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </BusinessCaseLayout>
  );
};

export default InvoiceFactoring;
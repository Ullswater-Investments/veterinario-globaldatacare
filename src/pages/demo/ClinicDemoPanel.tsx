import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Building2,
  ArrowLeft,
  Euro,
  TrendingUp,
  Users,
  Clock,
  AlertTriangle,
  Package,
  BarChart3,
  Percent,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
} from "recharts";
import { NavigationControls } from "@/components/ui/NavigationControls";
import { GlobalFooter } from "@/components/ui/GlobalFooter";
import KpiCard from "@/components/demo/KpiCard";
import OccupancyHeatmap from "@/components/demo/OccupancyHeatmap";
import AlertsPanel, { Alert } from "@/components/demo/AlertsPanel";
import {
  clinicProfile,
  financialKPIs,
  serviceKPIs,
  operationalKPIs,
  occupancyHeatmap,
  benchmarks,
  supplyAlerts,
  revenueData,
  federatedSavings,
  aiPredictions,
} from "@/data/demoKpis/clinicMockData";

const ClinicDemoPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState("service");

  const systemAlerts: Alert[] = aiPredictions.map((pred, idx) => ({
    id: `pred-${idx}`,
    type: pred.severity === "critical" ? "critical" : "warning",
    title: pred.type === "saturation" ? "Análisis Predictivo AI" : "Alerta Stock",
    message: pred.message,
  }));

  const criticalSupply = supplyAlerts.filter((s) => s.status !== "ok");

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 pt-4">
        <NavigationControls />
      </div>

      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-6">
            <Link
              to="/demo"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver a Demos
            </Link>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="p-4 bg-white/10 rounded-2xl">
              <Building2 className="w-12 h-12" />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-bold mb-1">
                {clinicProfile.name}
              </h1>
              <p className="text-white/80">
                {clinicProfile.director} • {clinicProfile.location} •{" "}
                {clinicProfile.employees} empleados
              </p>
            </div>
            <div className="flex gap-3">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 text-center">
                <div className="text-2xl font-bold">{clinicProfile.veterinarians}</div>
                <div className="text-xs text-white/80">Veterinarios</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 text-center">
                <div className="text-2xl font-bold">P{benchmarks[0].percentile}</div>
                <div className="text-xs text-white/80">Percentil Red</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="border-b bg-card">
        <div className="container mx-auto px-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-flex h-auto py-2 gap-2">
              <TabsTrigger value="service" className="px-6">
                Servicio
              </TabsTrigger>
              <TabsTrigger value="financial" className="px-6">
                Finanzas
              </TabsTrigger>
              <TabsTrigger value="operations" className="px-6">
                Operaciones
              </TabsTrigger>
              <TabsTrigger value="benchmark" className="px-6">
                Benchmarking
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            {/* Service Tab */}
            <TabsContent value="service" className="space-y-6 mt-0">
              <AlertsPanel title="Alertas Predictivas AI" alerts={systemAlerts} />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <KpiCard
                  title="NPS (Satisfacción)"
                  value={serviceKPIs.npsGlobal}
                  trend={serviceKPIs.npsTrend}
                  icon={<TrendingUp className="w-5 h-5 text-emerald-500" />}
                  variant="success"
                />
                <KpiCard
                  title="Tiempo Espera Medio"
                  value={serviceKPIs.avgWaitTime}
                  unit="min"
                  target={serviceKPIs.waitTimeTarget}
                  targetLabel="Objetivo"
                  icon={<Clock className="w-5 h-5 text-amber-500" />}
                  variant="warning"
                />
                <KpiCard
                  title="Tasa de Ocupación"
                  value={serviceKPIs.occupancyRate}
                  unit="%"
                  icon={<Users className="w-5 h-5 text-blue-500" />}
                />
                <KpiCard
                  title="Reclamaciones/Mes"
                  value={serviceKPIs.complaintsMonth}
                  trend={serviceKPIs.complaintsTrend}
                  icon={<AlertTriangle className="w-5 h-5 text-red-500" />}
                  variant="success"
                />
              </div>

              <OccupancyHeatmap
                title="Ocupación Semanal por Hora"
                subtitle="Porcentaje de ocupación de gabinetes"
                data={occupancyHeatmap}
              />
            </TabsContent>

            {/* Financial Tab */}
            <TabsContent value="financial" className="space-y-6 mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {financialKPIs.map((kpi) => (
                  <KpiCard
                    key={kpi.label}
                    title={kpi.label}
                    value={kpi.value.toLocaleString()}
                    unit={kpi.unit}
                    trend={kpi.trend}
                    target={kpi.target}
                    icon={<Euro className="w-5 h-5 text-emerald-500" />}
                    variant={kpi.trend > 0 ? "success" : kpi.trend < 0 ? "danger" : "default"}
                  />
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    Revenue vs Objetivo (6 meses)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis dataKey="month" className="fill-muted-foreground" />
                      <YAxis className="fill-muted-foreground" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                        }}
                        formatter={(value: number) => [`${value.toLocaleString()}€`]}
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="revenue"
                        stroke="hsl(var(--primary))"
                        strokeWidth={2}
                        dot={{ fill: "hsl(var(--primary))" }}
                        name="Revenue"
                      />
                      <Line
                        type="monotone"
                        dataKey="target"
                        stroke="hsl(var(--muted-foreground))"
                        strokeWidth={2}
                        strokeDasharray="5 5"
                        dot={false}
                        name="Objetivo"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Operations Tab */}
            <TabsContent value="operations" className="space-y-6 mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <KpiCard
                  title="Hospitalizados Activos"
                  value={operationalKPIs.hospitalizedActive}
                  icon={<Users className="w-5 h-5 text-blue-500" />}
                />
                <KpiCard
                  title="Pacientes Críticos"
                  value={operationalKPIs.criticalPatients}
                  icon={<AlertTriangle className="w-5 h-5 text-red-500" />}
                  variant="danger"
                />
                <KpiCard
                  title="Eficiencia Quirófanos"
                  value={operationalKPIs.orEfficiency}
                  unit="%"
                  icon={<Percent className="w-5 h-5 text-emerald-500" />}
                  variant="success"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Supply Chain Alerts */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Package className="w-5 h-5" />
                      Alertas de Stock
                      {criticalSupply.length > 0 && (
                        <Badge variant="destructive" className="ml-auto">
                          {criticalSupply.length} alertas
                        </Badge>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {supplyAlerts.map((alert) => (
                      <div
                        key={alert.id}
                        className={`p-4 rounded-xl border flex items-center justify-between ${
                          alert.status === "critical"
                            ? "bg-red-50 border-red-200"
                            : alert.status === "low"
                            ? "bg-amber-50 border-amber-200"
                            : "bg-emerald-50 border-emerald-200"
                        }`}
                      >
                        <div>
                          <div className="font-medium">{alert.product}</div>
                          <div className="text-sm text-muted-foreground">
                            Stock: {alert.currentStock} / Mín: {alert.minStock}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {alert.autoOrderPending && (
                            <Badge variant="outline">Pedido auto</Badge>
                          )}
                          <Badge
                            variant={
                              alert.status === "critical"
                                ? "destructive"
                                : alert.status === "low"
                                ? "secondary"
                                : "default"
                            }
                          >
                            {alert.status === "critical"
                              ? "Crítico"
                              : alert.status === "low"
                              ? "Bajo"
                              : "OK"}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Federated Savings */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      Ahorro Federado
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-6">
                      <div className="text-5xl font-bold text-emerald-600 mb-2">
                        {federatedSavings.totalAccumulated.toLocaleString()}€
                      </div>
                      <div className="text-muted-foreground">Ahorro acumulado total</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                      <div className="text-center">
                        <div className="text-xl font-bold">{federatedSavings.lastMonth}€</div>
                        <div className="text-xs text-muted-foreground">Este mes</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold">{federatedSavings.pendingOrders}</div>
                        <div className="text-xs text-muted-foreground">Pedidos pend.</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold">{federatedSavings.networkedClinics}</div>
                        <div className="text-xs text-muted-foreground">Clínicas red</div>
                      </div>
                    </div>
                    <Button className="w-full mt-4">Ver Pedidos Pendientes</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Benchmarking Tab */}
            <TabsContent value="benchmark" className="space-y-6 mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Comparativa con Red Federada</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                      data={benchmarks}
                      layout="vertical"
                      margin={{ left: 100 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis type="number" className="fill-muted-foreground" />
                      <YAxis
                        dataKey="metric"
                        type="category"
                        className="fill-muted-foreground"
                        width={90}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                        }}
                      />
                      <Legend />
                      <Bar dataKey="clinicValue" fill="hsl(var(--primary))" name="Tu Clínica" />
                      <Bar
                        dataKey="networkAverage"
                        fill="hsl(var(--muted-foreground))"
                        name="Media Red"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {benchmarks.map((b) => (
                  <Card key={b.metric}>
                    <CardContent className="p-4 text-center">
                      <div className="text-sm text-muted-foreground mb-1">{b.metric}</div>
                      <div className="text-2xl font-bold">
                        {b.clinicValue}
                        {b.unit}
                      </div>
                      <Badge
                        variant={b.percentile >= 70 ? "default" : "secondary"}
                        className="mt-2"
                      >
                        Percentil {b.percentile}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
};

export default ClinicDemoPanel;

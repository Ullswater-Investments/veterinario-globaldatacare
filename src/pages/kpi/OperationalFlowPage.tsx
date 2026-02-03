import React from "react";
import { Link } from "react-router-dom";
import {
  Clock,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Brain,
  ArrowLeft,
  Users,
  Calendar,
  Activity,
  Target,
  Zap,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { NavigationControls } from "@/components/ui/NavigationControls";
import { GlobalFooter } from "@/components/ui/GlobalFooter";
import {
  kpiSummary,
  waitTimeData,
  consultationDuration,
  cabinetOccupancy,
  bottlenecks,
  loadForecast,
  aiInsights,
} from "@/data/kpiSources/operationalFlowMockData";

const OperationalFlowPage: React.FC = () => {
  const getOccupancyColor = (value: number) => {
    if (value >= 95) return "bg-red-500";
    if (value >= 80) return "bg-amber-500";
    if (value >= 60) return "bg-blue-500";
    return "bg-emerald-500";
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 pt-4">
        <NavigationControls />
      </div>

      {/* Hero Header */}
      <section className="relative py-16 bg-gradient-to-br from-indigo-600 to-purple-600 overflow-hidden text-white">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/10 rounded-l-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <Link
            to="/portal/kpi"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al Dashboard
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Flujo Operativo</h1>
              <p className="text-white/80">Tiempos, ocupación y eficiencia</p>
            </div>
          </div>

          {/* Hero Stat - Wait Time */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md">
            <p className="text-white/80 text-sm font-medium mb-2">Tiempo de Espera Medio</p>
            <div className="flex items-end gap-4">
              <span className="text-6xl font-bold">{kpiSummary.avgWaitTime}<span className="text-3xl">min</span></span>
              <div className={`flex items-center gap-1 mb-2 ${kpiSummary.avgWaitTime > kpiSummary.waitTimeTarget ? 'text-amber-300' : 'text-emerald-300'}`}>
                <Target className="w-5 h-5" />
                <span className="font-medium">Objetivo: {kpiSummary.waitTimeTarget}min</span>
              </div>
            </div>
            <div className="mt-4 flex gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4" />
                <span>{kpiSummary.dailyConsultations} consultas/día</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>{kpiSummary.schedulingEfficiency}% eficiencia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KPI Summary Cards */}
      <section className="py-8 -mt-8 relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { label: "Espera Media", value: `${kpiSummary.avgWaitTime}min`, icon: Clock, status: kpiSummary.avgWaitTime > kpiSummary.waitTimeTarget ? 'warning' : 'ok' },
              { label: "Desviación Consulta", value: `+${kpiSummary.consultationDeviation}%`, icon: TrendingUp, status: 'warning' },
              { label: "Ocupación Gabinetes", value: `${kpiSummary.cabinetOccupancy}%`, icon: Users, status: 'ok' },
              { label: "Consultas/Día", value: kpiSummary.dailyConsultations, icon: Calendar, status: 'ok' },
              { label: "Eficiencia Prog.", value: `${kpiSummary.schedulingEfficiency}%`, icon: Target, status: 'ok' },
            ].map((kpi) => (
              <Card key={kpi.label} className="shadow-lg border-0">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 text-slate-500 text-xs mb-2">
                    <kpi.icon className="w-4 h-4" />
                    {kpi.label}
                  </div>
                  <p className={`text-2xl font-bold ${kpi.status === 'warning' ? 'text-amber-600' : 'text-slate-900'}`}>
                    {kpi.value}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Wait Time Trend */}
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Clock className="w-5 h-5 text-indigo-500" />
                  Tiempo de Espera (7 días)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-48 flex items-end justify-between gap-2">
                  {waitTimeData.trend.map((item) => (
                    <div key={item.day} className="flex-1 flex flex-col items-center gap-2">
                      <div
                        className={`w-full rounded-t-lg transition-all hover:opacity-80 ${item.value > 10 ? 'bg-amber-500' : 'bg-indigo-500'}`}
                        style={{ height: `${(item.value / 20) * 160}px` }}
                      />
                      <span className="text-xs text-slate-500">{item.day}</span>
                      <span className="text-xs font-bold text-slate-700">{item.value}m</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <p className="text-sm text-slate-500">
                    <span className="text-amber-600 font-medium">⚠ Martes y Viernes</span> superan el objetivo de 10 minutos
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Wait Time by Time Slot */}
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Activity className="w-5 h-5 text-purple-500" />
                  Espera por Franja Horaria
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {waitTimeData.byTimeSlot.map((slot) => (
                  <div key={slot.slot}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-600">{slot.slot}</span>
                      <span className={`font-bold ${slot.avg > 12 ? 'text-amber-600' : 'text-slate-900'}`}>{slot.avg} min</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${slot.avg > 14 ? 'bg-red-500' : slot.avg > 10 ? 'bg-amber-500' : 'bg-indigo-500'}`}
                        style={{ width: `${(slot.avg / 20) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Cabinet Occupancy Heatmap */}
          <Card className="mt-6 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-500" />
                Ocupación de Gabinetes (Heatmap Semanal)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left py-2 px-3 text-xs font-medium text-slate-500"></th>
                      {cabinetOccupancy.timeSlots.map((slot) => (
                        <th key={slot} className="text-center py-2 px-3 text-xs font-medium text-slate-500">{slot}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {cabinetOccupancy.heatmap.map((row) => (
                      <tr key={row.day}>
                        <td className="py-2 px-3 text-sm font-medium text-slate-700">{row.day}</td>
                        {row.slots.map((value, i) => (
                          <td key={i} className="py-2 px-3">
                            <div
                              className={`w-full h-8 rounded flex items-center justify-center text-xs font-bold text-white ${getOccupancyColor(value)}`}
                            >
                              {value}%
                            </div>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 flex gap-4 text-xs">
                <div className="flex items-center gap-2"><div className="w-4 h-4 bg-emerald-500 rounded" /> &lt;60%</div>
                <div className="flex items-center gap-2"><div className="w-4 h-4 bg-blue-500 rounded" /> 60-79%</div>
                <div className="flex items-center gap-2"><div className="w-4 h-4 bg-amber-500 rounded" /> 80-94%</div>
                <div className="flex items-center gap-2"><div className="w-4 h-4 bg-red-500 rounded" /> ≥95%</div>
              </div>
            </CardContent>
          </Card>

          {/* Bottlenecks & AI Insights */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            {/* Bottlenecks */}
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-500" />
                  Cuellos de Botella Detectados
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {bottlenecks.map((bn) => (
                  <div key={bn.id} className="p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-slate-900">{bn.area}</span>
                      <span className={`px-2 py-1 rounded text-xs font-bold ${
                        bn.impactColor === 'red' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                      }`}>
                        Impacto {bn.impact}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 mb-2">{bn.issue}</p>
                    <p className="text-sm text-indigo-600 font-medium">💡 {bn.suggestion}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* AI Insights */}
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Brain className="w-5 h-5 text-indigo-500" />
                  Análisis Predictivo AI
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {aiInsights.map((insight, i) => (
                  <div
                    key={i}
                    className={`p-4 rounded-lg border-l-4 ${
                      insight.priority === 'high' ? 'bg-red-50 border-red-500' :
                      insight.priority === 'medium' ? 'bg-amber-50 border-amber-500' :
                      'bg-emerald-50 border-emerald-500'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs font-bold uppercase ${
                        insight.priority === 'high' ? 'text-red-600' :
                        insight.priority === 'medium' ? 'text-amber-600' :
                        'text-emerald-600'
                      }`}>
                        {insight.type === 'trend' ? 'Tendencia' : insight.type === 'alert' ? 'Alerta' : 'Recomendación'}
                      </span>
                    </div>
                    <h4 className="font-medium text-slate-900 mb-1">{insight.title}</h4>
                    <p className="text-sm text-slate-600">{insight.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Load Forecast */}
          <Card className="mt-6 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-purple-500" />
                Predicción de Carga (Próximas 24h)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-32 flex items-end justify-between gap-1">
                {loadForecast.next24h.map((hour) => (
                  <div key={hour.hour} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      className="w-full bg-gradient-to-t from-indigo-500 to-purple-400 rounded-t transition-all hover:opacity-80"
                      style={{ height: `${(hour.predicted / 12) * 100}px` }}
                    />
                    <span className="text-[10px] text-slate-500 -rotate-45 origin-left">{hour.hour}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-indigo-50 rounded-lg">
                <p className="text-sm text-indigo-700">
                  <span className="font-bold">Horas Pico Previstas:</span> {loadForecast.peakHours.join(", ")}
                </p>
                <p className="text-sm text-indigo-600 mt-1">💡 {loadForecast.recommendation}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
};

export default OperationalFlowPage;

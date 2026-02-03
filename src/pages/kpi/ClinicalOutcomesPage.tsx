import React from "react";
import { Link } from "react-router-dom";
import {
  Stethoscope,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Brain,
  ArrowLeft,
  CheckCircle2,
  XCircle,
  Activity,
  Target,
  Heart,
  Repeat,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { NavigationControls } from "@/components/ui/NavigationControls";
import { GlobalFooter } from "@/components/ui/GlobalFooter";
import {
  kpiSummary,
  surgicalSuccessData,
  complications,
  reinterventions,
  diagnosticQuality,
  mortality,
  aiInsights,
} from "@/data/kpiSources/clinicalOutcomesMockData";

const ClinicalOutcomesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 pt-4">
        <NavigationControls />
      </div>

      {/* Hero Header */}
      <section className="relative py-16 bg-gradient-to-br from-emerald-600 to-teal-500 overflow-hidden text-white">
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
              <Stethoscope className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Resultado Clínico</h1>
              <p className="text-white/80">Éxito quirúrgico, complicaciones y calidad</p>
            </div>
          </div>

          {/* Hero Stat - Surgical Success */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md">
            <p className="text-white/80 text-sm font-medium mb-2">Tasa de Éxito Quirúrgico</p>
            <div className="flex items-end gap-4">
              <span className="text-6xl font-bold">{kpiSummary.surgicalSuccess}<span className="text-3xl">%</span></span>
              <div className="flex items-center gap-1 text-emerald-200 mb-2">
                <Target className="w-5 h-5" />
                <span className="font-medium">Objetivo: 95%</span>
              </div>
            </div>
            <div className="mt-4 flex gap-4 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>{kpiSummary.minorComplications}% comp. menores</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                <span>{kpiSummary.majorComplications}% comp. mayores</span>
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
              { label: "Éxito Quirúrgico", value: `${kpiSummary.surgicalSuccess}%`, icon: CheckCircle2, status: 'ok' },
              { label: "Comp. Menores", value: `${kpiSummary.minorComplications}%`, icon: AlertTriangle, status: 'ok' },
              { label: "Comp. Mayores", value: `${kpiSummary.majorComplications}%`, icon: XCircle, status: 'ok' },
              { label: "Reintervención 30d", value: `${kpiSummary.reinterventions30d}%`, icon: Repeat, status: 'ok' },
              { label: "Mortalidad Hosp.", value: `${kpiSummary.hospitalMortality}%`, icon: Heart, status: 'ok' },
            ].map((kpi) => (
              <Card key={kpi.label} className="shadow-lg border-0">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 text-slate-500 text-xs mb-2">
                    <kpi.icon className="w-4 h-4" />
                    {kpi.label}
                  </div>
                  <p className="text-2xl font-bold text-slate-900">{kpi.value}</p>
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
            {/* Surgical Success Trend */}
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-emerald-500" />
                  Evolución Éxito Quirúrgico (12 meses)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-48 flex items-end justify-between gap-1">
                  {surgicalSuccessData.trend.map((item) => (
                    <div key={item.month} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className="w-full bg-gradient-to-t from-emerald-500 to-teal-400 rounded-t transition-all hover:opacity-80"
                        style={{ height: `${((item.value - 90) / 10) * 160}px` }}
                      />
                      <span className="text-[10px] text-slate-500 -rotate-45 origin-left">{item.month}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between text-sm">
                  <span className="text-slate-500">Objetivo: 95%</span>
                  <span className="text-emerald-600 font-medium">✓ Superado consistentemente</span>
                </div>
              </CardContent>
            </Card>

            {/* Success by Surgery Type */}
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Activity className="w-5 h-5 text-teal-500" />
                  Éxito por Tipo de Cirugía
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {surgicalSuccessData.byType.map((item) => (
                  <div key={item.type}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-600">{item.type}</span>
                      <span className="font-bold text-slate-900">{item.rate}% <span className="text-slate-400 font-normal">({item.cases})</span></span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${item.rate >= 95 ? 'bg-emerald-500' : item.rate >= 90 ? 'bg-blue-500' : 'bg-amber-500'}`}
                        style={{ width: `${item.rate}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Complications */}
          <Card className="mt-6 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                Análisis de Complicaciones
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-slate-900 mb-3">Por Tipo</h4>
                  <div className="space-y-2">
                    {complications.byType.map((item) => (
                      <div key={item.type} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <span className={`w-2 h-2 rounded-full ${item.severity === 'Mayor' ? 'bg-red-500' : 'bg-amber-500'}`} />
                          <span className="text-sm text-slate-700">{item.type}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-900">{item.count}</span>
                          {item.trend === 'up' && <TrendingUp className="w-4 h-4 text-red-500" />}
                          {item.trend === 'down' && <TrendingDown className="w-4 h-4 text-emerald-500" />}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 mb-3">Tendencia Mensual</h4>
                  <div className="h-40 flex items-end justify-between gap-2">
                    {complications.monthlyTrend.map((item) => (
                      <div key={item.month} className="flex-1 flex flex-col items-center gap-1">
                        <div className="w-full flex flex-col gap-1">
                          <div
                            className="w-full bg-red-400 rounded-t"
                            style={{ height: `${item.major * 80}px` }}
                            title={`Mayores: ${item.major}%`}
                          />
                          <div
                            className="w-full bg-amber-400 rounded-t"
                            style={{ height: `${item.minor * 20}px` }}
                            title={`Menores: ${item.minor}%`}
                          />
                        </div>
                        <span className="text-xs text-slate-500">{item.month}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-4 text-xs">
                    <div className="flex items-center gap-2"><div className="w-3 h-3 bg-amber-400 rounded" /> Menores</div>
                    <div className="flex items-center gap-2"><div className="w-3 h-3 bg-red-400 rounded" /> Mayores</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Reinterventions & Mortality */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            {/* Reinterventions */}
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Repeat className="w-5 h-5 text-blue-500" />
                  Re-intervenciones 30 Días
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl font-bold text-slate-900">{reinterventions.rate}%</div>
                  <div className="text-sm text-emerald-600 font-medium">✓ Bajo objetivo ({reinterventions.target}%)</div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-slate-700">Últimos Casos</h4>
                  {reinterventions.cases.map((c) => (
                    <div key={c.id} className="p-3 bg-slate-50 rounded-lg text-sm">
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-slate-900">{c.originalProcedure}</span>
                        <span className="text-emerald-600">{c.outcome}</span>
                      </div>
                      <div className="text-slate-500">Motivo: {c.reason} • {c.daysAfter} días después</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* AI Insights */}
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Brain className="w-5 h-5 text-indigo-500" />
                  Análisis AI
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

          {/* Diagnostic Quality & Mortality */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            {/* Diagnostic Quality */}
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  Calidad Diagnóstica
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl font-bold text-emerald-600">{diagnosticQuality.confirmationRate}%</div>
                  <div className="text-sm text-slate-500">diagnósticos confirmados</div>
                </div>
                <div className="space-y-2">
                  {diagnosticQuality.byPathology.map((p) => (
                    <div key={p.pathology} className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">{p.pathology}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${p.confirmed}%` }} />
                        </div>
                        <span className="text-sm font-medium text-slate-900">{p.confirmed}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Mortality */}
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Heart className="w-5 h-5 text-red-500" />
                  Mortalidad Hospitalaria
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl font-bold text-slate-900">{mortality.rate}%</div>
                  <div className="text-sm text-emerald-600 font-medium">✓ Bajo benchmark ({mortality.benchmark}%)</div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-slate-700">Análisis de Causas</h4>
                  {mortality.analysis.map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg text-sm">
                      <span className="text-slate-700">{item.cause}</span>
                      <div className="flex items-center gap-3">
                        <span className="font-bold">{item.cases} casos</span>
                        <span className={`px-2 py-1 rounded text-xs ${
                          item.preventable === 'No' ? 'bg-slate-200 text-slate-600' : 'bg-amber-100 text-amber-700'
                        }`}>
                          {item.preventable === 'No' ? 'No prevenible' : 'Parcialmente prev.'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
};

export default ClinicalOutcomesPage;

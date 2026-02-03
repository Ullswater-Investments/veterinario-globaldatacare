import React from "react";
import { Link } from "react-router-dom";
import {
  Smartphone,
  TrendingUp,
  TrendingDown,
  FileText,
  MessageCircle,
  Brain,
  Star,
  ArrowLeft,
  Users,
  ThumbsUp,
  ThumbsDown,
  Minus,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { NavigationControls } from "@/components/ui/NavigationControls";
import { GlobalFooter } from "@/components/ui/GlobalFooter";
import {
  npsData,
  kpiSummary,
  evolutionReports,
  satisfactionCategories,
  feedbackHighlights,
  aiInsights,
} from "@/data/kpiSources/tutorVoiceMockData";

const TutorVoicePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 pt-4">
        <NavigationControls />
      </div>

      {/* Hero Header */}
      <section className="relative py-16 bg-gradient-to-br from-blue-600 to-cyan-500 overflow-hidden text-white">
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
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Voz del Tutor</h1>
              <p className="text-white/80">NPS, encuestas y reportes de evolución</p>
            </div>
          </div>

          {/* Hero Stat - NPS Gauge */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md">
            <p className="text-white/80 text-sm font-medium mb-2">NPS Global</p>
            <div className="flex items-end gap-4">
              <span className="text-6xl font-bold">{kpiSummary.npsGlobal}</span>
              <div className="flex items-center gap-1 text-emerald-300 mb-2">
                <TrendingUp className="w-5 h-5" />
                <span className="font-medium">+7 vs. 6 meses</span>
              </div>
            </div>
            <div className="mt-4 flex gap-4 text-sm">
              <div className="flex items-center gap-2">
                <ThumbsUp className="w-4 h-4 text-emerald-300" />
                <span>{npsData.distribution.promoters}% Promotores</span>
              </div>
              <div className="flex items-center gap-2">
                <Minus className="w-4 h-4 text-yellow-300" />
                <span>{npsData.distribution.passives}% Neutros</span>
              </div>
              <div className="flex items-center gap-2">
                <ThumbsDown className="w-4 h-4 text-red-300" />
                <span>{npsData.distribution.detractors}% Detractores</span>
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
              { label: "NPS Global", value: kpiSummary.npsGlobal, suffix: "", icon: Star },
              { label: "Respuestas/Mes", value: kpiSummary.responsesThisMonth, suffix: "", icon: MessageCircle },
              { label: "Reportes Evolución", value: kpiSummary.evolutionReports, suffix: "", icon: FileText },
              { label: "Tasa Respuesta", value: kpiSummary.responseRate, suffix: "%", icon: Users },
              { label: "Satisfacción Media", value: kpiSummary.avgSatisfaction, suffix: "/5", icon: Star },
            ].map((kpi) => (
              <Card key={kpi.label} className="shadow-lg border-0">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 text-slate-500 text-xs mb-2">
                    <kpi.icon className="w-4 h-4" />
                    {kpi.label}
                  </div>
                  <p className="text-2xl font-bold text-slate-900">
                    {kpi.value}{kpi.suffix}
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* NPS Trend Chart */}
            <Card className="lg:col-span-2 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-500" />
                  Evolución NPS (6 meses)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-48 flex items-end justify-between gap-2">
                  {npsData.trend.map((item) => (
                    <div key={item.month} className="flex-1 flex flex-col items-center gap-2">
                      <div
                        className="w-full bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t-lg transition-all hover:opacity-80"
                        style={{ height: `${(item.value / 100) * 160}px` }}
                      />
                      <span className="text-xs text-slate-500">{item.month}</span>
                      <span className="text-xs font-bold text-slate-700">{item.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Satisfaction Categories */}
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Star className="w-5 h-5 text-amber-500" />
                  Satisfacción por Categoría
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {satisfactionCategories.map((cat) => (
                  <div key={cat.category}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-600">{cat.category}</span>
                      <span className="font-bold text-slate-900">{cat.score}/5</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${cat.score >= 4.5 ? 'bg-emerald-500' : cat.score >= 4 ? 'bg-blue-500' : 'bg-amber-500'}`}
                        style={{ width: `${(cat.score / 5) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Evolution Reports */}
          <Card className="mt-6 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <FileText className="w-5 h-5 text-indigo-500" />
                Últimos Reportes de Evolución
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-100">
                      <th className="text-left py-3 px-4 text-xs font-medium text-slate-500 uppercase">Mascota</th>
                      <th className="text-left py-3 px-4 text-xs font-medium text-slate-500 uppercase">Tratamiento</th>
                      <th className="text-left py-3 px-4 text-xs font-medium text-slate-500 uppercase">Estado</th>
                      <th className="text-left py-3 px-4 text-xs font-medium text-slate-500 uppercase">Tutor</th>
                      <th className="text-left py-3 px-4 text-xs font-medium text-slate-500 uppercase">Notas</th>
                    </tr>
                  </thead>
                  <tbody>
                    {evolutionReports.map((report) => (
                      <tr key={report.id} className="border-b border-slate-50 hover:bg-slate-50">
                        <td className="py-3 px-4">
                          <div className="font-medium text-slate-900">{report.petName}</div>
                          <div className="text-xs text-slate-500">{report.species}</div>
                        </td>
                        <td className="py-3 px-4 text-sm text-slate-600">{report.treatment}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            report.statusColor === 'emerald' ? 'bg-emerald-100 text-emerald-700' :
                            report.statusColor === 'amber' ? 'bg-amber-100 text-amber-700' :
                            'bg-blue-100 text-blue-700'
                          }`}>
                            {report.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm text-slate-600">{report.tutorName}</td>
                        <td className="py-3 px-4 text-sm text-slate-500 max-w-xs truncate">{report.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Feedback & AI Insights */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            {/* Feedback Highlights */}
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-purple-500" />
                  Comentarios Destacados
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-emerald-600 mb-2 flex items-center gap-1">
                    <ThumbsUp className="w-4 h-4" /> Positivos
                  </h4>
                  <div className="space-y-2">
                    {feedbackHighlights.positive.map((fb, i) => (
                      <div key={i} className="bg-emerald-50 p-3 rounded-lg">
                        <p className="text-sm text-slate-700">"{fb.text}"</p>
                        <p className="text-xs text-slate-500 mt-1">— {fb.author}, {fb.date}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-red-600 mb-2 flex items-center gap-1">
                    <ThumbsDown className="w-4 h-4" /> Áreas de Mejora
                  </h4>
                  <div className="space-y-2">
                    {feedbackHighlights.negative.map((fb, i) => (
                      <div key={i} className="bg-red-50 p-3 rounded-lg">
                        <p className="text-sm text-slate-700">"{fb.text}"</p>
                        <p className="text-xs text-slate-500 mt-1">— {fb.author}, {fb.date}</p>
                      </div>
                    ))}
                  </div>
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
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
};

export default TutorVoicePage;

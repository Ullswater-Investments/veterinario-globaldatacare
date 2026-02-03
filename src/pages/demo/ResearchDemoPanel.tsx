import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FlaskConical,
  ArrowLeft,
  Database,
  Brain,
  MapPin,
  BookOpen,
  TrendingUp,
  AlertTriangle,
  Coins,
  Award,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { NavigationControls } from "@/components/ui/NavigationControls";
import { GlobalFooter } from "@/components/ui/GlobalFooter";
import KpiCard from "@/components/demo/KpiCard";
import {
  researcherProfile,
  marketplaceStats,
  datasets,
  federatedModels,
  epidemiologicalAlerts,
  regionalIncidences,
  publications,
  ecosystemContribution,
  datasetDistribution,
} from "@/data/demoKpis/researchMockData";

const ResearchDemoPanel: React.FC = () => {
  const activeModels = federatedModels.filter((m) => m.status === "training" || m.status === "validating");
  const highSeverityAlerts = epidemiologicalAlerts.filter((a) => a.severity === "high");

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 pt-4">
        <NavigationControls />
      </div>

      {/* Header */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-8">
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
            <img
              src={researcherProfile.avatarUrl}
              alt={researcherProfile.name}
              className="w-20 h-20 rounded-full border-4 border-white/20 shadow-xl"
            />
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-bold mb-1">
                {researcherProfile.name}
              </h1>
              <p className="text-white/80">
                {researcherProfile.specialty} • {researcherProfile.institution}
              </p>
            </div>
            <div className="flex items-center gap-3 bg-white/10 px-4 py-3 rounded-xl">
              <Award className="w-6 h-6" />
              <div>
                <div className="font-bold">{ecosystemContribution.networkRank}</div>
                <div className="text-sm text-white/80">
                  {ecosystemContribution.totalTokens} tokens
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Datasets & Models */}
            <div className="lg:col-span-2 space-y-6">
              {/* Marketplace Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <KpiCard
                  title="Datasets Publicados"
                  value={marketplaceStats.publishedDatasets}
                  icon={<Database className="w-5 h-5 text-blue-500" />}
                />
                <KpiCard
                  title="Ingresos Totales"
                  value={marketplaceStats.totalRevenue}
                  unit="€"
                  icon={<Coins className="w-5 h-5 text-emerald-500" />}
                  variant="success"
                />
                <KpiCard
                  title="Datasets Adquiridos"
                  value={marketplaceStats.acquiredDatasets}
                  icon={<Database className="w-5 h-5 text-purple-500" />}
                />
                <KpiCard
                  title="Algoritmos Licenciados"
                  value={marketplaceStats.licensedAlgorithms}
                  icon={<Brain className="w-5 h-5 text-amber-500" />}
                />
              </div>

              {/* Published Datasets */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="w-5 h-5" />
                    Mis Datasets Publicados
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {datasets
                      .filter((d) => d.status === "published")
                      .map((dataset) => (
                        <div
                          key={dataset.id}
                          className="flex items-center justify-between p-4 bg-muted/50 rounded-xl"
                        >
                          <div className="flex-1">
                            <div className="font-semibold">{dataset.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {dataset.category} • {dataset.records.toLocaleString()} registros
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-emerald-600">{dataset.revenue}€</div>
                            <div className="text-xs text-muted-foreground">
                              Actualizado {new Date(dataset.lastUpdated).toLocaleDateString("es-ES")}
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>

              {/* Federated Learning Models */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5" />
                    Modelos en Federated Learning
                    <Badge variant="secondary" className="ml-auto">
                      {activeModels.length} activos
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {federatedModels.map((model) => (
                    <div key={model.id} className="p-4 border rounded-xl">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="font-semibold">{model.name}</div>
                          <div className="text-sm text-muted-foreground">{model.objective}</div>
                        </div>
                        <Badge
                          variant={
                            model.status === "deployed"
                              ? "default"
                              : model.status === "training"
                              ? "secondary"
                              : model.status === "validating"
                              ? "outline"
                              : "destructive"
                          }
                        >
                          {model.status === "deployed"
                            ? "Desplegado"
                            : model.status === "training"
                            ? "Entrenando"
                            : model.status === "validating"
                            ? "Validando"
                            : "Pausado"}
                        </Badge>
                      </div>

                      {model.status !== "deployed" && (
                        <div className="mb-3">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Progreso</span>
                            <span>{model.progress}%</span>
                          </div>
                          <Progress value={model.progress} className="h-2" />
                        </div>
                      )}

                      <div className="grid grid-cols-3 gap-4 text-center text-sm">
                        <div className="p-2 bg-muted/50 rounded">
                          <div className="font-bold">{model.currentAccuracy}%</div>
                          <div className="text-xs text-muted-foreground">Precisión</div>
                        </div>
                        <div className="p-2 bg-muted/50 rounded">
                          <div className="font-bold">{model.targetAccuracy}%</div>
                          <div className="text-xs text-muted-foreground">Objetivo</div>
                        </div>
                        <div className="p-2 bg-muted/50 rounded">
                          <div className="font-bold">{model.participatingNodes}</div>
                          <div className="text-xs text-muted-foreground">Nodos</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Epidemiology & Impact */}
            <div className="space-y-6">
              {/* Dataset Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle>Distribución por Categoría</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={datasetDistribution}
                        dataKey="count"
                        nameKey="category"
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={70}
                        paddingAngle={2}
                      >
                        {datasetDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {datasetDistribution.map((cat) => (
                      <div key={cat.category} className="flex items-center gap-2 text-sm">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: cat.color }}
                        />
                        <span>{cat.category}</span>
                        <span className="text-muted-foreground ml-auto">{cat.count}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Epidemiological Alerts */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Alertas One Health
                    {highSeverityAlerts.length > 0 && (
                      <Badge variant="destructive" className="ml-auto">
                        {highSeverityAlerts.length} críticas
                      </Badge>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {epidemiologicalAlerts.map((alert) => (
                    <div
                      key={alert.id}
                      className={`p-3 rounded-xl border ${
                        alert.severity === "high"
                          ? "bg-red-50 border-red-200"
                          : alert.severity === "medium"
                          ? "bg-amber-50 border-amber-200"
                          : "bg-emerald-50 border-emerald-200"
                      }`}
                    >
                      <div className="flex items-start justify-between mb-1">
                        <div className="font-semibold text-sm">{alert.disease}</div>
                        <Badge
                          variant={
                            alert.trend === "rising"
                              ? "destructive"
                              : alert.trend === "declining"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {alert.trend === "rising"
                            ? "↑ Subiendo"
                            : alert.trend === "declining"
                            ? "↓ Bajando"
                            : "→ Estable"}
                        </Badge>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {alert.region} • Incidencia: {alert.incidenceRate}/10k
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Scientific Impact */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    Impacto Científico
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="p-3 bg-muted/50 rounded-xl">
                      <div className="text-2xl font-bold">{publications.length}</div>
                      <div className="text-xs text-muted-foreground">Publicaciones</div>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-xl">
                      <div className="text-2xl font-bold">
                        {publications.reduce((sum, p) => sum + p.citations, 0)}
                      </div>
                      <div className="text-xs text-muted-foreground">Citas</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {publications.slice(0, 2).map((pub) => (
                      <div key={pub.id} className="p-3 bg-muted/50 rounded-lg">
                        <div className="font-medium text-sm line-clamp-2">{pub.title}</div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {pub.journal} • {pub.citations} citas
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Ecosystem Contribution */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Contribución al Ecosistema
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-white mb-2">
                      <Award className="w-8 h-8" />
                    </div>
                    <div className="font-bold">{ecosystemContribution.networkRank}</div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tokens acumulados</span>
                      <span className="font-medium">{ecosystemContribution.totalTokens}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Algoritmos desplegados</span>
                      <span className="font-medium">{ecosystemContribution.algorithmsDeployed}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Contribuciones de datos</span>
                      <span className="font-medium">{ecosystemContribution.dataContributions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Peer reviews</span>
                      <span className="font-medium">{ecosystemContribution.peerReviews}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
};

export default ResearchDemoPanel;

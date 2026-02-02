import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  ArrowLeft,
  Database,
  Download,
  ShoppingCart,
  FileJson,
  Table,
  BarChart3,
  Shield,
  Calendar,
  Users,
  Tag,
  ExternalLink,
  CheckCircle2,
  Clock,
  Lock,
} from "lucide-react";
import { NavigationControls } from "@/components/ui/NavigationControls";
import { GlobalFooter } from "@/components/ui/GlobalFooter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table as UITable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getDatasetById, researchDatasets, ResearchDataset } from "@/data/researchDatasets";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const COLORS = ["#f97316", "#3b82f6", "#22c55e", "#a855f7", "#ef4444", "#06b6d4"];

const DatasetSamplePage: React.FC = () => {
  const { datasetId } = useParams<{ datasetId: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"json" | "table" | "stats">("json");

  const dataset = datasetId ? getDatasetById(datasetId) : undefined;

  if (!dataset) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="p-8 text-center">
            <Database className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-slate-800 mb-2">Dataset no encontrado</h2>
            <p className="text-slate-500 mb-4">El dataset solicitado no existe o ha sido eliminado.</p>
            <Button onClick={() => navigate("/portal/research")} variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" /> Volver al Marketplace
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Get related datasets (same category, excluding current)
  const relatedDatasets = researchDatasets
    .filter(ds => ds.category === dataset.category && ds.id !== dataset.id)
    .slice(0, 3);

  // Generate distribution data for charts
  const generateDistributionData = () => {
    if (!dataset.previewData || dataset.previewData.length === 0) return [];
    
    // Try to find a categorical field to visualize
    const firstRecord = dataset.previewData[0] as Record<string, unknown>;
    const categoricalFields = Object.keys(firstRecord).filter(key => 
      typeof firstRecord[key] === "string" && 
      !key.includes("id") && 
      !key.includes("patient") &&
      !key.includes("treatment")
    );
    
    if (categoricalFields.length > 0) {
      const field = categoricalFields.find(f => f.includes("breed") || f.includes("stage") || f.includes("grade")) || categoricalFields[0];
      const counts: Record<string, number> = {};
      dataset.previewData.forEach(record => {
        const value = String((record as Record<string, unknown>)[field] || "Unknown");
        counts[value] = (counts[value] || 0) + 1;
      });
      return Object.entries(counts).map(([name, value]) => ({ name, value }));
    }
    
    return [];
  };

  const distributionData = generateDistributionData();

  // Get table columns from preview data
  const getTableColumns = () => {
    if (!dataset.previewData || dataset.previewData.length === 0) return [];
    return Object.keys(dataset.previewData[0] as Record<string, unknown>);
  };

  const tableColumns = getTableColumns();

  const getStatusBadge = () => {
    switch (dataset.status) {
      case "Ready":
        return <Badge className="bg-green-100 text-green-700 border-green-200"><CheckCircle2 className="w-3 h-3 mr-1" /> Listo</Badge>;
      case "Generating":
        return <Badge className="bg-amber-100 text-amber-700 border-amber-200"><Clock className="w-3 h-3 mr-1" /> Generando {dataset.progress}%</Badge>;
      case "Sold":
        return <Badge className="bg-slate-100 text-slate-700 border-slate-200"><Lock className="w-3 h-3 mr-1" /> Vendido</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <div className="container mx-auto px-6 pt-6">
        <NavigationControls />
      </div>

      {/* Header Section */}
      <section className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link to="/portal/research" className="hover:text-white transition-colors flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" /> Marketplace
            </Link>
            <span>/</span>
            <span className="text-orange-400">{dataset.id}</span>
          </div>

          <div className="flex flex-col lg:flex-row justify-between gap-8">
            {/* Left: Title & Info */}
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-4">
                {getStatusBadge()}
                <Badge variant="outline" className="border-slate-600 text-slate-300">
                  {dataset.category}
                </Badge>
                <Badge variant="outline" className="border-slate-600 text-slate-300">
                  {dataset.species}
                </Badge>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4">{dataset.title}</h1>
              <p className="text-lg text-slate-300 mb-6">{dataset.description}</p>

              <div className="flex items-center gap-3 text-sm text-slate-400">
                <span className="flex items-center gap-1">
                  <Users className="w-4 h-4" /> {dataset.author}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> v{dataset.version}
                </span>
              </div>
            </div>

            {/* Right: Stats Card */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-md w-full lg:w-80">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-xs text-slate-400 mb-1">Registros (N)</p>
                    <p className="text-2xl font-bold font-mono">{dataset.n.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 mb-1">Precio</p>
                    <p className="text-2xl font-bold text-orange-400 font-mono">{dataset.price}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 mb-1">Formato</p>
                    <p className="text-sm font-medium">{dataset.type}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 mb-1">Calidad</p>
                    <p className="text-sm font-medium">{dataset.quality}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/20 rounded-lg mb-4">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span className="text-sm text-green-300">{dataset.privacyLevel}</span>
                </div>

                <div className="space-y-2">
                  <Button 
                    className="w-full bg-orange-600 hover:bg-orange-500"
                    disabled={dataset.status === "Sold"}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    {dataset.status === "Sold" ? "No disponible" : "Adquirir Dataset Completo"}
                  </Button>
                  <Button variant="outline" className="w-full border-slate-600 text-slate-300 hover:bg-slate-800">
                    <Download className="w-4 h-4 mr-2" /> Descargar Muestra (100 registros)
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Data Preview Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <Card>
            <CardHeader className="border-b">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <FileJson className="w-5 h-5 text-orange-500" />
                  Vista Previa de Datos Sintéticos
                </CardTitle>
                <div className="flex items-center gap-2 text-xs font-mono text-green-600 bg-green-50 px-3 py-1 rounded-full border border-green-200">
                  ● LIVE GENERATION
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "json" | "table" | "stats")}>
                <div className="border-b px-6">
                  <TabsList className="bg-transparent h-12">
                    <TabsTrigger value="json" className="data-[state=active]:bg-slate-100 gap-2">
                      <FileJson className="w-4 h-4" /> JSON
                    </TabsTrigger>
                    <TabsTrigger value="table" className="data-[state=active]:bg-slate-100 gap-2">
                      <Table className="w-4 h-4" /> Tabla
                    </TabsTrigger>
                    <TabsTrigger value="stats" className="data-[state=active]:bg-slate-100 gap-2">
                      <BarChart3 className="w-4 h-4" /> Estadísticas
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="json" className="m-0">
                  <div className="bg-slate-900 p-6 overflow-x-auto max-h-[500px]">
                    <pre className="font-mono text-sm text-green-400">
                      {JSON.stringify(dataset.previewData, null, 2)}
                    </pre>
                  </div>
                </TabsContent>

                <TabsContent value="table" className="m-0">
                  <div className="overflow-x-auto">
                    <UITable>
                      <TableHeader>
                        <TableRow>
                          {tableColumns.map(col => (
                            <TableHead key={col} className="whitespace-nowrap font-mono text-xs">
                              {col}
                            </TableHead>
                          ))}
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {dataset.previewData.map((record, idx) => (
                          <TableRow key={idx}>
                            {tableColumns.map(col => (
                              <TableCell key={col} className="whitespace-nowrap font-mono text-xs">
                                {String((record as Record<string, unknown>)[col] ?? "-")}
                              </TableCell>
                            ))}
                          </TableRow>
                        ))}
                      </TableBody>
                    </UITable>
                  </div>
                </TabsContent>

                <TabsContent value="stats" className="m-0 p-6">
                  {distributionData.length > 0 ? (
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-sm font-semibold text-slate-700 mb-4">Distribución por categoría</h4>
                        <ResponsiveContainer width="100%" height={300}>
                          <BarChart data={distributionData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="value" fill="#f97316" radius={[4, 4, 0, 0]} />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-700 mb-4">Proporción</h4>
                        <ResponsiveContainer width="100%" height={300}>
                          <PieChart>
                            <Pie
                              data={distributionData}
                              cx="50%"
                              cy="50%"
                              labelLine={false}
                              label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                              outerRadius={100}
                              fill="#8884d8"
                              dataKey="value"
                            >
                              {distributionData.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12 text-slate-500">
                      <BarChart3 className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p>No hay suficientes datos categóricos para generar estadísticas.</p>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {dataset.tags.map(tag => (
              <Badge key={tag} variant="secondary" className="bg-slate-100 text-slate-600">
                <Tag className="w-3 h-3 mr-1" /> {tag}
              </Badge>
            ))}
          </div>

          {/* SNOMED Codes */}
          {dataset.snomed_codes && dataset.snomed_codes.length > 0 && (
            <div className="mt-4 p-4 bg-blue-50 border border-blue-100 rounded-lg">
              <h4 className="text-sm font-semibold text-blue-800 mb-2">Códigos SNOMED-VET</h4>
              <div className="flex flex-wrap gap-2">
                {dataset.snomed_codes.map(code => (
                  <code key={code} className="px-2 py-1 bg-white border border-blue-200 rounded text-xs font-mono text-blue-700">
                    {code}
                  </code>
                ))}
              </div>
            </div>
          )}

          {/* Metadata */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-white border border-slate-200 rounded-lg">
              <p className="text-xs text-slate-500 mb-1">Fecha de creación</p>
              <p className="font-medium">{dataset.createdAt}</p>
            </div>
            <div className="p-4 bg-white border border-slate-200 rounded-lg">
              <p className="text-xs text-slate-500 mb-1">Última actualización</p>
              <p className="font-medium">{dataset.updatedAt}</p>
            </div>
            <div className="p-4 bg-white border border-slate-200 rounded-lg">
              <p className="text-xs text-slate-500 mb-1">Versión</p>
              <p className="font-medium">v{dataset.version}</p>
            </div>
            <div className="p-4 bg-white border border-slate-200 rounded-lg">
              <p className="text-xs text-slate-500 mb-1">Nivel de privacidad</p>
              <p className="font-medium text-green-600">{dataset.privacyLevel}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Datasets */}
      {relatedDatasets.length > 0 && (
        <section className="py-12 bg-slate-100">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Datasets Relacionados</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedDatasets.map(ds => (
                <Card key={ds.id} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate(ds.sampleUrl)}>
                  <CardContent className="p-6">
                    <Badge className="bg-orange-50 text-orange-700 border-orange-200 mb-3">
                      {ds.category}
                    </Badge>
                    <h3 className="font-bold text-slate-900 mb-2 line-clamp-2">{ds.title}</h3>
                    <p className="text-sm text-slate-500 mb-4">Por: {ds.author}</p>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">{ds.n.toLocaleString()} registros</span>
                      <span className="font-bold text-orange-600">{ds.price}</span>
                    </div>
                    <Button variant="ghost" className="w-full mt-4 text-orange-600 hover:text-orange-700 hover:bg-orange-50">
                      Ver muestra <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <GlobalFooter />
    </div>
  );
};

export default DatasetSamplePage;

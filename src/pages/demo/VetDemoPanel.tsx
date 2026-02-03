import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Stethoscope,
  ArrowLeft,
  Clock,
  Users,
  Activity,
  Brain,
  AlertTriangle,
  CheckCircle2,
  Timer,
  Pill,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { NavigationControls } from "@/components/ui/NavigationControls";
import { GlobalFooter } from "@/components/ui/GlobalFooter";
import KpiCard from "@/components/demo/KpiCard";
import TrendChart from "@/components/demo/TrendChart";
import AlertsPanel, { Alert } from "@/components/demo/AlertsPanel";
import {
  vetProfile,
  todayStats,
  todayAppointments,
  hospitalizedPatients,
  aiSuggestions,
  performanceData,
  performanceMetrics,
  aiAccuracyHistory,
} from "@/data/demoKpis/vetMockData";

const VetDemoPanel: React.FC = () => {
  const pendingSuggestions = aiSuggestions.filter((s) => !s.reviewed);

  const aiAlerts: Alert[] = pendingSuggestions.map((s) => ({
    id: s.id,
    type: "prediction",
    title: `Sugerencia AI - ${s.confidence}% confianza`,
    message: `${s.patientName}: ${s.suggestion}`,
    timestamp: new Date(s.timestamp).toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
    }),
  }));

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 pt-4">
        <NavigationControls />
      </div>

      {/* Header */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white py-8">
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
              src={vetProfile.avatarUrl}
              alt={vetProfile.name}
              className="w-20 h-20 rounded-full border-4 border-white/20 shadow-xl"
            />
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-bold mb-1">{vetProfile.name}</h1>
              <p className="text-white/80">
                {vetProfile.specialty} • Colegiado: {vetProfile.licenseNumber}
              </p>
            </div>
          </div>

          {/* Daily Status Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-2 text-white/80 text-sm mb-1">
                <CheckCircle2 className="w-4 h-4" />
                Consultas Hoy
              </div>
              <div className="text-2xl font-bold">
                {todayStats.completedConsultations}/{todayStats.totalScheduled}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-2 text-white/80 text-sm mb-1">
                <Timer className="w-4 h-4" />
                Próxima Cita
              </div>
              <div className="text-2xl font-bold">{todayStats.nextAppointmentIn} min</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-2 text-white/80 text-sm mb-1">
                <Users className="w-4 h-4" />
                Hospitalizados
              </div>
              <div className="text-2xl font-bold">{todayStats.hospitalized}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-2 text-white/80 text-sm mb-1">
                <Brain className="w-4 h-4" />
                Sugerencias AI
              </div>
              <div className="text-2xl font-bold">{pendingSuggestions.length} pendientes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Performance */}
            <div className="lg:col-span-2 space-y-6">
              {/* AI Alerts */}
              <AlertsPanel title="Copiloto AI - Sugerencias Diagnósticas" alerts={aiAlerts} />

              {/* Performance Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <KpiCard
                  title="Tiempo Medio Consulta"
                  value={performanceMetrics.avgConsultationTime}
                  unit="min"
                  trend={-8}
                  trendLabel="vs media clínica"
                  icon={<Clock className="w-5 h-5" />}
                  variant="success"
                />
                <KpiCard
                  title="Diagnóstico Confirmado"
                  value={performanceMetrics.diagnosisAccuracy}
                  unit="%"
                  icon={<Activity className="w-5 h-5" />}
                  variant="success"
                />
              </div>

              {/* Performance Chart */}
              <TrendChart
                title="Carga de Trabajo (Últimos 30 días)"
                subtitle="Consultas realizadas y tiempo medio por semana"
                data={performanceData}
                dataKey="consultations"
                xAxisKey="date"
                type="area"
                color="hsl(var(--primary))"
                height={220}
              />

              {/* Today's Schedule */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Agenda de Hoy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {todayAppointments.map((apt) => (
                      <div
                        key={apt.id}
                        className={`flex items-center gap-4 p-3 rounded-lg border ${
                          apt.status === "completed"
                            ? "bg-muted/30 border-transparent"
                            : apt.status === "in-progress"
                            ? "bg-primary/10 border-primary/30"
                            : "bg-card border-border"
                        }`}
                      >
                        <div className="text-sm font-mono text-muted-foreground w-12">
                          {apt.time}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">{apt.patientName}</div>
                          <div className="text-sm text-muted-foreground">
                            {apt.species} • {apt.reason}
                          </div>
                        </div>
                        <Badge
                          variant={
                            apt.status === "completed"
                              ? "secondary"
                              : apt.status === "in-progress"
                              ? "default"
                              : "outline"
                          }
                        >
                          {apt.status === "completed"
                            ? `${apt.duration}min`
                            : apt.status === "in-progress"
                            ? "En curso"
                            : "Pendiente"}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Hospitalization & AI */}
            <div className="space-y-6">
              {/* AI Accuracy */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5" />
                    Precisión del AI
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <div className="text-4xl font-bold text-primary">
                      {aiAccuracyHistory.overall}%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Precisión histórica
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sugerencias totales</span>
                      <span className="font-medium">{aiAccuracyHistory.totalSuggestions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Aceptadas</span>
                      <span className="font-medium text-emerald-600">
                        {aiAccuracyHistory.acceptedSuggestions}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Último mes</span>
                      <span className="font-medium">{aiAccuracyHistory.lastMonth}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Hospitalized Patients */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Hospitalizados a mi Cargo
                    <Badge variant="secondary" className="ml-auto">
                      {hospitalizedPatients.length}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {hospitalizedPatients.map((patient) => (
                    <motion.div
                      key={patient.id}
                      className={`p-4 rounded-xl border ${
                        patient.status === "critical"
                          ? "bg-red-50 border-red-200"
                          : patient.status === "stable"
                          ? "bg-blue-50 border-blue-200"
                          : "bg-emerald-50 border-emerald-200"
                      }`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="font-semibold">{patient.patientName}</div>
                          <div className="text-xs text-muted-foreground">
                            {patient.species} • Jaula {patient.cageNumber}
                          </div>
                        </div>
                        <Badge
                          variant={
                            patient.status === "critical"
                              ? "destructive"
                              : patient.status === "stable"
                              ? "secondary"
                              : "default"
                          }
                        >
                          {patient.status === "critical"
                            ? "Crítico"
                            : patient.status === "stable"
                            ? "Estable"
                            : "Recuperando"}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground mb-2">
                        {patient.condition}
                      </div>
                      <div
                        className={`flex items-center gap-2 text-sm font-medium ${
                          patient.minutesToMed < 30 ? "text-amber-600" : "text-muted-foreground"
                        }`}
                      >
                        <Pill className="w-4 h-4" />
                        {patient.nextMedication}
                        <Badge
                          variant={patient.minutesToMed < 30 ? "destructive" : "outline"}
                          className="ml-auto"
                        >
                          {patient.minutesToMed} min
                        </Badge>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>

              {/* Performance Comparison */}
              <Card>
                <CardHeader>
                  <CardTitle>Comparativa con Clínica</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Tiempo consulta</span>
                      <span className="text-emerald-600 font-medium">
                        {performanceMetrics.avgConsultationTime}min vs {performanceMetrics.clinicAverage}min
                      </span>
                    </div>
                    <Progress
                      value={(performanceMetrics.avgConsultationTime / performanceMetrics.clinicAverage) * 100}
                      className="h-2"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Satisfacción pacientes</span>
                      <span className="font-medium">{performanceMetrics.patientSatisfaction}/5</span>
                    </div>
                    <Progress value={(performanceMetrics.patientSatisfaction / 5) * 100} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Tasa reprogramación</span>
                      <span className="font-medium">{performanceMetrics.reschedulingRate}%</span>
                    </div>
                    <Progress value={performanceMetrics.reschedulingRate} className="h-2" />
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

export default VetDemoPanel;

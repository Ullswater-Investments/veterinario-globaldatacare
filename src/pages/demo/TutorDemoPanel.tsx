import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  PawPrint,
  ArrowLeft,
  Calendar,
  Scale,
  Heart,
  Euro,
  Shield,
  Coins,
  Gift,
  Eye,
  EyeOff,
  Clock,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { NavigationControls } from "@/components/ui/NavigationControls";
import { GlobalFooter } from "@/components/ui/GlobalFooter";
import KpiCard from "@/components/demo/KpiCard";
import TrendChart from "@/components/demo/TrendChart";
import {
  tutorProfile,
  pets,
  yearlyExpenses,
  monthlyExpenseTrend,
  privacyConnections,
  dataTokens,
  loyaltyBenefits,
  federatedSavings,
} from "@/data/demoKpis/tutorMockData";

const TutorDemoPanel: React.FC = () => {
  const [selectedPet, setSelectedPet] = useState(pets[0]);

  const totalYearlyExpense = yearlyExpenses.reduce((sum, e) => sum + e.amount, 0);
  const totalTokens = dataTokens.reduce((sum, t) => sum + t.earnedTokens, 0);

  const getDaysUntil = (dateStr: string) => {
    const date = new Date(dateStr);
    const today = new Date();
    const diff = Math.ceil((date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    return diff;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 pt-4">
        <NavigationControls />
      </div>

      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-8">
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
              src={tutorProfile.avatarUrl}
              alt={tutorProfile.name}
              className="w-20 h-20 rounded-full border-4 border-white/20 shadow-xl"
            />
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-bold mb-1">
                Hola, {tutorProfile.name.split(" ")[0]}
              </h1>
              <p className="text-white/80">
                {tutorProfile.totalPets} mascotas registradas • Miembro desde{" "}
                {new Date(tutorProfile.memberSince).getFullYear()}
              </p>
            </div>
            <div className="flex items-center gap-3 bg-white/10 px-4 py-3 rounded-xl">
              <Gift className="w-6 h-6" />
              <div>
                <div className="text-2xl font-bold">{tutorProfile.loyaltyPoints}</div>
                <div className="text-sm text-white/80">Puntos fidelidad</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pet Selector */}
      <section className="py-6 bg-muted/50 border-b">
        <div className="container mx-auto px-6">
          <div className="flex gap-4 overflow-x-auto pb-2">
            {pets.map((pet) => (
              <button
                key={pet.id}
                onClick={() => setSelectedPet(pet)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all min-w-fit ${
                  selectedPet.id === pet.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card hover:bg-muted border"
                }`}
              >
                <img
                  src={pet.photoUrl}
                  alt={pet.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="font-semibold">{pet.name}</div>
                  <div className={`text-xs ${selectedPet.id === pet.id ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {pet.species} • {pet.breed}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Pet Details */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                key={selectedPet.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <PawPrint className="w-5 h-5" />
                      {selectedPet.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Wellness Score */}
                      <div className="text-center p-4 bg-muted/50 rounded-xl">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white text-2xl font-bold mb-2">
                          {selectedPet.wellnessScore}
                        </div>
                        <div className="text-sm font-medium">Score Bienestar</div>
                        <div className="text-xs text-muted-foreground">de 10</div>
                      </div>

                      {/* Weight */}
                      <div className="p-4 bg-muted/50 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <Scale className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm font-medium">Peso</span>
                        </div>
                        <div className="text-2xl font-bold">
                          {selectedPet.currentWeight} kg
                        </div>
                        <div className="text-xs text-muted-foreground mb-2">
                          Ideal: {selectedPet.idealWeight} kg
                        </div>
                        <Progress
                          value={(selectedPet.currentWeight / selectedPet.idealWeight) * 100}
                          className="h-2"
                        />
                      </div>

                      {/* Next Vaccine */}
                      <div className="p-4 bg-muted/50 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm font-medium">Próxima Vacuna</span>
                        </div>
                        <div className="text-lg font-bold">{selectedPet.nextVaccine.name}</div>
                        <Badge
                          variant={getDaysUntil(selectedPet.nextVaccine.dueDate) < 30 ? "destructive" : "secondary"}
                          className="mt-1"
                        >
                          <Clock className="w-3 h-3 mr-1" />
                          En {getDaysUntil(selectedPet.nextVaccine.dueDate)} días
                        </Badge>
                      </div>
                    </div>

                    {selectedPet.nextAppointment && (
                      <div className="mt-4 p-4 bg-primary/10 border border-primary/20 rounded-xl flex items-center gap-4">
                        <Heart className="w-6 h-6 text-primary" />
                        <div>
                          <div className="font-semibold">Próxima Cita</div>
                          <div className="text-sm text-muted-foreground">
                            {selectedPet.nextAppointment.reason} •{" "}
                            {new Date(selectedPet.nextAppointment.date).toLocaleDateString("es-ES", {
                              weekday: "long",
                              day: "numeric",
                              month: "long",
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Economy Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Euro className="w-5 h-5" />
                    Mi Economía
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-4 text-sm text-muted-foreground">
                        Gasto Anual por Categoría
                      </h4>
                      <ResponsiveContainer width="100%" height={200}>
                        <PieChart>
                          <Pie
                            data={yearlyExpenses}
                            dataKey="amount"
                            nameKey="category"
                            cx="50%"
                            cy="50%"
                            innerRadius={50}
                            outerRadius={80}
                            paddingAngle={2}
                          >
                            {yearlyExpenses.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip
                            formatter={(value: number) => [`${value}€`, "Gasto"]}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                      <div className="text-center">
                        <div className="text-2xl font-bold">{totalYearlyExpense}€</div>
                        <div className="text-sm text-muted-foreground">Total este año</div>
                      </div>
                    </div>

                    <div>
                      <TrendChart
                        title="Evolución Mensual"
                        data={monthlyExpenseTrend}
                        dataKey="amount"
                        xAxisKey="month"
                        type="area"
                        color="hsl(var(--primary))"
                        height={180}
                      />
                      <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
                        <div className="flex items-center gap-2 text-emerald-700">
                          <Coins className="w-4 h-4" />
                          <span className="font-semibold">Ahorro Federado</span>
                        </div>
                        <div className="text-xl font-bold text-emerald-800 mt-1">
                          {federatedSavings.totalSaved}€
                        </div>
                        <div className="text-xs text-emerald-600">
                          {federatedSavings.purchases} compras • {federatedSavings.lastPurchase}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Privacy & Tokens */}
            <div className="space-y-6">
              {/* Privacy */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Privacidad de Datos
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {privacyConnections.map((conn) => (
                    <div
                      key={conn.clinicName}
                      className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            conn.status === "active"
                              ? "bg-emerald-500"
                              : conn.status === "pending"
                              ? "bg-amber-500"
                              : "bg-slate-300"
                          }`}
                        />
                        <div>
                          <div className="font-medium text-sm">{conn.clinicName}</div>
                          <div className="text-xs text-muted-foreground">
                            Acceso: {conn.accessLevel}
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        {conn.status === "active" ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Data Tokens */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Coins className="w-5 h-5" />
                    Tokens de Datos
                    <Badge variant="secondary" className="ml-auto">
                      {totalTokens} tokens
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {dataTokens.map((token) => (
                    <div
                      key={token.id}
                      className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                    >
                      <div>
                        <div className="font-medium text-sm">{token.type}</div>
                        <div className="text-xs text-muted-foreground">
                          {new Date(token.date).toLocaleDateString("es-ES")}
                        </div>
                      </div>
                      <Badge className="bg-amber-100 text-amber-800">
                        +{token.earnedTokens}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Loyalty Benefits */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Gift className="w-5 h-5" />
                    Beneficios Disponibles
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {loyaltyBenefits.map((benefit) => (
                    <div
                      key={benefit.name}
                      className={`p-3 rounded-lg border ${
                        benefit.available
                          ? "bg-primary/5 border-primary/20"
                          : "bg-muted/50 border-transparent opacity-60"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-sm">{benefit.name}</span>
                        <Badge variant={benefit.available ? "default" : "secondary"}>
                          {benefit.pointsRequired} pts
                        </Badge>
                      </div>
                      {benefit.available && (
                        <Button size="sm" className="w-full mt-2">
                          Canjear
                        </Button>
                      )}
                    </div>
                  ))}
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

export default TutorDemoPanel;

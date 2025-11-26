import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  PieChart, Pie, Cell, ResponsiveContainer, 
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend 
} from "recharts";

const COLORS = ["#3b82f6", "#10b981", "#8b5cf6", "#f59e0b", "#ef4444", "#06b6d4"];

const equityData = [
  { name: "Asociación Clínicas", value: 51, color: "#3b82f6" },
  { name: "15 Promotores", value: 30, color: "#10b981" },
  { name: "Socios Tecnológicos", value: 19, color: "#8b5cf6" },
];

const revenueData = [
  { name: "Marketplace", value: 40000 },
  { name: "Datos Pharma", value: 15000 },
  { name: "Trazabilidad", value: 20000 },
  { name: "Seguros", value: 35000 },
  { name: "Wallet Premium", value: 10000 },
];

const nodeData = [
  { type: "Clínicas", count: 800 },
  { type: "Laboratorios", count: 100 },
  { type: "Industria", count: 50 },
  { type: "Aseguradoras", count: 10 },
  { type: "Investigación", count: 20 },
  { type: "Financieras", count: 10 },
  { type: "Reguladores", count: 10 },
];

const Slide1 = () => (
  <div className="flex flex-col items-center justify-center h-full gap-8">
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-6xl font-bold text-center text-white leading-tight"
    >
      INFORME ESTRATÉGICO EXPANDIDO
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="text-3xl text-blue-400 text-center"
    >
      ECOSISTEMA DE DATOS FEDERADOS ORALspace-X
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="mt-8 space-y-3 text-slate-400 text-xl text-center"
    >
      <div className="text-red-400 font-semibold">CONFIDENCIAL</div>
      <div>FECHA: 26 Noviembre 2025</div>
      <div className="mt-6">
        <div className="text-green-400">Para: Dirección General, Accuro Technology</div>
        <div className="text-sm">(Sr. Iván Becerro)</div>
      </div>
      <div>
        <div className="text-blue-400">De: Dirección, Ullswater Investments</div>
      </div>
    </motion.div>
  </div>
);

const Slide2 = () => (
  <div className="h-full flex flex-col justify-center gap-8 px-16">
    <motion.h2
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="text-5xl font-bold text-white mb-4"
    >
      1. Definición del Activo Tecnológico
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-2xl text-slate-300 leading-relaxed"
    >
      ORALspace-X no es un PMS ni un ERP. Es una <span className="text-blue-400 font-semibold">Infraestructura de Datos Soberana (IDS)</span> basada en Gaia-X y EHDS. Actúa como la 'columna vertebral invisible' que conecta sistemas heterogéneos, permitiendo el flujo seguro, auditado y monetizable de datos.
    </motion.p>
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="flex justify-around items-center mt-8"
    >
      <div className="text-center">
        <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center text-4xl mb-4">🏥</div>
        <div className="text-xl text-white">Clínica</div>
      </div>
      <div className="text-6xl text-green-400">⟷</div>
      <div className="text-center">
        <div className="w-32 h-32 bg-purple-600 rounded-full flex items-center justify-center text-4xl mb-4">🏭</div>
        <div className="text-xl text-white">Laboratorio</div>
      </div>
      <div className="text-6xl text-green-400">⟷</div>
      <div className="text-center">
        <div className="w-32 h-32 bg-emerald-600 rounded-full flex items-center justify-center text-4xl mb-4">🛡️</div>
        <div className="text-xl text-white">Aseguradora</div>
      </div>
    </motion.div>
  </div>
);

const Slide3 = () => (
  <div className="h-full flex flex-col justify-center gap-8 px-16">
    <motion.h2
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="text-5xl font-bold text-white mb-4"
    >
      2. Proyección de Escala (Objetivo 1000)
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-2xl text-slate-300"
    >
      Modelo de negocio basado en <span className="text-green-400 font-bold">1.000 nodos activos</span> en 36 meses. Impacto: <span className="text-blue-400 font-bold">1.2M ciudadanos</span>.
    </motion.p>
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="grid grid-cols-2 gap-6 mt-8"
    >
      {nodeData.map((node, idx) => (
        <motion.div
          key={node.type}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7 + idx * 0.1 }}
          className="bg-slate-800 p-6 rounded-lg border border-slate-700"
        >
          <div className="text-slate-400 text-xl mb-2">{node.type}</div>
          <div className="text-4xl font-bold text-white">{node.count}</div>
        </motion.div>
      ))}
    </motion.div>
  </div>
);

const Slide4 = () => (
  <div className="h-full flex flex-col justify-center gap-8 px-16">
    <motion.h2
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="text-5xl font-bold text-white mb-4"
    >
      3. Financiación del Lanzamiento
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-2xl text-slate-300"
    >
      Apalancamiento en subvenciones públicas (Kit Digital / Red.es). Minimización de exposición de capital propio.
    </motion.p>
    <div className="grid grid-cols-2 gap-8 mt-8">
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-br from-blue-900 to-blue-700 p-8 rounded-xl"
      >
        <div className="text-2xl font-bold text-white mb-4">Grupo A (5 Clínicas)</div>
        <div className="text-xl text-blue-200 mb-2">Solicitud: 30k€</div>
        <div className="text-xl text-blue-200">Adelanto: 5k€ c/u</div>
      </motion.div>
      <motion.div
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="bg-gradient-to-br from-purple-900 to-purple-700 p-8 rounded-xl"
      >
        <div className="text-2xl font-bold text-white mb-4">Grupo B (10 Clínicas)</div>
        <div className="text-xl text-purple-200 mb-2">Solicitud: 15k€</div>
        <div className="text-xl text-purple-200">Adelanto: 2.5k€ c/u</div>
      </motion.div>
    </div>
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1 }}
      className="bg-green-900 p-8 rounded-xl text-center mt-4"
    >
      <div className="text-3xl font-bold text-white">
        Caja Inicial: <span className="text-green-300">50.000€</span> | Facturación Final: <span className="text-green-300">150.000€</span>
      </div>
    </motion.div>
  </div>
);

const Slide5 = () => (
  <div className="h-full flex flex-col justify-center gap-8 px-16">
    <motion.h2
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="text-5xl font-bold text-white mb-4"
    >
      4. Modelo de Negocio y Propiedad
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-2xl text-slate-300"
    >
      Propuesta de SPV para garantizar soberanía y control.
    </motion.p>
    <div className="grid grid-cols-2 gap-12 mt-8">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={equityData}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={140}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              label={(entry) => `${entry.value}%`}
            >
              {equityData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </motion.div>
      <motion.div
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="flex flex-col justify-center gap-6"
      >
        {equityData.map((item, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <div className="w-6 h-6 rounded" style={{ backgroundColor: item.color }} />
            <div className="text-xl text-white">{item.name}</div>
            <div className="text-2xl font-bold ml-auto" style={{ color: item.color }}>{item.value}%</div>
          </div>
        ))}
      </motion.div>
    </div>
  </div>
);

const Slide6 = () => (
  <div className="h-full flex flex-col justify-center gap-8 px-16">
    <motion.h2
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="text-5xl font-bold text-white mb-4"
    >
      Ingresos Recurrentes para Ullswater & Accuro
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-2xl text-slate-300"
    >
      Nuestra rentabilidad va más allá del equity:
    </motion.p>
    <div className="grid grid-cols-3 gap-8 mt-8">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-br from-green-900 to-green-700 p-8 rounded-xl text-center"
      >
        <div className="text-6xl mb-4">💰</div>
        <div className="text-2xl font-bold text-white mb-2">Royalties</div>
        <div className="text-3xl text-green-300 font-bold">19%</div>
        <div className="text-xl text-green-200 mt-2">Beneficios Netos</div>
      </motion.div>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="bg-gradient-to-br from-blue-900 to-blue-700 p-8 rounded-xl text-center"
      >
        <div className="text-6xl mb-4">🖥️</div>
        <div className="text-2xl font-bold text-white mb-2">Mantenimiento</div>
        <div className="text-3xl text-blue-300 font-bold">50.000€/mes</div>
        <div className="text-xl text-blue-200 mt-2">50€/nodo × 1000</div>
      </motion.div>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="bg-gradient-to-br from-purple-900 to-purple-700 p-8 rounded-xl text-center"
      >
        <div className="text-6xl mb-4">⚙️</div>
        <div className="text-2xl font-bold text-white mb-2">Fee de Éxito</div>
        <div className="text-3xl text-purple-300 font-bold">Variable</div>
        <div className="text-xl text-purple-200 mt-2">Nuevos Módulos</div>
      </motion.div>
    </div>
  </div>
);

const Slide7 = () => (
  <div className="h-full flex flex-col justify-center gap-8 px-16">
    <motion.h2
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="text-5xl font-bold text-white mb-4"
    >
      5. Rentabilidad del Ecosistema
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-2xl text-slate-300 mb-4"
    >
      Estimación Año 3 con 1.000 Nodos
    </motion.p>
    <div className="grid grid-cols-2 gap-8">
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={revenueData}>
            <XAxis dataKey="name" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none' }} />
            <Bar dataKey="value" fill="#10b981" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
      <motion.div
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="space-y-4"
      >
        {revenueData.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 + idx * 0.1 }}
            className="bg-slate-800 p-4 rounded-lg flex justify-between items-center"
          >
            <div className="text-xl text-slate-300">{item.name}</div>
            <div className="text-2xl font-bold text-green-400">{item.value.toLocaleString()}€</div>
          </motion.div>
        ))}
        <div className="bg-green-900 p-6 rounded-lg text-center mt-6">
          <div className="text-2xl text-green-200">TOTAL MENSUAL</div>
          <div className="text-5xl font-bold text-green-300 mt-2">120.000€</div>
        </div>
      </motion.div>
    </div>
  </div>
);

const Slide8 = () => (
  <div className="h-full flex flex-col justify-center gap-8 px-16">
    <motion.h2
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="text-5xl font-bold text-white mb-4"
    >
      Distribución del Flujo de Caja Mensual
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-2xl text-slate-300"
    >
      De los 120.000€ mensuales generados:
    </motion.p>
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="flex flex-col gap-6 mt-8"
    >
      <div className="bg-blue-900 p-8 rounded-xl flex justify-between items-center">
        <div className="text-3xl text-white">Ingreso Total</div>
        <div className="text-5xl font-bold text-blue-300">120.000€</div>
      </div>
      <div className="flex items-center justify-center text-4xl text-slate-500">↓</div>
      <div className="bg-red-900 p-8 rounded-xl flex justify-between items-center">
        <div className="text-3xl text-white">Costes Operativos (Pagados a Nosotros)</div>
        <div className="text-5xl font-bold text-red-300">-50.000€</div>
      </div>
      <div className="flex items-center justify-center text-4xl text-slate-500">↓</div>
      <div className="bg-green-900 p-8 rounded-xl flex justify-between items-center">
        <div className="text-3xl text-white">Beneficio Neto</div>
        <div className="text-5xl font-bold text-green-300">70.000€</div>
      </div>
      <div className="flex items-center justify-center text-4xl text-slate-500">↓</div>
      <div className="bg-purple-900 p-8 rounded-xl flex justify-between items-center">
        <div className="text-3xl text-white">Dividendo 19% (Pagados a Nosotros)</div>
        <div className="text-5xl font-bold text-purple-300">13.300€</div>
      </div>
      <div className="bg-gradient-to-r from-yellow-900 to-yellow-700 p-10 rounded-xl text-center mt-4">
        <div className="text-3xl text-yellow-200 mb-2">TOTAL SOCIOS TECNOLÓGICOS</div>
        <div className="text-6xl font-bold text-yellow-300">63.300€ / mes</div>
      </div>
    </motion.div>
  </div>
);

const Slide9 = () => (
  <div className="h-full flex flex-col justify-center gap-8 px-16">
    <motion.h2
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="text-5xl font-bold text-white mb-6"
    >
      6. Roadmap de Ejecución
    </motion.h2>
    <div className="relative">
      <div className="absolute top-1/2 left-0 right-0 h-1 bg-blue-600"></div>
      <div className="relative grid grid-cols-4 gap-8">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-slate-800 p-6 rounded-xl border-4 border-blue-500"
        >
          <div className="text-4xl mb-4 text-center">📋</div>
          <div className="text-xl font-bold text-white text-center mb-2">Fase 0</div>
          <div className="text-blue-400 text-center font-semibold mb-2">Mes 1</div>
          <div className="text-slate-300 text-center">Firma Acuerdo & Cobro Adelantos (50k)</div>
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-slate-800 p-6 rounded-xl border-4 border-purple-500"
        >
          <div className="text-4xl mb-4 text-center">⚙️</div>
          <div className="text-xl font-bold text-white text-center mb-2">Fase 1</div>
          <div className="text-purple-400 text-center font-semibold mb-2">Mes 2-6</div>
          <div className="text-slate-300 text-center">Desarrollo Core & Identidad Digital</div>
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="bg-slate-800 p-6 rounded-xl border-4 border-green-500"
        >
          <div className="text-4xl mb-4 text-center">🧪</div>
          <div className="text-xl font-bold text-white text-center mb-2">Fase 2</div>
          <div className="text-green-400 text-center font-semibold mb-2">Mes 7-9</div>
          <div className="text-slate-300 text-center">Piloto "Grupo de los 15"</div>
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="bg-slate-800 p-6 rounded-xl border-4 border-yellow-500"
        >
          <div className="text-4xl mb-4 text-center">🚀</div>
          <div className="text-xl font-bold text-white text-center mb-2">Fase 3</div>
          <div className="text-yellow-400 text-center font-semibold mb-2">Mes 10+</div>
          <div className="text-slate-300 text-center">Apertura Mercado & Monetización</div>
        </motion.div>
      </div>
    </div>
  </div>
);

const Slide10 = () => (
  <div className="h-full flex flex-col justify-center gap-8 px-16">
    <motion.h2
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="text-5xl font-bold text-white mb-6"
    >
      7. Conclusiones para Iván Becerro
    </motion.h2>
    <div className="space-y-8">
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-slate-800 p-8 rounded-xl flex items-start gap-6"
      >
        <div className="text-5xl text-green-400">✓</div>
        <div>
          <div className="text-2xl font-bold text-white mb-2">Riesgo Controlado</div>
          <div className="text-xl text-slate-300">Desarrollo pagado con flujo de caja de clientes</div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-slate-800 p-8 rounded-xl flex items-start gap-6"
      >
        <div className="text-5xl text-blue-400">✓</div>
        <div>
          <div className="text-2xl font-bold text-white mb-2">Posición Estratégica</div>
          <div className="text-xl text-slate-300">La Asociación vende por nosotros al tener el 51%</div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="bg-slate-800 p-8 rounded-xl flex items-start gap-6"
      >
        <div className="text-5xl text-purple-400">✓</div>
        <div>
          <div className="text-2xl font-bold text-white mb-2">Escalabilidad</div>
          <div className="text-xl text-slate-300">Modelo replicable a Oftalmología o Veterinaria bajo marca Global Data Care</div>
        </div>
      </motion.div>
    </div>
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1 }}
      className="mt-12 text-center"
    >
      <div className="text-3xl text-slate-400 mb-4">Firmado:</div>
      <div className="text-4xl font-bold text-blue-400">Ullswater Investments</div>
    </motion.div>
  </div>
);

const slides = [
  <Slide1 />,
  <Slide2 />,
  <Slide3 />,
  <Slide4 />,
  <Slide5 />,
  <Slide6 />,
  <Slide7 />,
  <Slide8 />,
  <Slide9 />,
  <Slide10 />,
];

export default function StrategicPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [isAutoPlay]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8">
      <div className="relative w-full max-w-[1800px]" style={{ aspectRatio: '2/1' }}>
        {/* Main Presentation Container */}
        <div className="w-full h-full bg-slate-950 rounded-lg shadow-2xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full"
            >
              {slides[currentSlide]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-black/50 backdrop-blur-sm px-6 py-3 rounded-full">
          <Button
            onClick={prevSlide}
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          
          <div className="flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentSlide ? 'bg-blue-400 w-8' : 'bg-slate-600'
                }`}
              />
            ))}
          </div>

          <Button
            onClick={nextSlide}
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          <div className="w-px h-8 bg-slate-600 mx-2" />

          <Button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20"
          >
            {isAutoPlay ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
          </Button>
        </div>

        {/* Slide Counter */}
        <div className="absolute top-8 right-8 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
          <span className="text-white text-lg font-semibold">
            {currentSlide + 1} / {slides.length}
          </span>
        </div>
      </div>
    </div>
  );
}

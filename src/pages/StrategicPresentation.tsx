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
  <div className="flex flex-col items-center justify-center h-full gap-6">
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-5xl font-bold text-center text-white leading-tight"
    >
      INFORME ESTRATÉGICO EXPANDIDO
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="text-2xl text-blue-400 text-center"
    >
      ECOSISTEMA DE DATOS FEDERADOS ORALspace-X
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="mt-6 space-y-2 text-slate-400 text-lg text-center"
    >
      <div className="text-red-400 font-semibold">CONFIDENCIAL | 26 Nov 2025</div>
      <div className="mt-4">
        <div className="text-green-400">Para: Dirección General, Accuro Technology (Sr. Iván Becerro)</div>
      </div>
      <div>
        <div className="text-blue-400">De: Dirección, Ullswater Investments</div>
      </div>
    </motion.div>
  </div>
);

const Slide2 = () => (
  <div className="h-full flex flex-col justify-center gap-6 px-16">
    <motion.h2
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="text-4xl font-bold text-white mb-2"
    >
      1. Definición del Activo Tecnológico
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-xl text-slate-300 leading-relaxed"
    >
      ORALspace-X es una <span className="text-blue-400 font-semibold">Infraestructura de Datos Soberana (IDS)</span> basada en Gaia-X y EHDS. Conecta sistemas heterogéneos permitiendo flujo seguro, auditado y monetizable de datos.
    </motion.p>
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="flex justify-around items-center mt-6"
    >
      <div className="text-center">
        <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-3xl mb-3">🏥</div>
        <div className="text-lg text-white">Clínica</div>
      </div>
      <div className="text-5xl text-green-400">⟷</div>
      <div className="text-center">
        <div className="w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center text-3xl mb-3">🏭</div>
        <div className="text-lg text-white">Laboratorio</div>
      </div>
      <div className="text-5xl text-green-400">⟷</div>
      <div className="text-center">
        <div className="w-24 h-24 bg-emerald-600 rounded-full flex items-center justify-center text-3xl mb-3">🛡️</div>
        <div className="text-lg text-white">Aseguradora</div>
      </div>
    </motion.div>
  </div>
);

// Tour de la Aplicación - Slide 1: Clinical Cockpit
const SlideApp1 = () => (
  <div className="h-full flex flex-col justify-center gap-6 px-16">
    <motion.h2
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="text-4xl font-bold text-white mb-2"
    >
      Tour ORALspace-X: Clinical Cockpit
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-xl text-slate-300 mb-4"
    >
      Portal del Dentista - Vista Unificada del Paciente
    </motion.p>
    <div className="grid grid-cols-2 gap-6">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-blue-500"
      >
        <div className="text-5xl mb-4 text-center">🔍</div>
        <div className="text-xl font-bold text-blue-400 mb-3">Búsqueda Federada</div>
        <div className="text-slate-300 text-sm leading-relaxed">
          Buscar pacientes por nombre o DID en múltiples fuentes (Hospital, Clínica Dental, Seguros) con consentimiento verificado en blockchain.
        </div>
      </motion.div>
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-green-500"
      >
        <div className="text-5xl mb-4 text-center">📋</div>
        <div className="text-xl font-bold text-green-400 mb-3">Timeline Unificado</div>
        <div className="text-slate-300 text-sm leading-relaxed">
          Historial clínico completo con eventos del Hospital (rojo) y Clínica Dental (azul). Datos en formato FHIR R4 para interoperabilidad.
        </div>
      </motion.div>
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-red-500"
      >
        <div className="text-5xl mb-4 text-center">⚠️</div>
        <div className="text-xl font-bold text-red-400 mb-3">Alertas Críticas</div>
        <div className="text-slate-300 text-sm leading-relaxed">
          Banner rojo automático al detectar condiciones de riesgo (Endocarditis, Válvulas cardíacas) que requieren antibiótico profiláctico.
        </div>
      </motion.div>
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-purple-500"
      >
        <div className="text-5xl mb-4 text-center">🤖</div>
        <div className="text-xl font-bold text-purple-400 mb-3">Asistente IA</div>
        <div className="text-slate-300 text-sm leading-relaxed">
          Diagnóstico automático de radiografías con niveles de confianza. Detecta caries, fracturas, abscesos. Validado por el profesional.
        </div>
      </motion.div>
    </div>
  </div>
);

// Tour de la Aplicación - Slide 2: Health Wallet
const SlideApp2 = () => (
  <div className="h-full flex flex-col justify-center gap-6 px-16">
    <motion.h2
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="text-4xl font-bold text-white mb-2"
    >
      Tour ORALspace-X: Health Wallet
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-xl text-slate-300 mb-4"
    >
      Portal del Paciente - Control Total de Datos Personales
    </motion.p>
    <div className="grid grid-cols-2 gap-6">
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-br from-blue-900 to-blue-700 p-8 rounded-xl text-center"
      >
        <div className="text-6xl mb-4">🏦</div>
        <div className="text-2xl font-bold text-white mb-3">Banco de Mis Datos</div>
        <div className="text-blue-200 text-lg leading-relaxed">
          Identidad Digital Descentralizada (DID). QR code verificable. Portabilidad total entre clínicas.
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="space-y-4"
      >
        <div className="bg-slate-800 p-5 rounded-lg border border-green-500">
          <div className="flex items-center gap-3 mb-2">
            <div className="text-3xl">✅</div>
            <div className="text-lg font-bold text-green-400">Gestión de Consentimientos</div>
          </div>
          <div className="text-slate-300 text-sm">
            Toggle switches para revocar acceso instantáneamente. Ver quién accedió a mis datos y cuándo.
          </div>
        </div>
        <div className="bg-slate-800 p-5 rounded-lg border border-purple-500">
          <div className="flex items-center gap-3 mb-2">
            <div className="text-3xl">📁</div>
            <div className="text-lg font-bold text-purple-400">Mis Tratamientos</div>
          </div>
          <div className="text-slate-300 text-sm">
            Lista visual de implantes, radiografías 3D, prescripciones. Descargable en cualquier momento.
          </div>
        </div>
        <div className="bg-slate-800 p-5 rounded-lg border border-yellow-500">
          <div className="flex items-center gap-3 mb-2">
            <div className="text-3xl">🦷</div>
            <div className="text-lg font-bold text-yellow-400">Visor 3D</div>
          </div>
          <div className="text-slate-300 text-sm">
            Botón flotante para visualizar escaneo intraoral en 3D. Modelo interactivo de mi boca.
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

// Tour de la Aplicación - Slide 3: Manufacturing Hub
const SlideApp3 = () => (
  <div className="h-full flex flex-col justify-center gap-6 px-16">
    <motion.h2
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="text-4xl font-bold text-white mb-2"
    >
      Tour ORALspace-X: Manufacturing Hub
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-xl text-slate-300 mb-4"
    >
      Portal del Laboratorio - Trazabilidad Blockchain
    </motion.p>
    <div className="grid grid-cols-4 gap-4 mb-6">
      {["Solicitudes", "CAD Design", "Milling/Print", "Enviado"].map((stage, idx) => (
        <motion.div
          key={stage}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 + idx * 0.2 }}
          className="bg-slate-800 p-4 rounded-lg border border-blue-500 text-center"
        >
          <div className="text-2xl mb-2">
            {idx === 0 && "📥"}
            {idx === 1 && "🖥️"}
            {idx === 2 && "⚙️"}
            {idx === 3 && "📦"}
          </div>
          <div className="text-white font-semibold text-sm">{stage}</div>
        </motion.div>
      ))}
    </div>
    <div className="grid grid-cols-2 gap-6">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="bg-gradient-to-br from-purple-900 to-purple-700 p-6 rounded-xl"
      >
        <div className="text-4xl mb-3 text-center">📜</div>
        <div className="text-xl font-bold text-white mb-3 text-center">Digital Product Passport (DPP)</div>
        <div className="text-purple-200 text-sm leading-relaxed">
          Cada prótesis/implante lleva pasaporte digital con: origen del circonio, temperatura de sinterización, lote ISO, hash blockchain inmutable.
        </div>
      </motion.div>
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="bg-gradient-to-br from-emerald-900 to-emerald-700 p-6 rounded-xl"
      >
        <div className="text-4xl mb-3 text-center">🔗</div>
        <div className="text-xl font-bold text-white mb-3 text-center">Compliance MDR</div>
        <div className="text-emerald-200 text-sm leading-relaxed">
          Reglamento 2017/745 de Productos Sanitarios UE. Auditoría instantánea por AEMPS. Reducción de 6 meses a 1 día en certificación.
        </div>
      </motion.div>
    </div>
  </div>
);

// Caso de Negocio 1: Smart Claims Processing
const SlideBiz1 = () => (
  <div className="h-full flex flex-col justify-center gap-6 px-16">
    <motion.h2
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="text-4xl font-bold text-white mb-2"
    >
      Caso de Negocio #1: Smart Claims
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-xl text-emerald-400 mb-2"
    >
      Procesamiento Automático de Reclamaciones Dentales
    </motion.p>
    <div className="grid grid-cols-2 gap-8">
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="space-y-4"
      >
        <div className="bg-red-900/50 border border-red-500 p-5 rounded-xl">
          <div className="text-xl font-bold text-red-300 mb-2">❌ Problema Actual</div>
          <div className="text-slate-300 text-sm space-y-1">
            <div>• Pago en 30-45 días</div>
            <div>• Revisión manual 100%</div>
            <div>• Fraude 8-12% sector</div>
            <div>• Costes administrativos altos</div>
          </div>
        </div>
        <div className="bg-emerald-900/50 border border-emerald-500 p-5 rounded-xl">
          <div className="text-xl font-bold text-emerald-300 mb-2">✅ Solución ORALspace-X</div>
          <div className="text-slate-300 text-sm space-y-1">
            <div>• Smart Contract valida en 0.8s</div>
            <div>• Verificación automática CDT + RX</div>
            <div>• Detección fraude por IA</div>
            <div>• Pago instantáneo blockchain</div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="space-y-4"
      >
        <div className="bg-gradient-to-br from-blue-900 to-blue-700 p-6 rounded-xl text-center">
          <div className="text-5xl mb-3">⚡</div>
          <div className="text-3xl font-bold text-white mb-2">30 días → 1 día</div>
          <div className="text-blue-200 text-sm">Reducción tiempo pago</div>
        </div>
        <div className="bg-gradient-to-br from-purple-900 to-purple-700 p-6 rounded-xl text-center">
          <div className="text-5xl mb-3">💰</div>
          <div className="text-3xl font-bold text-white mb-2">0.8% - 1.2%</div>
          <div className="text-purple-200 text-sm">Comisión por transacción</div>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg">
          <div className="text-green-400 font-semibold text-sm mb-1">Proyección Anual (1000 nodos)</div>
          <div className="text-2xl font-bold text-white">420.000€</div>
        </div>
      </motion.div>
    </div>
  </div>
);

// Caso de Negocio 2: Marketplace Referral
const SlideBiz2 = () => (
  <div className="h-full flex flex-col justify-center gap-6 px-16">
    <motion.h2
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="text-4xl font-bold text-white mb-2"
    >
      Caso de Negocio #2: Referral Marketplace
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-xl text-blue-400 mb-2"
    >
      Red de Derivaciones entre Clínicas Especializadas
    </motion.p>
    <div className="grid grid-cols-5 gap-4 mb-6">
      {[
        { emoji: "🦷", name: "Odontología" },
        { emoji: "🔬", name: "Periodoncia" },
        { emoji: "👶", name: "Ortodoncia" },
        { emoji: "💉", name: "Implantes" },
        { emoji: "😬", name: "Endodoncia" }
      ].map((specialty, idx) => (
        <motion.div
          key={specialty.name}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 + idx * 0.1 }}
          className="bg-slate-800 p-4 rounded-lg text-center border border-blue-500"
        >
          <div className="text-4xl mb-2">{specialty.emoji}</div>
          <div className="text-white text-xs font-semibold">{specialty.name}</div>
        </motion.div>
      ))}
    </div>
    <div className="grid grid-cols-3 gap-6">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1 }}
        className="bg-gradient-to-br from-green-900 to-green-700 p-6 rounded-xl text-center"
      >
        <div className="text-4xl mb-3">🌐</div>
        <div className="text-2xl font-bold text-white mb-2">3% Take-Rate</div>
        <div className="text-green-200 text-sm">Por cada referencia exitosa</div>
      </motion.div>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="bg-gradient-to-br from-blue-900 to-blue-700 p-6 rounded-xl text-center"
      >
        <div className="text-4xl mb-3">📊</div>
        <div className="text-2xl font-bold text-white mb-2">1.500€</div>
        <div className="text-blue-200 text-sm">Valor medio tratamiento</div>
      </motion.div>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="bg-gradient-to-br from-purple-900 to-purple-700 p-6 rounded-xl text-center"
      >
        <div className="text-4xl mb-3">💶</div>
        <div className="text-2xl font-bold text-white mb-2">45€</div>
        <div className="text-purple-200 text-sm">Comisión por referencia</div>
      </motion.div>
    </div>
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.6 }}
      className="bg-slate-800 p-5 rounded-lg text-center mt-2"
    >
      <div className="text-slate-400 text-sm mb-1">Proyección con 800 clínicas × 2 derivaciones/mes</div>
      <div className="text-3xl font-bold text-green-400">480.000€ / año</div>
    </motion.div>
  </div>
);

// Caso de Negocio 3: Digital Product Passport
const SlideBiz3 = () => (
  <div className="h-full flex flex-col justify-center gap-6 px-16">
    <motion.h2
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="text-4xl font-bold text-white mb-2"
    >
      Caso de Negocio #3: Digital Product Passport
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-xl text-purple-400 mb-2"
    >
      Certificación Blockchain para Productos Sanitarios (MDR 2017/745)
    </motion.p>
    <div className="grid grid-cols-2 gap-8">
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="space-y-4"
      >
        <div className="bg-slate-800 border-l-4 border-purple-500 p-5 rounded-lg">
          <div className="flex items-center gap-3 mb-3">
            <div className="text-3xl">🏭</div>
            <div className="text-lg font-bold text-white">Cadena de Trazabilidad</div>
          </div>
          <div className="space-y-2 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <div>Origen materia prima (Zirconio Japón)</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <div>Temperatura sinterización (1450°C)</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <div>Lote ISO 13485 certificado</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <div>Hash blockchain inmutable</div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-red-900 to-red-700 p-5 rounded-xl">
          <div className="text-white font-semibold mb-2">⚠️ Cumplimiento Normativo</div>
          <div className="text-red-200 text-sm">
            MDR exige trazabilidad completa. Auditoría AEMPS reducida de <span className="font-bold text-white">6 meses a 1 día</span>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="space-y-4"
      >
        <div className="bg-gradient-to-br from-emerald-900 to-emerald-700 p-6 rounded-xl text-center">
          <div className="text-5xl mb-3">📜</div>
          <div className="text-2xl font-bold text-white mb-2">5€ / Producto</div>
          <div className="text-emerald-200 text-sm">Emisión DPP certificado</div>
        </div>
        <div className="bg-slate-800 p-5 rounded-lg">
          <div className="text-slate-400 text-xs mb-2">Mercado potencial</div>
          <div className="text-white font-semibold mb-3">100 laboratorios × 200 productos/mes</div>
          <div className="bg-purple-600 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-white">100.000€ / mes</div>
          </div>
        </div>
        <div className="bg-yellow-900/50 border border-yellow-500 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-1">
            <div className="text-2xl">🛡️</div>
            <div className="text-yellow-400 font-semibold text-sm">Anti-Falsificación</div>
          </div>
          <div className="text-yellow-200 text-xs">
            Protección contra implantes piratas de China
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

// Caso de Negocio 4: Federated Learning
const SlideBiz4 = () => (
  <div className="h-full flex flex-col justify-center gap-6 px-16">
    <motion.h2
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="text-4xl font-bold text-white mb-2"
    >
      Caso de Negocio #4: Federated Learning
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-xl text-cyan-400 mb-2"
    >
      Entrenamiento de IA Distribuida sin Exponer Datos
    </motion.p>
    <div className="grid grid-cols-2 gap-8">
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="space-y-4"
      >
        <div className="bg-slate-800 p-5 rounded-xl border border-cyan-500">
          <div className="text-2xl font-bold text-cyan-400 mb-3">🧠 Cómo Funciona</div>
          <div className="space-y-3 text-sm text-slate-300">
            <div className="flex items-start gap-3">
              <div className="text-xl">1️⃣</div>
              <div>Cada clínica entrena modelo localmente con sus datos</div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-xl">2️⃣</div>
              <div>Solo envía pesos estadísticos (no imágenes)</div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-xl">3️⃣</div>
              <div>ORALspace-X agrega aprendizajes en modelo global</div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-xl">4️⃣</div>
              <div>Todos mejoran sin compartir datos sensibles</div>
            </div>
          </div>
        </div>
        <div className="bg-green-900/50 border border-green-500 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <div className="text-2xl">🔒</div>
            <div className="text-green-400 font-semibold">GDPR Safe</div>
          </div>
          <div className="text-green-200 text-xs">
            k-anonymity + Differential Privacy aplicados
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="space-y-4"
      >
        <div className="bg-gradient-to-br from-blue-900 to-blue-700 p-6 rounded-xl text-center">
          <div className="text-4xl mb-3">💾</div>
          <div className="text-2xl font-bold text-white mb-2">50.000 RX</div>
          <div className="text-blue-200 text-sm mb-3">Radiografías periapicales</div>
          <div className="text-3xl font-bold text-blue-300">15.000€</div>
          <div className="text-blue-200 text-xs mt-1">Precio dataset sintético</div>
        </div>
        <div className="bg-gradient-to-br from-purple-900 to-purple-700 p-6 rounded-xl text-center">
          <div className="text-4xl mb-3">⚙️</div>
          <div className="text-xl font-bold text-white mb-2">Compute-as-Service</div>
          <div className="text-purple-200 text-sm mb-2">Alquiler horas GPU</div>
          <div className="text-2xl font-bold text-purple-300">200€/h</div>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg text-center">
          <div className="text-slate-400 text-xs mb-1">Revenue anual potencial</div>
          <div className="text-3xl font-bold text-cyan-400">180.000€</div>
        </div>
      </motion.div>
    </div>
  </div>
);

// Caso de Negocio 5: AI Diagnostics API
const SlideBiz5 = () => (
  <div className="h-full flex flex-col justify-center gap-6 px-16">
    <motion.h2
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="text-4xl font-bold text-white mb-2"
    >
      Caso de Negocio #5: AI Diagnostics API
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-xl text-orange-400 mb-2"
    >
      API de Diagnóstico Radiológico Asistido por IA
    </motion.p>
    <div className="grid grid-cols-2 gap-8">
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="space-y-4"
      >
        <div className="bg-slate-800 p-5 rounded-xl border border-orange-500">
          <div className="text-xl font-bold text-orange-400 mb-3">🎯 Detecciones Automáticas</div>
          <div className="space-y-2">
            {[
              { name: "Caries", confidence: 94 },
              { name: "Fracturas", confidence: 89 },
              { name: "Abscesos", confidence: 92 },
              { name: "Pérdida Ósea", confidence: 87 },
              { name: "Quistes", confidence: 85 }
            ].map((detection, idx) => (
              <motion.div
                key={detection.name}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7 + idx * 0.1 }}
                className="bg-slate-900 p-3 rounded-lg"
              >
                <div className="flex justify-between items-center mb-1">
                  <div className="text-white text-sm font-semibold">{detection.name}</div>
                  <div className="text-orange-400 text-sm">{detection.confidence}%</div>
                </div>
                <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${detection.confidence}%` }}
                    transition={{ delay: 0.9 + idx * 0.1, duration: 0.5 }}
                    className="bg-gradient-to-r from-orange-500 to-orange-300 h-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="space-y-4"
      >
        <div className="bg-gradient-to-br from-blue-900 to-blue-700 p-6 rounded-xl text-center">
          <div className="text-4xl mb-3">💻</div>
          <div className="text-xl font-bold text-white mb-2">Modelo API</div>
          <div className="text-2xl font-bold text-blue-300 mb-1">0.50€</div>
          <div className="text-blue-200 text-sm">Por radiografía procesada</div>
        </div>
        <div className="bg-slate-800 p-5 rounded-lg">
          <div className="text-slate-400 text-xs mb-3">Ejemplo de uso mensual</div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-slate-300">
              <span>800 clínicas × 100 RX/mes</span>
              <span className="font-bold text-white">80.000 RX</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Precio unitario</span>
              <span className="font-bold text-white">0.50€</span>
            </div>
            <div className="border-t border-slate-700 pt-2 mt-2"></div>
            <div className="flex justify-between">
              <span className="text-green-400 font-semibold">Revenue mensual</span>
              <span className="text-2xl font-bold text-green-400">40.000€</span>
            </div>
          </div>
        </div>
        <div className="bg-green-900/50 border border-green-500 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-1">
            <div className="text-2xl">⚡</div>
            <div className="text-green-400 font-semibold text-sm">Respuesta {"<"} 2 segundos</div>
          </div>
          <div className="text-green-200 text-xs">
            Procesamiento en tiempo real durante consulta
          </div>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg text-center">
          <div className="text-slate-400 text-xs mb-1">Proyección anual</div>
          <div className="text-3xl font-bold text-orange-400">480.000€</div>
        </div>
      </motion.div>
    </div>
  </div>
);

// Tour de la Aplicación - Slide 4: Smart Claims & Federated Learning
const SlideApp4 = () => (
  <div className="h-full flex flex-col justify-center gap-6 px-16">
    <motion.h2
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="text-4xl font-bold text-white mb-2"
    >
      Tour ORALspace-X: Seguros & Investigación
    </motion.h2>
    <div className="grid grid-cols-2 gap-6">
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="space-y-4"
      >
        <div className="text-2xl font-bold text-green-400 mb-2">💰 Smart Claims Manager</div>
        <div className="bg-slate-800 p-5 rounded-lg border border-green-500">
          <div className="text-white font-semibold mb-2">Validación Automática</div>
          <div className="text-slate-300 text-sm mb-3">
            Smart Contract verifica: código CDT válido, radiografía post-op presente, póliza activa.
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-1 bg-green-600 h-2 rounded"></div>
            <div className="text-green-400 text-xs font-bold">0.8s</div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-emerald-900 to-emerald-700 p-5 rounded-lg text-center">
          <div className="text-emerald-200 text-sm mb-1">Reducción tiempo pago</div>
          <div className="text-3xl font-bold text-white">30 días → 1 día</div>
        </div>
        <div className="bg-red-900 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-1">
            <div className="text-2xl">🚨</div>
            <div className="text-red-400 font-semibold">Detección de Fraude</div>
          </div>
          <div className="text-red-200 text-xs">
            IA detecta upselling 300%, pacientes fantasma en padrón civil
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="space-y-4"
      >
        <div className="text-2xl font-bold text-purple-400 mb-2">🧬 Federated Learning</div>
        <div className="bg-slate-800 p-5 rounded-lg border border-purple-500">
          <div className="text-white font-semibold mb-2">Inteligencia Colectiva</div>
          <div className="text-slate-300 text-sm mb-3">
            200 nodos entrenan IA de diagnóstico sin compartir imágenes. Solo pesos estadísticos.
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[1,2,3,4,5,6].map((n) => (
              <div key={n} className="w-full h-8 bg-purple-600 rounded animate-pulse" style={{ animationDelay: `${n * 0.1}s` }}></div>
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 p-5 rounded-lg">
          <div className="text-blue-200 text-sm mb-2">Dataset Disponible</div>
          <div className="text-2xl font-bold text-white mb-1">50.000 Radiografías Periapicales</div>
          <div className="text-blue-300 text-xs">Distribuido en 200 nodos | k-anonymity</div>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg border border-yellow-500">
          <div className="flex items-center gap-2 mb-1">
            <div className="text-2xl">🗺️</div>
            <div className="text-yellow-400 font-semibold">Mapa Epidemiológico</div>
          </div>
          <div className="text-slate-300 text-xs">
            Zonas rojas = alta incidencia caries. Filtros: edad, fluoración agua
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

const Slide3 = () => (
  <div className="h-full flex flex-col justify-center gap-6 px-16">
    <motion.h2
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="text-4xl font-bold text-white mb-2"
    >
      2. Proyección de Escala (Objetivo 1000)
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-xl text-slate-300"
    >
      <span className="text-green-400 font-bold">1.000 nodos activos</span> en 36 meses | Impacto: <span className="text-blue-400 font-bold">1.2M ciudadanos</span>
    </motion.p>
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="grid grid-cols-2 gap-4 mt-6"
    >
      {nodeData.map((node, idx) => (
        <motion.div
          key={node.type}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7 + idx * 0.1 }}
          className="bg-slate-800 p-4 rounded-lg border border-slate-700"
        >
          <div className="text-slate-400 text-lg mb-1">{node.type}</div>
          <div className="text-3xl font-bold text-white">{node.count}</div>
        </motion.div>
      ))}
    </motion.div>
  </div>
);

const Slide4 = () => (
  <div className="h-full flex flex-col justify-center gap-6 px-16">
    <motion.h2
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="text-4xl font-bold text-white mb-2"
    >
      3. Financiación del Lanzamiento
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-xl text-slate-300"
    >
      Apalancamiento en subvenciones públicas (Kit Digital / Red.es)
    </motion.p>
    <div className="grid grid-cols-2 gap-6 mt-6">
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-br from-blue-900 to-blue-700 p-6 rounded-xl"
      >
        <div className="text-xl font-bold text-white mb-3">Grupo A (5 Clínicas)</div>
        <div className="text-lg text-blue-200 mb-1">Solicitud: 30k€</div>
        <div className="text-lg text-blue-200">Adelanto: 5k€ c/u</div>
      </motion.div>
      <motion.div
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="bg-gradient-to-br from-purple-900 to-purple-700 p-6 rounded-xl"
      >
        <div className="text-xl font-bold text-white mb-3">Grupo B (10 Clínicas)</div>
        <div className="text-lg text-purple-200 mb-1">Solicitud: 15k€</div>
        <div className="text-lg text-purple-200">Adelanto: 2.5k€ c/u</div>
      </motion.div>
    </div>
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1 }}
      className="bg-green-900 p-6 rounded-xl text-center mt-3"
    >
      <div className="text-2xl font-bold text-white">
        Caja Inicial: <span className="text-green-300">50.000€</span> | Facturación: <span className="text-green-300">150.000€</span>
      </div>
    </motion.div>
  </div>
);

const Slide5 = () => (
  <div className="h-full flex flex-col justify-center gap-6 px-16">
    <motion.h2
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="text-4xl font-bold text-white mb-2"
    >
      4. Modelo de Negocio y Propiedad
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-xl text-slate-300"
    >
      SPV para garantizar soberanía y control
    </motion.p>
    <div className="grid grid-cols-2 gap-10 mt-6">
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
  <div className="h-full flex flex-col justify-center gap-6 px-16">
    <motion.h2
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="text-4xl font-bold text-white mb-2"
    >
      Ingresos Recurrentes para Ullswater & Accuro
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-xl text-slate-300"
    >
      Rentabilidad más allá del equity:
    </motion.p>
    <div className="grid grid-cols-3 gap-6 mt-6">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-br from-green-900 to-green-700 p-6 rounded-xl text-center"
      >
        <div className="text-5xl mb-3">💰</div>
        <div className="text-xl font-bold text-white mb-2">Royalties</div>
        <div className="text-2xl text-green-300 font-bold">19%</div>
        <div className="text-lg text-green-200 mt-1">Beneficios Netos</div>
      </motion.div>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="bg-gradient-to-br from-blue-900 to-blue-700 p-6 rounded-xl text-center"
      >
        <div className="text-5xl mb-3">🖥️</div>
        <div className="text-xl font-bold text-white mb-2">Mantenimiento</div>
        <div className="text-2xl text-blue-300 font-bold">50.000€/mes</div>
        <div className="text-lg text-blue-200 mt-1">50€/nodo × 1000</div>
      </motion.div>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="bg-gradient-to-br from-purple-900 to-purple-700 p-6 rounded-xl text-center"
      >
        <div className="text-5xl mb-3">⚙️</div>
        <div className="text-xl font-bold text-white mb-2">Fee de Éxito</div>
        <div className="text-2xl text-purple-300 font-bold">Variable</div>
        <div className="text-lg text-purple-200 mt-1">Nuevos Módulos</div>
      </motion.div>
    </div>
  </div>
);

const Slide7 = () => (
  <div className="h-full flex flex-col justify-center gap-6 px-16">
    <motion.h2
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="text-4xl font-bold text-white mb-2"
    >
      5. Rentabilidad del Ecosistema
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-xl text-slate-300 mb-3"
    >
      Estimación Año 3 con 1.000 Nodos
    </motion.p>
    <div className="grid grid-cols-2 gap-6">
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
            className="bg-slate-800 p-3 rounded-lg flex justify-between items-center"
          >
            <div className="text-lg text-slate-300">{item.name}</div>
            <div className="text-xl font-bold text-green-400">{item.value.toLocaleString()}€</div>
          </motion.div>
        ))}
        <div className="bg-green-900 p-5 rounded-lg text-center mt-4">
          <div className="text-xl text-green-200">TOTAL MENSUAL</div>
          <div className="text-4xl font-bold text-green-300 mt-2">120.000€</div>
        </div>
      </motion.div>
    </div>
  </div>
);

const Slide8 = () => (
  <div className="h-full flex flex-col justify-center gap-6 px-16">
    <motion.h2
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="text-4xl font-bold text-white mb-2"
    >
      Distribución del Flujo de Caja
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-xl text-slate-300"
    >
      De los 120.000€ mensuales:
    </motion.p>
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="flex flex-col gap-4 mt-6"
    >
      <div className="bg-blue-900 p-6 rounded-xl flex justify-between items-center">
        <div className="text-2xl text-white">Ingreso Total</div>
        <div className="text-4xl font-bold text-blue-300">120.000€</div>
      </div>
      <div className="flex items-center justify-center text-3xl text-slate-500">↓</div>
      <div className="bg-red-900 p-6 rounded-xl flex justify-between items-center">
        <div className="text-2xl text-white">Costes (Pagados Nosotros)</div>
        <div className="text-4xl font-bold text-red-300">-50.000€</div>
      </div>
      <div className="flex items-center justify-center text-3xl text-slate-500">↓</div>
      <div className="bg-green-900 p-6 rounded-xl flex justify-between items-center">
        <div className="text-2xl text-white">Beneficio Neto</div>
        <div className="text-4xl font-bold text-green-300">70.000€</div>
      </div>
      <div className="flex items-center justify-center text-3xl text-slate-500">↓</div>
      <div className="bg-purple-900 p-6 rounded-xl flex justify-between items-center">
        <div className="text-2xl text-white">Dividendo 19% (Nosotros)</div>
        <div className="text-4xl font-bold text-purple-300">13.300€</div>
      </div>
      <div className="bg-gradient-to-r from-yellow-900 to-yellow-700 p-8 rounded-xl text-center mt-3">
        <div className="text-2xl text-yellow-200 mb-2">TOTAL SOCIOS TECNOLÓGICOS</div>
        <div className="text-5xl font-bold text-yellow-300">63.300€ / mes</div>
      </div>
    </motion.div>
  </div>
);

const Slide9 = () => (
  <div className="h-full flex flex-col justify-center gap-6 px-16">
    <motion.h2
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="text-4xl font-bold text-white mb-4"
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
          className="bg-slate-800 p-5 rounded-xl border-4 border-blue-500"
        >
          <div className="text-3xl mb-3 text-center">📋</div>
          <div className="text-lg font-bold text-white text-center mb-1">Fase 0</div>
          <div className="text-blue-400 text-center font-semibold mb-1 text-sm">Mes 1</div>
          <div className="text-slate-300 text-center text-sm">Firma & Cobro (50k)</div>
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-slate-800 p-5 rounded-xl border-4 border-purple-500"
        >
          <div className="text-3xl mb-3 text-center">⚙️</div>
          <div className="text-lg font-bold text-white text-center mb-1">Fase 1</div>
          <div className="text-purple-400 text-center font-semibold mb-1 text-sm">Mes 2-6</div>
          <div className="text-slate-300 text-center text-sm">Desarrollo Core</div>
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="bg-slate-800 p-5 rounded-xl border-4 border-green-500"
        >
          <div className="text-3xl mb-3 text-center">🧪</div>
          <div className="text-lg font-bold text-white text-center mb-1">Fase 2</div>
          <div className="text-green-400 text-center font-semibold mb-1 text-sm">Mes 7-9</div>
          <div className="text-slate-300 text-center text-sm">Piloto 15 Clínicas</div>
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="bg-slate-800 p-5 rounded-xl border-4 border-yellow-500"
        >
          <div className="text-3xl mb-3 text-center">🚀</div>
          <div className="text-lg font-bold text-white text-center mb-1">Fase 3</div>
          <div className="text-yellow-400 text-center font-semibold mb-1 text-sm">Mes 10+</div>
          <div className="text-slate-300 text-center text-sm">Lanzamiento</div>
        </motion.div>
      </div>
    </div>
  </div>
);

const Slide10 = () => (
  <div className="h-full flex flex-col justify-center gap-6 px-16">
    <motion.h2
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="text-4xl font-bold text-white mb-4"
    >
      7. Conclusiones
    </motion.h2>
    <div className="space-y-6">
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-slate-800 p-6 rounded-xl flex items-start gap-5"
      >
        <div className="text-4xl text-green-400">✓</div>
        <div>
          <div className="text-xl font-bold text-white mb-1">Riesgo Controlado</div>
          <div className="text-lg text-slate-300">Desarrollo pagado con flujo de caja de clientes</div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-slate-800 p-6 rounded-xl flex items-start gap-5"
      >
        <div className="text-4xl text-blue-400">✓</div>
        <div>
          <div className="text-xl font-bold text-white mb-1">Posición Estratégica</div>
          <div className="text-lg text-slate-300">Asociación vende por nosotros (51% control)</div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="bg-slate-800 p-6 rounded-xl flex items-start gap-5"
      >
        <div className="text-4xl text-purple-400">✓</div>
        <div>
          <div className="text-xl font-bold text-white mb-1">Escalabilidad</div>
          <div className="text-lg text-slate-300">Replicable a otros verticales (Global Data Care)</div>
        </div>
      </motion.div>
    </div>
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1 }}
      className="mt-10 text-center"
    >
      <div className="text-2xl text-slate-400 mb-3">Firmado:</div>
      <div className="text-3xl font-bold text-blue-400">Ullswater Investments</div>
    </motion.div>
  </div>
);

const slides = [
  <Slide1 />,
  <Slide2 />,
  <SlideApp1 />,
  <SlideApp2 />,
  <SlideApp3 />,
  <SlideApp4 />,
  <SlideBiz1 />,
  <SlideBiz2 />,
  <SlideBiz3 />,
  <SlideBiz4 />,
  <SlideBiz5 />,
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

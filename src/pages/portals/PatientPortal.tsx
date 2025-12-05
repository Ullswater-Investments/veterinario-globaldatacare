import { useEffect, useState } from 'react';
import { NavigationControls } from "@/components/ui/NavigationControls";
import { GlobalFooter } from "@/components/ui/GlobalFooter";
import {
  Calendar,
  Clock,
  CreditCard,
  FileText,
  Pill,
  ShieldCheck,
  User,
  Activity,
  AlertCircle,
  ChevronRight,
} from 'lucide-react';

// Datos simulados (Mock Data)
const upcomingAppointment = {
  date: '14 Oct, 2024',
  time: '10:30 AM',
  doctor: 'Dr. Sarah Smith',
  type: 'Revisión Implante',
  location: 'Sala 4',
};

const medications = [
  { name: 'Amoxicilina 500mg', dosage: 'Cada 8 horas', daysLeft: 3, alert: 'Tomar con comida' },
  { name: 'Enjuague Clorhexidina', dosage: 'Cada 12 horas', daysLeft: 5, alert: 'No ingerir' },
];

const invoices = [
  { id: 'INV-2024-001', desc: 'Implante Titanio', amount: 850, status: 'Pagado', date: '10 Sep 2024' },
  { id: 'INV-2024-002', desc: 'Limpieza Dental', amount: 60, status: 'Pendiente', date: '01 Oct 2024' },
];

const PatientPortal = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'finance' | 'privacy'>('dashboard');

  // SEO básico para la página del portal paciente
  useEffect(() => {
    document.title = 'Mi Salud Dental | ACCURO TECHNOLOGY';

    const description =
      'Super‑app de salud dental: citas, medicación, facturas, gemelo digital 3D y control de privacidad en ACCURO TECHNOLOGY.';
    let meta = document.querySelector("meta[name='description']") as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = description;

    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}/portal/patient`;
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-24 md:pb-0">
      <div className="container mx-auto px-4 pt-4">
        <NavigationControls />
      </div>

      {/* HEADER TIPO APP */}
      <header className="bg-emerald-600 text-white p-6 rounded-b-3xl shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
        <div className="relative z-10 flex justify-between items-center">
          <div>
            <p className="text-emerald-100 text-sm">Bienvenida de nuevo,</p>
            <h1 className="text-2xl font-bold">Ana Patient</h1>
          </div>
          <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm border border-white/30">
            <User className="w-6 h-6 text-white" aria-hidden="true" />
          </div>
        </div>

        {/* Navegación superior (tabs) */}
        <nav
          className="flex justify-between mt-8 bg-black/20 p-1 rounded-xl backdrop-blur-md"
          aria-label="Secciones de la wallet"
        >
          {[
            { id: 'dashboard', label: 'Inicio', icon: <Activity className="w-4 h-4" aria-hidden="true" /> },
            { id: 'finance', label: 'Gestión', icon: <CreditCard className="w-4 h-4" aria-hidden="true" /> },
            { id: 'privacy', label: 'Privacidad', icon: <ShieldCheck className="w-4 h-4" aria-hidden="true" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as 'dashboard' | 'finance' | 'privacy')}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-white text-emerald-700 shadow-sm'
                  : 'text-emerald-100 hover:bg-white/10'
              }`}
            >
              {tab.icon}
              <span className="hidden md:inline">{tab.label}</span>
            </button>
          ))}
        </nav>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-5xl">
        {/* ================= CONTENIDO DASHBOARD (RESUMEN) ================= */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Próxima cita (futuro) */}
            <section aria-labelledby="proxima-cita-title">
              <h2
                id="proxima-cita-title"
                className="text-slate-500 font-semibold mb-3 flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" aria-hidden="true" /> Tu próxima visita
              </h2>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-4 w-full md:w-auto">
                  <div className="bg-blue-50 text-blue-600 p-4 rounded-2xl flex flex-col items-center min-w-[80px]">
                    <span className="text-xs font-bold uppercase">OCT</span>
                    <span className="text-2xl font-bold">14</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{upcomingAppointment.type}</h3>
                    <p className="text-slate-500 text-sm flex items-center gap-2 mt-1">
                      <User className="w-3 h-3" aria-hidden="true" /> {upcomingAppointment.doctor}
                    </p>
                    <p className="text-slate-500 text-sm flex items-center gap-2 mt-1">
                      <Clock className="w-3 h-3" aria-hidden="true" /> {upcomingAppointment.time} •{' '}
                      {upcomingAppointment.location}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                  <button className="flex-1 px-4 py-2 border border-slate-200 rounded-xl text-slate-600 text-sm hover:bg-slate-50">
                    Reprogramar
                  </button>
                  <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-xl text-sm hover:bg-blue-700 shadow-lg shadow-blue-200">
                    Ver detalles
                  </button>
                </div>
              </div>
            </section>

            {/* Tratamiento activo (presente) */}
            <section aria-labelledby="tratamiento-activo-title">
              <h2
                id="tratamiento-activo-title"
                className="text-slate-500 font-semibold mb-3 flex items-center gap-2"
              >
                <Pill className="w-4 h-4" aria-hidden="true" /> Tratamiento activo
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {medications.map((med) => (
                  <article
                    key={med.name}
                    className="bg-white p-4 rounded-2xl border border-slate-100 flex items-start gap-4 shadow-sm"
                  >
                    <div className="bg-orange-50 p-2 rounded-lg text-orange-500">
                      <Pill className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold text-slate-800">{med.name}</h3>
                        <span className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-500">
                          {med.daysLeft} días restantes
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 mt-1">{med.dosage}</p>

                      {/* Alerta del fabricante */}
                      <div className="mt-3 bg-yellow-50 border border-yellow-100 p-2 rounded-lg flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-yellow-600 shrink-0 mt-0.5" aria-hidden="true" />
                        <p className="text-xs text-yellow-800 font-medium">Nota del fabricante: {med.alert}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Gemelo digital (visualización 3D) */}
            <section className="bg-slate-900 rounded-3xl p-6 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <Activity className="w-5 h-5 text-cyan-400" aria-hidden="true" />
                      Tu gemelo digital
                    </h3>
                    <p className="text-slate-400 text-sm">Visualización 3D actualizada el 10/10/2024</p>
                  </div>
                  <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs font-bold border border-cyan-500/30">
                    HD SCAN READY
                  </span>
                </div>

                <div className="h-48 bg-slate-800/50 rounded-2xl border border-white/10 flex items-center justify-center flex-col gap-4 group cursor-pointer hover:bg-slate-800 transition-colors">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center animate-pulse">
                    {/* Simulación Icono Muela */}
                    <div className="w-8 h-8 border-2 border-cyan-400 rounded-lg transform rotate-45" />
                  </div>
                  <p className="text-sm text-cyan-200 font-medium group-hover:underline">
                    Tocar para interactuar en 3D
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ================= CONTENIDO FINANCE (GESTIÓN) ================= */}
        {activeTab === 'finance' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
            {/* Facturas y pagos */}
            <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center justify-between">
                Estado de cuenta
                <button className="text-sm text-emerald-600 font-medium hover:underline">
                  Ver historial completo
                </button>
              </h3>

              <div className="space-y-4">
                {invoices.map((inv) => (
                  <div
                    key={inv.id}
                    className="flex items-center justify-between p-4 bg-slate-50 rounded-xl"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-3 rounded-lg ${
                          inv.status === 'Pagado'
                            ? 'bg-emerald-100 text-emerald-600'
                            : 'bg-orange-100 text-orange-600'
                        }`}
                      >
                        <FileText className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-800">{inv.desc}</p>
                        <p className="text-xs text-slate-500">
                          {inv.id} • {inv.date}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-slate-900">{inv.amount}€</p>
                      {inv.status === 'Pendiente' ? (
                        <button className="mt-1 text-xs bg-slate-900 text-white px-3 py-1 rounded-full hover:bg-slate-700 transition-colors">
                          Pagar ahora
                        </button>
                      ) : (
                        <span className="text-xs text-emerald-600 font-medium flex items-center justify-end gap-1">
                          Pagado <ShieldCheck className="w-3 h-3" aria-hidden="true" />
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Catálogo de tratamientos */}
            <section className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 text-white shadow-lg">
              <h3 className="font-bold text-lg mb-2">Reserva tu próximo tratamiento</h3>
              <p className="text-emerald-100 text-sm mb-6">
                Consulta precios y disponibilidad en tiempo real.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button className="bg-white/10 hover:bg-white/20 p-4 rounded-xl text-left border border-white/20 backdrop-blur-sm transition-all group">
                  <span className="block font-bold group-hover:text-white">Blanqueamiento</span>
                  <span className="text-sm text-emerald-200 group-hover:text-emerald-100">Desde 150€</span>
                </button>
                <button className="bg-white/10 hover:bg-white/20 p-4 rounded-xl text-left border border-white/20 backdrop-blur-sm transition-all group">
                  <span className="block font-bold group-hover:text-white">Ortodoncia invisible</span>
                  <span className="text-sm text-emerald-200 group-hover:text-emerald-100">Presupuesto online</span>
                </button>
                <button className="bg-white/10 hover:bg-white/20 p-4 rounded-xl text-left border border-white/20 backdrop-blur-sm transition-all group">
                  <span className="block font-bold group-hover:text-white">Higiene completa</span>
                  <span className="text-sm text-emerald-200 group-hover:text-emerald-100">Agenda abierta</span>
                </button>
                <button className="bg-white text-emerald-600 p-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-50 transition-all shadow-md">
                  Ver todo el catálogo <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </section>
          </div>
        )}

        {/* ================= CONTENIDO PRIVACIDAD (SOBERANÍA) ================= */}
        {activeTab === 'privacy' && (
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 animate-in fade-in slide-in-from-right-4 duration-500">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-800">
              <ShieldCheck className="w-6 h-6 text-emerald-600" aria-hidden="true" />
              Soberanía de datos
            </h3>
            <p className="text-slate-500 mb-6">
              Tú decides quién accede a tu información. Revoca permisos en cualquier momento.
            </p>

            <div className="space-y-4">
              {['Clínica Dental Norte', 'Hospital Central', 'Aseguradora SurePay'].map((entity, i) => (
                <div
                  key={entity}
                  className="flex items-center justify-between p-4 border rounded-xl hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        i === 2 ? 'bg-slate-300' : 'bg-emerald-500'
                      }`}
                    />
                    <span className={i === 2 ? 'text-slate-400' : 'text-slate-700 font-medium'}>{entity}</span>
                  </div>
                  {/* Switch simulado */}
                  <div
                    className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors ${
                      i === 2 ? 'bg-slate-200' : 'bg-emerald-500'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                        i === 2 ? 'translate-x-0' : 'translate-x-6'
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-blue-50 text-blue-700 p-4 rounded-lg text-sm border border-blue-100">
              ℹ️ Al revocar un acceso, la entidad dejará de ver tu historial actualizado inmediatamente.
            </div>
          </section>
        )}
      </div>

      <GlobalFooter />
    </div>
  );
};

export default PatientPortal;

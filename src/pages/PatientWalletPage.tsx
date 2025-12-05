import React, { useState } from 'react';
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
  MessageCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';
// Asegúrate de que estos componentes existan, si no, usa divs simples temporalmente
import { NavigationControls } from '../components/ui/NavigationControls';
import { GlobalFooter } from '../components/ui/GlobalFooter';

const PatientWalletPage = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Controles de Navegación */}
      <div className="p-4">
        <NavigationControls />
      </div>

      {/* Header */}
      <div className="bg-emerald-600 p-6 rounded-b-3xl text-white shadow-lg mx-4">
        <h1 className="text-2xl font-bold">Hola, Ana Patient</h1>
        <p className="text-emerald-100">Tu salud en tu bolsillo</p>

        {/* Tabs */}
        <div className="flex mt-6 bg-black/20 p-1 rounded-xl">
          {['dashboard', 'finance', 'privacy'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 rounded-lg capitalize ${
                activeTab === tab ? 'bg-white text-emerald-700' : 'text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Contenido Demo */}
      <div className="flex-1 p-6">
        {activeTab === 'dashboard' && (
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5" /> Próxima Cita
            </h2>
            <p className="text-2xl font-bold text-slate-800">14 OCT</p>
            <p className="text-slate-500">Dr. Sarah Smith - Revisión</p>
          </div>
        )}

        {activeTab === 'finance' && (
          <div className="text-center p-10">Panel Financiero Cargado</div>
        )}

        {activeTab === 'privacy' && (
          <div className="text-center p-10">Panel Privacidad Cargado</div>
        )}
      </div>

      <GlobalFooter />
    </div>
  );
};

export default PatientWalletPage;

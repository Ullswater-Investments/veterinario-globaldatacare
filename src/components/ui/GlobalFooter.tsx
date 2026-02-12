import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUp, Home, ExternalLink, Gavel, Mail, Phone, MapPin, Lock, LogOut } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

export const GlobalFooter: React.FC = () => {
  const { user, signOut } = useAuth();
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      toast({ title: "Error de acceso", description: error.message, variant: "destructive" });
    } else {
      setShowLogin(false);
      setEmail("");
      setPassword("");
      toast({ title: "Sesión iniciada" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 py-10 border-t border-slate-800 mt-auto">
      <div className="container mx-auto px-6">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-3">
            <p className="text-sm font-semibold text-white">
              © {currentYear} GLOBAL DATA CARE — Todos los derechos reservados
            </p>
            <div className="text-xs space-y-1.5">
              <p className="font-medium text-slate-300">ACCURO TECHNOLOGY, S.L. · CIF: B87617981</p>
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-slate-500" />
                <span>C/ Colquide, 6 – Portal 2, 1ª planta, Edificio Prisma de Las Rozas – Madrid</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 flex-shrink-0 text-slate-500" />
                <span>(+34) 91 710 48 40</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 flex-shrink-0 text-slate-500" />
                <a 
                  href="mailto:ivan.becerro@accuro.es" 
                  className="hover:text-white transition-colors"
                >
                  ivan.becerro@accuro.es
                </a>
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-4 text-sm">
            <Link 
              to="/" 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Home className="w-4 h-4" />
              Inicio
            </Link>
            <span className="text-slate-700">·</span>
            <Link 
              to="/legal" 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Gavel className="w-4 h-4" />
              Aviso Legal
            </Link>
            <span className="text-slate-700">·</span>
            <a 
              href="/documents/Espacios_de_Datos_Elegibles_KTED.pdf#page=22"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Espacios de Datos Homologados
            </a>
          </nav>

          {/* Scroll to Top Button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-all text-sm font-bold border border-slate-700 hover:border-slate-500"
          >
            Subir
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Admin Login Section */}
        <div className="border-t border-slate-800 pt-6 mb-6">
          {user ? (
            <div className="flex items-center gap-3 text-xs">
              <Lock className="w-3.5 h-3.5 text-slate-500" />
              <span className="text-slate-400">{user.email}</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={signOut}
                className="h-7 px-2 text-xs text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <LogOut className="w-3 h-3 mr-1" />
                Cerrar sesión
              </Button>
            </div>
          ) : (
            <div className="space-y-3">
              <button
                type="button"
                onClick={() => setShowLogin(!showLogin)}
                className="flex items-center gap-2 text-xs text-slate-600 hover:text-slate-400 transition-colors"
              >
                <Lock className="w-3 h-3" />
                Acceso Admin
              </button>
              {showLogin && (
                <form onSubmit={handleLogin} className="flex flex-wrap items-end gap-2 max-w-md">
                  <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-8 text-xs bg-slate-900 border-slate-700 text-slate-200 placeholder:text-slate-600 w-48"
                  />
                  <Input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="h-8 text-xs bg-slate-900 border-slate-700 text-slate-200 placeholder:text-slate-600 w-40"
                  />
                  <Button
                    type="submit"
                    size="sm"
                    disabled={loading}
                    className="h-8 text-xs px-3"
                  >
                    {loading ? "..." : "Entrar"}
                  </Button>
                </form>
              )}
            </div>
          )}
        </div>

        {/* Bottom Divider & Extra Info */}
        <div className="border-t border-slate-800 pt-6">
          <p className="text-xs text-slate-500 text-center">
            Proyecto GLOBAL DATA CARE — Espacio de Datos Federado de Salud Animal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default GlobalFooter;

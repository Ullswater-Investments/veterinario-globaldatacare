import { ArrowRight, Sparkles, Code2, CalendarCheck, ShieldCheck, Zap, Globe } from 'lucide-react';

export const FinalCTA = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-slate-900">
      {/* Fondo atmosférico tipo aurora */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse delay-1000" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        {/* Badge superior */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-blue-300 text-sm font-medium mb-8 hover:bg-white/10 transition-colors cursor-default">
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span>Únete a la red europea de +500 nodos activos</span>
        </div>

        {/* Título principal */}
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
          El Futuro de la Odontología <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 animate-gradient">
            No es Digital, es Federado.
          </span>
        </h2>

        {/* Subtítulo narrativo */}
        <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
          <span className="font-semibold text-white">Dr. Dent, Ana, el Laboratorio y el Prof. Data</span> ya están conectados.
          Rompe los silos de tu organización y empieza a operar hoy con la infraestructura del mañana.
        </p>

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          {/* Botón principal: comercial */}
          <button className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold text-lg transition-all shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_0_60px_-15px_rgba(37,99,235,0.6)] flex items-center gap-3 w-full sm:w-auto justify-center">
            <CalendarCheck className="w-5 h-5" />
            Agendar Demo Guiada
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Botón secundario: técnico */}
          <button className="group px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white rounded-xl font-semibold text-lg transition-all backdrop-blur-sm flex items-center gap-3 w-full sm:w-auto justify-center">
            <Code2 className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300" />
            Documentación API
          </button>
        </div>

        {/* Marcadores de confianza */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-sm text-slate-500">
          <div className="flex items-center gap-2 hover:text-slate-400 transition-colors">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>GDPR Compliant &amp; ISO 27001</span>
          </div>
          <div className="flex items-center gap-2 hover:text-slate-400 transition-colors">
            <Zap className="w-4 h-4 text-yellow-500" />
            <span>Implementación en 48 horas</span>
          </div>
          <div className="flex items-center gap-2 hover:text-slate-400 transition-colors">
            <Globe className="w-4 h-4 text-blue-500" />
            <span>Estándares HL7 FHIR &amp; DICOM</span>
          </div>
        </div>
      </div>
    </section>
  );
};

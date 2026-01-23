import { Sparkles, PawPrint } from 'lucide-react';

export const FinalCTA = () => {
  return (
    <section className="relative py-16 overflow-hidden bg-foreground">
      {/* Fondo atmosférico tipo aurora */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-pulse delay-1000" />
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
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-primary text-sm font-medium mb-8 hover:bg-white/10 transition-colors cursor-default">
          <PawPrint className="w-4 h-4 text-accent" />
          <span>Únete a la red europea de +500 clínicas veterinarias activas</span>
        </div>

        {/* Título principal */}
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-0 tracking-tight leading-tight">
          El Futuro de la Medicina Veterinaria <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-accent">
            No es solo Digital, es Federado.
          </span>
        </h2>
      </div>
    </section>
  );
};
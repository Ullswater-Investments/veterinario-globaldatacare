import { Network, Scan, Brain } from 'lucide-react';

export const InteroperabilitySection = () => {
  const items = [
    {
      icon: Network,
      accentBg: 'bg-blue-500/10',
      accentIcon: 'text-blue-400',
      title: 'Orquestador HL7 FHIR',
      text: 'La API moderna que conecta PMS, hospitales y aseguradoras.',
      bullets: [
        "Actualiza el 'Timeline Federado' en tiempo real",
        'Traduce sistemas legacy a recursos FHIR estandarizados',
      ],
    },
    {
      icon: Scan,
      accentBg: 'bg-cyan-500/10',
      accentIcon: 'text-cyan-400',
      title: 'Visualización DICOM',
      text: 'Gestión nativa de radiografías y escaneos 3D de alta fidelidad.',
      bullets: [
        "Motor del 'Gemelo Digital' interactivo",
        'Genera alertas de IA sobre imagen clínica real',
      ],
    },
    {
      icon: Brain,
      accentBg: 'bg-purple-500/10',
      accentIcon: 'text-purple-400',
      title: 'Semántica SNOMED-VET',
      text: 'Estandarización de diagnósticos para IA veterinaria y One Health.',
      bullets: [
        'Permite a la IA entrenar modelos multiespecie robustos',
        'Conecta Veterinaria con Medicina Humana bajo enfoque One Health',
      ],
    },
  ];

  return (
    <section className="relative py-16 bg-slate-950 overflow-hidden">
      {/* Glows de fondo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-16 h-80 w-80 rounded-full bg-blue-600/30 blur-3xl" />
        <div className="absolute top-1/2 right-0 h-80 w-80 -translate-y-1/2 rounded-full bg-purple-600/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.2),_transparent_60%)] opacity-60" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Cabecera */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Hablamos el Idioma Universal de la Salud
          </h2>
          <p className="text-lg text-slate-400">
            Una arquitectura híbrida que orquesta datos, imágenes y semántica sin fricción.
          </p>
        </div>

        {/* Grid de 3 columnas */}
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 md:p-7 backdrop-blur-xl shadow-[0_0_40px_rgba(15,23,42,0.9)] transition-transform transition-shadow hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(59,130,246,0.7)]"
              >
                {/* Borde decorativo lateral */}
                <div className="absolute inset-y-4 left-3 w-px bg-gradient-to-b from-blue-500/40 via-purple-400/40 to-cyan-400/40" />

                <div className="relative pl-5">
                  <div
                    className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ${item.accentBg} ${item.accentIcon}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-300 mb-4 leading-relaxed">{item.text}</p>

                  <ul className="space-y-1.5 text-sm text-slate-400">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-slate-400/80" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

import { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Send } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

type Msg = { role: 'user' | 'assistant'; content: string };

const getResponse = (input: string): string => {
  const lower = input.toLowerCase();

  if (/precio|negocio|kit|subvenci[oó]n|coste|cuota|190/.test(lower)) {
    return '💰 El modelo de adhesión al Espacio de Datos Veterinario tiene una cuota de **190 €/mes** (IVA no incluido), subvencionable hasta el 100% a través del programa Kit Espacio de Datos. Existen dos opciones: **Opción A** (adhesión directa) y **Opción B** (con migración de datos). Consulta los detalles en la [página de condiciones](/condiciones-kit-espacio-datos) o [inscríbete directamente](/inscripcion-kit-espacio-datos).';
  }

  if (/paciente|wallet|tutor|propietario|mascota|dueño/.test(lower)) {
    return '🐾 El **Wallet del Tutor** es la cartera digital del propietario de la mascota. Incluye historial clínico completo, vacunas, desparasitaciones, citas, facturas y consentimientos firmados digitalmente. Usa credenciales verificables (SSI) para compartir datos de forma segura. Puedes ver una demo en [Portal Tutor](/portal/patient) o probar la [Demo Tutor](/demo/tutor).';
  }

  if (/pasaporte|dpp|vacuna|trazabilidad|blockchain|qr/.test(lower)) {
    return '📦 El **Pasaporte Digital de Producto (DPP)** permite la trazabilidad completa de vacunas, medicamentos, piensos y productos veterinarios mediante blockchain. Cada producto tiene un código QR/DataMatrix verificable. Cumple con la normativa europea EUDCC-Vet. Más info en [Trazabilidad](/tech/dpp) o [Pasaportes Digitales](/solutions/product-passport).';
  }

  if (/cl[ií]nica|veterinari|centro|gesti[oó]n|fhir|historia/.test(lower)) {
    return '🏥 El módulo de **Gestión Veterinaria** incluye historia clínica electrónica con extensiones FHIR Vet, triaje inteligente, prescripción electrónica, laboratorio integrado y hospitalización con monitorización IoT. Explora el [Portal Veterinario](/portal/doctor) o prueba la [Demo Veterinario](/demo/vet).';
  }

  if (/investigaci[oó]n|research|one health|zoonosis|epidemiolog/.test(lower)) {
    return '🔬 El módulo de **Investigación One Health** ofrece un marketplace de datos clínicos anonimizados para investigación veterinaria, zoonosis y epidemiología. Utiliza computación federada para analizar datos sin moverlos entre centros. Accede al [Portal Investigación](/portal/research) o la [Demo Investigación](/demo/research).';
  }

  if (/compra|supply|stock|inventario|proveedor|abastecimiento/.test(lower)) {
    return '📦 El módulo de **Abastecimiento Inteligente** incluye central de compras con predicción de demanda IoT, gestión de stock automatizada, pedidos inteligentes y comparativa de proveedores. Visita el [Portal Compras](/portal/procurement).';
  }

  if (/kpi|dashboard|indicador|m[eé]trica|benchmark/.test(lower)) {
    return '📊 El módulo de **Excelencia Veterinaria (KPIs)** ofrece dashboards con indicadores clínicos, operativos y de satisfacción del tutor. Incluye benchmarking anónimo entre centros para comparar rendimiento. Explora el [Panel KPIs](/portal/kpi) o las páginas detalladas de [Resultados Clínicos](/kpi/clinical-outcomes), [Flujo Operativo](/kpi/operational-flow) y [Voz del Tutor](/kpi/tutor-voice).';
  }

  return '👋 Soy el asistente del proyecto VetSpace. Puedo ayudarte con información sobre los **módulos de la plataforma**, **precios y subvenciones**, el **Wallet del Tutor**, el **Pasaporte Digital**, **investigación One Health**, la **central de compras** o los **KPIs**. ¿Sobre qué tema quieres saber más?';
};

const ProjectAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: 'assistant',
      content: '👋 ¡Hola! Soy el asistente offline del proyecto VetSpace. Puedo resolver dudas rápidas sobre módulos, precios, tecnología y más. ¿Qué necesitas?',
    },
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg: Msg = { role: 'user', content: trimmed };
    const answer = getResponse(trimmed);
    const assistantMsg: Msg = { role: 'assistant', content: answer };

    setMessages((prev) => [...prev, userMsg, assistantMsg]);
    setInput('');
  };

  return (
    <div className="fixed z-50 bottom-24 left-4 sm:bottom-20 sm:left-6">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-4 py-3 shadow-lg hover:scale-105 transition-transform text-sm font-medium"
        >
          <Sparkles className="h-5 w-5" />
          Asistente Proyecto
        </button>
      )}

      {isOpen && (
        <div className="w-80 md:w-96 rounded-2xl border border-border bg-card shadow-2xl overflow-hidden animate-in slide-in-from-bottom-10 zoom-in-95 duration-200">
          {/* Header */}
          <div className="flex items-center justify-between bg-accent px-4 py-3 text-accent-foreground">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              <span className="font-bold text-sm">Asistente Proyecto</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="rounded p-1 hover:bg-white/20 transition-colors">
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <ScrollArea className="h-[380px] p-4" ref={scrollRef as any}>
            <div className="flex flex-col gap-3">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                    m.role === 'user'
                      ? 'ml-auto bg-accent text-accent-foreground rounded-tr-sm'
                      : 'bg-secondary/50 text-foreground rounded-tl-sm'
                  }`}
                >
                  {m.content}
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="flex items-center gap-2 border-t border-border p-3 bg-background">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Pregunta sobre el proyecto…"
              className="flex-1 bg-muted/50 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="shrink-0 p-2 rounded-full hover:bg-muted transition-colors disabled:opacity-40"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectAssistant;

import React, { useState, useRef, FormEvent } from "react";
import { MessageCircle, Sparkles, X } from "lucide-react";

interface ChatMessage {
  id: number;
  role: "user" | "assistant";
  content: string;
}

const placeholderKnowledgeBase = `Pegaremos aquí la base de conocimiento GLOBAL DATA CARE una vez esté cerrada.`;

const ProjectAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      role: "assistant",
      content:
        "Hola, soy la IA de Global Data Care. Pregúntame sobre la arquitectura, el modelo de negocio o cualquiera de los portales (Clínicas, Pasaporte de Producto, Wallet Paciente, Prof. Data, Central de Compras, KPI Clínicas).",
    },
  ]);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const nextId = useRef(2);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isThinking) return;

    const userMessage: ChatMessage = {
      id: nextId.current++,
      role: "user",
      content: trimmed,
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsThinking(true);

    const lower = trimmed.toLowerCase();

    let answer = "";
    if (lower.includes("precio") || lower.includes("negocio") || lower.includes("kit") || lower.includes("subvencion")) {
      answer =
        "El modelo de negocio se apoya en las ayudas Kit Espacios de Datos de Red.es. La Opción A propone una inversión aproximada de 2.000€ por clínica para activar una subvención de 15.000€ en servicios, mientras que la Opción B está pensada para 5 líderes de consorcio que aportan unos 5.000€ y accionan 30.000€ de presupuesto para casos de uso avanzados y liderazgo sectorial. Todo lo recaudado se reinvierte en la plataforma común Global Data Care (modelo Win‑Win).";
    } else if (lower.includes("paciente") || lower.includes("wallet") || lower.includes("app")) {
      answer =
        "El portal del Paciente funciona como una Super‑App: combina historial clínico y financiero, tratamientos activos con recordatorios inteligentes, agenda futura y un pequeño marketplace de tratamientos. Incluye un gemelo digital 3D de la boca y un panel de soberanía de datos donde el paciente enciende o apaga el acceso para clínicas, laboratorios o aseguradoras.";
    } else if (lower.includes("pasaporte") || lower.includes("dpp") || lower.includes("producto")) {
      answer =
        "El Pasaporte Digital de Producto (DPP) convierte cada implante o prótesis en un gemelo digital trazable: lote, fabricante, materiales, parámetros críticos y certificados MDR/ISO. Permite localizar rápidamente pacientes afectados ante alertas sanitarias y transforma la burocracia regulatoria en un argumento de confianza para la clínica y el paciente.";
    } else if (lower.includes("clinica") || lower.includes("clínica") || lower.includes("doctor") || lower.includes("dr. dent")) {
      answer =
        "El módulo de Clínicas aporta un \"Hub de Servicios\" en cloud federado: conecta el PMS local sin migrar datos, activa servicios avanzados (IA diagnóstica, interoperabilidad hospitalaria, analytics) y mantiene la soberanía del dato en la clínica. Es la puerta de entrada al Espacio de Datos Federado del sector dental.";
    } else if (lower.includes("investigacion") || lower.includes("investigación") || lower.includes("prof. data") || lower.includes("research")) {
      answer =
        "Prof. Data es el marketplace donde los doctores pueden monetizar datasets clínicos anonimizados y acceder a algoritmos ya entrenados. Usa datos sintéticos para mostrar previews sin exponer información sensible y aplica técnicas como k‑anonymity para preservar la privacidad mientras se habilita investigación multicéntrica e IA federada.";
    } else if (lower.includes("compras") || lower.includes("supply") || lower.includes("stock") || lower.includes("material")) {
      answer =
        "La Central de Compras usa la agenda clínica para predecir consumo de materiales (ejemplo: número de implantes previstos) y cruza esos datos con el stock actual. Cuando detecta déficits genera pedidos automáticos y los agrupa con cientos de clínicas para negociar precios de mayorista, mostrando en un dashboard el ahorro conseguido.";
    } else if (lower.includes("kpi") || lower.includes("dashboard") || lower.includes("indicador") || lower.includes("excelencia")) {
      answer =
        "El módulo KPI Clínicas es un cockpit que cruza datos de experiencia de paciente (NPS, encuestas), operación (tiempos de espera, ocupación) y resultados médicos (éxito de implantes, complicaciones). Un motor de IA genera alertas predictivas y permite benchmarking anónimo frente a la red federada para orientar decisiones de gestión.";
    } else {
      answer =
        "Global Data Care es un espacio de datos federado para el ecosistema dental: conecta clínicas, laboratorios, aseguradoras, pacientes y centros de investigación sobre un mismo estándar. Puedes preguntarme por Clínicas, Pasaporte de Producto, Wallet Paciente, Prof. Data, Central de Compras o KPI Clínicas, o por el modelo de negocio basado en las ayudas Kit Espacios de Datos.";
    }

    setTimeout(() => {
      const assistantMessage: ChatMessage = {
        id: nextId.current++,
        role: "assistant",
        content: answer,
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsThinking(false);
    }, 600);
  };

  // Botón flotante cuando el chat está cerrado
  if (!isOpen) {
    return (
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-xl hover-scale transition-all flex items-center gap-2 px-4 py-3"
      >
        <Sparkles className="w-5 h-5" />
        <span className="hidden sm:inline text-sm font-semibold">Asistente IA Proyecto</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 w-full max-w-sm sm:max-w-md animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col h-[480px]">
        <header className="px-4 py-3 bg-slate-900 text-white flex items-center justify-between rounded-t-2xl">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center text-white">
              <MessageCircle className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-semibold">IA Global Data Care</div>
              <div className="text-[11px] text-emerald-200">
                Pregúntame por arquitectura, negocio o portales
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="text-slate-300 hover:text-white"
            aria-label="Cerrar asistente"
          >
            <X className="w-4 h-4" />
          </button>
        </header>

        <div className="flex-1 p-3 bg-slate-50 overflow-y-auto space-y-3 text-sm">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === "assistant" ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-3 py-2 leading-relaxed whitespace-pre-line ${
                  msg.role === "assistant"
                    ? "bg-white text-slate-800 border border-slate-200"
                    : "bg-blue-600 text-white"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
          {isThinking && (
            <div className="flex justify-start">
              <div className="bg-white border border-slate-200 text-slate-500 rounded-2xl px-3 py-2 text-xs italic">
                La IA está pensando...
              </div>
            </div>
          )}
        </div>

        <footer className="border-t border-slate-200 p-3 bg-white rounded-b-2xl">
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu pregunta sobre el proyecto..."
              className="flex-1 text-sm rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50"
            />
            <button
              type="submit"
              disabled={isThinking || !input.trim()}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white rounded-xl px-3 py-2 text-sm font-semibold"
            >
              Enviar
            </button>
          </form>
        </footer>
      </div>
    </div>
  );
};

export default ProjectAssistant;
export { ProjectAssistant };

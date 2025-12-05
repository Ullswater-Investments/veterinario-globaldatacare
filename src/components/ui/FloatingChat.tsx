import { useState } from "react";
import { MessageCircle, Bot } from "lucide-react";

/**
 * Chat flotante global para ACCURO.
 * Replica el diseño del botón verde y ventana de chat
 * y se posiciona ligeramente más arriba y a la izquierda
 * para no tapar el botón "Subir" del GlobalFooter.
 */
const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed z-50 bottom-24 right-4 sm:bottom-20 sm:right-6 lg:bottom-16 lg:right-32">
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="relative flex h-16 w-16 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg shadow-emerald-600/40 transition-transform hover:scale-110 hover:bg-emerald-500 active:scale-95"
          aria-label="Abrir asistente clínico"
        >
          <MessageCircle className="h-8 w-8" aria-hidden="true" />
          <span className="absolute right-0 top-0 h-4 w-4 rounded-full border-2 border-white bg-red-500 animate-pulse" />
        </button>
      )}

      {isOpen && (
        <div className="origin-bottom-right animate-in slide-in-from-bottom-10 zoom-in-95 duration-200 w-80 md:w-96 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
          <div className="flex items-center justify-between bg-emerald-600 p-4 text-white">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5" aria-hidden="true" />
              <span className="font-bold">Asistente clínica</span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded p-1 hover:bg-white/20 transition-colors"
              aria-label="Cerrar asistente clínico"
            >
              ✕
            </button>
          </div>

          <div className="flex h-80 flex-col gap-3 overflow-y-auto bg-slate-50 p-4 text-sm">
            <div className="max-w-[85%] rounded-b-xl rounded-tr-xl border border-slate-100 bg-white p-3 text-slate-700 shadow-sm">
              ¡Hola Ana! 👋 Veo que tienes una cita el 14 de Octubre.
              ¿Necesitas ayuda con tu medicación o quieres adelantar la visita?
            </div>
            <div className="ml-auto max-w-[85%] rounded-b-xl rounded-tl-xl bg-emerald-100 p-3 text-emerald-900 shadow-sm">
              ¿Puedo pagar la factura pendiente desde aquí?
            </div>
            <div className="max-w-[85%] rounded-b-xl rounded-tr-xl border border-slate-100 bg-white p-3 text-slate-700 shadow-sm">
              Sí, claro. Ve a la pestaña "Gestión" y pulsa en "Pagar ahora".
              Es seguro e instantáneo.
            </div>
          </div>

          <div className="border-t bg-white p-3">
            <input
              type="text"
              placeholder="Escribe tu consulta..."
              className="w-full rounded-full bg-slate-100 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-shadow"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingChat;

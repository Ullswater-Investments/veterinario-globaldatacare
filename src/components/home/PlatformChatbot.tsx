import { useState, useRef, useEffect } from 'react';
import { Send, Loader2, Bot, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import ReactMarkdown from 'react-markdown';
import { toast } from 'sonner';

type Msg = { role: 'user' | 'assistant'; content: string };

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/platform-chat`;

const INITIAL_SUGGESTIONS = [
  '¿Cuánto cuesta adherirse al espacio de datos?',
  '¿Qué módulos incluye la plataforma?',
  '¿Cómo solicito la ayuda Kit Espacio de Datos?',
  '¿Qué tecnología utiliza VetSpace?',
];

const FOLLOWUP_SUGGESTIONS = [
  [
    '¿Qué subvenciones hay disponibles?',
    '¿Cómo funciona el Wallet del Tutor?',
    '¿Qué es el Pasaporte Digital de Producto?',
    '¿Cómo se garantiza la soberanía del dato?',
  ],
  [
    '¿Qué incluye la cuota de 190€/mes?',
    '¿Cuál es el plazo de inscripción?',
    '¿Qué es la Central de Compras?',
    '¿Cómo funciona la IA Federada?',
  ],
  [
    '¿Qué diferencia hay entre Opción A y B?',
    '¿Cómo se integra con mi sistema actual?',
    '¿Qué KPIs puedo monitorizar?',
    '¿Quién es ACCURO TECHNOLOGY?',
  ],
];

export const PlatformChatbot = () => {
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: 'assistant',
      content:
        '¡Hola! 👋 Soy el asistente virtual de **VetSpace**. Pregúntame sobre nuestros módulos de gestión veterinaria, el Pasaporte Digital de Producto, el Wallet del Tutor, investigación One Health, o cómo adherirte al **Kit Espacio de Datos** con subvención. ¿En qué puedo ayudarte?',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    const userMsg: Msg = { role: 'user', content: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    let assistantSoFar = '';

    const upsertAssistant = (chunk: string) => {
      assistantSoFar += chunk;
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last?.role === 'assistant' && prev.length > 1 && prev[prev.length - 2]?.role === 'user' && prev[prev.length - 2]?.content === trimmed) {
          return prev.map((m, i) => (i === prev.length - 1 ? { ...m, content: assistantSoFar } : m));
        }
        return [...prev, { role: 'assistant', content: assistantSoFar }];
      });
    };

    try {
      const resp = await fetch(CHAT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });

      if (!resp.ok) {
        const err = await resp.json().catch(() => ({ error: 'Error desconocido' }));
        toast.error(err.error || `Error ${resp.status}`);
        setIsLoading(false);
        return;
      }

      if (!resp.body) throw new Error('No response body');

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';
      let streamDone = false;

      while (!streamDone) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = buffer.indexOf('\n')) !== -1) {
          let line = buffer.slice(0, newlineIndex);
          buffer = buffer.slice(newlineIndex + 1);

          if (line.endsWith('\r')) line = line.slice(0, -1);
          if (line.startsWith(':') || line.trim() === '') continue;
          if (!line.startsWith('data: ')) continue;

          const jsonStr = line.slice(6).trim();
          if (jsonStr === '[DONE]') {
            streamDone = true;
            break;
          }

          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) upsertAssistant(content);
          } catch {
            buffer = line + '\n' + buffer;
            break;
          }
        }
      }

      // Final flush
      if (buffer.trim()) {
        for (let raw of buffer.split('\n')) {
          if (!raw) continue;
          if (raw.endsWith('\r')) raw = raw.slice(0, -1);
          if (raw.startsWith(':') || raw.trim() === '') continue;
          if (!raw.startsWith('data: ')) continue;
          const jsonStr = raw.slice(6).trim();
          if (jsonStr === '[DONE]') continue;
          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) upsertAssistant(content);
          } catch { /* ignore */ }
        }
      }
    } catch (e) {
      console.error('Chat error:', e);
      toast.error('Error al conectar con el asistente. Inténtalo de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  const exchangeCount = Math.floor(messages.length / 2);
  const suggestions =
    exchangeCount <= 1
      ? INITIAL_SUGGESTIONS
      : FOLLOWUP_SUGGESTIONS[(exchangeCount - 2) % FOLLOWUP_SUGGESTIONS.length];

  return (
    <div className="w-full max-w-2xl mx-auto rounded-2xl border border-border overflow-hidden shadow-lg bg-card">
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <Bot className="h-5 w-5" />
        <span className="font-bold text-sm">Asistente VetSpace</span>
      </div>

      {/* Messages */}
      <ScrollArea className="h-80 p-4" ref={scrollRef as any}>
        <div className="flex flex-col gap-3">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                m.role === 'user'
                  ? 'ml-auto bg-primary text-primary-foreground rounded-tr-sm'
                  : 'bg-secondary/50 text-foreground rounded-tl-sm'
              }`}
            >
              {m.role === 'assistant' ? (
                <div className="prose prose-sm max-w-none dark:prose-invert [&_a]:text-primary [&_a]:underline [&_a]:font-medium">
                  <ReactMarkdown
                    components={{
                      a: ({ href, children }) => (
                        <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80 font-medium">
                          {children}
                        </a>
                      ),
                    }}
                  >
                    {m.content}
                  </ReactMarkdown>
                </div>
              ) : (
                m.content
              )}
            </div>
          ))}

          {isLoading && messages[messages.length - 1]?.role === 'user' && (
            <div className="flex items-center gap-2 text-muted-foreground text-sm px-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              Pensando…
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Suggestions */}
      {!isLoading && messages[messages.length - 1]?.role === 'assistant' && (
        <div className="grid grid-cols-2 gap-2 px-4 pb-2">
          {suggestions.map((q) => (
            <button
              key={q}
              onClick={() => send(q)}
              className="text-xs text-left px-3 py-2 rounded-lg border border-border bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors truncate"
            >
              {q}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div className="flex items-center gap-2 border-t border-border p-3 bg-background">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && send(input)}
          placeholder="Escribe tu pregunta…"
          className="flex-1 bg-muted/50 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
          disabled={isLoading}
        />
        <Button
          size="icon"
          variant="ghost"
          onClick={() => send(input)}
          disabled={isLoading || !input.trim()}
          className="shrink-0"
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

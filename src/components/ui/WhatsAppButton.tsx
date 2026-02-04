import { useAuth } from '@/contexts/AuthContext';
import { MessageCircle } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const WHATSAPP_NUMBER = '34601398868';

const WhatsAppButton = () => {
  const { user } = useAuth();
  
  const getMessage = () => {
    if (user?.email) {
      return `Hola, soy ${user.email}, necesito ayuda con mi cuenta en Global Data Care.`;
    }
    return 'Hola! Soy usuario de Global Data Care y necesito ayuda.';
  };
  
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(getMessage())}`;
  
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-20 right-4 z-50 flex h-14 w-14 items-center justify-center 
                     rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 
                     transition-all duration-300 hover:scale-110 hover:shadow-xl 
                     hover:shadow-[#25D366]/50 active:scale-95
                     sm:bottom-6 sm:right-6"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="h-7 w-7" />
        </a>
      </TooltipTrigger>
      <TooltipContent side="left" className="bg-slate-900 text-white">
        <p>¿Necesitas ayuda?</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default WhatsAppButton;

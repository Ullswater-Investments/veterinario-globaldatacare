/**
 * Utilidades de formateo para OralSpace-X
 * Mantiene consistencia en toda la aplicación
 */

/**
 * Formatea una cantidad monetaria en EUR
 * @example formatCurrency(1200.50) => "1.200,50 €"
 */
export function formatCurrency(amount: number | null | undefined): string {
  if (amount === null || amount === undefined) return 'N/A';
  
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

/**
 * Formatea una fecha ISO en formato español
 * @example formatDate('2024-01-15T10:30:00Z') => "15 ene 2024"
 */
export function formatDate(isoString: string | null | undefined): string {
  if (!isoString) return 'Fecha no disponible';
  
  try {
    const date = new Date(isoString);
    return new Intl.DateTimeFormat('es-ES', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }).format(date);
  } catch {
    return 'Fecha inválida';
  }
}

/**
 * Formatea una fecha y hora completa
 * @example formatDateTime('2024-01-15T10:30:00Z') => "15 ene 2024, 10:30"
 */
export function formatDateTime(isoString: string | null | undefined): string {
  if (!isoString) return 'Fecha no disponible';
  
  try {
    const date = new Date(isoString);
    return new Intl.DateTimeFormat('es-ES', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  } catch {
    return 'Fecha inválida';
  }
}

/**
 * Formatea un DID (Decentralized ID) truncado
 * @example formatDID('did:ethr:0x1234567890abcdef') => "did:ethr:0x1234...cdef"
 */
export function formatDID(did: string | null | undefined): string {
  if (!did) return 'DID no disponible';
  if (did.length <= 20) return did;
  
  return `${did.slice(0, 16)}...${did.slice(-4)}`;
}

/**
 * Obtiene el color de la badge según el nivel de riesgo
 */
export function getRiskColor(riskLevel: string | null | undefined): {
  bg: string;
  text: string;
  border: string;
} {
  switch (riskLevel) {
    case 'high':
      return { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200' };
    case 'medium':
      return { bg: 'bg-yellow-50', text: 'text-yellow-700', border: 'border-yellow-200' };
    case 'normal':
    default:
      return { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200' };
  }
}

/**
 * Obtiene el color del estado del claim
 */
export function getClaimStatusColor(status: string | null | undefined): {
  bg: string;
  text: string;
} {
  switch (status) {
    case 'paid':
      return { bg: 'bg-green-50', text: 'text-green-700' };
    case 'fraud_detected':
      return { bg: 'bg-red-50', text: 'text-red-700' };
    case 'approved':
      return { bg: 'bg-blue-50', text: 'text-blue-700' };
    case 'pending':
    default:
      return { bg: 'bg-yellow-50', text: 'text-yellow-700' };
  }
}

/**
 * Traduce estados de claims al español
 */
export function translateClaimStatus(status: string | null | undefined): string {
  const translations: Record<string, string> = {
    pending: 'Pendiente',
    approved: 'Aprobado',
    paid: 'Pagado',
    fraud_detected: 'Fraude Detectado',
  };
  return status ? translations[status] || status : 'Desconocido';
}

/**
 * Traduce estados de órdenes de lab al español
 */
export function translateLabStatus(status: string | null | undefined): string {
  const translations: Record<string, string> = {
    received: 'Recibido',
    designing: 'Diseñando',
    manufacturing: 'Fabricando',
    shipped: 'Enviado',
  };
  return status ? translations[status] || status : 'Desconocido';
}

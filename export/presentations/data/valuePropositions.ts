export interface ValueProposition {
  partnerId: string;
  headline: string;
  subheadline: string;
  painPoints: string[];
  solutions: string[];
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
  testimonialPlaceholder: string;
  ctaText: string;
  ctaLink: string;
}

export const valuePropositions: ValueProposition[] = [
  {
    partnerId: 'clinicas',
    headline: 'De la Gestión Aislada a la Inteligencia Conectada',
    subheadline: 'Únete al primer espacio de datos federado de salud animal en España',
    painPoints: [
      'Software legacy sin interoperabilidad',
      'Pérdida de tiempo en tareas administrativas',
      'Sin acceso a benchmarking del sector',
      'Datos clínicos atrapados en silos',
      'Dificultad para derivaciones y segundas opiniones'
    ],
    solutions: [
      'Interoperabilidad FHIR con cualquier sistema',
      'Automatización de informes y facturación',
      'Dashboard de KPIs comparativo',
      'Monetización de datos anonimizados',
      'Red de especialistas y laboratorios conectados'
    ],
    metrics: [
      { label: 'Ahorro tiempo admin', value: '40%', description: 'Reducción en tareas administrativas' },
      { label: 'Ingresos adicionales', value: '€2,500/año', description: 'Por monetización de datos' },
      { label: 'Derivaciones', value: '+35%', description: 'Incremento en derivaciones recibidas' }
    ],
    testimonialPlaceholder: '"El espacio de datos ha transformado nuestra forma de trabajar. Ahora tenemos visibilidad de todo el ecosistema." - Director Clínica Veterinaria',
    ctaText: 'Solicitar Demo Personalizada',
    ctaLink: '/demo/clinic'
  },
  {
    partnerId: 'laboratorios',
    headline: 'Resultados que Fluyen, No que se Estancan',
    subheadline: 'Integración estandarizada con toda la red de clínicas',
    painPoints: [
      'Múltiples formatos de integración por cliente',
      'Errores de transcripción frecuentes',
      'Sin feedback sobre impacto clínico',
      'Dificultad para participar en estudios',
      'Competencia en precio sin diferenciación'
    ],
    solutions: [
      'API única estandarizada LOINC/FHIR',
      'Resultados directos al historial clínico',
      'Métricas de impacto en decisiones clínicas',
      'Acceso a proyectos de investigación',
      'Diferenciación por calidad de datos'
    ],
    metrics: [
      { label: 'Reducción errores', value: '95%', description: 'Eliminación de transcripción manual' },
      { label: 'Tiempo integración', value: '2 días', description: 'vs 2-4 semanas tradicional' },
      { label: 'Nuevos clientes', value: '+25%', description: 'Por visibilidad en la red' }
    ],
    testimonialPlaceholder: '"La estandarización nos ha abierto puertas que antes eran imposibles." - Director Técnico Laboratorio',
    ctaText: 'Ver Especificaciones Técnicas',
    ctaLink: '/tech/fhir'
  },
  {
    partnerId: 'farmaceuticas',
    headline: 'Trazabilidad Total, Confianza Absoluta',
    subheadline: 'Del fabricante al paciente con visibilidad completa',
    painPoints: [
      'Falsificaciones y mercado gris',
      'Farmacovigilancia reactiva',
      'Sin datos de uso real',
      'Cumplimiento regulatorio costoso',
      'Desconexión con el canal'
    ],
    solutions: [
      'Pasaporte Digital de Producto (DPP)',
      'Alertas de farmacovigilancia en tiempo real',
      'Real World Evidence continuo',
      'Compliance automatizado',
      'Conexión directa con prescriptores'
    ],
    metrics: [
      { label: 'Detección fraude', value: '99.7%', description: 'Productos verificados en la cadena' },
      { label: 'Tiempo reporte', value: '-80%', description: 'En procesos de farmacovigilancia' },
      { label: 'ROI RWE', value: '5x', description: 'Retorno en estudios de uso real' }
    ],
    testimonialPlaceholder: '"Por primera vez tenemos visibilidad real de cómo se usan nuestros productos." - Director Medical Affairs',
    ctaText: 'Explorar Product Passport',
    ctaLink: '/solutions/product-passport'
  },
  {
    partnerId: 'aseguradoras',
    headline: 'Claims Inteligentes, Fraude Minimizado',
    subheadline: 'Automatización end-to-end del ciclo de reclamaciones',
    painPoints: [
      'Procesos manuales de verificación',
      'Alto índice de fraude',
      'Tiempo de liquidación largo',
      'Pricing sin datos reales',
      'Experiencia de cliente deficiente'
    ],
    solutions: [
      'Smart Claims con verificación automática',
      'Scoring de fraude con IA',
      'Liquidación en minutos',
      'Datos reales para actuariado',
      'App móvil para tutores'
    ],
    metrics: [
      { label: 'Reducción fraude', value: '45%', description: 'Con verificación automática' },
      { label: 'Tiempo claim', value: '< 24h', description: 'Liquidación automática' },
      { label: 'NPS cliente', value: '+40 pts', description: 'Mejora en satisfacción' }
    ],
    testimonialPlaceholder: '"Los smart claims han revolucionado nuestra operativa y la experiencia del asegurado." - Director de Operaciones',
    ctaText: 'Ver Demo Smart Claims',
    ctaLink: '/portal/insurance'
  },
  {
    partnerId: 'investigacion',
    headline: 'Investigación sin Fronteras de Datos',
    subheadline: 'Acceso a la mayor base de datos veterinaria federada de Europa',
    painPoints: [
      'Datasets pequeños y sesgados',
      'Meses para conseguir datos',
      'Problemas de privacidad y consentimiento',
      'Dificultad para colaboración multi-centro',
      'Reproducibilidad cuestionable'
    ],
    solutions: [
      'Millones de registros anonimizados',
      'Acceso en días, no meses',
      'Consentimiento y privacidad by design',
      'Federated Learning sin mover datos',
      'Auditoría completa del proceso'
    ],
    metrics: [
      { label: 'Tamaño cohortes', value: '10x', description: 'Mayor que estudios tradicionales' },
      { label: 'Tiempo acceso', value: '< 1 semana', description: 'vs 3-6 meses tradicional' },
      { label: 'Coste reducido', value: '-70%', description: 'En adquisición de datos' }
    ],
    testimonialPlaceholder: '"Hemos podido realizar estudios que antes eran imposibles por falta de datos." - Investigador Principal',
    ctaText: 'Explorar Research Marketplace',
    ctaLink: '/portal/research'
  },
  {
    partnerId: 'distribuidores',
    headline: 'Supply Chain Visible y Predecible',
    subheadline: 'Optimización del inventario con inteligencia de demanda',
    painPoints: [
      'Stock muerto y roturas',
      'Previsión de demanda manual',
      'Trazabilidad incompleta',
      'Múltiples sistemas desconectados',
      'Margen presionado'
    ],
    solutions: [
      'Inventario predictivo con IA',
      'Demanda agregada de la red',
      'Trazabilidad lote completa',
      'Integración automática con clínicas',
      'Nuevos servicios de valor añadido'
    ],
    metrics: [
      { label: 'Stock muerto', value: '-60%', description: 'Reducción de producto caducado' },
      { label: 'Roturas stock', value: '-40%', description: 'Mejor disponibilidad' },
      { label: 'Eficiencia logística', value: '+25%', description: 'Optimización de rutas' }
    ],
    testimonialPlaceholder: '"La visibilidad de demanda ha transformado nuestra gestión de inventario." - Director Supply Chain',
    ctaText: 'Ver Portal Procurement',
    ctaLink: '/portal/procurement'
  },
  {
    partnerId: 'iot',
    headline: 'Dispositivos que Hablan el Mismo Idioma',
    subheadline: 'Integración estandarizada en el ecosistema veterinario',
    painPoints: [
      'Cada cliente requiere integración custom',
      'Datos sin contexto clínico',
      'Dificultad de escalado',
      'Sin modelo de servicio recurrente',
      'Competencia en hardware commoditizado'
    ],
    solutions: [
      'API única para todo el ecosistema',
      'Datos enriquecidos con contexto clínico',
      'Escalado automático',
      'Modelos de servicio (DaaS)',
      'Diferenciación por inteligencia'
    ],
    metrics: [
      { label: 'Tiempo integración', value: '1 día', description: 'vs semanas de desarrollo custom' },
      { label: 'Clientes alcanzables', value: '500+', description: 'Clínicas en la red' },
      { label: 'Revenue recurrente', value: '+200%', description: 'Con modelo DaaS' }
    ],
    testimonialPlaceholder: '"Pasar de vender hardware a vender datos y servicios ha multiplicado nuestro valor." - CEO IoT Company',
    ctaText: 'Ver Especificaciones IoT',
    ctaLink: '/tech/iot'
  },
  {
    partnerId: 'inversores',
    headline: 'El Futuro de la Salud Animal es Federado',
    subheadline: 'Oportunidad única en HealthTech veterinaria europea',
    painPoints: [
      'Mercado fragmentado sin líder claro',
      'Regulación incierta',
      'Modelos de negocio no probados',
      'Competencia de big tech',
      'Escalabilidad cuestionable'
    ],
    solutions: [
      'First mover en espacios de datos veterinarios',
      'Financiación pública (Kit Espacio Datos)',
      'Múltiples revenue streams validados',
      'Network effects como barrera',
      'Expansión europea clara'
    ],
    metrics: [
      { label: 'TAM España', value: '€4.5B', description: 'Mercado veterinario total' },
      { label: 'Crecimiento', value: '12% CAGR', description: 'Sector en expansión' },
      { label: 'Target exit', value: '5-7 años', description: 'Horizonte de inversión' }
    ],
    testimonialPlaceholder: '"La combinación de tecnología, regulación favorable y equipo nos convenció." - Partner VC',
    ctaText: 'Solicitar Deck de Inversión',
    ctaLink: '/dossier'
  }
];

export const getValuePropositionByPartnerId = (partnerId: string): ValueProposition | undefined => {
  return valuePropositions.find(v => v.partnerId === partnerId);
};

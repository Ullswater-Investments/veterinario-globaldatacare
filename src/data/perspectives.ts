// src/data/perspectives.ts

export const perspectivesData = {
  doctor: {
    id: 'doctor',
    role: 'Dr. Dent (Clínica)',
    title: 'Panel de Control Clínico Unificado',
    pitch: 'Transforma datos dispersos en decisiones clínicas. Unifica historial hospitalario, alertas de riesgo y diagnóstico AI en una sola vista.',
    color: 'blue',
    path: '/portal/doctor',
    demoSteps: [
      { step: 1, text: 'Revisa la "Trayectoria de Salud" para ver el contexto completo.' },
      { step: 2, text: 'Analiza la segunda opinión del "Copiloto AI".' },
      { step: 3, text: 'Haz clic en "Iniciar Consulta Inteligente" para actuar.' }
    ],
    nextStepContext: 'Has aterrizado en el Cockpit Clínico. Aquí la interoperabilidad deja de ser técnica y se convierte en velocidad de atención.'
  },
  lab: {
    id: 'lab',
    role: 'Lab Tech (Industria)',
    title: 'Centro de Excelencia Certificada',
    pitch: 'Convierte el cumplimiento regulatorio (MDR) en tu mayor ventaja competitiva. Trazabilidad automática y calidad garantizada en cada pieza.',
    color: 'purple',
    path: '/portal/lab',
    demoSteps: [
      { step: 1, text: 'Observa el flujo de "Certificación Digital" en el tablero.' },
      { step: 2, text: 'Verifica la auditoría automática del horno en tiempo real.' },
      { step: 3, text: 'Entra en "Gestionar Producción" para certificar envíos.' }
    ],
    nextStepContext: 'Bienvenido al Hub de Pedidos. Cada ítem que ves aquí lleva incrustado su Pasaporte Digital de Producto (DPP) inmutable.'
  },
  patient: {
    id: 'patient',
    role: 'Ana Patient (Wallet)',
    title: 'Tu Pasaporte de Salud Global',
    pitch: 'Tus datos son tu activo. Llévalos contigo, evita radiografías repetidas y decide exactamente quién puede acceder a tu historial.',
    color: 'emerald',
    path: '/portal/patient',
    demoSteps: [
      { step: 1, text: 'Gestiona tus "Conexiones de Confianza" con un clic.' },
      { step: 2, text: 'Interactúa con tu "Gemelo Digital" en 3D.' },
      { step: 3, text: 'Abre tu "Billetera de Salud" para ver tus credenciales.' }
    ],
    nextStepContext: 'Esta es tu Wallet Personal Soberana. Aquí residen tus llaves privadas; nadie, ni siquiera la plataforma, puede entrar sin tu permiso.'
  },
  research: {
    id: 'research',
    role: 'Prof. Data (Investigación)',
    title: 'Red de Inteligencia Colectiva',
    pitch: 'Acelera descubrimientos científicos accediendo a datos globales de miles de clínicas sin comprometer la privacidad del paciente.',
    color: 'orange',
    path: '/portal/research',
    demoSteps: [
      { step: 1, text: 'Analiza el impacto en salud pública en el mapa global.' },
      { step: 2, text: 'Revisa el progreso del entrenamiento federado seguro.' },
      { step: 3, text: 'Lanza un "Estudio Colaborativo" en la red.' }
    ],
    nextStepContext: 'Panel de Control de Investigación. Desde aquí orquestas algoritmos que viajan a los datos, en lugar de mover los datos hacia ti.'
  }
};

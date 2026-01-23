// src/data/perspectives.ts

export const perspectivesData = {
  doctor: {
    id: 'doctor',
    role: 'Dr. Vet (Veterinario)',
    title: 'Cockpit Veterinario Unificado',
    pitch: 'Transforma datos dispersos en decisiones clínicas. Historial multi-especie, alertas de peso para dosificación y diagnóstico por imagen IA en una sola vista.',
    color: 'emerald',
    path: '/portal/doctor',
    demoSteps: [
      { step: 1, text: 'Revisa la "Trayectoria de Salud" con historial de peso y vacunas.' },
      { step: 2, text: 'Analiza radiografías con el "Copiloto IA Veterinario".' },
      { step: 3, text: 'Haz clic en "Iniciar Consulta" para actuar.' }
    ],
    nextStepContext: 'Has aterrizado en el Cockpit Veterinario. Aquí la interoperabilidad se convierte en velocidad de atención para cada paciente animal.'
  },
  lab: {
    id: 'lab',
    role: 'Lab Tech (Análisis Clínicos)',
    title: 'Laboratorio de Excelencia Veterinaria',
    pitch: 'Convierte el cumplimiento regulatorio en tu mayor ventaja competitiva. Trazabilidad automática de muestras y resultados certificados en tiempo real.',
    color: 'purple',
    path: '/portal/lab',
    demoSteps: [
      { step: 1, text: 'Observa el flujo de "Muestras Pendientes" en el tablero.' },
      { step: 2, text: 'Verifica la calibración del analizador hematológico.' },
      { step: 3, text: 'Entra en "Gestionar Resultados" para validar análisis.' }
    ],
    nextStepContext: 'Bienvenido al Hub de Laboratorio. Cada muestra lleva su trazabilidad completa desde la extracción hasta el resultado.'
  },
  patient: {
    id: 'patient',
    role: 'María García (Tutora)',
    title: 'Wallet de Salud de tus Mascotas',
    pitch: 'Los datos de tus mascotas son tu activo. Llévalos contigo, evita análisis repetidos y decide quién puede acceder al historial veterinario.',
    color: 'amber',
    path: '/portal/patient',
    demoSteps: [
      { step: 1, text: 'Gestiona tus "Conexiones de Confianza" con un clic.' },
      { step: 2, text: 'Revisa el calendario de vacunación de cada mascota.' },
      { step: 3, text: 'Abre tu "Wallet de Salud" para ver credenciales y pasaportes.' }
    ],
    nextStepContext: 'Esta es tu Wallet Personal de Tutora. Aquí residen las llaves privadas de los datos de tus mascotas; nadie puede acceder sin tu permiso.'
  },
  research: {
    id: 'research',
    role: 'Prof. One Health (Investigación)',
    title: 'Red de Inteligencia One Health',
    pitch: 'Acelera descubrimientos científicos accediendo a datos globales de clínicas veterinarias sin comprometer la privacidad. Zoonosis, epidemiología y bienestar animal.',
    color: 'orange',
    path: '/portal/research',
    demoSteps: [
      { step: 1, text: 'Analiza el impacto de zoonosis en el mapa epidemiológico.' },
      { step: 2, text: 'Revisa el progreso del entrenamiento federado en detección de tumores.' },
      { step: 3, text: 'Lanza un "Estudio Colaborativo One Health" en la red.' }
    ],
    nextStepContext: 'Panel de Investigación One Health. Desde aquí orquestas algoritmos que viajan a los datos veterinarios, sin mover información sensible.'
  }
};

import { Question } from '../types';

export const DEFAULT_CONSULTANT = 'Consultor Estratégico — CREA Y MONETIZA™';
export const CORE_TOTAL = 30;
export const STORAGE_KEY = 'viral_content_diagnostico_pilar3';

export const coreQuestions: Question[] = [
  // ==========================================
  // BLOQUE 1: Presencia y Auditoría (RS-001 a RS-006)
  // ==========================================
  {
    id: 'RS-001',
    section: 'Presencia y Auditoría',
    type: 'multi',
    isEssential: true,
    text: '¿En qué redes sociales tienes presencia activa actualmente?',
    help: 'Mapa completo de canales para evaluar eficiencia vs. dispersión operativa.',
    example: 'Ej: Instagram, LinkedIn, YouTube, TikTok.',
    options: [
      'Instagram (feed, stories, reels)',
      'LinkedIn (artículos, carruseles, publicaciones profesionales B2B)',
      'YouTube (videos largos, shorts y directos)',
      'TikTok (videos cortos verticales)',
      'Facebook (página de empresa, grupos o perfil profesional)',
      'X / Twitter (hilos reflexivos y publicaciones cortas)',
      'Threads (conversaciones y reflexiones rápidas)',
      'Podcast en Spotify / Apple Podcasts',
      'Solo cuento con sitio web / blog (sin redes sociales activas aún)'
    ],
    alignment: {
      phase: 'Fase 1 · Business Context',
      phaseNumber: 1,
      exercises: ['1.8 Canales activos', '2.1 Inventario por canal'],
      deliverable: 'Documento Estratégico del Negocio + Mapa de Presencia Digital',
      transformationPurpose: 'Identifica la dispersión de esfuerzos para concentrar el 80% de los recursos en el canal de mayor retorno antes de abrir nuevos frentes.'
    }
  },
  {
    id: 'RS-002',
    section: 'Presencia y Auditoría',
    type: 'single',
    isEssential: true,
    text: '¿Cuántos seguidores tienes en tu red principal y cómo ha evolucionado?',
    help: 'Tamaño y tendencia de crecimiento por canal para diagnosticar velocidad orgánica.',
    example: 'Ej: IG: 12K (+3K/año), LI: 5K (+1.5K/año).',
    options: [
      'Menos de 1,000 seguidores en total (fase semilla o relanzamiento)',
      'Entre 1,000 y 5,000 seguidores con crecimiento lento o estancado',
      'Entre 5,000 y 20,000 seguidores con crecimiento orgánico constante',
      'Entre 20,000 y 50,000 seguidores con audiencia activa',
      'Más de 50,000 seguidores consolidados en el canal principal',
      'Audiencia cuantitativamente grande pero estancada o con seguidores inactivos'
    ],
    alignment: {
      phase: 'Fase 2 · Auditoría de Contenido',
      phaseNumber: 2,
      exercises: ['2.1 Inventario por canal', '3.9 Metas por trimestre'],
      deliverable: 'Auditoría con diagnóstico + plan de oportunidades',
      transformationPurpose: 'Distingue entre tracción orgánica real y estancamiento para calibrar el volumen de ganchos de alcance necesarios en el ciclo de 8 semanas.'
    }
  },
  {
    id: 'RS-003',
    section: 'Presencia y Auditoría',
    type: 'single',
    isEssential: true,
    text: '¿Tu perfil / bio en cada red refleja con precisión tu propuesta de marca?',
    help: 'Coherencia de mensaje y primera impresión digital ante visitantes desconocidos.',
    example: 'Ej: "Consultora de marketing | Ayudo a emprendedores a crecer en digital".',
    options: [
      'Totalmente optimizada: comunica a quién ayudo, qué problema resuelvo, mi método y tiene un enlace/CTA claro',
      'A medias: describe bien lo que hago pero no tiene un llamado a la acción persuasivo ni captura prospectos',
      'Desactualizada: refleja ofertas, servicios o una etapa pasada de mi negocio',
      'Genérica o inspiracional: frases motivacionales o títulos académicos sin propuesta de valor comercial clara',
      'Dispar e inconsistente: cada red social dice algo distinto y no existe una identidad unificada'
    ],
    alignment: {
      phase: 'Fase 4 · Brand Voice',
      phaseNumber: 4,
      exercises: ['4.1 Ingeniería inversa del Brand Voice', '2.3 Coherencia de mensaje'],
      deliverable: 'brand-voice.md + Asistente copywriter configurado',
      transformationPurpose: 'Convierte el perfil de una tarjeta de presentación estática en una landing page de conversión con gancho, prueba y llamado a la acción inequívoco.'
    }
  },
  {
    id: 'RS-004',
    section: 'Presencia y Auditoría',
    type: 'single',
    isEssential: true,
    text: '¿Cuál es tu red social más fuerte y por qué?',
    help: 'Canal prioritario donde concentrar el 70-80% de recursos para máximo impacto.',
    example: 'Ej: Instagram, porque genera más engagement y leads de forma consistente.',
    options: [
      'Instagram: genera la mayor cercanía, interacción diaria en Stories y mensajes directos (DMs)',
      'LinkedIn: atrae directivos, tomadores de decisión corporativos y clientes de alto ticket (B2B)',
      'YouTube: construye mayor autoridad profunda, retención y confianza duradera a largo plazo',
      'TikTok: genera el mayor volumen de reproducciones y descubrimiento orgánico rápido de nuevos usuarios',
      'Ninguna es fuerte aún: los resultados son mínimos, erráticos o inexistentes en todas las plataformas'
    ],
    alignment: {
      phase: 'Fase 3 · Estrategia de Viralidad',
      phaseNumber: 3,
      exercises: ['3.8 Prioridad de plataformas (% de esfuerzo)', '3.0 Selector de Modalidad'],
      deliverable: 'Estrategia (Viralidad Perpetua + por Campañas)',
      transformationPurpose: 'Elimina el desgaste de intentar ser viral en todas partes, asignando la distribución 70/20/10 en el canal donde ya existe validación.'
    }
  },
  {
    id: 'RS-005',
    section: 'Presencia y Auditoría',
    type: 'single',
    isEssential: true,
    text: '¿En qué red social obtienes los peores resultados o mayor desgaste?',
    help: 'Canal a evaluar críticamente para decidir si conviene reformar o pausar.',
    example: 'Ej: TikTok, publico sin estrategia y no convierto seguidores.',
    options: [
      'TikTok: publico sin rumbo y solo genera reproducciones vacías sin negocio',
      'Twitter / X: alcance insignificante e interacción prácticamente nula',
      'Facebook: alcance orgánico nulo a menos que pague publicidad',
      'Instagram: demasiado esfuerzo gráfico y de edición para un alcance estancado',
      'LinkedIn: no logro conectar con la comunidad ni descifrar el algoritmo profesional',
      'YouTube: requiere horas excesivas de producción y no logro retención ni suscriptores',
      'No tengo canales con desgaste porque me he enfocado estrictamente en un solo frente'
    ],
    alignment: {
      phase: 'Fase 2 · Auditoría de Contenido',
      phaseNumber: 2,
      exercises: ['2.8 Matriz esfuerzo × impacto', '2.2 Contenido flop'],
      deliverable: 'Matriz de Esfuerzo vs Retorno por Plataforma',
      transformationPurpose: 'Detiene el drenaje de tiempo en plataformas secundarias improductivas y reasigna horas a los activos que realmente monetizan.'
    }
  },
  {
    id: 'RS-006',
    section: 'Presencia y Auditoría',
    type: 'single',
    isEssential: true,
    text: '¿Tu audiencia en redes coincide con tu cliente ideal con capacidad de pago?',
    help: 'Alineación entre quién te sigue y consume contenido vs quién efectivamente compra.',
    example: 'Ej: En LinkedIn sí. En Instagram tengo muchos curiosos que no compran.',
    options: [
      'Sí, la gran mayoría de mis seguidores encaja con el perfil con presupuesto que puede pagarme',
      'Parcialmente: tengo seguidores interesados en la temática pero muy pocos con poder adquisitivo real',
      'No, tengo muchos curiosos, estudiantes o colegas que buscan tips gratuitos pero no contratan servicios',
      'Desconexión total: la audiencia que me sigue busca entretenimiento o cosas distintas a mi oferta de pago',
      'Desconozco el perfil económico de mi audiencia porque no he realizado auditoría de seguidores'
    ],
    alignment: {
      phase: 'Fase 1 · Business Context',
      phaseNumber: 1,
      exercises: ['1.3 Cliente ideal', '1.4 Segmentos', '7.2 Perfiles del cliente ideal'],
      deliverable: 'Documento Estratégico del Negocio + Perfiles Espejo',
      transformationPurpose: 'Sustituye el contenido generalista cazador de likes por mensajes espejo diseñados exclusivamente para compradores calificados.',
      isControlQuestion: true
    }
  },

  // ==========================================
  // BLOQUE 2: Estrategia de Contenido (RS-007 a RS-015)
  // ==========================================
  {
    id: 'RS-007',
    section: 'Estrategia de Contenido',
    type: 'multi',
    isEssential: true,
    text: '¿Qué tipo de contenido y formatos publicas habitualmente?',
    help: 'Inventario de formatos para evaluar balance entre atracción, nutrición y venta.',
    example: 'Ej: Reels educativos, carruseles de tips, stories de día a día, posts motivacionales.',
    options: [
      'Videos cortos / Reels / TikToks educativos y de opinión',
      'Carruseles estructurados de paso a paso o análisis profundos',
      'Historias (Stories) mostrando trastienda, día a día y encuestas de interacción',
      'Publicaciones de texto / reflexiones profesionales (estilo LinkedIn)',
      'Videos largos en YouTube o transmisiones en directo (Live / Webinar)',
      'Casos de estudio, testimonios y transformaciones comprobables de clientes',
      'Memes, humor de nicho o contenido puramente aspiracional de estilo de vida',
      'Publicaciones de venta directa y promociones de ofertas o programas'
    ],
    alignment: {
      phase: 'Fase 3 · Estrategia de Viralidad',
      phaseNumber: 3,
      exercises: ['3.3 Perpetua — formatos evergreen', '3.13 Formatos viral y rentable'],
      deliverable: 'Estrategia de Formatos Balanceados (Viralidad + Rentabilidad)',
      transformationPurpose: 'Garantiza la mezcla matemática entre piezas de descubrimiento viral (alcance) y piezas de venta y autoridad que facturan.'
    }
  },
  {
    id: 'RS-008',
    section: 'Estrategia de Contenido',
    type: 'single',
    isEssential: true,
    text: '¿Con qué frecuencia publicas contenido en tu red principal?',
    help: 'Consistencia de publicación que impacta alcance algorítmico y recordación de marca.',
    example: 'Ej: IG: 4x/semana. LI: 2x/semana. YT: 2x/mes.',
    options: [
      'Diariamente o de 5 a 7 veces por semana de forma disciplinada',
      'De 3 a 4 veces por semana con regularidad sostenida',
      'De 1 a 2 veces por semana',
      'Esporádicamente: semanas con publicaciones diarias seguidas de semanas o meses de silencio total',
      'Menos de 2 veces al mes (presencia prácticamente inactiva)'
    ],
    alignment: {
      phase: 'Fase 3 · Estrategia de Viralidad',
      phaseNumber: 3,
      exercises: ['3.3 Perpetua — formatos evergreen y su frecuencia', '7.5 Calendario editorial de ventas'],
      deliverable: 'Sistema de Cadencia Sostenible de Contenidos',
      transformationPurpose: 'Establece un ritmo predecible y realista que no requiera heroísmo diario, protegiendo al cliente del agotamiento creativo.'
    }
  },
  {
    id: 'RS-009',
    section: 'Estrategia de Contenido',
    type: 'single',
    isEssential: true,
    text: '¿Cuentas con un calendario editorial planificado o publicas improvisando?',
    help: 'Nivel de planificación estructural que determina consistencia, calidad y paz mental.',
    example: 'Ej: Improviso bastante, tengo ideas pero no calendario fijo.',
    options: [
      'Tengo un calendario editorial mensual planificado con anticipación y fechas cerradas',
      'Planifico con 1 semana de anticipación en Notion, Trello, Asana o Excel',
      'Tengo un banco desordenado de ideas pero decido qué publicar el mismo día según el ánimo o tiempo',
      '100% improvisado: no tengo calendario, publico lo que surge en el momento o cuando me acuerdo'
    ],
    alignment: {
      phase: 'Fase 7 · Viral Content',
      phaseNumber: 7,
      exercises: ['7.5 Calendario editorial de ventas', '7.6 Plan de contenidos - 4 semanas'],
      deliverable: 'Ciclo de 8 semanas con 30 piezas producidas y calendario visualizado',
      transformationPurpose: 'Sustituye la angustia de "¿qué publico hoy?" por un calendario automatizado de 8 semanas ensamblado desde el primer día.',
      isControlQuestion: true
    }
  },
  {
    id: 'RS-010',
    section: 'Estrategia de Contenido',
    type: 'single',
    isEssential: true,
    text: '¿Cuáles son tus 3 a 5 pilares temáticos de contenido?',
    help: 'Territorios recurrentes que construyen posicionamiento claro en la mente de la audiencia.',
    example: 'Ej: No los tengo definidos formalmente.',
    options: [
      'Tengo 3 a 5 pilares definidos formalmente con objetivos asignados (atracción, autoridad y venta)',
      'Tengo claros los temas de los que hablo, pero no están documentados ni estructurados en pilares',
      'Hablo de demasiados temas dispersos y cambio constantemente según lo que veo en tendencias',
      'No tengo pilares de contenido definidos formalmente'
    ],
    alignment: {
      phase: 'Fase 3 · Estrategia de Viralidad',
      phaseNumber: 3,
      exercises: ['3.1 Tema paraguas y 3-5 pilares de contenido', '3.2 Objetivo dominante por pilar'],
      deliverable: 'Matriz de Pilares Temáticos con Objetivos Dominantes',
      transformationPurpose: 'Evita la dispersión temática y fija a la marca en la mente del consumidor como el referente indiscutible de un territorio específico.',
      isControlQuestion: true
    }
  },
  {
    id: 'RS-011',
    section: 'Estrategia de Contenido',
    type: 'single',
    isEssential: true,
    text: '¿Qué tipo de contenido te ha funcionado mejor históricamente?',
    help: 'Datos históricos para replicar, multiplicar y escalar los ángulos ganadores.',
    example: 'Ej: Reels de "errores comunes" tienen 3x más alcance.',
    options: [
      'Videos cortos de errores comunes, mitos desmentidos o ganchos polémicos contracorriente',
      'Carruseles técnicos y educativos de alto valor guardable con esquemas paso a paso',
      'Publicaciones de vulnerabilidad, historias personales de superación y lecciones de fracasos',
      'Casos de éxito y capturas de pantalla de transformaciones reales de clientes',
      'Tutoriales prácticos con plantillas y recursos gratuitos descargables',
      'No lo tengo identificado con certeza porque nunca he hecho un análisis histórico de analíticas'
    ],
    alignment: {
      phase: 'Fase 2 · Auditoría de Contenido',
      phaseNumber: 2,
      exercises: ['2.2 Contenido top y flop', '2.5 Temas: posiciona vs rellena'],
      deliverable: 'Auditoría con diagnóstico + plan de oportunidades',
      transformationPurpose: 'Aísla los moldes ganadores históricos del cliente para convertirlos en estructuras reutilizables en la Fase 3.'
    }
  },
  {
    id: 'RS-012',
    section: 'Estrategia de Contenido',
    type: 'single',
    isEssential: true,
    text: '¿Qué tipo de contenido genera prospectos calificados o ventas reales?',
    help: 'Conexión directa entre esfuerzo de publicación y facturación del negocio.',
    example: 'Ej: Webinars y carruseles con CTA claro al lead magnet.',
    options: [
      'Piezas con llamado a la acción (CTA) directo a mensaje privado (DM) o lead magnet específico',
      'Historias (Stories) cotidianas mostrando casos de clientes con enlace directo a agendar llamada',
      'Casos de estudio y testimonios detallados de antes y después',
      'Sesiones en vivo, masterclasses o talleres online promocionados en el perfil',
      'Ninguno de forma predecible: las publicaciones me dan likes y vistas pero casi ninguna venta',
      'Desconozco completamente qué publicaciones generan los clientes que llegan'
    ],
    alignment: {
      phase: 'Fase 3 · Estrategia de Viralidad',
      phaseNumber: 3,
      exercises: ['3.13 Formatos viral y rentable', '7.4 Mensajes espejo por perfil'],
      deliverable: 'Embudo de Contenido Orientado a Conversión',
      transformationPurpose: 'Conecta cada pieza de contenido con un puente comercial activo para que el alcance se traduzca en dinero en el banco.',
      isControlQuestion: true
    }
  },
  {
    id: 'RS-013',
    section: 'Estrategia de Contenido',
    type: 'single',
    isEssential: true,
    text: '¿Cuánto tiempo inviertes semanalmente en planificar, crear y publicar contenido?',
    help: 'Eficiencia y costo operativo del proceso de producción actual.',
    example: 'Ej: 8-10 horas/semana entre ideación, grabación y edición.',
    options: [
      'Menos de 3 horas semanales (tiempo mínimo, reactivo o desatendido)',
      'Entre 3 y 6 horas semanales (proceso enfocado y relativamente ágil)',
      'Entre 7 y 12 horas semanales (consume gran parte de mi semana productiva y me satura)',
      'Más de 15 horas semanales (dedicación excesiva que frena la atención a clientes)',
      'Tiempo totalmente variable e impredecible por falta de un método estandarizado'
    ],
    alignment: {
      phase: 'Fase 7 · Viral Content',
      phaseNumber: 7,
      exercises: ['7.3 Banco de 30 piezas', '3.5 Perpetua — motor de distribución y reciclaje'],
      deliverable: 'Motor de Producción de 30 Piezas con IA',
      transformationPurpose: 'Reduce el tiempo de creación semanal a menos de 2-3 horas mediante guiones con teleprompter y plantillas visuales prediseñadas.',
      isControlQuestion: true
    }
  },
  {
    id: 'RS-014',
    section: 'Estrategia de Contenido',
    type: 'single',
    isEssential: true,
    text: '¿Tienes un proceso de reciclaje y multiplicación (repurposing) de contenidos?',
    help: 'Eficiencia de producción para maximizar resultados con menor esfuerzo creativo.',
    example: 'Ej: No, creo todo desde cero cada vez.',
    options: [
      'Sí, de 1 contenido pilar largo (video/newsletter/podcast) derivo sistemáticamente 5+ micropiezas',
      'Reutilizo ocasionalmente (ej: paso un reel a TikTok o un carrusel a post de LinkedIn)',
      'No, creo cada pieza desde cero cada vez (lo cual me agota y consume demasiado tiempo)',
      'No reutilizo porque temo que a mi audiencia le aburra ver el mismo tema adaptado'
    ],
    alignment: {
      phase: 'Fase 3 · Estrategia de Viralidad',
      phaseNumber: 3,
      exercises: ['3.4 Perpetua — 5 moldes reutilizables', '3.5 Perpetua — motor de distribución y reciclaje'],
      deliverable: 'Motor de Distribución y Reciclaje Automatizado',
      transformationPurpose: 'Multiplica por 5 el volumen de impacto sin escribir una sola idea extra desde cero cada semana.',
      isControlQuestion: true
    }
  },
  {
    id: 'RS-015',
    section: 'Estrategia de Contenido',
    type: 'single',
    isEssential: false,
    text: '¿Utilizas Inteligencia Artificial para crear tus contenidos? ¿Cómo la aplicas?',
    help: 'Nivel de adopción tecnológica para escalar ideación, redacción y producción.',
    example: 'Ej: ChatGPT para ideas pero el resultado siempre suena genérico.',
    options: [
      'Uso IA avanzada: prompts entrenados con mi tono de voz (Brand Voice) y flujos sistematizados',
      'Uso IA básica: ChatGPT o Claude solo para lluvia de ideas o ganchos sueltos',
      'Intenté usar IA pero los textos suenan robóticos, impersonales y genéricos',
      'No utilizo herramientas de Inteligencia Artificial para mis contenidos'
    ],
    alignment: {
      phase: 'Fase 4 · Brand Voice',
      phaseNumber: 4,
      exercises: ['4.1 Ingeniería inversa del Brand Voice', '6.1 Cerebro del cliente (Brand Knowledge Base)'],
      deliverable: 'brand-voice.md + Asistente copywriter configurado',
      transformationPurpose: 'Entrena un asistente con la voz real del cliente para generar borradores que suenen 100% auténticos y nunca sintéticos.'
    }
  },

  // ==========================================
  // BLOQUE 3: Engagement y Comunidad (RS-016 a RS-021)
  // ==========================================
  {
    id: 'RS-016',
    section: 'Engagement y Comunidad',
    type: 'single',
    isEssential: true,
    text: '¿Cuál es tu tasa de interacción o engagement promedio en tu canal principal?',
    help: 'Salud real de la relación con la comunidad más allá del conteo de seguidores.',
    example: 'Ej: Instagram: 4.5%, LinkedIn: 6%, YouTube: no sé calcularlo.',
    options: [
      'Alta (más del 5-8% de interacción sobre seguidores con conversaciones y debates profundos)',
      'Moderada (entre 2% y 4% de interacción habitual con likes y comentarios regulares)',
      'Baja (menos del 1%: muchos seguidores pero pocos likes y casi ningún comentario genuino)',
      'Desconozco cómo calcular mi tasa de engagement y no la mido formalmente'
    ],
    alignment: {
      phase: 'Fase 2 · Auditoría de Contenido',
      phaseNumber: 2,
      exercises: ['2.4 Percepción actual', '3.11 Auditor de viralidad IG - Sistema 3×3'],
      deliverable: 'Auditoría de Interacción y Percepción de Marca',
      transformationPurpose: 'Detecta si la cuenta sufre de seguidores zombis para activar ganchos de retención y preguntas polarizantes que reactiven el algoritmo.'
    }
  },
  {
    id: 'RS-017',
    section: 'Engagement y Comunidad',
    type: 'single',
    isEssential: true,
    text: '¿Respondes comentarios y mensajes directos (DMs)? ¿En cuánto tiempo?',
    help: 'Velocidad de respuesta y compromiso con el social selling y la atención al prospecto.',
    example: 'Ej: Intento en 24h pero a veces se me acumulan.',
    options: [
      'Sí, respondo el 100% de comentarios y DMs en menos de 2 a 4 horas (social selling activo)',
      'Respondo casi todo dentro de las 24 horas del mismo día de forma ordenada',
      'Respondo con lentitud (a los 2-3 días) y frecuentemente se me acumulan o pierdo prospectos',
      'Casi nunca respondo comentarios ni reviso la bandeja de solicitudes de mensajes'
    ],
    alignment: {
      phase: 'Fase 7 · Viral Content',
      phaseNumber: 7,
      exercises: ['7.5 Calendario editorial de ventas', '7.4 Mensajes espejo por perfil'],
      deliverable: 'Protocolo de Social Selling y Conversión por DMs',
      transformationPurpose: 'Aprovecha la ventana de mayor temperatura del prospecto para cerrar llamadas de diagnóstico sin demoras operativas.'
    }
  },
  {
    id: 'RS-018',
    section: 'Engagement y Comunidad',
    type: 'multi',
    isEssential: false,
    text: '¿Qué tipo de interacciones y comentarios recibes con mayor frecuencia?',
    help: 'Calidad del diálogo que revela la percepción de autoridad de la marca.',
    example: 'Ej: Mayormente preguntas y halagos. Pocas quejas.',
    options: [
      'Preguntas técnicas profundas sobre mi metodología o área de especialidad',
      'Preguntas directas sobre precios, servicios o cómo agendar una sesión',
      'Agradecimientos y felicitaciones por el alto valor del contenido gratuito',
      'Curiosos pidiendo soluciones mágicas o asesoría gratuita en los comentarios',
      'Debates o cuestionamientos constructivos de colegas y expertos del sector',
      'Prácticamente nada: mis publicaciones reciben escasa o nula interacción'
    ],
    alignment: {
      phase: 'Fase 2 · Auditoría de Contenido',
      phaseNumber: 2,
      exercises: ['2.4 Percepción actual', '2.7 Vacíos de mercado'],
      deliverable: 'Informe de Percepción y Territorios de Preguntas Frecuentes',
      transformationPurpose: 'Extrae las preguntas reales del público para transformarlas en los 30 guiones del ciclo de contenido con IA.'
    }
  },
  {
    id: 'RS-019',
    section: 'Engagement y Comunidad',
    type: 'single',
    isEssential: true,
    text: '¿Cuentas con una comunidad propia fuera de las redes públicas (canal, grupo, lista)?',
    help: 'Activo de retención propio independiente de los cambios de algoritmo.',
    example: 'Ej: Grupo de WhatsApp para alumnos pero con poca actividad.',
    options: [
      'Sí, tengo una comunidad privada activa y cuidada (Telegram, WhatsApp VIP, Skool, Circle)',
      'Tengo una lista de correo (Newsletter) con lectores fieles y aperturas consistentes',
      'Tengo un grupo creado para alumnos/clientes pero con muy baja participación o desatendido',
      'No tengo ninguna comunidad ni lista propia; dependo 100% del feed público de las redes'
    ],
    alignment: {
      phase: 'Fase 3 · Estrategia de Viralidad',
      phaseNumber: 3,
      exercises: ['3.5 Perpetua — motor de distribución y reciclaje', '1.8 Canales activos'],
      deliverable: 'Estrategia de Migración de Audiencia Prestada a Terreno Propio',
      transformationPurpose: 'Protege el negocio de bloqueos o caídas de alcance migrando a los seguidores a canales bajo control total de la empresa.'
    }
  },
  {
    id: 'RS-020',
    section: 'Engagement y Comunidad',
    type: 'single',
    isEssential: true,
    text: '¿Cuál es tu mecanismo para convertir seguidores de redes en prospectos (leads)?',
    help: 'Puente crítico entre la atención en redes sociales y el embudo comercial de ventas.',
    example: 'Ej: Link en bio a lead magnet + CTA en stories.',
    options: [
      'Sistema automatizado: imán de prospectos (Lead Magnet) con automatización (ManyChat/email) y seguimiento',
      'Llamadas a la acción (CTA) periódicas invitando a enviar palabra clave por DM o agendar llamada',
      'Enlace estático en la biografía (Linktree / web) esperando pasivamente a que hagan clic',
      'No tengo un método para convertir seguidores en prospectos (publico sin embudo de conversión)'
    ],
    alignment: {
      phase: 'Fase 7 · Viral Content',
      phaseNumber: 7,
      exercises: ['7.5 Calendario editorial de ventas', '7.4 Mensajes espejo por perfil'],
      deliverable: 'Sistema de Conversión de Seguidores a Leads Cualificados',
      transformationPurpose: 'Instala un embudo de captación con ganchos automatizados que transforme la atención efímera en contactos con nombre, email y teléfono.',
      isControlQuestion: true
    }
  },
  {
    id: 'RS-021',
    section: 'Engagement y Comunidad',
    type: 'single',
    isEssential: false,
    text: '¿Recibes mensajes directos espontáneos de potenciales clientes interesados?',
    help: 'Indicador directo de demanda orgánica y eficacia del social selling.',
    example: 'Ej: Sí, 5-10 DMs/semana preguntando por servicios.',
    options: [
      'Sí, de forma constante (más de 5 a 10 DMs calificados por semana preguntando por servicios)',
      'Esporádicamente (1 a 3 mensajes al mes de personas interesadas en contratar)',
      'Rara vez o nunca recibo mensajes de personas interesadas en mis servicios',
      'Recibo mensajes pero casi todos son spam, ofertas de agencias o colaboraciones dudosas'
    ],
    alignment: {
      phase: 'Fase 1 · Business Context',
      phaseNumber: 1,
      exercises: ['1.2 Modelo de ingresos', '1.5 Propuesta de valor'],
      deliverable: 'Diagnóstico de Atracción de Demanda Orgánica',
      transformationPurpose: 'Calibra la fuerza del posicionamiento para provocar que los prospectos escriban por iniciativa propia sin necesidad de prospección en frío.'
    }
  },

  // ==========================================
  // BLOQUE 4: Métricas y Resultados (RS-022 a RS-026)
  // ==========================================
  {
    id: 'RS-022',
    section: 'Métricas y Resultados',
    type: 'single',
    isEssential: true,
    text: '¿Qué métricas de redes sociales revisas y con qué frecuencia?',
    help: 'Disciplina analítica para tomar decisiones informadas y no emocionales.',
    example: 'Ej: Likes y seguidores semanalmente. No miro mucho más.',
    options: [
      'Métricas de negocio semanales: prospectos capturados, clics al enlace, DMs comerciales y ventas atribuidas',
      'Métricas de contenido: guardados, compartidos, retención promedio de video y alcance semanal',
      'Métricas de vanidad: solo reviso likes y número de seguidores de forma ocasional',
      'Casi nunca reviso estadísticas analíticas (opero 100% a ciegas)'
    ],
    alignment: {
      phase: 'Fase 3 · Estrategia de Viralidad',
      phaseNumber: 3,
      exercises: ['3.12 Reporte ejecutivo IG (formato CFO)', '3.9 Metas por trimestre'],
      deliverable: 'Tablero Ejecutivo de Métricas en Formato CFO',
      transformationPurpose: 'Pasa de celebrar likes vacíos a medir el costo por prospecto y el retorno financiero generado por el contenido.',
      isControlQuestion: true
    }
  },
  {
    id: 'RS-023',
    section: 'Métricas y Resultados',
    type: 'single',
    isEssential: false,
    text: '¿Cuál es tu alcance o visualizaciones promedio por publicación en video?',
    help: 'Visibilidad real de tu contenido y efectividad de tus primeros 3 segundos de gancho.',
    example: 'Ej: Reels: 3-5K views. Posts: 500-800 impresiones.',
    options: [
      'Más de 10,000 visualizaciones / reproducciones por publicación en promedio',
      'Entre 2,000 y 10,000 visualizaciones / reproducciones por pieza',
      'Entre 500 y 2,000 visualizaciones / reproducciones',
      'Menos de 500 visualizaciones (alcance estancado)',
      'Desconozco mis métricas de alcance promedio'
    ],
    alignment: {
      phase: 'Fase 2 · Auditoría de Contenido',
      phaseNumber: 2,
      exercises: ['2.1 Inventario por canal', '3.10 Definición de "viral" para esta marca'],
      deliverable: 'Auditoría con diagnóstico + plan de oportunidades',
      transformationPurpose: 'Diagnostica la tasa de retención de los ganchos iniciales para estructurar los primeros 3 segundos según el Sistema 3x3.'
    }
  },
  {
    id: 'RS-024',
    section: 'Métricas y Resultados',
    type: 'single',
    isEssential: false,
    text: '¿Qué porcentaje estimado de tu propia base de seguidores ve tu contenido?',
    help: 'Ratio de entrega del algoritmo vs seguidores cautivos.',
    example: 'Ej: Creo que entre 15-20% de mis seguidores.',
    options: [
      'Alto (más del 20-30% de mis seguidores ven mis publicaciones e historias)',
      'Normal para el algoritmo actual (entre 5% y 15% de mis seguidores)',
      'Muy bajo (menos del 3%: el algoritmo no muestra mi contenido ni a mis seguidores)',
      'No sé cómo calcular el porcentaje de visibilidad sobre mi audiencia'
    ],
    alignment: {
      phase: 'Fase 2 · Auditoría de Contenido',
      phaseNumber: 2,
      exercises: ['2.4 Percepción actual', '3.11 Auditor de viralidad IG - Sistema 3×3'],
      deliverable: 'Diagnóstico de Distribución Algorítmica',
      transformationPurpose: 'Identifica penalizaciones algorítmicas o falta de engagement para reconfigurar el diseño de las publicaciones.'
    }
  },
  {
    id: 'RS-025',
    section: 'Métricas y Resultados',
    type: 'single',
    isEssential: true,
    text: '¿Puedes conectar directamente tu esfuerzo en redes sociales con facturación y ventas reales?',
    help: 'Atribución de ingresos comprobable para justificar la inversión en marketing digital.',
    example: 'Ej: Sé que vienen de ahí pero no tengo tracking preciso.',
    options: [
      'Sí, con trazabilidad exacta: sé cuántos clientes, contratos e ingresos provienen de cada canal y contenido',
      'Tengo noción general (sé que muchos clientes me conocieron por redes pero sin métricas exactas)',
      'No puedo conectarlo: las redes me traen visibilidad pero no se traducen en facturación tangible',
      'No genero ventas a través de redes sociales en absoluto'
    ],
    alignment: {
      phase: 'Fase 3 · Estrategia de Viralidad',
      phaseNumber: 3,
      exercises: ['3.12 Reporte ejecutivo IG (formato CFO)', '7.5 Calendario editorial de ventas'],
      deliverable: 'Modelo de Atribución Comercial de Contenido',
      transformationPurpose: 'Instala un sistema de tracking simple que demuestre exactamente cuántos dólares genera cada video o publicación producida.',
      isControlQuestion: true
    }
  },
  {
    id: 'RS-026',
    section: 'Métricas y Resultados',
    type: 'multi',
    isEssential: false,
    text: '¿Qué herramientas utilizas para gestionar, programar o diseñar tus redes?',
    help: 'Stack tecnológico disponible para evaluar grado de automatización y profesionalismo.',
    example: 'Ej: Meta Business Suite, nada más. Todo manual.',
    options: [
      'Meta Business Suite / Creator Studio para programar publicaciones',
      'Herramientas profesionales de analítica y programación (Metricool, Buffer, Later, Hootsuite)',
      'Herramientas de automatización de DMs y leads (ManyChat, Make, Zapier)',
      'Herramientas de diseño y edición (Canva Pro, CapCut, Premiere, Photoshop)',
      'Herramientas de IA generativa (ChatGPT, Claude, Midjourney, Gemini)',
      'No uso herramientas especiales (hago todo manual directamente en las aplicaciones móviles)'
    ],
    alignment: {
      phase: 'Fase 6 · Brand Knowledge Base',
      phaseNumber: 6,
      exercises: ['6.1 Cerebro del cliente (Brand Knowledge Base)', '5.12 Design tokens para la IA'],
      deliverable: 'Cerebro del cliente en repositorio de conocimiento + Stack de Herramientas',
      transformationPurpose: 'Moderniza el stack del cliente integrando automatizaciones que le ahorren horas de trabajo manual repetitivo.'
    }
  },

  // ==========================================
  // BLOQUE 5: Producción y Recursos (RS-027 a RS-030)
  // ==========================================
  {
    id: 'RS-027',
    section: 'Producción y Recursos',
    type: 'single',
    isEssential: true,
    text: '¿Quién crea tu contenido actualmente? ¿Tú solo o cuentas con apoyo de equipo?',
    help: 'Capacidad operativa real, cuello de botella personal y potencial de delegación.',
    example: 'Ej: Yo hago todo excepto diseño gráfico (freelancer).',
    options: [
      'Hago absolutamente todo yo solo (ideación, guiones, grabación, edición, diseño y publicación)',
      'Hago la ideación y grabación, pero delego la edición de video o diseño a un freelancer/asistente',
      'Cuento con un equipo interno o agencia dedicada a la producción y gestión de mis redes',
      'Tengo apoyo parcial pero la supervisión me consume más tiempo que hacerlo por mi cuenta'
    ],
    alignment: {
      phase: 'Fase 7 · Viral Content',
      phaseNumber: 7,
      exercises: ['7.3 Banco de 30 piezas', '5.14 Manual de Marca'],
      deliverable: 'Guías de Producción y Delegación con IA',
      transformationPurpose: 'Libera al consultor o dueño del negocio del rol de editor/diseñador, dejándolo únicamente como la cara que graba frente al teleprompter.',
      isControlQuestion: true
    }
  },
  {
    id: 'RS-028',
    section: 'Producción y Recursos',
    type: 'multi',
    isEssential: false,
    text: '¿Con qué equipo técnico cuentas para grabar y producir tus contenidos?',
    help: 'Calidad audiovisual disponible para determinar si hace falta ajuste técnico.',
    example: 'Ej: iPhone 14, ring light, micrófono de solapa, Canva Pro.',
    options: [
      'Smartphone de gama media-alta con buena cámara (iPhone reciente o Android de alta gama)',
      'Micrófono inalámbrico o de solapa de buena fidelidad (Rode, DJI, Hollyland)',
      'Iluminación dedicada (softbox, panel LED o aro de luz)',
      'Cámara profesional mirrorless o réflex con óptica luminosa',
      'Espacio / set de grabación acústicamente acondicionado y con fondo estético',
      'Solo mi teléfono básico sin micrófono externo ni iluminación dedicada'
    ],
    alignment: {
      phase: 'Fase 5 · Brand Design System',
      phaseNumber: 5,
      exercises: ['5.9 Estilo de fotografía / dirección de arte', '5.11 Anatomía estándar de una pieza'],
      deliverable: 'Design.md con lineamientos visuales y de producción',
      transformationPurpose: 'Garantiza una estética limpia y profesional sin obligar al cliente a comprar equipamiento cinematográfico costoso.'
    }
  },
  {
    id: 'RS-029',
    section: 'Producción y Recursos',
    type: 'multi',
    isEssential: true,
    text: '¿Cuál es tu mayor frustración o dolor actual con las redes sociales?',
    help: 'Punto crítico de dolor para priorizar soluciones de alto impacto emocional y de negocio.',
    example: 'Ej: Que me consume mucho tiempo y no siempre veo resultados claros.',
    options: [
      'Me consume demasiado tiempo y energía sin ver un retorno económico tangible',
      'El algoritmo cambia constantemente y el alcance orgánico se siente impredecible y frustrante',
      'No saber qué publicar cada semana (bloqueo creativo y falta de calendario)',
      'Síndrome del impostor o incomodidad al exponerme en video frente a cámara',
      'Los seguidores aumentan pero no se convierten en clientes de pago (tráfico estéril)',
      'Depender 100% de mí para cada pieza sin contar con un sistema que funcione solo'
    ],
    alignment: {
      phase: 'Fase 8 · Cierre y Offboarding',
      phaseNumber: 8,
      exercises: ['8.1 Plan de Offboarding y Checkpoints 30/60 días', '0.1 Agente IA Interviewer'],
      deliverable: 'Plan de Offboarding + Acompañamiento y Mitigación de Bloqueos',
      transformationPurpose: 'Aborda la causa raíz del dolor del cliente asegurando que la consultoría resuelva su mayor cuello de botella psicológico y operativo.',
      isControlQuestion: true
    }
  },
  {
    id: 'RS-030',
    section: 'Producción y Recursos',
    type: 'multi',
    isEssential: false,
    text: '¿Qué tipo de contenido u oportunidad te gustaría implementar pero no sabes cómo?',
    help: 'Aspiración latente para desbloquear la máxima ambición comercial del proyecto.',
    example: 'Ej: Lives largos estilo podcast y video producido para YouTube.',
    options: [
      'Reels y videos cortos virales con edición dinámica, efectos y ganchos magnéticos',
      'Videos largos de alta autoridad estilo YouTube o videopodcast con invitados',
      'Carruseles de diseño profesional que generen miles de guardados y compartidos',
      'Campañas estructuradas de lanzamiento con ganchos psicológicos de urgencia',
      'Automatización de mensajes directos que cualifiquen y cierren ventas mientras duermo',
      'Contenido impulsado por Inteligencia Artificial que mantenga intacta mi voz auténtica'
    ],
    alignment: {
      phase: 'Fase 7 · Viral Content',
      phaseNumber: 7,
      exercises: ['7.3 Banco de 30 piezas', '3.6 Campañas — anatomía de una campaña'],
      deliverable: 'Ciclo de 8 semanas con 30 piezas producidas a la medida de su aspiración',
      transformationPurpose: 'Cierra la brecha entre la ambición del cliente y su capacidad técnica entregándole los moldes y guiones ya listos para rodar.'
    }
  }
];

export const allQuestions: Question[] = coreQuestions;

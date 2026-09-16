import { ConsultingPhaseInfo } from '../types';

export const CONSULTING_PHASES: ConsultingPhaseInfo[] = [
  {
    number: 0,
    code: 'Fase 0',
    name: 'Kickoff & Briefing IA',
    subtitle: 'Agente IA Interviewer — Viral Content',
    description: 'Entrena un GPT/asistente que entrevista a tu cliente antes de la sesión estratégica y te entrega una radiografía completa de su negocio, contenido, voz y visual. Cuestionario de 8 bloques alineados con las 7 fases del servicio.',
    exerciseCount: 1,
    exercises: [
      {
        code: '0.1',
        name: 'Agente IA Interviewer',
        description: 'Briefing estratégico completo del cliente para levantar la radiografía inicial antes de la consultoría.'
      }
    ]
  },
  {
    number: 1,
    code: 'Fase 1',
    name: 'Business Context',
    subtitle: 'Entender el negocio a fondo',
    description: 'Comprendemos el negocio a fondo: qué vende, a quién se dirige, propuesta de valor, portafolio, cliente ideal, diferenciadores y objetivos del contenido.',
    exerciseCount: 9,
    exercises: [
      { code: '1.1', name: 'Portafolio', description: 'Mapeo de soluciones, productos y servicios que comercializa la empresa.' },
      { code: '1.2', name: 'Modelo de ingresos', description: 'Estructura de precios, ticket promedio y fuentes de facturación recurrentes.' },
      { code: '1.3', name: 'Cliente ideal', description: 'Perfil demográfico y psicográfico del comprador de mayor retorno y satisfacción.' },
      { code: '1.4', name: 'Segmentos', description: 'Subgrupos de audiencia con dolores, presupuestos y necesidades diferenciadas.' },
      { code: '1.5', name: 'Propuesta de valor', description: 'Promesa central que resuelve el problema crítico mejor que cualquier alternativa.' },
      { code: '1.6', name: 'Transformación', description: 'Punto A (dolor inicial) al Punto B (resultado deseado) que logra el cliente.' },
      { code: '1.7', name: 'Enemigo y punto de vista', description: 'Posicionamiento contracorriente y aquello contra lo que combate la marca.' },
      { code: '1.8', name: 'Canales activos', description: 'Inventario de canales digitales y nivel de actividad comercial actual.' },
      { code: '1.9', name: 'Activos existentes', description: 'Contenidos previos, casos de estudio, testimonios y materiales disponibles.' }
    ]
  },
  {
    number: 2,
    code: 'Fase 2',
    name: 'Auditoría de Contenido',
    subtitle: 'Medir el estado actual y hallar oportunidades',
    description: 'Evaluamos el estado actual de la presencia digital, contenido, métricas, posicionamiento, canales y competidores para identificar oportunidades de crecimiento.',
    exerciseCount: 12,
    exercises: [
      { code: '2.0', name: 'Briefing de auditoría', description: 'Recolección de enlaces, estadísticas históricas y accesos clave.' },
      { code: '2.IG', name: 'Extractor de Instagram', description: 'Mini-prompt para raspar y sintetizar patrones de engagement en IG.' },
      { code: '2.WEB', name: 'Extractor de sitio web', description: 'Mini-prompt para auditar coherencia de oferta y conversión en web.' },
      { code: '2.1', name: 'Inventario por canal', description: 'Mapeo de publicaciones por formato, alcance e interacción.' },
      { code: '2.2', name: 'Contenido top y flop', description: 'Análisis de piezas con mayor viralidad vs piezas sin tracción.' },
      { code: '2.3', name: 'Coherencia de mensaje', description: 'Evaluación de alineación entre lo que promete el perfil y lo publicado.' },
      { code: '2.4', name: 'Percepción actual', description: 'Sentimiento de comentarios, autoridad proyectada y dudas de la audiencia.' },
      { code: '2.5', name: 'Temas: posiciona vs rellena', description: 'Separación de contenido de autoridad vs posts de mero relleno.' },
      { code: '2.6', name: 'Benchmark de competidores', description: 'Análisis de referentes directos e indirectos en el nicho.' },
      { code: '2.7', name: 'Vacíos de mercado', description: 'Ángulos desatendidos y temas donde la competencia es débil.' },
      { code: '2.8', name: 'Matriz esfuerzo × impacto', description: 'Priorización de formatos y acciones con menor costo y máximo retorno.' },
      { code: '2.9', name: 'Hipótesis de crecimiento', description: 'Plan de experimentos de contenido con metas cuantificables.' }
    ]
  },
  {
    number: 3,
    code: 'Fase 3',
    name: 'Estrategia de Viralidad',
    subtitle: 'Diseñar el sistema de crecimiento (Perpetua vs Campañas)',
    description: 'Diseñamos el sistema de crecimiento adaptado al negocio, diferenciando entre Viralidad Perpetua (evergreen) y Viralidad por Campañas (lanzamientos e hitos).',
    exerciseCount: 14,
    exercises: [
      { code: '3.0', name: 'Selector de Modalidad + Ultra-Prompt Maestro', description: 'Calibración de la estrategia según modelo de ventas.' },
      { code: '3.1', name: 'Tema paraguas y 3-5 pilares de contenido', description: 'Territorios conceptuales que definen el nicho sin dispersión.' },
      { code: '3.2', name: 'Objetivo dominante por pilar', description: 'Asignación de rol: atracción, nutrición, autoridad o venta directa.' },
      { code: '3.3', name: 'Perpetua — formatos evergreen y frecuencia', description: 'Piezas perennes de alto valor y cadencia sostenible de salida.' },
      { code: '3.4', name: 'Perpetua — 5 moldes reutilizables', description: 'Estructuras de guion y copy listas para rellenar semanalmente.' },
      { code: '3.5', name: 'Perpetua — motor de distribución y reciclaje', description: 'Flujo de repurposing: de 1 pieza madre a 6 micropiezas multiformato.' },
      { code: '3.6', name: 'Campañas — anatomía de una campaña', description: 'Fases de expectativa, apertura, objeciones y cierre de ventas.' },
      { code: '3.7', name: 'Campañas — 3 ganchos para la próxima campaña', description: 'Ganchos probados de alta curiosidad para lanzamientos.' },
      { code: '3.8', name: 'Prioridad de plataformas (% de esfuerzo)', description: 'Concentración 70/20/10 de recursos en la red más rentable.' },
      { code: '3.9', name: 'Metas por trimestre', description: 'KPIs trimestrales de visibilidad, leads capturados y conversión.' },
      { code: '3.10', name: 'Definición de viral para esta marca', description: 'Cálculo de viralidad orientada a clientes vs alcance vacío.' },
      { code: '3.11', name: 'Auditor de viralidad IG - Sistema 3×3', description: 'Metodología 3 ganchos × 3 ángulos de retención × 3 CTAs.' },
      { code: '3.12', name: 'Reporte ejecutivo IG (formato CFO)', description: 'Tablero financiero que traduce impresiones a ingresos generados.' },
      { code: '3.13', name: 'Formatos viral y rentable', description: 'Asignación de formatos de alcance masivo vs formatos de cierre.' }
    ]
  },
  {
    number: 4,
    code: 'Fase 4',
    name: 'Brand Voice',
    subtitle: 'Reconstruir la voz real de la marca mediante ingeniería inversa',
    description: 'Un único procedimiento: recopilar evidencia real, ejecutar el mega-prompt del ZIP, validar el brand-voice.md y convertirlo en un asistente copywriter que suene como la marca.',
    exerciseCount: 1,
    exercises: [
      {
        code: '4.1',
        name: 'Ingeniería inversa del Brand Voice',
        description: 'Construcción del archivo brand-voice.md y asistente copywriter entrenado con transcripciones y estilo real del cliente.'
      }
    ]
  },
  {
    number: 5,
    code: 'Fase 5',
    name: 'Brand Design System',
    subtitle: 'Documentar la identidad visual para consistencia total',
    description: 'Documentamos la identidad visual para mantener consistencia en todos los contenidos generados.',
    exerciseCount: 16,
    exercises: [
      { code: '5.0', name: 'Activos de marca', description: 'Inventario de logos, tipografías, badges e iconos oficiales.' },
      { code: '5.1', name: 'Paleta de marca', description: 'Códigos HEX, RGB y proporciones cromáticas (60/30/10).' },
      { code: '5.2', name: 'Reglas de uso del color', description: 'Fondos, contrastes legibles y acentos de llamada a la acción.' },
      { code: '5.3', name: 'Tipografías', description: 'Familias tipográficas para titulares, subtítulos y cuerpo.' },
      { code: '5.4', name: 'Escala tipográfica', description: 'Jerarquía proporcional en píxeles/rem para legibilidad móvil.' },
      { code: '5.5', name: 'Versiones del logo y dónde se usa cada una', description: 'Isotipo, logotipo, imagotipo y variantes claras/oscuras.' },
      { code: '5.6', name: 'Área de respeto y usos prohibidos del logo', description: 'Márgenes de seguridad y restricciones de deformación.' },
      { code: '5.7', name: 'Rasgos visuales', description: 'Texturas, bordes, sombras, esquinas y estética distintiva.' },
      { code: '5.8', name: 'Elementos gráficos', description: 'Líneas guía, stickers de marca, flechas y separadores.' },
      { code: '5.9', name: 'Estilo de fotografía / dirección de arte', description: 'Tratamiento de imágenes, iluminación y filtros de autor.' },
      { code: '5.10', name: 'Formatos y medidas', description: 'Plantillas 9:16 (Reels/TikTok), 4:5 (feed) y 16:9 (YouTube).' },
      { code: '5.11', name: 'Anatomía estándar de una pieza', description: 'Zona segura de texto, titular, gancho visual y firma.' },
      { code: '5.12', name: 'Design tokens para la IA', description: 'Parámetros numéricos y estilos listos para prompts de Midjourney/Canva.' },
      { code: '5.13', name: 'Genera tu Design.md', description: 'Documento ejecutable que rige cualquier diseñador o IA gráfica.' },
      { code: '5.14', name: 'Manual de Marca', description: 'Guía visual completa para el equipo o contratistas externos.' },
      { code: '5.15', name: 'Ultra-Prompt - Construcción del Brand System', description: 'Prompt de automatización para estructurar el sistema visual.' }
    ]
  },
  {
    number: 6,
    code: 'Fase 6',
    name: 'Brand Knowledge Base',
    subtitle: 'Centralizar todo para que la IA trabaje con contexto correcto',
    description: 'Centralizamos toda la información relevante del negocio para que la IA siempre trabaje con el contexto correcto. Consolida las fases 1-5 en el "Cerebro del cliente".',
    exerciseCount: 1,
    exercises: [
      {
        code: '6.1',
        name: 'Cerebro del cliente (Brand Knowledge Base)',
        description: 'Repositorio maestro consolidado (Gemini Notebook / Notion / Markdown) que alimenta a los redactores de IA.'
      }
    ]
  },
  {
    number: 7,
    code: 'Fase 7',
    name: 'Viral Content',
    subtitle: 'Motor de producción con IA: del objetivo al calendario visible',
    description: 'Flujo secuencial de 6 pasos que ensambla todo lo anterior (Cerebro + Voz + Sistema Visual) y produce un ciclo de 8 semanas de contenido: objetivo → 3 perfiles → 3 mensajes espejo → banco de 30 piezas (teleprompter + copy + instructivo + prompt de IA visual) → calendario JSON → visualizador.',
    exerciseCount: 6,
    exercises: [
      { code: '7.1', name: 'Objetivo del ciclo', description: 'Foco comercial del bimestre (lanzamiento, autoridad o captación masiva).' },
      { code: '7.2', name: 'Perfiles del cliente ideal', description: 'Los 3 segmentos prioritarios con sus disparadores emocionales.' },
      { code: '7.3', name: 'Banco de 30 piezas', description: 'Guiones con teleprompter, copy persuasivo, instructivo y prompts visuales.' },
      { code: '7.4', name: 'Mensajes espejo por perfil', description: 'Piezas que reflejan exactamente las palabras y dolor del avatar.' },
      { code: '7.5', name: 'Calendario editorial de ventas', description: 'Programación balanceada entre alcance, confianza y conversión.' },
      { code: '7.6', name: 'Plan de contenidos - 4 semanas', description: 'Sprint de ejecución inmediata con piezas listas para publicar.' }
    ]
  },
  {
    number: 8,
    code: 'Fase 8',
    name: 'Cierre y Offboarding',
    subtitle: 'Entrega formal y acompañamiento post-servicio',
    description: 'Cierre profesional del proyecto: consolidas todos los entregables, defines el board del proyecto, los checkpoints de seguimiento y las reglas de disponibilidad post-servicio. El cliente queda con todo organizado y con un plan claro de continuidad.',
    exerciseCount: 1,
    exercises: [
      {
        code: '8.1',
        name: 'Plan de Offboarding y Checkpoints 30/60 días',
        description: 'Consolidación de tableros, entrega del banco de 30 piezas, calendario y sesiones de revisión de resultados.'
      }
    ]
  }
];

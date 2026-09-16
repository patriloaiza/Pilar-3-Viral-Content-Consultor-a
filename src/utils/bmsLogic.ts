import { Question, SessionState, AuditReport, StrategicSignal, TestSuiteResult, TestResult } from '../types';
import { coreQuestions, allQuestions, CORE_TOTAL, DEFAULT_CONSULTANT } from '../data/questions';
import { CONSULTING_PHASES } from '../data/phases';

export function clone<T>(val: T): T {
  return JSON.parse(JSON.stringify(val));
}

export function escapeHtml(str: string): string {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export function ensureArray(val: unknown): string[] {
  if (Array.isArray(val)) return val.map(String);
  if (typeof val === 'string' && val.trim().length > 0) return [val.trim()];
  return [];
}

export function findQuestionById(id: string): Question | undefined {
  return allQuestions.find((q) => q.id === id);
}

export function getActiveQuestions(
  _answers: Record<string, unknown> = {},
  _matrix: Record<string, Record<string, string>> = {}
): Question[] {
  return coreQuestions;
}

export function cleanInactiveConditionals(state: SessionState): SessionState {
  return state;
}

export function createInitialState(): SessionState {
  return {
    clientName: '',
    clientEmail: '',
    consultant: DEFAULT_CONSULTANT,
    startedAt: Date.now(),
    elapsedSeconds: 0,
    currentId: 'RS-001',
    finished: false,
    answers: {},
    na: {},
    additionalInfo: {},
    evidence: {},
    observations: {},
    privateNotes: {},
    matrix: {},
    history: ['RS-001']
  };
}

export function isQuestionNA(q: Question, na: Record<string, boolean>): boolean {
  return Boolean(na[q.id]);
}

export function isQuestionAnswered(
  q: Question,
  answers: Record<string, unknown>,
  matrix: Record<string, Record<string, string>>
): boolean {
  if (q.type === 'matrix') {
    const qMatrix = matrix[q.id];
    if (!qMatrix) return false;
    return Object.keys(qMatrix).length > 0;
  }

  const val = answers[q.id];
  if (val === undefined || val === null) return false;
  if (Array.isArray(val)) return val.length > 0;
  if (typeof val === 'string') return val.trim().length > 0;
  return true;
}

export function isQuestionHandled(
  q: Question,
  answers: Record<string, unknown>,
  matrix: Record<string, Record<string, string>>,
  na: Record<string, boolean>
): boolean {
  if (isQuestionNA(q, na)) return true;
  return isQuestionAnswered(q, answers, matrix);
}

export function calculateProgress(
  answers: Record<string, unknown>,
  matrix: Record<string, Record<string, string>>,
  na: Record<string, boolean>
): {
  total: number;
  answered: number;
  naCount: number;
  completed: number;
  pending: number;
  percentage: number;
} {
  const activeQuestions = coreQuestions;
  const total = activeQuestions.length;

  let answered = 0;
  let naCount = 0;

  for (const q of activeQuestions) {
    if (isQuestionNA(q, na)) {
      naCount++;
    } else if (isQuestionAnswered(q, answers, matrix)) {
      answered++;
    }
  }

  const completed = answered + naCount;
  const pending = Math.max(0, total - completed);
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return {
    total,
    answered,
    naCount,
    completed,
    pending,
    percentage
  };
}

export function getPendingQuestions(
  answers: Record<string, unknown>,
  matrix: Record<string, Record<string, string>>,
  na: Record<string, boolean>
): Question[] {
  return coreQuestions.filter((q) => !isQuestionHandled(q, answers, matrix, na));
}

// ==========================================
// DETECCIÓN ESTRATÉGICA: ALGORITMOS VIRAL CONTENT
// ==========================================
export function evaluateSignals(state: SessionState): StrategicSignal[] {
  const signals: StrategicSignal[] = [];
  const ans = state.answers;

  // 1. CONTROL: Dispersión Multicanal sin Tracción ni Recursos
  const rs001 = ensureArray(ans['RS-001']);
  const rs008 = String(ans['RS-008'] || '');
  const rs013 = String(ans['RS-013'] || '');
  const rs027 = String(ans['RS-027'] || '');

  if (
    rs001.length >= 3 &&
    (rs027.includes('todo yo solo') || rs027.includes('solo')) &&
    (rs013.includes('Menos de 3 horas') || rs013.includes('Entre 3 y 6 horas') || rs008.includes('Esporádicamente') || rs008.includes('Menos de 2'))
  ) {
    signals.push({
      type: 'red',
      area: 'Arquitectura de Canales y Foco',
      title: 'Dispersión Multicanal sin Tracción ni Capacidad Operativa',
      text: 'El cliente intenta mantener presencia en múltiples plataformas simultáneas trabajando completamente solo y con tiempo insuficiente, lo que diluye el impacto.',
      clientClaim: 'Busca abarcar múltiples redes sociales para maximizar su alcance orgánico (RS-001).',
      evidenceFound: 'Opera 100% en solitario (RS-027), dispone de tiempo limitado (RS-013) y sufre publicación esporádica (RS-008).',
      trueNeed: 'Concentrar el 80% de recursos en su plataforma dominante (Fase 3.8) y pausar canales de desgaste mediante la Matriz Esfuerzo × Impacto (Fase 2.8).',
      source: ['RS-001', 'RS-008', 'RS-013', 'RS-027'],
      recommendedExercises: ['3.8 Prioridad de plataformas (% de esfuerzo)', '2.8 Matriz esfuerzo × impacto', '3.0 Selector de Modalidad'],
      phaseTarget: 'Fase 3 · Estrategia de Viralidad'
    });
  }

  // 2. CONTROL: Audiencia Curiosa Desconectada del Cliente Ideal (Sin Conversión)
  const rs006 = String(ans['RS-006'] || '');
  const rs012 = String(ans['RS-012'] || '');
  const rs020 = String(ans['RS-020'] || '');

  if (
    (rs006.includes('curiosos') || rs006.includes('Parcialmente') || rs006.includes('Desconexión') || rs006.includes('Desconozco')) &&
    (rs012.includes('Ninguno') || rs012.includes('Desconozco') || rs020.includes('esperando pasivamente') || rs020.includes('No tengo un método'))
  ) {
    signals.push({
      type: 'red',
      area: 'Conversión y Audiencia Calificada',
      title: 'Audiencia de Curiosos sin Intención Comercial (Likes sin Ventas)',
      text: 'El contenido actual atrae espectadores que consumen información gratuita pero no tienen capacidad ni urgencia de contratación.',
      clientClaim: 'Publica contenidos esperando que la visibilidad genere clientes por sí sola.',
      evidenceFound: 'Su audiencia está llena de curiosos sin presupuesto (RS-006), el contenido no genera ventas predecibles (RS-012) y carece de un embudo activo (RS-020).',
      trueNeed: 'Redefinir los 3 perfiles de cliente ideal (Fase 7.2) y estructurar mensajes espejo con dolor agudo (Fase 7.4) conectados a un lead magnet con seguimiento.',
      source: ['RS-006', 'RS-012', 'RS-020'],
      recommendedExercises: ['1.3 Cliente ideal', '7.2 Perfiles del cliente ideal', '7.4 Mensajes espejo por perfil', '7.5 Calendario editorial de ventas'],
      phaseTarget: 'Fase 7 · Viral Content'
    });
  }

  // 3. CONTROL: Síndrome del Creador Quemado (Producción Manual sin Reciclaje ni IA)
  const rs014 = String(ans['RS-014'] || '');
  const rs015 = String(ans['RS-015'] || '');
  const rs029 = ensureArray(ans['RS-029']);

  if (
    (rs014.includes('desde cero cada vez') || rs014.includes('No reutilizo')) &&
    (rs015.includes('robóticos') || rs015.includes('No utilizo') || rs015.includes('básica')) &&
    (rs013.includes('Entre 7 y 12 horas') || rs013.includes('Más de 15 horas') || rs029.some(d => d.includes('consume demasiado tiempo') || d.includes('Depender 100% de mí')))
  ) {
    signals.push({
      type: 'red',
      area: 'Eficiencia y Sistemas de Producción',
      title: 'Síndrome del Creador Quemado (Creación Artesanal sin Sistema Reutilizable)',
      text: 'El cliente invierte horas agotadoras redactando y produciendo cada pieza desde cero, sin multiplicar formatos ni aprovechar Inteligencia Artificial entrenada.',
      clientClaim: 'Manifiesta un esfuerzo de producción intensivo que le consume su semana productiva.',
      evidenceFound: 'Crea todo desde cero sin repurposing (RS-014), no tiene IA configurada con su Brand Voice (RS-015) y sufre alto desgaste de tiempo (RS-013/RS-029).',
      trueNeed: 'Implementar los 5 moldes reutilizables (Fase 3.4), el motor de reciclaje (Fase 3.5) y entrenar su Brand Voice (Fase 4.1) con el banco de 30 piezas (Fase 7.3).',
      source: ['RS-013', 'RS-014', 'RS-015', 'RS-029'],
      recommendedExercises: ['3.4 Perpetua — 5 moldes reutilizables', '3.5 Perpetua — motor de distribución y reciclaje', '4.1 Ingeniería inversa del Brand Voice', '7.3 Banco de 30 piezas'],
      phaseTarget: 'Fase 4 · Brand Voice'
    });
  }

  // 4. CONTROL: Publicación Reactiva e Improvisada (Sin Pilares ni Calendario)
  const rs009 = String(ans['RS-009'] || '');
  const rs010 = String(ans['RS-010'] || '');

  if (
    (rs009.includes('improvisado') || rs009.includes('banco desordenado')) &&
    (rs010.includes('No tengo pilares') || rs010.includes('demasiados temas dispersos') || rs010.includes('no están documentados'))
  ) {
    signals.push({
      type: 'yellow',
      area: 'Estrategia Editorial y Consistencia',
      title: 'Publicación Reactiva e Improvisada sin Pilares de Posicionamiento',
      text: 'La falta de un calendario editorial estructurado provoca bloqueos recurrentes y una comunicación dispersa que confunde al algoritmo y a los prospectos.',
      clientClaim: 'Desea mantener una presencia constante pero sufre bloqueos y falta de tiempo.',
      evidenceFound: 'Publica de manera improvisada el mismo día (RS-009) y no cuenta con pilares temáticos formalmente estructurados (RS-010).',
      trueNeed: 'Definir el tema paraguas y 3-5 pilares con objetivos dominantes (Fase 3.1 y 3.2), y desplegar el ciclo de 8 semanas con calendario cerrado (Fase 7.5 y 7.6).',
      source: ['RS-009', 'RS-010', 'RS-029'],
      recommendedExercises: ['3.1 Tema paraguas y 3-5 pilares de contenido', '3.2 Objetivo dominante por pilar', '7.5 Calendario editorial de ventas', '7.6 Plan de contenidos - 4 semanas'],
      phaseTarget: 'Fase 7 · Viral Content'
    });
  }

  // 5. CONTROL: Ceguera Analítica y Métricas de Vanidad (Sin Retorno Financiero)
  const rs022 = String(ans['RS-022'] || '');
  const rs025 = String(ans['RS-025'] || '');

  if (
    (rs022.includes('vanidad') || rs022.includes('Casi nunca')) &&
    (rs025.includes('No puedo conectarlo') || rs025.includes('No genero ventas') || rs025.includes('Tengo noción general'))
  ) {
    signals.push({
      type: 'yellow',
      area: 'Inteligencia de Negocio y Atribución',
      title: 'Ceguera Analítica y Métricas de Vanidad sin Trazabilidad de Retorno',
      text: 'El cliente mide su éxito por likes o seguidores en lugar de clientes en cartera, sin saber con exactitud si las redes son rentables o una pérdida de dinero.',
      clientClaim: 'Invierte recursos en redes pero desconoce el retorno real de la inversión.',
      evidenceFound: 'Revisa solo métricas superficiales de vanidad (RS-022) y no puede atribuir ventas tangibles a sus publicaciones (RS-025).',
      trueNeed: 'Instalar el Reporte Ejecutivo en formato CFO (Fase 3.12) y conectar los checkpoints de seguimiento a 30/60 días (Fase 8.1).',
      source: ['RS-022', 'RS-025'],
      recommendedExercises: ['3.12 Reporte ejecutivo IG (formato CFO)', '3.9 Metas por trimestre', '8.1 Plan de Offboarding y Checkpoints 30/60 días'],
      phaseTarget: 'Fase 3 · Estrategia de Viralidad'
    });
  }

  // Si no hay señales críticas detectadas, añadir señal positiva
  if (signals.length === 0) {
    signals.push({
      type: 'green',
      area: 'Madurez Digital',
      title: 'Alta Coherencia y Madurez de Contenido',
      text: 'Las respuestas muestran claridad de nicho, pilares ordenados y un enfoque comercial balanceado entre alcance y conversión.',
      trueNeed: 'Escalar la velocidad de publicación integrando el ciclo de 8 semanas de contenido con IA en Fase 7.'
    });
  }

  return signals;
}

export function getAuditReport(state: SessionState): AuditReport {
  const prog = calculateProgress(state.answers, state.matrix, state.na);
  const pending = getPendingQuestions(state.answers, state.matrix, state.na);
  const signals = evaluateSignals(state);

  const contradictionSignals = signals.filter((s) => s.clientClaim && s.evidenceFound);
  let consistencyScore = 100;
  for (const s of contradictionSignals) {
    if (s.type === 'red') consistencyScore -= 18;
    else if (s.type === 'yellow') consistencyScore -= 9;
  }
  consistencyScore = Math.max(20, Math.min(100, consistencyScore));

  // Cálculo por las 9 fases de Viral Content (0 a 8)
  const phaseReadiness: Record<string, { total: number; answered: number; percentage: number }> = {};
  for (const phase of CONSULTING_PHASES) {
    const qInPhase = coreQuestions.filter(q => q.alignment?.phaseNumber === phase.number);
    const totalQ = qInPhase.length;
    const ansQ = qInPhase.filter(q => isQuestionHandled(q, state.answers, state.matrix, state.na)).length;
    phaseReadiness[phase.code] = {
      total: totalQ,
      answered: ansQ,
      percentage: totalQ > 0 ? Math.round((ansQ / totalQ) * 100) : 100
    };
  }

  return {
    totalActive: prog.total,
    coreCompleted: prog.completed,
    coreTotal: CORE_TOTAL,
    conditionalActiveCount: 0,
    conditionalCompleted: 0,
    answeredCount: prog.answered,
    naCount: prog.naCount,
    pendingCount: prog.pending,
    percentage: prog.percentage,
    consistencyScore,
    contradictionCount: contradictionSignals.length,
    pendingQuestions: pending,
    signals,
    isReady: prog.percentage >= 85,
    phaseReadiness
  };
}

export function formatAnswer(
  q: Question,
  val: unknown,
  matrix?: Record<string, Record<string, string>>,
  isNA?: boolean
): string {
  if (isNA) return '<span class="text-amber-600 font-medium">No aplica (N/A)</span>';
  if (val === undefined || val === null || val === '') {
    return '<span class="text-gray-400 italic">Sin responder</span>';
  }

  if (Array.isArray(val)) {
    if (val.length === 0) return '<span class="text-gray-400 italic">Sin responder</span>';
    return val.map((v) => `<span class="inline-block bg-gray-100 border border-gray-300 text-gray-800 rounded px-2 py-0.5 text-xs font-semibold mr-1 mb-1">${escapeHtml(v)}</span>`).join(' ');
  }

  return escapeHtml(String(val));
}

export function safeFileName(str: string): string {
  const clean = str.replace(/[^a-zA-Z0-9_-]/g, '_').toLowerCase();
  return `diagnostico_viral_content_${clean || 'sesion'}_${new Date().toISOString().slice(0, 10)}`;
}

export function downloadFile(content: string, filename: string, mimeType: string) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}m ${secs.toString().padStart(2, '0')}s`;
}

export function generateExportJson(state: SessionState) {
  const audit = getAuditReport(state);
  return {
    meta: {
      version: '3.0.0',
      pilar: 'Pilar 3 — Viral Content (Estrategia de Redes Sociales y Contenido con IA)',
      rangoReferencial: '$1,200 — $2,500 USD por proyecto',
      plataforma: 'CREA Y MONETIZA™',
      consultor: state.consultant || DEFAULT_CONSULTANT,
      cliente: state.clientName,
      email: state.clientEmail,
      fecha: new Date().toISOString(),
      duracionSegundos: state.elapsedSeconds,
      completado: audit.percentage
    },
    resumenAuditoria: {
      porcentajeCompletado: audit.percentage,
      puntajeConsistencia: audit.consistencyScore,
      alertasEstrategicas: audit.signals.length,
      alertas: audit.signals
    },
    respuestasPorFase: CONSULTING_PHASES.map(phase => {
      const questionsInPhase = coreQuestions.filter(q => q.alignment?.phaseNumber === phase.number);
      return {
        fase: phase.code,
        nombre: phase.name,
        ejerciciosAsociados: phase.exercises.map(e => `${e.code} ${e.name}`),
        preguntas: questionsInPhase.map(q => ({
          id: q.id,
          seccion: q.section,
          esencial: q.isEssential,
          pregunta: q.text,
          respuesta: state.answers[q.id] || (state.na[q.id] ? 'N/A' : null),
          alineacionConsultoria: q.alignment
        }))
      };
    })
  };
}

export function generateClientOrConsultantHtml(state: SessionState, isConsultantView: boolean): string {
  const audit = getAuditReport(state);
  const dateStr = new Date().toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Diagnóstico Estratégico — Viral Content & Redes Sociales · ${escapeHtml(state.clientName || 'Cliente')}</title>
  <style>
    body { font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif; margin: 0; padding: 40px; background: #ffffff; color: #111111; line-height: 1.6; }
    .header { border-bottom: 4px solid #D7192B; padding-bottom: 24px; margin-bottom: 30px; }
    .badge { display: inline-block; background: #D7192B; color: #ffffff; font-size: 11px; font-weight: 800; padding: 4px 10px; border-radius: 4px; text-transform: uppercase; margin-bottom: 12px; }
    h1 { font-size: 28px; font-weight: 900; margin: 0 0 8px 0; color: #111111; }
    .meta { font-size: 14px; color: #666; margin-top: 6px; }
    .section-title { font-size: 18px; font-weight: 800; background: #f4f4f5; padding: 10px 14px; border-left: 4px solid #D7192B; margin: 32px 0 16px 0; }
    .question-item { margin-bottom: 20px; padding: 14px; border: 1px solid #e4e4e7; border-radius: 8px; page-break-inside: avoid; }
    .q-id { font-size: 11px; font-weight: 800; color: #D7192B; margin-bottom: 4px; }
    .q-text { font-size: 15px; font-weight: 700; color: #18181b; margin-bottom: 8px; }
    .q-ans { font-size: 14px; color: #27272a; background: #fafafa; padding: 10px; border-radius: 6px; border: 1px solid #f4f4f5; }
    .alignment { margin-top: 8px; font-size: 12px; color: #4b5563; background: #fef2f2; padding: 6px 10px; border-radius: 4px; border-left: 3px solid #ef4444; }
    .alert-card { background: #fff1f2; border: 1px solid #fecdd3; border-left: 5px solid #e11d48; padding: 14px; border-radius: 8px; margin-bottom: 14px; }
    .footer { margin-top: 50px; padding-top: 20px; border-top: 1px solid #e4e4e7; font-size: 12px; color: #71717a; text-align: center; }
  </style>
</head>
<body>
  <div class="header">
    <div class="badge">CREA Y MONETIZA™ · Pilar 3 Viral Content / Redes Sociales ($1,200 — $2,500 USD)</div>
    <h1>Diagnóstico Estratégico de Redes Sociales y Contenido con IA</h1>
    <div class="meta">
      <strong>Cliente:</strong> ${escapeHtml(state.clientName || 'Sin definir')} | 
      <strong>Consultor:</strong> ${escapeHtml(state.consultant || DEFAULT_CONSULTANT)} | 
      <strong>Fecha:</strong> ${dateStr} | 
      <strong>Completado:</strong> ${audit.percentage}% | 
      <strong>Consistencia:</strong> ${audit.consistencyScore}%
    </div>
  </div>

  ${isConsultantView && audit.signals.length > 0 ? `
    <div class="section-title">Análisis Estratégico: Evidencias vs Discurso del Cliente</div>
    ${audit.signals.map(s => `
      <div class="alert-card">
        <strong style="color:#e11d48;">[${s.type.toUpperCase()}] ${escapeHtml(s.title)}</strong>
        <p style="margin:6px 0 4px 0; font-size:13px;">${escapeHtml(s.text)}</p>
        ${s.clientClaim ? `<div style="font-size:12px; margin-top:4px;"><strong>Discurso del cliente:</strong> ${escapeHtml(s.clientClaim)}</div>` : ''}
        ${s.evidenceFound ? `<div style="font-size:12px; margin-top:2px;"><strong>Evidencia encontrada:</strong> ${escapeHtml(s.evidenceFound)}</div>` : ''}
        ${s.trueNeed ? `<div style="font-size:12px; margin-top:4px; color:#15803d;"><strong>Necesidad real a trabajar:</strong> ${escapeHtml(s.trueNeed)}</div>` : ''}
        ${s.recommendedExercises ? `<div style="font-size:11px; margin-top:4px; color:#6b7280;">Ejercicios clave: ${escapeHtml(s.recommendedExercises.join(', '))}</div>` : ''}
      </div>
    `).join('')}
  ` : ''}

  <div class="section-title">Respuestas Levantadas en la Sesión (30 Reactivos Clave)</div>
  ${coreQuestions.map(q => {
    const isNA = isQuestionNA(q, state.na);
    const formatted = formatAnswer(q, state.answers[q.id], undefined, isNA);
    return `
      <div class="question-item">
        <div class="q-id">${q.id} ${q.isEssential ? '· ESENCIAL' : ''} [${escapeHtml(q.section)}]</div>
        <div class="q-text">${escapeHtml(q.text)}</div>
        <div class="q-ans">${formatted}</div>
        ${q.alignment ? `
          <div class="alignment">
            <strong>Fase:</strong> ${escapeHtml(q.alignment.phase)} | 
            <strong>Ejercicios:</strong> ${escapeHtml(q.alignment.exercises.join(', '))}
            <div style="margin-top:2px;"><strong>Cómo logra la transformación:</strong> ${escapeHtml(q.alignment.transformationPurpose)}</div>
          </div>
        ` : ''}
      </div>
    `;
  }).join('')}

  <div class="footer">
    Reporte generado por la plataforma oficial de Diagnóstico Estratégico Viral Content — CREA Y MONETIZA™
  </div>
</body>
</html>`;
}

export function printOrDownloadPdf(state: SessionState, isConsultantView: boolean) {
  const html = generateClientOrConsultantHtml(state, isConsultantView);
  const printWin = window.open('', '_blank');
  if (printWin) {
    printWin.document.open();
    printWin.document.write(html);
    printWin.document.close();
    setTimeout(() => {
      printWin.print();
    }, 500);
  } else {
    downloadFile(html, `${safeFileName(state.clientName)}.html`, 'text/html;charset=utf-8');
  }
}

export function fillTestData(state: SessionState): SessionState {
  const next = clone(state);
  next.clientName = 'Camila Valenzuela';
  next.clientEmail = 'camila.valenzuela@agenciadigital.com';
  next.consultant = DEFAULT_CONSULTANT;

  // Llenar respuestas realistas estructuradas para las 30 preguntas de Viral Content
  const sampleAnswers: Record<string, string | string[]> = {
    'RS-001': ['Instagram (feed, stories, reels)', 'LinkedIn (artículos, carruseles, publicaciones profesionales B2B)', 'TikTok (videos cortos verticales)'],
    'RS-002': 'Entre 5,000 y 20,000 seguidores con crecimiento orgánico constante',
    'RS-003': 'A medias: describe bien lo que hago pero no tiene un llamado a la acción persuasivo ni captura prospectos',
    'RS-004': 'Instagram: genera la mayor cercanía, interacción diaria en Stories y mensajes directos (DMs)',
    'RS-005': 'TikTok: publico sin rumbo y solo genera reproducciones vacías sin negocio',
    'RS-006': 'Parcialmente: tengo seguidores interesados en la temática pero muy pocos con poder adquisitivo real',
    'RS-007': [
      'Videos cortos / Reels / TikToks educativos y de opinión',
      'Carruseles estructurados de paso a paso o análisis profundos',
      'Historias (Stories) mostrando trastienda, día a día y encuestas de interacción'
    ],
    'RS-008': 'De 3 a 4 veces por semana con regularidad sostenida',
    'RS-009': 'Tengo un banco desordenado de ideas pero decido qué publicar el mismo día según el ánimo o tiempo',
    'RS-010': 'Tengo claros los temas de los que hablo, pero no están documentados ni estructurados en pilares',
    'RS-011': 'Videos cortos de errores comunes, mitos desmentidos o ganchos polémicos contracorriente',
    'RS-012': 'Piezas con llamado a la acción (CTA) directo a mensaje privado (DM) o lead magnet específico',
    'RS-013': 'Entre 7 y 12 horas semanales (consume gran parte de mi semana productiva y me satura)',
    'RS-014': 'No, creo cada pieza desde cero cada vez (lo cual me agota y consume demasiado tiempo)',
    'RS-015': 'Uso IA básica: ChatGPT o Claude solo para lluvia de ideas o ganchos sueltos',
    'RS-016': 'Moderada (entre 2% y 4% de interacción habitual con likes y comentarios regulares)',
    'RS-017': 'Respondo casi todo dentro de las 24 horas del mismo día de forma ordenada',
    'RS-018': [
      'Preguntas técnicas profundas sobre mi metodología o área de especialidad',
      'Agradecimientos y felicitaciones por el alto valor del contenido gratuito',
      'Curiosos pidiendo soluciones mágicas o asesoría gratuita en los comentarios'
    ],
    'RS-019': 'Tengo una lista de correo (Newsletter) con lectores fieles y aperturas consistentes',
    'RS-020': 'Llamadas a la acción (CTA) periódicas invitando a enviar palabra clave por DM o agendar llamada',
    'RS-021': 'Esporádicamente (1 a 3 mensajes al mes de personas interesadas en contratar)',
    'RS-022': 'Métricas de contenido: guardados, compartidos, retención promedio de video y alcance semanal',
    'RS-023': 'Entre 2,000 y 10,000 visualizaciones / reproducciones por pieza',
    'RS-024': 'Normal para el algoritmo actual (entre 5% y 15% de mis seguidores)',
    'RS-025': 'Tengo noción general (sé que muchos clientes me conocieron por redes pero sin métricas exactas)',
    'RS-026': [
      'Meta Business Suite / Creator Studio para programar publicaciones',
      'Herramientas de diseño y edición (Canva Pro, CapCut, Premiere, Photoshop)',
      'Herramientas de IA generativa (ChatGPT, Claude, Midjourney, Gemini)'
    ],
    'RS-027': 'Hago absolutamente todo yo solo (ideación, guiones, grabación, edición, diseño y publicación)',
    'RS-028': [
      'Smartphone de gama media-alta con buena cámara (iPhone reciente o Android de alta gama)',
      'Micrófono inalámbrico o de solapa de buena fidelidad (Rode, DJI, Hollyland)',
      'Iluminación dedicada (softbox, panel LED o aro de luz)'
    ],
    'RS-029': [
      'Me consume demasiado tiempo y energía sin ver un retorno económico tangible',
      'No saber qué publicar cada semana (bloqueo creativo y falta de calendario)',
      'Depender 100% de mí para cada pieza sin contar con un sistema que funcione solo'
    ],
    'RS-030': [
      'Reels y videos cortos virales con edición dinámica, efectos y ganchos magnéticos',
      'Carruseles de diseño profesional que generen miles de guardados y compartidos',
      'Contenido impulsado por Inteligencia Artificial que mantenga intacta mi voz auténtica'
    ]
  };

  next.answers = sampleAnswers;
  next.na = {};
  return next;
}

// BATERÍA COMPLETA DE 20 PRUEBAS METODOLÓGICAS Y ESTRATÉGICAS (PILAR 3 VIRAL CONTENT)
export function runTestSuite(currentState: SessionState): TestSuiteResult {
  const tests: TestResult[] = [];

  // 1. Integridad de los 30 reactivos
  tests.push({
    pass: coreQuestions.length === 30,
    title: '1. Catálogo íntegro de 30 reactivos de Redes Sociales',
    detail: `Total: ${coreQuestions.length} reactivos cargados (RS-001 al RS-030).`
  });

  // 2. Cobertura de las 5 dimensiones
  const sections = new Set(coreQuestions.map(q => q.section));
  tests.push({
    pass: sections.size === 5,
    title: '2. Cobertura de 5 dimensiones estratégicas',
    detail: `Dimensiones detectadas: ${Array.from(sections).join(', ')}.`
  });

  // 3. Cobertura de las 9 fases de consultoría de Viral Content (Fases 0 a 8)
  const phasesCovered = new Set(coreQuestions.map(q => q.alignment?.phaseNumber));
  const hasAllMajorPhases = [1, 2, 3, 4, 5, 6, 7, 8].every(num => phasesCovered.has(num));
  tests.push({
    pass: hasAllMajorPhases,
    title: '3. Mapeo continuo en las fases del servicio Viral Content',
    detail: `Las preguntas cubren el flujo de 8 fases (Kickoff, Business Context, Auditoría, Estrategia Viralidad, Brand Voice, Design System, Knowledge Base, Viral Content y Offboarding).`
  });

  // 4. Preguntas de control (Evidencia vs Discurso)
  const controlQuestions = coreQuestions.filter(q => q.alignment?.isControlQuestion);
  tests.push({
    pass: controlQuestions.length >= 8,
    title: '4. Preguntas de control configuradas (Evidencias vs Discurso)',
    detail: `Existen ${controlQuestions.length} preguntas de control para contrastar la narrativa del cliente frente a hechos comprobables.`
  });

  // 5. Explicación de la transformación en cada pregunta
  const withTransformation = coreQuestions.filter(q => q.alignment?.transformationPurpose && q.alignment.transformationPurpose.length > 20);
  tests.push({
    pass: withTransformation.length === 30,
    title: '5. Justificación de transformación (100% de reactivos)',
    detail: `Las 30 preguntas cuentan con explicación detallada de cómo su respuesta conduce a la transformación del cliente.`
  });

  // 6. Entregables de consultoría asociados
  const withDeliverable = coreQuestions.filter(q => q.alignment?.deliverable && q.alignment.deliverable.length > 5);
  tests.push({
    pass: withDeliverable.length === 30,
    title: '6. Entregables concretos vinculados (100% de reactivos)',
    detail: `Cada pregunta apunta a un entregable específico de las fases del servicio productizado.`
  });

  // 7. Tipología de preguntas estandarizada para cruce algorítmico (100% single/multi)
  const singleCount = coreQuestions.filter(q => q.type === 'single').length;
  const multiCount = coreQuestions.filter(q => q.type === 'multi').length;
  const structuredCount = singleCount + multiCount;
  tests.push({
    pass: structuredCount === 30,
    title: '7. Estandarización algorítmica (Opciones únicas y múltiples estructuradas)',
    detail: `${structuredCount} de 30 preguntas (${singleCount} de opción única y ${multiCount} de selección múltiple) estructuradas para análisis algorítmico sin ambigüedad.`
  });

  // 8. Estado inicial limpio
  const fresh = createInitialState();
  tests.push({
    pass: fresh.currentId === 'RS-001' && Object.keys(fresh.answers).length === 0 && fresh.finished === false,
    title: '8. Inicialización de sesión en RS-001',
    detail: 'El estado inicial comienza ordenadamente en el primer reactivo con respuestas vacías.'
  });

  // 9. Cálculo de progreso en cero
  const progZero = calculateProgress(fresh.answers, fresh.matrix, fresh.na);
  tests.push({
    pass: progZero.percentage === 0 && progZero.pending === 30 && progZero.answered === 0,
    title: '9. Cálculo de progreso 0% inicial',
    detail: `Progreso: ${progZero.percentage}%, Pendientes: ${progZero.pending}.`
  });

  // 10. Marcado de No Aplica (N/A)
  const naState = createInitialState();
  naState.na['RS-015'] = true;
  const progNA = calculateProgress(naState.answers, naState.matrix, naState.na);
  tests.push({
    pass: progNA.naCount === 1 && progNA.completed === 1,
    title: '10. Gestión de excepciones (N/A)',
    detail: 'Las preguntas marcadas como no aplicables se contabilizan correctamente como gestionadas.'
  });

  // 11. Simulación con datos de prueba realistas
  const simulatedState = fillTestData(fresh);
  const progFull = calculateProgress(simulatedState.answers, simulatedState.matrix, simulatedState.na);
  tests.push({
    pass: progFull.percentage === 100 && progFull.answered === 30,
    title: '11. Simulación de cuestionario completo (100%)',
    detail: `30 de 30 reactivos contestados en la prueba simulada.`
  });

  // 12. Detección de Dispersión Multicanal sin Tracción
  const dispersionState = createInitialState();
  dispersionState.answers['RS-001'] = ['Instagram', 'LinkedIn', 'YouTube', 'TikTok'];
  dispersionState.answers['RS-027'] = 'Hago absolutamente todo yo solo (ideación, guiones, grabación, edición, diseño y publicación)';
  dispersionState.answers['RS-013'] = 'Menos de 3 horas semanales (tiempo mínimo, reactivo o desatendido)';
  dispersionState.answers['RS-008'] = 'Esporádicamente: semanas con publicaciones diarias seguidas de semanas o meses de silencio total';
  const dispersionSignals = evaluateSignals(dispersionState);
  const hasDispersion = dispersionSignals.some(s => s.title.includes('Dispersión Multicanal'));
  tests.push({
    pass: hasDispersion,
    title: '12. Detección de Dispersión Multicanal sin Tracción',
    detail: 'Identifica cuando el cliente intenta estar en 4+ redes trabajando solo y con menos de 3 hrs semanales.'
  });

  // 13. Detección de Audiencia Curiosa vs Falta de Conversión
  const curiousState = createInitialState();
  curiousState.answers['RS-006'] = 'No, tengo muchos curiosos, estudiantes o colegas que buscan tips gratuitos pero no contratan servicios';
  curiousState.answers['RS-012'] = 'Ninguno de forma predecible: las publicaciones me dan likes y vistas pero casi ninguna venta';
  curiousState.answers['RS-020'] = 'No tengo un método para convertir seguidores en prospectos (publico sin embudo de conversión)';
  const curiousSignals = evaluateSignals(curiousState);
  const hasCurious = curiousSignals.some(s => s.title.includes('Audiencia de Curiosos'));
  tests.push({
    pass: hasCurious,
    title: '13. Detección de Audiencia Curiosa (Likes sin Ventas)',
    detail: 'Contrasta publicaciones masivas con falta de captación de clientes de pago.'
  });

  // 14. Detección del Síndrome del Creador Quemado (Sin Reciclaje ni IA)
  const burnoutState = createInitialState();
  burnoutState.answers['RS-014'] = 'No, creo cada pieza desde cero cada vez (lo cual me agota y consume demasiado tiempo)';
  burnoutState.answers['RS-015'] = 'Intenté usar IA pero los textos suenan robóticos, impersonales y genéricos';
  burnoutState.answers['RS-013'] = 'Entre 7 y 12 horas semanales (consume gran parte de mi semana productiva y me satura)';
  burnoutState.answers['RS-029'] = ['Me consume demasiado tiempo y energía sin ver un retorno económico tangible'];
  const burnoutSignals = evaluateSignals(burnoutState);
  const hasBurnout = burnoutSignals.some(s => s.title.includes('Síndrome del Creador Quemado'));
  tests.push({
    pass: hasBurnout,
    title: '14. Detección del Síndrome del Creador Quemado',
    detail: 'Alerta sobre el cuello de botella de crear todo desde cero sin moldes ni Brand Voice asistido por IA.'
  });

  // 15. Detección de Publicación Reactiva e Improvisada
  const reactiveState = createInitialState();
  reactiveState.answers['RS-009'] = '100% improvisado: no tengo calendario, publico lo que surge en el momento o cuando me acuerdo';
  reactiveState.answers['RS-010'] = 'No tengo pilares de contenido definidos formalmente';
  const reactiveSignals = evaluateSignals(reactiveState);
  const hasReactive = reactiveSignals.some(s => s.title.includes('Publicación Reactiva e Improvisada'));
  tests.push({
    pass: hasReactive,
    title: '15. Detección de Publicación Reactiva sin Calendario',
    detail: 'Detecta cuando la falta de planificación y pilares provoca bloqueos creativos constantes.'
  });

  // 16. Detección de Ceguera Analítica y Métricas de Vanidad
  const blindState = createInitialState();
  blindState.answers['RS-022'] = 'Métricas de vanidad: solo reviso likes y número de seguidores de forma ocasional';
  blindState.answers['RS-025'] = 'No puedo conectarlo: las redes me traen visibilidad pero no se traducen en facturación tangible';
  const blindSignals = evaluateSignals(blindState);
  const hasBlind = blindSignals.some(s => s.title.includes('Ceguera Analítica'));
  tests.push({
    pass: hasBlind,
    title: '16. Detección de Métricas de Vanidad sin Retorno',
    detail: 'Identifica la desconexión entre seguidores/likes y facturación en el banco.'
  });

  // 17. Desglose de madurez diagnóstica en las 9 fases de Viral Content
  const audit = getAuditReport(simulatedState);
  const allPhasesCalculated = Object.keys(audit.phaseReadiness).length === 9;
  tests.push({
    pass: allPhasesCalculated,
    title: '17. Desglose de preparación en las 9 fases de Viral Content',
    detail: `Fases auditadas: ${Object.keys(audit.phaseReadiness).join(', ')}.`
  });

  // 18. Generación del reporte estructurado JSON
  const jsonReport = generateExportJson(simulatedState);
  tests.push({
    pass: jsonReport.meta.pilar.includes('Viral Content') && jsonReport.respuestasPorFase.length === 9,
    title: '18. Estructura de Exportación JSON Oficial (Pilar 3)',
    detail: 'El archivo JSON incluye metadatos, rango referencial ($1,200-$2,500 USD), alertas y las 9 fases.'
  });

  // 19. Generación del reporte HTML para Cliente y Consultor
  const clientHtml = generateClientOrConsultantHtml(simulatedState, false);
  const consultantHtml = generateClientOrConsultantHtml(simulatedState, true);
  tests.push({
    pass: clientHtml.includes('Viral Content') && consultantHtml.includes('Análisis Estratégico'),
    title: '19. Generación de Informes HTML/PDF Separados',
    detail: 'Genera versión ejecutiva para el cliente y dossier confidencial con alertas para el consultor.'
  });

  // 20. Blindaje con preguntas esenciales
  const essentialCount = coreQuestions.filter(q => q.isEssential).length;
  tests.push({
    pass: essentialCount >= 18,
    title: '20. Blindaje con preguntas esenciales prioritarias',
    detail: `Se identificaron ${essentialCount} preguntas de respuesta crítica esencial.`
  });

  const passed = tests.filter(t => t.pass).length;
  return {
    tests,
    passed,
    total: tests.length,
    percentage: Math.round((passed / tests.length) * 100)
  };
}

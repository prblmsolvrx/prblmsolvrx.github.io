// ── STATE ──────────────────────────────────────────────────
const STATE_KEY = 'circle_progress_v1';

let state = {
  completedLevels: new Set(),
  quizScores: {},
  meritPassed: false,
  meritScore: 0,
  meritDate: null,
  completionDate: null,
  examAnswers: {},
  examStarted: false,
  examFinished: false,
  examTimeLeft: MERIT_EXAM.timeLimit,
};

function loadState() {
  try {
    const s = JSON.parse(localStorage.getItem(STATE_KEY) || '{}');
    state.completedLevels = new Set(s.completedLevels || []);
    state.quizScores = s.quizScores || {};
    state.meritPassed = s.meritPassed || false;
    state.meritScore = s.meritScore || 0;
    state.meritDate = s.meritDate || null;
    state.completionDate = s.completionDate || null;
  } catch(e) {}
}

function saveState() {
  localStorage.setItem(STATE_KEY, JSON.stringify({
    completedLevels: [...state.completedLevels],
    quizScores: state.quizScores,
    meritPassed: state.meritPassed,
    meritScore: state.meritScore,
    meritDate: state.meritDate,
    completionDate: state.completionDate,
  }));
}

// ── ROUTING ────────────────────────────────────────────────
let currentView = 'dashboard';
let currentLevel = null;
let examTimer = null;
let examQuestions = [];

function showView(id) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('view-' + id).classList.add('active');
  currentView = id;
  document.querySelectorAll('.nav-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.view === id);
  });
  if (id === 'dashboard') renderDashboard();
  if (id === 'certificates') renderCertificates();
  if (id === 'exam') renderExamEntry();
  window.scrollTo({ top: 0 });
}

// ── DASHBOARD ──────────────────────────────────────────────
function renderDashboard() {
  const done = state.completedLevels.size;
  const total = LEVELS.length;
  const pct = Math.round((done / total) * 100);

  document.getElementById('stat-done').textContent = done;
  document.getElementById('stat-pct').textContent = pct + '%';
  const tracksComplete = TIERS.filter(t => t.levels.every(l => state.completedLevels.has(l))).length;
  document.getElementById('stat-tiers').textContent = tracksComplete;
  document.getElementById('nav-done').textContent = done;
  document.getElementById('nav-pct').textContent = pct + '%';

  // ring
  const r = 80, C = 2 * Math.PI * r;
  const ring = document.getElementById('ring-track');
  ring.style.strokeDasharray = C;
  ring.style.strokeDashoffset = C - (pct / 100) * C;
  document.getElementById('ring-pct').textContent = pct + '%';

  // tiers
  const grid = document.getElementById('tier-grid');
  grid.innerHTML = '';
  TIERS.forEach(tier => {
    const done = tier.levels.filter(l => state.completedLevels.has(l)).length;
    const pctTier = Math.round((done / tier.levels.length) * 100);
    const card = document.createElement('div');
    card.className = 'tier-card';

    const pills = tier.levels.map(l => {
      const lv = LEVELS.find(x => x.id === l);
      const c = state.completedLevels.has(l) ? 'complete' : '';
      return `<button class="level-pill ${c}" onclick="openLevel(${l})" title="${lv ? lv.title : ''}">L${l}</button>`;
    }).join('');

    card.innerHTML = `
      <div class="tier-hdr">
        <span class="tier-tag" style="color:${tier.color};border-color:${tier.color}40">${tier.label}</span>
        <span class="tier-levels-done"><span>${done}</span>/${tier.levels.length} levels</span>
      </div>
      <div class="tier-progress-bar"><div class="tier-progress-fill" style="width:${pctTier}%;background:${tier.color};box-shadow:0 0 8px ${tier.color}"></div></div>
      <div class="level-pills">${pills}</div>
    `;
    grid.appendChild(card);
  });
}

// ── LEVEL VIEW ─────────────────────────────────────────────
function openLevel(levelId) {
  currentLevel = LEVELS.find(l => l.id === levelId);
  if (!currentLevel) return;
  showView('level');
  renderLevel();
}

function renderLevel() {
  const lv = currentLevel;
  const tier = TIERS.find(t => t.levels.includes(lv.id));
  const done = state.completedLevels.has(lv.id);
  const prevScore = state.quizScores[lv.id];

  document.getElementById('view-level').innerHTML = `
    <div class="level-view">
      <div class="breadcrumb">
        <button onclick="showView('dashboard')">Dashboard</button>
        <span>›</span>
        <span style="color:${tier.color}">${tier.label}</span>
        <span>›</span>
        <span>Level ${lv.id}</span>
      </div>

      <div class="level-badge" style="color:${tier.color};border-color:${tier.color}40;background:${tier.color}12">
        <span>Level ${lv.id}</span>
        <span style="opacity:.4">·</span>
        <span>${lv.module}</span>
        ${done ? '<span style="margin-left:4px">✓ Complete</span>' : ''}
      </div>

      <h1 style="font-size:clamp(20px,3vw,28px);font-weight:800;letter-spacing:-.5px;margin-bottom:32px">${lv.title}</h1>

      <div class="level-content-area">${lv.content}</div>

      <div class="quiz-section" id="quiz-${lv.id}">
        <div class="quiz-title">Level ${lv.id} Assessment — 5 Questions</div>
        ${renderQuiz(lv, done, prevScore)}
      </div>
    </div>
  `;
}

function renderQuiz(lv, alreadyDone, prevScore) {
  if (alreadyDone) {
    return `<div class="quiz-result pass">✓ Level completed — Score: ${prevScore}%<br>
      <button onclick="retakeQuiz(${lv.id})" style="margin-top:12px;padding:8px 20px;border-radius:6px;border:1px solid rgba(0,229,255,0.3);background:rgba(0,229,255,0.1);color:#00E5FF;font-family:var(--font);font-size:13px;cursor:pointer">Retake</button>
    </div>`;
  }
  const qs = lv.quiz.map((q, qi) => `
    <div class="quiz-question" id="qq-${qi}">
      <div class="q-number">Question ${qi + 1} of ${lv.quiz.length}</div>
      <div class="q-text">${q.q}</div>
      <div class="q-options">
        ${q.opts.map((opt, oi) => `
          <button class="q-option" data-qi="${qi}" data-oi="${oi}" onclick="selectOption(this,${qi},${oi})">${opt}</button>
        `).join('')}
      </div>
    </div>
  `).join('');
  return qs + `
    <button class="quiz-submit-btn" onclick="submitQuiz(${lv.id})">Submit Answers</button>
    <div id="quiz-result-${lv.id}"></div>
  `;
}

function selectOption(btn, qi, oi) {
  const group = document.querySelectorAll(`[data-qi="${qi}"]`);
  group.forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  btn.dataset.selected = 'true';
}

function retakeQuiz(id) {
  const lv = LEVELS.find(l => l.id === id);
  currentLevel = lv;
  document.getElementById(`quiz-${id}`).innerHTML =
    '<div class="quiz-title">Level ' + id + ' Assessment — 5 Questions</div>' +
    renderQuiz(lv, false, null);
}

function submitQuiz(lvId) {
  const lv = LEVELS.find(l => l.id === lvId);
  let correct = 0;
  let allAnswered = true;

  lv.quiz.forEach((q, qi) => {
    const selected = document.querySelector(`[data-qi="${qi}"][data-selected="true"]`);
    if (!selected) { allAnswered = false; return; }
    const oi = parseInt(selected.dataset.oi);
    const opts = document.querySelectorAll(`[data-qi="${qi}"]`);
    opts.forEach(o => { o.disabled = true; });
    if (oi === q.a) {
      selected.classList.add('correct');
      correct++;
    } else {
      selected.classList.add('wrong');
      opts[q.a].classList.add('correct');
    }
  });

  if (!allAnswered) { alert('Please answer all questions before submitting.'); return; }

  const pct = Math.round((correct / lv.quiz.length) * 100);
  const pass = pct >= 80;
  const res = document.getElementById(`quiz-result-${lvId}`);
  document.querySelector('.quiz-submit-btn') && (document.querySelector('.quiz-submit-btn').style.display='none');

  res.innerHTML = pass
    ? `<div class="quiz-result pass">✓ Passed — ${correct}/${lv.quiz.length} correct (${pct}%)</div>`
    : `<div class="quiz-result fail">✗ ${correct}/${lv.quiz.length} correct (${pct}%) — Score 80%+ to complete this level.
        <br><button onclick="retakeQuiz(${lvId})" style="margin-top:12px;padding:8px 20px;border-radius:6px;border:1px solid rgba(255,80,80,.3);background:rgba(255,80,80,.08);color:#f87171;font-family:var(--font);font-size:13px;cursor:pointer">Try Again</button>
      </div>`;

  if (pass) {
    state.completedLevels.add(lvId);
    state.quizScores[lvId] = pct;
    if (!state.completionDate && state.completedLevels.size === LEVELS.length) {
      state.completionDate = new Date().toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' });
    }
    saveState();
    renderDashboard();
    const next = LEVELS.find(l => l.id === lvId + 1);
    if (next) {
      res.innerHTML += `<button onclick="openLevel(${next.id})" style="margin-top:8px;padding:8px 20px;border-radius:6px;border:1px solid rgba(0,229,255,.3);background:rgba(0,229,255,.1);color:#00E5FF;font-family:var(--font);font-size:13px;cursor:pointer">Next: Level ${next.id} →</button>`;
    } else {
      res.innerHTML += `<button onclick="showView('certificates')" style="margin-top:8px;padding:8px 20px;border-radius:6px;border:1px solid rgba(245,158,11,.4);background:rgba(245,158,11,.1);color:#f59e0b;font-family:var(--font);font-size:14px;font-weight:700;cursor:pointer">🏆 View Your Certificates!</button>`;
    }
  }
}

// ── EXAM ───────────────────────────────────────────────────
function renderExamEntry() {
  const allDone = state.completedLevels.size === LEVELS.length;
  const el = document.getElementById('view-exam');
  if (state.examFinished || state.meritPassed) {
    renderExamResult(state.meritScore, state.meritPassed); return;
  }
  el.innerHTML = `
    <div class="exam-view">
      <div class="breadcrumb">
        <button onclick="showView('dashboard')">Dashboard</button>
        <span>›</span><span>Merit Examination</span>
      </div>
      <div class="exam-intro">
        <div class="level-badge" style="margin-bottom:20px">Merit Examination</div>
        <h2>Circle Merit Certification</h2>
        <p>A rigorous, timed knowledge examination covering all 12 modules and all 30 levels of the Circle curriculum. Passing earns you the Certificate of Merit.</p>
        <div class="exam-meta">
          <div class="exam-meta-item"><span class="big">30</span><span class="small">Questions</span></div>
          <div class="exam-meta-item"><span class="big">45</span><span class="small">Minutes</span></div>
          <div class="exam-meta-item"><span class="big">85%</span><span class="small">Pass Threshold</span></div>
        </div>
        ${!allDone ? `<p style="color:#f59e0b;font-size:13px;margin-bottom:16px">⚠ Complete all 30 levels first to unlock the Merit Examination.</p>` : ''}
        <button class="start-btn" onclick="startExam()" ${!allDone ? 'disabled' : ''}>Begin Examination</button>
      </div>
    </div>
  `;
}

function startExam() {
  examQuestions = [...MERIT_EXAM.questions].sort(() => Math.random() - 0.5);
  state.examAnswers = {};
  state.examStarted = true;
  state.examFinished = false;
  state.examTimeLeft = MERIT_EXAM.timeLimit;
  renderExamQuestions();
  startTimer();
}

function renderExamQuestions() {
  const el = document.getElementById('view-exam');
  const qs = examQuestions.map((q, qi) => `
    <div class="quiz-question" id="eq-${qi}" style="padding:20px;background:var(--glass);border:1px solid var(--border);border-radius:12px;margin-bottom:16px">
      <div class="q-number">Question ${qi + 1} of ${examQuestions.length}</div>
      <div class="q-text">${q.q}</div>
      <div class="q-options">
        ${q.opts.map((opt, oi) => `
          <button class="q-option" data-eqi="${qi}" data-eoi="${oi}" onclick="selectExamOption(this,${qi},${oi})">${opt}</button>
        `).join('')}
      </div>
    </div>
  `).join('');

  el.innerHTML = `
    <div class="exam-view">
      <div class="exam-timer-bar">
        <div>
          <div style="font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:.08em;margin-bottom:2px">Time Remaining</div>
          <div class="timer-display" id="timer-display">45:00</div>
        </div>
        <div class="exam-question-count" id="exam-answered">0 / ${examQuestions.length} answered</div>
      </div>
      ${qs}
      <button class="exam-submit-btn" onclick="submitExam()">Submit Examination</button>
    </div>
  `;
}

function selectExamOption(btn, qi, oi) {
  document.querySelectorAll(`[data-eqi="${qi}"]`).forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  state.examAnswers[qi] = oi;
  const answered = Object.keys(state.examAnswers).length;
  const el = document.getElementById('exam-answered');
  if (el) el.textContent = `${answered} / ${examQuestions.length} answered`;
}

function startTimer() {
  clearInterval(examTimer);
  examTimer = setInterval(() => {
    state.examTimeLeft--;
    const el = document.getElementById('timer-display');
    if (el) {
      const m = Math.floor(state.examTimeLeft / 60);
      const s = state.examTimeLeft % 60;
      el.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
      el.className = 'timer-display' + (state.examTimeLeft < 300 ? ' warning' : '') + (state.examTimeLeft < 60 ? ' danger' : '');
    }
    if (state.examTimeLeft <= 0) { clearInterval(examTimer); submitExam(true); }
  }, 1000);
}

function submitExam(timeUp = false) {
  if (!timeUp) {
    const answered = Object.keys(state.examAnswers).length;
    if (answered < examQuestions.length) {
      if (!confirm(`You have ${examQuestions.length - answered} unanswered question(s). Submit anyway?`)) return;
    }
  }
  clearInterval(examTimer);

  let correct = 0;
  examQuestions.forEach((q, qi) => {
    if (state.examAnswers[qi] === q.a) correct++;
  });

  const pct = Math.round((correct / examQuestions.length) * 100);
  const pass = pct >= MERIT_EXAM.passingScore;
  state.meritPassed = pass;
  state.meritScore = pct;
  state.examFinished = true;
  if (pass && !state.meritDate) {
    state.meritDate = new Date().toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' });
  }
  saveState();
  renderExamResult(pct, pass);
}

function renderExamResult(pct, pass) {
  document.getElementById('view-exam').innerHTML = `
    <div class="exam-view">
      <div class="exam-result-card">
        <div class="result-icon">${pass ? '🏆' : '📊'}</div>
        <div class="result-score ${pass ? 'pass' : 'fail'}">${pct}%</div>
        <div class="result-label">${pass ? 'Merit Examination Passed' : 'Below Passing Threshold'}</div>
        <p class="result-desc">${pass
          ? `Outstanding. You scored ${pct}% on the comprehensive Circle Merit Examination — above the 85% pass threshold. Your Certificate of Merit has been issued.`
          : `You scored ${pct}%. The pass threshold is ${MERIT_EXAM.passingScore}%. Review the material and try again.`
        }</p>
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
          ${pass
            ? `<button onclick="showView('certificates')" class="start-btn">View Certificate of Merit</button>`
            : `<button onclick="startExam()" class="start-btn">Retake Examination</button>`
          }
          <button onclick="showView('dashboard')" class="btn btn-ghost" style="padding:14px 32px">Back to Dashboard</button>
        </div>
      </div>
    </div>
  `;
}

// ── CERTIFICATES ───────────────────────────────────────────
function renderCertificates() {
  const allDone = state.completedLevels.size === LEVELS.length;
  const meritPass = state.meritPassed;

  document.getElementById('view-certificates').innerHTML = `
    <div class="certs-view">
      <h2>Your Certificates</h2>
      <p class="sub">Complete all 30 levels for Completion · Pass the Merit Examination for Merit</p>
      <div class="cert-grid">
        <div class="cert-card completion">
          <span class="cert-card-icon">🎓</span>
          <h3>Certificate of Completion</h3>
          <p>Awarded upon completing all 30 levels across all 6 tiers of the Circle curriculum — from Beginner through Master.</p>
          <div class="cert-req ${allDone ? 'met' : ''}">
            <div class="cert-req-dot"></div>
            ${allDone
              ? `All 30 levels completed — Issued ${state.completionDate || 'today'}`
              : `${state.completedLevels.size} / 30 levels completed`
            }
          </div>
          <button class="view-cert-btn" onclick="showCertificate('completion')" ${!allDone ? 'disabled' : ''}>
            ${allDone ? 'View & Download' : 'Locked'}
          </button>
        </div>
        <div class="cert-card merit">
          <span class="cert-card-icon">⭐</span>
          <h3>Certificate of Merit</h3>
          <p>Awarded for scoring 85%+ on the comprehensive Merit Examination testing all 12 modules and 30 levels in depth.</p>
          <div class="cert-req ${meritPass ? 'met' : ''}">
            <div class="cert-req-dot"></div>
            ${meritPass
              ? `Merit Exam passed — Score: ${state.meritScore}% — Issued ${state.meritDate || 'today'}`
              : `Pass the Merit Examination (85%+) to unlock`
            }
          </div>
          <button class="view-cert-btn merit-btn" onclick="showCertificate('merit')" ${!meritPass ? 'disabled' : ''}>
            ${meritPass ? 'View & Download' : 'Locked — Take the Exam'}
          </button>
        </div>
      </div>
      <div id="cert-display-area"></div>
    </div>
  `;
}

function showCertificate(type) {
  const area = document.getElementById('cert-display-area');
  const isCompletion = type === 'completion';
  const date = isCompletion
    ? (state.completionDate || new Date().toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'}))
    : (state.meritDate || new Date().toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'}));
  const name = 'Circle Graduate';

  area.innerHTML = `
    <div class="cert-display-wrap">
      <div class="cert-actions">
        <button class="cert-action-btn primary" onclick="downloadCertificate('${type}')">⬇ Download PNG</button>
        <button class="cert-action-btn" onclick="window.print()">🖨 Print</button>
      </div>
      <canvas id="cert-canvas"></canvas>
      ${!isCompletion ? `
        <div style="margin-top:16px;text-align:center;font-size:13px;color:var(--muted)">
          Score: <strong style="color:var(--cyan)">${state.meritScore}%</strong> · Issued: ${date}
        </div>` : ''}
    </div>
  `;

  const canvas = document.getElementById('cert-canvas');
  CertificateGenerator.generate(canvas, type, name, date, state.meritScore);
  area.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function downloadCertificate(type) {
  const canvas = document.getElementById('cert-canvas');
  if (!canvas) { showCertificate(type); return; }
  CertificateGenerator.download(canvas, `circle-certificate-${type}.png`);
}

// ── INIT ───────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  showView('dashboard');
});

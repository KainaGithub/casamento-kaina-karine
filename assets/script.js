(() => {
  'use strict';

  const STORAGE_KEY = 'ccwedding_kaina_karine_v1';

  /* ---------------------------------------------------------------- */
  /* Default data (used only on first visit, before anything is saved) */
  /* ---------------------------------------------------------------- */

  const defaultState = () => ({
    simple: {},
    favorites: [],
    tables: {
      casamento: [
        row({ item: 'Cerimônia (cartório / celebrante)', fornecedor: '', orcado: 0, gasto: 0, status: 'A pesquisar', obs: '' }),
        row({ item: 'Buffet / catering', fornecedor: '', orcado: 0, gasto: 0, status: 'A pesquisar', obs: '' }),
        row({ item: 'Bolo e mesa de doces', fornecedor: '', orcado: 0, gasto: 0, status: 'A pesquisar', obs: '' }),
        row({ item: 'Decoração e flores', fornecedor: '', orcado: 0, gasto: 0, status: 'A pesquisar', obs: '' }),
        row({ item: 'Fotografia', fornecedor: '', orcado: 0, gasto: 0, status: 'A pesquisar', obs: '' }),
        row({ item: 'Vídeo / filmagem', fornecedor: '', orcado: 0, gasto: 0, status: 'A pesquisar', obs: '' }),
        row({ item: 'Música (DJ / banda)', fornecedor: '', orcado: 0, gasto: 0, status: 'A pesquisar', obs: '' }),
        row({ item: 'Vestido da noiva', fornecedor: '', orcado: 0, gasto: 0, status: 'A pesquisar', obs: '' }),
        row({ item: 'Traje do noivo', fornecedor: '', orcado: 0, gasto: 0, status: 'A pesquisar', obs: '' }),
        row({ item: 'Alianças', fornecedor: '', orcado: 0, gasto: 0, status: 'A pesquisar', obs: '' }),
        row({ item: 'Convites (impressos/digitais)', fornecedor: '', orcado: 0, gasto: 0, status: 'A pesquisar', obs: '' }),
        row({ item: 'Cerimonial / assessoria', fornecedor: '', orcado: 0, gasto: 0, status: 'A pesquisar', obs: '' }),
        row({ item: 'Cabelo e maquiagem', fornecedor: '', orcado: 0, gasto: 0, status: 'A pesquisar', obs: '' }),
        row({ item: 'Carro / transporte dos noivos', fornecedor: '', orcado: 0, gasto: 0, status: 'A pesquisar', obs: '' }),
        row({ item: 'Lembrancinhas', fornecedor: '', orcado: 0, gasto: 0, status: 'A pesquisar', obs: '' }),
        row({ item: 'Som e iluminação', fornecedor: '', orcado: 0, gasto: 0, status: 'A pesquisar', obs: '' }),
        row({ item: 'Locação (mesas, cadeiras, tenda)', fornecedor: '', orcado: 0, gasto: 0, status: 'A pesquisar', obs: '' }),
        row({ item: 'Bar / open bar / bebidas', fornecedor: '', orcado: 0, gasto: 0, status: 'A pesquisar', obs: '' }),
        row({ item: 'Documentação civil (certidões)', fornecedor: '', orcado: 0, gasto: 0, status: 'A pesquisar', obs: '' }),
        row({ item: 'Segurança / estacionamento / valet', fornecedor: '', orcado: 0, gasto: 0, status: 'A pesquisar', obs: '' }),
        row({ item: 'Reserva para imprevistos (~10%)', fornecedor: '', orcado: 0, gasto: 0, status: 'A pesquisar', obs: '' }),
      ],
      padrinhos: [row({ nome: '', papel: 'Padrinho', lado: 'Noivo', contato: '' }), row({ nome: '', papel: 'Madrinha', lado: 'Noiva', contato: '' }), row({ nome: '', papel: 'Padrinho', lado: 'Ambos', contato: '' })],
      convidados: Array.from({ length: 6 }, () => row({ nome: '', lado: 'Noivo', confirmado: 'Pendente', acompanhantes: 0, obs: '' })),
      cronograma: [
        row({ horario: '14:00', evento: 'Preparação da noiva' }),
        row({ horario: '16:00', evento: 'Cerimônia' }),
        row({ horario: '17:30', evento: 'Recepção / coquetel' }),
        row({ horario: '19:00', evento: 'Jantar' }),
        row({ horario: '20:30', evento: 'Primeira dança' }),
        row({ horario: '21:00', evento: 'Festa' }),
        row({ horario: '00:00', evento: 'Encerramento' }),
      ],
      rooms: {
        sala: ['Sofá', 'Rack / painel de TV', 'Televisão', 'Mesa de centro', 'Tapete', 'Cortinas', 'Poltrona', 'Quadros e decoração'].map(item => row({ item, loja: '', orcado: 0, gasto: 0, status: 'A comprar', obs: '' })),
        quarto: ['Cama + colchão', 'Guarda-roupa', 'Criado-mudo', 'Cômoda', 'Roupa de cama', 'Cortinas do quarto'].map(item => row({ item, loja: '', orcado: 0, gasto: 0, status: 'A comprar', obs: '' })),
        cozinha: ['Fogão', 'Geladeira', 'Micro-ondas', 'Armários planejados', 'Mesa de jantar + cadeiras', 'Panelas e utensílios', 'Filtro / purificador de água'].map(item => row({ item, loja: '', orcado: 0, gasto: 0, status: 'A comprar', obs: '' })),
        banheiro: ['Armário / gabinete', 'Box de vidro', 'Espelho', 'Toalhas e tapetes'].map(item => row({ item, loja: '', orcado: 0, gasto: 0, status: 'A comprar', obs: '' })),
        lavanderia: ['Máquina de lavar', 'Tanque', 'Ferro de passar', 'Varal'].map(item => row({ item, loja: '', orcado: 0, gasto: 0, status: 'A comprar', obs: '' })),
        geral: ['Mudança / frete', 'Depósito caução / entrada do imóvel', 'Condomínio inicial', 'Instalação de internet / TV', 'Instalação de gás', 'Seguro residencial', 'Chaveiro / troca de fechaduras', 'Eletros pequenos (liquidificador, cafeteira...)'].map(item => row({ item, loja: '', orcado: 0, gasto: 0, status: 'A comprar', obs: '' })),
      },
      luademel: [
        row({ item: 'Passagens', orcado: 0, gasto: 0, status: 'A pesquisar', obs: '' }),
        row({ item: 'Hospedagem', orcado: 0, gasto: 0, status: 'A pesquisar', obs: '' }),
        row({ item: 'Passeios e excursões', orcado: 0, gasto: 0, status: 'A pesquisar', obs: '' }),
        row({ item: 'Alimentação', orcado: 0, gasto: 0, status: 'A pesquisar', obs: '' }),
        row({ item: 'Taxas (ambiental, embarque etc.)', orcado: 0, gasto: 0, status: 'A pesquisar', obs: '' }),
        row({ item: 'Seguro viagem', orcado: 0, gasto: 0, status: 'A pesquisar', obs: '' }),
      ],
      presentes: {
        cozinha: [
          gift('Jogo de panelas (5 peças)', 299.9), gift('Liquidificador', 149.9),
          gift('Fritadeira elétrica (airfryer)', 349.9), gift('Faqueiro (24 peças)', 129.9),
          gift('Aparelho de jantar (20 peças)', 249.9), gift('Jogo de facas', 99.9),
        ],
        quarto: [
          gift('Jogo de cama casal/queen', 189.9), gift('Travesseiros (par)', 89.9),
          gift('Edredom casal', 219.9),
        ],
        sala: [
          gift('Jogo de toalhas de banho', 119.9), gift('Tapete para sala', 179.9),
          gift('Kit de quadros decorativos', 99.9),
        ],
        eletro: [
          gift('Cafeteira elétrica', 179.9), gift('Aspirador de pó', 349.9),
          gift('Sanduicheira / grill elétrico', 99.9), gift('Ferro de passar a vapor', 89.9),
        ],
        utilidades: [
          gift('Jogo de copos / taças', 69.9), gift('Kit potes herméticos organizadores', 79.9),
          gift('Jogo de panos de cozinha + luvas', 59.9),
        ],
      },
    },
  });

  function gift(item, preco) { return row({ item, preco, status: 'Disponível', quemDeu: '', obs: '' }); }

  function row(obj) { return obj; }

  const ROOM_LABELS = {
    sala: '🛋️ Sala de estar', quarto: '🛏️ Quarto', cozinha: '🍳 Cozinha',
    banheiro: '🛁 Banheiro', lavanderia: '🧺 Área de serviço', geral: '📦 Mudança e itens gerais',
  };

  const GIFT_LABELS = {
    cozinha: '🍳 Cozinha', quarto: '🛏️ Quarto', sala: '🛋️ Sala e decoração',
    eletro: '🔌 Eletrodomésticos', utilidades: '🧺 Utilidades',
  };

  const DESTINATIONS = [
    { id: 'noronha', name: 'Fernando de Noronha', state: 'PE', emoji: '🐬', profile: 'Praias paradisíacas e mergulho', cost: 'R$ 8.000 – 20.000', best: 'Set a mar (mar calmo) / ago a dez (visibilidade)', gradient: 'linear-gradient(135deg,#3fa7d6,#1c6e8c)' },
    { id: 'jeri', name: 'Jericoacoara', state: 'CE', emoji: '🏜️', profile: 'Dunas, pôr do sol e vento', cost: 'R$ 4.000 – 8.000', best: 'Jun a dez (vento forte)', gradient: 'linear-gradient(135deg,#f2b56b,#c97b3f)' },
    { id: 'porto-galinhas', name: 'Porto de Galinhas', state: 'PE', emoji: '🌊', profile: 'Piscinas naturais, bom custo-benefício', cost: 'R$ 3.000 – 6.000', best: 'Set a mar', gradient: 'linear-gradient(135deg,#4fc3a1,#2e8b74)' },
    { id: 'buzios', name: 'Búzios', state: 'RJ', emoji: '⛵', profile: 'Praias charmosas e vida noturna', cost: 'R$ 3.500 – 7.000', best: 'Dez a mar / set a nov', gradient: 'linear-gradient(135deg,#5b8fd6,#365d94)' },
    { id: 'gramado', name: 'Gramado & Canela', state: 'RS', emoji: '🍷', profile: 'Clima frio, gastronomia e romantismo', cost: 'R$ 4.000 – 7.500', best: 'Jun a ago (frio) ou dez (Natal Luz)', gradient: 'linear-gradient(135deg,#8a6bb0,#5a4380)' },
    { id: 'chapada', name: 'Chapada Diamantina', state: 'BA', emoji: '🏞️', profile: 'Trilhas, cachoeiras e natureza', cost: 'R$ 3.000 – 6.000', best: 'Abr a set (seca)', gradient: 'linear-gradient(135deg,#7fae5a,#4f7a37)' },
    { id: 'bonito', name: 'Bonito', state: 'MS', emoji: '🐠', profile: 'Ecoturismo e águas cristalinas', cost: 'R$ 4.500 – 8.000', best: 'Abr a set (águas mais claras)', gradient: 'linear-gradient(135deg,#3fbfb0,#248477)' },
    { id: 'trancoso', name: 'Trancoso / Arraial d\'Ajuda', state: 'BA', emoji: '🌅', profile: 'Praias sofisticadas, Quadrado charmoso', cost: 'R$ 5.000 – 10.000', best: 'Set a mar', gradient: 'linear-gradient(135deg,#e08a9b,#a84f66)' },
    { id: 'maragogi', name: 'Maragogi', state: 'AL', emoji: '🐚', profile: '"Caribe brasileiro", ótimo custo-benefício', cost: 'R$ 3.000 – 6.000', best: 'Set a mar (maré baixa p/ piscinas naturais)', gradient: 'linear-gradient(135deg,#54c1d6,#2a8fa3)' },
    { id: 'campos-jordao', name: 'Campos do Jordão', state: 'SP', emoji: '🏔️', profile: '"Suíça brasileira", frio e chalés', cost: 'R$ 2.500 – 5.000', best: 'Jun a ago (inverno)', gradient: 'linear-gradient(135deg,#9aa5b1,#5f6b78)' },
  ];

  /* ---------------------------------------------------------------- */
  /* State load / save                                                */
  /* ---------------------------------------------------------------- */

  let state = loadState();

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return normalize(JSON.parse(raw));
    } catch (e) { /* ignore corrupted data */ }
    return defaultState();
  }

  function normalize(data) {
    const d = defaultState();
    return {
      simple: { ...d.simple, ...(data.simple || {}) },
      favorites: Array.isArray(data.favorites) ? data.favorites : [],
      tables: {
        casamento: data.tables?.casamento || d.tables.casamento,
        padrinhos: data.tables?.padrinhos || d.tables.padrinhos,
        convidados: data.tables?.convidados || d.tables.convidados,
        cronograma: data.tables?.cronograma || d.tables.cronograma,
        luademel: data.tables?.luademel || d.tables.luademel,
        rooms: { ...d.tables.rooms, ...(data.tables?.rooms || {}) },
        presentes: { ...d.tables.presentes, ...(data.tables?.presentes || {}) },
      },
    };
  }

  let saveTimer = null;
  function saveState() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => localStorage.setItem(STORAGE_KEY, JSON.stringify(state)), 250);
  }

  const money = n => (Number(n) || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  /* ---------------------------------------------------------------- */
  /* Generic editable table rendering                                  */
  /* ---------------------------------------------------------------- */

  function buildCell(colDef, value, onChange, r) {
    const td = document.createElement('td');
    if (colDef.cls) td.className = colDef.cls;

    if (colDef.type === 'action') {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'magalu-link-btn';
      btn.textContent = colDef.label;
      btn.title = 'Buscar este item no Magazine Luiza';
      btn.addEventListener('click', () => colDef.onClick(r));
      td.appendChild(btn);
      return td;
    }

    if (colDef.type === 'select') {
      const sel = document.createElement('select');
      sel.className = 'status-select';
      colDef.options.forEach(opt => {
        const o = document.createElement('option');
        o.value = opt; o.textContent = opt;
        if (opt === value) o.selected = true;
        sel.appendChild(o);
      });
      applyStatusClass(sel, value);
      sel.addEventListener('change', () => { onChange(sel.value); applyStatusClass(sel, sel.value); });
      td.appendChild(sel);
    } else {
      const input = document.createElement('input');
      input.type = colDef.type === 'number' ? 'number' : (colDef.type === 'time' ? 'time' : 'text');
      if (colDef.type === 'number') input.step = '0.01';
      input.value = value ?? '';
      input.addEventListener('input', () => onChange(colDef.type === 'number' ? (parseFloat(input.value) || 0) : input.value));
      td.appendChild(input);
    }
    return td;
  }

  function applyStatusClass(sel, value) {
    sel.className = 'status-select status-' + String(value).replace(/\s+/g, '-');
  }

  function renderTable(tbodyId, columns, rows, onDelete, onAnyChange) {
    const tbody = document.getElementById(tbodyId);
    tbody.innerHTML = '';
    rows.forEach((r, idx) => {
      const tr = document.createElement('tr');
      columns.forEach(col => {
        tr.appendChild(buildCell(col, r[col.key], val => { r[col.key] = val; onAnyChange && onAnyChange(); saveState(); }, r));
      });
      const tdDel = document.createElement('td');
      tdDel.className = 'col-del';
      const btn = document.createElement('button');
      btn.className = 'row-del-btn'; btn.type = 'button'; btn.title = 'Remover';
      btn.textContent = '✕';
      btn.addEventListener('click', () => { rows.splice(idx, 1); onDelete(); });
      tdDel.appendChild(btn);
      tr.appendChild(tdDel);
      tbody.appendChild(tr);
    });
  }

  const COLS = {
    casamento: [
      { key: 'item', cls: 'col-item' }, { key: 'fornecedor' },
      { key: 'orcado', type: 'number', cls: 'col-money' }, { key: 'gasto', type: 'number', cls: 'col-money' },
      { key: 'status', type: 'select', options: ['A pesquisar', 'Contratado', 'Pago', 'Cancelado'] },
      { key: 'obs', cls: 'col-obs' },
    ],
    padrinhos: [
      { key: 'nome' }, { key: 'papel', type: 'select', options: ['Padrinho', 'Madrinha', 'Dama', 'Pajem'] },
      { key: 'lado', type: 'select', options: ['Noivo', 'Noiva', 'Ambos'] }, { key: 'contato' },
    ],
    convidados: [
      { key: 'nome' }, { key: 'lado', type: 'select', options: ['Noivo', 'Noiva'] },
      { key: 'confirmado', type: 'select', options: ['Pendente', 'Confirmado', 'Recusado'] },
      { key: 'acompanhantes', type: 'number' }, { key: 'obs', cls: 'col-obs' },
    ],
    cronograma: [{ key: 'horario', type: 'time', cls: 'col-time' }, { key: 'evento' }],
    room: [
      { key: 'item', cls: 'col-item' }, { key: 'loja' },
      { key: 'orcado', type: 'number', cls: 'col-money' }, { key: 'gasto', type: 'number', cls: 'col-money' },
      { key: 'status', type: 'select', options: ['A comprar', 'Comprado', 'Entregue', 'Montado'] },
      { key: 'obs', cls: 'col-obs' },
    ],
    luademel: [
      { key: 'item', cls: 'col-item' },
      { key: 'orcado', type: 'number', cls: 'col-money' }, { key: 'gasto', type: 'number', cls: 'col-money' },
      { key: 'status', type: 'select', options: ['A pesquisar', 'Reservado', 'Pago'] },
      { key: 'obs', cls: 'col-obs' },
    ],
    gift: [
      { key: 'item', cls: 'col-item' }, { key: 'preco', type: 'number', cls: 'col-money' },
      { key: 'status', type: 'select', options: ['Disponível', 'Reservado', 'Recebido'] },
      { key: 'quemDeu' }, { key: 'obs', cls: 'col-obs' },
      { type: 'action', cls: 'col-link', label: '🔎 Magalu', onClick: r => window.open(`https://www.magazineluiza.com.br/busca/${encodeURIComponent(r.item || '')}/`, '_blank', 'noopener') },
    ],
  };

  function emptyRowFor(tableKey) {
    const blanks = {
      casamento: { item: '', fornecedor: '', orcado: 0, gasto: 0, status: 'A pesquisar', obs: '' },
      padrinhos: { nome: '', papel: 'Padrinho', lado: 'Noivo', contato: '' },
      convidados: { nome: '', lado: 'Noivo', confirmado: 'Pendente', acompanhantes: 0, obs: '' },
      cronograma: { horario: '', evento: '' },
      room: { item: '', loja: '', orcado: 0, gasto: 0, status: 'A comprar', obs: '' },
      luademel: { item: '', orcado: 0, gasto: 0, status: 'A pesquisar', obs: '' },
      gift: { item: '', preco: 50, status: 'Disponível', quemDeu: '', obs: '' },
    };
    return { ...blanks[tableKey] };
  }

  function renderCasamento() {
    renderTable('body-casamento', COLS.casamento, state.tables.casamento, () => { renderCasamento(); }, recomputeCasamento);
    recomputeCasamento();
  }
  function renderPadrinhos() { renderTable('body-padrinhos', COLS.padrinhos, state.tables.padrinhos, renderPadrinhos, () => saveState()); }
  function renderConvidados() { renderTable('body-convidados', COLS.convidados, state.tables.convidados, renderConvidados, () => saveState()); }
  function renderCronograma() { renderTable('body-cronograma', COLS.cronograma, state.tables.cronograma, renderCronograma, () => saveState()); }
  function renderLuademel() {
    renderTable('body-luademel', COLS.luademel, state.tables.luademel, () => { renderLuademel(); }, recomputeLuademel);
    recomputeLuademel();
  }

  function recomputeCasamento() {
    const rows = state.tables.casamento;
    const totalOrcado = rows.reduce((s, r) => s + (Number(r.orcado) || 0), 0);
    const totalGasto = rows.reduce((s, r) => s + (Number(r.gasto) || 0), 0);
    updateFoot('table-casamento', totalOrcado, totalGasto);
    updateSummary('casamento', totalOrcado, totalGasto);
    saveState();
  }

  function recomputeLuademel() {
    const rows = state.tables.luademel;
    const totalOrcado = rows.reduce((s, r) => s + (Number(r.orcado) || 0), 0);
    const totalGasto = rows.reduce((s, r) => s + (Number(r.gasto) || 0), 0);
    updateFoot('table-luademel', totalOrcado, totalGasto);
    updateSummary('luademel', totalOrcado, totalGasto);
    saveState();
  }

  function recomputeCasa() {
    let totalOrcado = 0, totalGasto = 0;
    Object.keys(state.tables.rooms).forEach(roomKey => {
      const rows = state.tables.rooms[roomKey];
      const o = rows.reduce((s, r) => s + (Number(r.orcado) || 0), 0);
      const g = rows.reduce((s, r) => s + (Number(r.gasto) || 0), 0);
      totalOrcado += o; totalGasto += g;
      const subtotalEl = document.getElementById('subtotal-' + roomKey);
      if (subtotalEl) subtotalEl.textContent = `${money(g)} / ${money(o)}`;
    });
    updateSummary('casa', totalOrcado, totalGasto);
    saveState();
  }

  function updateFoot(tableId, orcado, gasto) {
    const table = document.getElementById(tableId);
    if (!table) return;
    const footOrcado = table.querySelector('[data-foot="orcado"]');
    const footGasto = table.querySelector('[data-foot="gasto"]');
    if (footOrcado) footOrcado.textContent = money(orcado);
    if (footGasto) footGasto.textContent = money(gasto);
  }

  function updateSummary(key, orcado, gasto) {
    const strip = document.querySelector(`.summary-strip[data-summary="${key}"]`);
    if (!strip) return;
    const restante = orcado - gasto;
    const pct = orcado > 0 ? Math.min(100, Math.round((gasto / orcado) * 100)) : 0;
    strip.querySelector('[data-sum="orcado"]').textContent = money(orcado);
    strip.querySelector('[data-sum="gasto"]').textContent = money(gasto);
    strip.querySelector('[data-sum="restante"]').textContent = money(restante);
    strip.querySelector('[data-sum="barra"]').style.width = pct + '%';
    strip.querySelector('[data-sum="percentual"]').textContent = pct + '%';
  }

  /* ---------------------------------------------------------------- */
  /* Rooms (Nossa Casa)                                                */
  /* ---------------------------------------------------------------- */

  function renderRooms() {
    const container = document.getElementById('rooms-container');
    container.innerHTML = '';
    Object.keys(state.tables.rooms).forEach(roomKey => {
      const block = document.createElement('div');
      block.className = 'room-block';
      block.innerHTML = `
        <h3 class="room-title">${ROOM_LABELS[roomKey] || roomKey} <span class="room-subtotal" id="subtotal-${roomKey}"></span></h3>
        <div class="table-wrap">
          <table class="data-table">
            <thead><tr>
              <th class="col-item">Item</th><th>Loja</th>
              <th class="col-money">Orçado (R$)</th><th class="col-money">Gasto (R$)</th>
              <th>Status</th><th class="col-obs">Observações</th><th class="col-del"></th>
            </tr></thead>
            <tbody id="body-room-${roomKey}"></tbody>
          </table>
        </div>
        <button class="add-row-btn" data-add-room="${roomKey}">+ adicionar item</button>
      `;
      container.appendChild(block);
      renderRoomTable(roomKey);
    });

    container.querySelectorAll('[data-add-room]').forEach(btn => {
      btn.addEventListener('click', () => {
        const roomKey = btn.dataset.addRoom;
        state.tables.rooms[roomKey].push(emptyRowFor('room'));
        renderRoomTable(roomKey);
      });
    });
  }

  function renderRoomTable(roomKey) {
    renderTable('body-room-' + roomKey, COLS.room, state.tables.rooms[roomKey], () => renderRoomTable(roomKey), recomputeCasa);
    recomputeCasa();
  }

  /* ---------------------------------------------------------------- */
  /* Presentes                                                        */
  /* ---------------------------------------------------------------- */

  function renderGifts() {
    const container = document.getElementById('gifts-container');
    container.innerHTML = '';
    Object.keys(state.tables.presentes).forEach(catKey => {
      const block = document.createElement('div');
      block.className = 'room-block';
      block.innerHTML = `
        <h3 class="room-title accent-mauve">${GIFT_LABELS[catKey] || catKey}</h3>
        <div class="table-wrap">
          <table class="data-table">
            <thead><tr>
              <th class="col-item">Item</th><th class="col-money">Preço estimado (R$)</th>
              <th>Status</th><th>Quem deu / reservou</th><th class="col-obs">Observações</th>
              <th class="col-link"></th><th class="col-del"></th>
            </tr></thead>
            <tbody id="body-gift-${catKey}"></tbody>
          </table>
        </div>
        <button class="add-row-btn" data-add-gift="${catKey}">+ adicionar presente</button>
      `;
      container.appendChild(block);
      renderGiftCategory(catKey);
    });

    container.querySelectorAll('[data-add-gift]').forEach(btn => {
      btn.addEventListener('click', () => {
        const catKey = btn.dataset.addGift;
        state.tables.presentes[catKey].push(emptyRowFor('gift'));
        renderGiftCategory(catKey);
      });
    });
  }

  function renderGiftCategory(catKey) {
    renderTable('body-gift-' + catKey, COLS.gift, state.tables.presentes[catKey], () => renderGiftCategory(catKey), recomputeGifts);
    recomputeGifts();
  }

  function recomputeGifts() {
    let total = 0, valor = 0, recebidos = 0;
    Object.values(state.tables.presentes).forEach(rows => {
      rows.forEach(r => {
        total++;
        valor += Number(r.preco) || 0;
        if (r.status === 'Recebido') recebidos++;
      });
    });
    const pct = total > 0 ? Math.round((recebidos / total) * 100) : 0;
    document.getElementById('gift-total-itens').textContent = total;
    document.getElementById('gift-valor-total').textContent = money(valor);
    document.getElementById('gift-recebidos').textContent = recebidos;
    document.getElementById('gift-progress-fill').style.width = pct + '%';
    document.getElementById('gift-progress-pct').textContent = pct + '%';
    saveState();
  }

  /* ---------------------------------------------------------------- */
  /* Honeymoon destinations                                           */
  /* ---------------------------------------------------------------- */

  function renderDestinations() {
    const grid = document.getElementById('dest-grid');
    grid.innerHTML = '';
    DESTINATIONS.forEach(d => {
      const card = document.createElement('article');
      card.className = 'dest-card';
      const isFav = state.favorites.includes(d.id);
      card.innerHTML = `
        <div class="dest-banner" style="background:${d.gradient}">${d.emoji}</div>
        <div class="dest-body">
          <span class="dest-state">${d.state}</span>
          <h3>${d.name}</h3>
          <p class="dest-desc">${d.profile}</p>
          <div class="dest-meta"><b>Custo estimado:</b> ${d.cost} (casal)</div>
          <div class="dest-meta"><b>Melhor época:</b> ${d.best}</div>
          <button class="dest-fav ${isFav ? 'is-fav' : ''}" data-fav="${d.id}">${isFav ? '❤ Favoritado' : '♡ Favoritar'}</button>
        </div>`;
      grid.appendChild(card);
    });
    grid.querySelectorAll('[data-fav]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.fav;
        const i = state.favorites.indexOf(id);
        if (i >= 0) state.favorites.splice(i, 1); else state.favorites.push(id);
        saveState();
        renderDestinations();
      });
    });

    const body = document.getElementById('body-comparativo');
    body.innerHTML = '';
    DESTINATIONS.forEach(d => {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${d.emoji} ${d.name}</td><td>${d.state}</td><td>${d.profile}</td><td class="col-money">${d.cost}</td><td>${d.best}</td>`;
      body.appendChild(tr);
    });
  }

  /* ---------------------------------------------------------------- */
  /* Simple fields (invite) + countdown                                */
  /* ---------------------------------------------------------------- */

  function bindSimpleFields() {
    document.querySelectorAll('[data-store]').forEach(el => {
      const key = el.dataset.store;
      if (state.simple[key] !== undefined) el.value = state.simple[key];
      el.addEventListener('input', () => {
        state.simple[key] = el.value;
        saveState();
        if (key === 'casamento.data' || key === 'casamento.horario') updateCountdown();
      });
    });
  }

  let countdownTimer = null;
  function updateCountdown() {
    const dataStr = state.simple['casamento.data'];
    const horaStr = state.simple['casamento.horario'] || '00:00';
    const els = {
      dias: document.getElementById('cd-dias'), horas: document.getElementById('cd-horas'),
      min: document.getElementById('cd-min'), seg: document.getElementById('cd-seg'),
    };
    clearInterval(countdownTimer);
    if (!dataStr) { Object.values(els).forEach(e => e.textContent = '--'); return; }

    const target = new Date(`${dataStr}T${horaStr}:00`);
    const tick = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) {
        els.dias.textContent = '🎉'; els.horas.textContent = ''; els.min.textContent = ''; els.seg.textContent = '';
        clearInterval(countdownTimer);
        return;
      }
      const s = Math.floor(diff / 1000);
      els.dias.textContent = Math.floor(s / 86400);
      els.horas.textContent = String(Math.floor((s % 86400) / 3600)).padStart(2, '0');
      els.min.textContent = String(Math.floor((s % 3600) / 60)).padStart(2, '0');
      els.seg.textContent = String(s % 60).padStart(2, '0');
    };
    tick();
    countdownTimer = setInterval(tick, 1000);
  }

  /* ---------------------------------------------------------------- */
  /* Tabs                                                              */
  /* ---------------------------------------------------------------- */

  function bindTabs() {
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.dataset.tab;
        buttons.forEach(b => { b.classList.toggle('is-active', b === btn); b.setAttribute('aria-selected', b === btn); });
        document.querySelectorAll('.tab-panel').forEach(p => p.classList.toggle('is-active', p.id === 'panel-' + tab));
        localStorage.setItem('ccwedding_active_tab', tab);
      });
    });
    const savedTab = localStorage.getItem('ccwedding_active_tab');
    if (savedTab) document.querySelector(`[data-tab="${savedTab}"]`)?.click();
  }

  /* ---------------------------------------------------------------- */
  /* Add-row buttons (static tables)                                  */
  /* ---------------------------------------------------------------- */

  function bindAddRowButtons() {
    document.querySelectorAll('[data-add-row]').forEach(btn => {
      btn.addEventListener('click', () => {
        const key = btn.dataset.addRow;
        const renderers = { casamento: renderCasamento, padrinhos: renderPadrinhos, convidados: renderConvidados, cronograma: renderCronograma, luademel: renderLuademel };
        state.tables[key].push(emptyRowFor(key));
        renderers[key]();
      });
    });
  }

  /* ---------------------------------------------------------------- */
  /* Print / Export / Import                                          */
  /* ---------------------------------------------------------------- */

  function bindActions() {
    document.getElementById('btn-print-invite').addEventListener('click', () => window.print());

    document.getElementById('btn-export').addEventListener('click', () => {
      const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = 'backup-casamento-kaina-karine.json';
      document.body.appendChild(a); a.click(); a.remove();
      URL.revokeObjectURL(url);
    });

    document.getElementById('input-import').addEventListener('change', e => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          state = normalize(JSON.parse(reader.result));
          saveState();
          renderAll();
          alert('Backup importado com sucesso!');
        } catch (err) {
          alert('Não foi possível ler este arquivo de backup.');
        }
      };
      reader.readAsText(file);
      e.target.value = '';
    });
  }

  /* ---------------------------------------------------------------- */
  /* Init                                                              */
  /* ---------------------------------------------------------------- */

  function renderAll() {
    bindSimpleFields();
    updateCountdown();
    renderCasamento();
    renderPadrinhos();
    renderConvidados();
    renderCronograma();
    renderRooms();
    renderLuademel();
    renderDestinations();
    renderGifts();
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderAll();
    bindTabs();
    bindAddRowButtons();
    bindActions();
  });
})();

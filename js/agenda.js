// ============================================
// AGENDA - CALENDÁRIO INTERATIVO
// ============================================

// Eventos do clube (você pode editar esta lista)
const eventos = {
    // Formato: 'YYYY-MM-DD': [{ tipo: 'reuniao|acampamento|evento|campori', titulo: '', descricao: '', horario: '', local: '' }]
    
    // Janeiro 2025
    '2025-01-05': [{ tipo: 'reuniao', titulo: 'Reunião Dominical', descricao: 'Reunião regular do clube com atividades e especialidades.', horario: '09:00 - 12:00', local: 'Colégio Adventista do Bom Retiro' }],
    '2025-01-12': [{ tipo: 'reuniao', titulo: 'Reunião Dominical', descricao: 'Reunião regular do clube com atividades e especialidades.', horario: '09:00 - 12:00', local: 'Colégio Adventista do Bom Retiro' }],
    '2025-01-19': [{ tipo: 'reuniao', titulo: 'Reunião Dominical', descricao: 'Reunião regular do clube com atividades e especialidades.', horario: '09:00 - 12:00', local: 'Colégio Adventista do Bom Retiro' }],
    '2025-01-26': [{ tipo: 'reuniao', titulo: 'Reunião Dominical', descricao: 'Reunião regular do clube com atividades e especialidades.', horario: '09:00 - 12:00', local: 'Colégio Adventista do Bom Retiro' }],
    
    // Fevereiro 2025
    '2025-02-02': [{ tipo: 'reuniao', titulo: 'Reunião Dominical', descricao: 'Reunião regular do clube com atividades e especialidades.', horario: '09:00 - 12:00', local: 'Colégio Adventista do Bom Retiro' }],
    '2025-02-09': [{ tipo: 'reuniao', titulo: 'Reunião Dominical', descricao: 'Reunião regular do clube com atividades e especialidades.', horario: '09:00 - 12:00', local: 'Colégio Adventista do Bom Retiro' }],
    '2025-02-14': [{ tipo: 'acampamento', titulo: 'Acampamento de Verão', descricao: 'Acampamento de verão com atividades ao ar livre, trilhas e especialidades.', horario: 'Sexta a Domingo', local: 'A definir' }],
    '2025-02-15': [{ tipo: 'acampamento', titulo: 'Acampamento de Verão', descricao: 'Acampamento de verão com atividades ao ar livre, trilhas e especialidades.', horario: 'Sexta a Domingo', local: 'A definir' }],
    '2025-02-16': [{ tipo: 'acampamento', titulo: 'Acampamento de Verão', descricao: 'Acampamento de verão com atividades ao ar livre, trilhas e especialidades.', horario: 'Sexta a Domingo', local: 'A definir' }],
    '2025-02-23': [{ tipo: 'reuniao', titulo: 'Reunião Dominical', descricao: 'Reunião regular do clube com atividades e especialidades.', horario: '09:00 - 12:00', local: 'Colégio Adventista do Bom Retiro' }],
    
    // Março 2025
    '2025-03-02': [{ tipo: 'reuniao', titulo: 'Reunião Dominical', descricao: 'Reunião regular do clube com atividades e especialidades.', horario: '09:00 - 12:00', local: 'Colégio Adventista do Bom Retiro' }],
    '2025-03-09': [{ tipo: 'reuniao', titulo: 'Reunião Dominical', descricao: 'Reunião regular do clube com atividades e especialidades.', horario: '09:00 - 12:00', local: 'Colégio Adventista do Bom Retiro' }],
    '2025-03-16': [{ tipo: 'reuniao', titulo: 'Reunião Dominical', descricao: 'Reunião regular do clube com atividades e especialidades.', horario: '09:00 - 12:00', local: 'Colégio Adventista do Bom Retiro' }],
    '2025-03-21': [{ tipo: 'evento', titulo: 'Dia do Desbravador', descricao: 'Celebração especial do Dia do Desbravador com programação especial.', horario: '09:00 - 17:00', local: 'Igreja Central' }],
    '2025-03-23': [{ tipo: 'reuniao', titulo: 'Reunião Dominical', descricao: 'Reunião regular do clube com atividades e especialidades.', horario: '09:00 - 12:00', local: 'Colégio Adventista do Bom Retiro' }],
    '2025-03-30': [{ tipo: 'reuniao', titulo: 'Reunião Dominical', descricao: 'Reunião regular do clube com atividades e especialidades.', horario: '09:00 - 12:00', local: 'Colégio Adventista do Bom Retiro' }],
    
    // Abril 2025
    '2025-04-06': [{ tipo: 'reuniao', titulo: 'Reunião Dominical', descricao: 'Reunião regular do clube com atividades e especialidades.', horario: '09:00 - 12:00', local: 'Colégio Adventista do Bom Retiro' }],
    '2025-04-13': [{ tipo: 'reuniao', titulo: 'Reunião Dominical', descricao: 'Reunião regular do clube com atividades e especialidades.', horario: '09:00 - 12:00', local: 'Colégio Adventista do Bom Retiro' }],
    '2025-04-20': [{ tipo: 'reuniao', titulo: 'Reunião Dominical', descricao: 'Reunião regular do clube com atividades e especialidades.', horario: '09:00 - 12:00', local: 'Colégio Adventista do Bom Retiro' }],
    '2025-04-27': [{ tipo: 'reuniao', titulo: 'Reunião Dominical', descricao: 'Reunião regular do clube com atividades e especialidades.', horario: '09:00 - 12:00', local: 'Colégio Adventista do Bom Retiro' }],
    
    // Maio 2025
    '2025-05-04': [{ tipo: 'reuniao', titulo: 'Reunião Dominical', descricao: 'Reunião regular do clube com atividades e especialidades.', horario: '09:00 - 12:00', local: 'Colégio Adventista do Bom Retiro' }],
    '2025-05-11': [{ tipo: 'reuniao', titulo: 'Reunião Dominical', descricao: 'Reunião regular do clube com atividades e especialidades.', horario: '09:00 - 12:00', local: 'Colégio Adventista do Bom Retiro' },
                   { tipo: 'evento', titulo: 'Homenagem às Mães', descricao: 'Programação especial em homenagem ao Dia das Mães.', horario: '09:00 - 12:00', local: 'Colégio Adventista do Bom Retiro' }],
    '2025-05-18': [{ tipo: 'reuniao', titulo: 'Reunião Dominical', descricao: 'Reunião regular do clube com atividades e especialidades.', horario: '09:00 - 12:00', local: 'Colégio Adventista do Bom Retiro' }],
    '2025-05-25': [{ tipo: 'reuniao', titulo: 'Reunião Dominical', descricao: 'Reunião regular do clube com atividades e especialidades.', horario: '09:00 - 12:00', local: 'Colégio Adventista do Bom Retiro' }],
    
    // Junho 2025
    '2025-06-01': [{ tipo: 'reuniao', titulo: 'Reunião Dominical', descricao: 'Reunião regular do clube com atividades e especialidades.', horario: '09:00 - 12:00', local: 'Colégio Adventista do Bom Retiro' }],
    '2025-06-08': [{ tipo: 'reuniao', titulo: 'Reunião Dominical', descricao: 'Reunião regular do clube com atividades e especialidades.', horario: '09:00 - 12:00', local: 'Colégio Adventista do Bom Retiro' }],
    '2025-06-15': [{ tipo: 'reuniao', titulo: 'Reunião Dominical', descricao: 'Reunião regular do clube com atividades e especialidades.', horario: '09:00 - 12:00', local: 'Colégio Adventista do Bom Retiro' },
                   { tipo: 'evento', titulo: 'Homenagem aos Pais', descricao: 'Programação especial em homenagem ao Dia dos Pais.', horario: '09:00 - 12:00', local: 'Colégio Adventista do Bom Retiro' }],
    '2025-06-22': [{ tipo: 'reuniao', titulo: 'Reunião Dominical', descricao: 'Reunião regular do clube com atividades e especialidades.', horario: '09:00 - 12:00', local: 'Colégio Adventista do Bom Retiro' }],
    '2025-06-29': [{ tipo: 'reuniao', titulo: 'Reunião Dominical', descricao: 'Reunião regular do clube com atividades e especialidades.', horario: '09:00 - 12:00', local: 'Colégio Adventista do Bom Retiro' }],
    
    // Julho 2025
    '2025-07-06': [{ tipo: 'reuniao', titulo: 'Reunião Dominical', descricao: 'Reunião regular do clube com atividades e especialidades.', horario: '09:00 - 12:00', local: 'Colégio Adventista do Bom Retiro' }],
    '2025-07-11': [{ tipo: 'acampamento', titulo: 'Acampamento de Inverno', descricao: 'Acampamento de inverno com fogueira, histórias e especialidades.', horario: 'Sexta a Domingo', local: 'A definir' }],
    '2025-07-12': [{ tipo: 'acampamento', titulo: 'Acampamento de Inverno', descricao: 'Acampamento de inverno com fogueira, histórias e especialidades.', horario: 'Sexta a Domingo', local: 'A definir' }],
    '2025-07-13': [{ tipo: 'acampamento', titulo: 'Acampamento de Inverno', descricao: 'Acampamento de inverno com fogueira, histórias e especialidades.', horario: 'Sexta a Domingo', local: 'A definir' }],
    '2025-07-20': [{ tipo: 'reuniao', titulo: 'Reunião Dominical', descricao: 'Reunião regular do clube com atividades e especialidades.', horario: '09:00 - 12:00', local: 'Colégio Adventista do Bom Retiro' }],
    '2025-07-27': [{ tipo: 'reuniao', titulo: 'Reunião Dominical', descricao: 'Reunião regular do clube com atividades e especialidades.', horario: '09:00 - 12:00', local: 'Colégio Adventista do Bom Retiro' }],
    
    // Agosto 2025
    '2025-08-03': [{ tipo: 'reuniao', titulo: 'Reunião Dominical', descricao: 'Reunião regular do clube com atividades e especialidades.', horario: '09:00 - 12:00', local: 'Colégio Adventista do Bom Retiro' }],
    '2025-08-10': [{ tipo: 'reuniao', titulo: 'Reunião Dominical', descricao: 'Reunião regular do clube com atividades e especialidades.', horario: '09:00 - 12:00', local: 'Colégio Adventista do Bom Retiro' }],
    '2025-08-17': [{ tipo: 'reuniao', titulo: 'Reunião Dominical', descricao: 'Reunião regular do clube com atividades e especialidades.', horario: '09:00 - 12:00', local: 'Colégio Adventista do Bom Retiro' }],
    '2025-08-24': [{ tipo: 'reuniao', titulo: 'Reunião Dominical', descricao: 'Reunião regular do clube com atividades e especialidades.', horario: '09:00 - 12:00', local: 'Colégio Adventista do Bom Retiro' }],
    '2025-08-31': [{ tipo: 'reuniao', titulo: 'Reunião Dominical', descricao: 'Reunião regular do clube com atividades e especialidades.', horario: '09:00 - 12:00', local: 'Colégio Adventista do Bom Retiro' }],
    
    // Setembro 2025
    '2025-09-07': [{ tipo: 'evento', titulo: 'Desfile de 7 de Setembro', descricao: 'Participação no desfile cívico de 7 de Setembro.', horario: '08:00 - 12:00', local: 'Centro de Curitiba' }],
    '2025-09-14': [{ tipo: 'reuniao', titulo: 'Reunião Dominical', descricao: 'Reunião regular do clube com atividades e especialidades.', horario: '09:00 - 12:00', local: 'Colégio Adventista do Bom Retiro' }],
    '2025-09-21': [{ tipo: 'reuniao', titulo: 'Reunião Dominical', descricao: 'Reunião regular do clube com atividades e especialidades.', horario: '09:00 - 12:00', local: 'Colégio Adventista do Bom Retiro' }],
    '2025-09-28': [{ tipo: 'reuniao', titulo: 'Reunião Dominical', descricao: 'Reunião regular do clube com atividades e especialidades.', horario: '09:00 - 12:00', local: 'Colégio Adventista do Bom Retiro' }],
    
    // Outubro 2025
    '2025-10-05': [{ tipo: 'reuniao', titulo: 'Reunião Dominical', descricao: 'Reunião regular do clube com atividades e especialidades.', horario: '09:00 - 12:00', local: 'Colégio Adventista do Bom Retiro' }],
    '2025-10-11': [{ tipo: 'acampamento', titulo: 'Acampamento de Conselheiros', descricao: 'Acampamento para desbravadores que serão conselheiros.', horario: 'Sábado e Domingo', local: 'A definir' }],
    '2025-10-12': [{ tipo: 'acampamento', titulo: 'Acampamento de Conselheiros', descricao: 'Acampamento para desbravadores que serão conselheiros.', horario: 'Sábado e Domingo', local: 'A definir' }],
    '2025-10-19': [{ tipo: 'reuniao', titulo: 'Reunião Dominical', descricao: 'Reunião regular do clube com atividades e especialidades.', horario: '09:00 - 12:00', local: 'Colégio Adventista do Bom Retiro' }],
    '2025-10-25': [{ tipo: 'evento', titulo: 'Entrega de Classes', descricao: 'Cerimônia de entrega de classes e especialidades.', horario: '19:00 - 21:00', local: 'Igreja Central' }],
    '2025-10-26': [{ tipo: 'reuniao', titulo: 'Reunião Dominical', descricao: 'Reunião regular do clube com atividades e especialidades.', horario: '09:00 - 12:00', local: 'Colégio Adventista do Bom Retiro' }],
    
    // Novembro 2025
    '2025-11-02': [{ tipo: 'reuniao', titulo: 'Reunião Dominical', descricao: 'Reunião regular do clube com atividades e especialidades.', horario: '09:00 - 12:00', local: 'Colégio Adventista do Bom Retiro' }],
    '2025-11-09': [{ tipo: 'reuniao', titulo: 'Reunião Dominical', descricao: 'Reunião regular do clube com atividades e especialidades.', horario: '09:00 - 12:00', local: 'Colégio Adventista do Bom Retiro' }],
    '2025-11-16': [{ tipo: 'reuniao', titulo: 'Reunião Dominical', descricao: 'Reunião regular do clube com atividades e especialidades.', horario: '09:00 - 12:00', local: 'Colégio Adventista do Bom Retiro' }],
    '2025-11-20': [{ tipo: 'campori', titulo: 'Campori Valentes', descricao: 'Campori da ASP com o tema Valentes.', horario: 'Quinta a Domingo', local: 'A definir' }],
    '2025-11-21': [{ tipo: 'campori', titulo: 'Campori Valentes', descricao: 'Campori da ASP com o tema Valentes.', horario: 'Quinta a Domingo', local: 'A definir' }],
    '2025-11-22': [{ tipo: 'campori', titulo: 'Campori Valentes', descricao: 'Campori da ASP com o tema Valentes.', horario: 'Quinta a Domingo', local: 'A definir' }],
    '2025-11-23': [{ tipo: 'campori', titulo: 'Campori Valentes', descricao: 'Campori da ASP com o tema Valentes.', horario: 'Quinta a Domingo', local: 'A definir' }],
    '2025-11-30': [{ tipo: 'reuniao', titulo: 'Reunião Dominical', descricao: 'Reunião regular do clube com atividades e especialidades.', horario: '09:00 - 12:00', local: 'Colégio Adventista do Bom Retiro' }],
    
    // Dezembro 2025
    '2025-12-07': [{ tipo: 'reuniao', titulo: 'Reunião Dominical', descricao: 'Reunião regular do clube com atividades e especialidades.', horario: '09:00 - 12:00', local: 'Colégio Adventista do Bom Retiro' }],
    '2025-12-14': [{ tipo: 'evento', titulo: 'Confraternização de Fim de Ano', descricao: 'Festa de encerramento do ano com amigo secreto e atividades.', horario: '09:00 - 14:00', local: 'Colégio Adventista do Bom Retiro' }],
};

// Variáveis globais
let dataAtual = new Date();
let diaSelecionado = null;

// Nomes dos meses
const nomesMeses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

// Função para formatar data
function formatarData(ano, mes, dia) {
    return `${ano}-${String(mes + 1).padStart(2, '0')}-${String(dia).padStart(2, '0')}`;
}

// Função para renderizar o calendário
function renderizarCalendario() {
    const ano = dataAtual.getFullYear();
    const mes = dataAtual.getMonth();
    
    // Atualizar título
    document.getElementById('mesAnoAtual').textContent = `${nomesMeses[mes]} ${ano}`;
    
    // Primeiro dia do mês
    const primeiroDia = new Date(ano, mes, 1);
    const ultimoDia = new Date(ano, mes + 1, 0);
    
    // Dia da semana do primeiro dia (0 = Domingo)
    const diaSemanaInicio = primeiroDia.getDay();
    
    // Total de dias no mês
    const totalDias = ultimoDia.getDate();
    
    // Total de dias do mês anterior
    const ultimoDiaMesAnterior = new Date(ano, mes, 0).getDate();
    
    // Limpar grid
    const grid = document.getElementById('calendarioGrid');
    grid.innerHTML = '';
    
    // Data de hoje
    const hoje = new Date();
    
    // Dias do mês anterior
    for (let i = diaSemanaInicio - 1; i >= 0; i--) {
        const diaDiv = document.createElement('div');
        diaDiv.className = 'dia outro-mes';
        diaDiv.textContent = ultimoDiaMesAnterior - i;
        grid.appendChild(diaDiv);
    }
    
    // Dias do mês atual
    for (let dia = 1; dia <= totalDias; dia++) {
        const diaDiv = document.createElement('div');
        diaDiv.className = 'dia';
        diaDiv.textContent = dia;
        
        const dataStr = formatarData(ano, mes, dia);
        const diaSemana = new Date(ano, mes, dia).getDay();
        
        // Verificar se é domingo
        if (diaSemana === 0) {
            diaDiv.classList.add('domingo');
        }
        
        // Verificar se é hoje
        if (ano === hoje.getFullYear() && mes === hoje.getMonth() && dia === hoje.getDate()) {
            diaDiv.classList.add('hoje');
        }
        
        // Verificar se tem eventos
        if (eventos[dataStr]) {
            const indicador = document.createElement('div');
            indicador.className = 'evento-indicador';
            
            // Adicionar um dot para cada tipo de evento único
            const tiposUnicos = [...new Set(eventos[dataStr].map(e => e.tipo))];
            tiposUnicos.forEach(tipo => {
                const dot = document.createElement('span');
                dot.className = `evento-dot ${tipo}`;
                indicador.appendChild(dot);
            });
            
            diaDiv.appendChild(indicador);
            
            // Adicionar evento de clique
            diaDiv.addEventListener('click', () => selecionarDia(dataStr, dia));
        }
        
        grid.appendChild(diaDiv);
    }
    
    // Dias do próximo mês
    const totalCelulas = diaSemanaInicio + totalDias;
    const celulasRestantes = totalCelulas <= 35 ? 35 - totalCelulas : 42 - totalCelulas;
    
    for (let i = 1; i <= celulasRestantes; i++) {
        const diaDiv = document.createElement('div');
        diaDiv.className = 'dia outro-mes';
        diaDiv.textContent = i;
        grid.appendChild(diaDiv);
    }
    
    // Atualizar lista de eventos do mês
    atualizarListaEventos();
}

// Função para selecionar um dia
function selecionarDia(dataStr, dia) {
    // Remover seleção anterior
    document.querySelectorAll('.dia.selecionado').forEach(el => el.classList.remove('selecionado'));
    
    // Encontrar e selecionar o dia
    const dias = document.querySelectorAll('.dia:not(.outro-mes)');
    dias.forEach(diaEl => {
        if (diaEl.textContent == dia && !diaEl.classList.contains('outro-mes')) {
            diaEl.classList.add('selecionado');
        }
    });
    
    diaSelecionado = dataStr;
    mostrarDetalheEvento(dataStr);
}

// Função para mostrar detalhe do evento
function mostrarDetalheEvento(dataStr) {
    const detalheDiv = document.getElementById('eventoDetalhe');
    const eventosData = eventos[dataStr];
    
    if (!eventosData || eventosData.length === 0) {
        detalheDiv.innerHTML = `
            <h4>Nenhum evento neste dia</h4>
            <p>Não há eventos programados para esta data.</p>
        `;
        return;
    }
    
    const data = new Date(dataStr + 'T12:00:00');
    const dataFormatada = `${data.getDate()} de ${nomesMeses[data.getMonth()]} de ${data.getFullYear()}`;
    
    let html = '';
    eventosData.forEach(evento => {
        html += `
            <h4>${evento.titulo}</h4>
            <p>${evento.descricao}</p>
            <div class="detalhe-info">
                <div class="detalhe-item">
                    <span class="detalhe-icon">📅</span>
                    <span class="detalhe-label">Data:</span>
                    <span class="detalhe-valor">${dataFormatada}</span>
                </div>
                <div class="detalhe-item">
                    <span class="detalhe-icon">🕐</span>
                    <span class="detalhe-label">Horário:</span>
                    <span class="detalhe-valor">${evento.horario}</span>
                </div>
                <div class="detalhe-item">
                    <span class="detalhe-icon">📍</span>
                    <span class="detalhe-label">Local:</span>
                    <span class="detalhe-valor">${evento.local}</span>
                </div>
            </div>
        `;
    });
    
    detalheDiv.innerHTML = html;
}

// Função para atualizar lista de eventos do mês
function atualizarListaEventos() {
    const ano = dataAtual.getFullYear();
    const mes = dataAtual.getMonth();
    const listaDiv = document.getElementById('eventosLista');
    
    // Filtrar eventos do mês
    const eventosMes = [];
    Object.keys(eventos).forEach(dataStr => {
        const [anoEvento, mesEvento] = dataStr.split('-').map(Number);
        if (anoEvento === ano && mesEvento === mes + 1) {
            eventos[dataStr].forEach(evento => {
                eventosMes.push({ data: dataStr, ...evento });
            });
        }
    });
    
    // Ordenar por data
    eventosMes.sort((a, b) => a.data.localeCompare(b.data));
    
    // Remover duplicatas (manter apenas eventos únicos por título e data)
    const eventosUnicos = [];
    const vistos = new Set();
    eventosMes.forEach(evento => {
        const chave = `${evento.data}-${evento.titulo}`;
        if (!vistos.has(chave)) {
            vistos.add(chave);
            eventosUnicos.push(evento);
        }
    });
    
    if (eventosUnicos.length === 0) {
        listaDiv.innerHTML = '<p style="color: #888; text-align: center;">Nenhum evento programado para este mês.</p>';
        return;
    }
    
    let html = '';
    eventosUnicos.forEach(evento => {
        const data = new Date(evento.data + 'T12:00:00');
        const dataFormatada = `${data.getDate()}/${String(data.getMonth() + 1).padStart(2, '0')}`;
        
        html += `
            <div class="evento-item ${evento.tipo}" onclick="selecionarDia('${evento.data}', ${data.getDate()})">
                <div class="evento-data">${dataFormatada}</div>
                <div class="evento-titulo">${evento.titulo}</div>
            </div>
        `;
    });
    
    listaDiv.innerHTML = html;
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Verificar se estamos na página de agenda
    if (!document.getElementById('calendarioGrid')) return;
    
    // Renderizar calendário inicial
    renderizarCalendario();
    
    // Navegação de meses
    document.getElementById('mesAnterior').addEventListener('click', () => {
        dataAtual.setMonth(dataAtual.getMonth() - 1);
        renderizarCalendario();
    });
    
    document.getElementById('mesProximo').addEventListener('click', () => {
        dataAtual.setMonth(dataAtual.getMonth() + 1);
        renderizarCalendario();
    });
});

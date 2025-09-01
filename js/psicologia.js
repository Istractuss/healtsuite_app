/* ==================================== */
/* DATOS DE LA APLICACIÓN             */
/* ==================================== */

// Importar la configuración de Gemini desde config.js
// import { GEMINI_KEY, GEMINI_ENDPOINT } from './config.js';

// Para propósitos de prueba, definimos las variables aquí
const GEMINI_KEY = '';
const GEMINI_ENDPOINT = '';

const data = {
    teorias: {
        psicoanalisis: { titulo: "Psicoanálisis", contenido: "<p>Enfatiza la influencia del inconsciente en la conducta humana.</p>" },
        conductismo: { titulo: "Conductismo", contenido: "<p>Estudia la conducta observable y los mecanismos de aprendizaje.</p>" },
        humanismo: { titulo: "Humanismo", contenido: "<p>Centrado en el potencial humano y la autorrealización.</p>" },
        cognitivismo: { titulo: "Cognitivismo", contenido: "<p>Estudio de los procesos mentales como percepción y memoria.</p>" }
    },
    tests: {
        beck: { 
            title: "Escala de Depresión de Beck (BDI-II)",
            questions: [
                { text: "Pregunta 1", options: [{text:"Opción A", value:0},{text:"Opción B", value:1}] },
                { text: "Pregunta 2", options: [{text:"Opción A", value:0},{text:"Opción B", value:1}] }
            ],
            maxScore: 2,
            interpretations: [{min:0,max:1,label:"Bajo",description:"Interpretación baja"}, {min:2,max:2,label:"Alto",description:"Interpretación alta"}]
        },
        hamilton: { 
            title: "Escala de Ansiedad de Hamilton (HAMA)",
            questions: [
                { text: "Pregunta 1", options: [{text:"Opción A", value:0},{text:"Opción B", value:1}] }
            ],
            maxScore: 1,
            interpretations: [{min:0,max:0,label:"Bajo",description:"Interpretación baja"}, {min:1,max:1,label:"Alto",description:"Interpretación alta"}]
        },
        minimental: { 
            title: "Mini-Examen del Estado Mental (MMSE)",
            questions: [
                { text: "Pregunta 1", options: [{text:"Opción A", value:0},{text:"Opción B", value:1}] }
            ],
            maxScore: 1,
            interpretations: [{min:0,max:0,label:"Bajo",description:"Interpretación baja"}, {min:1,max:1,label:"Alto",description:"Interpretación alta"}]
        }
    }
};

/* ==================================== */
/* VARIABLES GLOBALES Y ELEMENTOS DEL DOM   */
/* ==================================== */

let currentTest = null;
let currentAnswers = [];
let currentQuestionIndex = 0;
let isBotTyping = false;

// Selección de elementos del DOM
const elements = {
    mainNavTabs: document.querySelectorAll('.nav-tab'),
    tecnicaTabs: document.querySelectorAll('.tecnica-tab'),
    teoriaDetails: document.getElementById('detalles-teoria'),
    teoriaTitle: document.getElementById('teoria-titulo'),
    teoriaContent: document.getElementById('teoria-contenido'),
    trastornoSearch: document.getElementById('buscar-trastorno'),
    terminoSearch: document.getElementById('buscar-termino'),
    testsGrid: document.querySelector('.tests-grid'),
    testContainer: document.getElementById('test-container'),
    testResults: document.getElementById('test-results'),
    testTitle: document.getElementById('test-title'),
    testQuestionContainer: document.getElementById('test-question'),
    progressFill: document.getElementById('progress-fill'),
    progressText: document.getElementById('progress-text'),
    prevBtn: document.getElementById('btn-prev'),
    nextBtn: document.getElementById('btn-next'),
    finishBtn: document.getElementById('btn-finish'),
    scoreValue: document.getElementById('score-value'),
    scoreTotal: document.getElementById('score-total'),
    scoreInterpretation: document.getElementById('score-interpretation'),
    resultsDescription: document.getElementById('results-description'),
    chatbotToggle: document.getElementById('chatbot-toggle'),
    chatbotContainer: document.getElementById('chatbot-container'),
    chatbotMessages: document.getElementById('chatbot-messages'),
    chatbotInput: document.getElementById('chatbot-input'),
    chatbotSendBtn: document.getElementById('chatbot-send'),
    chatbotCloseBtn: document.getElementById('chatbot-close'), // Asegúrate de que este ID existe en el HTML
    restartBtn: document.getElementById('btn-restart'),
    backToTestsBtn: document.getElementById('btn-back-to-tests'),
    cerrarDetallesBtn: document.getElementById('cerrar-detalles')
};

/* ==================================== */
/* CONFIGURACIÓN INICIAL                */
/* ==================================== */

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM cargado, inicializando eventos...");
    
    // Navegación de pestañas principales
    if (elements.mainNavTabs) {
        elements.mainNavTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = tab.getAttribute('data-target');
                switchSection(tab, elements.mainNavTabs, target);
            });
        });
    }

    // Navegación de pestañas de técnicas
    if (elements.tecnicaTabs) {
        elements.tecnicaTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = tab.getAttribute('data-tecnica');
                switchSection(tab, elements.tecnicaTabs, target, '.tecnica-contenido');
            });
        });
    }

    // Delegación de eventos para la sección de tests
    if (elements.testsGrid) {
        elements.testsGrid.addEventListener('click', (e) => {
            const btn = e.target.closest('.btn-test');
            if (btn) iniciarTest(btn.closest('.test-card').getAttribute('data-test'));
        });
    }

    // Delegación de eventos para la sección de escalas
    const escalasSection = document.getElementById('escalas');
    if (escalasSection) {
        escalasSection.addEventListener('click', (e) => {
            const btn = e.target.closest('.btn-escala');
            if (btn && btn.hasAttribute('data-test')) iniciarTest(btn.getAttribute('data-test'));
        });
    }

    // Delegación de eventos para la sección de teorías
    const teoriasSection = document.getElementById('teorias');
    if (teoriasSection) {
        teoriasSection.addEventListener('click', (e) => {
            const btn = e.target.closest('.btn-teoria');
            if (btn) mostrarDetallesTeoria(btn.closest('.teoria-card').getAttribute('data-teoria-id'));
        });
    }

    // Manejo de eventos en la sección de glosario
    const glosarioSection = document.getElementById('glosario');
    if (glosarioSection) {
        glosarioSection.addEventListener('click', (e) => {
            const card = e.target.closest('.termino-card');
            if (card) mostrarExplicacion(card.getAttribute('data-termino'));
        });
    }

    // Manejo de eventos en la sección de trastornos
    const trastornosSection = document.getElementById('trastornos');
    if (trastornosSection) {
        trastornosSection.addEventListener('click', (e) => {
            const item = e.target.closest('.trastorno-item');
            if (item) mostrarExplicacion(item.getAttribute('data-termino'));
        });
    }

    // Manejo de eventos en la sección de técnicas
    const tecnicasSection = document.getElementById('tecnicas');
    if (tecnicasSection) {
        tecnicasSection.addEventListener('click', (e) => {
            const tipo = e.target.closest('.pregunta-tipo');
            if (tipo) mostrarExplicacion(tipo.getAttribute('data-termino'));
        });
    }

    // Botón para cerrar detalles de teoría
    if (elements.cerrarDetallesBtn) {
        elements.cerrarDetallesBtn.addEventListener('click', ocultarDetallesTeoria);
    }

    // Botones de resultados de test
    if (elements.restartBtn) {
        elements.restartBtn.addEventListener('click', () => {
            if (currentTest) iniciarTest(currentTest);
        });
    }
    
    if (elements.backToTestsBtn) {
        elements.backToTestsBtn.addEventListener('click', volverAlListado);
    }

    // Funcionalidad del chatbot - ESTA PARTE ES CRÍTICA
    if (elements.chatbotToggle) {
        console.log("Configurando evento para chatbot toggle");
        elements.chatbotToggle.addEventListener('click', toggleChatbot);
    } else {
        console.error("No se encontró el botón de toggle del chatbot");
    }
    
    if (elements.chatbotCloseBtn) {
        console.log("Configurando evento para chatbot close");
        elements.chatbotCloseBtn.addEventListener('click', toggleChatbot);
    } else {
        console.error("No se encontró el botón de cerrar del chatbot");
    }
    
    if (elements.chatbotSendBtn) {
        elements.chatbotSendBtn.addEventListener('click', enviarPregunta);
    }
    
    if (elements.chatbotInput) {
        elements.chatbotInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') enviarPregunta();
        });
    }
    
    // Botones de navegación de test
    if (elements.prevBtn) {
        elements.prevBtn.addEventListener('click', preguntaAnterior);
    }
    
    if (elements.nextBtn) {
        elements.nextBtn.addEventListener('click', preguntaSiguiente);
    }
    
    if (elements.finishBtn) {
        elements.finishBtn.addEventListener('click', finalizarTest);
    }
});

/* ==================================== */
/* FUNCIONES DE NAVEGACIÓN              */
/* ==================================== */

function switchSection(activeTab, allTabs, targetId, sectionSelector = '.section') {
    allTabs.forEach(t => t.classList.remove('active'));
    activeTab.classList.add('active');

    document.querySelectorAll(sectionSelector).forEach(section => section.classList.remove('active'));
    document.getElementById(targetId).classList.add('active');
}

function mostrarDetallesTeoria(teoriaId) {
    const teoria = data.teorias[teoriaId];
    if (teoria) {
        elements.teoriaTitle.textContent = teoria.titulo;
        elements.teoriaContent.innerHTML = teoria.contenido;
        elements.teoriaDetails.classList.remove('hidden');
    }
}

function ocultarDetallesTeoria() {
    elements.teoriaDetails.classList.add('hidden');
}

function mostrarExplicacion(termino) {
    toggleChatbot();
    elements.chatbotInput.value = termino;
    setTimeout(() => enviarPregunta(), 300);
}

/* ==================================== */
/* FUNCIONES DE TESTS                   */
/* ==================================== */

function iniciarTest(testId) {
    const testData = data.tests[testId];
    if (!testData) return;

    currentTest = testId;
    currentAnswers = new Array(testData.questions.length).fill(null);
    currentQuestionIndex = 0;

    elements.testsGrid.classList.add('hidden');
    elements.testContainer.classList.remove('hidden');
    elements.testResults.classList.add('hidden');

    elements.testTitle.textContent = testData.title || '';

    showQuestion();
}

function showQuestion() {
    const question = data.tests[currentTest].questions[currentQuestionIndex];

    const progress = ((currentQuestionIndex + 1) / data.tests[currentTest].questions.length) * 100;
    elements.progressFill.style.width = `${progress}%`;
    elements.progressText.textContent = `Pregunta ${currentQuestionIndex + 1} de ${data.tests[currentTest].questions.length}`;

    let optionsHtml = '';
    question.options.forEach((option, index) => {
        optionsHtml += `
            <label class="test-option">
                <input type="radio" name="pregunta" value="${option.value}"
                    ${currentAnswers[currentQuestionIndex] === option.value ? 'checked' : ''}>
                ${option.text}
            </label>
        `;
    });

    elements.testQuestionContainer.innerHTML = `
        <div class="test-question-text">${question.text}</div>
        <div class="test-options">${optionsHtml}</div>
    `;

    // Escuchar cambios en las opciones
    elements.testQuestionContainer.querySelectorAll('input[name="pregunta"]').forEach((input, index) => {
        input.addEventListener('change', () => seleccionarRespuesta(index));
    });

    elements.prevBtn.classList.toggle('hidden', currentQuestionIndex === 0);
    elements.nextBtn.classList.toggle('hidden', currentQuestionIndex === data.tests[currentTest].questions.length - 1);
    elements.finishBtn.classList.toggle('hidden', currentQuestionIndex !== data.tests[currentTest].questions.length - 1);
}

function seleccionarRespuesta(index) {
    const value = data.tests[currentTest].questions[currentQuestionIndex].options[index].value;
    currentAnswers[currentQuestionIndex] = value;
}

function preguntaAnterior() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

function preguntaSiguiente() {
    if (currentAnswers[currentQuestionIndex] === null) {
        alert("Por favor, selecciona una opción antes de continuar.");
        return;
    }
    if (currentQuestionIndex < data.tests[currentTest].questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    }
}

function finalizarTest() {
    if (currentAnswers[currentQuestionIndex] === null) {
        alert("Por favor, selecciona una opción antes de finalizar.");
        return;
    }

    const score = currentAnswers.reduce((sum, value) => sum + (value || 0), 0);
    const testData = data.tests[currentTest];

    let interpretation = testData.interpretations.find(i => score >= i.min && score <= i.max);
    if (!interpretation) interpretation = testData.interpretations[0];

    elements.scoreValue.textContent = score;
    elements.scoreTotal.textContent = `/ ${testData.maxScore}`;
    elements.scoreInterpretation.textContent = interpretation.label;
    elements.resultsDescription.textContent = interpretation.description;

    elements.testContainer.classList.add('hidden');
    elements.testResults.classList.remove('hidden');
}

function volverAlListado() {
    elements.testsGrid.classList.remove('hidden');
    elements.testContainer.classList.add('hidden');
    elements.testResults.classList.add('hidden');
    currentTest = null;
}

/* ==================================== */
/* CHATBOT GEMINI                      */
/* ==================================== */

function toggleChatbot() {
    console.log("Función toggleChatbot ejecutada");
    if (elements.chatbotContainer && elements.chatbotToggle) {
        elements.chatbotContainer.classList.toggle('hidden');
        elements.chatbotToggle.classList.toggle('hidden');
        
        // Enfocar el input cuando se abre el chatbot
        if (!elements.chatbotContainer.classList.contains('hidden') && elements.chatbotInput) {
            setTimeout(() => {
                elements.chatbotInput.focus();
            }, 100);
        }
    }
}

function addMessage(text, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}-message`;
    messageDiv.textContent = text;
    elements.chatbotMessages.appendChild(messageDiv);
    elements.chatbotMessages.scrollTop = elements.chatbotMessages.scrollHeight;
}

function showTypingIndicator() {
    const typingIndicator = document.createElement('div');
    typingIndicator.id = 'typing-indicator';
    typingIndicator.className = 'typing-indicator bot-message';
    typingIndicator.innerHTML = `<span></span><span></span><span></span>`;
    elements.chatbotMessages.appendChild(typingIndicator);
    elements.chatbotMessages.scrollTop = elements.chatbotMessages.scrollHeight;
}

function hideTypingIndicator() {
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) typingIndicator.remove();
}

function enviarPregunta() {
    const userQuery = elements.chatbotInput.value.trim();
    if (userQuery && !isBotTyping) {
        addMessage(userQuery, 'user');
        elements.chatbotInput.value = '';
        showTypingIndicator();
        consultarGemini(userQuery);
    }
}

async function consultarGemini(query) {
    // Para propósitos de demostración, usamos respuestas simuladas
    setTimeout(() => {
        hideTypingIndicator();
        
        // Respuestas simuladas para demostración
        const respuestasSimuladas = {
            "Trastorno de ansiedad generalizada DSM-5": "El Trastorno de Ansiedad Generalizada (TAG) según el DSM-5 se caracteriza por ansiedad y preocupación excesivas que ocurren más días de los que faltan durante al menos 6 meses, acerca de una serie de eventos o actividades.",
            "Trastorno de pánico DSM-5": "El Trastorno de Pánico según el DSM-5 implica ataques de pánico inesperados y recurrentes. Un ataque de pánico es la aparición súbita de miedo intenso o malestar intenso que alcanza su máxima expresión en minutos.",
            "Acomodación en la teoría de Piaget": "En la teoría de Jean Piaget, la acomodación es el proceso mediante el cual un individuo modifica sus esquemas cognitivos existentes o crea nuevos para adaptarse a nueva información.",
            "Disonancia cognitiva de Festinger": "La teoría de la disonancia cognitiva, propuesta por Leon Festinger, postula que las personas experimentan incomodidad psicológica cuando mantienen dos o más cogniciones que son inconsistentes entre sí."
        };
        
        const respuesta = respuestasSimuladas[query] || `He recibido tu pregunta sobre "${query}". Como asistente de psicología, te recomendaría consultar fuentes especializadas para obtener información precisa sobre este tema.`;
        
        addMessage(respuesta, 'bot');
        isBotTyping = false;
    }, 1500);
}
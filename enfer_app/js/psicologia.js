/* ==================================== */
/* DATOS DE LA APLICACIÓN             */
/* ==================================== */

const data = {
    teorias: {
        psicoanalisis: {
            titulo: "Psicoanálisis",
            contenido: `
                <h4>Fundador: Sigmund Freud</h4>
                <p>El psicoanálisis enfatiza la influencia del inconsciente en la conducta humana. Freud propuso que los conflictos inconscientes, a menudo arraigados en experiencias de la infancia, dan forma a la personalidad y el comportamiento.</p>
                
                <h4>Conceptos clave:</h4>
                <ul>
                    <li><strong>Ello, Yo y Superyó:</strong> Las tres instancias de la personalidad</li>
                    <li><strong>Etapas psicosexuales:</strong> Oral, anal, fálica, latencia y genital</li>
                    <li><strong>Mecanismos de defensa:</strong> Negación, represión, proyección, etc.</li>
                    <li><strong>Interpretación de sueños:</strong> La vía regia al inconsciente</li>
                    <li><strong>Transferencia y contratransferencia:</strong> Fenómenos en la relación terapéutica</li>
                </ul>
                
                <h4>Representantes importantes:</h4>
                <ul>
                    <li>Sigmund Freud (fundador)</li>
                    <li>Carl Jung (psicología analítica)</li>
                    <li>Melanie Klein (relaciones objetales)</li>
                    <li>Jacques Lacan (psicoanálisis estructuralista)</li>
                </ul>
            `
        },
        conductismo: {
            titulo: "Conductismo",
            contenido: `
                <h4>Fundadores: John B. Watson, B.F. Skinner</h4>
                <p>El conductismo se centra en el estudio de la conducta observable, rechazando los procesos mentales internos como objeto de estudio científico. Se basa en el principio de que todo comportamiento es aprendido a través de la interacción con el ambiente.</p>
                
                <h4>Conceptos clave:</h4>
                <ul>
                    <li><strong>Condicionamiento clásico:</strong> Pavlov - Asociación entre estímulos</li>
                    <li><strong>Condicionamiento operante:</strong> Skinner - Consecuencias que modifican conductas</li>
                    <li><strong>Refuerzo y castigo:</strong> Refuerzo y castigo positivos/negativos</li>
                    <li><strong>Moldeamiento:</strong> Aproximaciones sucesivas hacia la conducta deseada</li>
                </ul>
                
                <h4>Aplicaciones:</h4>
                <ul>
                    <li>Terapia de modificación de conducta</li>
                    <li>Programas de economía de fichas</li>
                    <li>Desensibilización sistemática</li>
                    <li>Entrenamiento en habilidades sociales</li>
                </ul>
            `
        },
        humanismo: {
            titulo: "Humanismo",
            contenido: `
                <h4>Representantes principales: Carl Rogers, Abraham Maslow</h4>
                <p>La psicología humanista surge como "tercera fuerza" en contraposición al psicoanálisis y conductismo. Enfatiza la experiencia subjetiva, el libre albedrío y la tendencia innata hacia la autorrealización.</p>
                
                <h4>Conceptos clave:</h4>
                <ul>
                    <li><strong>Autorrealización:</strong> Tendencia innata a desarrollar todo el potencial</li>
                    <li><strong>Jerarquía de necesidades:</strong> Pirámide de Maslow</li>
                    <li><strong>Enfoque centrado en la persona:</strong> Rogers - Condiciones necesarias para el crecimiento</li>
                    <li><strong>Congruencia, empatía y consideración positiva incondicional:</strong> Condiciones terapéuticas</li>
                </ul>
                
                <h4>Aportes significativos:</h4>
                <ul>
                    <li>Terapia centrada en el cliente</li>
                    <li>Psicología positiva (desarrollo posterior)</li>
                    <li>Enfoque holístico de la persona</li>
                    <li>Importancia de la relación terapéutica</li>
                </ul>
            `
        },
        cognitivismo: {
            titulo: "Cognitivismo",
            contenido: `
                <h4>Representantes principales: Aaron Beck, Albert Ellis</h4>
                <p>El cognitivismo estudia los procesos mentales como la percepción, memoria, pensamiento y solución de problemas. Surge como reacción al conductismo, incorporando el estudio de los procesos mentales internos.</p>
                
                <h4>Conceptos clave:</h4>
                <ul>
                    <li><strong>Esquemas cognitivos:</strong> Estructuras mentales que organizan la información</li>
                    <li><strong>Procesamiento de información:</strong> Cómo codificamos, almacenamos y recuperamos información</li>
                    <li><strong>Distorsiones cognitivas:</strong> Patrones de pensamiento irracionales</li>
                    <li><strong>Autodiálogo y autoinstrucciones:</strong> Diálogo interno que influye en emociones y conductas</li>
                </ul>
                
                <h4>Aplicaciones terapéuticas:</h4>
                <ul>
                    <li>Terapia cognitiva de Beck</li>
                    <li>Terapia racional emotiva conductual de Ellis</li>
                    <li>Reestructuración cognitiva</li>
                    <li>Entrenamiento en solución de problemas</li>
                </ul>
            `
        }
    },
    tests: {
        beck: {
            title: "Escala de Depresión de Beck (BDI-II)",
            questions: [
                {
                    text: "Tristeza",
                    options: [
                        { text: "0 - No me siento triste", value: 0 },
                        { text: "1 - Me siento triste gran parte del tiempo", value: 1 },
                        { text: "2 - Estoy triste todo el tiempo", value: 2 },
                        { text: "3 - Estoy tan triste o soy tan infeliz que no puedo soportarlo", value: 3 }
                    ]
                },
                {
                    text: "Pesimismo",
                    options: [
                        { text: "0 - No estoy desanimado acerca de mi futuro", value: 0 },
                        { text: "1 - Me siento más desanimado acerca de mi futuro que antes", value: 1 },
                        { text: "2 - No espero que las cosas funcionen para mí", value: 2 },
                        { text: "3 - Siento que mi futuro es sin esperanza y que solo va a empeorar", value: 3 }
                    ]
                },
                {
                    text: "Sentimiento de fracaso",
                    options: [
                        { text: "0 - No me siento como un fracaso", value: 0 },
                        { text: "1 - He fracasado más de lo que debería", value: 1 },
                        { text: "2 - Cuando miro hacia atrás, veo muchos fracasos", value: 2 },
                        { text: "3 - Siento que como persona soy un fracaso total", value: 3 }
                    ]
                },
                {
                    text: "Pérdida de placer",
                    options: [
                        { text: "0 - Obtengo tanto placer como siempre por las cosas que disfruto", value: 0 },
                        { text: "1 - No disfruto tanto de las cosas como solía hacerlo", value: 1 },
                        { text: "2 - Obtengo muy poco placer de las cosas que solía disfrutar", value: 2 },
                        { text: "3 - No puedo obtener ningún placer de las cosas que solía disfrutar", value: 3 }
                    ]
                },
                {
                    text: "Sentimientos de culpa",
                    options: [
                        { text: "0 - No me siento particularmente culpable", value: 0 },
                        { text: "1 - Me siento culpable respecto a varias cosas que he hecho o debería haber hecho", value: 1 },
                        { text: "2 - Me siento bastante culpable la mayor parte del tiempo", value: 2 },
                        { text: "3 - Me siento culpable todo el tiempo", value: 3 }
                    ]
                }
            ],
            maxScore: 63,
            interpretations: [
                { min: 0, max: 13, label: "Depresión mínima", description: "No presenta síntomas significativos de depresión." },
                { min: 14, max: 19, label: "Depresión leve", description: "Síntomas leves de depresión que pueden merecer atención." },
                { min: 20, max: 28, label: "Depresión moderada", description: "Síntomas moderados de depresión que requieren atención profesional." },
                { min: 29, max: 63, label: "Depresión grave", description: "Síntomas severos de depresión que necesitan intervención profesional inmediata." }
            ]
        },
        hamilton: {
            title: "Escala de Ansiedad de Hamilton (HAMA)",
            questions: [
                {
                    text: "Estado de ánimo ansioso",
                    options: [
                        { text: "0 - Ausente", value: 0 },
                        { text: "1 - Leve", value: 1 },
                        { text: "2 - Moderado", value: 2 },
                        { text: "3 - Grave", value: 3 },
                        { text: "4 - Incapacitante", value: 4 }
                    ]
                },
                {
                    text: "Tensión",
                    options: [
                        { text: "0 - Ausente", value: 0 },
                        { text: "1 - Leve", value: 1 },
                        { text: "2 - Moderado", value: 2 },
                        { text: "3 - Grave", value: 3 },
                        { text: "4 - Incapacitante", value: 4 }
                    ]
                },
                {
                    text: "Temores",
                    options: [
                        { text: "0 - Ausente", value: 0 },
                        { text: "1 - Leve", value: 1 },
                        { text: "2 - Moderado", value: 2 },
                        { text: "3 - Grave", value: 3 },
                        { text: "4 - Incapacitante", value: 4 }
                    ]
                },
                {
                    text: "Insomnio",
                    options: [
                        { text: "0 - Ausente", value: 0 },
                        { text: "1 - Leve", value: 1 },
                        { text: "2 - Moderado", value: 2 },
                        { text: "3 - Grave", value: 3 },
                        { text: "4 - Incapacitante", value: 4 }
                    ]
                }
            ],
            maxScore: 56,
            interpretations: [
                { min: 0, max: 17, label: "Ansiedad leve", description: "Síntomas mínimos de ansiedad." },
                { min: 18, max: 24, label: "Ansiedad moderada", description: "Síntomas moderados de ansiedad." },
                { min: 25, max: 56, label: "Ansiedad grave", description: "Síntomas severos de ansiedad que requieren atención profesional." }
            ]
        },
        minimental: {
            title: "Mini-Examen del Estado Mental (MMSE)",
            questions: [
                {
                    text: "Orientación temporal: ¿En qué año estamos?",
                    options: [
                        { text: "0 - Incorrecto", value: 0 },
                        { text: "1 - Correcto", value: 1 }
                    ]
                },
                {
                    text: "Orientación temporal: ¿En qué estación del año?",
                    options: [
                        { text: "0 - Incorrecto", value: 0 },
                        { text: "1 - Correcto", value: 1 }
                    ]
                },
                {
                    text: "Orientación temporal: ¿En qué mes estamos?",
                    options: [
                        { text: "0 - Incorrecto", value: 0 },
                        { text: "1 - Correcto", value: 1 }
                    ]
                },
                {
                    text: "Orientación temporal: ¿Qué día del mes es hoy?",
                    options: [
                        { text: "0 - Incorrecto", value: 0 },
                        { text: "1 - Correcto", value: 1 }
                    ]
                },
                {
                    text: "Orientación temporal: ¿Qué día de la semana es hoy?",
                    options: [
                        { text: "0 - Incorrecto", value: 0 },
                        { text: "1 - Correcto", value: 1 }
                    ]
                }
            ],
            maxScore: 30,
            interpretations: [
                { min: 24, max: 30, label: "Normal", description: "Función cognitiva dentro de los límites normales." },
                { min: 18, max: 23, label: "Deterioro leve", description: "Posible deterioro cognitivo leve." },
                { min: 0, max: 17, label: "Deterioro grave", description: "Probable demencia o deterioro cognitivo significativo." }
            ]
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

// Almacenar elementos del DOM para un acceso eficiente
const elements = {
    // Navegación
    mainNavTabs: document.querySelectorAll('.nav-tab'),
    tecnicaTabs: document.querySelectorAll('.tecnica-tab'),

    // Teorías
    teoriaDetails: document.getElementById('detalles-teoria'),
    teoriaTitle: document.getElementById('teoria-titulo'),
    teoriaContent: document.getElementById('teoria-contenido'),

    // Trastornos y Glosario
    trastornoSearch: document.getElementById('buscar-trastorno'),
    terminoSearch: document.getElementById('buscar-termino'),

    // Tests
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
    
    // Resultados del test
    scoreValue: document.getElementById('score-value'),
    scoreTotal: document.getElementById('score-total'),
    scoreInterpretation: document.getElementById('score-interpretation'),
    resultsDescription: document.getElementById('results-description'),

    // Chatbot
    chatbotToggle: document.getElementById('chatbot-toggle'),
    chatbotContainer: document.getElementById('chatbot-container'),
    chatbotMessages: document.getElementById('chatbot-messages'),
    chatbotInput: document.getElementById('chatbot-input'),
    chatbotSendBtn: document.getElementById('chatbot-send'),
    chatbotCloseBtn: document.getElementById('btn-chatbot-close')
};

// API Key para el chatbot (asegúrate de que esto sea privado)
const apiKey = 'd0dff4b3478cbc01173e9d9b312f';

/* ==================================== */
/* LÓGICA DE MANIPULACIÓN DEL DOM     */
/* ==================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Navegación de pestañas principales
    elements.mainNavTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-target');
            switchSection(tab, elements.mainNavTabs, target);
        });
    });

    // Navegación de pestañas de técnicas
    elements.tecnicaTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-tecnica');
            switchSection(tab, elements.tecnicaTabs, target, '.tecnica-contenido');
        });
    });

    // Delegación de eventos para la sección de tests
    elements.testsGrid.addEventListener('click', (e) => {
        const btn = e.target.closest('.test-card');
        if (btn) {
            iniciarTest(btn.getAttribute('data-test-id'));
        }
    });

    // Delegación de eventos para la sección de teorías
    document.getElementById('teorias').addEventListener('click', (e) => {
        const btn = e.target.closest('.teoria-card');
        if (btn) {
            mostrarDetallesTeoria(btn.getAttribute('data-teoria-id'));
        }
    });
    
    // Manejo de eventos en la sección de glosario
    document.getElementById('glosario').addEventListener('click', (e) => {
        const btn = e.target.closest('.termino-card');
        if (btn) {
            mostrarExplicacion(btn.querySelector('h3').textContent);
        }
    });

    // Funcionalidad del chatbot
    elements.chatbotToggle.addEventListener('click', toggleChatbot); // ESTA ES LA LÍNEA CORREGIDA
    elements.chatbotCloseBtn.addEventListener('click', toggleChatbot);
    elements.chatbotSendBtn.addEventListener('click', enviarPregunta);
    elements.chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            enviarPregunta();
        }
    });
});

/* ==================================== */
/* FUNCIONES DE LA APLICACIÓN         */
/* ==================================== */

/**
 * Cambia la sección activa de la aplicación.
 * @param {HTMLElement} activeTab - La pestaña clicada.
 * @param {NodeList} allTabs - Todas las pestañas del mismo grupo.
 * @param {string} targetId - El ID de la sección a mostrar.
 * @param {string} sectionSelector - Selector CSS para las secciones.
 */
function switchSection(activeTab, allTabs, targetId, sectionSelector = '.section') {
    allTabs.forEach(t => t.classList.remove('active'));
    activeTab.classList.add('active');
    
    document.querySelectorAll(sectionSelector).forEach(section => {
        section.classList.remove('active');
    });
    
    document.getElementById(targetId).classList.add('active');
}

/**
 * Muestra los detalles de una teoría psicológica.
 * @param {string} teoriaId - El ID de la teoría a mostrar.
 */
function mostrarDetallesTeoria(teoriaId) {
    const teoria = data.teorias[teoriaId];
    if (teoria) {
        elements.teoriaTitle.textContent = teoria.titulo;
        elements.teoriaContent.innerHTML = teoria.contenido;
        elements.teoriaDetails.classList.remove('hidden');
    }
}

/** Oculta los detalles de la teoría actualmente visible. */
function ocultarDetallesTeoria() {
    elements.teoriaDetails.classList.add('hidden');
}

/** Filtra los trastornos mostrados en la lista. */
function filtrarTrastornos() {
    const searchTerm = elements.trastornoSearch.value.toLowerCase();
    document.querySelectorAll('.trastorno-item').forEach(trastorno => {
        const texto = trastorno.textContent.toLowerCase();
        trastorno.style.display = texto.includes(searchTerm) ? 'block' : 'none';
    });
}

/** Filtra los términos del glosario mostrados en la lista. */
function filtrarTerminos() {
    const searchTerm = elements.terminoSearch.value.toLowerCase();
    document.querySelectorAll('.termino-card').forEach(termino => {
        const texto = termino.textContent.toLowerCase();
        termino.style.display = texto.includes(searchTerm) ? 'block' : 'none';
    });
}

/**
 * Inicia un test psicológico.
 * @param {string} testId - El ID del test a iniciar.
 */
function iniciarTest(testId) {
    currentTest = testId;
    currentAnswers = new Array(data.tests[testId].questions.length).fill(null);
    currentQuestionIndex = 0;
    
    elements.testsGrid.classList.add('hidden');
    elements.testContainer.classList.remove('hidden');
    elements.testResults.classList.add('hidden');
    
    elements.testTitle.textContent = data.tests[testId].title;
    
    showQuestion();
}

/** Muestra la pregunta actual del test. */
function showQuestion() {
    const question = data.tests[currentTest].questions[currentQuestionIndex];
    
    // Actualizar barra de progreso
    const progress = ((currentQuestionIndex + 1) / data.tests[currentTest].questions.length) * 100;
    elements.progressFill.style.width = `${progress}%`;
    elements.progressText.textContent = `Pregunta ${currentQuestionIndex + 1} de ${data.tests[currentTest].questions.length}`;
    
    // Construir HTML de la pregunta
    let optionsHtml = '';
    question.options.forEach((option, index) => {
        optionsHtml += `
            <label class="test-option">
                <input type="radio" name="pregunta" value="${option.value}"
                    ${currentAnswers[currentQuestionIndex] === option.value ? 'checked' : ''}
                    data-option-index="${index}">
                ${option.text}
            </label>
        `;
    });
    
    elements.testQuestionContainer.innerHTML = `
        <div class="test-question-text">${question.text}</div>
        <div class="test-options">${optionsHtml}</div>
    `;

    // Delegación de eventos para las opciones
    elements.testQuestionContainer.addEventListener('change', (e) => {
        if (e.target.name === 'pregunta') {
            const index = e.target.getAttribute('data-option-index');
            seleccionarRespuesta(index);
        }
    });

    // Visibilidad de los botones de navegación
    elements.prevBtn.classList.toggle('hidden', currentQuestionIndex === 0);
    elements.nextBtn.classList.toggle('hidden', currentQuestionIndex === data.tests[currentTest].questions.length - 1);
    elements.finishBtn.classList.toggle('hidden', currentQuestionIndex !== data.tests[currentTest].questions.length - 1);
}

/**
 * Almacena la respuesta seleccionada por el usuario.
 * @param {number} index - El índice de la opción seleccionada.
 */
function seleccionarRespuesta(index) {
    const selectedValue = data.tests[currentTest].questions[currentQuestionIndex].options[index].value;
    currentAnswers[currentQuestionIndex] = selectedValue;
}

/** Retrocede a la pregunta anterior. */
function preguntaAnterior() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

/** Avanza a la siguiente pregunta. */
function preguntaSiguiente() {
    // Validación: No se puede avanzar si no hay respuesta
    if (currentAnswers[currentQuestionIndex] === null) {
        alert("Por favor, selecciona una opción antes de continuar.");
        return;
    }
    
    if (currentQuestionIndex < data.tests[currentTest].questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    }
}

/** Finaliza el test, calcula la puntuación y muestra los resultados. */
function finalizarTest() {
    // Validación final
    if (currentAnswers[currentQuestionIndex] === null) {
        alert("Por favor, selecciona una opción antes de finalizar.");
        return;
    }
    
    const score = currentAnswers.reduce((sum, value) => sum + (value || 0), 0);
    const testData = data.tests[currentTest];
    
    let interpretation = testData.interpretations.find(i => score >= i.min && score <= i.max);
    if (!interpretation) {
        interpretation = testData.interpretations[0];
    }
    
    elements.scoreValue.textContent = score;
    elements.scoreTotal.textContent = `/ ${testData.maxScore}`;
    elements.scoreInterpretation.textContent = interpretation.label;
    elements.resultsDescription.textContent = interpretation.description;
    
    elements.testContainer.classList.add('hidden');
    elements.testResults.classList.remove('hidden');
}

/** Sale del test y vuelve a la lista principal. */
function salirTest() {
    if (confirm("¿Estás seguro de que quieres salir? Se perderán todas tus respuestas.")) {
        volverAlListado();
    }
}

/** Vuelve a la lista principal de tests. */
function volverAlListado() {
    elements.testsGrid.classList.remove('hidden');
    elements.testContainer.classList.add('hidden');
    elements.testResults.classList.add('hidden');
    currentTest = null;
}

/* ==================================== */
/* LÓGICA DEL CHATBOT                 */
/* ==================================== */

/**
 * Muestra el chatbot con una explicación sobre un término.
 * @param {string} termino - El término a explicar.
 */
function mostrarExplicacion(termino) {
    if (!apiKey || apiKey.trim() === 'TU_API_KEY_AQUI') {
        alert("Por favor, configura tu API Key de DeepSeek para usar el chatbot.");
        return;
    }
    
    toggleChatbot();
    
    // Limpiar mensajes y empezar nueva conversación
    elements.chatbotMessages.innerHTML = '';
    
    addMessage(`Me gustaría aprender sobre: ${termino}`, 'user');
    showTypingIndicator();
    
    // Iniciar la consulta a la API
    consultarDeepSeek(termino);
}

/**
 * Consulta a la API de DeepSeek para obtener una explicación.
 * @param {string} query - El término o pregunta del usuario.
 */
async function consultarDeepSeek(query) {
    isBotTyping = true;
    try {
        const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'deepseek-chat',
                messages: [
                    {
                        role: 'system',
                        content: 'Eres un asistente especializado en psicología que explica conceptos de manera clara y concisa para estudiantes.'
                    },
                    {
                        role: 'user',
                        content: `Explícame de manera detallada pero comprensible qué es ${query} en psicología. Incluye ejemplos prácticos si es posible.`
                    }
                ],
                max_tokens: 500
            })
        });
        
        const data = await response.json();
        hideTypingIndicator();
        
        if (data.choices && data.choices.length > 0) {
            addMessage(data.choices[0].message.content, 'bot');
        } else {
            addMessage('Lo siento, no pude obtener información en este momento. Por favor, intenta nuevamente.', 'bot');
        }
    } catch (error) {
        console.error('Error al consultar la API:', error);
        hideTypingIndicator();
        addMessage(`Lo siento, ocurrió un error al comunicarme con la IA. El término "${query}" es un concepto importante en psicología, pero te recomiendo consultar otra fuente.`, 'bot');
    } finally {
        isBotTyping = false;
    }
}

/**
 * Añade un mensaje al contenedor del chatbot.
 * @param {string} text - El texto del mensaje.
 * @param {string} type - El tipo de mensaje ('user' o 'bot').
 */
function addMessage(text, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}-message`;
    messageDiv.textContent = text;
    elements.chatbotMessages.appendChild(messageDiv);
    elements.chatbotMessages.scrollTop = elements.chatbotMessages.scrollHeight;
}

/** Muestra el indicador de que el bot está escribiendo. */
function showTypingIndicator() {
    const typingIndicator = document.createElement('div');
    typingIndicator.id = 'typing-indicator';
    typingIndicator.className = 'typing-indicator bot-message';
    typingIndicator.innerHTML = `<span></span><span></span><span></span>`;
    elements.chatbotMessages.appendChild(typingIndicator);
    elements.chatbotMessages.scrollTop = elements.chatbotMessages.scrollHeight;
}

/** Oculta el indicador de que el bot está escribiendo. */
function hideTypingIndicator() {
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

/** Envía un mensaje del usuario al chatbot. */
function enviarPregunta() {
    const userQuery = elements.chatbotInput.value.trim();
    if (userQuery && !isBotTyping) {
        addMessage(userQuery, 'user');
        elements.chatbotInput.value = '';
        showTypingIndicator();
        consultarDeepSeek(userQuery);
    }
}

/** Alterna la visibilidad del chatbot. */
function toggleChatbot() {
    elements.chatbotContainer.classList.toggle('hidden');
    elements.chatbotToggle.classList.toggle('hidden');
}
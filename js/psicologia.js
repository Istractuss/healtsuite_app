// --- TESTS PROFESIONALES ---
const TESTS_PROFESIONALES = {
    'beck': {
        nombre: 'Escala de Depresión de Beck (BDI-II)',
        instrucciones: 'Responda cada ítem según cómo se ha sentido en la última semana. Seleccione la opción que mejor lo describa.',
        items: [
            { texto: '1. Tristeza', opciones: ['0) No me siento triste.', '1) Me siento triste.', '2) Estoy triste todo el tiempo y no puedo dejar de estarlo.', '3) Estoy tan triste o infeliz que no puedo soportarlo.'] },
            { texto: '2. Pesimismo', opciones: ['0) No estoy desanimado respecto al futuro.', '1) Me siento más desanimado respecto al futuro que antes.', '2) No espero que las cosas mejoren.', '3) Siento que el futuro no tiene esperanza.'] },
            { texto: '3. Sentimientos de fracaso', opciones: ['0) No me siento un fracasado.', '1) He fracasado más de lo que debería.', '2) Cuando miro hacia atrás, veo muchos fracasos.', '3) Me siento una persona totalmente fracasada.'] },
            { texto: '4. Pérdida de placer', opciones: ['0) Disfruto de las cosas como antes.', '1) No disfruto tanto de las cosas como antes.', '2) Obtengo muy poco placer de las cosas que solía disfrutar.', '3) No disfruto de nada en absoluto.'] },
            { texto: '5. Sentimientos de culpa', opciones: ['0) No me siento especialmente culpable.', '1) Me siento culpable mucho del tiempo.', '2) Me siento culpable la mayor parte del tiempo.', '3) Me siento culpable todo el tiempo.'] },
            { texto: '6. Sentimientos de castigo', opciones: ['0) No siento que esté siendo castigado.', '1) Siento que podría ser castigado.', '2) Espero ser castigado.', '3) Siento que estoy siendo castigado.'] },
            { texto: '7. Disconformidad con uno mismo', opciones: ['0) Me siento igual que antes.', '1) He perdido la confianza en mí mismo.', '2) Estoy decepcionado de mí mismo.', '3) Me odio a mí mismo.'] },
            { texto: '8. Autocrítica', opciones: ['0) No me critico ni me culpo más de lo habitual.', '1) Me critico más de lo habitual.', '2) Me culpo por todos mis errores.', '3) Me culpo por todo lo malo que sucede.'] },
            { texto: '9. Pensamientos o deseos suicidas', opciones: ['0) No tengo pensamientos de suicidio.', '1) Tengo pensamientos de suicidio, pero no los llevaría a cabo.', '2) Querría suicidarme.', '3) Me suicidaría si tuviera la oportunidad.'] },
            { texto: '10. Llanto', opciones: ['0) No lloro más de lo habitual.', '1) Lloro más de lo habitual.', '2) Lloro por cualquier cosa.', '3) Siento ganas de llorar pero no puedo.'] },
            { texto: '11. Agitación', opciones: ['0) No estoy más inquieto o agitado que de costumbre.', '1) Me siento más inquieto o agitado que antes.', '2) Estoy tan inquieto o agitado que me es difícil quedarme quieto.', '3) Estoy tan inquieto o agitado que tengo que estar siempre en movimiento o haciendo algo.'] },
            { texto: '12. Pérdida de interés', opciones: ['0) No he perdido el interés en otras personas o actividades.', '1) Estoy menos interesado que antes.', '2) He perdido gran parte de mi interés.', '3) Me es difícil interesarme por algo.'] },
            { texto: '13. Indecisión', opciones: ['0) Tomo decisiones tan bien como siempre.', '1) Me resulta más difícil que de costumbre tomar decisiones.', '2) Encuentro mucha más dificultad para tomar decisiones.', '3) No puedo tomar decisiones en absoluto.'] },
            { texto: '14. Sentimientos de inutilidad', opciones: ['0) No me siento inútil.', '1) No me considero tan valioso y útil como antes.', '2) Me siento más inútil a medida que pasa el tiempo.', '3) Me siento completamente inútil.'] },
            { texto: '15. Pérdida de energía', opciones: ['0) Tengo tanta energía como siempre.', '1) Tengo menos energía que antes.', '2) No tengo suficiente energía para hacer muchas cosas.', '3) No tengo energía para hacer nada.'] },
            { texto: '16. Cambios en los patrones de sueño', opciones: ['0) No he experimentado ningún cambio en mi sueño.', '1) Duermo un poco más o menos que de costumbre.', '2) Duermo mucho más o mucho menos que de costumbre.', '3) Duermo la mayor parte del día o me despierto varias veces y no puedo volver a dormir.'] },
            { texto: '17. Irritabilidad', opciones: ['0) No estoy más irritable que de costumbre.', '1) Estoy más irritable que de costumbre.', '2) Estoy mucho más irritable que de costumbre.', '3) Estoy irritable todo el tiempo.'] },
            { texto: '18. Cambios en el apetito', opciones: ['0) No he experimentado ningún cambio en mi apetito.', '1) Mi apetito es un poco menor o mayor que antes.', '2) Mi apetito es mucho menor o mayor que antes.', '3) No tengo apetito en absoluto o quiero comer todo el tiempo.'] },
            { texto: '19. Dificultad para concentrarse', opciones: ['0) Me concentro tan bien como siempre.', '1) No puedo concentrarme tan bien como antes.', '2) Me resulta difícil concentrarme en algo por mucho tiempo.', '3) No puedo concentrarme en nada.'] },
            { texto: '20. Cansancio o fatiga', opciones: ['0) No estoy más cansado o fatigado que de costumbre.', '1) Me canso o fatigo más fácilmente que antes.', '2) Estoy demasiado cansado o fatigado para hacer muchas de las cosas que solía hacer.', '3) Estoy demasiado cansado o fatigado para hacer la mayoría de las cosas que solía hacer.'] },
            { texto: '21. Pérdida de interés en el sexo', opciones: ['0) No he notado ningún cambio reciente en mi interés por el sexo.', '1) Estoy menos interesado en el sexo que antes.', '2) Estoy mucho menos interesado en el sexo.', '3) He perdido completamente el interés en el sexo.'] }
        ],
        baremos: [
            { min: 0, max: 13, interpretacion: 'Mínima depresión' },
            { min: 14, max: 19, interpretacion: 'Depresión leve' },
            { min: 20, max: 28, interpretacion: 'Depresión moderada' },
            { min: 29, max: 63, interpretacion: 'Depresión grave' }
        ]
    },
    'hamilton': {
        nombre: 'Escala de Ansiedad de Hamilton (HAMA)',
        instrucciones: 'Responda cada ítem según su experiencia reciente. Seleccione la opción que mejor lo describa.',
        items: [
            { texto: '1. Estado de ánimo ansioso', opciones: ['0) Ausente.', '1) Preocupación leve.', '2) Preocupación moderada.', '3) Temores evidentes.', '4) Terror o pánico.'] },
            { texto: '2. Tensión', opciones: ['0) Ausente.', '1) Preocupación leve.', '2) Inquietud e impaciencia.', '3) Temblores e incapacidad para relajarse.', '4) Tensión extrema.'] },
            { texto: '3. Miedos', opciones: ['0) Ninguno.', '1) Miedos leves.', '2) Miedos moderados.', '3) Miedos frecuentes.', '4) Miedos incapacitantes.'] },
            { texto: '4. Insomnio', opciones: ['0) Ninguno.', '1) Dificultad leve para dormir.', '2) Dificultad moderada para dormir.', '3) Dificultad severa para dormir.', '4) Insomnio total.'] },
            { texto: '5. Dificultad para concentrarse', opciones: ['0) Ninguna.', '1) Leve.', '2) Moderada.', '3) Severa.', '4) Incapacitante.'] },
            { texto: '6. Estado de ánimo depresivo', opciones: ['0) Ninguno.', '1) Leve.', '2) Moderado.', '3) Severo.', '4) Incapacitante.'] },
            { texto: '7. Síntomas somáticos (musculares)', opciones: ['0) Ninguno.', '1) Leve.', '2) Moderado.', '3) Severo.', '4) Incapacitante.'] },
            { texto: '8. Síntomas somáticos (sensoriales)', opciones: ['0) Ninguno.', '1) Leve.', '2) Moderado.', '3) Severo.', '4) Incapacitante.'] },
            { texto: '9. Síntomas cardiovasculares', opciones: ['0) Ninguno.', '1) Leve.', '2) Moderado.', '3) Severo.', '4) Incapacitante.'] },
            { texto: '10. Síntomas respiratorios', opciones: ['0) Ninguno.', '1) Leve.', '2) Moderado.', '3) Severo.', '4) Incapacitante.'] },
            { texto: '11. Síntomas gastrointestinales', opciones: ['0) Ninguno.', '1) Leve.', '2) Moderado.', '3) Severo.', '4) Incapacitante.'] },
            { texto: '12. Síntomas genitourinarios', opciones: ['0) Ninguno.', '1) Leve.', '2) Moderado.', '3) Severo.', '4) Incapacitante.'] },
            { texto: '13. Síntomas autonómicos', opciones: ['0) Ninguno.', '1) Leve.', '2) Moderado.', '3) Severo.', '4) Incapacitante.'] },
            { texto: '14. Comportamiento durante la entrevista', opciones: ['0) Relajado.', '1) Leve inquietud.', '2) Moderada inquietud.', '3) Severa inquietud.', '4) Incapacitante.'] }
        ],
        baremos: [
            { min: 0, max: 7, interpretacion: 'Ansiedad ausente o mínima' },
            { min: 8, max: 14, interpretacion: 'Ansiedad leve' },
            { min: 15, max: 21, interpretacion: 'Ansiedad moderada' },
            { min: 22, max: 56, interpretacion: 'Ansiedad grave' }
        ]
    },
    'minimental': {
        nombre: 'Mini-Examen del Estado Mental (MMSE)',
        instrucciones: 'Responda cada ítem según la evaluación. Seleccione la opción que corresponda.',
        items: [
            { texto: '1. Orientación temporal: ¿En qué año estamos?', opciones: ['Correcto (1 punto)', 'Incorrecto (0 puntos)'] },
            { texto: '2. Orientación temporal: ¿En qué estación estamos?', opciones: ['Correcto (1 punto)', 'Incorrecto (0 puntos)'] },
            { texto: '3. Orientación temporal: ¿En qué mes estamos?', opciones: ['Correcto (1 punto)', 'Incorrecto (0 puntos)'] },
            { texto: '4. Orientación temporal: ¿En qué día del mes estamos?', opciones: ['Correcto (1 punto)', 'Incorrecto (0 puntos)'] },
            { texto: '5. Orientación temporal: ¿En qué día de la semana estamos?', opciones: ['Correcto (1 punto)', 'Incorrecto (0 puntos)'] },
            { texto: '6. Orientación espacial: ¿En qué país estamos?', opciones: ['Correcto (1 punto)', 'Incorrecto (0 puntos)'] },
            { texto: '7. Orientación espacial: ¿En qué provincia/región estamos?', opciones: ['Correcto (1 punto)', 'Incorrecto (0 puntos)'] },
            { texto: '8. Orientación espacial: ¿En qué ciudad estamos?', opciones: ['Correcto (1 punto)', 'Incorrecto (0 puntos)'] },
            { texto: '9. Orientación espacial: ¿En qué hospital/centro estamos?', opciones: ['Correcto (1 punto)', 'Incorrecto (0 puntos)'] },
            { texto: '10. Orientación espacial: ¿En qué planta/piso estamos?', opciones: ['Correcto (1 punto)', 'Incorrecto (0 puntos)'] },
            { texto: '11. Registro: Repita las palabras "Manzana", "Mesa", "Silla".', opciones: ['3 correctas (3 puntos)', '2 correctas (2 puntos)', '1 correcta (1 punto)', '0 correctas (0 puntos)'] },
            { texto: '12. Atención y cálculo: Reste 7 de 100 y continúe restando 7 cinco veces.', opciones: ['5 correctas (5 puntos)', '4 correctas (4 puntos)', '3 correctas (3 puntos)', '2 correctas (2 puntos)', '1 correcta (1 punto)', '0 correctas (0 puntos)'] },
            { texto: '13. Atención: Deletree la palabra "MUNDO" al revés.', opciones: ['Correcto (1 punto)', 'Incorrecto (0 puntos)'] },
            { texto: '14. Recuerdo: ¿Cuáles eran las tres palabras que le pedí que recordara antes?', opciones: ['3 correctas (3 puntos)', '2 correctas (2 puntos)', '1 correcta (1 punto)', '0 correctas (0 puntos)'] },
            { texto: '15. Lenguaje: Nombre este objeto (mostrar un bolígrafo).', opciones: ['Correcto (1 punto)', 'Incorrecto (0 puntos)'] },
            { texto: '16. Lenguaje: Nombre este objeto (mostrar un reloj).', opciones: ['Correcto (1 punto)', 'Incorrecto (0 puntos)'] },
            { texto: '17. Lenguaje: Repita la frase "Ni sí, ni no, ni pero".', opciones: ['Correcto (1 punto)', 'Incorrecto (0 puntos)'] },
            { texto: '18. Lenguaje: Siga una orden de tres pasos: Tome este papel con la mano derecha, dóblelo por la mitad y colóquelo en el suelo.', opciones: ['3 correctos (3 puntos)', '2 correctos (2 puntos)', '1 correcto (1 punto)', '0 correctos (0 puntos)'] },
            { texto: '19. Lenguaje: Lea y obedezca la siguiente orden: "Cierre los ojos".', opciones: ['Correcto (1 punto)', 'Incorrecto (0 puntos)'] },
            { texto: '20. Lenguaje: Escriba una frase completa.', opciones: ['Correcto (1 punto)', 'Incorrecto (0 puntos)'] },
            { texto: '21. Lenguaje: Copie este dibujo (dibujar dos pentágonos superpuestos).', opciones: ['Correcto (1 punto)', 'Incorrecto (0 puntos)'] },
            // Para llegar a 30 ítems, se pueden subdividir algunos ítems de atención, memoria y lenguaje según la versión MMSE utilizada
        ],
        baremos: [
            { min: 27, max: 30, interpretacion: 'Cognición normal' },
            { min: 24, max: 26, interpretacion: 'Deterioro cognitivo leve' },
            { min: 18, max: 23, interpretacion: 'Deterioro cognitivo moderado' },
            { min: 0, max: 17, interpretacion: 'Deterioro cognitivo grave' }
        ]
    }
};

let testActualProfesional = null;
let respuestasTestProfesional = [];
let datosPacienteTest = { nombre: '', edad: '', genero: '' };

function renderDatosPacienteTest(testId) {
    const test = TESTS_PROFESIONALES[testId];
    let modal = document.getElementById('modal-test-profesional');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'modal-test-profesional';
        modal.style.position = 'fixed';
        modal.style.top = '50%';
        modal.style.left = '50%';
        modal.style.transform = 'translate(-50%, -50%)';
        modal.style.background = '#fff';
        modal.style.boxShadow = '0 4px 24px rgba(0,0,0,0.18)';
        modal.style.borderRadius = '12px';
        modal.style.padding = '32px 24px';
        modal.style.maxWidth = '420px';
        modal.style.width = '90%';
        modal.style.zIndex = '9999';
        modal.style.minHeight = '120px';
        modal.style.overflowY = 'auto';
        modal.innerHTML = `<div id="modal-test-profesional-body"></div>`;
        document.body.appendChild(modal);
    }
    document.getElementById('modal-test-profesional-body').innerHTML = `
        <h2 class="test-modal-title">${test.nombre}</h2>
        <p class="test-modal-instrucciones">${test.instrucciones}</p>
        <form id="form-datos-paciente-test" class="form-datos-paciente">
            <div class="form-group-test">
                <label for="nombre">Nombre</label>
                <input type="text" name="nombre" id="nombre" class="input-test" required>
            </div>
            <div class="form-group-test">
                <label for="edad">Edad</label>
                <input type="number" name="edad" id="edad" class="input-test" min="5" max="120" required>
            </div>
            <div class="form-group-test">
                <label for="genero">Género</label>
                <select name="genero" id="genero" class="input-test" required>
                    <option value="">Seleccione</option>
                    <option value="Femenino">Femenino</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Otro">Otro</option>
                </select>
            </div>
            <div class="form-btns-test">
                <button type="submit" class="btn-test">Comenzar test</button>
                <button type="button" id="btn-simular-test" class="btn-nav">Simular respuestas</button>
            </div>
        </form>
    `;
    modal.classList.remove('hidden');
    modal.style.display = 'block';
    document.getElementById('form-datos-paciente-test').onsubmit = function(e) {
        e.preventDefault();
        const fd = new FormData(e.target);
        datosPacienteTest.nombre = fd.get('nombre');
        datosPacienteTest.edad = fd.get('edad');
        datosPacienteTest.genero = fd.get('genero');
        respuestasTestProfesional = [];
        renderItemTestProfesional(testId, 0);
    };
    document.getElementById('btn-simular-test').onclick = function() {
        datosPacienteTest = { nombre: 'Simulado', edad: Math.floor(Math.random()*60+18), genero: 'Otro' };
        respuestasTestProfesional = Array(TESTS_PROFESIONALES[testId].items.length).fill().map(() => Math.floor(Math.random()*TESTS_PROFESIONALES[testId].items[0].opciones.length));
        renderInformeTestProfesional(testId);
    };
    // El botón cerrar ahora solo está en los formularios de ítem y de informe, con clase btn-cerrar-test
}

function renderItemTestProfesional(testId, idx) {
    const test = TESTS_PROFESIONALES[testId];
    const item = test.items[idx];
    let modal = document.getElementById('modal-test-profesional');
    if (!modal) return;
    modal.classList.remove('hidden');
    modal.style.display = 'block';
    document.getElementById('modal-test-profesional-body').innerHTML = `
        <h2 class="test-modal-title">${test.nombre}</h2>
        <p class="test-modal-paciente"><b>Paciente:</b> ${datosPacienteTest.nombre} | <b>Edad:</b> ${datosPacienteTest.edad} | <b>Género:</b> ${datosPacienteTest.genero}</p>
        <p class="test-modal-item"><b>Ítem ${idx+1} de ${test.items.length}</b></p>
        <p class="test-modal-pregunta">${item.texto}</p>
        <form id="form-item-test-prof" class="form-item-test-prof">
            <div class="form-opciones-test">
            ${item.opciones.map((op, i) => `
                <label class="opcion-test-radio"><input type="radio" name="opcion" value="${i}" required> ${op}</label>
            `).join('')}
            </div>
            <div class="form-btns-test">
                <button type="submit" class="btn-test">${idx === test.items.length-1 ? 'Finalizar' : 'Siguiente'}</button>
                <button type="button" id="cerrar-modal-test-profesional" class="btn-nav btn-cerrar-test">Cerrar</button>
            </div>
        </form>
    `;
    // Cerrar modal desde botón
    document.getElementById('cerrar-modal-test-profesional').onclick = function() {
        let modal = document.getElementById('modal-test-profesional');
        if (modal) {
            modal.classList.add('hidden');
            modal.style.display = '';
        }
    };
    document.getElementById('form-item-test-prof').onsubmit = function(e) {
        e.preventDefault();
        const val = parseInt(new FormData(e.target).get('opcion'), 10);
        respuestasTestProfesional[idx] = val;
        if (idx < test.items.length-1) {
            renderItemTestProfesional(testId, idx+1);
        } else {
            renderInformeTestProfesional(testId);
        }
    };
}

function calcularPuntajeTestProfesional(testId) {
    const test = TESTS_PROFESIONALES[testId];
    const total = respuestasTestProfesional.reduce((a,b) => a+b, 0);
    const baremo = test.baremos.find(b => total >= b.min && total <= b.max);
    return { total, interpretacion: baremo ? baremo.interpretacion : 'Sin interpretación' };
}

function renderInformeTestProfesional(testId) {
    const test = TESTS_PROFESIONALES[testId];
    const { total, interpretacion } = calcularPuntajeTestProfesional(testId);
    let modal = document.getElementById('modal-test-profesional');
    if (!modal) return;
    modal.classList.remove('hidden');
    modal.style.display = 'block';
    document.getElementById('modal-test-profesional-body').innerHTML = `
        <div class="informe-profesional-scroll">
            <h2>Informe profesional: ${test.nombre}</h2>
            <p><b>Paciente:</b> ${datosPacienteTest.nombre}</p>
            <p><b>Edad:</b> ${datosPacienteTest.edad}</p>
            <p><b>Género:</b> ${datosPacienteTest.genero}</p>
            <p><b>Instrucciones:</b> ${test.instrucciones}</p>
            <h3>Respuestas:</h3>
            <ol>
                ${test.items.map((item, i) => `<li>${item.texto}<br><b>Respuesta:</b> ${item.opciones[respuestasTestProfesional[i]] || '-'}</li>`).join('')}
            </ol>
            <h3>Puntuación total: ${total}</h3>
            <h3>Interpretación clínica: ${interpretacion}</h3>
            <div class="form-btns-test">
                <button onclick="renderDatosPacienteTest('${testId}')" class="btn-test">Aplicar de nuevo</button>
                <button type="button" id="cerrar-modal-test-profesional-informe" class="btn-nav btn-cerrar-test">Cerrar</button>
            </div>
        </div>
    `;
    // Cerrar modal desde botón en informe
    const cerrarBtn = document.getElementById('cerrar-modal-test-profesional-informe');
    if (cerrarBtn) {
        cerrarBtn.onclick = function() {
            let modal = document.getElementById('modal-test-profesional');
            if (modal) {
                modal.classList.add('hidden');
                modal.style.display = '';
            }
        };
    }
}

// INTEGRACIÓN: Llama a esta función para iniciar el test profesional desde el apartado de TEST
function iniciarTestProfesional(testId) {
    renderDatosPacienteTest(testId);
}
// Configuración de Gemini (Google Generative Language API)
const GEMINI_API_KEY = 'AIzaSyA0gjfDJCafD9shA8Wgk4fB1TPnyoOHz3w';
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`;
/* ==================================== */
/* CONFIGURACIÓN DE HUGGING FACE        */
/* ==================================== */




const data = {
    teorias: {
        psicoanalisis: { titulo: "Psicoanálisis", contenido: "<p>Enfatiza la influencia del inconsciente en la conducta humana.</p>" },
        conductismo: { titulo: "Conductismo", contenido: "<p>Estudia la conducta observable y los mecanismos de aprendizaje.</p>" },
        humanismo: { titulo: "Humanismo", contenido: "<p>Centrado en el potencial humano y la autorrealización.</p>" },
        cognitivismo: { titulo: "Cognitivismo", contenido: "<p>Estudio de los procesos mentales como percepción y memoria.</p>" }
    },
    glosario: {
        "Abulia": {titulo: "Abulia", contenido: "Trastorno caracterizado por la falta de voluntad o motivación para realizar actividades cotidianas. Frecuente en depresión o daño cerebral. (Psicología clínica)"},
        "Afasia": {titulo: "Afasia", contenido: "Alteración del lenguaje causada por daño cerebral, que afecta la capacidad de hablar, comprender, leer o escribir. Ejemplo: afasia de Broca. (Neuropsicología)"},
        "Apego": {titulo: "Apego", contenido: "Vínculo emocional profundo entre un niño y su cuidador principal, fundamental para el desarrollo socioemocional. Ejemplo: apego seguro. (Psicología del desarrollo)"},
        "Ansiedad": {titulo: "Ansiedad", contenido: "Estado emocional de inquietud, temor o preocupación excesiva ante situaciones percibidas como amenazantes. Ejemplo: trastorno de ansiedad generalizada. (Psicología clínica)"},
        "Aprendizaje vicario": {titulo: "Aprendizaje vicario", contenido: "Proceso de adquisición de conductas observando a otros, sin experiencia directa. Ejemplo: niños imitando a adultos. (Psicología social, educativa)"},
        "Autoconcepto": {titulo: "Autoconcepto", contenido: "Imagen que una persona tiene de sí misma, formada por experiencias y evaluaciones personales. (Psicología social, educativa)"},
        "Bulimia nerviosa": {titulo: "Bulimia nerviosa", contenido: "Trastorno alimentario caracterizado por episodios de ingesta excesiva seguidos de conductas compensatorias como el vómito. (Psicología clínica)"},
        "Cognición": {titulo: "Cognición", contenido: "Conjunto de procesos mentales relacionados con el conocimiento, como percepción, memoria, razonamiento y solución de problemas. (Psicología cognitiva)"},
        "Condicionamiento clásico": {titulo: "Condicionamiento clásico", contenido: "Aprendizaje por asociación entre un estímulo neutro y uno significativo, descrito por Pavlov. Ejemplo: salivación de perros ante una campana. (Psicología del aprendizaje)"},
        "Depresión mayor": {titulo: "Depresión mayor", contenido: "Trastorno del estado de ánimo con tristeza persistente, pérdida de interés y alteraciones en el sueño y apetito. (Psicología clínica)"},
        "Disonancia cognitiva": {titulo: "Disonancia cognitiva", contenido: "Incomodidad psicológica causada por la contradicción entre creencias o conductas. Ejemplo: fumar sabiendo que es perjudicial. (Psicología social)"},
        "Empatía": {titulo: "Empatía", contenido: "Capacidad de comprender y compartir los sentimientos de otra persona. Fundamental en la relación terapéutica. (Psicología clínica, social)"},
        "Esquizofrenia": {titulo: "Esquizofrenia", contenido: "Trastorno mental grave con síntomas como alucinaciones, delirios y alteraciones del pensamiento. (Psicología clínica)"},
        "Estímulo condicionado": {titulo: "Estímulo condicionado", contenido: "En el condicionamiento clásico, estímulo originalmente neutro que, tras la asociación, provoca una respuesta. (Psicología del aprendizaje)"},
        "Fobia específica": {titulo: "Fobia específica", contenido: "Miedo intenso e irracional ante objetos o situaciones concretas, como animales o alturas. (Psicología clínica)"},
        "Memoria de trabajo": {titulo: "Memoria de trabajo", contenido: "Sistema cognitivo que permite mantener y manipular información temporalmente para tareas complejas. (Psicología cognitiva)"},
        "Neuroplasticidad": {titulo: "Neuroplasticidad", contenido: "Capacidad del sistema nervioso para reorganizarse y formar nuevas conexiones tras experiencias o lesiones. (Neuropsicología)"},
        "Refuerzo positivo": {titulo: "Refuerzo positivo", contenido: "En el condicionamiento operante, estímulo que aumenta la probabilidad de que una conducta se repita. Ejemplo: premio tras buen comportamiento. (Psicología del aprendizaje)"},
        "Resiliencia": {titulo: "Resiliencia", contenido: "Capacidad de adaptarse positivamente ante la adversidad o el estrés. (Psicología clínica, social)"},
        "Trastorno obsesivo-compulsivo (TOC)": {titulo: "Trastorno obsesivo-compulsivo (TOC)", contenido: "Trastorno caracterizado por obsesiones y compulsiones repetitivas que interfieren en la vida diaria. (Psicología clínica)"},
        // Términos extra para probar paginación
        "Agorafobia": {titulo: "Agorafobia", contenido: "Miedo intenso a lugares o situaciones donde escapar podría ser difícil. (Psicología clínica)"},
        "Agnosia": {titulo: "Agnosia", contenido: "Incapacidad para reconocer objetos a pesar de tener la vista intacta. (Neuropsicología)"},
        "Alucinación": {titulo: "Alucinación", contenido: "Percepción sensorial sin estímulo externo real. (Psicología clínica)"},
        "Amnesia": {titulo: "Amnesia", contenido: "Pérdida parcial o total de la memoria. (Neuropsicología)"},
        "Anhedonia": {titulo: "Anhedonia", contenido: "Incapacidad para experimentar placer. (Psicología clínica)"},
        "Apatía": {titulo: "Apatía", contenido: "Falta de interés o motivación. (Psicología clínica)"},
        "Asertividad": {titulo: "Asertividad", contenido: "Capacidad de expresar opiniones y necesidades de forma adecuada. (Psicología social)"},
        "Atención": {titulo: "Atención", contenido: "Proceso cognitivo de concentración en estímulos relevantes. (Psicología cognitiva)"},
        "Catatonia": {titulo: "Catatonia", contenido: "Alteración motora grave, con inmovilidad o movimientos repetitivos. (Psicología clínica)"},
        "Culpa": {titulo: "Culpa", contenido: "Emoción negativa por haber causado daño o transgredido normas. (Psicología clínica)"},
        "Delirio": {titulo: "Delirio", contenido: "Creencia falsa y persistente, resistente a la evidencia. (Psicología clínica)"},
        "Demencia": {titulo: "Demencia", contenido: "Deterioro progresivo de las funciones cognitivas. (Neuropsicología)"},
        "Despersonalización": {titulo: "Despersonalización", contenido: "Sensación de desconexión de uno mismo. (Psicología clínica)"},
        "Disociación": {titulo: "Disociación", contenido: "Separación de procesos mentales que normalmente están integrados. (Psicología clínica)"},
        "Euforia": {titulo: "Euforia", contenido: "Estado de ánimo anormalmente elevado. (Psicología clínica)"},
        "Hipocondría": {titulo: "Hipocondría", contenido: "Preocupación excesiva por la salud y miedo a tener enfermedades graves. (Psicología clínica)"},
        "Ideación suicida": {titulo: "Ideación suicida", contenido: "Pensamientos recurrentes sobre el suicidio. (Psicología clínica)"},
        "Manía": {titulo: "Manía", contenido: "Estado de ánimo anormalmente elevado, expansivo o irritable. (Psicología clínica)"},
        "Paranoia": {titulo: "Paranoia", contenido: "Desconfianza extrema y sin fundamento hacia los demás. (Psicología clínica)"},
        "Psicosis": {titulo: "Psicosis", contenido: "Pérdida de contacto con la realidad, con alucinaciones o delirios. (Psicología clínica)"},
        "Somatización": {titulo: "Somatización", contenido: "Manifestación de síntomas físicos sin causa médica identificable. (Psicología clínica)"},
        "Tics": {titulo: "Tics", contenido: "Movimientos o sonidos involuntarios y repetitivos. (Psicología clínica)"},
        "Trastorno bipolar": {titulo: "Trastorno bipolar", contenido: "Trastorno del estado de ánimo con episodios de manía y depresión. (Psicología clínica)"},
        "Trastorno de pánico": {titulo: "Trastorno de pánico", contenido: "Episodios súbitos de miedo intenso acompañados de síntomas físicos. (Psicología clínica)"},
        "Trastorno por déficit de atención e hiperactividad (TDAH)": {titulo: "TDAH", contenido: "Trastorno del neurodesarrollo con inatención, hiperactividad e impulsividad. (Psicología clínica, educativa)"}
        // ...puedes seguir agregando más términos para probar la paginación...
    },
    tests: {
        beck: { 
            title: "Escala de Depresión de Beck (BDI-II)",
            questions: [
                { text: "Tristeza: 0) No me siento triste. 1) Me siento triste. 2) Estoy triste todo el tiempo. 3) Estoy tan triste que no puedo soportarlo.", options: [{text:"0", value:0},{text:"1", value:1},{text:"2", value:2},{text:"3", value:3}] },
                { text: "Pesimismo: 0) No soy pesimista. 1) Me siento desanimado. 2) Me siento sin esperanzas. 3) Siento que el futuro es desesperado.", options: [{text:"0", value:0},{text:"1", value:1},{text:"2", value:2},{text:"3", value:3}] }
            ],
            maxScore: 6,
            interpretations: [
                {min:0,max:9,label:"Depresión mínima",description:"No presenta síntomas significativos de depresión."},
                {min:10,max:18,label:"Depresión leve",description:"Presenta algunos síntomas de depresión que pueden requerir atención."},
                {min:19,max:29,label:"Depresión moderada",description:"Presenta varios síntomas de depresión que requieren atención profesional."},
                {min:30,max:63,label:"Depresión grave",description:"Presenta síntomas severos de depresión que requieren intervención inmediata."}
            ]
        },
        hamilton: { 
            title: "Escala de Ansiedad de Hamilton (HAMA)",
            questions: [
                { text: "Estado de ánimo ansioso: 0) Ausente. 1) Preocupación leve. 2) Preocupación moderada. 3) Temores evidentes. 4) Terror o pánico.", options: [{text:"0", value:0},{text:"1", value:1},{text:"2", value:2},{text:"3", value:3},{text:"4", value:4}] },
                { text: "Tensión: 0) Ausente. 1) Preocupación leve. 2) Inquietud e impaciencia. 3) Temblores e incapacidad para relajarse. 4) Tensión extrema.", options: [{text:"0", value:0},{text:"1", value:1},{text:"2", value:2},{text:"3", value:3},{text:"4", value:4}] }
            ],
            maxScore: 8,
            interpretations: [
                {min:0,max:7,label:"Ansiedad ausente o mínima",description:"No presenta síntomas significativos de ansiedad."},
                {min:8,max:14,label:"Ansiedad leve",description:"Presenta algunos síntomas de ansiedad."},
                {min:15,max:21,label:"Ansiedad moderada",description:"Presenta varios síntomas de ansiedad que requieren atención."},
                {min:22,max:56,label:"Ansiedad grave",description:"Presenta síntomas severos de ansiedad que requieren intervención."}
            ]
        },
        minimental: { 
            title: "Mini-Examen del Estado Mental (MMSE)",
            questions: [
                { text: "Orientación temporal: ¿En qué año, estación, mes, día y día de la semana estamos?", options: [{text:"0 errores", value:5},{text:"1 error", value:4},{text:"2-3 errores", value:3},{text:"4-5 errores", value:0}] },
                { text: "Orientación espacial: ¿En qué país, región, ciudad, hospital y planta estamos?", options: [{text:"0 errores", value:5},{text:"1 error", value:4},{text:"2-3 errores", value:3},{text:"4-5 errores", value:0}] }
            ],
            maxScore: 10,
            interpretations: [
                {min:27,max:30,label:"Cognición normal",description:"No se observan déficits cognitivos significativos."},
                {min:24,max:26,label:"Deterioro cognitivo leve",description:"Presenta algunos déficits cognitivos leves."},
                {min:18,max:23,label:"Deterioro cognitivo moderado",description:"Presenta déficits cognitivos moderados."},
                {min:0,max:17,label:"Deterioro cognitivo grave",description:"Presenta déficits cognitivos severos."}
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
let conversationContext = "";

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
    chatbotCloseBtn: document.getElementById('chatbot-close'),
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
            if (btn) iniciarTestProfesional(btn.closest('.test-card').getAttribute('data-test'));
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
    const glosarioGrid = glosarioSection ? glosarioSection.querySelector('.glosario-grid') : null;
    const paginationDiv = glosarioSection ? glosarioSection.querySelector('.pagination') : null;
    const GLOSARIO_POR_PAGINA = 20;
    let glosarioPaginaActual = 1;
    function renderGlosarioPagina(pagina) {
        if (!glosarioGrid) return;
        const terminos = Object.keys(data.glosario).sort();
        const totalPaginas = Math.ceil(terminos.length / GLOSARIO_POR_PAGINA);
        glosarioGrid.innerHTML = '';
        const inicio = (pagina - 1) * GLOSARIO_POR_PAGINA;
        const fin = Math.min(inicio + GLOSARIO_POR_PAGINA, terminos.length);
        for (let i = inicio; i < fin; i++) {
            const termino = terminos[i];
            const card = document.createElement('div');
            card.className = 'termino-card';
            card.setAttribute('data-termino', termino);
            card.innerHTML = `<h3>${data.glosario[termino].titulo}</h3><p>${data.glosario[termino].contenido}</p>`;
            glosarioGrid.appendChild(card);
        }
        // Paginación
        if (paginationDiv) {
            paginationDiv.innerHTML = '';
            for (let p = 1; p <= totalPaginas; p++) {
                const btn = document.createElement('button');
                btn.className = 'btn-pagination';
                btn.textContent = p;
                if (p === pagina) btn.classList.add('active');
                btn.onclick = () => {
                    glosarioPaginaActual = p;
                    renderGlosarioPagina(p);
                };
                paginationDiv.appendChild(btn);
            }
            if (pagina < totalPaginas) {
                const btnSiguiente = document.createElement('button');
                btnSiguiente.className = 'btn-pagination';
                btnSiguiente.textContent = 'Siguiente →';
                btnSiguiente.onclick = () => {
                    glosarioPaginaActual++;
                    renderGlosarioPagina(glosarioPaginaActual);
                };
                paginationDiv.appendChild(btnSiguiente);
            }
        }
    }
    if (glosarioSection && glosarioGrid) {
        renderGlosarioPagina(glosarioPaginaActual);
        glosarioGrid.addEventListener('click', (e) => {
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

    // Funcionalidad del chatbot
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
    if (!teoria) return;
    // Crear modal si no existe
    let modal = document.getElementById('modal-teoria');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'modal-teoria';
        modal.innerHTML = `
            <div id="modal-teoria-barra">Definición de Wikipedia <button id='cerrar-modal-teoria'>Cerrar</button></div>
            <div id="modal-teoria-body"></div>
        `;
        document.body.appendChild(modal);
        // Drag logic solo desde la barra
        let isDragging = false, offsetX = 0, offsetY = 0;
        const barra = modal.querySelector('#modal-teoria-barra');
        barra.addEventListener('mousedown', function(e) {
            isDragging = true;
            offsetX = e.clientX - modal.getBoundingClientRect().left;
            offsetY = e.clientY - modal.getBoundingClientRect().top;
            document.body.style.userSelect = 'none';
        });
        document.addEventListener('mousemove', function(e) {
            if (isDragging) {
                modal.style.left = (e.clientX - offsetX) + 'px';
                modal.style.top = (e.clientY - offsetY) + 'px';
                modal.style.right = '';
                modal.style.bottom = '';
                modal.style.transform = '';
            }
        });
        document.addEventListener('mouseup', function() {
            isDragging = false;
            document.body.style.userSelect = '';
        });
        // Delegar el evento de cerrar SOLO una vez al modal
        modal.addEventListener('click', function(e) {
            if (e.target && e.target.id === 'cerrar-modal-teoria') {
                modal.classList.add('hidden');
                modal.style.display = '';
            }
        });
    }
    // SIEMPRE centrar y mostrar al abrir
    modal.style.left = '50%';
    modal.style.top = '120px';
    modal.style.transform = 'translateX(-50%)';
    document.getElementById('modal-teoria-body').innerHTML = `<h2 style='margin-top:0;'>${teoria.titulo}</h2><div id="teoria-wiki-content"><em>Cargando definición de Wikipedia...</em></div>`;
    modal.classList.remove('hidden');
    modal.style.display = 'block';
    // Consultar Wikipedia
    fetch(`https://es.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(teoria.titulo)}`)
        .then(r => r.json())
        .then(data => {
            if (data.extract) {
                document.getElementById('teoria-wiki-content').innerHTML = `<p>${data.extract}</p><div style='margin-top:12px;'><a href='https://es.wikipedia.org/wiki/${encodeURIComponent(teoria.titulo)}' target='_blank' rel='noopener' class='btn-wiki'>Ver en Wikipedia</a></div>`;
            } else {
                document.getElementById('teoria-wiki-content').innerHTML = '<p>No se encontró definición en Wikipedia.</p>';
            }
        })
        .catch(() => {
            document.getElementById('teoria-wiki-content').innerHTML = '<p>No se pudo obtener la definición de Wikipedia.</p>';
        });
}

function ocultarDetallesTeoria() {
    elements.teoriaDetails.classList.add('hidden');
}

function mostrarExplicacion(termino) {
    // Mostrar información del glosario en ventana modal
    const info = data.glosario[termino];
    if (!info) return;
    let modal = document.getElementById('modal-glosario');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'modal-glosario';
        modal.style.position = 'fixed';
        modal.style.top = '50%';
        modal.style.left = '50%';
        modal.style.transform = 'translate(-50%, -50%)';
        modal.style.background = '#fff';
        modal.style.boxShadow = '0 4px 24px rgba(0,0,0,0.18)';
        modal.style.borderRadius = '12px';
        modal.style.padding = '32px 24px';
        modal.style.maxWidth = '420px';
        modal.style.width = '90%';
        modal.style.zIndex = '9999';
        modal.style.minHeight = '120px';
        modal.style.overflowY = 'auto';
        modal.innerHTML = `<div id="modal-glosario-body"></div><button id="cerrar-modal-glosario">Cerrar</button>`;
        document.body.appendChild(modal);
    }
    const terminoLimpio = termino.replace(/\(.+\)/, '').replace(/de |en |del |la |el |los |las /gi, '').trim().toLowerCase().replace(/ /g, '-');
    const urlDef = `https://psicologiaymente.com/clinica/${terminoLimpio}`;
    const urlSearch = `https://psicologiaymente.com/search/?q=${encodeURIComponent(terminoLimpio)}`;
    document.getElementById('modal-glosario-body').innerHTML = `
        <h2>${info.titulo}</h2>
        <p>${info.contenido}</p>
        <div style="margin-top:18px;text-align:right;">
            <a href="#" id="btn-ver-mas-psicologiaymente" class="btn-wiki">Ver más en Psicología y Mente</a>
        </div>
    `;
    document.getElementById('btn-ver-mas-psicologiaymente').onclick = function(e) {
        e.preventDefault();
        // Abrir primero la definición directa, si falla que el usuario navegue a búsqueda
        const popup = window.open(urlDef, 'psicologiaymente', 'width=900,height=700,scrollbars=yes,resizable=yes');
        setTimeout(() => {
            try {
                if (popup.location.href.includes('/404') || popup.document.title.toLowerCase().includes('404')) {
                    popup.location.href = urlSearch;
                }
            } catch (err) {
                // Si no se puede acceder, dejar la URL directa
            }
        }, 1200);
    };
    modal.classList.remove('hidden');
    modal.style.display = 'block';
    // Cerrar modal
    document.getElementById('cerrar-modal-glosario').onclick = function() {
        modal.classList.add('hidden');
        modal.style.display = '';
    };
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
/* CHATBOT CON HUGGING FACE             */
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
        consultarHuggingFace(userQuery);
    }
}






// Solo Wikipedia como fuente de información
async function consultarHuggingFace(query) {
    isBotTyping = true;
    try {
        // Adaptar términos para Wikipedia (ejemplo: quitar "DSM-5", simplificar)
        let wikiQuery = query.replace(/\bDSM-5\b/gi, '').replace(/grupo [ABCabc]/gi, '').replace(/\s+/g, ' ').trim();
        // Correcciones específicas para trastornos
        const terminosMap = {
            'trastornos de personalidad': 'Trastorno de la personalidad',
            'trastorno de ansiedad generalizada': 'Trastorno de ansiedad generalizada',
            'trastorno de pánico': 'Trastorno de pánico',
            'trastorno obsesivo compulsivo': 'Trastorno obsesivo-compulsivo',
            'fobia social': 'Fobia social',
            'depresión': 'Depresión',
            'esquizofrenia': 'Esquizofrenia',
            'autismo': 'Trastorno del espectro autista',
            'tdah': 'Trastorno por déficit de atención con hiperactividad',
            'trastorno bipolar': 'Trastorno bipolar',
            'trastorno límite de la personalidad': 'Trastorno límite de la personalidad',
            'trastorno narcisista de la personalidad': 'Trastorno narcisista de la personalidad',
            'trastorno paranoide de la personalidad': 'Trastorno paranoide de la personalidad',
            'trastorno esquizoide de la personalidad': 'Trastorno esquizoide de la personalidad',
            'trastorno esquizotípico de la personalidad': 'Trastorno esquizotípico de la personalidad',
            'trastorno antisocial de la personalidad': 'Trastorno antisocial de la personalidad',
            'trastorno histriónico de la personalidad': 'Trastorno histriónico de la personalidad',
            'trastorno evitativo de la personalidad': 'Trastorno evitativo de la personalidad',
            'trastorno dependiente de la personalidad': 'Trastorno dependiente de la personalidad',
            'trastorno obsesivo-compulsivo de la personalidad': 'Trastorno obsesivo-compulsivo de la personalidad'
        };
        for (const [clave, valor] of Object.entries(terminosMap)) {
            if (wikiQuery.toLowerCase().includes(clave)) {
                wikiQuery = valor;
                break;
            }
        }
        let wikiResponse = await fetch(`https://es.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(wikiQuery)}`);
        let wikiData;
        if (wikiResponse.ok) {
            wikiData = await wikiResponse.json();
            if (wikiData.extract) {
                hideTypingIndicator();
                addMessage(wikiData.extract, 'bot');
                conversationContext = conversationContext ? `${conversationContext}\nUsuario: ${query}\nAsistente: ${wikiData.extract}` : `Usuario: ${query}\nAsistente: ${wikiData.extract}`;
                isBotTyping = false;
                return;
            }
        }
        // Si no se encontró la página exacta, buscar por palabra clave
        const searchUrl = `https://es.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(wikiQuery)}&format=json&origin=*`;
        const searchResponse = await fetch(searchUrl);
        if (searchResponse.ok) {
            const searchData = await searchResponse.json();
            if (searchData.query && searchData.query.search && searchData.query.search.length > 0) {
                const firstTitle = searchData.query.search[0].title;
                // Buscar el resumen del primer resultado relevante
                wikiResponse = await fetch(`https://es.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(firstTitle)}`);
                if (wikiResponse.ok) {
                    wikiData = await wikiResponse.json();
                    if (wikiData.extract) {
                        hideTypingIndicator();
                        addMessage(wikiData.extract, 'bot');
                        conversationContext = conversationContext ? `${conversationContext}\nUsuario: ${query}\nAsistente: ${wikiData.extract}` : `Usuario: ${query}\nAsistente: ${wikiData.extract}`;
                        isBotTyping = false;
                        return;
                    }
                }
            }
        }
        const respuestaDefault = `No encontré información relevante en Wikipedia sobre "${query}". ¿Quieres intentar con otra pregunta?`;
        hideTypingIndicator();
        addMessage(respuestaDefault, 'bot');
        conversationContext = conversationContext ? `${conversationContext}\nUsuario: ${query}\nAsistente: ${respuestaDefault}` : `Usuario: ${query}\nAsistente: ${respuestaDefault}`;
    } catch (wikiError) {
        const respuestaDefault = `No pude consultar Wikipedia en este momento. Por favor, intenta más tarde.`;
        hideTypingIndicator();
        addMessage(respuestaDefault, 'bot');
        conversationContext = conversationContext ? `${conversationContext}\nUsuario: ${query}\nAsistente: ${respuestaDefault}` : `Usuario: ${query}\nAsistente: ${respuestaDefault}`;
    }
    isBotTyping = false;
}
// =====================
// TESTS: Simulación profesional BDI-II
// =====================

// Material de apoyo para BDI-II
const bdiMaterial = {
    instrucciones: `A continuación se presentan una serie de afirmaciones. Lee cuidadosamente cada grupo de afirmaciones y selecciona la que mejor describa cómo te has sentido durante la última semana, incluyendo hoy.`,
    apoyo: [
        { tipo: 'imagen', url: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Beck_Depression_Inventory_example.png', descripcion: 'Ejemplo de hoja de respuestas BDI-II' }
    ]
};

// Datos del paciente (pueden ser editables en la UI)
let paciente = {
    nombre: '',
    edad: 25,
    sexo: 'Masculino'
};

// Estructura profesional del BDI-II (abreviado para ejemplo)
const bdiTest = {
    nombre: 'Inventario de Depresión de Beck (BDI-II)',
    instrucciones: bdiMaterial.instrucciones,
    apoyo: bdiMaterial.apoyo,
    items: [
        {
            texto: '1. Tristeza',
            opciones: [
                'No me siento triste',
                'Me siento triste',
                'Estoy triste todo el tiempo',
                'Estoy tan triste o infeliz que no puedo soportarlo'
            ]
        },
        {
            texto: '2. Pesimismo',
            opciones: [
                'No estoy desanimado respecto al futuro',
                'Me siento más desanimado respecto al futuro de lo que solía estarlo',
                'No espero que las cosas funcionen para mí',
                'Siento que el futuro es desesperanzador y que las cosas no pueden mejorar'
            ]
        },
        {
            texto: '3. Fracaso',
            opciones: [
                'No me siento un fracasado',
                'He fracasado más de lo que debería',
                'Cuando miro hacia atrás, veo muchos fracasos',
                'Siento que como persona soy un completo fracaso'
            ]
        }
        // ...agrega los 21 ítems reales del BDI-II aquí...
    ],
    baremos: [
        { min: 0, max: 13, interpretacion: 'Mínima o sin depresión' },
        { min: 14, max: 19, interpretacion: 'Depresión leve' },
        { min: 20, max: 28, interpretacion: 'Depresión moderada' },
        { min: 29, max: 63, interpretacion: 'Depresión grave' }
    ]
};

// Estado del test
let bdiRespuestas = [];
let bdiEnCurso = false;

// Función para iniciar el test BDI-II
function iniciarBDI() {
    bdiRespuestas = [];
    bdiEnCurso = true;
    mostrarPantallaInstrucciones();
}

// Mostrar instrucciones y material de apoyo
function mostrarPantallaInstrucciones() {
    const contenedor = document.getElementById('test-container');
    contenedor.innerHTML = `
        <h2>${bdiTest.nombre}</h2>
        <p><b>Edad:</b> ${paciente.edad} <b>Sexo:</b> ${paciente.sexo}</p>
        <p><b>Instrucciones:</b> ${bdiTest.instrucciones}</p>
        <div>
            ${bdiTest.apoyo.map(a => `<img src="${a.url}" alt="${a.descripcion}" style="max-width:300px;"><br><small>${a.descripcion}</small>`).join('<br>')}
        </div>
        <button onclick="mostrarPreguntaBDI(0)">Comenzar test</button>
    `;
}

// Mostrar pregunta del BDI-II
function mostrarPreguntaBDI(indice) {
    const item = bdiTest.items[indice];
    const contenedor = document.getElementById('test-container');
    contenedor.innerHTML = `
        <div class="bdi-pregunta-scroll">
            <h2 class="test-modal-title">${bdiTest.nombre}</h2>
            <p class="test-modal-item"><b>Pregunta ${indice + 1} de ${bdiTest.items.length}</b></p>
            <p class="test-modal-pregunta">${item.texto}</p>
            <form id="form-bdi" class="form-item-test-prof">
                <div class="form-opciones-test">
                ${item.opciones.map((op, i) => `
                    <label class="opcion-test-radio"><input type="radio" name="opcion" value="${i}" ${bdiRespuestas[indice] == i ? 'checked' : ''}> ${op}</label>
                `).join('')}
                </div>
                <div class="form-btns-test">
                    <button type="button" onclick="mostrarPreguntaBDI(${indice - 1})" class="btn-cerrar-test" ${indice === 0 ? 'style="display:none"' : ''}>Anterior</button>
                    <button type="button" onclick="guardarRespuestaBDI(${indice})" class="btn-test">${indice === bdiTest.items.length-1 ? 'Finalizar' : 'Siguiente'}</button>
                </div>
            </form>
        </div>
    `;
}

// Guardar respuesta y avanzar
function guardarRespuestaBDI(indice) {
    const form = document.getElementById('form-bdi');
    const seleccion = form.opcion.value;
    bdiRespuestas[indice] = parseInt(seleccion);
    if (indice < bdiTest.items.length - 1) {
        mostrarPreguntaBDI(indice + 1);
    } else {
        mostrarInformeBDI();
    }
}

// Simular respuestas lógicas
function simularRespuestasBDI() {
    bdiRespuestas = bdiTest.items.map(() => Math.floor(Math.random() * 4));
    mostrarInformeBDI();
}

// Calcular puntuación y mostrar informe profesional
function mostrarInformeBDI() {
    const total = bdiRespuestas.reduce((a, b) => a + b, 0);
    const baremo = bdiTest.baremos.find(b => total >= b.min && total <= b.max);
    const contenedor = document.getElementById('test-container');
    contenedor.innerHTML = `
        <h2>Informe profesional: ${bdiTest.nombre}</h2>
        <p><b>Edad:</b> ${paciente.edad} <b>Sexo:</b> ${paciente.sexo}</p>
        <p><b>Instrucciones:</b> ${bdiTest.instrucciones}</p>
        <h3>Material de apoyo utilizado:</h3>
        <ul>${bdiTest.apoyo.map(a => `<li>${a.descripcion}</li>`).join('')}</ul>
        <h3>Respuestas del paciente:</h3>
        <ol>${bdiRespuestas.map((r, i) => `<li>${bdiTest.items[i].texto}: <b>${bdiTest.items[i].opciones[r]}</b> (valor: ${r})</li>`).join('')}</ol>
        <h3>Puntuación total: <span style="color:blue">${total}</span></h3>
        <h3>Interpretación clínica: <span style="color:red">${baremo ? baremo.interpretacion : 'Sin baremo'}</span></h3>
        <button onclick="iniciarBDI()">Repetir test</button>
        <button onclick="simularRespuestasBDI()">Simular respuestas</button>
    `;
}
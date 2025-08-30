document.addEventListener('DOMContentLoaded', function() {
    // Obtener elementos del DOM
    const knownDoseInput = document.getElementById('knownDose');
    const knownVolumeInput = document.getElementById('knownVolume');
    const desiredDoseInput = document.getElementById('desiredDose');
    const calculateBtn = document.getElementById('calculateBtn');
    const resultDiv = document.getElementById('result');
    const resultValue = document.getElementById('resultValue');
    
    // Selector de unidades
    const unitToggle = document.getElementById('unitToggle');
    const unitTexts = document.querySelectorAll('.unit-text');
    
    // Función para actualizar las etiquetas de unidad
    function updateUnitLabels() {
        const unit = unitToggle.checked ? 'cc' : 'mg';
        
        // Actualizar todos los textos de unidad
        unitTexts.forEach(textElement => {
            textElement.textContent = unit;
        });
        
        // Actualizar placeholders
        knownDoseInput.placeholder = "Ej: " + (unitToggle.checked ? "10" : "500");
        desiredDoseInput.placeholder = "Ej: " + (unitToggle.checked ? "5" : "250");
        
        // Si hay un resultado visible, recalcular
        if (resultDiv.style.display === 'block') {
            calculateDose();
        }
    }
    
    // Función para calcular la dosis
    function calculateDose() {
        // Obtener valores de los inputs
        const knownDose = parseFloat(knownDoseInput.value);
        const knownVolume = parseFloat(knownVolumeInput.value);
        const desiredDose = parseFloat(desiredDoseInput.value);
        
        // Validar que todos los campos tengan valores
        if (isNaN(knownDose) || isNaN(knownVolume) || isNaN(desiredDose)) {
            alert("Por favor, complete todos los campos con valores numéricos.");
            return;
        }
        
        // Validar que los valores sean positivos
        if (knownDose <= 0 || knownVolume <= 0 || desiredDose < 0) {
            alert("Por favor, ingrese valores positivos en todos los campos.");
            return;
        }
        
        // Determinar si estamos calculando en mg o cc
        const isCalculatingInCC = unitToggle.checked;
        
        let result, unit;
        
        if (isCalculatingInCC) {
            // Cálculo en cc: (dosis deseada * volumen conocido) / dosis conocida
            result = (desiredDose * knownVolume) / knownDose;
            unit = "cc";
        } else {
            // Cálculo en mg: (dosis deseada * volumen conocido) / dosis conocida
            result = (desiredDose * knownVolume) / knownDose;
            unit = "mg";
        }
        
        // Mostrar el resultado con 2 decimales
        resultValue.textContent = result.toFixed(2) + " " + unit;
        
        // Mostrar el contenedor de resultados
        resultDiv.style.display = 'block';
    }
    
    // Agregar evento al botón de calcular
    calculateBtn.addEventListener('click', calculateDose);
    
    // Agregar evento para calcular al presionar Enter en cualquier campo
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                calculateDose();
            }
        });
    });
    
    // Validación en tiempo real para evitar valores negativos
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.value < 0) {
                this.value = 0;
            }
        });
    });
    
    // Actualizar etiquetas cuando se cambie el toggle de unidades
    unitToggle.addEventListener('change', updateUnitLabels);
    
    // Inicializar etiquetas
    updateUnitLabels();

    // Seleccionar elementos del DOM para la funcionalidad de goteo
    const modeButtons = document.querySelectorAll('.mode-btn');
    const doseSection = document.getElementById('dose-section');
    const goteoSection = document.getElementById('goteo-section');
    const volumenTotalInput = document.getElementById('volumenTotal');
    const tiempoInfusionInput = document.getElementById('tiempoInfusion');
    const calculateMacroBtn = document.getElementById('calculateMacroBtn');
    const calculateMicroBtn = document.getElementById('calculateMicroBtn');
    const goteoResult = document.getElementById('goteoResult');
    const goteoResultValue = document.getElementById('goteoResultValue');

    // Seleccionar elementos del DOM para la funcionalidad de nebulización
    const nebulizacionSection = document.getElementById('nebulizacion-section');
    const medicamentoNebulInput = document.getElementById('medicamentoNebul');
    const solucionSalinaInput = document.getElementById('solucionSalina');
    const emergencyBtn = document.getElementById('emergencyBtn');
    const nebulResult = document.getElementById('nebulResult');
    const nebulResultValue = document.getElementById('nebulResultValue');

    // Variables para el temporizador de nebulización
    const startNebulBtn = document.getElementById('startNebulBtn');
    const pauseNebulBtn = document.getElementById('pauseNebulBtn');
    const resumeNebulBtn = document.getElementById('resumeNebulBtn');
    const stopNebulBtn = document.getElementById('stopNebulBtn');
    const timerContainer = document.getElementById('timerContainer');
    const timerDisplay = document.getElementById('timerDisplay');
    const timerPhase = document.getElementById('timerPhase');
    const progressBar = document.getElementById('progressBar');
    const nebulizationTimeInput = document.getElementById('nebulizationTime');
    const restTimeInput = document.getElementById('restTime');

    let timerInterval;
    let remainingTime = 0;
    let currentPhase = ''; // 'nebulization' o 'rest'
    let isTimerRunning = false;
    let totalNebulizationTime = 0;
    let totalRestTime = 0;
    let totalTime = 0;

    // Variable para controlar el modo emergencia
    let emergencyMode = false;

    // Cambiar entre modos de cálculo
    modeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const mode = this.getAttribute('data-mode');
            
            // Actualizar botones activos
            modeButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Mostrar la sección correspondiente
            if (mode === 'dose') {
                doseSection.style.display = 'block';
                goteoSection.style.display = 'none';
                nebulizacionSection.style.display = 'none';
            } else if (mode === 'goteo') {
                doseSection.style.display = 'none';
                goteoSection.style.display = 'block';
                nebulizacionSection.style.display = 'none';
            } else if (mode === 'nebulizacion') {
                doseSection.style.display = 'none';
                goteoSection.style.display = 'none';
                nebulizacionSection.style.display = 'block';
            }
        });
    });

    // Calcular macrogoteo (gotas/minuto)
    calculateMacroBtn.addEventListener('click', function() {
        const volumenTotal = parseFloat(volumenTotalInput.value);
        const tiempoInfusion = parseFloat(tiempoInfusionInput.value);
        
        if (isNaN(volumenTotal) || isNaN(tiempoInfusion) || volumenTotal <= 0 || tiempoInfusion <= 0) {
            alert("Por favor, ingrese valores válidos para volumen y tiempo.");
            return;
        }
        
        // Fórmula: (Volumen total * 20) / Tiempo en minutos
        // Donde 20 es el factor de goteo para macrogoteo (20 gotas = 1 mL)
        const resultado = (volumenTotal * 20) / tiempoInfusion;
        
        goteoResultValue.textContent = resultado.toFixed(2) + " gotas/min";
        goteoResult.style.display = 'block';
    });

    // Calcular microgoteo (microgotas/minuto)
    calculateMicroBtn.addEventListener('click', function() {
        const volumenTotal = parseFloat(volumenTotalInput.value);
        const tiempoInfusion = parseFloat(tiempoInfusionInput.value);
        
        if (isNaN(volumenTotal) || isNaN(tiempoInfusion) || volumenTotal <= 0 || tiempoInfusion <= 0) {
            alert("Por favor, ingrese valores válidos para volumen y tiempo.");
            return;
        }
        
        // Fórmula: (Volumen total * 60) / Tiempo en minutos
        // Donde 60 es el factor de goteo para microgoteo (60 microgotas = 1 mL)
        const resultado = (volumenTotal * 60) / tiempoInfusion;
        
        goteoResultValue.textContent = resultado.toFixed(2) + " microgotas/min";
        goteoResult.style.display = 'block';
    });

    // Validación para inputs de goteo
    const goteoInputs = [volumenTotalInput, tiempoInfusionInput];
    goteoInputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.value < 0) {
                this.value = 0;
            }
        });
    });

    // Activar/desactivar modo emergencia
    emergencyBtn.addEventListener('click', function() {
        emergencyMode = !emergencyMode;
        
        if (emergencyMode) {
            // Activar modo emergencia
            solucionSalinaInput.readOnly = false;
            solucionSalinaInput.classList.add('editable');
            emergencyBtn.textContent = 'Desactivar Emergencia 🔒';
            emergencyBtn.style.backgroundColor = '#28a745';
        } else {
            // Desactivar modo emergencia
            solucionSalinaInput.readOnly = true;
            solucionSalinaInput.classList.remove('editable');
            solucionSalinaInput.value = '3'; // Volver al valor estándar
            emergencyBtn.textContent = 'Modo Emergencia 🔓';
            emergencyBtn.style.backgroundColor = '#dc3545';
        }
    });

    // Calcular nebulización
    function calculateNebulization() {
        const medicamento = parseFloat(medicamentoNebulInput.value);
        const solucionSalina = parseFloat(solucionSalinaInput.value);
        
        if (isNaN(medicamento) || isNaN(solucionSalina) || medicamento <= 0 || solucionSalina <= 0) {
            alert("Por favor, complete todos los campos con valores válidos.");
            return false;
        }
        
        // Validar rangos seguros para nebulización
        if (solucionSalina < 2) {
            alert("Advertencia: El volumen de solución salina no debe ser menor a 2 ml.");
            return false;
        }
        
        if (solucionSalina > 5) {
            alert("Advertencia: El volumen de solución salina no debe exceder los 5 ml.");
            return false;
        }
        
        // Calcular el total de solución (medicamento + solución salina)
        const totalSolucion = medicamento + solucionSalina;
        
        // Mostrar el resultado
        nebulResultValue.textContent = totalSolucion.toFixed(1) + " ml";
        nebulResult.style.display = 'block';
        
        return true;
    }

    // Función para formatear el tiempo (mm:ss)
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    // Función para actualizar la barra de progreso
    function updateProgressBar() {
        const elapsedTime = totalTime - remainingTime;
        const progress = (elapsedTime / totalTime) * 100;
        progressBar.style.width = progress + '%';
    }

    // Función principal del temporizador
    function startTimer() {
        if (isTimerRunning) return;
        
        // Obtener tiempos configurados
        totalNebulizationTime = parseInt(nebulizationTimeInput.value) * 60; // convertir a segundos
        totalRestTime = parseInt(restTimeInput.value) * 60; // convertir a segundos
        totalTime = totalNebulizationTime + totalRestTime;
        
        remainingTime = totalNebulizationTime;
        currentPhase = 'nebulization';
        isTimerRunning = true;
        
        // Actualizar interfaz
        timerPhase.textContent = 'Nebulizando';
        timerPhase.className = 'timer-phase phase-nebulization';
        startNebulBtn.style.display = 'none';
        pauseNebulBtn.style.display = 'block';
        stopNebulBtn.style.display = 'block';
        timerContainer.style.display = 'block';
        
        // Iniciar temporizador
        timerInterval = setInterval(function() {
            remainingTime--;
            
            // Actualizar display
            timerDisplay.textContent = formatTime(remainingTime);
            updateProgressBar();
            
            // Cambiar de fase si es necesario
            if (remainingTime === 0 && currentPhase === 'nebulization') {
                currentPhase = 'rest';
                remainingTime = totalRestTime;
                timerPhase.textContent = 'Tiempo de reposo';
                timerPhase.className = 'timer-phase phase-rest';
                
                // Alerta de cambio de fase
                alert('¡Nebulización completada! Iniciando tiempo de reposo.');
            }
            else if (remainingTime === 0 && currentPhase === 'rest') {
                // Finalizar temporizador
                clearInterval(timerInterval);
                isTimerRunning = false;
                timerPhase.textContent = '¡Completado!';
                timerPhase.className = 'timer-phase phase-complete';
                
                // Alerta de finalización
                alert('¡Proceso de nebulización completado!');
                
                // Restablecer botones
                pauseNebulBtn.style.display = 'none';
                resumeNebulBtn.style.display = 'none';
                stopNebulBtn.style.display = 'none';
                startNebulBtn.style.display = 'block';
            }
        }, 1000);
    }

    // Pausar temporizador
    function pauseTimer() {
        if (!isTimerRunning) return;
        
        clearInterval(timerInterval);
        isTimerRunning = false;
        pauseNebulBtn.style.display = 'none';
        resumeNebulBtn.style.display = 'block';
    }

    // Reanudar temporizador
    function resumeTimer() {
        if (isTimerRunning) return;
        
        isTimerRunning = true;
        resumeNebulBtn.style.display = 'none';
        pauseNebulBtn.style.display = 'block';
        
        timerInterval = setInterval(function() {
            remainingTime--;
            
            // Actualizar display
            timerDisplay.textContent = formatTime(remainingTime);
            updateProgressBar();
            
            // Cambiar de fase si es necesario
            if (remainingTime === 0 && currentPhase === 'nebulization') {
                currentPhase = 'rest';
                remainingTime = totalRestTime;
                timerPhase.textContent = 'Tiempo de reposo';
                timerPhase.className = 'timer-phase phase-rest';
                
                // Alerta de cambio de fase
                alert('¡Nebulización completada! Iniciando tiempo de reposo.');
            }
            else if (remainingTime === 0 && currentPhase === 'rest') {
                // Finalizar temporizador
                clearInterval(timerInterval);
                isTimerRunning = false;
                timerPhase.textContent = '¡Completado!';
                timerPhase.className = 'timer-phase phase-complete';
                
                // Alerta de finalización
                alert('¡Proceso de nebulización completado!');
                
                // Restablecer botones
                pauseNebulBtn.style.display = 'none';
                resumeNebulBtn.style.display = 'none';
                stopNebulBtn.style.display = 'none';
                startNebulBtn.style.display = 'block';
            }
        }, 1000);
    }

    // Detener temporizador
    function stopTimer() {
        clearInterval(timerInterval);
        isTimerRunning = false;
        
        // Restablecer interfaz
        timerContainer.style.display = 'none';
        pauseNebulBtn.style.display = 'none';
        resumeNebulBtn.style.display = 'none';
        stopNebulBtn.style.display = 'none';
        startNebulBtn.style.display = 'block';
    }

    // Event listeners para los botones del temporizador
    startNebulBtn.addEventListener('click', function() {
        if (calculateNebulization()) {
            startTimer();
        }
    });

    pauseNebulBtn.addEventListener('click', pauseTimer);
    resumeNebulBtn.addEventListener('click', resumeTimer);
    stopNebulBtn.addEventListener('click', stopTimer);

    // Validación para inputs de nebulización
    const nebulInputs = [medicamentoNebulInput, solucionSalinaInput, nebulizationTimeInput, restTimeInput];
    nebulInputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.value < 0) {
                this.value = 0;
            }
        });
    });
});
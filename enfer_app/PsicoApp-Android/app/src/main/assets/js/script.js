// Detectar entorno
const isAndroidApp = /Android/i.test(navigator.userAgent);

// Configuración global
window.APP_CONFIG = {
    isAndroid: isAndroidApp,
    basePath: isAndroidApp ? 'file:///android_asset/' : ''
};

// Función para navegar entre páginas
function navegarA(pagina) {
    if (window.APP_CONFIG.isAndroid) {
        window.location.href = window.APP_CONFIG.basePath + pagina;
    } else {
        window.location.href = pagina;
    }
}

// Función para cargar recursos
function cargarRecurso(ruta) {
    return window.APP_CONFIG.basePath + ruta;
}

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    console.log('PsicoApp cargado en:', window.APP_CONFIG.isAndroid ? 'Android' : 'Web');
    
    if (window.APP_CONFIG.isAndroid) {
        document.body.classList.add('android-app');
        
        // Prevenir zoom no deseado
        document.addEventListener('touchstart', function(event) {
            if (event.touches.length > 1) {
                event.preventDefault();
            }
        }, { passive: false });
        
        // Prevenir doble tap para zoom
        let lastTouchEnd = 0;
        document.addEventListener('touchend', function(event) {
            const now = (new Date()).getTime();
            if (now - lastTouchEnd <= 300) {
                event.preventDefault();
            }
            lastTouchEnd = now;
        }, false);
    }
});

// Polyfill para algunas funciones
if (!String.prototype.includes) {
    String.prototype.includes = function(search, start) {
        if (typeof start !== 'number') {
            start = 0;
        }
        return this.indexOf(search, start) !== -1;
    };
}
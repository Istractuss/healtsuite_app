// Función para cargar las aplicaciones
function cargarApp(app) {
    // Mostrar animación de carga
    const loading = document.createElement('div');
    loading.className = 'loading active';
    loading.innerHTML = '<div class="loading-spinner"></div>';
    document.body.appendChild(loading);
    
    // Redirigir después de un breve delay para que se vea la animación
    setTimeout(() => {
        if (app === 'enfermeria') {
            window.location.href = 'enfermeria.html';
        } else if (app === 'psicologia') {
            window.location.href = 'psicologia.html';
        } else if (app === 'metodos-numericos') {
            window.location.href = 'metodos-numericos.html';
        }
    }, 500);
}

// Efectos de hover para las tarjetas
document.addEventListener('DOMContentLoaded', function() {
    const appCards = document.querySelectorAll('.app-card');
    
    appCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
        
        // Soporte para dispositivos táctiles
        card.addEventListener('touchstart', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('touchend', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});
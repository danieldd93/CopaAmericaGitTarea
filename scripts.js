document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('link-calendario').addEventListener('click', function() {
        window.location.href = 'calendario.html'; // Cambia a la página del calendario
    });

    document.getElementById('link-estadios').addEventListener('click', function() {
        window.location.href = 'estadios.html'; // Cambia a la página de estadios
    });

    document.getElementById('link-noticias').addEventListener('click', function() {
        window.location.href = 'noticias.html'; // Cambia a la página de noticias
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const barras = document.querySelectorAll('.barra');

    barras.forEach(barra => {
        const soundPath = barra.getAttribute('data-sound');
        const audio = new Audio(soundPath);

        barra.addEventListener('click', function () {
            audio.currentTime = 0; // Reinicia o áudio se já estiver em execução
            audio.play();
        });

        // Opcional: Pode adicionar o evento de hover para reproduzir o som
        // barra.addEventListener('mouseover', function() {
        //     audio.currentTime = 0;
        //     audio.play();
        // });
    });
});

const $fondo = document.querySelector('.fondo_globos'),
$principo = document.querySelector('#principio');

    document.getElementById('iniciar').addEventListener('click', function() {
        var audio = document.getElementById('audio');
        audio.play();
        $fondo.style.transform = 'translateY(19.5%)';
        $principo.style.transform = 'translateY(-100%)';
        $fondo.style.transition = 'transition: 0.5s;';
    });

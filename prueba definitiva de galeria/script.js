document.addEventListener('DOMContentLoaded', function() {

    let imagenes = [
        { img: './img/1.1.png' },
        { img: './img/1.2.jpg' },
        { img: './img/1.3.jpg' },
        { img: './img/2.1.jpg' },
        { img: './img/2.2.png' },
        { img: './img/2.3.png' },
        { img: './img/3.1.png' },
        { img: './img/3.2.jpg' },
        { img: './img/3.3.png' },
        { img: './img/4.1.png' },
        { img: './img/4.2.jpg' },
        { img: './img/4.3.jpg' },
        { img: './img/5.1.png' },
        { img: './img/5.2.png' },
        { img: './img/5.3.jpg' }
       
    ];

    let contador = 0
    const contenedor = document.querySelector('.slideshow');
    const overlay = document.querySelector('.overlay');
    const galeria_imagenes = document.querySelectorAll('.photo-gallery img');
    const img_slideshows = document.querySelector('.slideshow img');


    contenedor.addEventListener('click', function(event) {
        let atras = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            img = contenedor.querySelector('img'),
            tgt = event.target
        if (tgt == atras) {
            if (contador > 0) {
                img.src = imagenes[contador - 1].img
                contador--
            } else {
                img.src = imagenes[imagenes.length - 1].img
                contador = imagenes.length - 1
            }
        } else if (tgt == adelante) {
            if (contador < imagenes.length - 1) {
                img.src = imagenes[contador + 1].img
                contador++
            } else {
                img.src = imagenes[0].img
                contador = 0
            }
        }

    })
    Array.from(galeria_imagenes).forEach(img => {
        img.addEventListener('click', event => {
            const imagen_seleccionada = +(event.target.dataset.imgMostrar)
            img_slideshows.src = imagenes[imagen_seleccionada].img
            contador = imagen_seleccionada
            overlay.style.opacity = 1
            overlay.style.visibility = 'visible'
        })
    })

    var span = document.getElementsByClassName("btn_cerrar")[0];
    span.onclick = function() {
        overlay.style.visibility = "hidden";
    }
})
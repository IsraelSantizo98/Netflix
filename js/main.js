window.addEventListener('load', function(){
    //Elemento donde queremos agregar el carousel y la opcion como queres tener visualmente el carousel
    new Glider(document.querySelector('#lc1'), {
        //Cuantos slides se muestran
        slidesToShow: 1,
        //Al presionar la flecha cuandos slides avanzar
        slidesToScroll: 1,
        //Si se activa que se puede mover con el dedo (celular)
        draggable: true,
        //Indicadores (carousel-indicadores)
        arrows: {
            prev: '#fl1',
            next: '#fs1'
        },
        responsive: [
            {
            // screens greater than >= 775px
            breakpoint: 450,
            settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 2,
            slidesToScroll: 2
            }
            },{
            // screens greater than >= 1024px
                    breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
        ]
    });
});
//Glider dos
window.addEventListener('load', function(){
    //Elemento donde queremos agregar el carousel y la opcion como queres tener visualmente el carousel
    new Glider(document.querySelector('#lc2'), {
        //Cuantos slides se muestran
        slidesToShow: 1,
        //Al presionar la flecha cuandos slides avanzar
        slidesToScroll: 1,
        //Si se activa que se puede mover con el dedo (celular)
        draggable: true,
        //Indicadores (carousel-indicadores)
        
        arrows: {
            prev: '#fl2',
            next: '#fs2'
        },
        responsive: [
            {
            // screens greater than >= 775px
            breakpoint: 450,
            settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 2,
            slidesToScroll: 2
            }
            },{
            // screens greater than >= 1024px
                    breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
        ]
    });
});
//Card recomendacion
window.addEventListener('load', function(){
    //Elemento donde queremos agregar el carousel y la opcion como queres tener visualmente el carousel
    new Glider(document.querySelector('#lc3'), {
        //Cuantos slides se muestran
        slidesToShow: 1,
        //Al presionar la flecha cuandos slides avanzar
        slidesToScroll: 1,
        //Si se activa que se puede mover con el dedo (celular)
        draggable: true,
        //Indicadores (carousel-indicadores)
        
        arrows: {
            prev: '#fl3',
            next: '#fs3'
        },
        responsive: [
            {
            // screens greater than >= 775px
            breakpoint: 450,
            settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 2,
            slidesToScroll: 2
            }
            },{
            // screens greater than >= 1024px
                    breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
        ]
    });
});
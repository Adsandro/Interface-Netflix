$('.owl-carousel').owlCarousel({
    loop:true, //efeito de loop, ou seja, se repete, se colocado falto, o carrossel tera um começo e um fim, não ira se reiniciar
    margin:15,
    nav:false, //botoes de navegação
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
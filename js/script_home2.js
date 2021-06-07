
window.addEventListener('load', function () {
    
    new Glider(document.querySelector('.carousel__lista'), {
        slidesToShow: 1,
        dots: '.carousel__indicadores',
        draggable: false,
        rewind: true,
        autoplay: 5000,
        arrows: {
            prev: '.carousel__anterior',
            next: '.carousel__siguiente'
        }
        });
    
});
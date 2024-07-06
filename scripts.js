$(document).ready(function(){
    $('.testimonial-carousel').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev">&larr;</button>',
        nextArrow: '<button type="button" class="slick-next">&rarr;</button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
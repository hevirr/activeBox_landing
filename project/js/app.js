$(function () {
    
    // Fixed Header 
    const header = $('#header'),
          intro = $('#intro');

    let   scrollPos = $(window).scrollTop(),
          introH = intro.innerHeight();  

    function checkScroll(scrollPos, introH) {
            if (scrollPos > introH) {
                header.addClass('fixed');
            } else {
                header.removeClass('fixed');
            }
        }
    
    checkScroll(scrollPos, introH);

    $(window).on('scroll resize', function () {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        
        checkScroll(scrollPos, introH);
    });

    // Nav Toggle 
    let nav = $('#nav');
    $('#navToggle').on('click', function(event) {
        event.preventDefault();

        nav.toggleClass('show');
    });

    // Smooth Scroll 
    $('[data-scroll]').on('click', function(event) {
        event.preventDefault();

        let elementID = $(this).data('scroll'),
            elementOffset = $(elementID).offset().top;

        nav.removeClass('show');

        $('html, body').animate({
            scrollTop: elementOffset - 58
        }, 650);
    });

    // Testimonials
    const slider = $('#testimonialsSlider');

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
      });
});
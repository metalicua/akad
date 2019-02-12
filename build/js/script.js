$(document).ready(function() {
   
    $('.js-portfolio-btns').on( 'click', 'button', function() {
        var filterValue = $(this).data('filter');

        $('.js-portfolio-btns button')
            .removeClass('portfolio__link--active');

        $(this)
            .addClass('portfolio__link--active')
            .siblings()
            .removeClass('portfolio__link--active');

            $('.js-portfolio').isotope({
                filter: filterValue
            });
    });
});
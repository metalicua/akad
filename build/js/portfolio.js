$(document).ready(function() {
    var portfolioGrid = $('.js-portfolio');

    portfolioGrid.isotope({
        itemSelector: '.portfolio__box'
    });

    $('.js-portfolio-btns').on( 'click', 'button', function() {
        var filterValue = $(this).data('filter');
            
        $('.portfolio__link')
            .removeClass('portfolio__link--active');

        $(this)
            .addClass('portfolio__link--active')
            .siblings()
            .removeClass('portfolio__link--active');
       
        portfolioGrid.isotope({ filter: filterValue });
      });

    
});
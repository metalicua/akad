$(document).ready(function() {
    var portfolioGrid = $('#js-portfolio');
    console.log(1);

    portfolioGrid.isotope({
        itemSelector: '.portfolio__box'
    });

    $('.js-portfolio-btns').on( 'click', 'button', function() {
        var filterValue = $(this).data('filter');
       
     
        portfolioGrid.isotope({ filter: filterValue });
      });
});
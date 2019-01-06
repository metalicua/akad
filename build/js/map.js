;(function($){
  'use strict';
  $(window).load(function(){
    var map;
    var mapConteiner = $('#map')[0];
    var mapCenter = {lat: 51.490504, lng: 31.306029};
      map = new google.maps.Map(mapConteiner, {
        center: mapCenter,
        zoom: 10
      });

    var marker = new google.maps.Marker({
      position: mapCenter,
      map: map,
      title: 'Кальянная',
      icon: "img/favicon.png"
    });
   
  });
  

})(jQuery);

    

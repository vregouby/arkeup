/*
Template: Pecto - Multipurpose HTML Template
Author: PECTO
Version: 1.0  
Design and Developed by: PECTO
NOTE:  
*/

/*================================================
[  Table of contents  ]
================================================
:: Predefined Variables
:: Preloader
:: Check Exists
:: Tooltip
:: Counter
:: Owl carousel
:: Owl carousel mobile
:: Countdown
:: Magnific Popup
:: Progressbar
:: Rounded Skill
:: Masonry
:: Isotope
:: Scroll to Top
:: Screen Size Control
:: Background Control
:: Text Rotator
:: Date Time Picker
:: PECTO Window load and functions

======================================
[ End table content ]
======================================*/

/*************************
      Predefined Variables
*************************/ 

 (function($){
  "use strict";

/*************************
      Predefined Variables
*************************/ 
    var PECTO = {},
        $window = $(window),
        $document = $(document),
        $body = $('body');

 /*************************
        Check if function exists
*************************/ 
     $.fn.exists = function () {
        return this.length > 0;
    };

/*************************
         Isotope
*************************/
PECTO.Isotope = function () {
      var $isotope = $(".isotope"),
          $itemElement = '.grid-item',
          $filters = $('.isotope-filters');      
        if ($isotope.exists()) {
            $isotope.isotope({
            resizable: true,
            itemSelector: $itemElement,
              masonry: {
                gutterWidth: 10
              }
            });     
       $filters.on( 'click', 'button', function() {
         var $val = $(this).attr('data-filter');
             $isotope.isotope({ filter: $val });       
             $filters.find('.active').removeClass('active');
             $(this).addClass('active');
      });     
    }
}

/*************************
         masonry
*************************/
PECTO.masonry = function () {
      var $masonry = $('.masonry-main .masonry'),
          $itemElement = '.masonry-main .masonry-item',
          $filters = $('.masonry-main .isotope-filters');  
          if ($masonry.exists()) {
            $masonry.isotope({
              resizable: true,
              percentPosition: true,
              itemSelector: $itemElement,

              masonry: {
               gutter: 0
              }              
            });
               // bind filter button click
           $filters.on( 'click', 'button', function() {
              var filterValue = $(this).attr('data-filter');
               $masonry.isotope({ filter: filterValue });
            });

          $filters.each( function( i, buttonGroup ) {
            var $buttonGroup = $( buttonGroup );
            $buttonGroup.on( 'click', 'button', function() {
              $buttonGroup.find('.active').removeClass('active');
              $(this).addClass('active');
            });
          }); 
       } 
      
  }

/****************************************************
     Window load and functions
****************************************************/
  //Window load functions
    $window.load(function () {
      PECTO.masonry(),
      PECTO.Isotope();
    });

 //Document ready functions
    $document.ready(function () {         
  

        $.HSMarkupCopy.init('.js-copy');  
        
    });


})(jQuery);

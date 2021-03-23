                              // GOAL: sfruttando quando visto questa mattina a lezione, riprodurre la dropdown (menu in alto) 
                              // che trovate al sito di Revolut linkato qua sotto.
                              // NOTA1: e' richiesta la sola dropdown del menu in alto
                              // NOTA2: come sempre massima priorita' al js rispetto al html/css

function handlerIn () {

     var $activeLink = $('li').find('.js-link');

     var $activeDropdown = $('li').find('.js-none');

     console.log($activeDropdown);

     console.log($activeLink);

     
     $activeLink.hover (function() {


          var $activeDropdown = $('li').find('.js-none');

          var $index = $(this).next('div').data('dropdown');

          console.log($activeDropdown.eq($index));

          console.log($index);


          if( !$activeDropdown.eq($index).hasClass('js-none')) {

               $(this).next('div').addClass('js-none');
               
          } 
          

          $(this).next('.js-none').removeClass('js-none');

          console.log('entrata')


     }, function() {


          $('body').click(function () {

               $activeDropdown.addClass('js-none');


          });
          

     });
     
}

$(document).ready(handlerIn);



                              

// function final() {

     


// }

// $(document).ready(final);
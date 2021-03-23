                              // GOAL: sfruttando quando visto questa mattina a lezione, riprodurre la dropdown (menu in alto) 
                              // che trovate al sito di Revolut linkato qua sotto.
                              // NOTA1: e' richiesta la sola dropdown del menu in alto
                              // NOTA2: come sempre massima priorita' al js rispetto al html/css

// GOAL: sfruttando quando visto questa mattina a lezione, riprodurre la dropdown (menu in alto) 
// che trovate al sito di Revolut linkato qua sotto.
// NOTA1: e' richiesta la sola dropdown del menu in alto
// NOTA2: come sempre massima priorita' al js rispetto al html/css

function handlerIn () {

     var $activeLink = $('li').find('.js-link');

     var $activeDropdown = $('li').find('.js-none');


     
     $activeLink.hover (function() {


          var $actualLink = $(this);

          var $actualDropdown = $(this).next();

          console.log(!$activeDropdown.hasClass('js-none'));



          if ( $activeDropdown.hasClass('dropdown') ) {

               $('li > div').addClass('js-none');
               $('li > div').removeClass('dropdown');

          

          }


          $(this).next('.js-none').removeClass('js-none').addClass('dropdown');

          console.log($actualDropdown);

          console.log(!$activeDropdown.hasClass('js-none'));

          console.log('entrata')

     }, function() {


          $('body').click(function () {

               $activeDropdown.addClass('js-none');

          });
          
     });
     
}

$(document).ready(handlerIn);


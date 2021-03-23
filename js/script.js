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

          $(this).next('.js-none').removeClass('js-none');

          
     }), function() {

          $(this).find('.js-none').addClass('js-none');

     }

     
}

$(document).ready(handlerIn);



                              

// function final() {

     


// }

// $(document).ready(final);
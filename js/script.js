//  $(document).ready(function(){
//     $('#messaggio').keydown(aggiungi); // alla pressione del tasto invio 
    
    
//    /*  if(orario < 10){ // controllo sull'orario in minuti
//        orario = "0" + orario;
//          $('#mostra-orario').append(orario);
//          $('#mostra-orario-random').append(orario);
//      }else{
//          // mostra orario
//          $('#mostra-orario').append(orario);
//          $('#mostra-orario-random').append(orario);  //-> Non funziona! da rivedere
//      } */


//      $('#mostra-orario').append(orario);

//      // funzione aggiungi
//      function aggiungi(event){
//          if(event.which == 13 || event.keyCode == 13){

//              if($('#messaggio').val() !== ""){ // controllo sul valore passante vuoto
                
//                  // prelevo il valore, lo assegno e lo vado a stampare 
//                  var valore = $('#messaggio').val();
//                  var elemento = $('#mostra').clone().append(valore).addClass("mostra").removeClass('nascondi');
//                  $('.app-item-child-center-right').append(elemento);
                
//                  // funzione a tempo determinato
//                  setTimeout(function(){
//                      var listaRandom=[ // array elementi
//                          'ciao',
//                          'come stai?',
//                          'tutto okay',
//                          'meglio così',
//                         'allora ci vediamo in giro'
//                      ];

//                      var indice=numeriRandom(0,(listaRandom.length-1)); // scelta randomica degli elementi dalla array 

//                      var elementoRandom= $('#mostraRandom').clone().text(listaRandom[indice]).addClass("mostra").removeClass("nascondi");//lo assegno e lo vado a stampare 
//                      $('#mostra-orario-random').append(orario);
//                      $('.app-item-child-center-right').append(elementoRandom);
//                      /* $('#mostraRandom').find('#mostra-orario-random').append(orario) */
//                      //$('#mostra-orario-random').append(orario);
                    
                    
//                  },1000)

//                  $('#messaggio').remove(valore); //-> Non funziona! da rivedere
//                  //console.log(valore)
               
//              }
            
            
//          }
//      }
     
// });



// // funzione random
// function numeriRandom(min,max){
//     return Math.floor(Math.random()*(max - min + 1) + min);
// }


// // tempo
// var tempo= new Date();
// var orario=tempo.getHours() + ":" + tempo.getMinutes();

// /* $(document).ready(function(){
//     $('#messaggio').keydown(function(e){ 
//         if(e.which == 13 || e.keyCode == 13){
//             invioMessaggio()
//         }
//     });

//     function invioMessaggio(){
//         var valoreInput=$('#messaggio').val();
//         var elementoClone = $('.template .mostra-messaggio').clone().addClass("inviato").find(".paragrafo").append(valoreInput);
//         $('.app-item-child-center-right .mostra').append(elementoClone);
//     }
// }); */



// index e eq
/* aggiungere una classe active, quando inviate un messaggio appenderlo alla classe active
il messaggio che inviate lo deve appendere alla chat active
anche nelle li mettere active





// $('.scroll-icon').click(function(){
//     // $('#utente-passante').html().append('ciao');
// })

/* index() è un metodo integrato in jQuery che viene utilizzato per restituire 
l'indice degli elementi specificati rispetto al selettore. 

$ (Selector) .index (elemento)

eq() Il metodo eq () è un metodo integrato in jQuery che viene utilizzato
per individuare direttamente 
gli elementi selezionati e restituisce un elemento con indice specifico.

$ (Selector) .eq (indice)
*/


// NUOVO

// // prelevo il nome e lo stampo
// $('.name-flex').click(function(){
//    var elemento = $(this).text();
//    $('.nome-passante').text(elemento);
// })

// prelevo il nome e lo stampo
// $('.contact-element').click(function(){
//     var elemento= $('.name-flex').find('h4').text()
//     elemento = $(this).text();
//     $('.nome-passante').text(elemento);
// })

// var img = $('.contact.active').find('img').attr('src');
// var tit = $('.contact.active').find('h3').text();
// // prelevo l'img e lo passo

// $('.img-flex').click(function(){
//     var isThis=$(this);
//     var attrElemento=isThis.attr('src','');
//     $('.img-passante').html(attrElemento);
// });

// $('.contact-element').click(function(){

//     //$('.name-flex').find('div:first-child').text();
//     var elementoAttivo=$('.contact-element.active-utente'); // seleziono l'utente
//     elementoAttivo.removeClass("active-utente");
//     var schermataAttiva=$('.app-item-child-center-right.active'); // seleziono la schermata attive
//     schermataAttiva.removeClass('active'); // rimuovo la classe a schermata attiva

//     $(this).addClass('active-utente'); 
//     var click=$(this).index(); // scopro l'indice dell'utente selezionato
//     // $('.app-item-child-center-right').removeClass('active');
//     var elemento=$('.app-item-child-center-right').eq(click).addClass('active');
//     var img = $('.contact-element.active-utente').find('img').attr('src');
//     var text = $('.contact-element.active-utente').find('h4').text();
//     $('.nome-passante').text(text);
//     $('.img-passante > img').attr('src',img);
// });
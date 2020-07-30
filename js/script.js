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







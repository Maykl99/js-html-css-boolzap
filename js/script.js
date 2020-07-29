$(document).ready(function(){
    $('#messaggio').keydown(aggiungi);
    
    
    if(orario < 10){
        orario = "0" + orario;
        $('#mostra-orario').append(orario);
    }

    $('#mostra-orario').append(orario);
    
    
        function aggiungi(event){
        if(event.which == 13 || event.keyCode == 13){

            if($('#messaggio').val() !== ""){
                
                var valore = $('#messaggio').val();
                var elemento = $('#mostra').clone().append(valore).addClass("mostra").removeClass('nascondi');
                

                $('.app-item-child-center-right').append(elemento);
                

                setTimeout(function(){
                    var listaRandom=[
                        'ciao',
                        'come stai?',
                        'tutto okay',
                        'meglio così',
                        'allora ci vediamo in giro'
                    ];

                    var indice=numeriRandom(0,(listaRandom.length-1));
                    var elementoRandom= $('#mostraRandom').clone().text(listaRandom[indice]).addClass("mostra").removeClass("nascondi");
                    $('.app-item-child-center-right').append(elementoRandom);
                    $('#mostra-orario-random').append(orario);
                },2000)

                }
            }
        }
     
});



// funzione random
function numeriRandom(min,max){
    return Math.floor(Math.random()*(max - min + 1) + min);
}


// tempo
var tempo= new Date();
var orario=tempo.getHours() + ":" + tempo.getMinutes();

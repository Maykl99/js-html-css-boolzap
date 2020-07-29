$(document).ready(function(){
    $('#messaggio').keydown(aggiungi);
    // funzione messaggio
        function aggiungi(event){
        if(event.which == 13 || event.keyCode == 13){

            if($('#messaggio').val() !== ""){
                var valore = $('#messaggio').val();
                console.log(valore);
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

                },2000)

                }
            }
        }
     
});


function numeriRandom(min,max){
    return Math.floor(Math.random()*(max - min + 1) + min);
}

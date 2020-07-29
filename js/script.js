$(document).ready(function(){
    $('#messaggio').keydown(aggiungi);
    // funzione messaggio
        function aggiungi(event){
        if(event.which == 13 || event.keyCode == 13){

            var valore = $('#messaggio').val();
            console.log(valore);
            var elemento = $('#mostra').clone().append(valore).addClass("mostra").removeClass('nascondi');
            
            $('.app-item-child-center-right').append(elemento);

            }
        }
});
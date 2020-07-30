$(document).ready(function(){


$("#messaggio").keydown(function(event){
    if(event.which == 13 || event.keyCode == 13){
        if($('#messaggio').val() !== ""){
            invioMessaggio();
            $('#messaggio').val('')
        }
    }
})


function invioMessaggio(){
    var valore = $("#messaggio").val();
    var clone = $(".template .message").clone();
    clone.addClass("inviato");
    clone.find(".paragrafo").append(valore);
    clone.find(".orario").append(orario);
    $(".app-item-child-center-right.active").append(clone);

    //$('#messaggio').val('');
    setTimeout(rispostaAutomatica,2000);
}

function rispostaAutomatica(){
    var listaRandom=[
        'ciao',
        'come stai?',
        'tutto okay',
        'meglio così',
       'allora ci vediamo in giro'
    ];
    var indice=numeriRandom(0,(listaRandom.length-1));

    var clone2 = $(".template .message").clone();
    clone2.addClass("ricevuto");
    clone2.find(".paragrafo").append(listaRandom[indice])
    clone2.find(".orario").append(orario);
    $(".app-item-child-center-right.active").append(clone2);
}

})


// funzione random
function numeriRandom(min,max){
    return Math.floor(Math.random()*(max - min + 1) + min);
}

// tempo
var tempo= new Date();
var orario=tempo.getHours() + ":" + tempo.getMinutes();


// index e eq


/* aggiungere una classe active, quando inviate un messaggio appenderlo alla classe active

il messaggio che inviate lo deve appendere alla chat active
anche nelle li mettere active
*/

$('.contact-element').click(function(){
    var elementoAttivo=$('.contact-element.active-utente'); // seleziono l'utente
    elementoAttivo.removeClass("active-utente");
    var schermataAttiva=$('.app-item-child-center-right.active'); // seleziono la schermata attive
    schermataAttiva.removeClass('active'); // rimuovo la classe a schermata attiva
    $(this).addClass('active-utente'); 
    var click=$(this).index(); // scopro l'indice dell'utente selezionato
    var elemento=$('.app-item-child-center-right').eq(click).addClass('active'); 
});


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

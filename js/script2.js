$(document).ready(function(){

// ricerca
$("#ricerca-nome").keyup(function(){
    var valoreInput= $("#ricerca-nome").val().toLowerCase();
    var contacts = $('.contact-element');

    contacts.each(function(){
        if($(this).find('h4').text().toLowerCase().includes(valoreInput)){
            $(this).show();
        }else{
            $(this).hide();
        }
    })
});

$("#messaggio").keydown(function(event){
    if(event.which == 13 || event.keyCode == 13){
        if($('#messaggio').val() !== ""){
            invioMessaggio();
            $('#messaggio').val('');
        }
    }
})


function invioMessaggio(){
    var valore = $("#messaggio").val();
    var clone = $(".template .message").clone();
    clone.addClass("inviato");
    clone.find(".paragrafo").append(valore);
    clone.find(".orario").append(data()) //append(orario);
    $(".app-item-child-center-right.active").append(clone);

    //$('#messaggio').val('');
    setTimeout(rispostaAutomatica,500);
}

function rispostaAutomatica(){
    var listaRandom=[
        'ciao',
        'come stai?',
        'tutto okay',
        'meglio così',
        'allora ci vediamo in giro',
        'stai studiando?',
        'fai come vuoi'
    ];
    var indice=numeriRandom(0,(listaRandom.length-1));

    var clone2 = $(".template .message").clone();
    clone2.addClass("ricevuto");
    clone2.find(".paragrafo").append(listaRandom[indice])
    clone2.find(".orario").append(data()); //append(orario);
    $(".app-item-child-center-right.active").append(clone2);
}




$('.contact-element').click(function(){

    //$('.name-flex').find('div:first-child').text();
    var elementoAttivo=$('.contact-element.active-utente'); // seleziono l'utente
    elementoAttivo.removeClass("active-utente");
    var schermataAttiva=$('.app-item-child-center-right.active'); // seleziono la schermata attive
    schermataAttiva.removeClass('active'); // rimuovo la classe a schermata attiva

    $(this).addClass('active-utente'); 
    var click=$(this).index(); // scopro l'indice dell'utente selezionato
    // $('.app-item-child-center-right').removeClass('active');
    var elemento=$('.app-item-child-center-right').eq(click).addClass('active');
    var img = $('.contact-element.active-utente').find('img').attr('src');
    var text = $('.contact-element.active-utente').find('h4').text();
    $('.nome-passante').text(text);
    $('.img-passante > img').attr('src',img);
});

}); // chiusura .ready




// random
function numeriRandom(min,max){
    return Math.floor(Math.random()*(max - min + 1) + min);
}

// tempo
function data(){
    var tempo= new Date();
    var ora= addZero(tempo.getHours());
    var minuti= addZero(tempo.getMinutes());
    var tempoEffettivo= ora + ':' + minuti
    return tempoEffettivo;
}

// tempo aggiunta zero
function addZero(numero){
    if(numero < 10){
        return '0' + numero;
    }
    return numero;
};
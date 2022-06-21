/*
1° metodo!

var numeroContadorSpan = document.getElementById('numeroContador');
var numeroContador = 0;

function incrementa(){
    numeroContador = numeroContador +1;
    numeroContadorSpan.innerHTML = numeroContador;
}
function decrementa(){
    numeroContador = numeroContador -1;
    numeroContadorSpan.innerHTML = numeroContador;
}

2° metodo!
*/
document.getElementById("subtrair").addEventListener("click", decrementa);
document.getElementById("adicionar").addEventListener("click", incrementa);
var numeroContador = 0;
corBotoes();

function decrementa(){
    if(numeroContador <= 0){
        document.getElementById('subtrair').ariaDisabled;
    }else{
        numeroContador--;
        document.getElementById('numeroContador').innerHTML = numeroContador;
        corBotoes();
    }
}

function incrementa(){
    if(numeroContador>=10){
        document.getElementById('adicionar').ariaDisabled;
    }else{
        numeroContador++;
        document.getElementById('numeroContador').innerHTML = numeroContador;
        corBotoes();
    }
}

function corBotoes(){

    if(numeroContador == 0 || numeroContador == 10){
        document.getElementById('numeroContador').style.color = 'red';
    }else{
        document.getElementById('numeroContador').style.color = '#6a11cb';
    }

    if(numeroContador <= 0){
        document.getElementById('subtrair').style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
    }
    if(numeroContador > 0 && numeroContador <10){
        document.getElementById('subtrair').style.backgroundImage = "linear-gradient(to right, #f83600 0%, #f9d423 100%)";
        document.getElementById('adicionar').style.backgroundImage = "linear-gradient(to right, #f83600 0%, #f9d423 100%)";
    }
    if(numeroContador >=10){
        document.getElementById('adicionar').style.backgroundImage = "linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)";
    }


}


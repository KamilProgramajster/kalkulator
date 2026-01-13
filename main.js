var zajetosc = [];
var pamiec_tymczasowa = "";
var pamiec_calkowita = [];
var logi_programisty = [];
var wyniki = [];
var wyswietlacz_glowny = document.getElementById("wyswietlacz_glowny");
var wyswietlacz_polecen = document.getElementById("wyswietlacz_polecen");
var historia_wynikow = document.getElementById("historia_wynikow");
var historia_dzialan = document.getElementById("historia_dzialan");
var licz;
var pamiec_tymczasowa = document.getElementById("wyswietlacz_glowny");

function add(value){
    wyswietlacz_glowny.innerHTML+= value;
    pamiec_tymczasowa += value;
    pamiec_calkowita += value;
    
    

}
function licz(){
    alert(pamiec_tymczasowa);
    wyniki = eval(pamiec_tymczasowa);
    wyniki = wyswietlacz_glowny.innerHTML;
}


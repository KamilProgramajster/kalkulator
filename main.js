var zajetosc = [""];
var pamiec_calkowita = [];
var logi_programisty = [];
var wyniki;
var pamiec_wynikowa = [];
var wyswietlacz_glowny = document.getElementById("wyswietlacz_glowny");
var wyswietlacz_polecen = document.getElementById("wyswietlacz_polecen");
var historia_wynikow = document.getElementById("historia_wynikow");
var historia_dzialan = document.getElementById("historia_dzialan");
var konsola_programisty = document.getElementById("logi_systemu");
var obecny_tryb = 0;
var pamiec_zapisowa_trybu = 0;



function czekajICzysc() {
    setTimeout(function() {
        wyswietlacz_glowny.innerHTML = "";
    }, 2000); // 2000 ms = 2 sekundy
}



function add(value) {
    wyswietlacz_glowny.innerHTML += value;
}

function licz() {
        if(zajetosc[0] == ""){
        if(wyswietlacz_glowny.innerHTML.includes("/0") || wyswietlacz_glowny.innerHTML.includes("0/")){
            wyswietlacz_glowny.innerHTML = "Zwariołeś? nie wolno dzielić przez zero";
            konsola_programisty.innerHTML += "Odmowa dostępu: Zakazane dzielenie przez zero";
            czekajICzysc();
        }
        else{
        wyniki = eval(wyswietlacz_glowny.innerHTML);
        historia_dzialan.innerHTML += wyswietlacz_glowny.innerHTML+"</br>";
        
        
        konsola_programisty.innerHTML += "wykonano "+wyswietlacz_glowny.innerHTML+" co dało wynik "+wyniki+"</br>";
        
        
        
        wyswietlacz_glowny.innerHTML = wyniki;
        pamiec_wynikowa.push(wyniki);
        pamiec_calkowita.push(wyswietlacz_glowny.innerHTML);
        historia_wynikow.innerHTML += wyniki+"</br>";
        ograniczKonsole();
        alert(pamiec_calkowita);


        

        


                
        

        }
        }
        else{
            wyswietlacz_glowny.innerHTML = "program wykonuje inną operację nie można teraz tego policzyć";
        }
        }

function reset(){
    wyswietlacz_glowny.innerHTML = "";
    wyswietlacz_polecen.innerHTML = "";
    historia_wynikow.innerHTML = "";
    historia_dzialan.innerHTML = "";
    zajetosc = [""];  // jeśli chcesz też wyczyścić pamięć zajętości
    pamiec_calkowita = [];
    logi_programisty = [];
    wyniki = undefined;
    konsola_programisty.innerHTML += "Pomyślnie wyczyszczono dane"+"</br>";
    ograniczKonsole();

}
function czysty(){
    wyswietlacz_glowny.innerHTML = wyswietlacz_glowny.innerHTML.slice(0, -1); // usuwa ostatni znak

}
function ograniczKonsole() {
    
    let tekst = konsola_programisty.innerHTML;

    
    let wyrazy = tekst.split(/\s+/); 

    
    if (wyrazy.length > 24) {
        
        wyrazy = wyrazy.slice(6);
    }

   
    konsola_programisty.innerHTML = wyrazy.join(" ");
}
function przywroc_wynik(){
    zajetosc = 1;
    wyswietlacz_polecen.innerHTML = "wprowadź nr. wyniku i kliknij zatwierdź";
    obecny_tryb = 1;
    wyswietlacz_glowny.innerHTML = "";


}
function zatwierdzacz(){
    if(zajetosc == 1){
        
    }
}


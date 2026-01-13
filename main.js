var zajetosc = [""];
var pamiec_calkowita = [];
var logi_programisty = [];
var wyniki;

var wyswietlacz_glowny = document.getElementById("wyswietlacz_glowny");
var wyswietlacz_polecen = document.getElementById("wyswietlacz_polecen");
var historia_wynikow = document.getElementById("historia_wynikow");
var historia_dzialan = document.getElementById("historia_dzialan");
var konsola_programisty = document.getElementById("logi_systemu");

function add(value) {
    wyswietlacz_glowny.innerHTML += value;
}

function licz() {
        if(zajetosc[0] == ""){
        wyniki = eval(wyswietlacz_glowny.innerHTML);
        historia_dzialan.innerHTML += wyswietlacz_glowny.innerHTML+"</br>";
        
        
        konsola_programisty.innerHTML += "wykonano "+wyswietlacz_glowny.innerHTML+" co dało wynik "+wyniki+"</br>";
        
        
        
        wyswietlacz_glowny.innerHTML = wyniki;
        
        pamiec_calkowita.push(wyswietlacz_glowny.innerHTML);
        historia_wynikow.innerHTML += wyniki+"</br>";
        ograniczKonsole();
        alert(pamiec_calkowita);
        

        


                
        

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
    konsola_programisty.innerHTML += "Pomyślnie wyczyszczono dane"+"</br>"

}
function czysty(){
    wyswietlacz_glowny.innerHTML = wyswietlacz_glowny.innerHTML.slice(0, -1); // usuwa ostatni znak

}
function ograniczKonsole() {
    
    let tekst = konsola_programisty.innerHTML;

    // Dzielimy na wyrazy (zakładam, że separowane spacją lub spacją i nową linią)
    let wyrazy = tekst.split(/\s+/); // dzieli po każdym białym znaku

    // Sprawdzamy, czy mamy więcej niż 24 wyrazy
    if (wyrazy.length > 24) {
        // Usuwamy pierwsze 6 wyrazów (najstarsze)
        wyrazy = wyrazy.slice(6);
    }

    // Łączymy z powrotem w string i zapisujemy do konsoli
    konsola_programisty.innerHTML = wyrazy.join(" ");
}


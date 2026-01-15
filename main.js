var zajetosc = 0; //do zatwierdzacza żeby wiedział co ma zrobić
var pamiec_calkowita = ["zerowy rezerwista"]; //przy wyświetlaniu wyniku w funckji zerowy rezerwista po to by liczby były tak jak je widać w interfejsie
var pamiec_dzialan = ["zerowy"];
var logi_programisty = [];
var wyniki; //wynik jako eval
var pamiec_wynikowa = []; //żeby pamiętał
var wyswietlacz_glowny = document.getElementById("wyswietlacz_glowny");
var wyswietlacz_polecen = document.getElementById("wyswietlacz_polecen");
var historia_wynikow = document.getElementById("historia_wynikow");
var historia_dzialan = document.getElementById("historia_dzialan");
var konsola_programisty = document.getElementById("logi_systemu");
var obecny_tryb = 0;
var pamiec_zapisowa_trybu = 0;

//zmienne pod przeliczanie jednostek //zajętości 10 dla modułu przelicz jednostki
var kategoria_przelicz_jednostki;
var jednostki;
var wartosci;




function czekajICzysc() {
    setTimeout(function() {
        wyswietlacz_glowny.innerHTML = "";
    }, 2000); // 2000 ms = 2 sekundy
}



function add(value) {
    wyswietlacz_glowny.innerHTML += value;
}

function licz() {
        if(zajetosc == 0){
        if(wyswietlacz_glowny.innerHTML.includes("/0") ){
            wyswietlacz_glowny.innerHTML = "Zwariołeś? nie wolno dzielić przez zero";
            konsola_programisty.innerHTML += "Odmowa dostępu: Zakazane dzielenie przez zero";
            czekajICzysc();
        }
        else{
        
        wyniki = eval(wyswietlacz_glowny.innerHTML);
        historia_dzialan.innerHTML += wyswietlacz_glowny.innerHTML+"</br>";
        pamiec_dzialan.push(wyswietlacz_glowny.innerHTML)
        
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
    pamiec_calkowita = ["zerowy rezerwista"];
    logi_programisty = [];
    wyniki = undefined;
    konsola_programisty.innerHTML += "Pomyślnie wyczyszczono dane"+"</br>";
    pamiec_dzialan = ["zerowy"]
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
function przywroc_wynik_wynik(){
        wyswietlacz_glowny.innerHTML = pamiec_calkowita[wyswietlacz_glowny.innerHTML];
        zajetosc = 0;
        konsola_programisty.innerHTML += "Wykonano: przywrócenie wyniku "+wyswietlacz_glowny.innerHTML+"</br>";
        wyswietlacz_polecen.innerHTML = "";
}

function przywroc_dzialanie(){
    zajetosc = 2;
    wyswietlacz_polecen.innerHTML = "wprowadź nr. działania i kliknij zatwierdź";
    obecny_tryb = 2;
    wyswietlacz_glowny.innerHTML = "";
}

function przywroc_dzialanie_dzialanie(){
        wyswietlacz_glowny.innerHTML = pamiec_dzialan[wyswietlacz_glowny.innerHTML];
        zajetosc = 0;
        konsola_programisty.innerHTML += "Wykonano: przywrócenie działania "+wyswietlacz_glowny.innerHTML+"</br>";
        wyswietlacz_polecen.innerHTML = "";
}

//funkcje modułu przelicz jednostki
function przelicz_jednostki(){
    zajetosc = 10;
    wyswietlacz_polecen.innerHTML = "wpisz kategorię i kliklnij zatwierdź</br> 1.Droga </br>2.Czas </br>3.Waga </br>";
    wyswietlacz_glowny.innerHTML = "";
}
function zatwierdz_kategorie(){
    kategoria_przelicz_jednostki = wyswietlacz_glowny.innerHTML;
    zajetosc = 11;
    wyswietlacz_polecen.innerHTML = "kliknij jeszcze raz zatwierdź";

}
function podanie_jednostek_tryb_pierwszy(){
    zajetosc = 12;
    wyswietlacz_glowny.innerHTML = "";
    wyswietlacz_polecen.innerHTML = "Podaj jednostki do przeliczenia klniknij na 2 jednostki: pierwszą z jakiej chcesz zmienić a drugą na którą chcesz zmienić i kliknij zatwierdź";
    document.getElementById("jeden").innerHTML = "km";
    document.getElementById("dwa").innerHTML = "m";
    document.getElementById("trzy").innerHTML = "cm";
    document.getElementById("cztery").innerHTML = "mm";
    document.getElementById("piec").style.display="none";
    document.getElementById("szesc").style.display="none";
    document.getElementById("siedem").style.display="none";
    document.getElementById("osiem").style.display="none";
    document.getElementById("dziewiec").style.display="none";
    document.getElementById("zero").style.display="none";
    document.getElementById("wynik").style.display="none";
    document.getElementById("plus").style.display="none";
    document.getElementById("minus").style.display="none";
    document.getElementById("mnoz").style.display="none";
    document.getElementById("dziel").style.display="none";
}
function podanie_jednostek_tryb_drugi(){
 zajetosc = 12;
    wyswietlacz_glowny.innerHTML = "";
    wyswietlacz_polecen.innerHTML = "Podaj jednostki do przeliczenia klniknij na 2 jednostki: pierwszą z jakiej chcesz zmienić a drugą na którą chcesz zmienić i kliknij zatwierdź";
    document.getElementById("jeden").innerHTML = "h";
    document.getElementById("dwa").innerHTML = "m";
    document.getElementById("trzy").innerHTML = "s";
    document.getElementById("cztery").innerHTML = "ms";
    document.getElementById("piec").style.display="none";
    document.getElementById("szesc").style.display="none";
    document.getElementById("siedem").style.display="none";
    document.getElementById("osiem").style.display="none";
    document.getElementById("dziewiec").style.display="none";
    document.getElementById("zero").style.display="none";
    document.getElementById("wynik").style.display="none";
    document.getElementById("plus").style.display="none";
    document.getElementById("minus").style.display="none";
    document.getElementById("mnoz").style.display="none";
    document.getElementById("dziel").style.display="none";

}
function podanie_jednostek_tryb_trzeci(){
 zajetosc = 12;
    wyswietlacz_glowny.innerHTML = "";
    wyswietlacz_polecen.innerHTML = "Podaj jednostki do przeliczenia klniknij na 2 jednostki: pierwszą z jakiej chcesz zmienić a drugą na którą chcesz zmienić i kliknij zatwierdź";
    document.getElementById("jeden").innerHTML = "t";
    document.getElementById("dwa").innerHTML = "kg";
    document.getElementById("trzy").innerHTML = "dag";
    document.getElementById("cztery").innerHTML = "g";
    document.getElementById("piec").style.display="none";
    document.getElementById("szesc").style.display="none";
    document.getElementById("siedem").style.display="none";
    document.getElementById("osiem").style.display="none";
    document.getElementById("dziewiec").style.display="none";
    document.getElementById("zero").style.display="none";
    document.getElementById("wynik").style.display="none";
    document.getElementById("plus").style.display="none";
    document.getElementById("minus").style.display="none";
    document.getElementById("mnoz").style.display="none";
    document.getElementById("dziel").style.display="none";

}
function zatwierdzenie_jednostek(){
    zajetosc = 13;
    jednostki = wyswietlacz_glowny.innerHTML;
    wyswietlacz_polecen.innerHTML = "kliknij zatwierdź jeszcze raz";
    document.getElementById("jeden").innerHTML = "1";
    document.getElementById("dwa").innerHTML = "2";
    document.getElementById("trzy").innerHTML = "3";
    document.getElementById("cztery").innerHTML = "4";
    document.getElementById("piec").innerHTML = "5";
    document.getElementById("szesc").innerHTML = "6";
    document.getElementById("siedem").innerHTML = "7";
    document.getElementById("osiem").innerHTML = "8";
    document.getElementById("dziewiec").innerHTML = "9";
    document.getElementById("zero").innerHTML = "0";
    document.getElementById("wynik").innerHTML = "=";
    document.getElementById("plus").innerHTML = "+";
    document.getElementById("minus").innerHTML = "-";
    document.getElementById("mnoz").innerHTML = "*";
    document.getElementById("dziel").innerHTML = "/";
    document.getElementById("jeden").style.display = "block";
    document.getElementById("dwa").style.display = "block";
    document.getElementById("trzy").style.display = "block";
    document.getElementById("cztery").style.display = "block";
    document.getElementById("piec").style.display = "block";
    document.getElementById("szesc").style.display = "block";
    document.getElementById("siedem").style.display = "block";
    document.getElementById("osiem").style.display = "block";
    document.getElementById("dziewiec").style.display = "block";
    document.getElementById("zero").style.display = "block";
    document.getElementById("wynik").style.display = "block";
    document.getElementById("plus").style.display = "block";
    document.getElementById("minus").style.display = "block";
    document.getElementById("mnoz").style.display = "block";
    document.getElementById("dziel").style.display = "block";
}
function wpisz_wartosci(){
    zajetosc = 14;
    wyswietlacz_glowny.innerHTML = "";
    wyswietlacz_polecen.innerHTML = "Dobrze, teraz wpisz wartość jaką chcesz zmienić  i kliknij zatwierdź"
}
function zatwierdzenie_wartosci(){
    zajetosc = 15;
    wartosci = eval(wyswietlacz_glowny.innerHTML);
    wyswietlacz_polecen.innerHTML = "wszystko gotowe kliknij zatwierdź aby obliczyć";
}


//gudzik zatwierdzania
function zatwierdzacz(){
    if(zajetosc == 1){
        przywroc_wynik_wynik();
    }
    else if(zajetosc == 2){
        przywroc_dzialanie_dzialanie();
    }
    else if(zajetosc == 10){
        zatwierdz_kategorie();
        
    }
    else if(zajetosc == 11){
        if(kategoria_przelicz_jednostki == "1"){podanie_jednostek_tryb_pierwszy()}
        if(kategoria_przelicz_jednostki == "2"){podanie_jednostek_tryb_drugi()}
        if(kategoria_przelicz_jednostki == "3"){podanie_jednostek_tryb_trzeci()}

    }
    else if(zajetosc == 12){
        zatwierdzenie_jednostek();
        

    }
    else if(zajetosc == 13){
        wpisz_wartosci();

    }
    else if(zajetosc == 14){
        zatwierdzenie_wartosci();
    }
    else if(zajetosc == 15){
        if(kategoria_przelicz_jednostki == "1"){
            if(jednostki == "12"){wartosci = wartosci *1000; pamiec_calkowita.push(wartosci);historia_wynikow.innerHTML += wartosci +"</br>"; wyswietlacz_glowny.innerHTML = wartosci; wartosci = 0; zajetosc = 0; konsola_programisty.innerHTML += "Pomyślnie przeliczonono jednostki";jednostki = 0; wyswietlacz_polecen.innerHTML = "";}
            else if(jednostki == "13"){wartosci = wartosci *100000; pamiec_calkowita.push(wartosci);historia_wynikow.innerHTML += wartosci +"</br>" ; wyswietlacz_glowny.innerHTML = wartosci; wartosci = 0; zajetosc = 0; konsola_programisty.innerHTML += "Pomyślnie przeliczonono jednostki"; jednostki = 0;  wyswietlacz_polecen.innerHTML = "";}
            else if(jednostki == "14"){wartosci = wartosci *1000000; pamiec_calkowita.push(wartosci);historia_wynikow.innerHTML += wartosci +"</br>"; wyswietlacz_glowny.innerHTML = wartosci; wartosci = 0; zajetosc = 0; konsola_programisty.innerHTML += "Pomyślnie przeliczonono jednostki"; jednostki = 0;  wyswietlacz_polecen.innerHTML = "";}
            else if(jednostki == "21"){wartosci = wartosci /1000; pamiec_calkowita.push(wartosci);historia_wynikow.innerHTML += wartosci +"</br>" ; wyswietlacz_glowny.innerHTML = wartosci; wartosci = 0; zajetosc = 0; konsola_programisty.innerHTML += "Pomyślnie przeliczonono jednostki"; jednostki = 0;  wyswietlacz_polecen.innerHTML = "";}
            else if(jednostki == "23"){wartosci = wartosci *100; pamiec_calkowita.push(wartosci);historia_wynikow.innerHTML += wartosci  +"</br>"; wyswietlacz_glowny.innerHTML = wartosci; wartosci = 0; zajetosc = 0; konsola_programisty.innerHTML += "Pomyślnie przeliczonono jednostki"; jednostki = 0;  wyswietlacz_polecen.innerHTML = "";}
            else if(jednostki == "24"){wartosci = wartosci *1000; pamiec_calkowita.push(wartosci);historia_wynikow.innerHTML += wartosci +"</br>" ; wyswietlacz_glowny.innerHTML = wartosci; wartosci = 0; zajetosc = 0; konsola_programisty.innerHTML += "Pomyślnie przeliczonono jednostki"; jednostki = 0;  wyswietlacz_polecen.innerHTML = "";}
            else if(jednostki == "31"){wartosci = wartosci /100000; pamiec_calkowita.push(wartosci);historia_wynikow.innerHTML += wartosci +"</br>" ; wyswietlacz_glowny.innerHTML = wartosci; wartosci = 0; zajetosc = 0; konsola_programisty.innerHTML += "Pomyślnie przeliczonono jednostki"; jednostki = 0;  wyswietlacz_polecen.innerHTML = "";}
            else if(jednostki == "32"){wartosci = wartosci /100; pamiec_calkowita.push(wartosci);historia_wynikow.innerHTML += wartosci +"</br>" ; wyswietlacz_glowny.innerHTML = wartosci; wartosci = 0; zajetosc = 0; konsola_programisty.innerHTML += "Pomyślnie przeliczonono jednostki"; jednostki = 0;  wyswietlacz_polecen.innerHTML = "";}
            else if(jednostki == "34"){wartosci = wartosci *10; pamiec_calkowita.push(wartosci);historia_wynikow.innerHTML += wartosci +"</br>" ; wyswietlacz_glowny.innerHTML = wartosci; wartosci = 0; zajetosc = 0; konsola_programisty.innerHTML += "Pomyślnie przeliczonono jednostki"; jednostki = 0;  wyswietlacz_polecen.innerHTML = "";}
            else if(jednostki == "41"){wartosci = wartosci /1000000; pamiec_calkowita.push(wartosci);historia_wynikow.innerHTML += wartosci +"</br>" ; wyswietlacz_glowny.innerHTML = wartosci; wartosci = 0; zajetosc = 0; konsola_programisty.innerHTML += "Pomyślnie przeliczonono jednostki"; jednostki = 0;  wyswietlacz_polecen.innerHTML = "";}
            else if(jednostki == "42"){wartosci = wartosci /1000;pamiec_calkowita.push(wartosci);historia_wynikow.innerHTML += wartosci +"</br>" ; wyswietlacz_glowny.innerHTML = wartosci; wartosci = 0; zajetosc = 0; konsola_programisty.innerHTML += "Pomyślnie przeliczonono jednostki"; jednostki = 0;  wyswietlacz_polecen.innerHTML = "";}
            else if(jednostki == "43"){wartosci = wartosci /10; pamiec_calkowita.push(wartosci);historia_wynikow.innerHTML += wartosci +"</br>" ; wyswietlacz_glowny.innerHTML = wartosci; wartosci = 0; zajetosc = 0; konsola_programisty.innerHTML += "Pomyślnie przeliczonono jednostki"; jednostki = 0;  wyswietlacz_polecen.innerHTML = "";}

        
        }
        else if(kategoria_przelicz_jednostki == "2"){
            if(jednostki == "12"){wartosci = wartosci *60; pamiec_calkowita.push(wartosci);historia_wynikow.innerHTML += wartosci +"</br>"; wyswietlacz_glowny.innerHTML = wartosci; wartosci = 0; zajetosc = 0; konsola_programisty.innerHTML += "Pomyślnie przeliczonono jednostki";jednostki = 0; wyswietlacz_polecen.innerHTML = "";}
            else if(jednostki == "13"){wartosci = wartosci *3600; pamiec_calkowita.push(wartosci);historia_wynikow.innerHTML += wartosci +"</br>" ; wyswietlacz_glowny.innerHTML = wartosci; wartosci = 0; zajetosc = 0; konsola_programisty.innerHTML += "Pomyślnie przeliczonono jednostki"; jednostki = 0;  wyswietlacz_polecen.innerHTML = "";}
            else if(jednostki == "14"){wartosci = wartosci *3600000; pamiec_calkowita.push(wartosci);historia_wynikow.innerHTML += wartosci +"</br>"; wyswietlacz_glowny.innerHTML = wartosci; wartosci = 0; zajetosc = 0; konsola_programisty.innerHTML += "Pomyślnie przeliczonono jednostki"; jednostki = 0;  wyswietlacz_polecen.innerHTML = "";}
            else if(jednostki == "21"){wartosci = wartosci /60; pamiec_calkowita.push(wartosci);historia_wynikow.innerHTML += wartosci +"</br>" ; wyswietlacz_glowny.innerHTML = wartosci; wartosci = 0; zajetosc = 0; konsola_programisty.innerHTML += "Pomyślnie przeliczonono jednostki"; jednostki = 0;  wyswietlacz_polecen.innerHTML = "";}
            else if(jednostki == "23"){wartosci = wartosci *60; pamiec_calkowita.push(wartosci);historia_wynikow.innerHTML += wartosci  +"</br>"; wyswietlacz_glowny.innerHTML = wartosci; wartosci = 0; zajetosc = 0; konsola_programisty.innerHTML += "Pomyślnie przeliczonono jednostki"; jednostki = 0;  wyswietlacz_polecen.innerHTML = "";}
            else if(jednostki == "24"){wartosci = wartosci *60000; pamiec_calkowita.push(wartosci);historia_wynikow.innerHTML += wartosci +"</br>" ; wyswietlacz_glowny.innerHTML = wartosci; wartosci = 0; zajetosc = 0; konsola_programisty.innerHTML += "Pomyślnie przeliczonono jednostki"; jednostki = 0;  wyswietlacz_polecen.innerHTML = "";}
            else if(jednostki == "31"){wartosci = wartosci /3600; pamiec_calkowita.push(wartosci);historia_wynikow.innerHTML += wartosci +"</br>" ; wyswietlacz_glowny.innerHTML = wartosci; wartosci = 0; zajetosc = 0; konsola_programisty.innerHTML += "Pomyślnie przeliczonono jednostki"; jednostki = 0;  wyswietlacz_polecen.innerHTML = "";}
            else if(jednostki == "32"){wartosci = wartosci /60; pamiec_calkowita.push(wartosci);historia_wynikow.innerHTML += wartosci +"</br>" ; wyswietlacz_glowny.innerHTML = wartosci; wartosci = 0; zajetosc = 0; konsola_programisty.innerHTML += "Pomyślnie przeliczonono jednostki"; jednostki = 0;  wyswietlacz_polecen.innerHTML = "";}
            else if(jednostki == "34"){wartosci = wartosci *1000; pamiec_calkowita.push(wartosci);historia_wynikow.innerHTML += wartosci +"</br>" ; wyswietlacz_glowny.innerHTML = wartosci; wartosci = 0; zajetosc = 0; konsola_programisty.innerHTML += "Pomyślnie przeliczonono jednostki"; jednostki = 0;  wyswietlacz_polecen.innerHTML = "";}
            else if(jednostki == "41"){wartosci = wartosci /3600000; pamiec_calkowita.push(wartosci);historia_wynikow.innerHTML += wartosci +"</br>" ; wyswietlacz_glowny.innerHTML = wartosci; wartosci = 0; zajetosc = 0; konsola_programisty.innerHTML += "Pomyślnie przeliczonono jednostki"; jednostki = 0;  wyswietlacz_polecen.innerHTML = "";}
            else if(jednostki == "42"){wartosci = wartosci /60000;pamiec_calkowita.push(wartosci);historia_wynikow.innerHTML += wartosci +"</br>" ; wyswietlacz_glowny.innerHTML = wartosci; wartosci = 0; zajetosc = 0; konsola_programisty.innerHTML += "Pomyślnie przeliczonono jednostki"; jednostki = 0;  wyswietlacz_polecen.innerHTML = "";}
            else if(jednostki == "43"){wartosci = wartosci /1000; pamiec_calkowita.push(wartosci);historia_wynikow.innerHTML += wartosci +"</br>" ; wyswietlacz_glowny.innerHTML = wartosci; wartosci = 0; zajetosc = 0; konsola_programisty.innerHTML += "Pomyślnie przeliczonono jednostki"; jednostki = 0;  wyswietlacz_polecen.innerHTML = "";}

        }
        else if(kategoria_przelicz_jednostki == "3"){
            if(jednostki == "12"){wartosci = wartosci *1000; pamiec_calkowita.push(wartosci);historia_wynikow.innerHTML += wartosci +"</br>"; wyswietlacz_glowny.innerHTML = wartosci; wartosci = 0; zajetosc = 0; konsola_programisty.innerHTML += "Pomyślnie przeliczonono jednostki";jednostki = 0; wyswietlacz_polecen.innerHTML = "";}
            else if(jednostki == "13"){wartosci = wartosci *100000; pamiec_calkowita.push(wartosci);historia_wynikow.innerHTML += wartosci +"</br>" ; wyswietlacz_glowny.innerHTML = wartosci; wartosci = 0; zajetosc = 0; konsola_programisty.innerHTML += "Pomyślnie przeliczonono jednostki"; jednostki = 0;  wyswietlacz_polecen.innerHTML = "";}
            else if(jednostki == "14"){wartosci = wartosci *1000000; pamiec_calkowita.push(wartosci);historia_wynikow.innerHTML += wartosci +"</br>"; wyswietlacz_glowny.innerHTML = wartosci; wartosci = 0; zajetosc = 0; konsola_programisty.innerHTML += "Pomyślnie przeliczonono jednostki"; jednostki = 0;  wyswietlacz_polecen.innerHTML = "";}
            else if(jednostki == "21"){wartosci = wartosci /1000; pamiec_calkowita.push(wartosci);historia_wynikow.innerHTML += wartosci +"</br>" ; wyswietlacz_glowny.innerHTML = wartosci; wartosci = 0; zajetosc = 0; konsola_programisty.innerHTML += "Pomyślnie przeliczonono jednostki"; jednostki = 0;  wyswietlacz_polecen.innerHTML = "";}
            else if(jednostki == "23"){wartosci = wartosci *100; pamiec_calkowita.push(wartosci);historia_wynikow.innerHTML += wartosci  +"</br>"; wyswietlacz_glowny.innerHTML = wartosci; wartosci = 0; zajetosc = 0; konsola_programisty.innerHTML += "Pomyślnie przeliczonono jednostki"; jednostki = 0;  wyswietlacz_polecen.innerHTML = "";}
            else if(jednostki == "24"){wartosci = wartosci *1000; pamiec_calkowita.push(wartosci);historia_wynikow.innerHTML += wartosci +"</br>" ; wyswietlacz_glowny.innerHTML = wartosci; wartosci = 0; zajetosc = 0; konsola_programisty.innerHTML += "Pomyślnie przeliczonono jednostki"; jednostki = 0;  wyswietlacz_polecen.innerHTML = "";}
            else if(jednostki == "31"){wartosci = wartosci /100000; pamiec_calkowita.push(wartosci);historia_wynikow.innerHTML += wartosci +"</br>" ; wyswietlacz_glowny.innerHTML = wartosci; wartosci = 0; zajetosc = 0; konsola_programisty.innerHTML += "Pomyślnie przeliczonono jednostki"; jednostki = 0;  wyswietlacz_polecen.innerHTML = "";}
            else if(jednostki == "32"){wartosci = wartosci /100; pamiec_calkowita.push(wartosci);historia_wynikow.innerHTML += wartosci +"</br>" ; wyswietlacz_glowny.innerHTML = wartosci; wartosci = 0; zajetosc = 0; konsola_programisty.innerHTML += "Pomyślnie przeliczonono jednostki"; jednostki = 0;  wyswietlacz_polecen.innerHTML = "";}
            else if(jednostki == "34"){wartosci = wartosci *10; pamiec_calkowita.push(wartosci);historia_wynikow.innerHTML += wartosci +"</br>" ; wyswietlacz_glowny.innerHTML = wartosci; wartosci = 0; zajetosc = 0; konsola_programisty.innerHTML += "Pomyślnie przeliczonono jednostki"; jednostki = 0;  wyswietlacz_polecen.innerHTML = "";}
            else if(jednostki == "41"){wartosci = wartosci /1000000; pamiec_calkowita.push(wartosci);historia_wynikow.innerHTML += wartosci +"</br>" ; wyswietlacz_glowny.innerHTML = wartosci; wartosci = 0; zajetosc = 0; konsola_programisty.innerHTML += "Pomyślnie przeliczonono jednostki"; jednostki = 0;  wyswietlacz_polecen.innerHTML = "";}
            else if(jednostki == "42"){wartosci = wartosci /1000;pamiec_calkowita.push(wartosci);historia_wynikow.innerHTML += wartosci +"</br>" ; wyswietlacz_glowny.innerHTML = wartosci; wartosci = 0; zajetosc = 0; konsola_programisty.innerHTML += "Pomyślnie przeliczonono jednostki"; jednostki = 0;  wyswietlacz_polecen.innerHTML = "";}
            else if(jednostki == "43"){wartosci = wartosci /10; pamiec_calkowita.push(wartosci);historia_wynikow.innerHTML += wartosci +"</br>" ; wyswietlacz_glowny.innerHTML = wartosci; wartosci = 0; zajetosc = 0; konsola_programisty.innerHTML += "Pomyślnie przeliczonono jednostki"; jednostki = 0;  wyswietlacz_polecen.innerHTML = "";}

        }
    
    }
    

}









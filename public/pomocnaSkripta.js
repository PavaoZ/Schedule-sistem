//AKO SE BILO KAKVA PROMJENA JAVI U FORMI SA INPUT-IMA
function akoSeDesiPromjenaUFormElementuNekom() {
    Kalendar.obojiZauzeca(document.getElementsByClassName("Kalendar"), datum.getMonth(), document.getElementById("selectSale").options[document.getElementById("selectSale").selectedIndex].value, document.getElementById("poc").value, document.getElementById("kra").value);
}

//ZA DUGME PRETHODNI
function pozivZaPrethodni() {
    Kalendar.iscrtajKalendar(document.getElementsByClassName("Kalendar"), datum.getMonth()-1);
}

//ZA DUGME SLJEDECI
function pozivZaSljedeci() {
    Kalendar.iscrtajKalendar(document.getElementsByClassName("Kalendar"), datum.getMonth()+1);
}


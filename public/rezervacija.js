//import { Pozivi } from './Pozivi.js';
let Pozivi = (function() {
    //FUNKCIJA KOJOM SALJEMO PODATKE U NAS MODUL KALENDAR(GOTOVA)
    function ucitavanjePodatakaImpl() {
        var JSONrez;
        //console.log("Za test");
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                JSONrez = JSON.parse(this.responseText);
                Kalendar.ucitajPodatke(JSONrez.periodicna, JSONrez.vanredna);
            }
        };
        xhttp.open("GET", "/zauzeca.json", true);
        xhttp.send();
    }

    function opcijaRezervisanjaImpl(event) {
        
        var nasePolje = event.target;
        var daILIne = confirm("Želite li rezervisati ovaj termin?");
        if(daILIne == true) { 
                    var moze = true;
                    //Ako je ispunjen ovaj uslov ne moze se rezervisati sala
                    if(nasePolje.style.backgroundImage == 'linear-gradient(white 70%, red 30%)') {
                        moze = false;
                        console.log("Ne moze!");
                    }
                    

                    

                    var sala;
                    var pocetak;
                    var kraj;
                    var datum;
                    var data1;

                    pocetak = document.getElementById("poc").value;
                        kraj = document.getElementById("kra").value;
                        sala = document.getElementById("selectSale").options[document.getElementById("selectSale").selectedIndex].value;
                        
                        var mjesec = document.getElementById("mjesecLabel").innerText;
                        
                        if(mjesec == "Decembar") {
                            mjesec = "12";
                        } else if(mjesec == "Novembar") {
                            mjesec = "11";
                        } else if(mjesec == "Oktobar") {
                            mjesec = "10";
                        } else if(mjesec == "Septembar") {
                            mjesec = "9";
                        } else if(mjesec == "August") {
                            mjesec = "8";
                        } else if(mjesec == "Juli") {
                            mjesec = "7";
                        } else if(mjesec == "Juni") {
                            mjesec = "6";
                        } else if(mjesec == "Maj") {
                            mjesec = "5";
                        } else if(mjesec == "April") {
                            mjesec = "4";
                        } else if(mjesec == "Mart") {
                            mjesec = "3";
                        } else if(mjesec == "Februar") {
                            mjesec = "2";
                        } else if(mjesec == "Januar") {
                            mjesec = "1";
                        } 

                        //Za nas dan da odredimo
                        var dann;
                        
                        if(nasePolje.innerText == "1") {
                            dann = "01"
                        } else if(nasePolje.innerText == "2") {
                            dann = "02"
                        } else if(nasePolje.innerText == "3") {
                            dann = "03"
                        } else if(nasePolje.innerText == "4") {
                            dann = "04"
                        } else if(nasePolje.innerText == "5") {
                            dann = "05"
                        } else if(nasePolje.innerText == "6") {
                            dann = "06"
                        } else if(nasePolje.innerText == "7") {
                            dann = "07"
                        } else if(nasePolje.innerText == "8") {
                            dann = "08"
                        } else if(nasePolje.innerText == "9") {
                            dann = "09"
                        } else if(nasePolje.innerText == "10") {
                            dann = "10"
                        } else if(nasePolje.innerText == "11") {
                            dann = "11"
                        } else if(nasePolje.innerText == "12") {
                            dann = "12"
                        } else if(nasePolje.innerText == "13") {
                            dann = "13"
                        } else if(nasePolje.innerText == "14") {
                            dann = "14"
                        } else if(nasePolje.innerText == "15") {
                            dann = "15"
                        } else if(nasePolje.innerText == "16") {
                            dann = "16"
                        } else if(nasePolje.innerText == "17") {
                            dann = "17"
                        } else if(nasePolje.innerText == "18") {
                            dann = "18"
                        } else if(nasePolje.innerText == "19") {
                            dann = "19"
                        } else if(nasePolje.innerText == "20") {
                            dann = "20"
                        } else if(nasePolje.innerText == "21") {
                            dann = "21"
                        } else if(nasePolje.innerText == "22") {
                            dann = "22"
                        } else if(nasePolje.innerText == "23") {
                            dann = "23"
                        } else if(nasePolje.innerText == "24") {
                            dann = "24"
                        } else if(nasePolje.innerText == "25") {
                            dann = "25"
                        } else if(nasePolje.innerText == "26") {
                            dann = "26"
                        } else if(nasePolje.innerText == "27") {
                            dann = "27"
                        } else if(nasePolje.innerText == "28") {
                            dann = "28"
                        } else if(nasePolje.innerText == "29") {
                            dann = "29"
                        } else if(nasePolje.innerText == "30") {
                            dann = "30"
                        } else if(nasePolje.innerText == "31") {
                            dann = "31"
                        }

                        var currentyear = new Date().getFullYear();
                        datum = dann + '.' + mjesec + '.' + currentyear;
                        //{"datum": "19.12.2019", "pocetak": "10:35", "kraj": "11:15", "naziv": "0-01", "predavac": "prof. Miroslav"}
                        //Mali test u konzoli da se zna da se stvarno moze odraditi, plus uzorak novog zauzeca
                        var JSONZauzece = {"datum": datum, "pocetak": pocetak, "kraj": kraj, "naziv": sala, "predavac": "nepoznat"};
                        data1 = JSON.stringify({"datum": datum, "pocetak": pocetak, "kraj": kraj, "naziv": sala, "predavac": "nepoznat"});
                    //Ako nije zauzet termin gradi se JSON podatak
                    if(moze) {
                        
                        console.log(JSONZauzece);
                        console.log("Odradit ce se");

                        var xhttp2 = new XMLHttpRequest();
                        xhttp2.onreadystatechange = function() {
                            if (this.readyState == 4 && this.status == 200) {
                                var JSONrez = JSON.parse(this.responseText);  
                                console.log(JSONrez);
                                                             
                                pozivaUcit();
                                Kalendar.obojiZauzeca(document.getElementsByClassName("Kalendar"), parseInt(mjesec)-1, document.getElementById("selectSale").options[document.getElementById("selectSale").selectedIndex].value, document.getElementById("poc").value, document.getElementById("kra").value);
                            }
                        };
                        xhttp2.open("POST", "/zauzeca.json", true);
                        xhttp2.setRequestHeader("Content-Type", "application/json");
                        xhttp2.send(data1);
                    } else {
                        var xhttp3 = new XMLHttpRequest();
                        xhttp3.onreadystatechange = function() {
                            if (this.readyState == 4 && this.status == 200) {
                                //console.log(this.responseText);
                                var JSONrez1 = JSON.parse(this.responseText);
                                //console.log(JSONrez1);

                                alert("Nije moguće rezervisati salu " + JSONrez1.naziv + " za navedeni datum " + JSONrez1.datum +  " i termin od " + JSONrez1.pocetak + " do " + JSONrez1.kraj + "!");
                            }
                        };
                        xhttp3.open("POST", "/zauzeca.json", true);
                        //var data2 = JSON.stringify({"nema": "nista"});
                        //data1 = JSON.stringify({"dan": datum, "pocetak": pocetak, "kraj": kraj, "naziv": sala, "predavac": "nepoznat"});
                        var data2 = JSON.stringify({"datum": datum, "pocetak": pocetak, "kraj": kraj, "naziv": sala, "predavac": "nekaHvala"});
                        xhttp3.setRequestHeader("Content-Type", "application/json");
                        xhttp3.send(data2);
                    }
        }
    }

    return {
        ucitavanjePodataka: ucitavanjePodatakaImpl,
        opcijaRezervisanja: opcijaRezervisanjaImpl
    }
} ());

window.onload = function() {
    
    Kalendar.iscrtajKalendar(document.getElementsByClassName("Kalendar"), datum.getMonth());
    Pozivi.ucitavanjePodataka();
    
    //OVDJE uzimamo citav nas kalendar i dodajemo listenere da mozemo pratiti sta je rezervisano, a sta ne
    var kalendarRef = document.getElementsByClassName("Kalendar");
    //Da uzmemo sve sto ima u kalendaru i stavimo kao jedan niz
    var nodesOfKalendar = kalendarRef[0].childNodes;
    //Uzimamo samo divContainer klasu iz node stabla
    var divContainer = nodesOfKalendar[3];
    //Uzimamo sada svu djecu divContainera
    var djecaDivContainera = divContainer.childNodes;
    for(var dani = 15; dani <= 95; dani+=2) {
        djecaDivContainera[dani].addEventListener('click', Pozivi.opcijaRezervisanja);
    }
}

function pozivaUcit() {
    Pozivi.ucitavanjePodataka();
}

function opcijaRezervisanja(event) {
    Pozivi.opcijaRezervisanja(event);
}



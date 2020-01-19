let Kalendar = (function() {
    //Globalni datum za citav kalendar
    this.datum = new Date();

    //Dva niza koja ce cuvati nase podatke
    this.periodicnaZauz;
    this.vanrednaZauz;


    //Da znamo gdje nam je krajnji dan za mjesec
    function zaPovratakKrajnjegDana(djecaDivContainera) {
        var pamcenjeZaDanKraj;
        for(var dani = 69; dani <= 97; dani+=2) {
            if(djecaDivContainera[dani].innerHTML == "") {
                pamcenjeZaDanKraj = dani-2;
                dani = 97;
            }
        }
        return pamcenjeZaDanKraj;
    }

    //Da znamo gdje nam je prvi dan za mjesec
    function zaPovratakPocetnogDana(djecaDivContainera) {
        var pamcenjeZaDanPocetak;
        for(var dani = 15; dani <= 97; dani+=2) {
            if(djecaDivContainera[dani].innerHTML != "") {
                pamcenjeZaDanPocetak = dani;
                dani = 97;
            }
        }
        return pamcenjeZaDanPocetak;
    }

    //Da znamo sta je ustvari prvi dan u svakom mjesecu u odnosu na godinu i na mjesec
    function getFirstDayOfMonth(month, year) {
        let date = new Date();
        date.setDate(1);
        date.setYear(year);
        date.setMonth(month);
        return date.getDay();
    }

    

    //Funkcija koja direktno popunjava sve, ovo je samo da si skratim kod
    function zaPopunjavanjeKalendaraPravilno(kalendarRef, mjesec) {
        let prviDanMjeseca = getFirstDayOfMonth(mjesec, datum.getYear());

        var nodesOfKalendar = kalendarRef[0].childNodes;
        //Uzimamo samo divContainer klasu iz node stabla
        var divContainer = nodesOfKalendar[3];
        //Uzimamo sada svu djecu divContainera
        var djecaDivContainera = divContainer.childNodes;

        let prviIndeks;
        let drugiIndeks;

        let januarBroj = 31;
        let februarBroj = 28;
        let martBroj = 31;
        let aprilBroj = 30;
        let majBroj = 31;
        let juniBroj = 30;
        let juliBroj = 31;
        let augustBroj = 31;
        let septembarBroj = 30;
        let oktobarBroj = 31;
        let novembarBroj = 30;
        let decembarBroj = 31;

        if(mjesec == 0) {
            drugiIndeks = 2*januarBroj;
        } else if(mjesec == 1) {
            drugiIndeks = 2*februarBroj;
        } else if(mjesec == 2) {
            drugiIndeks = 2*martBroj;
        } else if(mjesec == 3) {
            drugiIndeks = 2*aprilBroj;
        } else if(mjesec == 4) {
            drugiIndeks = 2*majBroj;
        } else if(mjesec == 5) {
            drugiIndeks = 2*juniBroj;
        } else if(mjesec == 6) {
            drugiIndeks = 2*juliBroj;
        } else if(mjesec == 7) {
            drugiIndeks = 2*augustBroj;
        } else if(mjesec == 8) {
            drugiIndeks = 2*septembarBroj;
        } else if(mjesec == 9) {
            drugiIndeks = 2*oktobarBroj;
        } else if(mjesec == 10) {
            drugiIndeks = 2*novembarBroj;
        } else if(mjesec == 11) {
            drugiIndeks = 2*decembarBroj;
        }

        if(prviDanMjeseca == 0) {
            prviIndeks = 27;
        } else if(prviDanMjeseca == 1) {
            prviIndeks = 15;
        } else if(prviDanMjeseca == 2) {
            prviIndeks = 17;
        } else if(prviDanMjeseca == 3) {
            prviIndeks = 19;
        } else if(prviDanMjeseca == 4) {
            prviIndeks = 21;
        } else if(prviDanMjeseca == 5) {
            prviIndeks = 23;
        } else if(prviDanMjeseca == 6) {
            prviIndeks = 25;
        }
        //prviIndeks+drugiIndeks
        let brojacDana = 1;
        for(let i = 15; i <= 97; i+=2) {
            if(i > prviIndeks+drugiIndeks+2 || i < prviIndeks+4) {
                djecaDivContainera[i].style.textAlign = "center";
                djecaDivContainera[i].style.padding = "20px";
                djecaDivContainera[i].style.border = "none";
                djecaDivContainera[i].style.backgroundImage = 'linear-gradient(lightblue 70%, lightblue 30%)';
                djecaDivContainera[i].style.fontSize = "large";
                djecaDivContainera[i].innerHTML = "";
            }else if(i >= prviIndeks+4 && i <= prviIndeks+drugiIndeks+4) {
                djecaDivContainera[i].style.textAlign = "center";
                djecaDivContainera[i].style.padding = "20px";
                djecaDivContainera[i].style.border = "1px solid blue";
                djecaDivContainera[i].style.backgroundImage = 'linear-gradient(white 70%, white 30%)';
                djecaDivContainera[i].style.fontSize = "large";
                djecaDivContainera[i].innerHTML = brojacDana;
                brojacDana++;
            }  
        }
    }

    //Da nam izracuna offset za dane u gridu kako da ih popunjava
    function trebaMiIzracunatStan(pamcenjeZaDanPocetak, i) {
        var izracunDana;

        if(periodicnaZauz[i].dan == 0 && pamcenjeZaDanPocetak == 17) {
            izracunDana = 12;
        } else if(periodicnaZauz[i].dan == 0 && pamcenjeZaDanPocetak == 19) {
            izracunDana = 10;
        } else if(periodicnaZauz[i].dan == 0 && pamcenjeZaDanPocetak == 21) {
            izracunDana = 8;
        } else if(periodicnaZauz[i].dan == 0 && pamcenjeZaDanPocetak == 23) {
            izracunDana = 6;
        } else if(periodicnaZauz[i].dan == 0 && pamcenjeZaDanPocetak == 25) {
            izracunDana = 4;
        } else if(periodicnaZauz[i].dan == 0 && pamcenjeZaDanPocetak == 27) {
            izracunDana = 2;
        } else if(periodicnaZauz[i].dan == 0 && pamcenjeZaDanPocetak == 29) {
            izracunDana = 0;
        } else if(periodicnaZauz[i].dan == 0 && pamcenjeZaDanPocetak == 31) {
            izracunDana = 14;
        } else if(periodicnaZauz[i].dan == 0 && pamcenjeZaDanPocetak == 15) {
            izracunDana = 14;
        } else if(periodicnaZauz[i].dan == 1 && pamcenjeZaDanPocetak == 17) {
            izracunDana = 0;
        } else if(periodicnaZauz[i].dan == 1 && pamcenjeZaDanPocetak == 19) {
            izracunDana = 12;
        } else if(periodicnaZauz[i].dan == 1 && pamcenjeZaDanPocetak == 21) {
            izracunDana = 10;
        } else if(periodicnaZauz[i].dan == 1 && pamcenjeZaDanPocetak == 23) {
            izracunDana = 8;
        } else if(periodicnaZauz[i].dan == 1 && pamcenjeZaDanPocetak == 25) {
            izracunDana = 6;
        } else if(periodicnaZauz[i].dan == 1 && pamcenjeZaDanPocetak == 27) {
            izracunDana = 4;
        } else if(periodicnaZauz[i].dan == 1 && pamcenjeZaDanPocetak == 29) {
            izracunDana = 2;
        } else if(periodicnaZauz[i].dan == 1 && pamcenjeZaDanPocetak == 31) {
            izracunDana = 0;
        } else if(periodicnaZauz[i].dan == 2 && pamcenjeZaDanPocetak == 17) {
            izracunDana = 2;
        } else if(periodicnaZauz[i].dan == 2 && pamcenjeZaDanPocetak == 19) {
            izracunDana = 0;
        } else if(periodicnaZauz[i].dan == 2 && pamcenjeZaDanPocetak == 21) {
            izracunDana = 12;
        } else if(periodicnaZauz[i].dan == 2 && pamcenjeZaDanPocetak == 23) {
            izracunDana = 10;
        } else if(periodicnaZauz[i].dan == 2 && pamcenjeZaDanPocetak == 25) {
            izracunDana = 8;
        } else if(periodicnaZauz[i].dan == 2 && pamcenjeZaDanPocetak == 27) {
            izracunDana = 6;
        } else if(periodicnaZauz[i].dan == 2 && pamcenjeZaDanPocetak == 29) {
            izracunDana = 4;
        } else if(periodicnaZauz[i].dan == 2 && pamcenjeZaDanPocetak == 31) {
            izracunDana = 2;
        } else if(periodicnaZauz[i].dan == 3 && pamcenjeZaDanPocetak == 17) {
            izracunDana = 4;
        } else if(periodicnaZauz[i].dan == 3 && pamcenjeZaDanPocetak == 19) {
            izracunDana = 16;
        } else if(periodicnaZauz[i].dan == 3 && pamcenjeZaDanPocetak == 21) {
            izracunDana = 0;
        } else if(periodicnaZauz[i].dan == 3 && pamcenjeZaDanPocetak == 23) {
            izracunDana = 12;
        } else if(periodicnaZauz[i].dan == 3 && pamcenjeZaDanPocetak == 25) {
            izracunDana = 10;
        } else if(periodicnaZauz[i].dan == 3 && pamcenjeZaDanPocetak == 27) {
            izracunDana = 8;
        } else if(periodicnaZauz[i].dan == 3 && pamcenjeZaDanPocetak == 29) {
            izracunDana = 6;
        } else if(periodicnaZauz[i].dan == 3 && pamcenjeZaDanPocetak == 31) {
            izracunDana = 4;
        } else if(periodicnaZauz[i].dan == 4 && pamcenjeZaDanPocetak == 17) {
            izracunDana = 6;
        } else if(periodicnaZauz[i].dan == 4 && pamcenjeZaDanPocetak == 19) {
            izracunDana = 4;
        } else if(periodicnaZauz[i].dan == 4 && pamcenjeZaDanPocetak == 21) {
            izracunDana = 2;
        } else if(periodicnaZauz[i].dan == 4 && pamcenjeZaDanPocetak == 23) {
            izracunDana = 0;
        } else if(periodicnaZauz[i].dan == 4 && pamcenjeZaDanPocetak == 25) {
            izracunDana = 12;
        } else if(periodicnaZauz[i].dan == 4 && pamcenjeZaDanPocetak == 27) {
            izracunDana = 10;
        } else if(periodicnaZauz[i].dan == 4 && pamcenjeZaDanPocetak == 29) {
            izracunDana = 8;
        } else if(periodicnaZauz[i].dan == 4 && pamcenjeZaDanPocetak == 31) {
            izracunDana = 6;
        } else if(periodicnaZauz[i].dan == 5 && pamcenjeZaDanPocetak == 17) {
            izracunDana = 8;
        } else if(periodicnaZauz[i].dan == 5 && pamcenjeZaDanPocetak == 19) {
            izracunDana = 6;
        } else if(periodicnaZauz[i].dan == 5 && pamcenjeZaDanPocetak == 21) {
            izracunDana = 4;
        } else if(periodicnaZauz[i].dan == 5 && pamcenjeZaDanPocetak == 23) {
            izracunDana = 2;
        } else if(periodicnaZauz[i].dan == 5 && pamcenjeZaDanPocetak == 25) {
            izracunDana = 0;
        } else if(periodicnaZauz[i].dan == 5 && pamcenjeZaDanPocetak == 27) {
            izracunDana = 12;
        } else if(periodicnaZauz[i].dan == 5 && pamcenjeZaDanPocetak == 29) {
            izracunDana = 10;
        } else if(periodicnaZauz[i].dan == 5 && pamcenjeZaDanPocetak == 31) {
            izracunDana = 8;
        } else if(periodicnaZauz[i].dan == 6 && pamcenjeZaDanPocetak == 17) {
            izracunDana = 10;
        } else if(periodicnaZauz[i].dan == 6 && pamcenjeZaDanPocetak == 19) {
            izracunDana = 8;
        } else if(periodicnaZauz[i].dan == 6 && pamcenjeZaDanPocetak == 21) {
            izracunDana = 6;
        } else if(periodicnaZauz[i].dan == 6 && pamcenjeZaDanPocetak == 23) {
            izracunDana = 4;
        } else if(periodicnaZauz[i].dan == 6 && pamcenjeZaDanPocetak == 25) {
            izracunDana = 2;
        } else if(periodicnaZauz[i].dan == 6 && pamcenjeZaDanPocetak == 27) {
            izracunDana = 0;
        } else if(periodicnaZauz[i].dan == 6 && pamcenjeZaDanPocetak == 29) {
            izracunDana = 12;
        } else if(periodicnaZauz[i].dan == 6 && pamcenjeZaDanPocetak == 31) {
            izracunDana = 10;
        }

        return izracunDana;

    }

    //Funcija koja se poziva prilikom promjene u formi sa bilo kojim input-om
    function obojiZauzecaImpl(kalendarRef, mjesec, sala, pocetak, kraj) {
        //Da uzmemo sve sto ima u kalendaru i stavimo kao jedan niz
        var nodesOfKalendar = kalendarRef[0].childNodes;
        //Uzimamo samo divContainer klasu iz node stabla
        var divContainer = nodesOfKalendar[3];
        //Uzimamo sada svu djecu divContainera
        var djecaDivContainera = divContainer.childNodes;
        

        //OVO SLUZI ZA RESETOVANJE DANA NA BIJELO-ZELENO, NA PRAZNE DANE
        var pamcenjeZaDanPocetaka = zaPovratakPocetnogDana(djecaDivContainera);
        var pamcenjeZaDanKraja = zaPovratakKrajnjegDana(djecaDivContainera);
        for(var dani = pamcenjeZaDanPocetaka; dani <= pamcenjeZaDanKraja; dani+=2) {
            djecaDivContainera[dani].style.backgroundImage = 'linear-gradient(white 70%, white 30%)';
        }

        var vrijemeOdKojegPocinjeSati = pocetak.substring(0, 2);
        var vrijemeOdKojegPocinjeMinute = pocetak.substring(3, 5);

        var vrijemeOdKojegZavrsavaSati = kraj.substring(0, 2);
        var vrijemeOdKojegZavrsavaMinute = kraj.substring(3, 5);

            //Ako su periodicna u pitanju zauzeca
            //if(document.getElementById("per").checked == true) { //OVO DUGME ZA SPIRALU 3 TREBA DA RADI, TJ. UKLONI KOMENTAR
                //Ako nije prazan niz
                if(typeof periodicnaZauz != 'undefined' && periodicnaZauz.length != 0) {
                    //prolazak kroz spisak zauzeca
                    for(var i = 0; i < periodicnaZauz.length; i++) {
                        //Ako je mjesec odgovarajuci za parametar semestar
                        
                        
                        if(typeof periodicnaZauz[i] != 'undefined' && periodicnaZauz[i].semestar == "zimski" && (mjesec == 0 || mjesec == 9 || mjesec == 10 || mjesec == 11) && sala == periodicnaZauz[i].naziv && ((parseInt(vrijemeOdKojegPocinjeSati) < parseInt(periodicnaZauz[i].pocetak.substring(0, 2))) || (parseInt(vrijemeOdKojegPocinjeMinute) < parseInt(periodicnaZauz[i].pocetak.substring(3, 5))) && (parseInt(vrijemeOdKojegPocinjeSati) == parseInt(periodicnaZauz[i].pocetak.substring(0, 2)))) && ((parseInt(vrijemeOdKojegZavrsavaSati) > parseInt(periodicnaZauz[i].kraj.substring(0, 2))) || (parseInt(vrijemeOdKojegZavrsavaMinute) > parseInt(periodicnaZauz[i].kraj.substring(3, 5))) && (parseInt(vrijemeOdKojegZavrsavaSati) == parseInt(periodicnaZauz[i].kraj.substring(0, 2))))) {

                            //Da nam zapamti pocetak i kraj
                            var pamcenjeZaDanPocetak = zaPovratakPocetnogDana(djecaDivContainera);
                            var pamcenjeZaDanKraj = zaPovratakKrajnjegDana(djecaDivContainera);
                            var izracunDana = trebaMiIzracunatStan(pamcenjeZaDanPocetak, i);
                            
                            //Za mijenjanje boje na zauzeca 
                            for(var dani = pamcenjeZaDanPocetak + izracunDana; dani <= pamcenjeZaDanKraj; dani+=14) {
                                djecaDivContainera[dani].style.backgroundImage = 'linear-gradient(white 70%, red 30%)';
                            }

                            //Za mijenjanje boje na slobodne dane
                            for(var dani = pamcenjeZaDanPocetak; dani <= pamcenjeZaDanKraj; dani+=2) {
                                if(djecaDivContainera[dani].style.backgroundImage != 'linear-gradient(white 70%, red 30%)') {
                                    djecaDivContainera[dani].style.backgroundImage = 'linear-gradient(white 70%, green 30%)';
                                }
                            }

                        } 
                        
                        if(typeof periodicnaZauz[i] != 'undefined' && periodicnaZauz[i].semestar == "ljetni" && (mjesec == 1 || mjesec == 2 || mjesec == 3 || mjesec == 4 || mjesec == 5) && periodicnaZauz[i].naziv == sala && ((parseInt(vrijemeOdKojegPocinjeSati) < parseInt(periodicnaZauz[i].pocetak.substring(0, 2))) || (parseInt(vrijemeOdKojegPocinjeMinute) <= parseInt(periodicnaZauz[i].pocetak.substring(3, 5))) && (parseInt(vrijemeOdKojegPocinjeSati) == parseInt(periodicnaZauz[i].pocetak.substring(0, 2)))) && ((parseInt(vrijemeOdKojegZavrsavaSati) > parseInt(periodicnaZauz[i].kraj.substring(0, 2))) || (parseInt(vrijemeOdKojegZavrsavaMinute) >= parseInt(periodicnaZauz[i].kraj.substring(3, 5))) && (parseInt(vrijemeOdKojegZavrsavaSati) == parseInt(periodicnaZauz[i].kraj.substring(0, 2))))) {
                        
                            
                            //Da nam zapamti pocetak i kraj
                            var pamcenjeZaDanPocetak = zaPovratakPocetnogDana(djecaDivContainera);
                            var pamcenjeZaDanKraj = zaPovratakKrajnjegDana(djecaDivContainera);
                            var izracunDana = trebaMiIzracunatStan(pamcenjeZaDanPocetak, i);
                            
                            //Za mijenjanje boje na zauzeca 
                            for(var dani = pamcenjeZaDanPocetak + izracunDana; dani <= pamcenjeZaDanKraj; dani+=14) {
                                djecaDivContainera[dani].style.backgroundImage = 'linear-gradient(white 70%, red 30%)';
                            }

                            //Za mijenjanje boje na slobodne dane
                            for(var dani = pamcenjeZaDanPocetak; dani <= pamcenjeZaDanKraj; dani+=2) {
                                if(djecaDivContainera[dani].style.backgroundImage != 'linear-gradient(white 70%, red 30%)') {
                                    djecaDivContainera[dani].style.backgroundImage = 'linear-gradient(white 70%, green 30%)';
                                }
                            }
                        }
                        //KRAJ IF-ELSE-IF STRUKTURE
                    }
                    //KRAJ FOR PETLJE
                }
                //KRAJ PRVOG IF USLOVA
            //} 
            //KRAJ PROVJERE JESU LI PERIODICNA ILI VANREDNA ZAUZECA
        
            
            //Ako su vanredna u pitanju zauzeca
            //if(document.getElementById("per").checked == false) { //OVO DUGME ZA SPIRALU 3 TREBA DA RADI, TJ. UKLONI KOMENTAR OVDJE
                if(typeof vanrednaZauz != 'undefined' && vanrednaZauz.length != 0) {
                    //prolazak kroz spisak zauzeca
                    for(var i = 0; i < vanrednaZauz.length; i++) {
                        //String koji nam sadrzi dan i mjesec i godinu
                        
                        //var danMjesecGodina = vanrednaZauz[i].DATUM();
                        if(typeof vanrednaZauz[i] != 'undefined') {

                        
                        var danMjesecGodina = vanrednaZauz[i].datum;
                        var danu = danMjesecGodina.substring(0,2);
                        var mjesecu = danMjesecGodina.substring(3,5);
                        if(mjesecu-1 == mjesec) {
                            for(var j = 15; j <= 97; j+=2) {
                                if((djecaDivContainera[j].innerHTML == danu || ("0" + djecaDivContainera[j].innerHTML) == danu) && ((parseInt(vrijemeOdKojegPocinjeSati) < parseInt(vanrednaZauz[i].pocetak.substring(0, 2))) || (parseInt(vrijemeOdKojegPocinjeMinute) <= parseInt(vanrednaZauz[i].pocetak.substring(3, 5))) && (parseInt(vrijemeOdKojegPocinjeSati) == parseInt(vanrednaZauz[i].pocetak.substring(0, 2)))) && ((parseInt(vrijemeOdKojegZavrsavaSati) > parseInt(vanrednaZauz[i].kraj.substring(0, 2))) || (parseInt(vrijemeOdKojegZavrsavaMinute) >= parseInt(vanrednaZauz[i].kraj.substring(3, 5))) && (parseInt(vrijemeOdKojegZavrsavaSati) == parseInt(vanrednaZauz[i].kraj.substring(0, 2))))) {
                                    djecaDivContainera[j].style.backgroundImage = 'linear-gradient(white 70%, red 30%)';
                                }
                            }
                        }
                        //Kraj provjere koji je mjesec u pitanju
                    }
                    //Kraj globalne for petlje koja kroz sve prolazi
                }
                    var pamcenjeZaDanPocetakaa = zaPovratakPocetnogDana(djecaDivContainera);
                    var pamcenjeZaDanKrajaa = zaPovratakKrajnjegDana(djecaDivContainera);
                    //Za mijenjanje boje na slobodne dane
                    for(var dani = pamcenjeZaDanPocetakaa; dani <= pamcenjeZaDanKrajaa; dani+=2) {
                        if(djecaDivContainera[dani].style.backgroundImage != 'linear-gradient(white 70%, red 30%)') {
                            djecaDivContainera[dani].style.backgroundImage = 'linear-gradient(white 70%, green 30%)';
                        }
                    }
                }
                //Kraj provjere je li ista ima u vanrednaZauz
            //} 
    }

    //ZA UCITAVANJE PODATAKA, POZIVA SE NA UCITAVANJU DOKUMENTA
    function ucitajPodatkeImpl(periodicna, vanredna) {
        periodicnaZauz = periodicna;
        vanrednaZauz = vanredna;
    }
    
    //CRTANJE KALENDARA
    function iscrtajKalendarImpl(kalendarRef, mjesec) {
            
            //PROVJERA MJESECA I STA TREBA RADITI
            if(mjesec == 12) {
                document.getElementById("dugmeZaNaprijed").disabled = true;
            } else if(mjesec == -1) {
                document.getElementById("dugme").disabled = true;
            } else if(mjesec == 0) {
                document.getElementById("mjesecLabel").innerHTML = "Januar";
                datum.setMonth(mjesec);
                zaPopunjavanjeKalendaraPravilno(kalendarRef, mjesec);

            } else if(mjesec == 1) {
                document.getElementById("mjesecLabel").innerHTML = "Februar";
                datum.setMonth(mjesec);
                zaPopunjavanjeKalendaraPravilno(kalendarRef, mjesec);

            } else if(mjesec == 2) {
                document.getElementById("mjesecLabel").innerHTML = "Mart";
                datum.setMonth(mjesec);
                zaPopunjavanjeKalendaraPravilno(kalendarRef, mjesec);

            } else if(mjesec == 3) {
                document.getElementById("mjesecLabel").innerHTML = "April";
                datum.setMonth(mjesec);
                zaPopunjavanjeKalendaraPravilno(kalendarRef, mjesec);

            } else if(mjesec == 4) {
                document.getElementById("mjesecLabel").innerHTML = "Maj";
                datum.setMonth(mjesec);
                zaPopunjavanjeKalendaraPravilno(kalendarRef, mjesec);

            } else if(mjesec == 5) {
                document.getElementById("mjesecLabel").innerHTML = "Juni";
                datum.setMonth(mjesec);
                zaPopunjavanjeKalendaraPravilno(kalendarRef, mjesec);

            } else if(mjesec == 6) {
                document.getElementById("mjesecLabel").innerHTML = "Juli";
                datum.setMonth(mjesec);
                zaPopunjavanjeKalendaraPravilno(kalendarRef, mjesec);

            } else if(mjesec == 7) {
                document.getElementById("mjesecLabel").innerHTML = "August";
                datum.setMonth(mjesec);
                zaPopunjavanjeKalendaraPravilno(kalendarRef, mjesec);

            } else if(mjesec == 8) {
                document.getElementById("mjesecLabel").innerHTML = "Septembar";
                datum.setMonth(mjesec);
                zaPopunjavanjeKalendaraPravilno(kalendarRef, mjesec);

            } else if(mjesec == 9) {
                document.getElementById("mjesecLabel").innerHTML = "Oktobar";
                datum.setMonth(mjesec);
                zaPopunjavanjeKalendaraPravilno(kalendarRef, mjesec);

            } else if(mjesec == 10) {
                document.getElementById("mjesecLabel").innerHTML = "Novembar";
                datum.setMonth(mjesec);
                zaPopunjavanjeKalendaraPravilno(kalendarRef, mjesec);

            } else if(mjesec == 11) {
                document.getElementById("mjesecLabel").innerHTML = "Decembar";
                datum.setMonth(mjesec);
                zaPopunjavanjeKalendaraPravilno(kalendarRef, mjesec);
            }
    } 

    return {
        obojiZauzeca: obojiZauzecaImpl,
        ucitajPodatke: ucitajPodatkeImpl,
        iscrtajKalendar: iscrtajKalendarImpl
    }
} ());

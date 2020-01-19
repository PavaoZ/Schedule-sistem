let assert = chai.assert;
describe('Kalendar', function() {
 describe('iscrtajKalendar()', function() {
    it('last day of current month should be saturday', function() {
        Kalendar.iscrtajKalendar(document.getElementsByClassName("Kalendar"), datum.getMonth());
       
        var kalendarRef = document.getElementsByClassName("Kalendar");
        var nodesOfKalendar = kalendarRef[0].childNodes;
        //Uzimamo samo divContainer klasu iz node stabla
        var divContainer = nodesOfKalendar[3];
        //Uzimamo sada svu djecu divContainera
        var djecaDivContainera = divContainer.childNodes;
       
        var brojacDana;
       
        for(var i = 35; i < 97; i+=2) {
            if(djecaDivContainera[i].innerHTML == "") {
                brojacDana = i;
                break;
            }
        }

        var istina;
        if(djecaDivContainera[brojacDana-2].innerHTML == "30") {
            istina = 1;
        }
    
        assert.equal(istina, 1,"Zadnji dan je subota");
      });

    it('first day of current month should be friday', function() {
        Kalendar.iscrtajKalendar(document.getElementsByClassName("Kalendar"), datum.getMonth());
       
        var kalendarRef = document.getElementsByClassName("Kalendar");
        var nodesOfKalendar = kalendarRef[0].childNodes;
        //Uzimamo samo divContainer klasu iz node stabla
        var divContainer = nodesOfKalendar[3];
        //Uzimamo sada svu djecu divContainera
        var djecaDivContainera = divContainer.childNodes;
       
        var brojacDana;
       
        for(var i = 15; i < 97; i+=2) {
            if(djecaDivContainera[i].innerHTML == "1") {
                brojacDana = i;
            }
        }
        
        if(brojacDana == 23 || brojacDana == 37) {
            brojacDana = 1;
        }

        assert.equal(brojacDana, 1,"Prvi dan je petak");
    });


    it('check if January has correct days', function() {
        Kalendar.iscrtajKalendar(document.getElementsByClassName("Kalendar"), 0);
       
        var kalendarRef = document.getElementsByClassName("Kalendar");
        var nodesOfKalendar = kalendarRef[0].childNodes;
        //Uzimamo samo divContainer klasu iz node stabla
        var divContainer = nodesOfKalendar[3];
        //Uzimamo sada svu djecu divContainera
        var djecaDivContainera = divContainer.childNodes;
       
        var brojacDana;
       
        for(var i = 15; i < 97; i+=2) {
            if(djecaDivContainera[i].innerHTML == "1") {
                brojacDana = i;
                break;
            }
        }
        
        if(brojacDana == 17 || brojacDana == 31) {
            brojacDana = 1;
        }
        
        var brojacDana2;
        for(var i = 35; i < 97; i+=2) {
            if(djecaDivContainera[i].innerHTML == "") {
                brojacDana2 = i;
                break;
            }
        }

        var ukupnaIstina;
        if(brojacDana == 1 && djecaDivContainera[brojacDana2-2].innerHTML == "31") {
            ukupnaIstina = 1;
        }

        assert.equal(ukupnaIstina, 1,"Broj dana treba biti 31 i prvi dan je utorak");
    });

    it('should draw 30 days for November', function() {
        Kalendar.iscrtajKalendar(document.getElementsByClassName("Kalendar"), 10);
        
        var kalendarRef = document.getElementsByClassName("Kalendar");
        var nodesOfKalendar = kalendarRef[0].childNodes;
        //Uzimamo samo divContainer klasu iz node stabla
        var divContainer = nodesOfKalendar[3];
        //Uzimamo sada svu djecu divContainera
        var djecaDivContainera = divContainer.childNodes;
        
        var brojacDana = 0;
        
        for(var i = 15; i < 97; i+=2) {
            if(djecaDivContainera[i].innerHTML != "") {
                brojacDana++;
            }
        }
        assert.equal(brojacDana, 30,"Broj dana treba biti 30");
    });

    it('should draw 31 days for December', function() {
        Kalendar.iscrtajKalendar(document.getElementsByClassName("Kalendar"), 11);
    
        var kalendarRef = document.getElementsByClassName("Kalendar");
        var nodesOfKalendar = kalendarRef[0].childNodes;
        //Uzimamo samo divContainer klasu iz node stabla
        var divContainer = nodesOfKalendar[3];
        //Uzimamo sada svu djecu divContainera
        var djecaDivContainera = divContainer.childNodes;
    
        var brojacDana = 0;
    
        for(var i = 15; i < 97; i+=2) {
            if(djecaDivContainera[i].innerHTML != "") {
                brojacDana++;
            }
        }
        assert.equal(brojacDana, 31,"Broj dana treba biti 31");
    });

    it('should draw 28 days for February', function() {
        Kalendar.iscrtajKalendar(document.getElementsByClassName("Kalendar"), 1);
    
        var kalendarRef = document.getElementsByClassName("Kalendar");
        var nodesOfKalendar = kalendarRef[0].childNodes;
        //Uzimamo samo divContainer klasu iz node stabla
        var divContainer = nodesOfKalendar[3];
        //Uzimamo sada svu djecu divContainera
        var djecaDivContainera = divContainer.childNodes;
    
        var brojacDana = 0;
    
        for(var i = 15; i < 97; i+=2) {
            if(djecaDivContainera[i].innerHTML != "") {
                brojacDana++;
            }
        }
        assert.equal(brojacDana, 28,"Broj dana treba biti 28");
    });

    it('should draw 31 days for September', function() {
        Kalendar.iscrtajKalendar(document.getElementsByClassName("Kalendar"), 8);
    
        var kalendarRef = document.getElementsByClassName("Kalendar");
        var nodesOfKalendar = kalendarRef[0].childNodes;
        //Uzimamo samo divContainer klasu iz node stabla
        var divContainer = nodesOfKalendar[3];
        //Uzimamo sada svu djecu divContainera
        var djecaDivContainera = divContainer.childNodes;
    
        var brojacDana = 0;
    
        for(var i = 15; i < 97; i+=2) {
            if(djecaDivContainera[i].innerHTML != "") {
                brojacDana++;
            }
        }
        assert.equal(brojacDana, 30,"Broj dana treba biti 30");
    });

    it('check if first week is from 1 to 7', function() {
        Kalendar.iscrtajKalendar(document.getElementsByClassName("Kalendar"), 8);
    
        var kalendarRef = document.getElementsByClassName("Kalendar");
        var nodesOfKalendar = kalendarRef[0].childNodes;
        //Uzimamo samo divContainer klasu iz node stabla
        var divContainer = nodesOfKalendar[3];
        //Uzimamo sada svu djecu divContainera
        var djecaDivContainera = divContainer.childNodes;
    
        var brojacDana = 0;
        var istina = 1;
        for(var i = 15; i <= 47; i+=2) {
            if(djecaDivContainera[i].innerHTML == "1" || djecaDivContainera[i].innerHTML == "2" || djecaDivContainera[i].innerHTML == "3" || djecaDivContainera[i].innerHTML == "4" || djecaDivContainera[i].innerHTML == "5" || djecaDivContainera[i].innerHTML == "6" || djecaDivContainera[i].innerHTML == "7") {
                brojacDana++;
            }
        }
        assert.equal(brojacDana, 7,"Broj dana treba biti 7");
    });

    it('check if middle of the month is recognized(day 15)', function() {
        Kalendar.iscrtajKalendar(document.getElementsByClassName("Kalendar"), 8);
    
        var kalendarRef = document.getElementsByClassName("Kalendar");
        var nodesOfKalendar = kalendarRef[0].childNodes;
        //Uzimamo samo divContainer klasu iz node stabla
        var divContainer = nodesOfKalendar[3];
        //Uzimamo sada svu djecu divContainera
        var djecaDivContainera = divContainer.childNodes;
    
        var brojacDana = 0;
        var istina = 1;
        for(var i = 15; i <= 91; i+=2) {
            if(djecaDivContainera[i].innerHTML == "15") {
                brojacDana++;
            }
        }
        assert.equal(brojacDana, 1,"Jeste");
    });

 });

 describe('obojiZauzeca()', function() {
    it('check if there is no coloring for incorrect values', function() {
        Kalendar.obojiZauzeca(document.getElementsByClassName("Kalendar"), 213, "", "", "");
    
        var kalendarRef = document.getElementsByClassName("Kalendar");
        var nodesOfKalendar = kalendarRef[0].childNodes;
        //Uzimamo samo divContainer klasu iz node stabla
        var divContainer = nodesOfKalendar[3];
        //Uzimamo sada svu djecu divContainera
        var djecaDivContainera = divContainer.childNodes;
    
        var istina = 1;
        for(var i = 15; i < 97; i+=2) {
            if(djecaDivContainera[i].style.backgroundImage == 'linear-gradient(white 70%, red 30%)') {
                istina = 0;
                break;
            }
        }
        assert.equal(istina, 1,"Nista ne treba biti obojano");
    });

    it('check if there is coloring for same two values', function() {
        var van1 = {datum: "06.11.2019", pocetak: "10:35", kraj: "11:15", naziv: "0-01", predavac: "prof. Miroslav"};
        var van2 = {datum: "06.11.2019", pocetak: "10:35", kraj: "11:15", naziv: "0-01", predavac: "prof. Miroslav"};
        var van = [van1, van2];

        var per1 = {dan: 0, semestar: "zimski", pocetak: "10:35", kraj: "11:15", naziv: "0-02", predavac: "prof. Miroslav"};
        var per2 = {dan: 0, semestar: "zimski", pocetak: "10:35", kraj: "11:15", naziv: "0-02", predavac: "prof. Miroslav"};
        var per = [per1, per2];
        //Kalendar.iscrtajKalendar(document.getElementsByClassName("Kalendar"), 10);
        Kalendar.ucitajPodatke(per, van);
        Kalendar.obojiZauzeca(document.getElementsByClassName("Kalendar"), 10, "0-01", "10:35", "11:15");
        
        var kalendarRef = document.getElementsByClassName("Kalendar");
        var nodesOfKalendar = kalendarRef[0].childNodes;
        //Uzimamo samo divContainer klasu iz node stabla
        var divContainer = nodesOfKalendar[3];
        //Uzimamo sada svu djecu divContainera
        var djecaDivContainera = divContainer.childNodes;
    
        var istina = 0;
        for(var i = 15; i < 97; i+=2) {
            if(djecaDivContainera[i].style.backgroundImage == 'linear-gradient(white 70%, red 30%)') {
                istina = 1;
                break;
            }
        }
        assert.equal(istina, 1,"Nista ne treba biti obojano");
    });

    it('check if there is no coloring for different semester', function() {
        var van1 = {datum: "06.04.2019", pocetak: "10:35", kraj: "11:15", naziv: "0-01", predavac: "prof. Miroslav"};
        var van2 = {datum: "06.06.2019", pocetak: "10:35", kraj: "11:15", naziv: "0-01", predavac: "prof. Miroslav"};
        var van = [van1, van2];

        var per1 = {dan: 0, semestar: "ljetni", pocetak: "10:35", kraj: "11:15", naziv: "0-02", predavac: "prof. Miroslav"};
        var per2 = {dan: 0, semestar: "ljetni", pocetak: "10:35", kraj: "11:15", naziv: "0-02", predavac: "prof. Miroslav"};
        var per = [per1, per2];
        //Kalendar.iscrtajKalendar(document.getElementsByClassName("Kalendar"), 10);
        Kalendar.ucitajPodatke(per, van);
        Kalendar.obojiZauzeca(document.getElementsByClassName("Kalendar"), 10, "0-01", "10:35", "11:15");
        
        var kalendarRef = document.getElementsByClassName("Kalendar");
        var nodesOfKalendar = kalendarRef[0].childNodes;
        //Uzimamo samo divContainer klasu iz node stabla
        var divContainer = nodesOfKalendar[3];
        //Uzimamo sada svu djecu divContainera
        var djecaDivContainera = divContainer.childNodes;
    
        var istina = 1;
        for(var i = 15; i < 97; i+=2) {
            if(djecaDivContainera[i].style.backgroundImage == 'linear-gradient(white 70%, red 30%)') {
                istina = 0;
                break;
            }
        }
        assert.equal(istina, 1,"Nista ne treba biti obojano");
    });

    it('check if there is no coloring for different month on date', function() {
        var van1 = {datum: "06.04.2019", pocetak: "10:35", kraj: "11:15", naziv: "0-01", predavac: "prof. Miroslav"};
        var van2 = {datum: "06.06.2019", pocetak: "10:35", kraj: "11:15", naziv: "0-01", predavac: "prof. Miroslav"};
        var van = [van1, van2];

        var per1 = {dan: 0, semestar: "ljetni", pocetak: "10:35", kraj: "11:15", naziv: "0-02", predavac: "prof. Miroslav"};
        var per2 = {dan: 0, semestar: "ljetni", pocetak: "10:35", kraj: "11:15", naziv: "0-02", predavac: "prof. Miroslav"};
        var per = [per1, per2];
        //Kalendar.iscrtajKalendar(document.getElementsByClassName("Kalendar"), 10);
        Kalendar.ucitajPodatke(per, van);
        Kalendar.obojiZauzeca(document.getElementsByClassName("Kalendar"), 10, "0-01", "10:35", "11:15");
        
        var kalendarRef = document.getElementsByClassName("Kalendar");
        var nodesOfKalendar = kalendarRef[0].childNodes;
        //Uzimamo samo divContainer klasu iz node stabla
        var divContainer = nodesOfKalendar[3];
        //Uzimamo sada svu djecu divContainera
        var djecaDivContainera = divContainer.childNodes;
    
        var istina = 1;
        for(var i = 15; i < 97; i+=2) {
            if(djecaDivContainera[i].style.backgroundImage == 'linear-gradient(white 70%, red 30%)') {
                istina = 0;
                break;
            }
        }
        assert.equal(istina, 1,"Nista ne treba biti obojano");
    });

    it('check if there is no green slot left for full month', function() {
        var van1 = {datum: "04.11.2019", pocetak: "10:35", kraj: "11:15", naziv: "0-01", predavac: "prof. Miroslav"};
        var van2 = {datum: "11.11.2019", pocetak: "10:35", kraj: "11:15", naziv: "0-01", predavac: "prof. Miroslav"};
        var van3 = {datum: "18.11.2019", pocetak: "10:35", kraj: "11:15", naziv: "0-01", predavac: "prof. Miroslav"};
        var van4 = {datum: "25.11.2019", pocetak: "10:35", kraj: "11:15", naziv: "0-01", predavac: "prof. Miroslav"};
        var van = [van1, van2, van3, van4];

        var per1 = {dan: 0, semestar: "zimske", pocetak: "10:35", kraj: "11:15", naziv: "0-01", predavac: "prof. Miroslav"};
        var per2 = {dan: 1, semestar: "zimski", pocetak: "10:35", kraj: "11:15", naziv: "0-01", predavac: "prof. Miroslav"};
        var per3 = {dan: 2, semestar: "zimski", pocetak: "10:35", kraj: "11:15", naziv: "0-01", predavac: "prof. Miroslav"};
        var per4 = {dan: 3, semestar: "zimski", pocetak: "10:35", kraj: "11:15", naziv: "0-01", predavac: "prof. Miroslav"};
        var per5 = {dan: 4, semestar: "zimski", pocetak: "10:35", kraj: "11:15", naziv: "0-01", predavac: "prof. Miroslav"};
        var per6 = {dan: 5, semestar: "zimski", pocetak: "10:35", kraj: "11:15", naziv: "0-01", predavac: "prof. Miroslav"};
        var per7 = {dan: 6, semestar: "zimski", pocetak: "10:35", kraj: "11:15", naziv: "0-01", predavac: "prof. Miroslav"};
        

        var per = [per1, per2, per3, per4, per5, per6, per7];
        Kalendar.iscrtajKalendar(document.getElementsByClassName("Kalendar"), 10);
        Kalendar.ucitajPodatke(per, van);
        Kalendar.obojiZauzeca(document.getElementsByClassName("Kalendar"), 10, "0-01", "05:00", "23:59");
        
        var kalendarRef = document.getElementsByClassName("Kalendar");
        var nodesOfKalendar = kalendarRef[0].childNodes;
        //Uzimamo samo divContainer klasu iz node stabla
        var divContainer = nodesOfKalendar[3];
        //Uzimamo sada svu djecu divContainera
        var djecaDivContainera = divContainer.childNodes;
    
        var istina = 1;
        for(var i = 15; i < 97; i+=2) {
            if(djecaDivContainera[i].style.backgroundImage == 'linear-gradient(white 70%, green 30%)') {
                istina = 0;
                break;
            }
        }
        assert.equal(istina, 1,"Sve treba biti obojano");
    });

    it('check if there the coloring did not change after two calls', function() {
        var kalendarRef = document.getElementsByClassName("Kalendar");
        var nodesOfKalendar = kalendarRef[0].childNodes;
        //Uzimamo samo divContainer klasu iz node stabla
        var divContainer = nodesOfKalendar[3];
        //Uzimamo sada svu djecu divContainera
        var djecaDivContainera = divContainer.childNodes;
        
        var van1 = {datum: "04.11.2019", pocetak: "10:35", kraj: "11:15", naziv: "0-01", predavac: "prof. Miroslav"};
        var van2 = {datum: "03.11.2019", pocetak: "10:35", kraj: "11:15", naziv: "0-01", predavac: "prof. Miroslav"};
        var van3 = {datum: "18.11.2019", pocetak: "10:35", kraj: "11:15", naziv: "0-01", predavac: "prof. Miroslav"};
        var van4 = {datum: "25.11.2019", pocetak: "10:35", kraj: "11:15", naziv: "0-01", predavac: "prof. Miroslav"};
        var van = [van1, van2, van3, van4];

        var per7 = {dan: 6, semestar: "zimski", pocetak: "10:35", kraj: "11:15", naziv: "0-01", predavac: "prof. Miroslav"};
        var per = [per7];
        Kalendar.iscrtajKalendar(document.getElementsByClassName("Kalendar"), 10);
        Kalendar.ucitajPodatke(per, van);
        Kalendar.obojiZauzeca(document.getElementsByClassName("Kalendar"), 10, "0-01", "05:00", "23:59");
        
        var istina = 0;
        
        if(djecaDivContainera[27].style.backgroundImage == 'linear-gradient(white 70%, red 30%)' && djecaDivContainera[29].style.backgroundImage == 'linear-gradient(white 70%, red 30%)') {
            istina = 1;
        }
        
        Kalendar.obojiZauzeca(document.getElementsByClassName("Kalendar"), 10, "0-01", "05:00", "23:59");
        if(djecaDivContainera[27].style.backgroundImage == 'linear-gradient(white 70%, red 30%)' && djecaDivContainera[29].style.backgroundImage == 'linear-gradient(white 70%, red 30%)') {
            istina = 1;
        }

        assert.equal(istina, 1,"Dva puta obojeno i dobro je");
    });

    it('check if there the coloring did not change after two calls of 2 combos of functions', function() {
        var kalendarRef = document.getElementsByClassName("Kalendar");
        var nodesOfKalendar = kalendarRef[0].childNodes;
        //Uzimamo samo divContainer klasu iz node stabla
        var divContainer = nodesOfKalendar[3];
        //Uzimamo sada svu djecu divContainera
        var djecaDivContainera = divContainer.childNodes;
        
        var van1 = {datum: "04.11.2019", pocetak: "10:35", kraj: "11:15", naziv: "0-01", predavac: "prof. Miroslav"};
        var van2 = {datum: "03.11.2019", pocetak: "10:35", kraj: "11:15", naziv: "0-01", predavac: "prof. Miroslav"};
        var van3 = {datum: "18.11.2019", pocetak: "10:35", kraj: "11:15", naziv: "0-01", predavac: "prof. Miroslav"};
        var van4 = {datum: "25.11.2019", pocetak: "10:35", kraj: "11:15", naziv: "0-01", predavac: "prof. Miroslav"};
        var van = [van1, van2, van3, van4];

        var per7 = {dan: 6, semestar: "zimski", pocetak: "10:35", kraj: "11:15", naziv: "0-01", predavac: "prof. Miroslav"};
        var per = [per7];
        Kalendar.iscrtajKalendar(document.getElementsByClassName("Kalendar"), 10);
        Kalendar.ucitajPodatke(per, van);
        Kalendar.obojiZauzeca(document.getElementsByClassName("Kalendar"), 10, "0-01", "05:00", "23:59");
        
        var istina;
        
        if(djecaDivContainera[27].style.backgroundImage == 'linear-gradient(white 70%, red 30%)' && djecaDivContainera[29].style.backgroundImage == 'linear-gradient(white 70%, red 30%)') {
            istina = 1;
        }

        van2 = {datum: "05.11.2019", pocetak: "10:35", kraj: "11:15", naziv: "0-01", predavac: "prof. Miroslav"};

        Kalendar.ucitajPodatke(per, van);
        Kalendar.obojiZauzeca(document.getElementsByClassName("Kalendar"), 10, "0-01", "05:00", "23:59");
        if(djecaDivContainera[27].style.backgroundImage == 'linear-gradient(white 70%, red 30%)' && djecaDivContainera[29].style.backgroundImage == 'linear-gradient(white 70%, red 30%)') {
            istina = 0;
        }

        assert.equal(istina, 0,"Treba ispasti da se zadnji podatci primjenjuju");
    });

    it('check if emergency reserves work', function() {
        var kalendarRef = document.getElementsByClassName("Kalendar");
        var nodesOfKalendar = kalendarRef[0].childNodes;
        //Uzimamo samo divContainer klasu iz node stabla
        var divContainer = nodesOfKalendar[3];
        //Uzimamo sada svu djecu divContainera
        var djecaDivContainera = divContainer.childNodes;
        
        var van1 = {datum: "04.11.2019", pocetak: "10:35", kraj: "11:15", naziv: "0-01", predavac: "prof. Miroslav"};
        var van2 = {datum: "03.11.2019", pocetak: "10:35", kraj: "11:15", naziv: "0-01", predavac: "prof. Miroslav"};
        
        var van = [van1, van2];

        var per7 = {dan: 6, semestar: "zimski", pocetak: "10:35", kraj: "11:15", naziv: "0-01", predavac: "prof. Miroslav"};
        var per = [per7];
        Kalendar.iscrtajKalendar(document.getElementsByClassName("Kalendar"), 10);
        Kalendar.ucitajPodatke(per, van);
        Kalendar.obojiZauzeca(document.getElementsByClassName("Kalendar"), 10, "0-01", "05:00", "23:59");
        
        var istina;
        
        if(djecaDivContainera[27].style.backgroundImage == 'linear-gradient(white 70%, red 30%)' && djecaDivContainera[29].style.backgroundImage == 'linear-gradient(white 70%, red 30%)') {
            istina = 1;
        }


        assert.equal(istina, 1,"Vanredna zauzeca rade");
    });

    it('check if periodic reserves work', function() {
        var kalendarRef = document.getElementsByClassName("Kalendar");
        var nodesOfKalendar = kalendarRef[0].childNodes;
        //Uzimamo samo divContainer klasu iz node stabla
        var divContainer = nodesOfKalendar[3];
        //Uzimamo sada svu djecu divContainera
        var djecaDivContainera = divContainer.childNodes;
        
        var van1 = {datum: "04.11.2019", pocetak: "10:35", kraj: "11:15", naziv: "0-01", predavac: "prof. Miroslav"};
        var van2 = {datum: "03.11.2019", pocetak: "10:35", kraj: "11:15", naziv: "0-01", predavac: "prof. Miroslav"};
        
        var van = [van1, van2];

        var per7 = {dan: 1, semestar: "zimski", pocetak: "10:35", kraj: "11:15", naziv: "0-01", predavac: "prof. Miroslav"};
        var per = [per7];
        Kalendar.iscrtajKalendar(document.getElementsByClassName("Kalendar"), 10);
        Kalendar.ucitajPodatke(per, van);
        Kalendar.obojiZauzeca(document.getElementsByClassName("Kalendar"), 10, "0-01", "05:00", "23:59");
        
        var istina;
        
        if(djecaDivContainera[31].style.backgroundImage == 'linear-gradient(white 70%, red 30%)' && djecaDivContainera[45].style.backgroundImage == 'linear-gradient(white 70%, red 30%)' && djecaDivContainera[59].style.backgroundImage == 'linear-gradient(white 70%, red 30%)' && djecaDivContainera[73].style.backgroundImage == 'linear-gradient(white 70%, red 30%)') {
            istina = 1;
        }


        assert.equal(istina, 1,"Vanredna zauzeca rade");
    });
 });

});
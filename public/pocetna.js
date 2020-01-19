let Pozivi = (function() {
    this.slikeEle;
    this.indeks = 3;

    function ucitavanjeSlikaImpl() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var nasJSON = JSON.parse(this.responseText);
                console.log(nasJSON);
                //Ovdje ucitavamo slike
                document.getElementById("Slika1").src = nasJSON[0];
                document.getElementById("Slika2").src = nasJSON[1];
                document.getElementById("Slika3").src = nasJSON[2];
                slikeEle = nasJSON;
            }
        };
        xhttp.open("GET", "/images", true);
        xhttp.send();
    }

    function brojPosjetilacaImpl() {
        var xhttp2 = new XMLHttpRequest();
        xhttp2.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var newContent = this.responseText;
                document.open();
                document.write(newContent);
                document.close();
            }
        };
        xhttp2.open("GET", "/broj", true);
        xhttp2.send();
    } 

    return {
        ucitavanjeSlika: ucitavanjeSlikaImpl,
        brojPosjetilaca: brojPosjetilacaImpl
    }
} ());

function zaBrojPosjetilaca() {
    Pozivi.brojPosjetilaca();
}

window.onload = function() {
    Pozivi.ucitavanjeSlika();
}

function sljedeceTri() {
    if(indeks == slikeEle.length-1 || indeks == slikeEle.length) {
        document.getElementById("dugmeZaNaprijeda").disabled = true;
    } else {
        var brojac = indeks + 3;
        var miniBrojac = 1;
        var nesto;
        for(var i = indeks; i < slikeEle.length; i++) {
        if(i == brojac) {
            break;
        }
        nesto = i;
        document.getElementById("Slika"+ String(miniBrojac)).src = slikeEle[i];
        miniBrojac++;
    }  
        indeks = nesto+1;
    }
    
    
}

function prosleTri() {
    var miniBrojac1 = 3;
    var miniBrojac2 = 2;
    var miniBrojac3 = 1;
    
    if(indeks == 0 || indeks == 2 || indeks == 1) {
        document.getElementById("dugmea").disabled = true;
    } else {
        
            
        
            document.getElementById("Slika"+ String(miniBrojac1)).src = slikeEle[indeks-1];
            document.getElementById("Slika"+ String(miniBrojac2)).src = slikeEle[indeks-2];
            document.getElementById("Slika"+ String(miniBrojac3)).src = slikeEle[indeks-3];
        indeks -= 3;
    }
    

    

}
var http = require('http');
var fs = require('fs');
var fsa = require('fs-extra');
var url = require('url');
const bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var banana = JSON.parse(fs.readFileSync('zauzeca.json', 'utf8'))
var _ = require('underscore');

    var app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/static', express.static(path.join(__dirname, 'public')));
    
    app.get('/', function(req, res) {
        console.log(req.url);   
            res.sendFile(path.join(__dirname, '/pocetna.html'));
    });


    //Primamo sve slike ovdje
    app.get('/images', (req, res) => {
        console.log(req.url);
        fs.readdir([__dirname, '/images'].join(''), function (err, files) {
            let images = [];
            _.each(files, function(imageFIle) {
                let slike = fs.readFileSync([__dirname, '/images', '/', imageFIle].join(''));
                slike = "data:image/jpeg;base64," + new Buffer(slike).toString('base64');
                images.push(slike);
            })
            var podatci = JSON.stringify(images);
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(podatci);
        })
    });

    //Post zahtjev za zauzeca
    app.post('/zauzeca.json', function(req, res) {    
        let tijelo = req.body;
        //Ako se preda specifican JSON koji ce regulisati sta se treba izvrsavati, "nekaHvala" je kriterij
        if(tijelo.predavac == "nekaHvala") {
            res.json(tijelo); 
        } else {
            //Guramo u nas zauzeca.json novi red
            banana.vanredna.push(tijelo);
            let jsona = JSON.stringify(banana, null, 2);
            fs.writeFile('zauzeca.json', jsona, function (err) {
                if (err) throw err;
                console.log("Valjda oke");
              });
            res.json(jsona);    
        }   
    });

    app.get('/zauzeca.json', function(req, res) {
        console.log(req.url);
            res.sendFile(path.join(__dirname, '/zauzeca.json')); 
    });

    app.get('/pocetna.html', function(req, res) {
        console.log(req.url);
            res.sendFile(path.join(__dirname, '/pocetna.html'));   
    });

    app.get('/rezervacija.html', function(req, res) {
        console.log(req.url);
        
        res.sendFile(path.join(__dirname, '/rezervacija.html'));    
    });

    app.get('/sale.html', function(req, res) {
        console.log(req.url);
            res.sendFile(path.join(__dirname, '/sale.html'));   
    });

    app.get('/unos.html', function(req, res) {
        console.log(req.url);
            res.sendFile(path.join(__dirname, '/unos.html')); 
    });

    app.get('/broj', function(req, res) {
        console.log(req.url);
        var sve = '<!DOCTYPE html>' +
        '<html>' +
            '<head>' +
                '<meta charset="UTF-8">' +
                '<link rel = "stylesheet" href = "/static/pocetna.css">' +
                '<meta name="viewport" content="width=device-width, initial-scale=1">' +
                
            '</head>' +
            '<body>' +
                '<div class = "meni">' +
                    '<div class = "logo">' +
                        '<img  id = "glavnaSlika" src = "/static/dizajn.jpg" alt="Ovdje nema slike :(">' +
                    '</div>' +
                    
                        '<ul id = "lista">' +
                            '<li>' +
                                '<a id = "linkPocetna" href ="pocetna.html">Početna</a>' +
                            '</li>' +
                            '<li>' +
                                '<a href ="sale.html">Sale</a>' +
                            '</li>' +
                            '<li>' +
                                '<a href ="unos.html"><u>Unos</u></a>' +
                            '</li>' +
                            '<li>' +
                                '<a href ="rezervacija.html"><u>Rezervacije</u></a>' +
                            '</li>' +
                            '<li>' +
                                '<a href =""><u>Osobe</u></a>' +
                            '</li>' +
                        '</ul>' +
                    
                             
                '</div>' +
                
                '<div class = "sadrzaj">' +
                    '<div class="grid-container">' +
                        '<div class="grid-item"><img id = "Slika1"  src = "/static/maca.jpg" alt = "Nema mace :("></div>' +
                        '<div class="grid-item"><img id = "Slika2" src = "/static/maca.jpg" alt = "Nema mace :("></div>' +
                        '<div class="grid-item"><img id = "Slika3" src = "/static/naocale.jpeg" alt = "Nema mace :("></div>' +
                        
                    '</div>' +
                '</div>' +
        
        
                '<input class = "dugmeK" id = "dugmea" type = "button" name = "prethodni" value = "Prethodni" onclick="prosleTri()">' +
                '<input class = "dugmeK" id = "dugmeZaNaprijeda" type = "button" name = "sljedeci" value = "Sljedeći" onclick="sljedeceTri()">' +
                '<a href="https://www.hitwebcounter.com" target="_blank">' +
    '<img src="https://hitwebcounter.com/counter/counter.php?page=7177012&style=0003&nbdigits=5&type=page&initCount=0" title="Visits Count" Alt="analytics counter"   border="0" >' +
    '</a>' +              

    
    '<a href="https://www.hitwebcounter.com" target="_blank">' +
    '<img src="https://hitwebcounter.com/counter/counter.php?page=7177016&style=0003&nbdigits=5&type=ip&initCount=0" title="Visits Count" Alt="analytics counter"   border="0" >' +
    '</a>' +


        '<script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore.js" type="text/javascript"></script>' +
        '<script type="text/javascript" src = "/static/kalendar.js"></script>' +
        '<script type="text/javascript" src = "/static/pocetna.js"></script>' +
        
    '</body>' +
'</html>';

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(sve); 
    });

    app.listen(8080);
    




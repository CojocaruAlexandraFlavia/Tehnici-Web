//pentru a schimba imaginile la fiecare 3 secunde
let i=0;

function myTimer(){
    changeImage(i);
    i=i+1;
    if(i==3) i=0;
}

function changeImage(i){
    if(i==0){
        document.getElementsByClassName("imagine3")[0].src="fantomadelaopera1.jpg";
        document.getElementsByClassName("imagine3")[1].src="nosferatu1.jpg";
        document.getElementsByClassName("imagine3")[2].src="Psycho1.jpeg";
        document.getElementsByClassName("imagine3")[3].src= "the_exorcist1.jpeg";
        document.getElementsByClassName("imagine3")[4].src="the_shining1.jpg"
    }
    else if(i==1){
        document.getElementsByClassName("imagine3")[0].src="fantomadelaopera2.jpg";
        document.getElementsByClassName("imagine3")[1].src="nosferatu2.jpg";
        document.getElementsByClassName("imagine3")[2].src="psycho2.jpg";
        document.getElementsByClassName("imagine3")[3].src= "the_exorcist2.jpg";
        document.getElementsByClassName("imagine3")[4].src="the-shining.jpg"
    }
    else{
        document.getElementsByClassName("imagine3")[0].src="fantomadelaopera.jpg";
        document.getElementsByClassName("imagine3")[1].src="nosferatu.jpg" ;
        document.getElementsByClassName("imagine3")[2].src="Psycho.jpeg";
        document.getElementsByClassName("imagine3")[3].src="theexorcist.jpg";
        document.getElementsByClassName("imagine3")[4].src="the_shining.jpg";
    }
}
setInterval(myTimer, 3000);

//numaratoare inversa
let dataLimita = new Date("Jun 30, 2020 00:00:00").getTime();
var x = setInterval(function(){
    var dataCurenta = new Date().getTime();
    var rest = dataLimita - dataCurenta;
    var zi = Math.floor(rest / (1000 * 60 * 60 * 24));
    var textZi;
    if(zi == 1){
        textZi = ' zi ';
    }
    else textZi = ' zile ';
    var ora = Math.floor((rest % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var textOra;
    if(ora == 1){
        textOra = ' ora ';
    }
    else textOra = ' ore ';

    var minut = Math.floor((rest % (1000 * 60 * 60)) / (1000 * 60));
    var textMinut;
    if(minut == 1){
        textMinut = ' minut ';
    }
    else textMinut = ' minute ';
    var secunda = Math.floor((rest % (1000 * 60)) / 1000);
    var textSecunda;
    if(secunda == 1){
        textSecunda = ' secunda ';
    }
    else textSecunda = ' secunde '
    document.getElementById('countDown').innerText = zi + textZi + ora + textOra + minut + textMinut + secunda + textSecunda + ' ';
    if (rest < 0){
        clearInterval(x);
        document.getElementById('countDown').innerHTML = 'Numaratoarea inversa s-a terminat!';
    }
}, 1000);

//buton ascunde/afiseaza imaginile

function showAndHideImg(){
    var buttonValue = document.getElementById('showImages').value;
    if(buttonValue == 'hide'){
        images = document.getElementsByTagName('img');
        for(var i = 0; i < images.length; i++){
            images[i].style.display = 'none';
        }
        figcaptions = document.getElementsByClassName('figc');
        for(var i = 0; i < figcaptions.length; i++){
            figcaptions[i].style.display = 'none';
        }
        document.getElementById('showImages').value = 'show';
        document.getElementById('showImages').innerText = 'Afiseaza imaginile';
    }
    else {
        images = document.getElementsByTagName('img');
        for(var i = 0; i < images.length; i++){
            images[i].style.display = 'inline';
        }
        figcaptions = document.getElementsByClassName('figc');
        for(var i = 0; i < figcaptions.length; i++){
            figcaptions[i].style.display = 'initial';
        }
        document.getElementById('showImages').value = 'hide';
        document.getElementById('showImages').innerText = 'Ascunde imaginile';
    }
}

//varsta utilizator
function anBisect(an){
    if((an % 4 == 0 && an % 100 != 0) || (an % 400 == 0)){
        return true;
    }
    return false;
}
function age(){
    let zi = '', luna = '', an = '', i = 0;
    var dataNastere = document.getElementById('dataNastere').value;

    while(dataNastere[i] != '#'){
        zi += dataNastere[i];
        i++;
    }
    i++;
    while(dataNastere[i] != '#'){
        luna += dataNastere[i];
        i++;
    }
    i++;
    while(i < dataNastere.length){
        an += dataNastere[i];
        i++;
    }
    dataNastere = new Date(parseInt(an), parseInt(luna-1), parseInt(zi));

    var x = setInterval(function(){
        let dataActuala = new Date();
        var diferenta = dataActuala - dataNastere;
        if(anBisect(dataActuala.getFullYear())){
            var an = Math.floor(diferenta / (1000 * 60 * 60 * 24 * 366));
        }
        else {
            var an = Math.floor(diferenta / (1000 * 60 * 60 * 24 * 365));
        }
        if (dataNastere.getMonth() > dataActuala.getMonth()){
            var luna = 12 - (dataNastere.getMonth() - dataActuala.getMonth());
        }
        else {
            var luna = dataActuala.getMonth() - dataNastere.getMonth();
        }
        var zi1 = dataNastere.getDate();
        var luna1 = dataActuala.getMonth()+1;
        if (luna1 == 1 || luna1 == 3 || luna1 == 5 || luna1 == 7 || luna1 == 8 || luna1 == 10 || luna1 ==  12){
            if (zi1 > dataActuala.getDate()){
                var zi = 31 - (zi1 - dataActuala.getDate())
            }
        }
        else if (luna1 == 4 || luna1 == 6 || luna1 == 9 || luna1 == 11){
            console.log(zi1 - dataActuala.getDate())
            if (zi1 > dataActuala.getDate()){
                var zi = 30 - (zi1 - dataActuala.getDate())
            }
        }
        else if (luna1 == 2 && anBisect(dataActuala.getFullYear()) && zi1 > dataActuala.getDate()){
            var zi = 29 - (zi1 - dataActuala.getDate())
        }
        else if (luna == 2 && !anBisect(dataActuala.getFullYear()) && zi1 > dataActuala.getDate()){
            var zi = 28 - (zii - dataActuala.getDate())
        }
        else var zi = dataActuala.getDate() - dataNastere.getDate();
        //var zi = Math.abs(dataActuala.getDate() - dataNastere.getDate());
        var ora = Math.floor((diferenta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minut = Math.floor((diferenta % (1000 * 60 * 60)) / (1000 * 60));
        var secunda = Math.floor((diferenta % (1000 * 60)) / 1000);
        var textAn;
        if(an == 1){
            textAn = 'an';
        }
        else textAn = 'ani';
        var textLuna;
        if (luna == 1) textLuna = 'luna';
        else textLuna = 'luni';
        var textZi;
        if(zi == 1){
            textZi = ' zi ';
        }
        else textZi = ' zile ';
        var textOra;
        if(ora == 1){
            textOra = ' ora ';
        }
        else textOra = ' ore ';
        var textMinut;
        if(minut == 1){
            textMinut = ' minut ';
        }
        else textMinut = ' minute ';
        var textSecunda;
        if(secunda == 1){
            textSecunda = ' secunda ';
        }
        else textSecunda = ' secunde ';
        document.getElementById('showAge').innerText = an +' '+ textAn + ' ' + luna + ' '+ textLuna + ' ' + zi + ' ' + textZi + ' ' + ora + ' '+ textOra + ' ' + minut + ' ' + textMinut + ' '+secunda +' '+ textSecunda + ' ';
    }, 1000);
    document.getElementById('dataNastere').value = '';
}

//ravase
let vector_ravase = ["Vei trece sesiunea cu bine!", "Vei avea o vara perfecta!", "Te va musca un tantar!", "Iti vei intalni sufletul pereche in curand!", "Vei pleca la mare cu prietenii!", "Nu vei avea restante pentru toamna!"]
let ravas = document.getElementById('ravas')
ravas.style.color = 'whitesmoke'
ravas.style.fontSize = '3vw'
ravas.style.marginLeft = '7%'
ravas.appendChild(document.createTextNode('\xa0\xa0\xa0' + vector_ravase[Math.floor(Math.random() * vector_ravase.length)]))
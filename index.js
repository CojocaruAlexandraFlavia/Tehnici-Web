function changeColorOnMouseEvents() {
    var el = document.getElementsByTagName("p");
    for(var i=0; i<el.length; i++){
        el[i].onmouseover=stil1;
        el[i].onmouseout=stil2;
    }
}
function stil1(){
    this.style.color="plum";
}
function stil2(){
    this.style.color="white";
}
changeColorOnMouseEvents();

// apartie treptata titlu
var titlu = document.getElementById('container1').textContent
var ii = 0, j = 0;
var z = setInterval(function(){
    var aux = '';
    for(var k1 = 0; k1 <= ii; k1++ ){
        aux += titlu[k1];
    }
    ii++;
    if(titlu.length-ii-j == 0 && titlu.length % 2 == 1){
        document.getElementById('container1').innerHTML = titlu;
        clearInterval(z);
    }
    else{
        var aux2 = aux + new Array(titlu.length-ii-j-1 ).fill('\xa0').join('');
        for(var k3 = titlu.length - j -1; k3 < titlu.length; k3++){
            aux2 += titlu[k3];
        }
        j++;
        document.getElementById('container1').innerHTML = aux2;
        if(ii == titlu.length / 2 ){
            clearInterval(z);
        } 
    }
}, 100);





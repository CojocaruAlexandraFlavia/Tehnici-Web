let imagesArray = [
    'the_ring.jpg', 'ouija.jpg', 'pennywise.jpeg', 'sinister1.jpg', '12.jpg', 'grudge.jpg', 'hereditary.jpg', 'jeepers-creepers.jpg', 'insidious.jpg', 'rosemarys-baby.jpg' ,'alien.jpg', 'noel.jpeg', 'oculus.jpg', 'teoer.jpg'
]
let i = 0;

let first = document.getElementById('gallery');
first.style.background = `url(./images/${imagesArray[0]})`
insertText(0);
let arrows = document.querySelectorAll('.arrow');

arrows.forEach(function(arrow){
    arrow.addEventListener('click', function(e){
                if (e.target.id === "left"){
            i--;
            if (i < 0){
                i = imagesArray.length -1;
            }
            first.style.background = `url(./images/${imagesArray[i]})`;
            insertText(i);
        } else if (e.target.id === "right") {
            i++;
            if (i >= imagesArray.length ){
                i = 0;
            }
            first.style.background = `url(./images/${imagesArray[i]})`;
            insertText(i);
        }
    })
});

function insertText(i){
    if(i==0)
        document.getElementById('imageText').innerHTML="THE RING";
    else if(i==1)
        document.getElementById('imageText').innerHTML="OUIJA";
    else if(i==2)
        document.getElementById('imageText').innerHTML="IT";
    else if(i==3)
        document.getElementById('imageText').innerHTML="SINISTER";
    else if(i==4)
        document.getElementById('imageText').innerHTML="FRIDAY THE 13TH";
    else if(i==5)
        document.getElementById('imageText').innerHTML="THE GRUDGE";
    else if(i==6)
        document.getElementById('imageText').innerHTML="HEREDITARY";
    else if(i==7)
        document.getElementById('imageText').innerHTML="JEEPERS CREEPERS";
    else if(i==8)
        document.getElementById('imageText').innerHTML="INSIDIOUS";
    else if(i==9)
        document.getElementById('imageText').innerHTML="ROSEMARY'S BABY";
    else if(i==10)
        document.getElementById('imageText').innerHTML="ALIEN";
    else if(i==11)
        document.getElementById('imageText').innerHTML="NIGHTMARE ON ELM STREET";
    else if(i==12)
        document.getElementById('imageText').innerHTML="OCULUS";
    else if(i==13)
        document.getElementById('imageText').innerHTML="THE EXORCISM OF EMILY ROSE";    
}
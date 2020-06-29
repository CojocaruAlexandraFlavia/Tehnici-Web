let category=document.getElementsByClassName('myCheck');
let category1=document.getElementsByClassName('myCheck1');

let oldMovies=['House of Wax','The Werewolf','Back from the Dead','Night of the Demon','Dracula','The Mummy', 'The Haunting','Night of the Living Dead',"Rosemary's Baby", 'The Exorcist','The Exorcist II', 'The Texan Chainsaw Massacre', 'Audrey Rose', 'Halloween', 'Alien']
let movies1980_2000=['The Shining', 'The Evil Dead','Poltergeist','A Nightmare on Elm Street','Hellraiser', 'Predator', 'Scream', 'I know what you did last summer', "Child's Play", 'Night of the Demons']
let movies2000_present=['Final Destination', 'Jeepers Creepers', 'Scary Movie', 'The Amityville Horror','A Dark Song', 'The Exorcism of Emily Rose', 'Paranormal Activity', 'The Eye', 'The Grudge', 'Insidious', 'The Cabin in the Woods', 'The Devil Inside', 'Sinister',  'Evil Dead','Hereditary', 'Ouija', 'The Crucifixion', 'Veronica', "Happy Death Day"]
let slasherMovies=['Scream', 'A Nightmare on Elm Street', 'The Texan Chainsaw Massacre', 'Halloween', 'I know what you did last summer']
let occultMovies=["Rosemary's Baby", 'Night of the Demon', 'A Dark Song', 'The Devil Inside', 'Hereditary', 'The Exorcist']
let possessionMovies=['The Exorcist', 'The Exorcism of Emily Rose', 'Night of the Demons', ' The Evil Dead', 'Insidious', 'Sinister', 'Veronica']
let others=['The Werewolf', 'Dracula', 'The Mummy', 'Predator', 'Alien', 'Final Destination', 'Scary Movie','The Eye', 'The Grudge']

let itemsChecked=[], itemsChecked1=[];
/*let i=0;*/
let cm=[];

function show(){
    let nr=checks(category);
    let nr1=checks(category1);
    if(nr==0 && nr1==0)
        document.getElementById('raspuns').innerHTML="Nu ati bifat nimic!";
    else if(nr>0 && nr1==0 ){
        let aux=[], k=0;
        for(var i=0; i<itemsChecked.length; i++){
            if(itemsChecked[i]=="1950-1980"){
                let item=oldMovies[Math.floor(Math.random() * oldMovies.length)];
                aux[k++]=item;
            }
            if(itemsChecked[i]=='1980-2000'){
                let item=movies1980_2000[Math.floor(Math.random() * movies1980_2000.length)];
                aux[k++]=item;
            }
            if (itemsChecked[i]=='2000-prezent'){
                let item=movies2000_present[Math.floor(Math.random() * movies2000_present.length)];
                aux[k++]=item;
            }
        }
        let result="RASPUNS: "+ aux[Math.floor(Math.random() * aux.length)];
        document.getElementById('raspuns').innerHTML=result;
    }
    else if(nr==0 && nr1>0){
        let aux=[], k=0;
        for(var i=0; i<itemsChecked1.length; i++){
            if(itemsChecked1[i]=="Slasher"){
                let item=slasherMovies[Math.floor(Math.random() * slasherMovies.length)];
                aux[k++]=item;
            }
            if(itemsChecked1[i]=="Ocult"){
                let item=occultMovies[Math.floor(Math.random() * occultMovies.length)];
                aux[k++]=item;
            }
            if (itemsChecked1[i]=="Posedare"){
                let item=possessionMovies[Math.floor(Math.random() * possessionMovies.length)];
                aux[k++]=item;
            }
            if(itemsChecked1[i]=="Altele"){
                let item=others[Math.floor(Math.random() * others.length)];
                aux[k++]=item;
            }
        }
        let result="RASPUNS: "+ aux[Math.floor(Math.random() * aux.length)];
        document.getElementById('raspuns').innerHTML=result;
    }
    else {
        let rezultat=[], index=0;
        console.log(itemsChecked, itemsChecked1);
        for(let i=0; i<itemsChecked.length; i++){
            for(let j=0; j<itemsChecked1.length; j++){
                if(itemsChecked[i]=="1950-1980" && itemsChecked1[j]=="Slasher"){
                    let rez=commonMovies(oldMovies, slasherMovies);
                    rezultat[index++]=rez;
                }
                else if(itemsChecked[i]=="1950-1980" && itemsChecked1[j]=="Ocult"){
                    let rez=commonMovies(oldMovies, occultMovies);
                    rezultat[index++]=rez;
                }
                else if(itemsChecked[i]=="1950-1980" && itemsChecked1[j]=="Posedare"){
                    let rez=commonMovies(oldMovies, possessionMovies);
                    rezultat[index++]=rez;
                }
                else if(itemsChecked[i]=="1950-1980" && itemsChecked1[j]=="Altele"){
                    let rez=commonMovies(oldMovies, others);
                    rezultat[index++]=rez;
                }
                else if(itemsChecked[i]=="1980-2000" && itemsChecked1[j]=="Slasher"){
                    let rez=commonMovies(movies1980_2000, slasherMovies);
                    rezultat[index++]=rez;
                }
                else if(itemsChecked[i]=="1980-2000" && itemsChecked1[j]=="Ocult"){
                    let rez=commonMovies(movies1980_2000, occultMovies);
                    rezultat[index++]=rez;
                }
                else if(itemsChecked[i]=="1980-2000" && itemsChecked1[j]=="Posedare"){
                    let rez=commonMovies(movies1980_2000, possessionMovies);
                    rezultat[index++]=rez;
                }
                else if(itemsChecked[i]=="1980-2000" && itemsChecked1[j]=="Altele"){
                    let rez=commonMovies(movies1980_2000, others);
                    rezultat[index++]=rez;
                }
                else if(itemsChecked[i]=="2000-prezent" && itemsChecked1[j]=="Slasher"){
                    let rez=commonMovies(movies2000_present, slasherMovies);
                    rezultat[index++]=rez;
                }
                else  if(itemsChecked[i]=="2000-prezent" && itemsChecked1[j]=="Ocult"){
                    let rez=commonMovies(movies2000_present, occultMovies);
                    rezultat[index++]=rez;
                }
                else if(itemsChecked[i]=="2000-prezent" && itemsChecked1[j]=="Posedare"){
                    let rez=commonMovies(movies2000_present, possessionMovies);
                    rezultat[index++]=rez;
                }
                else  if(itemsChecked[i]=="2000-prezent" && itemsChecked1[j]=="Altele"){
                    let rez=commonMovies(movies2000_present, others);
                    rezultat[index++]=rez;
                }
            }
        }
        document.getElementById('raspuns').innerHTML="RASPUNS: " + rezultat[0];
    }
    
    
}

function checks(someArray){
    let nr=0, k=0;
    for(var i=0; i<someArray.length; i++)
        if(someArray[i].checked){
            nr++;
            if(someArray==category) itemsChecked[k++]=someArray[i].value;
            else itemsChecked1[k++]=someArray[i].value;
        }
    
    return nr;
}
function commonMovies(array1, array2){
    console.log("enters common movies");
    let k=0, rez="", ok=false;
    for(let i=0; i<array1.length && ok==false; i++){
        for(let j=0; j<array2.length && ok==false; j++){
            console.log(i, j);
            if(array1[i]==array2[j]){
                rez=array1[i];
                ok=true
            }
        }
    }
    return rez
}

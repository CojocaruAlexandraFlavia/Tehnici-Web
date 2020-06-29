function create_element(){
    var paragraph=document.createElement("P");
    paragraph.innerText="Potrivit sotilor Warren, o studenta a primit cadou de la mama ei papusa. Aceasta a inceput sa se poarte ciudat, dar in ciuda aceasta, studenta si colega ei de camera au pastrat-o, desi un medium le-a spus ca papusa este conectata cu spiritul unei fetite decedate, numita Annabelle. Fetele au crezut ca nu se pot intampla lucruri grave, insa totul s-a inrautatit. Intr-un final, sunt chemati si sotii Warren care, dupa ce confirma faptul ca papusa este posedata de o entitate rauvoitoare, iau papusa si o muta in muzeul lor de obiecte oculte din statul Connecticut. Lumea era si este destul de sceptica in ceea ce priveste veridicitatea celor relatate de Ed si Lorraine, spunand ca acele obiecte din muzeu nu semnifica de fapt nimic. Altii insa au investigat si, spun ei, ca au detectat lucruri neobisnuite odata ce au atins papusa. Se spune, de asemenea, ca papusa Annabelle ar fi fost sursa de inspiratie si pentru Chucky, celebra papusa cu comportament straniu din filmele Child's Play.Exista multe zvonuri si pareri, insa un lucru este sigur: papusa Annabelle exista."
    document.getElementById("new_element").appendChild(paragraph);
    var image=document.createElement("IMG");
    image.setAttribute("src", 'annabelle.jpg');
    image.setAttribute('width', '400');
    document.getElementById("new_element").appendChild(image);
}

//aparitie treptata cuvant 
let text1 = 'Annabelle" este un film horror din anul 2014, al doilea al seriei. Este prezentata povestea sotilor John si Mia, anume John ii cumpara sotiei sale o papusa, celebra papusa Annabelle, inspirata din realitate (chiar sotii Warren au relatat informatii despre ea ). In acea seara, la vecini in casa se petrece ceea ce declanseaza intreaga actiune a filmului: Annabelle, fiica adoptata a sotilor Haggins, impreuna cu iubitul ei, ii ucid, John si Mia sunt si ei atacati, Annabelle se sinucide cu noua papusa a Miei in brate, sangele ei curgand prin ochiul papusii. Din acel moment, Mia este vanata de demonul atasat de papusa ce ii cere sufletul, insa o femeie din vecinatate, Leah, se sacrifica, aruncandu-se pe geam cu papusa in brate, Mia, impreuna cu bebelusul ei si sotul scapand. Filmul debuteaza cu scena din finalul celui de-al doilea film ce reprezinta, de fapt, istoria papusii si a lui Annabelle. '
let text2 = 'Annabelle: Creation" este un prequel al filmului "Annabelle", aparut in anul 2017 si este al patrulea film al "The Conjuring Universe" franchise. Samuel si Esther isi pierd fiica, Annabelle, aceasta fiind lovita de o masina. 12 ani mai tarziu, acestia decid sa gazduiasca in casa lor pe sora Charlotte si 6 fetite, printre care si Janice. Se contureaza legatura cu "The Nun", cand o poza cu Charlotte si alte maicute apare, iar acolo se vede o umbra mai mult, anume demonul Valak. Janice, desi a fost avertizata, deschide o usa, unde gaseste celebra papusa, creata chiar de Samuel, eliberand un demon ce va teroriza fetele. Aflam si originea acestei povesti de la Esther: dupa moartea fiicei lor, s-au rugat sa isi mai vada fiica o data, o entitate le-a raspuns si le-a spus sa o lase sa se ataseze de papusa, insa nu era Annabelle. Janice este acum posedata de demon, il omoara pe Samuel, este inchisa cu papusa in dulapul respectiv de Charlotte. Cand ajunge politia, fata a disparut, va ajunge la un orfelinat, se va prezenta ca Annabelle sotilor Haggins care o adopta. De aici, continuarea in primul film.'
let paragraph1 = document.getElementsByClassName('p_top')[0];
let paragraph2 = document.getElementsByClassName('p_top')[1];
let p1Split = text1.split(' ');
let p2Split = text2.split(' ');
var x = setInterval(function displayWords1(){
    var word = p1Split.shift();
    if (word == null){
        clearInterval(x);
    }
    else {
        paragraph1.append(word + ' ');
    }
}, 333);
var y = setInterval(function displayWords2(){
    var word = p2Split.shift();
    if (word == null){
        clearInterval(y);
    }
    else{
        paragraph2.append(word + ' ');
    } 
}, 333);

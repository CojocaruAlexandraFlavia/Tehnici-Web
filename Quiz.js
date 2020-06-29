let quiz = document.getElementById('quiz')
let submitButton = document.getElementById('submitQuiz')
submitButton.style.marginLeft = '7.5%'
let result = document.getElementById('result')
result.style.marginLeft = '7.5%'
let intrebari = [{intrebare:"Cate filme Friday the 13th au aparut?", raspunsuri:[["6", false], ["10", false], ["12", true],["8", false]]},
                {intrebare: "In ce film aflam istoria papusii Annabelle?", raspunsuri: [["Annabelle", false], ["Annabelle: Creation", true], ["Nu se afla acest detaliu", false]]},
                {intrebare: "In ce an a aparut filmul The Nun?", raspunsuri:[["2012", false], ["2018", true], ["2016", false]]},
                {intrebare: "In ce film apar Ed si Lorraine Warren?", raspunsuri:[["The Conjuring", true], ["Drag me to hell", false], ["The Nun", true]]} ,  
                {intrebare: "Care film apartine genului slasher?", raspunsuri:[["Wrong Turn", true], ["Friday the 13th", true], ["Nightmare on Elm Street", true], ["The Exorcist", false]]},
                {intrebare: "Unde este filmat filmul The Nun?", raspunsuri:[["America", false], ["Spania", false], ["Romania", true]]} 
                ]

//creare lista intrebari
let questionNumber = 1;
for (var i = 0; i < intrebari.length; i++){
    let list = document.createElement("OL");
    list.style.marginLeft = '5%'
    list.style.borderStyle = 'double'
    list.style.borderColor = 'aquablue'
    list.style.borderRadius = '25px'
    list.style.fontSize = '2vw'
    let questionText = document.createTextNode(questionNumber + '.' + intrebari[i].intrebare);
    list.appendChild(questionText);
    for(var j = 0; j < intrebari[i].raspunsuri.length; j++){
        var check = document.createElement("INPUT")
        check.setAttribute("type", "checkbox");
        check.setAttribute("class", "checkList");
        check.setAttribute("value", intrebari[i].intrebare)
        check.style.width = '30px'
        check.style.height = '30px'
        var response = document.createElement("LI");
        response.textContent = intrebari[i].raspunsuri[j][0];
        response.setAttribute("class", "r")
        var line = document.createElement("DIV")
        line.appendChild(response);
        line.appendChild(check);
        line.style.marginLeft = '5%'
        line.style.fontSize = '2vw'
        list.append(line)
    }
    quiz.appendChild(list);
    questionNumber++;
}

//numar cate raspunsuri sunt corecte in total in vector
let nrCorrectAnswers = 0;
for (var index = 0; index < intrebari.length; index++){
    for (var index2 = 0; index2 < intrebari[index].raspunsuri.length; index2++){
        if (intrebari[index].raspunsuri[index2][1] == true ){
            nrCorrectAnswers ++;
        }
    }
}

//verificare raspunsuri
submitButton.setAttribute('onclick', 'count()')
let questions = document.getElementsByClassName('checkList')
let responses = document.getElementsByClassName('r')
let nrCorrectChecks = 0;
function count (){
    for (var k = 0; k < questions.length; k++){
        if (questions[k].checked && correctAnswer(responses[k].textContent, questions[k].value) == true){
            nrCorrectChecks++;
        }
        questions[k].disabled = true
    }
    submitButton.disabled = true
    result.innerText = "REZULTAT: " +  nrCorrectChecks * 10 + " / " + nrCorrectAnswers * 10 + " PCT";
}
function correctAnswer(answer, question){
    for (var ii = 0; ii < intrebari.length; ii++){
        if(intrebari[ii].intrebare == question){
            for(var jj = 0; jj < intrebari[ii].raspunsuri.length; jj++){
                if(intrebari[ii].raspunsuri[jj][0] == answer && intrebari[ii].raspunsuri[jj][1] == true){
                    return true;
                }
            }
        }
       
    }
    return false;
}
let sButton = document.getElementById('send');
let rButton= document.getElementById('reset');
let f = document.getElementById('form');

f.addEventListener("submit", function(e){
    e.preventDefault();
})

//sButton.addEventListener("click", function(e){
        //let name = document.getElementById('name').value;
        //let email = document.getElementById('email').value;
        //let message = document.getElementById('message').value;
        //localStorage.setItem('name', name);
        //localStorage.setItem('email', email);
        //localStorage.setItem('message', message);
//})
rButton.addEventListener('click', function(){
    let name = document.getElementById('name');
    //let email = document.getElementById('email');
    let message = document.getElementById('message');
    name.value = '';
    //email.value = '';
    message.value = '';
})
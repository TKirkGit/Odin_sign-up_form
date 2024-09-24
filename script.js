const pw = document.querySelector('#password')
let pwValue = pw.value;
const confirm_pw = document.querySelector('#confirm_password')
let confirmpwValue = confirm_pw.value;
const password_error_message = document.querySelector('#password-error-message')



let isValid = false;
const passwordCheckBoxItems = document.querySelectorAll('.password-check-box li');




const btn = document.querySelector('#btn')


btn.addEventListener('click', function(){

    if(!isValid){
        console.log("TEST");
    }

    if(confirmpwValue === pwValue && confirmpwValue.length > 0){
        console.log("JA")
        password_error_message.style.display = 'none'


    }else{
        console.log("NEIN")
        password_error_message.style.display = 'block'
    }

   
    
});



pw.addEventListener('input', function(){
    pwValue = pw.value;
    console.log(pwValue)    

    passwordCheckBoxItems[0].style.color = pwValue.length >= 8 ? 'green' : 'red'; // Mindestens 8 Zeichen
    if (pwValue.length < 8) isValid = false;




});

confirm_pw.addEventListener('input', function(){
    confirmpwValue = confirm_pw.value;
});
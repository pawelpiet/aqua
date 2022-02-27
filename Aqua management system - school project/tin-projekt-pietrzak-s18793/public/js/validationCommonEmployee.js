function validateForm(){
    
    const imieInput = document.getElementById('firstName');
    const nazwiskoInput = document.getElementById('lastName');
    const emailInput = document.getElementById('email');
    const stazInput = document.getElementById('staz');

    const errorImie = document.getElementById('errorImie');
    const errorNaziwsko = document.getElementById('errorNazwisko');
    const errorEmail= document.getElementById('errorEmail');
    const errorStaz= document.getElementById('errorStaz');


    const errorSummary = document.getElementById('errorSummary');
    let valid = true;

resetErrors([imieInput,nazwiskoInput,emailInput,stazInput],
    [errorImie,errorNaziwsko,errorEmail,errorStaz],errorSummary);

  


    if(!checkRequired(imieInput.value)){
        valid = false;
        imieInput.classList.add("error-input");
        errorImie.innerText="Pole jest wymagane";
    }else if (!checkTextLengthRange(imieInput.value,2,40)){
        valid= false;
        imieInput.classList.add("error-input");
        errorImie.innerText = "Pole to musi mieć od 2 do 40 znaków";
    }
    
    //Nazwisko
    if(!checkRequired(nazwiskoInput.value)){
        valid = false;
        nazwiskoInput.classList.add("error-input");
        errorNazwisko.innerText="Pole wymagane";
    }else if (!checkTextLengthRange(nazwiskoInput.value,2,50)){
        valid=false;
        nazwiskoInput.classList.add("error-input");
        errorNaziwsko.innerText = "Pole to musi mieć od 2 do 50 znaków";
    }
    
    if(!checkRequired(stazInput.value)){
        valid=false;
        stazInput.classList.add("error-input");
        errorStaz.innerText="Pole jest wymagane";
    }else if (!checkTextLengthRange(stazInput.value, 5, 60)) {
        valid = false;
        stazInput.classList.add("error-input");
        errorStaz.innerText = "Pole powinno zawierać od 5 do 60 znaków";
    }
//email
if (!checkRequired(emailInput.value)) {
    valid = false;
    emailInput.classList.add("error-input");
    errorEmail.innerText = "Pole jest wymagane";
} else if (!checkTextLengthRange(emailInput.value, 5, 60)) {
    valid = false;
    emailInput.classList.add("error-input");
    errorEmail.innerText = "Pole powinno zawierać od 5 do 60 znaków";
} else if (!checkEmail(emailInput.value)) {
    valid = false;
    emailInput.classList.add("error-input");
    errorEmail.innerText = "Pole powinno zawierać prawidłowy adres email";
}



if(!valid){
    errorSummary.innerText=("Formularz ma błedy");
} 
return valid;
    
}
function validateForm(){

const imieInput = document.getElementById('firstName');
const nazwiskoInput = document.getElementById('lastName');

const typAkwariumInput = document.getElementById('typAkwarium');
const iloscLitrowInput = document.getElementById('iloscLitrow');
const iloscRybInput = document.getElementById('iloscRyb');

const errorImie = document.getElementById('errorImie');
const errorNaziwsko = document.getElementById('errorNazwisko');

const errorTypAkwarium = document.getElementById('errorTypAkwarium');
const errorIloscLitrow = document.getElementById('errorIloscLitrow');
const errorIloscRyb = document.getElementById('errorIloscRyb');

const errorSummary = document.getElementById('errorSummary');


    let valid=true;

    resetErrors([imieInput,nazwiskoInput,typAkwariumInput,iloscLitrowInput,iloscRybInput],
        [errorImie,errorNaziwsko,errorTypAkwarium,errorIloscLitrow,errorIloscRyb],errorSummary); 

//imie 
if(!checkRequired(imieInput.value)){
    valid = false;
    imieInput.classList.add("error-input");
    errorImie.innerText="Pole jest wymagane";
}else if (!checkTextLengthRange(imieInput.value,2,40)){
    valid=false;
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
//email


//typ akwairum 
if(!checkRequired(typAkwariumInput.value)){
    valid = false;
    typAkwariumInput.classList.add("error-input");
    errorTypAkwarium.innerText="Pole jest wymagane";
}else if (!checkTextLengthRange(typAkwariumInput.value,2,50)){
    valid=false;
    typAkwariumInput.classList.add("error-input");
    errorTypAkwarium.innerText = "Pole musi mieć od 2 do 50 znaków";
}


//ilosc litrow 
if (!checkRequired(iloscLitrowInput.value)) {
    valid = false;
    iloscLitrowInput.classList.add("error-input");
    errorIloscLitrow.innerText = "Pole jest wymagane";
} else if (!checkNumber(iloscLitrowInput.value)) {
    valid = false;
    iloscLitrowInput.classList.add("error-input");
    errorIloscLitrow.innerText = "Pole powinno być liczbą";
}

//ilosc ryb

if (!checkRequired(iloscRybInput.value)) {
    valid = false;
    iloscRybInput.classList.add("error-input");
    errorIloscRyb.innerText = "Pole jest wymagane";
} else if (!checkNumber(iloscRybInput.value)) {
    valid = false;
    iloscRybInput.classList.add("error-input");
    errorIloscRyb.innerText = "Pole powinno być liczbą";
}




if(!valid){
    errorSummary.innerText=("Formularz ma błedy");
} 
return valid;



} 
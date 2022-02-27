/*
//Klient

const imieInput = document.getElementById('Imie');
const nazwiskoInput = document.getElementById('Nazwisko');
const typAkwariumInput = document.getElementById('TypAkwarium');
const iloscLitrowInput = document.getElementById('IloscLitrow');
const iloscRybInput = document.getElementById('IloscRyb');
//Pracownik

const stazInput = document.getElementById('Staż');
const emailInput = document.getElementById('E-mail');

// Usluga

const pracownikInput= document.getElementById('Pracownik');
const klientInput = document.getElementById('Klient');
const dataInput = document.getElementById('Data');
const opisInput = document.getElementById('Opis');
const cenaInput = document.getElementById('Cena');


//error 
 const errorImie = document.getElementById('errorImie');
 const errorNaziwsko = document.getElementById('errorNazwisko');
 const errorTypAkwarium = document.getElementById('errorTypAkwarium');
 const errorIloscRyb = document.getElementById('errorIlscRyb');

 const errorSummary = document.getElementById('errorSummary');

 const errorStaz = document.getElementById('errorStaz');
 const errorEmail = document.getElementById('errorEmail');

const errorPracownik = document.getElementById('errorPracownik');
const errorKlient = document.getElementById('errorKlient');
const errorOpis = document.getElementById('errorOpis');


//resetErrors([ ])

*/
function resetErrors(inputs, errorTexts, errorInfo){
    for(let i = 0; i< inputs.length; i++){
        inputs[i].classList.remove("error-input");
    }
    for(let i = 0; i<errorTexts.length; i++){
        errorTexts[i].innerText = "";
    }
    errorInfo.innerText="";
}

function checkRequired(value){
    if(!value){
        return false;
    } value = value.toString().trim();
    if(value === ""){
        return false;
    } 
    return true;
}


function checkTextLengthRange(value, min, max){
    if(!value){
        return false;
    }
     value= value.toString().trim();
     const length = value.length;
     if(max && length > max){
         return false;
     }
     if(min && length <min){
     return false;
     }
     return true;
}

function checkDateAfter(value, compareTo){
    console.log(value,compareTo);
    if(!value){
        return false;
    }
    
    if(!compareTo){
        return false;
    }
    
    const pattern = /(\d{4})-(\d{2})-(\d{2})/;
    if(!pattern.test(value)){
        return false;
    }

   
    if(!pattern.test(compareTo)){
        return false;
    }
    
    const valueDate = new Date(value);
    const comapareToDate = new Date(compareTo);
    console.log(valueDate,comapareToDate);
    return valueDate.getTime() >= comapareToDate.getTime();
}
function checkNumber(value) {
    if (!value) {
        return false;
    }
    if (isNaN(value)) {
        return false;
    }
    return true;
}
function checkNumberRange(value, min,max){
    if(!value){
        return false; 
    }
    if(isNaN(value)){
        return false;
    }
    value =  parseFloat(value);
    if(value < min ){
      return false;
    }
    if(value> max){
        return false;
    }
    return true;
}

function checkEmail(value) {
    if (!value) {
        return false;
    }
    value = value.toString().trim();
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(value);
}
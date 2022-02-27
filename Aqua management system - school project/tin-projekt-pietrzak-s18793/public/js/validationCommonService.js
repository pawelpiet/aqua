function validateForm(){
    const pracownikInput = document.getElementById('employee');
    const klientInput = document.getElementById('client');
    const dataInput = document.getElementById('date');
    const opisInput = document.getElementById('opis');
    const cenaInput = document.getElementById('cena'); 

    const errorPracownik = document.getElementById('errorPracownik');
    const errorKlient = document.getElementById('errorKlient');
    const errorData = document.getElementById('errorData');
    const errorOpis = document.getElementById('errorOpis');
    const errorCena = document.getElementById('errorCena');
    const errorSummary= document.getElementById('errorSummary');



//data
let nowDate = new Date(),
month = '' + (nowDate.getMonth()+1),
day =''+ nowDate.getDate(),
year = nowDate.getFullYear();

if(month.length < 2) month = '0'+ month;
if(day.length < 2 ) day = '0' + day;
const nowString = [year, month, day].join('-');


resetErrors([pracownikInput,klientInput,dataInput,opisInput,cenaInput],
    [errorPracownik,errorKlient,errorData,errorOpis,errorCena],errorSummary);
  
    let valid= true;


 if(!checkRequired(pracownikInput.value)){
     valid = false;
     pracownikInput.classList.add("error-input")
     errorPracownik.innerText = "Pole jest wymagane";
 }  else if(pracownikInput.value=="basic"){
    valid = false;
    pracownikInput.classList.add("error-input")
    errorPracownik.innerText = "Wybierz pracownika z listy";
 } 
 
 if(!checkRequired(klientInput.value)){
    valid = false;
    klientInput.classList.add("error-input")
    errorKlient.innerText = "Pole jest wymagane";
}else if(klientInput.value =="basic"){
    valid = false;
    klientInput.classList.add("error-input")
    errorKlient.innerText = "wybierz klienta z listy";
}        


if(!checkRequired(dataInput.value)){
    valid= false;
    dataInput.classList.add("error-input");
    errorData.innerText = "Pole jest wymagane";
}else if(checkDateAfter(dataInput.value,nowString)){
    
    valid=false;
    dataInput.classList.add("error-input");
    errorData.innerText = "Data nie może być z przyszłości";
}  

if(!checkRequired(opisInput.value)){

    valid = false;
    opisInput.classList.add("error-input");
    errorOpis.innerText="Pole jest wymagane";
}else if (!checkTextLengthRange(opisInput.value,2,100)){
    valid= false;
    opisInput.classList.add("error-input");
    errorOpis.innerText = "Pole to musi mieć od 2 do 100 znaków";
}


if(!checkRequired(cenaInput.value)){
    valid = false;
    cenaInput.classList.add("error-input");
    errorCena.innerText="Pole jest wymagane";
}else if (!checkNumber(cenaInput.value)){
    valid= false;
    cenaInput.classList.add("error-input");
    errorCena.innerText = "Pole to musi zawierać liczby";
} else if(!checkNumberRange(cenaInput.value,10,10000000)){
    valid= false;
    cenaInput.classList.add("error-input");
    errorCena.innerText= "Pole to musi zwierać kwotę od min. 10";
}

    if(!valid){
        errorSummary.innerText="Formularz zawiera błędy"
    }
    return valid;



}
let numberOfCountries = document.getElementById("risk-number-of-countries")
let numberUnderHorse = document.getElementById("risk-select-number-under-horse")
let selectedContinents = document.getElementById("risk-selected-continents")
let clearForm = document.getElementById("risk-clear-form")

numberOfCountries.addEventListener('input', submit)
numberUnderHorse.addEventListener('change', submit)
selectedContinents.addEventListener('change', submit)
clearForm.addEventListener('click', clear)

window.onload = function() {
    init();
}

function init(){
    document.getElementById("risk-number-of-countries").value=0;
    submit();
}

function submit(){
    let underHorse = document.getElementById("risk-select-number-under-horse").value
    let numberOfCountries = document.getElementById("risk-number-of-countries").value;
    let continents = document.getElementsByClassName('risk-continent-checkbox');
    let checkedContinents=0;

    for(let i=0; i<continents.length; ++i){
        if(continents[i].checked)
             checkedContinents += parseInt(continents[i].value);
    }
    
    checkedContinents+=parseInt(underHorse)
    if(numberOfCountries!="")
        checkedContinents+=parseInt(numberOfCountries)

    document.getElementById("risk-result").innerHTML=Math.round(checkedContinents/3);
}

function clear(){
    let inputElements = document.getElementsByClassName('risk-continent-checkbox');
    for(let i=0; i<inputElements.length; ++i)
        inputElements[i].checked=false;
        
    document.getElementById("risk-select-number-under-horse").options.selectedIndex  = 0
    init()
}
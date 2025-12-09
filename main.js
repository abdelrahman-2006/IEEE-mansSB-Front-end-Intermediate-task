let mainContainer = document.querySelector('main')
let buttons = document.querySelectorAll('#selection-grid button')
let selectionGrid = document.getElementById('selection-grid');
let customPercentage = document.getElementById('Custom-percentage');
let billAmount = document.getElementById('bill-amount');
let indvidualCount = document.getElementById('individual-count');
let tipPerPerson = document.getElementById('tip-per-person');
let totalPerPerson = document.getElementById('total-per-person');
let billError = document.getElementById('Bill-error');
let percentageError = document.getElementById('percentage-error')
let indvidualError = document.getElementById('individual-error')


let tipPercentage;
let bill;
let numberOfPeople;
let isValid = [false , false, false];

mainContainer.addEventListener("click",(e)=>{
    if(e.target.tagName == 'BUTTON') {
        if(e.target.id == 'reset') {
            // reset function
        }else {
            resetTip();
            tipPercentage = Number(e.target.id);
            

            e.target.style.backgroundColor = "#9febdf";
            e.target.style.color = "#00474b";
            isValid[1] = true;
            calculateTipPerPerson()
            calculateTotalPerPerson()
        }
    }else if(e.target.id == 'Custom-percentage') {
        resetTip();
    }
}
);


billAmount.addEventListener("input", ()=>{
    if(Number(billAmount.value) < 0 ){

        billAmount.style.outline = "3px solid red";
        billError.textContent = "negatives not allowed";
        isValid[0] = false;

    }else if(billAmount.value == "") {

        billAmount.style.outline = "3px solid red";
        billError.textContent = "Enter a Number";
        isValid[0] = false;

    }else {

        billAmount.style.outline = "";
        billError.textContent= "";
        bill = Number(billAmount.value);
        isValid[0] = true;

    }
    calculateTipPerPerson()
    calculateTotalPerPerson()
});


customPercentage.addEventListener("input", ()=>{
    if(Number(customPercentage.value) < 0 ){

        customPercentage.style.outline = "3px solid red";
        percentageError.textContent = "negatives not allowed";
        isValid[1] = false;

    }else {

        customPercentage.style.outline = "";
        percentageError.textContent= "";
        tipPercentage = Number(customPercentage.value);
        isValid[1]=true;

    }
    calculateTipPerPerson()
    calculateTotalPerPerson()
});


indvidualCount.addEventListener("input", ()=>{
    if(Number(indvidualCount.value) < 0 ){

        indvidualCount.style.outline = "3px solid red";
        indvidualError.textContent = "negatives not allowed";
        isValid[2]=false;

    }else if(Number(indvidualCount.value) == 0) {

        indvidualCount.style.outline = "3px solid red";
        indvidualError.textContent = "can't be zero";
        isValid[2]=false;

    }else if(Number(indvidualCount.value) % 1 != 0){

        indvidualCount.style.outline = "3px solid red";
        indvidualError.textContent = "can't be decimal";
        isValid[2]=false;

    }else {

        indvidualCount.style.outline = "";
        indvidualError.textContent= "";
        numberOfPeople = Number(indvidualCount.value);
        isValid[2]=true;

    }
    calculateTipPerPerson()
    calculateTotalPerPerson()
});


function calculateTipPerPerson() {
    if (!isValid[0] || !isValid[1] || !isValid[2]) {
        tipPerPerson.textContent = "0.00";
        return;
    }

    let result = (bill * tipPercentage) / (100 * numberOfPeople);
    result = Math.round(result*100)/100;
    tipPerPerson.textContent = result.toFixed(2);
}

function calculateTotalPerPerson() {
    if (!isValid[0] || !isValid[1] || !isValid[2]) {
        totalPerPerson.textContent = "0.00";
        return;
    }

    let result = (bill * (100 + tipPercentage)) / (100 * numberOfPeople);
    result = Math.round(result*100)/100;
    totalPerPerson.textContent = result.toFixed(2);
}


function resetBill() {
    billAmount.style.outline = "";
    billError.textContent= "";
    billAmount.value = 0;
    isValid[0]=false
}


function resetTip() {
    buttons.forEach(btn =>{
                btn.style.backgroundColor = ""
                btn.style.color = ""
            })
    customPercentage.style.outline = "";
    percentageError.textContent ="";
    customPercentage.value = "";
    tipPercentage = 0;
    isValid[1]=false;
} 


function resetNumberOfPeople() {
    indvidualCount.style.outline = "";
    indvidualError.textContent= "";
    indvidualCount.value = 0;
    isValid[2]=false;
}
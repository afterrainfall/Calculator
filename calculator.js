// add
// subtract
// multiply
// divide

operation = {
'+' : (a, b) => a + b,

'-' : (a, b) => a - b,

'*' : (a, b) => a * b,

'/' : (a, b) => a / b,
}


// variable for each num

let num1 = 0;
let num2 = 0;
let optr = '';


// operate function

function operate(optr, num1, num2){
    operation[optr](num1, num2);
}


// add value container

let valueArray = [];


let displayValue = document.createElement('div');

document.body.appendChild(displayValue);

let display = document.body.querySelector('.calculator-display');
let buttons = document.body.querySelectorAll('button');
display.textContent = '0';


// add buttons presses to display

buttons.forEach(button => button.addEventListener('click', function(e) {
    
    if (valueArray.length < 12 && !this.classList.contains("optr")) {
        valueArray.push(this.textContent);
        display.textContent = valueArray.join('');
    }

    displayValue.textContent = valueArray.join('');

    if (this.classList.contains("optr")) {
        display.textContent = '';

        optr = this.textContent;
    }

}));





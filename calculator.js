// add
// subtract
// multiply
// divide

operation = {
'+' : (a, b) => 
    Math.min(999999999999, Math.round(a + b)),

'-' : (a, b) => 
    Math.min(999999999999, Math.round(a - b)),

'*' : (a, b) =>
    Math.min(999999999999, Math.round(a * b)),

'/' : (a, b) => {
    if (b == 0) {
        Math.min(999999999999, Math.round(a / b));
        return "Can't div by 0";
    } else {
        return Math.min(999999999999, Math.round(a / b));
    }},
}


// variable for each num

let num1 = null;
let num2 = null;
let optr = '';


// operate function

function operate(optr, num1, num2){
    return operation[optr](num1, num2);
}


// add value container
// add display

let valueArray = [];

let displayValue = document.createElement('div');
document.body.appendChild(displayValue);

let display = document.body.querySelector('.calculator-display');
let buttons = document.body.querySelectorAll('button');
display.textContent = '0';


// add buttons presses to display

buttons.forEach(button => button.addEventListener('click', function(e) {    

    if (valueArray.length < 12 && !this.classList.contains("optr")) {
   
        if (valueArray.length == 0 && this.textContent == "0" && num1 == null || valueArray.indexOf(".") !== -1 && this.textContent == ".") {
            return;
        } else {
            valueArray.push(this.textContent);
        }
        valueArray = valueArray.join('');
        num2 = +valueArray;
        display.textContent = valueArray;
        valueArray = valueArray.split('');
        console.log(num1);
        console.log(num2);
    
    }

    if (this.classList.contains("optr")) {

        console.log(this.textContent);
        
        if (this.textContent == "AC") {

            valueArray = [];
            num1 = null;
            num2 = null;
            display.textContent = valueArray;
            // console.log(valueArray);
            // console.log(num1);
            // console.log(num2);

        } else if (this.textContent == "C") {

            valueArray.splice(-1, 1);
            num2 = Number(toString(num2).slice(-1));
            valueArray = valueArray.join('');
            display.textContent = valueArray;
            valueArray = valueArray.split('');

            // console.log(valueArray);
            // console.log(num1);
            // console.log(num2);

        } else if (num2 !== null && this.textContent == "%") {

            valueArray = String(+valueArray.join('')/100);
            num2 = +valueArray;
            display.textContent = valueArray.slice(0, 13);
            valueArray = valueArray.split('');

            // console.log(valueArray);
            // console.log(num1);
            // console.log(num2);

        } else if (this.textContent == "=") {

            let result = operate(optr, num1, num2);
            // console.log(typeof result);
            valueArray = [];
            num1 = null;
            num2 = null;
            display.textContent = result;
            optr = this.textContent;

            // console.log(valueArray);
            // console.log(num1);
            // console.log(num2);

        } else if (num1 !== null && num2 !== null) {

            let result = operate(optr, num1, num2);
            valueArray = [];
            num1 = result;
            num2 = null;
            display.textContent = result;
            if (typeof(result) !== "number") {
                num1 = null;
            }
            optr = this.textContent;
            // console.log(result);

        } else {

        if (num1 == null) {
            num1 = num2;
        }
        
        valueArray = [];
        optr = this.textContent;

        // console.log(valueArray);
        }
    }

}));







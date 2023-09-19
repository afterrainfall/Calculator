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
    return operation[optr](num1, num2);
}


// add value container
// add display

let valueArray = [];
let operands = '';


let displayValue = document.createElement('div');
document.body.appendChild(displayValue);

let display = document.body.querySelector('.calculator-display');
let buttons = document.body.querySelectorAll('button');
display.textContent = '0';


// add buttons presses to display

let i = 1;

buttons.forEach(button => button.addEventListener('click', function(e) {    

    if (valueArray.length < 12 && !this.classList.contains("optr")) {
        // if (valueArray[1] == optr) {
        //     display.textContent = '';
        //     valueArray.push(this.textContent);
        //     valueArray = valueArray.join('');
        //     console.log(valueArray);
        //     display.textContent = valueArray[2];
        //     num2 = +valueArray[2];
        //     console.log(valueArray[2]);
        //     console.log(num2);
        // } else {
        valueArray.push(this.textContent);
        valueArray = valueArray.join('');
        display.textContent = valueArray;
        switch (i % 2) {
            case (1): 
            num1 = +valueArray;
            break;

            case (0): 
            num2 = +valueArray;
            break;
        }
        valueArray = valueArray.split('');
        console.log(num1);
        console.log(num2);
      
        // }
    }

    // displayValue.textContent = valueArray.join('');

    if (this.classList.contains("optr")) {
        valueArray = valueArray.join('').split(this.textContent);
        console.log(valueArray);
        valueArray.splice(0,2);
        optr = this.textContent;
        console.log(optr);
        // valueArray[1] = '';
        // valueArray[1] = this.textContent;
        // valueArray = valueArray.join('');
        console.log(valueArray);
        console.log(num1);
        console.log(num2);
        i++;
    }

    // if (valueArray[1]) {
    //     display.textContent = '';
    //     valueArray.push(this.textContent);
    //     console.log(valueArray);
    // }

    //     valueArray.push(this.textContent);
    //     operands = valueArray.join('').split(`+`);
    //     console.log(operands);
    //     num1 = operands[0];
    //     optr = operands[1];
    //     console.log(optr);
    //     console.log(num1);
    // }

}));







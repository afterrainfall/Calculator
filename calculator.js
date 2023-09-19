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


// operate function

function operate(optr, num1, num2){
    operation[optr](num1, num2);
}


// add buttons presses to display
let display = document.body.querySelector('.calculator-display');
let buttons = document.body.querySelectorAll('button');
display.textContent = '0';

buttons.forEach(button => button.addEventListener('click', function(e) {
    display.textContent = this.textContent;
    // console.log(this.textContent);
})
);
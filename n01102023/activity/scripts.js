const operand = document.querySelector('.operand');
const result = document.querySelector('.result');
const buttons = document.querySelectorAll('button');

let calculation = [];
let inputs;

function calculate(button) {
    const value = button.innerText;
    if(value === 'CLEAR') {
        calculation = [];
        operand.innerText = '';
        result.innerText = '0';
    }
    else if(value === 'DEL') {
        calculation.pop(value);
        inputs = calculation.join('');
        operand.innerText = inputs;
    }
    else if(value === "=") {
        result.innerText = eval(inputs);
    }
    else {
        calculation.push(value);
        inputs = calculation.join('');
        operand.innerText = inputs;
    }
}

buttons.forEach(
    button => button.addEventListener(
        'click',
        () => {
            result.innerText = '';
            calculate(button);
        }
    )
);
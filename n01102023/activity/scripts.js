const operand = document.querySelector('.operand');
const result = document.querySelector('.result');
const buttons = document.querySelectorAll('button');

let calculation = [];
let inputs;

function calculate(button) {
    const value = button.textContent;
    if(value === 'CLEAR') {
        calculation = [];
        operand.textContent = '';
        result.textContent = '0';
    }
    else if(value === 'DEL') {
        calculation.pop(value);
        inputs = calculation.join('');
        operand.textContent = inputs;
    }
    else if(value === "=") {
        result.textContent = eval(inputs);
    }
    else {
        calculation.push(value);
        inputs = calculation.join('');
        operand.textContent = inputs;
    }
}

buttons.forEach(
    button => button.addEventListener(
        'click',
        () => {
            result.textContent = '';
            calculate(button);
        }
    )
);
const calculator = document.querySelector('.calculator');
const display = document.querySelector('.display');

let firstOperand = null;
let operator = null;
let waitingForSecondOperand = false;

calculator.addEventListener(
    'click',
    e => {
        performComputation = (firstOperand, operator, secondOperand) => {
            if(operator === '+') {
                return firstOperand + secondOperand;
            }
            else if(operator === '-') {
                return firstOperand - secondOperand;
            }
            else if(operator === '*') {
                return firstOperand * secondOperand;
            }
            else if(operator === '/') {
                return firstOperand / secondOperand;
            }
        }
        if(e.target.classList.contains('number')) {
            inputNumber = (number) => {
                const displayValue = display.innerText;
                if(waitingForSecondOperand) {
                    display.innerText = number;
                    waitingForSecondOperand = false;
                }
                else {
                    display.innerText = displayValue === '0' ? number : displayValue + number;
                }
            }
            inputNumber(e.target.innerText);
        }
        else if(e.target.classList.contains('operator')) {
            inputOperator = (op) => {
                const displayValue = display.innerText;
                if(firstOperand === null) {
                    firstOperand = parseFloat(displayValue);
                }
                else if(operator) {
                    const result = performComputation(firstOperand, operator, parseFloat(displayValue));
                    display.innerText = result;
                    firstOperand = result;
                }
                operator = op;
                waitingForSecondOperand = true;
            }
            inputOperator(e.target.innerText);
        }
        else if(e.target.classList.contains('clear')) {
            clear = () => {
                firstOperand = null;
                operator = null;
                waitingForSecondOperand = false;
                display.innerText = '0';
            }
            clear();
        }
        else if(e.target.classList.contains('delete')) {
            del = () => {
                // display.innerText = display.innerText.slice(0, -1);
            }
            del();
        }
        else if(e.target.classList.contains('decimal')) {
            inputDecimal = () => {
                const displayValue = display.innerText;
                if(!displayValue.includes('.')) {
                    display.innerText = displayValue + '.';
                }
            }
            inputDecimal();
        }
        else if(e.target.classList.contains('equal')) {
            compute = () => {
                if(firstOperand && operator && !waitingForSecondOperand) {
                    const result = performComputation(firstOperand, operator, parseFloat(display.innerText));
                    display.innerText = result;
                    firstOperand = null;
                    operator = null;
                }
            }
            compute();
        }
    }
);

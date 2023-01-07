const num1 = Number(prompt("Enter the first Value: "));
const num2 = Number(prompt("Enter the second Value: "));
const operator = prompt("Enter operator ( +, -, *, / )");

let result;

if(isNaN(num1) || isNaN(num2)){
    alert("Please enter a valid number");
}
else if(operator === "+"){
    result = num1 + num2;
    alert(`The sum of ${num1} and ${num2} is ${result}`);
}
else if(operator === "-"){
    result = num1 - num2;
    alert(`The difference of ${num1} and ${num2} is ${result}`);
}
else if(operator === "*"){
    result = num1 * num2;
    alert(`The product of ${num1} and ${num2} is ${result}`);
}
else if(operator === "/"){
    result = num1 / num2;
    alert(`The quotient of ${num1} and ${num2} is ${result}`);
}
else {
    alert("Please use a valid operator ( either +, -, * or / )");
}

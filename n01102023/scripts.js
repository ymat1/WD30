const money = document.querySelector('#money');
const months = document.querySelector('#months');
const interest = document.querySelector('#interest');

const initialAmount = document.querySelector('#initialAmount');
const withInterest = document.querySelector('#withInterest');
const interestBar = document.querySelector('.interestBar');

const calculate = () => {
    const initialDeposit = parseFloat(money.value);
    const monthsValue = parseFloat(months.value) / 12;
    const interestValue = parseFloat(interest.value) * 0.01;

    if (!initialDeposit || !monthsValue || !interestValue) {
        return;
    }

    const result = initialDeposit + (initialDeposit * interestValue * monthsValue);
    const height = ( (result / initialDeposit) * 100) + "px";
    interestBar.style.height = height;

    initialAmount.innerText = initialDeposit.toLocaleString(
        'en-US',
        {
            style: 'currency',
            currency: 'PHP'
        }
    );

    withInterest.innerText = result.toLocaleString(
        'en-US',
        {
            style: 'currency',
            currency: 'PHP'
        }
    );

    // const barChart = parseFloat(monthsValue * interest.value) + 100;
    // interestBar.style.height = `${barChart}px`;

    console.log(result);
}

calculate();

money.addEventListener('input', calculate);
interest.addEventListener('input', calculate);
months.addEventListener('change', calculate);
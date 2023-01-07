const btnRadio = document.querySelector('#btnRadio');

btnRadio.addEventListener(
    'click',
    () => {
        const checked = document.querySelector('input[name="radbtn"]:checked');
        alert(checked.value);
    }
);

const radBtn = document.querySelectorAll('input[name="radbtn"]');

radBtn.forEach(
    (el) => {
        el.addEventListener(
            'change',
            (e) => {
                // e.target
                alert(e.target.value);
            }
        );
    }
);

const firstName = document.querySelector('#firstName');
const output = document.querySelector('#output');

firstName.addEventListener(
    'change',
    (e) => {
        output.innerText = `Hello, ${e.target.value}!`;
    }
);

const nickname = document.getElementById('nickname');
const nicknameOutput = document.getElementById('nicknameOutput');
let timer;

nickname.addEventListener(
    'input',
    (e) => {
        // debounce / debouncing
        // setTimeout(callbackfunction, milliseconds)
        clearTimeout(timer);
        timer = setTimeout(
            () => {
                nicknameOutput.innerText = `Hi, ${e.target.value}!`;
                console.log(e.target.value);
            },
            1000
        );
    }
);

const checkAll = document.querySelector('#checkAll');
const checkboxes = document.querySelectorAll('input[name="check"]');

checkAll.addEventListener(
    'click',
    (e) => {
        const checked = e.target.checked;

        checkboxes.forEach(
            (checkbox) => {
                checkbox.checked = checked;
            }
        );
    }
);

const btnToggle = document.querySelector('#toggle');
const colors = document.querySelectorAll('input[name="colors"]');
/* when toggle button is clicked:
    1. If 1 or more checkboxes is unchecked, check all
    2. Else, uncheck all
*/
btnToggle.addEventListener(
    'click',
    () => {
        let allChecked = true;
        colors.forEach(
            (color) => {
                if(!color.checked) {
                    allChecked = false;
                }
            }
        );

        if(!allChecked) {
            // check all checkboxes
            colors.forEach(
                (color) => {
                    color.checked = true
                }
            )
        }
        else {
            //  uncheck all checkboxes
            colors.forEach(color => color.checked = false);
        }
    }
);

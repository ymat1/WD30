const btnToggle = document.querySelector('#toggle');
const content = document.querySelector('#content');

btnToggle.addEventListener(
    'click',
    () => {
        /*
            1. Check the display property of content div
            2. If display is none, show the div (block)
            3. Else, hide the div
        */
        if(content.style.display === "none") {
            // show the content
            content.style.display = "block";
        }
        else {
            // hide the content
            content.style.display = "none";
        }
        // content.classList.toggle('hide');
    }
);

// element.classList.add("box");
const btnToggleText = document.querySelector('#toggleText');
const text = document.querySelector('#text');

btnToggleText.addEventListener(
    'click',
    () => {
        text.classList.toggle('box');
    }
);

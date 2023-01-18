console.log('Sending a request to server');

setTimeout(
    () => {
    console.log('Received a response from the server');
    },
    3000
);

console.log('This is the end of the file!');

// Call Stack

// check if triangle is a right triangle
// a^2 + b^2 = c^2

const multiply = (x, y) => {
    return x * y;
}

const square = (x) => {
    return multiply(x, x);
}

const isRightTriangle = (a, b, c) => {
    return square(a) + square(b) === square(c);
}

console.log(isRightTriangle(3, 4, 5)); // true

// Promise(s)
// Resolved or Rejected

// Unsplash Access Key
// tovaDKe_St_ZYf048d2BrCIvQ_tsBw9gbQNtkXikxWk
// https://api.unsplash.com/
// /search/photos
// Authorization: Client-ID YOUR_ACCESS_KEY

// https://api.unsplash.com/search/photos?query=house
// ?key=value&key2=value2
// ? = query string / query parameters

const baseURL = 'https://api.unsplash.com/';
const search = 'search/photos';
const query = '?query=';
// const requestURL = baseURL + search + query;
// https://api.unsplash.com/search/photos?query=house

const ACCESS_KEY = 'tovaDKe_St_ZYf048d2BrCIvQ_tsBw9gbQNtkXikxWk';
const clientID = `Client-ID ${ACCESS_KEY}`;

// create headers
const myHeaders = new Headers();
myHeaders.append('Authorization', clientID);

// request options / configuration
const requestOptions = {
    method: 'GET',
    headers: myHeaders
}

const output = document.querySelector('#output');

const searchTerm = document.querySelector('#search');
const searchBtn = document.querySelector('#searchBtn');
/*
    When searchBtn is clicked:
    get value of searchTerm
    assign search term to query
    do the request
*/
searchBtn.addEventListener(
    'click',
    () => {
        const term = searchTerm.value;
        const queryTerm = query + term;
        const queryURL = baseURL + search + queryTerm;
        
        fetch(queryURL, requestOptions)
            // .then - promise syntax
            .then(res => {
                return res.json();
            })
            .then(result => {
                console.log(result);
                // output.innerText = '';
                // output.textContent = '';
                output.replaceChildren();
                for (let photo of result.results) {
                    // photo.urls.small
                    const imageContainer = document.createElement('div');
                    const image = document.createElement('img');

                    image.src = photo.urls.small;

                    imageContainer.append(image);
                    output.append(imageContainer);
                }
            })
            .catch(err => {
                console.log(err);
            })
            }
)




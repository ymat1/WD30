const reviewForm = document.querySelector('#reviewForm');
const title = document.querySelector('#title');
const year = document.querySelector('#year');
const review = document.querySelector('#review');
const display = document.querySelector('#display pre');
const retrieveBtn = document.querySelector('#retrieveBtn');
const reviewsTable = document.querySelector('#reviewsTable');
const titleError = document.querySelector('#titleError');
const movieReviews = [];

reviewForm.addEventListener(
    'submit',
    (e) => {
        e.preventDefault();
        
        const movieReview = {
            id: Date.now(),
            title: title.value,
            year: year.value,
            review: review.value
        }
        movieReviews.push(movieReview);
        reviewForm.reset();
        console.table(movieReview);
        const reviewsJSON = JSON.stringify(movieReviews, null, 2);
        display.innerText = '\n' + reviewsJSON;

        localStorage.setItem('Movie Reviews', reviewsJSON);
    }
);

retrieveBtn.addEventListener(
    'click',
    () => {
        // retrieve movie reviews from local storage
        const reviews = JSON.parse(localStorage.getItem('Movie Reviews'));
        
        for(let review of reviews) {
            // create / insert a new table row
            const row = reviewsTable.insertRow();
            // create / insert cells inside new table row
            const idCell = row.insertCell();
            const titleCell = row.insertCell();
            const yearCell = row.insertCell();
            const reviewCell = row.insertCell();
            // insert values to the table cells
            idCell.innerText = review.id;
            titleCell.innerText = review.title;
            yearCell.innerText = review.year;
            reviewCell.innerText = review.review;

            // const newTr = document.createElement('tr');
            // const newId = document.createElement('td');
            // const newTitle = document.createElement('td');
            // const newYear = document.createElement('td');
            // const newReview = document.createElement('td');
            // newId.innerText = review.id;
            // newTitle.innerText = review.title;
            // newYear.innerText = review.year;
            // newReview.innerText = review.review;

            // newTr.append(newId, newTitle, newYear, newReview);

            // reviewsTable.append(newTr);
        }
    }
);
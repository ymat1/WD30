// quiz 1
const q1 = () => {
    let i = 3;

    while(i) {
        alert(i--);
    }
    // last value alerted = 1
    // after 1 is printed, i--, i=0; i will evaluate to false, 0 is falsy value
}
// q1();

// quiz 2
const q2 = () => {
    let i=0;

    while(++i <5) alert(i);
    // 4
    i=0;
    while(i++ < 5) alert(i);
    // 5
}
// q2();

// quiz 3
const q3 = () => {
    for(let i=0; i<5; i++) alert(i);
    for(let i=0; i<5; ++i) alert(i);
}
// q3();

// quiz 4
const q4 = () => {
    for(let i=0; i<3; i++) {
        alert(`number ${i}`);
    }

    let i=0;
    while(i<3) {
        alert(`number ${i++}`);
    }
}
// q4();

// quiz 5
const q5 = () => {
    let value
    do {
        value = Number(prompt("Enter a number > 100"));
    } while (value <= 100 && value);
}
// q5();

// quiz 6
const q6 = () => {
    let numbers = "";
    for(let i=1; i<=8; i++) {
        number += i + " ";
        console.log(numbers);
    }
}
// q6();

// quiz 7
const q7 = (n) => {
    for(let i=2; i<n; i++) {
        let isPrime = true;
        for(let j=2; j<i; j++) {
            // check if i is prime
            if(i % j === 0) {
                // not prime, go to the next
                isPrime = false;
                break;
            }
        }
        // if prime, print i
        if(isPrime) {
            console.log(i);
        }
    }
}
// q7(21);

// quiz 8
const q8 = (arr) => {
    const newArr = [];
    for(let i=arr.length -1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}
// console.log(q8([1,2,3,4]));

// quiz 9
const fizzBuzz = (n) => {
    //count from 1 to n, check each number if "FizzBuzz", "Buzz", "Fizz"
    const answer = [];
    for(let i=1; i<=n; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            // "FizzBuzz"
            answer.push("FizzBuzz");
        }
        else if (i % 5 ===0) {
            // "Buzz"
            answer.push("Buzz");
        }
        else if (i % 3 ===0) {
            // "Fizz"
            answer.push("Fizz");
        }
        else {
            // i
            answer.push(`${i}`);
        }
    }
    return answer;
}
fizzBuzz(15);

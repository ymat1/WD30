// quiz 1
// let i = 3;

// while (i) {
//     alert(i--);
// }

// quiz 2
// let i = 0;
// while (++i < 5) alert(i);
// console.log(i);

// let i = 0;
// while (i++ < 5) alert(i);
// console.log(i);

// quiz 3
// prefix
// for (let i = 0; i < 5; i++) alert(i); // 0,1,2,3,4
// postfix
// for (let i = 0; i < 5; ++i) alert(i); // 0,1,2,3,4

// for (let i=0; i<3; i++) {
//     alert( `number ${i}!`);
// }

// 
// let i = -1;
// while (++i < 3) alert(`number ${i}!`);

// let i = 0;
// while (i < 3) {
//   alert(` number ${i}! `);
//   i++;
// }

// quiz 5
// for (let num=0; num <= 100 && num;) {
//     num = Number(prompt("Please Enter a number greater than 100"));
// }

// for (let x = 1; x <= 8 ; x++ ) {
//     let numbers="";
//     for (let y = 1; y <=x ; y++) {
//         numbers += y;
//     }
//     console.log(numbers);
// }

// let num;


        // while (true) {
        //     num = prompt('Please enter a number greater than 100:');
        //     if (num > 100){
        //         break;
        //     }else if(num === "" || num === null){
        //         break;
        //     }
        //     alert('The number must be greater than 100. Please try again.');
        // }

// let num = 1;
// while (num <=10) {
//     console.log(num);
//     num = num + 1;
// }

// quiz 7
// let n = 10;

// outer: for (let i = 2; i < n; i++) {
//     inner: for (let j = 1; j < n; j++) {
//         while (j>1 && j<i) {
//             if (i%j == 0 ) {
//                 continue outer;
//             } else {
//               continue inner;
//             }
//         }
//     }
//     console.log(i);
// }

// const n = Number(prompt("Enter a number: "));
// for( let x = 1; x <= n; x++ ) {
//     let z = 0;
//     for( let y = 2; y < x; y++ ) {
//         if (x % y === 0) {
//             z = 1;
//             break;
//         }
//     }
//     if ( x > 1 && z === 0) {
//         console.log(x);
//     }
// }


// let n = Number(prompt("Enter number"));


// nextPrime:
// for (let i = 2; i <= n; i++) {


//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) continue nextPrime;
//   }


//   alert( i );
// }

// function ReverseArray(arr) {
//     if (arr.length < 2) {
//       return arr;
//     } else {
//       var first = arr[0];
//       var last = arr[arr.length - 1];
//       return [last].concat(ReverseArray(arr.slice(1, length - 1))).concat([first]);
//     }

//   }

//   alert(ReverseArray([1,2,3,4,5]));

// const reverseArray = function(arr) {
//     if (arr.length < 2) {
//       return arr;
//     } else {
//       var first = arr[0];
//       var last = arr[arr.length - 1];
//       return [last].concat(reverseArray(arr.slice(1, length - 1))).concat([first]);
//     }

//   }

//   alert(reverseArray([1,2,3,4,5]));

//   var a = [1,2,3,4,5];
// alert(ReverseArray(a));

// function ReverseArray(arr) {
//     if(arr.length < 2) {
//         return arr;
//     } else {
//         return [arr.pop()].concat(ReverseArray(arr));
//     }
// }
// const letters = ['a', 'b', 'c', 'd'];
// letters.reverse();
// console.log(letters);
// quiz 8
// const letters = ['a', 'b', 'c', 'd'];
// alert(reverseArray(letters));
// function reverseArray(arr) {
//     if (arr.length < 2) {
//     return arr;
//     }
//     else {
//         return [arr.reverse()];
//     }
// }

// quiz 9
// const n = prompt("Enter a number: ");
// const myArray = [];
// for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         myArray.splice(i, 1, "FizzBuzz");
//     } else if (i % 3 === 0) {
//         myArray.splice(i, 1, "Fizz");
//     } else if (i % 5 === 0) {
//         myArray.splice(i, 1, "Buzz");
//     } else {
//         myArray.push(i);
//     }
// }
// console.log(myArray)

// const n = Number(prompt("Enter a number: "));
// const answer = new Array();
// for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         answer.splice(i, 1, "FizzBuzz");
//     }
//     else if (i % 3 === 0) {
//         answer.splice(i, 1, "Fizz");
//     }
//     else if (i % 5 === 0) {
//         answer.splice(i, 1, "Buzz");
//     }
//     else {
//         answer.push(i);
//     }
// }
// console.log(answer)


// Answer
// Quiz 1

//Q1- Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Solution-

let myColor = ["Red", "Green", "White", "Black"];
let result = myColor.join(',');
let result2 = myColor.join(' + ');
console.log(result);
console.log(result);
console.log(result2);

//Q2- Write a JavaScript program to sort the items of an array. 
// Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
//Solution-

let arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
let result1 = arr1.sort();
console.log(result1)

//Q3- Write a JavaScript program to find the sum of squares of a numeric vector.
//Solution -

let num = [1,2,3];
let sum = 0;
for(let i=0; i<num.length; i++){
    let square = num[i]*num[i];
    sum = sum + square;
}
console.log(sum);
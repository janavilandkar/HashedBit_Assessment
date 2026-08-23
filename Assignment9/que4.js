// Q4 Create an array of numbers and write a function that uses the map() method to return a new array containing each number squared.

console.log("-------------Quesion 4-------------");
let arr=[1,2,3,4,5];
function squareNum(arr)
{
    return arr.map(Number=>Number*Number);
}
console.log("Squared Number: ",squareNum(arr));
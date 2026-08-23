// Q5 Write a function that filters out all even numbers from an array of numbers using the filter() method. Return the new array of odd numbers

console.log("-------------Quesion 5-------------");
let arr1=[1,2,3,4,5,6,7,8];
function getOddNum(arr1)
{
    return arr1.filter(arr1=>arr1%2 !== 0)
}
console.log("Odd Number Array:",getOddNum(arr1))
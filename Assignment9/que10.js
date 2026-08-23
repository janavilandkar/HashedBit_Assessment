// Q10 Create an array of numbers and write a function that uses the reduce() method to calculate the sum of all the numbers in the array.

console.log("-------------Quesion 10-------------");
let number=[10,20,30,40,50];
function calSum(arr)
{
    return arr.reduce((sum,number)=> sum+number,0);
}
console.log("Sum:",calSum(number));

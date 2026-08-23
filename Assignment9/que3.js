// Q3 Write a function that takes an array as an argument, adds a new element to the end of the array using push(), and then removes the last element using pop(). Return the modified array.

console.log("-------------Quesion 3-------------");
function modifyArray(arr)
{
    arr.push("Mango");
    arr.pop();
    return arr;
}
let fruits2=["Apple","Banana","Orange"];
console.log("Modifies Array: ",modifyArray(fruits2));
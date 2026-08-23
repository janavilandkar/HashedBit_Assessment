// Q10 Write a function to reverse a string.
// Input - Hello
// Outpur - olleH

function reverseStr(data)
{
    return data.split('').reverse().join('');
}
console.log(reverseStr('Hello'));
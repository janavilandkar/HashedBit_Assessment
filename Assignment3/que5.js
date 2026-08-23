// Q5 Write a function to replace wrong word with correct word in any sentance.
// Like this - correctfn(string, wrong, correct)
// Use string.replace in function.

function correctfn(string, wrong, correct)
{
    return string.replace(new RegExp(wrong, "g"),correct)
}
let sentence='I have a black bag. My black bag is so beautiful.';
console.log(correctfn(sentence,'black','white'));
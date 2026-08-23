//Q9 Write a function to count the number of words in a paragraph.

function countWord(paragraph)
{
    let wordCount=paragraph.split(' ').filter(word=> word.length>0).length;
    return wordCount;
}
let paragraph = "This is a sample paragraph that contains a number of words.";
console.log(countWord(paragraph));
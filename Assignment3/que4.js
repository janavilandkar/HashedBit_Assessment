// Q4 Take any string with minimum 20 characters. Count number of consonant and vowel in the string.
function countVowCon(string1)
{
    string1=string1.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const consonants = 'bcdfghjklmnpqrstvwxyz';

    let vowelCount = 0;
    let consonantCount = 0;

    for(let i=0;i<string1.length;i++)
    {
        let char=string1[i];
        if(vowels.includes(char))
        {
            vowelCount++;
        }
        if(consonants.includes(char))
        {
            consonantCount++;
        }
    }
    return{
        vowels: vowelCount,
        consonants: consonantCount
    };
}
const string1 = "Hello World! This is a test string.";
let counts=countVowCon(string1);
console.log("Vowel count:", counts.vowels);
console.log("Consonant count:", counts.consonants);
// Q2 let str = 'I love my India' output expected = 'India my love I' Write code for this.
let str = 'I love my India';
let strArray=str.split(' ');
let revArray= strArray.reverse();
let str2=revArray.join(' ');
console.log(str2);
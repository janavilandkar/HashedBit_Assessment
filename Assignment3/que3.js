//Q3 let string = 'INDIA' output = 'INDONESIA' Use array.splice
let string = 'INDIA';
let chars=string.split('');
chars.splice(3,0,'ONES');
let res=chars.join('');
console.log(res);

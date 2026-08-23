//  Write a function to perform this. You are given two numbers n1 and n2. 
// You need to find the sum of the products of their corresponding digits. So, for a number n1= 6 and n2 = 34, 
// you'll do (6*4)+(0*3) = 24.

function findSum(num1,num2)
{
    let sum=0;
    let s1=num1.toString();
    let s2=num2.toString();
    for(let i=0;i<Math.max(s1.length,s2.length);i++)
    {
        let d1=parseInt(s1.charAt(i))  || 0;
        let d2=parseInt(s2.charAt(i))  || 0;
        sum=sum+(d1*d2);
    }
    return sum;
}
console.log("Sum of product = ",findSum(6,34));
// Q8 Write a function to find repeated sum of digits until there is only a single digit in the number.
// Example - 456 - 4+5+6 = 15 - 1+5 = 6.

function repSum(num)
{
    while(num>9)
    {
        let sum=0;
        while(num!=0)
        {
            let d=num%10;   
            sum=sum+d;     
            num=Math.floor(num/10);   
        }
        num=sum;
    }
    return num;
}
console.log("single digit in the number = ",repSum(456));
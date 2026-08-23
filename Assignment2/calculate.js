// Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.
function calculate(num1,num2,operation)
{
    let res;
    switch(operation)
    {
        case 'Addition':
            res=num1+num2;
            break;
        case 'Subtract':
            res=num1-num2;
            break;
        case 'Multiply':
            res=num1*num2;
            break;
        case 'Divide':
            res=num1/num2;
            break;
        default:
            return 'Invalid Operation'
        }
    return res;
}
console.log("Addition = ",calculate(20, 9, 'Addition')); 
console.log("Subtraction = ",calculate(60, 4, 'Subtract')); 
console.log("Multiplication = ",calculate(30, 2, 'Multiply'));
console.log("Divition = ",calculate(20, 5, 'Divide'));


import { useState } from 'react';
import './style.css';

const Calculator = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');

    const handleAddition = () => {
        const res = parseFloat(num1) + parseFloat(num2);
        setResult(res);
    };

    const handleSubtraction = () => {
        const res = parseFloat(num1) - parseFloat(num2);
        setResult(res);
    };

    const handleMultiplication = () => {
        const res = parseFloat(num1) * parseFloat(num2);
        setResult(res);
    };

    const handleDivision = () => {
        if(parseFloat(num2)===0)
        {
            setResult("Cannot divide by zero")
            return;
        }
        const res = parseFloat(num1) / parseFloat(num2);
        setResult(res);
    };

    return (
        <div className='calculator'>
            <h2>Calculator</h2>
            <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                placeholder='Enter a Number'
            />
            <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                placeholder='Enter a Number'
            />
            <br />
            <button onClick={handleAddition}>+</button>
            <button onClick={handleSubtraction}>-</button>
            <button onClick={handleMultiplication}>*</button>
            <button onClick={handleDivision}>/</button>
            <br />
            <div className='result'>
                Result: {result}
            </div>
        </div>
    );
};

export default Calculator;

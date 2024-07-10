import React, { useState } from 'react';

const AverageCalculator = () => {
  const [numbers, setNumbers] = useState('');
  const [average, setAverage] = useState(null);

  const handleInputChange = (event) => {
    setNumbers(event.target.value);
  };

  const calculateAverage = (event) => {
    event.preventDefault();
    const numberArray = numbers.split(',').map(Number);
    const validNumbers = numberArray.filter((num) => !isNaN(num));
    if (validNumbers.length === 0) {
      setAverage('N/A');
      return;
    }
    const total = validNumbers.reduce((acc, num) => acc + num, 0);
    const avg = total / validNumbers.length;
    setAverage(avg);
  };

  return (
    <div>
      <h1>Average Calculator</h1>
      <form onSubmit={calculateAverage}>
        <label>
          Enter numbers separated by commas:
          <input type="text" value={numbers} onChange={handleInputChange} />
        </label>
        <button type="submit">Calculate</button>
      </form>
      <div>
        <h2>Average:</h2>
        <p>{average !== null ? average : 'N/A'}</p>
      </div>
    </div>
  );
};

export default AverageCalculator;
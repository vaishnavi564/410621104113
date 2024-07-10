import React, { useState } from 'react';

const PrimeNumbers = () => {
  const [primeList, setPrimeList] = useState([]);

  const isPrime = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  };

  const generatePrimes = (limit) => {
    const primes = [];
    for (let i = 2; primes.length < limit; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
    setPrimeList(primes);
  };

  return (
    <div>
      <button onClick={() => generatePrimes(10)}>Generate Prime Numbers</button>
      <ul>
        {primeList.map((prime) => (
          <li key={prime}>{prime}</li>
        ))}
      </ul>
    </div>
  );
};

export default PrimeNumbers;
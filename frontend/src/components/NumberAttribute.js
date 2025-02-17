import React, { useState } from 'react';

function NumberAttribute() {
  const [inputNumber, setInputNumber] = useState('');
  const [info, setInfo] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCheckAttributes = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/numberAttribute/${inputNumber}`
      );
      const data = await response.json();

      if (response.ok) {
        setInfo(data);
        setErrorMsg('');
      } else {
        setInfo(null);
        setErrorMsg(data.error);
      }
    } catch (error) {
      setInfo(null);
      setErrorMsg(`Error connecting: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Number Attributes</h2>
      <input
        type="number"
        value={inputNumber}
        onChange={(e) => setInputNumber(e.target.value)}
        placeholder="Enter a number"
      />
      <button onClick={handleCheckAttributes}>Check</button>

      {info && (
        <div>
          <p>Value: {info.value}</p>
          <p>Is Prime: {info.isPrime}</p>
          <p>Is Odd: {info.isOdd}</p>
          <p>Square Root: {info.squareRoot}</p>
        </div>
      )}
      {errorMsg && <p style={{ color: 'red' }}>Error: {errorMsg}</p>}
    </div>
  );
}

export default NumberAttribute;

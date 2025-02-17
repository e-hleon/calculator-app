import React, { useState } from 'react';

function Calculator() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [operation, setOperation] = useState('add');
  const [result, setResult] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult('');
    try {
      const response = await fetch(
        `http://localhost:3001/api/calc/${operation}?a=${a}&b=${b}`
      );
      const data = await response.json();

      if (response.ok) {
        setResult(data.result);
      } else {
        setResult(`Error: ${data.error}`);
      }
    } catch (error) {
      setResult(`Error connecting: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Basic Calculator</h2>
      <form onSubmit={handleSubmit}>
        <label>
          A:
          <input
            type="number"
            value={a}
            onChange={(e) => setA(e.target.value)}
            required
          />
        </label>
        <label>
          B:
          <input
            type="number"
            value={b}
            onChange={(e) => setB(e.target.value)}
            required
          />
        </label>
        <label>
          Operation:
          <select value={operation} onChange={(e) => setOperation(e.target.value)}>
            <option value="add">Add</option>
            <option value="subtract">Subtract</option>
            <option value="multiply">Multiply</option>
            <option value="divide">Divide</option>
          </select>
        </label>
        <button type="submit">Calculate</button>
      </form>
      <div>
        <strong>Result:</strong> {result}
      </div>
    </div>
  );
}

export default Calculator;

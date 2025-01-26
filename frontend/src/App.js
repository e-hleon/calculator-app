import React from 'react';
import Calculator from './components/Calculator';
import NumberAttribute from './components/NumberAttribute';

function App() {
  return (
    <div style={{ margin: '20px' }}>
      <h1>Calculator App</h1>
      <Calculator />
      <hr />
      <NumberAttribute />
    </div>
  );
}

export default App;

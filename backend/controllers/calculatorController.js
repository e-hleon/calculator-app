/**
 * Controlador que maneja las operaciones de la calculadora
 */
exports.handleOperation = (req, res) => {
  const operation = req.params.operation; // e.g. "add", "subtract", "multiply", "divide"
  const { a, b } = req.query; // Expectamos /api/calc/add?a=10&b=5

  if (a === undefined || b === undefined) {
    return res.status(400).json({ error: 'Missing query params a or b' });
  }

  const numA = parseFloat(a);
  const numB = parseFloat(b);

  if (isNaN(numA) || isNaN(numB)) {
    return res.status(400).json({ error: 'Invalid numeric values provided' });
  }
  
  let result;

  switch (operation) {
    case 'add':
      result = numA + numB;
      break;
    case 'subtract':
      result = numA - numB;
      break;
    case 'multiply':
      result = numA * numB;
      break;
    case 'divide':
      // Manejo división entre 0 → retornar "NaN"
      if (numB === 0) {
        result = 'NaN';
      } else {
        result = numA / numB;
      }
      break;
    default:
      return res.status(400).json({ error: `Operation ${operation} not supported.` });
  }

  return res.json({ operation, a: numA, b: numB, result });
};

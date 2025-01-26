/**
 * Controlador que devuelve atributos de un número:
 * - isPrime
 * - squareRoot
 */
exports.getNumberAttributes = (req, res) => {
  const { num } = req.params;
  const value = parseFloat(num);

  if (isNaN(value)) {
    return res.status(400).json({ error: 'Invalid number' });
  }

  const isPrime = checkPrime(value);
  const squareRoot = Math.sqrt(value);

  return res.json({
    value,
    isPrime,
    squareRoot
  });
};

/**
 * Función para comprobar si un número es primo
 */
function checkPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;

  let i = 5;
  while (i * i <= n) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
}

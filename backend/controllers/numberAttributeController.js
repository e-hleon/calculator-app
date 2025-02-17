/**
 * Controlador que devuelve atributos de un número:
 * - isPrime: "Yes" o "No" (solo se considera para enteros)
 * - isOdd: true o false (para enteros), o "N/A" si no es un entero
 * - squareRoot: la raíz cuadrada del número
 */
exports.getNumberAttributes = (req, res) => {
  const { num } = req.params;
  const value = parseFloat(num);

  if (isNaN(value)) {
    return res.status(400).json({ error: 'Invalid number' });
  }

  // Solo consideramos propiedades de primo e impar para números enteros
  const isInteger = Number.isInteger(value);
  const isPrimeBool = isInteger ? checkPrime(value) : false;
  // Convertir a "Yes" o "No" según lo espera el feature
  const isPrime = isPrimeBool ? "Yes" : "No";
  
  // Determinar si es impar (solo para enteros)
  const isOdd = isInteger ? (value % 2 !== 0) : "N/A";
  
  const squareRoot = Math.sqrt(value);

  return res.json({
    value,
    isPrime,
    isOdd,
    squareRoot
  });
};

/**
 * Función para comprobar si un número es primo (aplicable solo a enteros mayores que 1)
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

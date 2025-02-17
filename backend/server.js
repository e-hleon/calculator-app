const express = require('express');
const calculatorController = require('./controllers/calculatorController');
const numberAttributeController = require('./controllers/numberAttributeController');

const app = express();
const port = process.env.PORT || 3001;

// Middleware para parsear JSON (si es necesario)
app.use(express.json());

// Rutas de la calculadora
app.get('/api/calc/:operation', calculatorController.handleOperation);

// Rutas para atributo de número
app.get('/api/numberAttribute/:num', numberAttributeController.getNumberAttributes);

// Solo iniciar el servidor si este módulo es el principal
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Backend listening on port ${port}`);
  });
}

module.exports = app; // Exportamos para que los tests puedan usar la app sin reiniciar el servidor

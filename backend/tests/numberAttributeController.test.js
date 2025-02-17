const request = require('supertest');
const app = require('../server.js');

describe('Number Attribute Controller', () => {

  test('Should return correct prime = false for 9, and sqrt=3', async () => {
    const response = await request(app)
      .get('/api/numberAttribute/9');

    expect(response.status).toBe(200);
    expect(response.body.value).toBe(9);
    expect(response.body.isPrime).toBe("No");
    expect(response.body.squareRoot).toBe(3);
  });

  test('Should return correct prime = true for 2', async () => {
    const response = await request(app)
      .get('/api/numberAttribute/2');

    expect(response.status).toBe(200);
    expect(response.body.value).toBe(2);
    expect(response.body.isPrime).toBe("Yes");
    // sqrt(2) es aprox 1.414..., para simplificar comparamos con toBeCloseTo
    expect(response.body.squareRoot).toBeCloseTo(1.414, 3);
  });

  test('Should fail if invalid number', async () => {
    const response = await request(app)
      .get('/api/numberAttribute/hello');

    expect(response.status).toBe(400);
    expect(response.body.error).toMatch(/Invalid number/);
  });
});

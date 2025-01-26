const request = require('supertest');
const app = require('../server.js');

describe('Calculator Controller', () => {

  test('Addition should return correct sum', async () => {
    const response = await request(app)
      .get('/api/calc/add?a=10&b=5');
    
    expect(response.status).toBe(200);
    expect(response.body.result).toBe(15);
  });

  test('Division by 0 should return "NaN"', async () => {
    const response = await request(app)
      .get('/api/calc/divide?a=30&b=0');
    
    expect(response.status).toBe(200);
    expect(response.body.result).toBe('NaN');
  });

  test('Unsupported operation should return 400', async () => {
    const response = await request(app)
      .get('/api/calc/mod?a=10&b=2');
    
    expect(response.status).toBe(400);
    expect(response.body.error).toMatch(/Operation mod not supported/);
  });
});

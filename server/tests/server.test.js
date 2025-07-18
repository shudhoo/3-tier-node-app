const request = require('supertest');
const express = require('express');
const app = express();

app.use(express.json());
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (email === 'test@example.com' && password === 'test123') {
    return res.status(200).json('Success');
  } else {
    return res.status(401).json('Invalid Credentials');
  }
});

describe('POST /login', () => {
  it('should return Success for correct credentials', async () => {
    const res = await request(app)
      .post('/login')
      .send({ email: 'test@example.com', password: 'test123' });

    expect(res.statusCode).toBe(200);
    expect(res.body).toBe('Success');
  });

  it('should return Invalid Credentials for wrong credentials', async () => {
    const res = await request(app)
      .post('/login')
      .send({ email: 'wrong@example.com', password: 'wrongpass' });

    expect(res.statusCode).toBe(401);
    expect(res.body).toBe('Invalid Credentials');
  });
});


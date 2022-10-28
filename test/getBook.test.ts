import request from 'supertest'
import {server} from './server';

describe('Test Get APi', () => {
  it('Request / should return welcome home!', async () => {
    const result = await request(server).get('/').send();
    expect(result.status).toBe(200);
    console.log(result.body)
  });
  it('Request /book should return welcome home!', async () => {
    const result = await request(server).get('/book').send();
    expect(result.status).toBe(200);
    console.log(result.body)
  });
});

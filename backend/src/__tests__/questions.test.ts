import request, { Response } from "supertest"
import app from "../index"
import testData from "../db.json"

describe('Test the questions endpoint', () => {

  test('It should return questions', async () => {
    const response: Response = await request(app).get('/api/questions');
    expect(response.status).toBe(200);
    expect(response.body.questions).toEqual(testData)
  });

});

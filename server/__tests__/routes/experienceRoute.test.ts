
import express from 'express';
import request from 'supertest';
import experienceRoute from '../../src/route/experienceRoute';

const app = express();
app.use(experienceRoute);

  describe('/experiences', ()=>
    test('should return status 201 & content-type "application/json"',async ()=>{
        const response = await request(app)
        .get('/experiences')
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toContain('application/json')
    }))



import express from 'express';
import request from 'supertest';
import experienceRoute from '../../src/route/experienceRoute';

const app = express();
app.use(experienceRoute);


//comprueba el endpoint de get experiences
  describe('/experiences', ()=>
    test('should return status 200 & content-type "application/json"',async ()=>{
        const response = await request(app)
        .get('/experiences')
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toContain('application/json')
    }))

  //comprueba el endpoint del delete
    describe("DELETE  /experiencias/:id", () => {
      describe("when passed all info", () => {
          test('should respond with a 200 & content-type "application/json', async () => {
              const response = await request(app)
                  .delete('/experiences/322')
              expect(response.status).toEqual(200);
              expect(response.headers['content-type']).toContain('application/json');
          })
          // should save the username and password in the database
          // should respond with a json object that contains the id from the database. (probably jwt in the real world)
      })
    })

    //comprueba experiencia al detalle

    describe("GET  /experiences/:id", () => {
      describe("when passed all info", () => {
          test('should respond with a 200 & content-type "application/json', async () => {
              const response = await request(app)
                  .get('/experiences/5')
              expect(response.status).toEqual(200);
              expect(response.headers['content-type']).toContain('application/json');
          })
          
      })
    })

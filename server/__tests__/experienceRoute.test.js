import express from "express";
import request from "supertest";
import experienceRoute from "../src/route/experienceRoute";

const app = express();
app.use(express.json());
app.use(experienceRoute);

describe("/experiences", () =>
  test('should return status 200 & content-type "application/json"', async () => {
    const response = await request(app).get("/experiences");
    expect(response.status).toBe(200);
    // expect(response.headers['content-type']).toContain('application/json')
  }));

describe("GET /user/all", () => {
  describe("cuando se entre en la url muestra todos los usuarios", () => {
    test('should respond with a 201 & content-type "application/json', async () => {
      const response = await request(app)
        .get("/user/all")
        .set(
          "Authorization",
          `Bearer eyJhbGciOiJIUzI1NiJ9.ZWR1ckBtYWlsLmNvbQ.UqqO6APmGNwy3fC-tl_qdeCNMkaCOizjeHk5btr_KOI`
        );
      expect(response.status).toEqual(201);
      expect(response.headers["content-type"]).toContain("application/json");
    });
  });
});

it("Testing to see if Jest works", () => {
  expect(1).toBe(1);
});

it("Testing to see if Jest works", () => {
  expect(3).toBe(3);
});

// describe("putTodoController", () => {
//     const route = "/experiences/:id";

//     const app = service((app) => {
//       app.put(route, updateController);
//     });

//     // ...
//   });

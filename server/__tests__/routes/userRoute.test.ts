import express from "express";
import request from "supertest";
import userRoute from "../../src/route/userRoute";

const app = express();
app.use(express.json());
app.use(userRoute);

//para testear que no me recibe usuarios sin el token

describe("GET /user/all", () => {
  describe("cuando no se entre en la url muestra todos los usuarios", () => {
    test('should respond with a 400 ', async () => {
      const response = await request(app)
        .get("/user/all")
        
      expect(response.status).toEqual(400);
    
    });
  });
});

//para testear usuario incorrecto

describe("POST /user/login", () => {
  describe("cuando pongo un usuario y contraseña incorrecta,no se loguea", () => {
    test('should respond with a 400 & content-type "text/html; charset=utf-8', async () => {
      const response = await request(app).post("/user/login").send({
        email: "mailincorrecto@mail.com",
        password: "1234",
      });

      expect(response.status).toEqual(400);
      expect(response.headers["content-type"]).toContain("text/html; charset=utf-8");
    });
  });


  //para testear el control de errores
  describe("when some info is missing", () => {
    test("should return 400.", async () => {
      const response = await request(app)
        .post("/user/login")
        .send({ password: "1234" });
      expect(response.status).toEqual(400);
    });
  });
});

require('../../bootstrap')
const request = require("supertest");
const app = require("../../../src/app");

describe("Auth Test Suit", () => {
  describe("User register Test Suit", () => {
    beforeall
    test("should return 201 with success message when user successfully registred", async () => {
      const response = await request(app)
        .post("/api/v1/auth/register")
        .set("content-type", "application/json")
        .send({
          username: "helaliferid",
          email: "helaliferid@gmail.com",
          password: "toto2024*-1",
        });

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty("_id");
      expect(response.body).toHaveProperty("email");
      expect(response.body).toHaveProperty("username");
      expect(response.body).toHaveProperty("role");
    });
  });
});

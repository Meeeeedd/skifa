require("../../bootstrap");
const request = require("supertest");
const app = require("../../../src/app");

describe("Auth Test Suit", () => {
  describe("User Login Test Suit", () => {
    beforeAll(async () => {
        await request(app)
        .post("/api/v1/auth/register")
        .set("content-type", "application/json")
        .send({
          username: "helaliferid",
          email: "helaliferid@gmail.com",
          password: "toto2024*-1",
        });
    });

    test("should return 200 with success message and token", async () => {
      const response = await request(app)
        .post("/api/v1/auth/login")
        .set("content-type", "application/json")
        .send({
          email: "helaliferid@gmail.com",
          password: "toto2024*-1",
        });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("user");
      expect(response.body).toHaveProperty("token");
    });
  });
});

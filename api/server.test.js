const request = require("supertest"); 
const server = require("./server"); 
const db = require("../data/dbConfig"); 


const Sam = { name: "Sam", password: "thisisatest" }; 
const Frodo = { name: "Frodo" }; 
const Cristian = { name: "Cristian" }; 


beforeAll(async () => {
  await db.migrate.rollback(); 
  await db.migrate.latest(); 
})

beforeEach(async () => {
  await db("users").truncate(); 
})

afterAll(async () => {
  await db.destroy(); 
})

describe("endpoints", () => {
  describe("[POST] /api/auth/register", () => {
    it('returns newly created user', async () => {
      const res = await request(server).post("/api/auth/register").send(Sam); 
      console.log(res.body); 
    })
  })
})


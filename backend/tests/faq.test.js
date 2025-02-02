import chai from "chai";
import chaiHttp from "chai-http";
import app from "../server.js"; 

const { expect } = chai;
chai.use(chaiHttp);

describe("FAQ API Tests", () => {
  let createdFaqId;

  it("should get all FAQs", async () => {
    const res = await chai.request(app).get("/api/faq?language=en");
    expect(res).to.have.status(200);
    expect(res.body).to.be.an("array");
  });

  it("should create a new FAQ", async () => {
    const newFaq = {
      question: "What is Node.js?",
      answer: "Node.js is a JavaScript runtime.",
      language: "en",
    };

    const res = await chai.request(app).post("/api/faq").send(newFaq);

    expect(res).to.have.status(201);
    expect(res.body).to.have.property("faq");
    expect(res.body.faq).to.have.property("_id");
    createdFaqId = res.body.faq._id;
  });
});
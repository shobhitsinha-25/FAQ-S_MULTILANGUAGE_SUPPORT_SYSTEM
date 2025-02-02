import React, { useState } from "react";
import axios from "axios";

const AddFAQForm = ({ fetchFaqs }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [language, setLanguage] = useState("en");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/faq", { question, answer, language });
      fetchFaqs(); 
      setQuestion("");
      setAnswer("");
    } catch (error) {
      console.error("Error creating FAQ", error);
    }
  };

  return (
    <div>
      <h2>Add New FAQ</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Question</label><br></br>
          <label id="questionInput">
            <input 
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
          </label>
        </div>
        <div>
          <label>Answer</label><br />
          <label id="answerInput">
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
          />
          </label>
        </div>
        <div>
          <label>Language</label>
          <div id="selectionField">
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="bn">Bengali</option>
          </select>
          </div> 
        </div>
        <button type="submit">Add FAQ</button>
      </form>
    </div>
  );
};

export default AddFAQForm;

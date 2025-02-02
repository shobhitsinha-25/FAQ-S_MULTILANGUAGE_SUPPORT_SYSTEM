import React, { useState, useEffect } from "react";
import axios from "axios";
import AddFAQForm from "./components/AddFaq";
import FAQList from "./components/FaqList";


const App = () => {
  const [faqs, setFaqs] = useState([]);
  const [language, setLanguage] = useState("en");

  
  const fetchFaqs = async () => {
    try {
      const response = await axios.get(`/api/faq?language=${language}`);
      setFaqs(response.data);
    } catch (error) {
      console.error("Error fetching FAQs", error);
    }
  };

  useEffect(() => {
    fetchFaqs();
  }, [language]);

  return (
    <div className="App">
      <h1>All your FAQs</h1>
      <div>
        <button onClick={() => setLanguage("en")}>English</button>
        <button onClick={() => setLanguage("hi")}>हिन्दी</button>
        <button onClick={() => setLanguage("bn")}>বাংলা</button>
      </div>

      <AddFAQForm fetchFaqs={fetchFaqs} />
      <FAQList faqs={faqs} />
    </div>
  );
};

export default App;

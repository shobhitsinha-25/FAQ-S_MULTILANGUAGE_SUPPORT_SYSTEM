import express from "express"
import connectDB from "./config/db.js";
import faq from "./Model/FaqModel.js";
import cors from"cors"
import bodyParser from "body-parser";
import redisClient from "./config/redis.js";
import translate from "google-translate-api-x";

const app=express();
const port=5000;

app.use(cors());
app.use(bodyParser.json());

connectDB();




//GET route to get the data from either redisClient or from database...
app.get("/api/faq",async (req,res)=>{
    const language=req.query.language || "en";
    const cachedkey=`faq_${language}`;

    try {
        const cachedfaq=await redisClient.get(cachedkey);

        if(cachedfaq)
        {
            console.log("Returning Cached FAQ");
            return res.json(JSON.parse(cachedfaq));
        }

        const faqs=await faq.find();
        const faqwithTranslation=faqs.map(faq=>({
            question:faq[`question_translation`]?.[language] || faq.question,
            answer:faq[`answer_translation`]?.[language] || faq.answer,
        }))

        await redisClient.setEx(cachedkey,3600,JSON.stringify(faqwithTranslation));
        res.json(faqwithTranslation);
    } catch (error) {
        res.status(500).json({message:"Error fetching FAQ"},error);
}});


//POST route to store the data to the data base and redisClient....

app.post("/api/faq",async (req,res)=>{
    
    const {question,answer,language='en'}=req.body;


    try {
        const translationhi=await translate([question,answer],{to:"hi"});
        const translationbn=await translate([question,answer],{to:"bn"});

        const question_translation={
            hi:translationhi[0].text,
            bn:translationbn[0].text
        }

        const answer_translation={
            hi:translationhi[1].text,
            bn:translationbn[1].text
        }

        const newFaq=new faq({question,answer,language,question_translation,answer_translation});
        await newFaq.save();

        await redisClient.del('faq_en');
        await redisClient.del('faq_hi');
        await redisClient.del('faq_bn');

        res.status(201).json({message:"FAQ created successfully",faq:newFaq});


    } catch (error) {
        res.status(500).json({message:"Error creating FAQ",error});
    }
})


app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});

export default app;
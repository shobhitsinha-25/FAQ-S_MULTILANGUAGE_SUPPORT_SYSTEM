import mongoose from "mongoose";

const FaqSchema=new mongoose.Schema({
    question:{type:String,required:true},
    answer:{type:String,required:true},
    language:{type:String,default:"en"},

    question_translation:{
        hi:{type:String},
        bn:{type:String}
    },

    answer_translation:{
        hi:{type:String},
        bn:{type:String}
    }
})

const faq=mongoose.model("faq",FaqSchema);

export default faq;
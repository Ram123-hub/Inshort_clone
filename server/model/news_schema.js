import mongoose from 'mongoose';



const newsSchema = new mongoose.Schema({
     title:{
        type:String,
        required:true,
     },
     author:{
        type:String,
        required:true,
     },
     description:{
        type:String,
        required:true,
     },
     url:{
        type:String,
        required:true,
        unique:true,
     },
     timestamp:{
        type:String,
        required:true,
     },
     link:{
        type:String,
        required:true,
     },
     publisher:{
        type:String,
        required:true,
     },
});

newsSchema.statics.upsertNews = async function (newsData) {
    const filter = { url: newsData.url };
    const update = newsData;
    const options = { upsert: true, new: true, runValidators: true };

    return this.findOneAndUpdate(filter, update, options);
};

const news = mongoose.model('news',newsSchema);

export default news;
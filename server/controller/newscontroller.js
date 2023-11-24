
import news from "../model/news_schema.js"

export const getNews =  async (request,response) =>{
try{
let data = await news.find({});
response.status(200).json(data);
}catch(error){
 response.status(500).json({messsage:data.messsage});
}
}
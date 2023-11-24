import mongoose from 'mongoose'



const Connection = async () =>{
    const URL = `mongodb://raghuwanshi812:InshortData@ac-ypbusja-shard-00-00.kmnhac1.mongodb.net:27017,ac-ypbusja-shard-00-01.kmnhac1.mongodb.net:27017,ac-ypbusja-shard-00-02.kmnhac1.mongodb.net:27017/?ssl=true&replicaSet=atlas-m8ln5i-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
       await  mongoose.connect(URL, {useNewUrlParser:true});
       console.log("Database connected successfully")
    }catch(error){
        console.log("Error while connecting with the database",error);
    }
}

export default Connection;
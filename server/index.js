import express from 'express';
import Connection from './database/db.js';
import DefaultData from './default.js';
import Route from './route/route.js';
import cors from 'cors';


const app = express();


app.use(cors());

app.use('/',Route);
const PORT = 8000;



// const USERNAME = process.env.DB_USERNAME;
// const PASSWORD = process.env.DB_PASSWORD;
Connection();
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));

DefaultData();
import express from 'express';
import dotenv from 'dotenv';
import Connection from './DataBase/db.js';  //js conpulsary
import cors from 'cors';

import Router from './routes/route.js';
import bodyParser from 'body-parser';


const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended:true }))
app.use('/', Router);



const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;



const PORT = 8000;

Connection(USERNAME,PASSWORD);

app.listen(PORT , () => console.log(`Server is Running successfull on ${PORT}`));  // 2 argument   port no  and callback function
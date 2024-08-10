import express from 'express';
import { connectToDatabase } from './connection.js';
import { config } from "dotenv";



config();
const app = express();
const port = process.env.PORT;
const connectionURL = process.env.MONGO_URL;
await connectToDatabase(connectionURL);

app.listen(port ,() => 
{
    console.log("Application is running on Port" ,port);
    
})
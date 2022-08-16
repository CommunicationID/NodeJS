//import dotenv and use config module to set and use env variables;
import dotenv from 'dotenv';
dotenv.config();
// import express for building node server
import express from 'express';
// import custom module WelcomeMode and use variable welcome
import { welcomeText } from '../WelcomeModule/index.mjs'; 

const app = express();
app.get('/', (req,res) => {
    res.send(`${welcomeText}`)
});



let portVal = process.env.PORT; 
app.listen(portVal,()=> console.log(`Server started at ${portVal}`)); 

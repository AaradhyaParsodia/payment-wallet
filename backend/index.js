import express from "express";
import { rootRouter } from "./routes/index.js";

import cors from "cors";
import bodyParser from "body-parser";

const app = express();

const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/v1', rootRouter);

app.listen(PORT, (err)=>{
    if(!err){
        console.log('Shhhhhhhhh it is listening');
    }
    else{
        console.error(err);
    }
})
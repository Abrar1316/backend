const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
dotenv.config({path:"./.env"})
require('./database')
const postRouter = require('./routes/post')


// using express web server
const app = express();

// MiddleWare

app.use(cors());
app.use(express.json());
app.use('/api/post',postRouter); // middle ware

// app.get('/',(req,res)=>{
//     res.end("this Home BRO")
// })



// GET POST PUT PATCH DELETE

app.listen(5000,()=>{ //port Number(5000) and callback function
    console.log(`Backend is running on PORT 5000`);
})
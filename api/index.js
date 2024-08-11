const express = require('express');
const mongoose = require('mongoose');
const path = require("path");
const articleRouter = require('../routes/article.js');
require('dotenv').config();

const app = express();

app.use(express.json());


app.use('/article', articleRouter)

app.post('*', (req,res) => {
  return res.status(404).send('This route is not in use.')
})

app.use(
  express.static(path.join(__dirname, "../client/build"))
);

const port = 8000;

mongoose.connect(process.env.CONNECTION_STRING, {}
)
.then((result) =>{
  app.listen(port,()=>{
    console.log(`Server Started at port ${port}`)
})
}).catch((err)=>{
console.log(err)
})


module.exports =  app;
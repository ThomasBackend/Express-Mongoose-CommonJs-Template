const express = require('express');
const mongoose = require('mongoose');
const path = require("path");
const articleRouter = require('../routes/article.js');
require('dotenv').config();

const app = express();

app.use(express.json());


app.use('/article', articleRouter)


app.use(
  express.static(path.join(__dirname, "../client/build"))
);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

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
const express = require('express');
const genres =require('./Routes/GenreRoute');
const mongoose =require('mongoose')
const app = express();

mongoose.connect('mongodb://localhost/Movies')
    .then(()=>console.log('database connected'))
    .catch((err)=>console.log('error',err.message))


app.use(express.json());

app.use('/api/genres',genres);


const port = process.env.PORT ||3000

app.listen(port,()=>{
    console.log('Application is Listening on port ',port);
})




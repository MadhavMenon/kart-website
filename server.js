const express = require('express');
const app = require('./app');

const DB = null;
mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(()=> console.log("DB connection succesfull"));

const port = 3000
const server = app.listen(port, ()=>{
    console.log(`App running on port= ${port}`);
});

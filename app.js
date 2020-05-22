const express = require('express');
const morgan = require('morgan');
const path = require('path');

const viewRouter = require('./routes/viewRoutes');
const fruitRouter = require('./routes/fruitRoutes');
const userRouter = require('./routes/userRoutes')

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('dev'));
app.use((req, res, next)=>{
    console.log("middleware");
    next();
})

//ROUTES
app.use('/', viewRouter);
app.use('/api/v1/fruits', fruitRouter);
app.use('/api/v1/user', userRouter);

module.exports = app;

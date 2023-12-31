const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const userRoute = require('./routes/user');



//environment variable
const PORT = process.env.PORT || 8080;



//express init
const app = express();


//express middlewares
app.use(express.json());
app.use(express.urlencoded( { extended : false } ));


//api routes
app.use('/api/v1/user', userRoute);

//listen port
app.listen(PORT, () => {
    console.log(`server is running on port ${ PORT }`.bgGreen.black);
});

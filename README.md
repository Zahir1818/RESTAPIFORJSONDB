

<img src="./this.jpg">

# REST API WITH EXPRESS SERVER

This is my first Rest API for React JS Apps.

## First clone this repo and then install its package


```console

$ npm install

```

## Server Structure

```js

const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();



//environment variable
const PORT = process.env.PORT || 8080;



//express init
const app = express();


//express middlewares
app.use(express.json());
app.use(express.urlencoded( { extended : false } ));



//listen port
app.listen(PORT, () => {
    console.log(`server is running on port ${ PORT }`.bgGreen.black);
});


```

## Packages

* Express JS
* Nodemone
* Dotenv
* Colors
* Multer
* Nodemailer

[Eduction Board Results](http://www.educationboardresults.gov.bd/)

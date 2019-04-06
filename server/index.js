const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config();

const controllers = require('./controllers');

const {
    SERVER_PORT,
    CONNECTION_STRING
} = process.env;

massive(CONNECTION_STRING)
    .then(dbInstance => {
        app.set('db', dbInstance)
    }).catch((err) => console.log(err))

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Endpoints
console.log('hit');
app.get('/api/houses', controllers.getAll);

app.listen(SERVER_PORT, () => console.log(`Server is listening on port ${SERVER_PORT}`));
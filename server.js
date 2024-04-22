'use strict'

const PORT = 3000

const express = require('express')
const app = express();

/*
let options = {
    error: function (error, e) {
        if (e.cn) {
            // A connection-related error;
            console.log("CN:", e.cn);
            console.log("EVENT:", error.message);
        }
    }
};

const DB_CONFIG = {
    host: '127.0.0.1',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: 'postgresql',
    max: 30 // use up to 30 connections
}

const pgp = require('pg-promise')(options)
const db = pgp(DB_CONFIG)

db.any('SELECT * FROM users WHERE active = $1', [true])
    .then(data => {
        console.log(`Database result: ${JSON.stringify(data)}`)
        data.done();
    })
    .catch(error => {
        console.log(`Database error: ${JSON.stringify(error)}`)
    })
*/

let user = {
    id: 1,
    name: 'shubham negi',
    ph: 8800833028
}

app.get('/', (req, res) => {
    console.log(`Request of type ${req.method} received!`);
    res.json(user)
})


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})

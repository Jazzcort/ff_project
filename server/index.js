const express = require('express')
const app = express()
const mysql = require('mysql2')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()

app.listen(7777, () => {
  console.log("server listening on port 7777")
})


const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: process.env.MYSQLPASSWORD,
  database: 'musicleec',
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0
});

// connection.connect();


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())
app.get('/', (req, res) => {
  res.send("Hahahaha!!")
})

app.post('/artists', (req, res) => {
  console.log(req.body)
  const aid = ""
  pool.query(`SELECT * FROM artists ${aid != "" ? `WHERE aid = ${aid}`: "" }`, function (error, results, fields) {
    if (error) throw error;
  res.send(results);
  });
})

// connection.end();
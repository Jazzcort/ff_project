const express = require('express')
const app = express()
const mysql = require('mysql2')
const cors = require('cors')
require('dotenv').config()

app.listen(7777, () => {
  console.log("server listening on port 7777")
})


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.MYSQLPASSWORD,
  database: 'musicleec',
  //   port: '3306'
});

// connection.connect();



app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.get('/', (req, res) => {
  res.send("Hahahaha!!")
})

app.post('/artists', (req, res) => {
  console.log(req.params)
  const aid = ""
  connection.query(`SELECT * FROM artists ${aid != "" ? `WHERE aid = ${aid}`: "" }`, function (error, results, fields) {
    if (error) throw error;
  res.send(results);
  });
})

// connection.end();
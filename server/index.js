const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

app.listen(7777, () => {
  console.log("server listening on port 7777");
});

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: process.env.MYSQLPASSWORD,
  database: "movie_mania",
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});

// connection.connect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hahahaha!!");
});

app.post("/artists", (req, res) => {
  const aid = "";
  pool.query(
    `SELECT * FROM artists ${aid != "" ? `WHERE aid = ${aid}` : ""}`,
    function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    }
  );
});

app.post('/searchMovies', (req, res) => {
  const { title, year, actor, director, genre } = req.body
  pool.execute('Call SearchMovies(?,?,?,?,?)', [title, genre, year, actor, director], function (error, results, fields) {
    if (error) throw error;
    
    res.send(results[0])
  })
})


app.get("/getAllMovies", (req, res) => {
  pool.query(`SELECT * FROM movie`, function (error, results, fields) {
    if (error) throw error;

    res.send(results);
  });
});

app.post("/addMovieToList", (req, res) => {
  const { mid, listId } = req.body;
  pool.execute(
    "CALL add_movie_to_list(?,?)",
    [listId, mid],
    function (error, results, fields) {
      if (error) throw error;
      res.send(true);
    }
  );
});

app.post("/getDefaultList", (req, res) => {
  const { id } = req.body;
  pool.query(
    `SELECT * FROM user_list WHERE user_id = ? LIMIT 1`,
    [id],
    function (error, results, fields) {
      if (error) throw error;
      try {
        res.send(results[0].list_id);
      } catch (e) {
        console.log(e);
      }
    }
  );
});

app.post("/signup", (req, res) => {
  const sql =
    "INSERT INTO user (user_id, username, email, password) VALUES (null,?,?,?)";
  const { username, email, password } = req.body;
  pool.query(
    sql,
    [username, email, password],
    function (error, results, fields) {
      if (error) throw error;
      res.send(true);
    }
  );
});

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM user WHERE username = ? AND password = ? LIMIT 1";
  const { username, password } = req.body;
  pool.query(sql, [username, password], (err, data) => {
    if (err) {
      return res.json({ error: "Error" });
    }
    if (data.length > 0) {
      const userId = data[0].user_id;
      return res.status(200).json({ message: "Success", userId: userId });
    }
    if (data.length === 0) {
      return res.json({ message: "Wrong username or password" });
    }
  });
});

app.get("/home/:id", (req, res) => {
  const { id } = req.params;
  pool.execute("CALL create_a_default_list(?)", [id], (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Error" });
    }
    return res.status(200).json({ message: "Success" });
  });
});

app.post("/createDefaultList", (req, res) => {
  const { userId } = req.body;

  pool.query(
    "SELECT * FROM user_list WHERE user_id = ?",
    [userId],
    (error, results) => {
      if (error) {
        return res.status(500).json({ error: "Error querying database" });
      }

      if (results.length === 0) {
        pool.query(
          "INSERT INTO user_list (user_id, list_name) VALUES (?, ?)",
          [userId, "My List"],
          (err, result) => {
            if (err) {
              return res
                .status(500)
                .json({ error: "Error creating default list" });
            }
            const listId = result.insertId;
            return res
              .status(200)
              .json({ message: "Default list created", listId });
          }
        );
      } else {
        const listId = results[0].list_id;
        return res
          .status(200)
          .json({ message: "User already has a list", listId });
      }
    }
  );
});

// connection.end();

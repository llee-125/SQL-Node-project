const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Popover2020!",
  database: "playlist_Db",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected as id" + connection.threadId);
  queryAllSongs();
  queryRockSongs();
});

function queryAllSongs() {
  connection.query(`SELECT * FROM songs WHERE genre = "rock"`, function (
    err,
    res
  ) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      console.log(
        res[i].id +
          " | " +
          res[i].title +
          " | " +
          res[i].artist +
          " | " +
          res[i].genre
      );
    }
    console.log("------------------------------------------------------------");
  });
}

function queryRockSongs() {
  var query = connection.query(
    "SELECT * FROM songs WHERE genre=?",
    ["Soul"],
    function (err, res) {
      if (err) throw err;
      for (var i = 0; i < res.length; i++) {
        console.log(
          res[i].id +
            " |" +
            res[i].title +
            " | " +
            res[i].artist +
            " | " +
            res[i].genre
        );
      }
    }
  );

  console.log(query.sql);
  connection.end();
}

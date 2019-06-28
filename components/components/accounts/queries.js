let http = require("http");
let url = require("url");
let mysql = require("mysql");
let express = require("express");
let bcrypt = require("bcrypt");
let jwt = require('jsonwebtoken');
let app = express();
let bodyParser = require("body-parser");

let port = process.env.PORT || 5000;
let con = require('./dbConnection.js');

app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(urlencodedParser);

app.listen(port, function() {
  console.log("Node app is running. port " + port);
});

process.env.SECRET_KEY = 'secret';

app.post('/register', (req, res) => {
  let today = new Date();
  const userData = {
    login: req.body.login,
    password: req.body.password,
    email: req.body.email,
    created: today
  }

  con.query("SELECT * FROM players WHERE email = ?", req.body.email, function(err, results, fields) {
    if(results[0]) {
      res.json({error: "email arleady exists", success: false});
    } else {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        userData.password = hash;

        con.query("INSERT INTO players SET ?", userData, function(err, result) {
          res.send({data: userData.email + " registered", success: true});
        });

      });
    }
  });

});

app.post('/login', function(req, res) {
  con.query("SELECT * FROM players WHERE login = ?", req.body.login, function(err, results, fields) {
    if(!results[0]) {
      res.json({error: "user doesnt exist", success: false});
    } else {
      if(bcrypt.compareSync(req.body.password, results[0].password)) {
        let token = jwt.sign({data: results}, process.env.SECRET_KEY, {
          expiresIn: 1440
        });
        res.send({data: token, success: true});
      } else {
        res.status(400).json({error: "user doesn't exist", success: false});
      }
    }
  });
});

app.delete('/deleteBet', function(req, res) {
  let login = req.body.userLogin;
  let awayTeam = req.body.awayTeam;
  let homeTeam = req.body.homeTeam;
  let week = req.body.week;

  con.query("DELETE FROM bets WHERE userLogin=? AND awayTeam=? AND homeTeam=? AND week=?",  [login, awayTeam, homeTeam, week], function(err,results, fields) {
    if(err) {
      throw err;
    } else {
      res.send(login, awayTeam, homeTeam, week);
    }
  });
});

app.post('/postBets', function(req, res) {
  let login = req.body.userLogin;
  let awayTeam = req.body.awayTeam;
  let homeTeam = req.body.homeTeam;
  let week = req.body.week;
  let goalsHomeTeam = Number(req.body.goalsHomeTeam);
  let goalsAwayTeam = Number(req.body.goalsAwayTeam);

  con.query("SELECT * FROM bets WHERE userLogin=? AND awayTeam=? AND homeTeam=? AND week=?", [login, awayTeam, homeTeam, week], function(err, results, fields) {
    if(err) {
      throw err;
    } else if(!results[0]) {
      con.query("INSERT INTO bets (week, homeTeam, goalsHomeTeam, awayTeam, goalsAwayTeam, userLogin) VALUES (?,?,?,?,?,?)", [week, homeTeam, goalsHomeTeam, awayTeam, goalsAwayTeam, login], function(err, result, fields) {
        console.log(result,fields);
        console.log(week, homeTeam, goalsHomeTeam, awayTeam, goalsAwayTeam, login);
        res.send({data: "bets for week " + week + " has been saved"});
      });
    } else {
      con.query(`UPDATE bets SET goalsHomeTeam=?, goalsAwayTeam=? WHERE userLogin=? AND awayTeam=? AND homeTeam=? AND week=?`,
      [goalsHomeTeam, goalsAwayTeam, login, awayTeam, homeTeam, week],
      function(err, results) {
        res.send({data: "bets for week " + week + " has been updated"});
      });
    }
  });
});

app.get('/getBet', function(req, res) {
  con.query("select * from bets", (err, results, fields) => {
    res.send(results);
  });
});

app.post('/postMatch', (req, res) => {
  let date = req.body.date;
  let week = req.body.week;
  let homeTeam = req.body.homeTeam;
  let goalsHomeTeam = req.body.goalsHomeTeam;
  let awayTeam = req.body.awayTeam;
  let goalsAwayTeam = req.body.goalsAwayTeam;
  let start_at = req.body.start_at;

  let sql="insert into matches (date, week, homeTeam, goalsHomeTeam, awayTeam, goalsAwayTeam, start_at) values (?,?,?,?,?,?,?)";
  let data = [date, week, homeTeam, goalsHomeTeam, awayTeam, goalsAwayTeam, start_at];
  con.query(sql, data, function(err, results) {
    if(err) {
      throw err;
    } else {
      res.send("match has beed added");
    }
  });
});

const express = require("express");
const bodyParser = require("body-parser");

const db = require("./models");
const { User } = require("./models");

const app = express();

const GenerateJwt = require("./utils/generate_jwt");
const CheckJwt = require("./utils/check_jwt");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/select", (req, res) => {
  User.findAll()
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.post("/reg", (req, res) => {
  const { email, pass, role, name, fam, otch } = req.body;

  User.create({
    email: email,
    pass: pass,
    role: role,
    name: name,
    fam: fam,
    otch: otch,
  })
    .then(() => {
      res.send("insert");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Ошибка при сохранении пользователя");
    });
});
app.post("/auth", (req, res) => {
  const { email, pass } = req.body;
  const { jwt } = req.headers;
  (async () => {
    const result = await CheckJwt(jwt);
    console.log(result);
  })();

  User.findOne({
    where: {
      email: email,
    },
  })
    .then((user) => {
      if (user !== null && user.pass === pass) {
        res.send("true");
      } else {
        res.status(401).send("Неверный пароль");
      }
    })
    .catch((err) => {
      res.status(404).send("Пользователя не найдено");
      console.log(err);
    });
});

db.sequelize.sync().then((req) => {
  app.listen(3001, async () => {
    console.log("Запустился на сервере 3001");
    const jwt = await GenerateJwt();
    console.log(jwt);
  });
});

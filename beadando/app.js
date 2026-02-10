import express from "express";
import cors from "cors";
import db from "./data/db.js";

const PORT = 3321;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/nyiltnap/api/v1/telepules", (req, res) => {
  const telepules = req.query.nev;
  const diakok = db
    .prepare("SELECT * FROM diakok WHERE telepules=?")
    .all(telepules);
  res.status(200).json(diakok);
});

app.get("/nyiltnap/api/v1/tanora", (req, res) => {
  const tanora = req.query.tanora;
  const orak = db
    .prepare(
      "SELECT datum,terem,orasorszam FROM orak WHERE targy=? ORDER BY datum ASC, orasorszam ASC",
    )
    .all(tanora);
  res.status(200).json(orak);
});

app.get("/nyiltnap/api/v1/9-matematika-fizika", (req, res) => {
  const csoport = db
    .prepare(
      "SELECT csoport,targy,datum FROM orak WHERE (targy='matematika' OR targy='fizika') AND csoport LIKE '9%' ORDER BY targy ASC",
    )
    .all();
  res.status(200).json(csoport);
});

app.get("/nyiltnap/api/v1/telepulesfo", (req, res) => {
  const telepulesfo = db
    .prepare(
      "SELECT telepules, COUNT(id) as diakszam FROM diakok GROUP BY telepules ORDER BY diakszam DESC",
    )
    .all();
  res.status(200).json(telepulesfo);
});

app.get("/nyiltnap/api/v1/tantargyak", (req, res) => {
  const targyak = db
    .prepare("SELECT DISTINCT targy FROM orak ORDER BY targy")
    .all();
  res.status(200).json(targyak);
});

app.get("/nyiltnap/api/v1/tanar", (req, res) => {
  const tanarnev = req.query.tanar;
  const datum = req.query.datum;
  const diakok = db
    .prepare(
      "SELECT diakok.nev, diakok.telefon, diakok.email FROM kapcsolat JOIN diakok ON kapcsolat.diakid = diakok.id JOIN orak ON kapcsolat.oraid = orak.id WHERE orak.tanar = ? AND orak.datum = ?",
    )
    .all(tanarnev, datum);
  res.status(200).json(diakok);
});

app.get("/nyiltnap/api/v1/telepulesrol", (req, res) => {
  const diaknev = req.query.nev;
  const diakok = db
    .prepare(
      "SELECT masik_diak.nev FROM diakok AS keresett_diak JOIN diakok AS masik_diak ON keresett_diak.telepules = masik_diak.telepules WHERE keresett_diak.nev = ? AND masik_diak.nev != ?",
    )
    .all(diaknev, diaknev);
  res.status(200).json(diakok);
});

app.get("/nyiltnap/api/v1/szabad", (req, res) => {
  const diaknev = req.query.nev;
  const diakok = db
    .prepare(
      "SELECT masik_diak.nev FROM diakok AS keresett_diak JOIN diakok AS masik_diak ON keresett_diak.telepules = masik_diak.telepules WHERE keresett_diak.nev = ? AND masik_diak.nev != ?",
    )
    .all(diaknev, diaknev);
  res.status(200).json(diakok);
});

app.listen(PORT, () => {
  console.log(`Listening to PORT: ${PORT}`);
});

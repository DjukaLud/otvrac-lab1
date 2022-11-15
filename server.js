const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const pg = require('pg');
const session = require('express-session');
const db = require('./db');
const fs = require('fs');
const { fileLoader } = require('ejs');

var jsonParser = bodyParser.json();

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/getKlubovi', async (req, res) => { 
    
    const sql = `SELECT * FROM nogometni_klub;`;
    try {
        const klubovi = (await db.query(sql, [])).rows;
        res.send({klubovi: klubovi});
    } catch (err) {
        console.log(err);
    } 
});

app.get('/getIgraci', async (req, res) => {
    
    const sql = `SELECT * FROM igrač;`;
    try {
        const igraci = (await db.query(sql, [])).rows;
        res.send({igraci: igraci});
    } catch (err) {
        console.log(err);
    } 
});

app.get('/getTreneri', async (req, res) => {
    
    const sql = `SELECT * FROM trener;`;
    try {
        const treneri = (await db.query(sql, [])).rows;
        res.send({treneri: treneri});
    } catch (err) {
        console.log(err);
    } 
});

app.get('/getFull', async (req, res) => {
    
    const sql = `SELECT * FROM nogometni_klub NATURAL JOIN trener LEFT JOIN igrač ON igrač.idkluba = nogometni_klub.idkluba;`;
    try {
        const info = (await db.query(sql, [])).rows;
        res.send({klubovi: info});
    } catch (err) {
        console.log(err);
    } 
});

app.post("/createCSV",jsonParser, async (req, res) =>{
  //  console.log(req.body.array);
    let array = req.body.array;
  /*  array.forEach((row) => fs.writeFile('./test.csv', row , err => {
        if(err){
            console.log(err);
        }
    }));*/
 /*   var bigString = "";
    let arrayKeys = Object.keys(filterArray[0]);
    let keys_num=arrayKeys.length;
    let counter=0;
    for(let i of array){
        counter++;
        string+= counter===keys_num ? key : key +","
    }
    fs.writeFile('./client/public/exportCSV.txt', bigString + "\n", { flag: 'w+' }, err => {
        if (err) {
            console.error(err);
        }
    });
    bigString = "";
    for(let i of filterArray){
        counter = 0;

        arrayKeys.forEach(
            (key)=>{ counter++; 
                    bigString+= counter===keys_num ? arrayItem[key] : (arrayItem[key] + ",")}
        )
        fs.writeFile('./client/public/exportCSV.txt', bigString + "\n", { flag: 'a+' }, err => {
            if (err) {
              console.error(err);
            }
          });
          bigString = "";
    }
    res.send(filterArray)*/
})

const express = require('express'); //Line 1
var bodyParser = require('body-parser')
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3
const pg = require('pg')
const session = require('express-session')
const db = require('./db');
const { response } = require('express');
const pgSession = require('connect-pg-simple')(session)
const fs=require('fs')
app.use(express.json());
var jsonParser = bodyParser.json()

app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6


app.use(express.urlencoded({ extended: true }));


//tri dodatna GET-a 
app.get('/getKlubovi', async (req, res) => { 
    
    const sql = `SELECT * FROM nogometni_klub;`;
    try {
        const info = (await db.query(sql, [])).rows;
        if(info.length > 0){
            const wrapper = {
                status: "OK",
                message: "Ispravno dohvaćeni svi klubovi",
                response: info
            };
            //res.status(200).send({klubovi: info});
            res.status(200).send(wrapper);
        } else {
            const wrapper = {
                status: "Not found",
                message: "Ne postoje traženi podaci",
                response: null
            }
            res.status(404).send(wrapper);
        }
    } catch (err) {
        console.log(err);
        res.status(500);
    } 
});

app.get('/getIgraci', async (req, res) => {
    
    const sql = `SELECT * FROM igrač;`;
    try {
        const info = (await db.query(sql, [])).rows;
        if(info.length > 0){
            const wrapper = {
                status: "OK",
                message: "Ispravno dohvaćeni svi igrači",
                response: info
            };
            res.status(200).send(wrapper);
        } else {
            const wrapper = {
                status: "Not found",
                message: "Ne postoje traženi podaci",
                response: null
            }
            res.status(404).send(wrapper);
        }
    } catch (err) {
        console.log(err);
        res.status(500);
    } 
});

app.get('/getTreneri', async (req, res) => {
    
    const sql = `SELECT * FROM trener;`;
    try {
        const info = (await db.query(sql, [])).rows;
        if(info.length > 0){
            const wrapper = {
                status: "OK",
                message: "Ispravno dohvaćeni svi treneri",
                response: info
            };
            res.status(200).send(wrapper);
        } else {
            const wrapper = {
                status: "Not found",
                message: "Ne postoje traženi podaci",
                response: null
            }
            res.status(404).send(wrapper);
        }
    } catch (err) {
        console.log(err);
        res.status(500);
    } 
});

//GET za dohvacanje cjelokupne kolekcije podataka
app.get('/getFull', async (req, res) => {
    
    const sql = `SELECT * FROM nogometni_klub LEFT JOIN trener ON trener.idkluba = nogometni_klub.idkluba LEFT JOIN igrač ON igrač.idkluba = nogometni_klub.idkluba;`;
    try {
        const info = (await db.query(sql, [])).rows;
        if(info.length > 0){
            const wrapper = {
                status: "OK",
                message: "Ispravno dohvaćeni svi redovi",
                response: info
            };
            res.status(200).send(wrapper);
        } else {
            const wrapper = {
                status: "Not found",
                message: "Ne postoje traženi podaci",
                response: null
            }
            res.status(404).send(wrapper);
        }
    } catch (err) {
        console.log(err);
        res.status(500);
    } 
});

//GET za dohvacanje pojedinacnog resursa iz kolekcije
app.get('/getFull/:id', async (req, res) => {

    const id = parseInt(req.params.id);
    const sql = `SELECT * FROM nogometni_klub LEFT JOIN trener ON trener.idkluba = nogometni_klub.idkluba LEFT JOIN igrač ON igrač.idkluba = nogometni_klub.idkluba
                    WHERE nogometni_klub.idkluba = $1;`
    try {
        const info = (await db.query(sql, [id])).rows;
        if(info.length > 0){
            const wrapper = {
                status: "OK",
                message: `Ispravno dohvaćen klub s identifikacijskom oznakom ${id}`,
                response: info
            };
            res.status(200).send(wrapper);
        } else {
            const wrapper = {
                status: "Not found",
                message: `Ne postoji nogometni klub s identifikacijskom oznakom ${id}`,
                response: null
            }
            res.status(400).send(wrapper);
        }
    } catch (err) {
        console.log(err);
        res.status(500);
    } 
});

app.post('/addKlub',jsonParser, async (req, res) => {
    const {idkluba, naziv, datumosn, liga, sjedište, stadion, glavnisponzor} = req.body;

    const sqlCheck = `SELECT * FROM nogometni_klub WHERE idkluba = $1`;
    if((await db.query(sql, [req.body.idkluba])).rows.length > 0){
        res.status(400).send("Klub već postoji");
    }
    
    const sql = `INSERT INTO nogometni_klub
                    VALUES ('${req.body.idkluba}','${req.body.naziv}', '${req.body.datumosn}', '${req.body.liga}',' ${req.body.sjedište}', '${req.body.stadion}','${req.body.glavnisponzor}');`
    try {
        const info = (await db.query(sql, [])).rows;
        if(info.length > 0){
            const wrapper = {
                status: "Dodano",
                message: `Dodan klub s nazivom ${req.body.naziv}`
            };
            res.status(201).send(wrapper);
        } else {
            res.status(400).message(`Neispravno unešeni podaci`);
        }
    } catch (err) {
        console.log(err);
    } 
});

app.put('/editKlub/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const infoOld = await (await db.query(`SELECT * FROM nogometni_klub WHERE idkluba = $1`,[id])).rows;
    if(infoOld.length > 0){
        const sqlNew = `UPDATE nogometni_klub
                    SET idkluba = $1, naziv = $2, datumosn = $3, liga = $4, sjedište = $5, stadion = $6, glavnisponzor = $7
                    WHERE idkluba = $7`;
        try {
            const info = (await db.query(sqlNew, [id, req.body.naziv,req.body.datumosn,req.body.liga,req.body.sjedište,req.body.stadion,req.body.glavnisponzor])).rows;
            const wrapper = {
                status: "Ažurirano",
                message: `Ažuriran red s id = ${id}`,
                infoOld: infoOld,
                info: info
            }
            res.status(200).send(wrapper);
        } catch (err) {
            console.log(err);
        }
    } else {
        res.status(400).message(`Error: Red s id=${id} ne postoji`);
    } 
});

app.delete('/deleteKlub/:id', async (req, res) => {

    let id = parseInt(req.params.id);
    if((await db.query(`SELECT * FROM nogometni_klub WHERE idkluba=${id}`)).rows.length <= 0){
        const wrapper = {
            status: "Not found",
            message: `Ne postoji nogometni klub s identifikacijskom oznakom ${id}`,
            response: null
        }
        res.status(400).send(wrapper);
    }
    const sql = `DELETE FROM nogometni_klub
                    WHERE idkluba = ${id};`
    try {
        const info = (await db.query(sql, [])).rows;
            const wrapper = {
                status: "OK",
                message: `Izbrisan klub s identifikatorom ${id}`,
                response: null
            };
            res.status(200).send(wrapper);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    } 
})

app.patch('*' , async (req, res) => {
    const wrapper = {
        status: "Not Implemented",
        message: "Method not implemented for requested resource",
        response: null
    }
    res.status(501).send(wrapper);
});

app.copy('*' , async (req, res) => {
    const wrapper = {
        status: "Not Implemented",
        message: "Method not implemented for requested resource",
        response: null
    }
    res.status(501).send(wrapper);
});

app.post('*' , async (req, res) => {
    const wrapper = {
        status: "Not Implemented",
        message: "Method not implemented for requested resource",
        response: null
    }
    res.status(501).send(wrapper);
});

app.put('*' , async (req, res) => {
    const wrapper = {
        status: "Not Implemented",
        message: "Method not implemented for requested resource",
        response: null
    }
    res.status(501).send(wrapper);
});

app.post("/createCSV",jsonParser, async (req, res) =>{
  
})

app.get('/getOpenAPi',async (req,res)=>{

   const folderPath = `./openapi.json`;
   fs.readFile(folderPath,(err,file)=>{
    if (err) {
       console.log(err);
       return res.status(500).send('Could not download file');
   } 
   res.setHeader('Content-Type','application/json');
   res.setHeader('Content-Disposition', 'attachment; filename="openapi.pdf"');
   const wrapper = {status:"OK",
                     message:"Dohvaćen openapi",
                     response:JSON.parse(file)};
    res.status(200).send(wrapper);});
   });
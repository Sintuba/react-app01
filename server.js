const { throws } = require('assert');
const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3001;
const mypass = "sugoiyo693";

//mysql接続設定
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:mypass,
    database:'scream_service'
});

//データベース接続
connection.connect();

//
app.get('/api/data',(req,res)=>{
    //mysqlクエリを実行
    connection.query("SELECT * FROM users", (err,results)=>{
        if (err) throw err;
        res.json(results);
    });
});

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});
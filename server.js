require('dotenv').config();
const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

// MySQL プール設定
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS||'sugoiyo693',
    database: process.env.DB_NAME || 'scream_service'
});

app.use(express.json());
app.use(cors());

// データベースクエリを実行する関数
async function executeQuery(query, params = []) {
    const connection = await pool.getConnection();
    try {
        const [results,] = await connection.query(query, params);
        return results;
    } catch (error) {
        console.error('データベースクエリエラー:', error);
        throw error;
    } finally {
        connection.release();
    }
}

// データ取得 API
app.get('/api/data', async (req, res) => {
    try {
        const results = await executeQuery('SELECT * FROM scream');
        res.json(results);
    } catch (error) {
        res.status(500).send('データベースクエリエラー');
    }
});

// データ送信 API
app.post('/api/send', async (req, res) => {
    const { user_id, content } = req.body;
    try {
        await executeQuery("INSERT INTO scream(user_id, content, create_at) VALUES (?, ?, NOW())", [user_id, content]);
        res.status(201).send('メッセージを追加しました');
    } catch (error) {
        res.status(500).send('データベースクエリエラー');
    }
});

// サーバー起動
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}).on('error', err => {
    console.error('サーバー起動エラー:', err);
});

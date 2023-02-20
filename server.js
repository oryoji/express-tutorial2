const express = require("express");
const app = express();
const userRouter = require('./routes/user');

const PORT = 8000;

// ミドルウェア関数
const myLogger = function (req, res, next) {
    console.log(req.originalUrl);
    next();
};

// ミドルウェアの実行
app.use(myLogger);

// 静的ファイルの読み込み
// app.use(express.static('public'));

// 動的ファイルの読み込み
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    // res.send('hello world');
    // res.sendStatus(404);
    // res.send('エラーです').sendStatus(404);
    // res.json({ msg: 'エラーです'}).sendStatus(404);
    res.render('index', { title: 'Hey', text: '動的ファイルを表示できたよ！' })
});

// ルーティング
app.use('/user', userRouter);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});


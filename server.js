const express = require("express");
const app = express();
const userRouter = require('./routes/user');

const PORT = 8000;

app.use(express.static('public'));
app.get('/', (req, res) => {
    // res.send('hello world');
    // res.sendStatus(404);
    // res.send('エラーです').sendStatus(404);
    res.json({ msg: 'エラーです'}).sendStatus(404);
});

// ルーティング
app.use('/user', userRouter);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});


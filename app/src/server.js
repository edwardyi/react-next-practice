import express from 'express';

var app = express();

app.get('/', (req, res) => {
    res.send('<h1>Testing</h1>');
});

app.listen(3000 ,function() {
    console.log('server started')
});
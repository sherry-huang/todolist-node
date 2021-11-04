import express from 'express';
// import bodyParser from 'body-parser';
import todoRouter from './route/todo';
const path = require('path');
var cors = require('cors')
const app: express.Application = express();

app.use('*', cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', todoRouter);

app.use(express.static(`${__dirname}/build`));

// app.get('/*', function(req, res) {
//     res.sendFile(`${__dirname}/build/index.html`);
// });

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const server = app.listen(3001, function () {
console.log('Example app listening on port 3001!');
});
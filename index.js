const express = require('express');
const cors = require('cors');
const { resolve } = require('path');
const port = process.env.port || 9000;

const app = express();

app.use(cors());

app.use(express.static(resolve(__dirname, 'client', 'dist')));

function log(msg) {
    return (req, res, next) => {
        console.log(msg);
        next();
    }

}
app.use('/api/get-stuff', log('This is middleware route'));

app.get('/api/get-stuff', log, (req, res) => {
   res.send({success: true, message: 'Here is some stuff from the back-end'});
});

app.post('/api/get-user', (req, res) => {
   res.send({success: true, user: {name: 'Jim Bob', age: 57}});
});

app.get('*', (req, res) => {
    res.sendFile(resolve(__dirname, 'client', 'dist', 'index.html'));
});

// app.get('/', (req, res) => {
//     res.send('<h1> YO </h1>')
// });

app.listen(port ,() => {
    console.log("server running on port " + port);
});

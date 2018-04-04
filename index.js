// Require needed modules / dependencies
const express = require('express');
const cors = require('cors');
const port = process.env.port || 9000;

const app = express();

app.use(cors());

app.get('/api/get-stuff', (req, res) => {
   res.send({success: true, message: 'Here is some stuff from the back-end'});
});

app.get('/', (req, res) => {
   res.send('<h1> YO </h1>')
});

app.listen(port ,() => {
    console.log("server running on port " + port);
});

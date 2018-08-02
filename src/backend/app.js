const express = require('express');
const app = express();

const Animes = require('./animes');

app.get('/rest/animes', (req, res) => res.send(Animes))

app.listen(3002, () => console.log('Example app listening on port 3002!'))
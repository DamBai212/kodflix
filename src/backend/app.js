const express = require('express');
const app = express();

const getAnimes = require('./animes');

app.get('/rest/animes', (req, res) => res.send(getAnimes))

app.listen(3001, () => console.log('Example app listening on port 3001!'))
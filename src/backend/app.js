const express = require('express');
const app = express();
const Animes = require('./animes');
const path = require('path');
const port = process.env.PORT || 3002;

app.get('/rest/animes', (req, res) => res.send(Animes))

app.use( express.static(path.join(__dirname, '../../build')))

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
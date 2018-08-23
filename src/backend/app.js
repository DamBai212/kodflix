const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3002;
const connect = require('./db');

connect().then(dbo => { 
app.get('/rest/animes', (req, res) => {
    dbo.collection("animes").find({}).toArray(function(err, result) {
    if (err) throw err;
    
    res.send(result)
    })
})

app.use( express.static(path.join(__dirname, '../../build')))

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});
})

app.listen(port, () => console.log(`Listening on port ${port}`));
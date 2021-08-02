const path = require('path');

const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'index.html'));
});

app.get('/main.js', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'main.js'));
});

app.get('/styles.css', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'styles.css'))
});

app.get('/favicon.ico', (req, res) => {
    res.status(200)
});

app.use((req, res, next) => {
    res.status(404).send('Resource not found');
});

app.listen(PORT, ()=> {
    console.log(`Server listening on port: ${PORT}`)
});
const http = require('http');
const express = require('express');
const faker = require('./faker');
const app = express();
const PORT = 3000;

const server = http.createServer(app);

app.get(`/`, (req, res) => {
    res.send(`Please enter noun/verb/adjective in any combination in the URL`);
})

app.get(`/:partOfSpeech`, (req, res) => {
    switch(req.params.partOfSpeech) {
        case "noun":
            res.send(faker.getNoun());
            break;
        case "verb":
            res.send(faker.getVerb());
            break;
        case "adjective":
            res.send(faker.getAdjective());
            break;
    }
})

server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
})
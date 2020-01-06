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

app.get(`/:partOfSpeech1/:partOfSpeech2`, (req, res) => {
    let content = "";
    let arr = [req.params.partOfSpeech1, req.params.partOfSpeech2];
    for (let speechType of arr) {
        switch(speechType) {
            case "noun":
                content += `${faker.getNoun()} `;
                break;
            case "verb":
                content += `${faker.getVerb()} `;
                break;
            case "adjective":
                content += `${faker.getAdjective()} `;
                break;
        }
    }
    res.send(content);
})

app.get(`/:partOfSpeech1/:partOfSpeech2/:partOfSpeech3`, (req, res) => {
    let content = "";
    let arr = [req.params.partOfSpeech1, req.params.partOfSpeech2, req.params.partOfSpeech3];
    for (let speechType of arr) {
        switch(speechType) {
            case "noun":
                content += `${faker.getNoun()} `;
                break;
            case "verb":
                content += `${faker.getVerb()} `;
                break;
            case "adjective":
                content += `${faker.getAdjective()} `;
                break;
        }
    }
    res.send(content);
})

server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
})
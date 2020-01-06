const faker = require('faker');

function getAdjective() {
    return faker.hacker.adjective();
}

function getNoun() {
    return faker.hacker.noun();
}

function getVerb() {
    return faker.hacker.verb();
}

module.exports = {
    getAdjective,
    getNoun,
    getVerb
};
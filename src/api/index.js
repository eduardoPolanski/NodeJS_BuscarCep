const axios = require('axios');

const url = 'https://viacep.com.br/ws/'

const api = axios.create({
    baseURL: url
});

module.exports = api;
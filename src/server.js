const express = require('express')
const routes = require('./routes')
const path = require('path');
const mustache = require('mustache-express')
const cors = require('cors')

require('dotenv').config()


const app = express()

app.set('view engine', 'mustache')
app.set('views', path.join(__dirname, 'views'))
app.engine('mustache', mustache())

app.use(express.json())
app.use(express.urlencoded({ extended:true }));
app.use(cors());

app.use(routes);

app.listen(process.env.PORT, function () {
    console.log(`Servidor rodando na porta ${process.env.PORT}`)
});
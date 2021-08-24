const { Router } = require('express')

const homeController = require('../controllers/homeController')

const routes = Router()

routes.get('/', homeController.index);
routes.post('/', homeController.cep);


module.exports = routes
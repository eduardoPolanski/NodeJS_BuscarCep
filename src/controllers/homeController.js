const api = require('../api/index');

exports.index = async (req, res) => {
    res.render('pages/home');
};

exports.cep = async (req, res) => {
    cep = req.body.cep

    api.get(`/${cep}/json`).then(function(response) {

        busca = response.data

        return res.render('pages/home', {
            busca
        });

    })
    .catch(() => {
        const msgErro = "CEP inválido, tente novamente"
        return res.render('pages/home', {
            msgErro
             
        });
        
    });
}
// importar db
const { Genre } = require ('../database/models/index.js')

const genresController = {
    list: async (req, res) => {
        //Completar
        try {
            const genres = await Genre.findAll();
            res.render('genresList', { genres });
        } catch (errors) {
            res.json(errors.message);
        }
    },
    detail: async (req, res) => {
        //Completar
        try {
            const genre = await Genre.findByPk(req.params.id);
            res.render('genresDetail', { genre });
        } catch (errors) {
            res.json(errors.message);
        }
    }
};

module.exports = genresController;
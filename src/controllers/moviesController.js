// importar db
const { Movie, Sequelize } = require('../database/models/index');
const Op = Sequelize.Op

const moviesController = {
    list: async (req, res) => {
        //Completar
        try {
            const movies = await Movie.findAll();
            res.render('moviesList.ejs', { movies });

        } catch (errors) {
            res.json(errors.message)
        }
    },
    new: async (req, res) => {
        //Completar
        try {
            const movies = await Movie.findAll({
                order: [['release_date','DESC']],
                limit: 5,
            });
            res.render('newestMovies', { movies });
        } catch (errors) {
            res.json(errors.message)
        }
    },
    recommended: async (req, res) => {
        //Completar
        try {
            const movies = await Movie.findAll({
                where: {rating: { [Op.gte] : 8}},
                order: [['rating','DESC']]
            });
            res.render('recommendedMovies', { movies })
        } catch (errors) {
            res.json(errors.message)
        }
    },
    detail: async (req, res) => {
        //Completar
        try {
            const movie = await Movie.findByPk(req.params.id);
            res.render('moviesDetail', { movie });
        } catch (errors) {
            res.json(errors.message)
        }
    }
};

module.exports = moviesController;
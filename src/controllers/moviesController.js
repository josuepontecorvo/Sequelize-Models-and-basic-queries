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
    },
    create: (req,res) => {
        res.render('createMovie')
    },
    store: async (req,res) => {
        try {
            await Movie.create({
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre_id,
                createAt: new Date(),
                updateAt: new Date()
            })
            res.redirect('/movies')
        } catch (error) {
            res.json(error.message)
        }
    },
    edit: async (req, res) => {
        try {
            const movie = await Movie.findByPk(req.params.id);
            res.render('editMovie', { movie });
        } catch (errors) {
            res.json(errors.message)
        }
    },
    update: async (req, res) => {
        try {
            await Movie.update({ title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre_id,
                updateAt: new Date()
            },{where: { id: req.params.id}})
            res.redirect('/movies')
        } catch (errors) {
            res.json(errors.message)
        }
    },
    delete: async (req, res) => {
        try {
            await Movie.destroy({where:{id: req.params.id}})
            res.redirect('/movies');
        } catch (errors) {
            res.json(errors.message)
        }
    },
};

module.exports = moviesController;
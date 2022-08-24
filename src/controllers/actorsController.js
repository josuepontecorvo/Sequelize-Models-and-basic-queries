const { Actor } = require ('../database/models/index.js')

const actorsController = {
    list: async (req, res) => {
        //Completar
        try {
            const actors = await Actor.findAll();
            res.render('actorsList', { actors });
        } catch (errors) {
            res.json(errors.message);
        }
    },
    detail: async (req, res) => {
        //Completar
        try {
            const actor = await Actor.findByPk(req.params.id);
            res.render('actorsDetail', { actor });
        } catch (errors) {
            res.json(errors.message);
        }
    }
};

module.exports = actorsController;
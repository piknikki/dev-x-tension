const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Post
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err));
    },
    // findByCategory: function (req, res) {
    //     db.Post
    //         .find({ category: req.params.category }, req.body, { new: true })
    //         .sort({ date: -1 })
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => console.log(err));
    // },
    findById: function (req, res) {
        db.Post
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err));
    },
    create: function (req, res) {
        db.Post
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err));
    },
    update: function (req, res) {
        db.Post
            .findOneAndUpdate({ _id: req.params.id }, req.body, {new: true})
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err));
    },
    remove: function (req, res) {
        db.Post
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err));
    }
};

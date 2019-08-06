const Book = require('../models/index-model').Book;

module.exports = {
    list(req, res) {
        return Book
        .findAll({
            include: [],
            order: [
            ['createdAt', 'DESC'],
            ],
        })
        .then((books) => res.status(200).send(books))
        .catch((error) => { res.status(400).send(error); });
    },
    add(req, res) {
        return Book
        .create({
            title: req.body.title,
            description: req.body.description,
            publised : req.body.publised,
            author : [{
                first_name : req.body.first_name,
                last_name: req.body.last_name,
            }]
        })
        .then((books) => res.status(201).send(books))
        .catch((error) => res.status(400).send(error));
    }
}
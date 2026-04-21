// j'importe le modele User pour interagir avec la table 'users' dans la base de données
const db= require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    const emailUser = req.body.email;
    const passwordUser = req.body.password;

    const user = {
        email: emailUser,
        password: passwordUser
    };

    User.create(user).then(data => {
        res.send(data);   
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Une erreur s'est produite"
        });
    });
}
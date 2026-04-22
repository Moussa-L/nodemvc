// j'importe le modele User pour interagir avec la table 'users' dans la base de données
const db= require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
   /* const emailUser = req.body.email;
    const passwordUser = req.body.motdepasse;*/

    /** je m'assure que le mail et le mot de passe sont bien renseigner
     * deux conditions  à vérifier:
     * 1. si la variable emailUser est vide 
     * 2. si la variable passwordUser est videJ'arrête la création du compte d'utilisateur 
     */
 

    //je récupère le mail saisie côté frontend .je stocke l'email dans la variable emailUser
    const emailUser = req.body.email;
    //je récupère le mot de passe saisie côté frontend .je stocke le mot de passe dans la variable passwordUser
    const passwordUser = req.body.motdepasse;

//je m'assure que le mail et le mot de passe sont bien renseigné
//si je n'ais pas de mail ou de mot de passe je retourne une erreur au client pour lui indiquer que les champs sont obligatoires
//  ou 
if (!emailUser || !passwordUser) {
    res.status(400).send({
        message: "Veuillez remplir tous les champs."
    });
    //alors l'opération vas s'arrêter
    return;
}


    const user = {
        email: emailUser,
        password: passwordUser
    };

    User.create(user).then(data => {
        res.send(data);   
    }).catch(err => {
        res.status(500).send({
            message: 
            err.message || "Une erreur s'est produite"
        });
    });
}

// Méthode pour récupérer un utilisateur par son ID
exports.findOne = (req, res) => {
    // Je récupère l'ID de l'utilisateur à partir des paramètres de la requête
    const idUser = req.params.id;
    
   User.findByPk(idUser)
   .then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `Utilisateur non trouvé avec id ${idUser} n'existe pas.`
            });
        }
   })
    .catch(err => {
        res.status(500).send({
            message: `Erreur lors de la récupération de l'utilisateur avec id ${idUser}`
        })
    });



};

exports.findAll = (req, res) => {
    User.findAll()
        .then(data => {
        res.send(data); 
    }).catch(err=> {
        res.status(500).send({
            message: err.message || "Une erreur s'est produite lors de la récupération des utilisateurs."
        });
    });
}
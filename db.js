/*
* Permet de se connecter à la base de données MySQL en utilisant Sequelize
*/


const Sequelize = require("sequelize");

// ici je vais me connecter à la base de données MySQL en utilisant Sequelize
const sequelize = new Sequelize 
// ici je vais me connecter à la base de données MySQL en utilisant Sequelize 
//j'insére les paramètres de connexion à la base de données : nom de la base de données, nom d'utilisateur, mot de passe et options de connexion
    ('maygourmet', 'root', 'Lidyamoussa2907!', {
        // ici je définis les options de connexion à la base de données
        host: "localhost",
        dialect: "mysql",
    }
);

// j'exorte le module de connexion à la base de données pour l'utiliser dans les autres parties de l'application
module.exports = sequelize;
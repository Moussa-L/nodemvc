/* 
* Ici, je définis le modèle User pour la base de données
* Le modèle User représente les utilisateurs de l'application et leurs propriétés:
* id, email et password. Ce modèle est essentiel pour la gestion de l'authentification et des utilisateurs dans l'application.
* Il est utilisé pour interagir avec la table 'users' dans la base de données MySQL.
* Le modèle est défini à l'aide de Sequelize, un ORM pour Node.js.
*/

// on vas utilisé le datatypes de sequelize pour définir les types de données des champs du modèle

const DataTypes = require("sequelize");
const sequelize = require("../db");
const { Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const UserModel = sequelize.define("user", {
        email: {
            type: Sequelize.STRING,
            unique: true,
        },
        password: {
            type: Sequelize.STRING,
        }

    });

    return UserModel;
}



/*
//j'exporte le sequelize
module.exports = sequelize.define(
    'user',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            
        },
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
        }
    }
);

*/
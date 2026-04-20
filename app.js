/*
==============================================
Fichier d'initialisation de l'application 
Express pour l'application NODE MVC
==============================================
*/ 

// J'importe le module express pour créer l'application web
const express = require("express");

// J 'importe Msql2 pour la connexion à la base de données
const mysql2 = require("mysql2");

// J'importe l' express-connection pour gérer les connexions à la base de données
const myConnection = require("express-myconnection");


// Importation des routes pour la page d'accueil
const accueilRoute = require("./routes/accueilRoute");

// Importation des routes pour l'authentification
const authRoute = require("./routes/authentificationRoute");

// Création de l'application Express
const app = express();

// Configuration du dossier contenant les templates de vues
app.set("views", "./views");

// Configuration du moteur de template EJS pour le rendu des vues
app.set("view engine", "ejs");

app.use(express.static("public"));


/* Configuration de la connexion à la base de données MySQL
app.use(expressMyConnection(mysql2, {
    host: "localhost", // Adresse du serveur de base de données
    user: "root", // Nom d'utilisateur pour la connexion
    password: "Lidyamoussa2907!", // Mot de passe pour la connexion
    database: "maygourmet", // Nom de la base de données
    port: 3306
}));
*/

// Configuration des options de connexion à la base de données MySQL
const optionsConnection= {
    host: "localhost",                          // Hôte de la base de données
    user:"root",                                // Utilisateur MySQL
    password: "Lidyamoussa2907!",               // Mot de passe MySQL
    database: "maygourmet",                     // Nom de la base de données
    port: 3306                                  // Port MySQL par défaut
};

// Utilisation du middleware myConnection pour gérer les connexions à la base de données
app.use(myConnection(mysql2, optionsConnection, "pool"));


// Enregistrement des routes de la page d'accueil
app.use("/", accueilRoute);

// Enregistrement des routes liées à l'authentification
app.use("/", authRoute);

// Export de l'application pour le serveur principal
module.exports = app;
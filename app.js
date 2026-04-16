/*
==============================================
Fichier d'initialisation de l'application 
Express pour l'application NODE MVC
==============================================
*/ 

//J'importe le module express
const express = require("express");


// Importation des routes pour la page d'accueil
const accueilRoute = require("./routes/accueilRoute");


const app = express();

app.set("views", "./views"); // Définition du répertoire des vues

app.set("view engine", "ejs"); // Définition du moteur de template EJS

// Utilisation des routes pour la page d'accueil
app.use("/", accueilRoute);

module.exports = app;
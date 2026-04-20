/*
 * Controller pour la page d'accueil
 * Gestion des routes liées à l'affichage de la page d'accueil.
 */

// Importation du module Express pour créer un routeur
const express = require("express");

// Création d'un routeur Express pour gérer les routes liées à l'accueil
const router = express.Router();

// Importation du contrôleur qui contient la logique pour l'accueil
const accueilController = require("../controllers/accueilController");

// Définition de la route GET / pour afficher la page d'accueil
// c'est la racine du site, elle rend la vue 'accueil.ejs' au client
router.get("/", accueilController.accueilView);

// Exportation du routeur pour l'utilisation dans app.js
module.exports = router;
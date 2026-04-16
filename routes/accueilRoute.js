/* Controller pour la page d'accueil */                 

// Importation du module Express pour créer un routeur
const express = require("express");
// Création d'un routeur Express pour gérer les routes liées à l'accueil
const router = express.Router();  

const accueilController = require("../controllers/accueilController");

  

// Définition de la route pour la page d'accueil (GET /) c'est à dire la route racine


router.get("/", accueilController.accueilView); // Appel de la fonction accueilView du controller pour gérer la requête GET sur la page d'accueil



// ici on peut définir les routes pour la page d'accueil
module.exports = router;
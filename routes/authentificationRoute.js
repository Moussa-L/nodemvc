/**
 * Fichier authentificationRoute.js
 * Ce module gère les routes dédiées aux pages d'authentification.
 */

// Importation du module Express pour créer un routeur
const express = require("express");

// Importation du contrôleur d'authentification
const authController = require("../controllers/authentificationController");

// Création d'un routeur Express pour gérer les routes d'authentification
const router = express.Router();

// Route GET /register : affiche la page d'inscription
router.get("/register", authController.registerView);

// Route POST /register : traite les données d'inscription envoyées par le client
router.post("/register", authController.registerUser);

const userController = require("../controllers/userController");

router.post("/register", userController.create);

// Exportation du routeur pour l'inclure dans app.js
module.exports = router;
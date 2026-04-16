/**       Le fichier authentificationRoute.js contient les routes pour l'authentification des utilisateurs */
const express = require("express");

const authController = require("../controllers/authentificationController");

const router = express.Router();

router.get("/register", authController.registerView);

// J' exoporte le routeur pour l'utiliser dans app.js
module.exports = router;
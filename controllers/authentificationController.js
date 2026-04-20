/**
 * Controller d'authentification
 * Ce module gère les actions liées à l'inscription et à l'affichage des pages d'authentification.
 */

// Exportation du module pour être utilisé par le routeur d'authentification
module.exports = {

    // Fonction qui renvoie la vue d'inscription au client
    registerView : (req, res) => {

        // Rend la page d'inscription via le moteur de templates EJS
        res.render("register"); // Affiche la page register.ejs

    },

    registerUser: async (req, res) => {
        console.log("### Controller RegisterUser ###");
        // Affiche les données reçues du client dans la console pour le débogage
        console.log("Données reçues du client :", req.body);

    }
}
/*
Controller de la page d'accueil
Ce module contient les actions qui gèrent les requêtes vers la page d'accueil.
*/

// Exportation du module de contrôleur pour le routeur d'accueil
module.exports = {

    // Fonction appelée pour la requête GET sur la page d'accueil
    accueilView: (req, res) => {

        // Rend la vue 'accueil.ejs' et envoie le HTML au client
        res.render('accueil');

    }

};
/*
Ici le fichier accueilController.js contient la logique métier pour la page d'accueil de l'application NODE MVC.
Il peut inclure des fonctions pour gérer les requêtes, interagir avec la base de données, etc.
*/

module.exports = {
    // Exemple de fonction pour gérer une requête GET sur la page d'accueil
    accueilView: (req, res) => {
        res.render('accueil'); // Rendu de la vue 'accueil.ejs' pour la page d'accueil
    }
};
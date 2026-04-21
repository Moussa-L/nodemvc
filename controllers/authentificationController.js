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

        //
        const emailUser = req.body.email;
        const passwordUser = req.body.password;

        //Ici je vais afficher les données reçues du client pour vérifier qu'elles sont correctes
        console.log("Email reçu :", emailUser);
        console.log("Password reçu :", passwordUser);

        //Je m'asure que le mail et le mot de passe sont bien reçus avant de les utiliser
        if (!emailUser || !passwordUser) {
            return res.render('register', {
                error:"Email ou mot de passe manquant."
            });

        }

        // il y'a pas d'erreur passe la suite

        let requteSql = "INSERT INTO users (id, email, password) VALUES (?, ?, ?)";

        let ordreDonnes = [null, emailUser, passwordUser];

        //J'exécute la requete d'insertion dans la base de données
        req.getConnection((err, connection) => {
            if (erreur) {
                console.log("Erreur de connexion à la base de données :", erreur);

            } else {
                connection.query(requteSql, ordreDonnes, (erreur, nouvellUtilisateur) => {
                    if (erreur) {
                        console.log("Erreur de requête :", erreur);
                    } else {
                            console.log("Nouvel utilisateur ajouté :");
                            res.redirect("/");
                           }
                
                        })     
                    }    
            });
    }
}
 
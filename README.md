Restaurant le Quai Antique

Le site web du restaurant est une application qui permet aux clients de consulter le menu du restaurant et de réserver des tables. Le site Web est conçu pour offrir une expérience utilisateur fluide et intuitive.

---

Technologies utilisées:

React
Express
Node.js
MySQL

---

Installation en local

Cloner le dépôt de code à partir de Github
Installer les dépendances à l'aide de la commande "npm install bcrypt express mysql dotenv body-parser cors nodemon"
allez dans le dossier front-end grace a la commence "cd front-end" puis "npm install react-scripts"

---

Configuration

Utilisez mon fichier .env avec ma base de donnée deja en ligne et initialisé avec un admin déja integré (email : admin@example.com password : password123)

Ou bien modifier le fichier .env à la racine du projet
Remplacez les informations de connexion à votre base de données MySQL dans le fichier .env et
si vous utilisez votre propre base de donnée alimentez la bdd avec les requetes sql presente dans le ficher eponymes

---

Utilisation

Pour lancer le serveur, utiliser la commande npm start
Pour accéder au site web, utiliser la commande npm run front-end

---

Fonctionnalités

utilisateur: Affichage page d'accueil
Affichage du menu du restaurant
Réservation de tables
S'inscrire/Se connecter

admin : Ajouter/Supprimer des menus
Voir/Supprimer des reservations
Ajouter/supprimer des tables (capacité du restaurant)
pour les fonctionalité admin : crée votre compte via la page sign up puis executez la requete sql :
"UPDATE users SET isAdmin = TRUE WHERE email = 'admin@example.com'"

---

Structure du code

index.js : fichier principal du serveur Express
src/ : répertoire principal du client React
src/components/ : répertoire contenant tous les composants React utilisés dans l'application
src/app/ : répertoire contenant toutes les pages principales de l'application

---

Contact
Si vous avez des questions ou des problèmes, n'hésitez pas à nous contacter à l'adresse email suivante : 94200mehdy@gmail.com

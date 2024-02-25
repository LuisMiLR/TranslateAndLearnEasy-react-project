# StranlateAndLearnEasy

## Description

"Translate And Learn Easy est un side project MERN : d'une part une application de traduction Anglais / Français qui permet l'apprentissage des mots consultés via un système de gamification.
Elle exploite l'efficacité de l'API de DeepL pour les traductions, tout en offrant un plateau de jeu visant à renforcer la mémorisation des termes récemment consultés, avec des options d'enseignement."

## Fonctionnalités

- Authentification sécurisé avec JWT, bcryptjs, Firebase et google Oauth.
- Traductions de mots, text ou documents en utilisant l'API DeepL. (Les fonctionnalités seront ajouter progressivement)
- Plateau de jeu pour apprendre et améliorer la mémoire des termes consultés.
- un systeme de comptage de score et d'amélioration des connaissances.
- Possibilité de sélectionner le nombre de mots compris dans le jeu les 20 derniers, 50 derniers ou bien les 100 derniers mots.

## Technologies Utilisées

- Vite
- React
- Tailwind CSS
- Node.js
- MongoDB (pour le stockage des données)
- Firebase (pour l'authentification et la gestion des utilisateurs Oauth)
- API DeepL (pour les traductions)
- JWT
- Bcryptjs

## Prérequis

Avant de commencer, assurez-vous d'avoir installé ou crée les accès aux outils suivants :

- Node.js (https://nodejs.org/)
- MongoDB (https://www.mongodb.com/)
- Firebase (https://firebase.google.com/)

## Installation

1. Clonez ce dépôt sur votre machine.

   bash:
   git clone https://github.com/votre-utilisateur/StranlateAndLearnEasy.git

2. Installez les dépendances du serveur.

   bash:
   cd server
   npm install

3. Installez les dépendances du client.

   bash:
   cd client
   npm install

4. Configurez les variables d'environnement. Créez un fichier `.env` dans le dossier `server` pour les informations sensibles telles que les clés d'API.

5. Démarrez le serveur.

   bash:
   cd server
   npm start

6. Démarrez le client.

   bash:
   cd client
   npm run dev

7. Accédez à l'application dans votre navigateur à l'adresse http://localhost:5173/.

## Contribuer

Si vous souhaitez contribuer à ce projet, veuillez suivre les étapes suivantes :

1. Forkz le dépôt (https://github.com/votre-utilisateur/StranlateAndLearnEasy/fork)
2. Créez une branche pour votre fonctionnalité (`git checkout -b fonctionnalite/Amelioration`)
3. Commitez vos modifications (`git commit -am 'Ajout d'une nouvelle fonctionnalité'`)
4. Pushz la branche (`git push origin fonctionnalite/Amelioration`)
5. Créez une pull request

## Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

Assurez-vous de suivre la documentation de Vite pour plus d'informations sur la configuration spécifique à Vite : https://vitejs.dev/guide/

## Captures d'écran

à vernir

**Auteur :** LuisMiLR
**Date de création :** 20.02.2024

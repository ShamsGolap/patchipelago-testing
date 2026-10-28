# Patchipelago — site de testeurs

Site statique officiel GolApp Studio, sans CDN, publicité, cookies analytiques ni formulaire transmettant des données.

Le site propose une checklist interactive et la préparation locale d'un rapport de bug. Il ne propose **aucun APK** tant qu'un build signé n'a pas été vérifié. Aucun formulaire ne soumet des données à un backend.

## Publication GitHub Pages

Le code est présent à la fois sur `main` et sur la branche **`gh-pages`**.

**Action de configuration nécessaire, une seule fois par dépôt :**

1. Ouvrir `https://github.com/ShamsGolap/patchipelago-testing/settings/pages` avec le compte propriétaire.
2. Dans **Build and deployment**, sélectionner **Deploy from a branch**.
3. Choisir **gh-pages** et **/(root)**, puis **Save**.
4. Attendre que GitHub termine le déploiement puis visiter `https://shamsgolap.github.io/patchipelago-testing/`.

La connexion GitHub utilisée pour produire les fichiers n'expose pas la commande d'activation GitHub Pages. La présence d'une branche `gh-pages` ne garantit donc **pas** à elle seule que le site soit accessible.

## Maintenance

Les fichiers publics résident à la racine. Pas de framework ni étape de compilation. Pour une modification, faire évoluer `main` puis mettre `gh-pages` sur la même révision. Éviter les GitHub Actions non nécessaires.

© 2026 GolApp Studio.

## Mise à jour Preview 0.9

Le site décrit le laboratoire de test accessible par l'icône éprouvette dans
la version Preview : temps accéléré, crédits fictifs illimités et prérequis
de progression débloqués. Ces fonctionnalités restent absentes de Production.
La page d'accueil a été mise à jour pour afficher la version 0.9 et la
checklist inclut les nouveaux contenus. Aucun APK n'est disponible tant
qu'une compilation réelle ne l'a pas confirmé.

## Patchipelago 0.10

Le portail présente six rencontres optionnelles à choix de récompense,
la carte vectorielle à neuf îles et le tutoriel en 13 étapes. La checklist
locale contient 14 contrôles. Aucun APK n'est annoncé comme téléchargeable
tant qu'un build réel n'a pas été validé. La publication effective de Pages
reste à activer dans Settings → Pages si l'URL publique ne fonctionne pas.

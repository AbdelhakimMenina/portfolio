# Portfolio - Abdelhakim

Portfolio moderne développé avec React, TypeScript, Vite et TailwindCSS.

## 🚀 Technologies utilisées

- **React 19** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Vite** - Build tool rapide
- **TailwindCSS** - Framework CSS utility-first
- **GitHub Actions** - CI/CD pour le déploiement automatique

## 📋 Prérequis

- Node.js (version 20 ou supérieure)
- npm (version 10 ou supérieure)

## 🛠️ Installation

1. **Cloner le repository** (ou utiliser ce dossier local)

2. **Installer les dépendances** :

```bash
npm install
```

## 💻 Commandes disponibles

### Lancer le serveur de développement

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:5173` (ou un autre port si celui-ci est occupé).

### Construire le projet pour la production

```bash
npm run build
```

Cette commande génère un dossier `dist` contenant les fichiers optimisés pour la production.

### Prévisualiser la build de production

```bash
npm run preview
```

Cette commande lance un serveur local pour prévisualiser la build de production.

### Linter le code

```bash
npm run lint
```

## 📁 Structure du projet

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Pipeline GitHub Actions
├── public/                     # Fichiers statiques
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Header.tsx      # En-tête avec navigation et toggle dark mode
│   │   │   └── Footer.tsx      # Pied de page
│   │   ├── sections/
│   │   │   ├── Hero.tsx        # Section d'accueil
│   │   │   ├── About.tsx       # Section à propos
│   │   │   ├── Projects.tsx    # Section projets
│   │   │   ├── Skills.tsx      # Section compétences
│   │   │   └── Contact.tsx     # Section contact
│   │   └── ui/
│   │       ├── Button.tsx      # Composant bouton réutilisable
│   │       ├── Badge.tsx       # Composant badge réutilisable
│   │       └── SectionWrapper.tsx # Wrapper pour animations au scroll
│   ├── hooks/
│   │   ├── useDarkMode.ts      # Hook pour gérer le mode sombre
│   │   ├── useScrollAnimation.ts # Hook pour animations au scroll
│   │   └── useActiveSection.ts # Hook pour détecter la section active
│   ├── types/
│   │   └── index.ts            # Types TypeScript
│   ├── App.tsx                 # Composant principal
│   ├── main.tsx                # Point d'entrée
│   └── index.css               # Styles globaux TailwindCSS
├── index.html                  # Template HTML
├── package.json
├── tailwind.config.js          # Configuration TailwindCSS
├── postcss.config.js           # Configuration PostCSS
├── tsconfig.json               # Configuration TypeScript
└── vite.config.ts              # Configuration Vite
```

## 🎨 Fonctionnalités

- ✨ Design moderne et responsive avec animations au scroll
- 🌙 Mode sombre/clair avec toggle dans le header
- 📱 Menu burger mobile avec navigation fluide
- 🎯 Navigation fluide entre les sections (smooth scroll) avec indication de la section active
- 🎭 Animations d'apparition des sections au scroll (IntersectionObserver)
- 📧 Formulaire de contact avec validation côté client et messages de succès/erreur
- ♿ Accessibilité optimisée (aria-labels, structure HTML sémantique)
- 🔍 SEO optimisé (meta tags, Open Graph, Twitter Card)
- 🚀 Prêt pour le déploiement sur GitHub Pages

## 📦 Déploiement sur GitHub Pages

### 1. Créer un repository GitHub

1. Allez sur [GitHub](https://github.com) et créez un nouveau repository
2. Nommez-le comme vous voulez (par exemple : `portfolio`)
3. **Ne cochez pas** "Initialize this repository with a README" si vous avez déjà du code local

### 2. Configurer le nom du repository dans Vite

**Important** : Avant de pousser le code, modifiez le fichier `vite.config.ts` :

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/NOM_DU_REPO_GITHUB/', // Remplacez par le nom réel de votre repo
})
```

Par exemple, si votre repo s'appelle `portfolio`, la ligne doit être :
```typescript
base: '/portfolio/',
```

### 3. Pousser le code vers GitHub

Si vous n'avez pas encore initialisé git :

```bash
git init
git add .
git commit -m "Initial commit: Portfolio complet"
```

Puis connectez-vous à votre repository GitHub :

```bash
git remote add origin https://github.com/VOTRE_USERNAME/NOM_DU_REPO.git
git branch -M main
git push -u origin main
```

Remplacez :
- `VOTRE_USERNAME` par votre nom d'utilisateur GitHub
- `NOM_DU_REPO` par le nom de votre repository

### 4. Activer GitHub Pages avec GitHub Actions

1. Allez sur votre repository GitHub
2. Cliquez sur l'onglet **Settings** (Paramètres)
3. Dans le menu de gauche, cliquez sur **Pages**
4. Sous **Source**, sélectionnez **GitHub Actions** (et non "Deploy from a branch")
5. Le workflow `.github/workflows/deploy.yml` se déclenchera automatiquement

### 5. Attendre le déploiement

- Allez dans l'onglet **Actions** de votre repository
- Vous verrez le workflow "Deploy to GitHub Pages" en cours d'exécution
- Une fois terminé (icône verte), votre site sera accessible à l'adresse :
  ```
  https://VOTRE_USERNAME.github.io/NOM_DU_REPO/
  ```

### 6. Déploiements automatiques

À chaque fois que vous poussez du code sur la branche `main`, le site sera automatiquement reconstruit et déployé.

## 🔧 Configuration

### Modifier les informations personnelles

- **Nom et titre** : Modifiez `src/components/sections/Hero.tsx`
- **À propos** : Modifiez `src/components/sections/About.tsx`
- **Projets** : Modifiez le tableau `projects` dans `src/components/sections/Projects.tsx`
- **Compétences** : Modifiez le tableau `skills` dans `src/components/sections/Skills.tsx`
- **Contact** : Le formulaire est dans `src/components/sections/Contact.tsx`

### Personnaliser les couleurs

Les couleurs sont définies dans `tailwind.config.js`. Vous pouvez modifier les couleurs du thème `primary` selon vos préférences.

### Activer le formulaire de contact

Le formulaire dispose déjà d'une validation côté client complète. Pour le rendre fonctionnel et envoyer réellement les emails, vous pouvez :

1. Utiliser un service comme [Formspree](https://formspree.io/), [EmailJS](https://www.emailjs.com/), ou [Netlify Forms](https://www.netlify.com/products/forms/)
2. Créer votre propre backend API pour gérer les envois d'email
3. Utiliser un service serverless (Vercel Functions, AWS Lambda, etc.)

Pour l'instant, le formulaire affiche un message de succès après validation.

## 📋 Sections du portfolio

### Hero
Section d'accueil avec présentation rapide, domaines d'expertise et boutons d'action.

### À propos
Présentation détaillée du profil :
- Formation : Master 2 Informatique (Spécialisation Programmation, Sûreté et Sécurité)
- Stack principale et domaines d'expertise
- Projets en cours (simulateur vocal IA, sites web, applications full stack)

### Projets
Quatre projets présentés avec leurs descriptions et technologies :
1. **Simulateur IA Vocal – Finanssor** : Application web avec pipeline STT → LLM → TTS
2. **Sites WordPress & AWS** : Déploiement et sécurisation sur AWS EC2
3. **Dashboard Analytics** : Tableau de bord pour visualisation de données en temps réel
4. **Jeu de Bataille Navale** : Jeu web interactif en React/TypeScript

### Compétences
Organisées en 4 catégories :
- **Frontend** : React, TypeScript, JavaScript, TailwindCSS, HTML/CSS
- **Backend** : Node.js, NestJS, Express, Java, Python, REST APIs
- **DevOps / Cloud** : Docker, GitLab CI/CD, GitHub Actions, Linux, AWS
- **Autres** : SQL, Git, Shell, WordPress

### Contact
Formulaire avec validation complète (nom, email, message) et messages de retour.

## 🐛 Résolution de problèmes

### Le build échoue

- Vérifiez que toutes les dépendances sont installées : `npm install`
- Vérifiez qu'il n'y a pas d'erreurs TypeScript : `npm run build`

### Le déploiement GitHub Pages ne fonctionne pas

- Vérifiez que le `base` dans `vite.config.ts` correspond au nom de votre repo
- Vérifiez que GitHub Pages est configuré avec "GitHub Actions" comme source
- Consultez les logs dans l'onglet **Actions** de votre repository

### Le mode sombre ne fonctionne pas

- Vérifiez que la classe `dark` est bien ajoutée/retirée sur l'élément `<html>` (visible dans les DevTools)
- Vérifiez que `tailwind.config.js` contient `darkMode: 'class'`

## 📝 Licence

Ce projet est libre d'utilisation. N'hésitez pas à le forker et le personnaliser pour votre propre portfolio !

## 👨‍💻 Auteur

Abdelhakim - Développeur Full Stack / DevOps / IA

---

Bon développement ! 🚀


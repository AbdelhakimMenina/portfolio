# Configuration EmailJS pour le formulaire de contact

Le formulaire de contact utilise EmailJS pour envoyer les emails. Voici comment le configurer :

## Étapes de configuration

### 1. Créer un compte EmailJS
- Allez sur https://www.emailjs.com/
- Créez un compte gratuit (100 emails/mois gratuits)

### 2. Configurer un service email
- Dans le dashboard EmailJS, allez dans "Email Services"
- Cliquez sur "Add New Service"
- Choisissez **Gmail** (ou votre fournisseur)
- Connectez le compte **meninaabdelhakim@gmail.com** pour recevoir tous les messages du formulaire
- Notez le **Service ID** (ex: `service_xxxxx`)

### 3. Créer un template d'email
- Allez dans "Email Templates"
- Cliquez sur "Create New Template"
- Dans **To Email**, mettez `{{to_email}}` (le code envoie déjà `meninaabdelhakim@gmail.com`)
- Utilisez ce template :

```
Subject: Nouveau message depuis votre portfolio

Bonjour {{to_name}},

Vous avez reçu un nouveau message depuis votre portfolio :

Nom: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Ce message a été envoyé depuis le formulaire de contact de votre portfolio.
```

- Notez le **Template ID** (ex: `template_xxxxx`)

### 4. Récupérer votre Public Key
- Allez dans "Account" > "General"
- Copiez votre **Public Key** (ex: `xxxxxxxxxxxxx`)

### 5. Configurer les variables d'environnement

Créez un fichier `.env` à la racine du projet avec :

```env
VITE_EMAILJS_SERVICE_ID=votre_service_id
VITE_EMAILJS_TEMPLATE_ID=votre_template_id
VITE_EMAILJS_PUBLIC_KEY=votre_public_key
```

**Important :** Pour GitHub Pages, vous devez aussi configurer ces variables dans les secrets GitHub Actions :
1. Allez dans votre repo GitHub > Settings > Secrets and variables > Actions
2. Ajoutez les trois secrets :
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
3. Mettez à jour le workflow GitHub Actions pour utiliser ces secrets

### 6. Pour GitHub Pages (déploiement)

Si vous déployez sur GitHub Pages, vous devez modifier le workflow `.github/workflows/deploy.yml` pour inclure les variables d'environnement dans le build.

Ajoutez ceci dans la section `build` :

```yaml
- name: Build
  run: npm run build
  env:
    VITE_EMAILJS_SERVICE_ID: ${{ secrets.VITE_EMAILJS_SERVICE_ID }}
    VITE_EMAILJS_TEMPLATE_ID: ${{ secrets.VITE_EMAILJS_TEMPLATE_ID }}
    VITE_EMAILJS_PUBLIC_KEY: ${{ secrets.VITE_EMAILJS_PUBLIC_KEY }}
```

## Test

Une fois configuré, testez le formulaire de contact. Les messages seront reçus sur **meninaabdelhakim@gmail.com** (adresse utilisée dans le code et à connecter dans le service EmailJS).

## Limites du plan gratuit

- 200 emails/mois maximum
- Si vous dépassez, vous devrez passer à un plan payant

## Alternative

Si vous préférez ne pas utiliser EmailJS, vous pouvez :
- Utiliser Formspree (https://formspree.io/)
- Créer votre propre backend avec Node.js et un service d'email (SendGrid, Mailgun, etc.)

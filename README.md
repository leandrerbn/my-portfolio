# 🎨 Portfolio — Léandre

> Portfolio de web designer, réalisé en HTML avec Tailwind CSS.


## 📝 À propos du projet

**Portfolio - Léandre** est un site web statique présentant mon travail de développeur Full Stack. Le design est entièrement construit avec les classes utilitaires de Tailwind CSS.


## 🛠️ Stack Technique

* **Frontend** : HTML5, Tailwind CSS v4 (CLI)
* **Outil de build** : Node.js (version LTS) / NPM

> **Pourquoi Node.js ?**
> Node.js sert à exécuter Tailwind CSS, qui compile les classes présentes dans le HTML en un fichier CSS final. Il ne sert qu'au développement : le site publié reste du HTML/CSS statique.


## 🚀 Guide d'installation (Setup)

Suivez ces étapes pour installer et exécuter le projet sur votre environnement local.

### 1. Prérequis

Assurez-vous que les outils suivants sont installés sur votre machine :

* **Git**
* **Node.js LTS** (installation conseillée avec [nvm](https://github.com/nvm-sh/nvm))

```bash
nvm install --lts
```

---

### 2. Clonage du dépôt

Ouvrez votre terminal et exécutez les commandes suivantes :

```bash
# Cloner le projet
git clone <url-du-depot>

# Accéder au dossier du projet
cd <nom-du-depot>
```

---

### 3. Installation des dépendances

```bash
# Utiliser la version LTS de Node.js
nvm use --lts

# Installer les dépendances
npm install
```

---

## 💻 Lancement en développement

Pour exécuter le projet en mode développement, vous devez ouvrir **deux terminaux** :

1. **Terminal 1 — Compilation de Tailwind CSS en continu** :
```bash
npm run dev
```

2. **Terminal 2 — Serveur local (Live Server)** :
```bash
npx live-server
```

> Vous pouvez aussi ouvrir `index.html` avec l'extension Live Server de votre éditeur à la place du second terminal.

---

## 🌐 Accès à l'application

Une fois les deux processus lancés, le site s'ouvre dans votre navigateur. Si ce n'est pas le cas, rendez-vous sur l'adresse indiquée par Live Server (par défaut : [http://127.0.0.1:8080](http://127.0.0.1:8080)).

---

## 📦 Version de production

Générez le CSS minifié avant la publication :

```bash
npm run build
```
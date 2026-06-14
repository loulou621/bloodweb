# BLOODWEB — site de builds Dead by Daylight

Site communautaire de partage de builds DBD, branché sur **Supabase** (comptes + base de données) avec un vrai login **email + mot de passe + confirmation**. Créé par twitchpogoo621.

Ta base Supabase est déjà connectée (URL + clé publique dans `src/supabaseClient.js`). Tu n'as quasiment rien à configurer.

---

## 1. Tester en local (optionnel)

Il faut Node.js installé (nodejs.org).

```bash
npm install
npm run dev
```

Ouvre l'adresse affichée (ex. http://localhost:5173).
---

## 2. Mettre en ligne sur Vercel

### A. Mettre le code sur GitHub
1. Crée un compte sur github.com, puis un nouveau dépôt (Repository) **bloodweb** (privé ou public).
2. Envoie ce dossier dedans (via GitHub Desktop, c'est le plus simple : "Add existing repository" → glisse le dossier → Publish).

### B. Déployer
1. Crée un compte sur **vercel.com** (connexion avec GitHub).
2. **Add New… > Project** → importe ton dépôt **bloodweb**.
3. Vercel détecte Vite tout seul. Clique **Deploy**.
4. Au bout d'~1 min, tu obtiens un lien `https://bloodweb-xxx.vercel.app` 🩸

> Les clés Supabase sont déjà dans le code, donc pas besoin d'ajouter de variables d'environnement pour que le site marche.

---

## 3. IMPORTANT — régler l'URL de confirmation dans Supabase

Pour que les **mails de confirmation** renvoient vers ton site (et pas vers localhost) :

1. Dans Supabase → **Authentication > URL Configuration**.
2. **Site URL** : mets l'adresse Vercel (ex. `https://bloodweb-xxx.vercel.app`).
3. **Redirect URLs** : ajoute la même adresse.
4. Sauvegarde.

Sans ça, le lien de confirmation des emails pointera au mauvais endroit.

---

## Notes
- Le site démarre **sans builds** : les premiers builds apparaissent quand toi/les joueurs en créez (il faut se connecter).
- Comptes, builds, votes et signalements sont **partagés entre tous les visiteurs** via Supabase.
- La clé `sb_publishable_...` est **publique par nature** (protégée par les règles de sécurité installées via le schéma SQL). Ne partage jamais la clé `service_role`.

const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const USERS_FILE = path.join(__dirname, 'users.json');

app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.post('/create-account', (req, res) => {
    const { username, password } = req.body;
    
    // Lire le fichier des utilisateurs
    fs.readFile(USERS_FILE, (err, data) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Erreur lors de la lecture du fichier des utilisateurs' });
        }

        let users = [];
        if (data.length > 0) {
            users = JSON.parse(data);
        }

        // Vérifier si l'utilisateur existe déjà
        if (users.find(user => user.username === username)) {
            return res.status(400).json({ success: false, message: 'Nom d\'utilisateur déjà pris' });
        }

        // Ajouter le nouvel utilisateur
        users.push({ username, password });

        // Écrire les utilisateurs mis à jour dans le fichier
        fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ success: false, message: 'Erreur lors de la mise à jour du fichier des utilisateurs' });
            }

            res.json({ success: true });
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

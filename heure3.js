function mettreAJourDateEnFrance() {
    // Créer un objet de date avec la date actuelle
    let date = new Date();

    // Définir le fuseau horaire à l'heure de France (GMT+1)
    date.setHours(date.getHours() + 1);

    // Obtenir le numéro du jour et le mois
    let jour = date.getDate();
    let moisActuel = date.toLocaleString('fr-FR', { month: 'long' });

    // Afficher le mois à l'emplacement avec l'ID "month"
    let moisElement = document.getElementById('month');
    moisElement.textContent = moisActuel;

    // Afficher le jour à l'emplacement avec l'ID "day"
    let jourElement = document.getElementById('day');
    jourElement.textContent = jour;
}

// Appeler la fonction pour mettre à jour la date en France en direct
mettreAJourDateEnFrance();

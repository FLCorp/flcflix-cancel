function mettreAJourHeure() {
    let heureElement = document.getElementById('heure');
    let weekElement = document.getElementById('week');
    let date = new Date();

    // Tableaux des noms des jours et des mois en français
    let jours = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    let mois = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

    let jourSemaine = jours[date.getDay()];
    let jour = date.getDate();
    let moisActuel = mois[date.getMonth()];
    let annee = date.getFullYear();

    weekElement.textContent = jourSemaine;
    heureElement.textContent = obtenirHeureEnFrance();
}
setInterval(mettreAJourHeure, 1000);

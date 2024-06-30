function obtenirHeureEnFrance() {
    // Créer un objet de date avec l'heure actuelle
    let date = new Date();

    // Définir le fuseau horaire à l'heure de France (GMT+1)
    date.setHours(date.getHours() + 0);

    // Obtenir les heures, les minutes et les secondes
    let heures = date.getHours();
    let minutes = date.getMinutes();
    let secondes = date.getSeconds();

    // Formater les heures, les minutes et les secondes pour qu'ils aient toujours deux chiffres
    heures = heures < 10 ? '0' + heures : heures;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    secondes = secondes < 10 ? '0' + secondes : secondes;

    // Retourner l'heure au format HH:MM:SS
    return heures + ':' + minutes + ':' + secondes;
}

// Appeler la fonction pour obtenir l'heure en France en direct
let heureEnFrance = obtenirHeureEnFrance();
console.log(heureEnFrance);

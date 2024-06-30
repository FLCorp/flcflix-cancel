document.addEventListener("DOMContentLoaded", function() {
    var favoriteButton = document.getElementById('favorite-btn');
    favoriteButton.addEventListener('click', addToFavorites);

    // Fonction pour ajouter un élément aux favoris
    function addToFavorites() {
        var itemName = 'caca'; // Remplacer par le nom de l'élément
        var favorites = JSON.parse(localStorage.getItem('favorites')) || [];

        if (!favorites.includes(itemName)) {
            favorites.push(itemName);
            localStorage.setItem('favorites', JSON.stringify(favorites));
        }
    }

    // Afficher les favoris sur la page du compte utilisateur
    if (window.location.pathname === 'account.html') {
        var favoritesList = document.getElementById('favorites-list');
        var favorites = JSON.parse(localStorage.getItem('favorites')) || [];

        favorites.forEach(function(itemName) {
            var listItem = document.createElement('li');
            listItem.textContent = itemName;
            favoritesList.appendChild(listItem);
        });
    }
});

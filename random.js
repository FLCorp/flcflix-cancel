document.getElementById('myButton').addEventListener('click', function() {
    // Array d'exemple d'IDs et d'URLs d'images
    var data = [
        { id: 'films/pages/blackadam.html', imageUrl: 'films/posters/black_adam.jpg' },
        { id: 'films/pages/bullettrain.html', imageUrl: 'films/posters/bullet_train_poster.jpg' },
        { id: 'films/pages/meg.html', imageUrl: 'films/posters/meg.jpg' },
        { id: 'films/pages/megtwo.html', imageUrl: 'films/posters/meg_two.jpg' },
        { id: 'films/pages/granturismo.html', imageUrl: 'films/posters/gran_turismo.jpg' },
        { id: 'films/pages/hungergames.html', imageUrl: 'films/posters/hunger_games.jpg' },
        { id: 'films/pages/hungergamestwo.html', imageUrl: 'films/posters/hunger_games_two.jpg' },
        { id: 'films/hungergamesthree.html', imageUrl: 'films/posters/hunger_games_three.jpg' },
        { id: 'films/hungergamesfour.html', imageUrl: 'films/posters/hunger_games_four.jpg' },
        { id: 'films/action.html#johnWick', imageUrl: 'films/posters/john_wick.jpg' },
        { id: 'films/action.html#johnWickTwo', imageUrl: 'films/posters/john_wick_two.jpg' },
        { id: 'films/action.html#johnWickThree', imageUrl: 'films/posters/john_wick_three.jpg' },
        { id: 'films/action.html#johnWickFour', imageUrl: 'films/posters/john_wick_four.jpg' },
        { id: 'films/action.html#mousquetaires', imageUrl: 'films/posters/trois_mousquetaires.jpg' },
        { id: 'films/action.html#mib', imageUrl: 'films/posters/men_in_black_poster.jpg' },
        { id: 'films/action.html#mib', imageUrl: 'films/posters/men_in_black_poster.jpg' },
        { id: 'films/action.html#mibTwo', imageUrl: 'films/posters/men_in_black_ii_poster.jpg' },
        { id: 'films/action.html#mibTwo', imageUrl: 'films/posters/men_in_black_ii_poster.jpg' },
        { id: 'films/action.html#mibThree', imageUrl: 'films/posters/men_in_black_iii_poster.jpg' },
        { id: 'films/action.html#mibThree', imageUrl: 'films/posters/men_in_black_iii_poster.jpg' },
        { id: 'films/action.html#mibFour', imageUrl: 'films/posters/men_in_black_international_poster.jpg' },
        { id: 'films/action.html#mibFour', imageUrl: 'films/posters/men_in_black_international_poster.jpg' },
        { id: 'films/action.html#tenet', imageUrl: 'films/posters/tenet.jpg' },
        { id: 'films/action.html#tetris', imageUrl: 'films/posters/tetris.jfif' },
        { id: 'films/action.html#topGun', imageUrl: 'films/posters/top_gun.jpg' },
        { id: 'films/action.html#topGunMaverick', imageUrl: 'films/posters/top_gun_maverick_poster.jpg' },
        { id: 'films/animation.html#angryBirds', imageUrl: 'films/posters/angry_birds_poster.jpg' },
        { id: 'films/animation.html#angryBirdsTwo', imageUrl: 'films/posters/angry_birds_two_poster.jpg' },
        { id: 'films/animation.html#loud', imageUrl: 'films/posters/loud.jfif' },
        { id: 'films/animation.html#spongebob', imageUrl: 'films/posters/spongebob.jpg' },
        { id: 'films/animation.html#spongebobTwo', imageUrl: 'films/posters/spongebob_two.jpg' },
        { id: 'films/animation.html#spongebobThree', imageUrl: 'films/posters/spongebob_three.jpg' },
        { id: 'films/animation.html#spongebobFour', imageUrl: 'films/posters/spongebob_four.png' },
        { id: 'films/animation.html#buzzLightyear', imageUrl: 'films/posters/buzz_lightyear_poster.jpg' },
        { id: 'films/animation.html#elemental', imageUrl: 'films/posters/elemental.png' },
        { id: 'films/animation.html#hilda', imageUrl: 'films/posters/hilda_mountain_king_poster.jpg' },
        { id: 'films/animation.html#hotelTransylvania', imageUrl: 'films/posters/hotel_transylvania_poster.jpg' },
        { id: 'films/animation.html#hotelTransylvaniaTwo', imageUrl: 'films/posters/hotel_transylvania_two_poster.jpg' },
        { id: 'films/animation.html#hotelTransylvaniaThree', imageUrl: 'films/posters/hotel_transylvania_three_poster.jpg' },
        { id: 'films/animation.html#hotelTransylvaniaFour', imageUrl: 'films/posters/hotel_transylvania_four_poster.jpg' },
        { id: 'films/animation.html#iceAge', imageUrl: 'films/posters/ice_age_poster.jpg' },
        { id: 'films/animation.html#iceAgeTwo', imageUrl: 'films/posters/ice_age_two_poster.jpg' },
        { id: 'films/animation.html#iceAgeThree', imageUrl: 'films/posters/ice_age_three.jpg' },
        { id: 'films/animation.html#iceAgeFour', imageUrl: 'films/posters/ice_age_four_poster.jpg' },
        { id: 'films/animation.html#iceAgeFive', imageUrl: 'films/posters/ice_age_five_poster.jpg' },
        { id: 'films/animation.html#pussInBoots', imageUrl: 'films/posters/puss_in_boots_first.jpg' },
        { id: 'films/animation.html#pussInBootsSpinoff', imageUrl: 'films/posters/puss_in_boots.jpg' },
        { id: 'films/animation.html#pussInBootsTwo', imageUrl: 'films/posters/puss_in_boots_two.jpg' },
    ];

    // Sélection aléatoire d'une entrée depuis le tableau
    var randomIndex = Math.floor(Math.random() * data.length);
    var selectedEntry = data[randomIndex];

    // Construction du lien avec l'image et l'ID
    var link = document.createElement('a');
    link.href = '/' + selectedEntry.id;

    var image = document.createElement('img');
    image.src = selectedEntry.imageUrl;
    image.alt = selectedEntry.id;
    image.width = 100; // Ajustez la taille de l'image selon vos besoins

    link.appendChild(image);

    // Remplacement du contenu de #result par le lien généré
    var resultContainer = document.getElementById('result');
    resultContainer.innerHTML = ''; // Efface le contenu précédent
    resultContainer.appendChild(link);
});

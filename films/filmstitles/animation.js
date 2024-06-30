let filmsTitle = document.getElementById("filmTitleText");
let alerteRouge = document.getElementById("turninRed");
let angryBirds = document.getElementById("angryBirds");
let angryBirds2 = document.getElementById("angryBirdsTwo");
let asterixDomaineDesDieux = document.getElementById("asterixDieux");
let asterixSecretPotionMagique = document.getElementById("asterixPotionMagique");
let bienvenueChezLesLoud = document.getElementById("loud");
let bobLeponge = document.getElementById("spongebob");
let bobLeponge2 = document.getElementById("spongebobTwo");
let bobLeponge3 = document.getElementById("spongebobThree");

alerteRouge.addEventListener("click", function() {
    filmsTitle.textContent = "Alerte Rouge";
});

angryBirds.addEventListener("click", function() {
    filmsTitle.textContent = "Angry Birds";
});

angryBirds2.addEventListener("click", function() {
    filmsTitle.textContent = "Angry Birds: Copains comme Cochons";
});

asterixDomaineDesDieux.addEventListener("click", function() {
    filmsTitle.textContent = "Astérix: Le Domaine des Dieux";
});

asterixSecretPotionMagique.addEventListener("click", function() {
    filmsTitle.textContent = "Astérix: Le Secret de la Potion Magique";
});

bienvenueChezLesLoud.addEventListener("click", function() {
    filmsTitle.textContent = "Bienvenue chez les Loud: Le Film";
});

bobLeponge.addEventListener("click", function() {
    filmsTitle.textContent = "Bob L'Éponge: Le Film";
});

bobLeponge2.addEventListener("click", function() {
    filmsTitle.textContent = "Bob L'Éponge Le Film: Un Héros sors de l'Eau";
});

bobLeponge3.addEventListener("click", function() {
    filmsTitle.textContent = "Bob L'Éponge Le Film: Éponge en Eaux Troubles";
});
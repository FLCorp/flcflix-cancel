let s9e1 = document.getElementById('s9e1');
let s9e2 = document.getElementById('s9e2');
let s9e3 = document.getElementById('s9e3');
let s9e4 = document.getElementById('s9e4');
let s9e5 = document.getElementById('s9e5');
let s9e6 = document.getElementById('s9e6');
let s9e7 = document.getElementById('s9e7');
let s9e8 = document.getElementById('s9e8');
let s9e9 = document.getElementById('s9e9');
let s9e10 = document.getElementById('s9e10');
let s9e11 = document.getElementById('s9e11');
let s9e12 = document.getElementById('s9e12');
let s9e13 = document.getElementById('s9e13');

s9e1.addEventListener('click', function() {
    modifierTitre("Saison 9 - Episode 1");
});
s9e2.addEventListener('click', function() {
    modifierTitre("Saison 9 - Episode 2");
});
s9e3.addEventListener('click', function() {
    modifierTitre("Saison 9 - Episode 3");
});
s9e4.addEventListener('click', function() {
    modifierTitre("Saison 9 - Episode 4");
});
s9e5.addEventListener('click', function() {
    modifierTitre("Saison 9 - Episode 5");
});
s9e6.addEventListener('click', function() {
    modifierTitre("Saison 9 - Episode 6");
});
s9e7.addEventListener('click', function() {
    modifierTitre("Saison 9 - Episode 7");
});
s9e8.addEventListener('click', function() {
    modifierTitre("Saison 9 - Episode 8");
});
s9e9.addEventListener('click', function() {
    modifierTitre("Saison 9 - Episode 9");
});
s9e10.addEventListener('click', function() {
    modifierTitre("Saison 9 - Episode 10");
});
s9e11.addEventListener('click', function() {
    modifierTitre("Saison 9 - Episode 11");
});
s9e12.addEventListener('click', function() {
    modifierTitre("Saison 9 - Episode 12");
});
s9e13.addEventListener('click', function() {
    modifierTitre("Saison 9 - Episode 13");
});


function modifierTitre(nouveauTitre) {
    episodesTitle.textContent = nouveauTitre;
}
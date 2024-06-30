let s11e1 = document.getElementById('s11e1');
let s11e2 = document.getElementById('s11e2');
let s11e3 = document.getElementById('s11e3');
let s11e4 = document.getElementById('s11e4');
let s11e5 = document.getElementById('s11e5');
let s11e6 = document.getElementById('s11e6');
let s11e7 = document.getElementById('s11e7');
let s11e8 = document.getElementById('s11e8');
let s11e9 = document.getElementById('s11e9');
let s11e10 = document.getElementById('s11e10');
let s11e11 = document.getElementById('s11e11');
let s11e12 = document.getElementById('s11e12');
let s11e13 = document.getElementById('s11e13');

s11e1.addEventListener('click', function() {
    modifierTitre("Saison 11 - Episode 1");
});
s11e2.addEventListener('click', function() {
    modifierTitre("Saison 11 - Episode 2");
});
s11e3.addEventListener('click', function() {
    modifierTitre("Saison 11 - Episode 3");
});
s11e4.addEventListener('click', function() {
    modifierTitre("Saison 11 - Episode 4");
});
s11e5.addEventListener('click', function() {
    modifierTitre("Saison 11 - Episode 5");
});
s11e6.addEventListener('click', function() {
    modifierTitre("Saison 11 - Episode 6");
});
s11e7.addEventListener('click', function() {
    modifierTitre("Saison 11 - Episode 7");
});
s11e8.addEventListener('click', function() {
    modifierTitre("Saison 11 - Episode 8");
});
s11e9.addEventListener('click', function() {
    modifierTitre("Saison 11 - Episode 9");
});
s11e10.addEventListener('click', function() {
    modifierTitre("Saison 11 - Episode 10");
});
s11e11.addEventListener('click', function() {
    modifierTitre("Saison 11 - Episode 11");
});
s11e12.addEventListener('click', function() {
    modifierTitre("Saison 11 - Episode 12");
});
s11e13.addEventListener('click', function() {
    modifierTitre("Saison 11 - Episode 13");
});


function modifierTitre(nouveauTitre) {
    episodesTitle.textContent = nouveauTitre;
}
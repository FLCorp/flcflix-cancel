let s12e1 = document.getElementById('s12e1');
let s12e2 = document.getElementById('s12e2');
let s12e3 = document.getElementById('s12e3');
let s12e4 = document.getElementById('s12e4');
let s12e5 = document.getElementById('s12e5');
let s12e6 = document.getElementById('s12e6');
let s12e7 = document.getElementById('s12e7');
let s12e8 = document.getElementById('s12e8');
let s12e9 = document.getElementById('s12e9');
let s12e10 = document.getElementById('s12e10');
let s12e11 = document.getElementById('s12e11');
let s12e12 = document.getElementById('s12e12');
let s12e13 = document.getElementById('s12e13');

s12e1.addEventListener('click', function() {
    modifierTitre("Saison 12 - Episode 1");
});
s12e2.addEventListener('click', function() {
    modifierTitre("Saison 12 - Episode 2");
});
s12e3.addEventListener('click', function() {
    modifierTitre("Saison 12 - Episode 3");
});
s12e4.addEventListener('click', function() {
    modifierTitre("Saison 12 - Episode 4");
});
s12e5.addEventListener('click', function() {
    modifierTitre("Saison 12 - Episode 5");
});
s12e6.addEventListener('click', function() {
    modifierTitre("Saison 12 - Episode 6");
});
s12e7.addEventListener('click', function() {
    modifierTitre("Saison 12 - Episode 7");
});
s12e8.addEventListener('click', function() {
    modifierTitre("Saison 12 - Episode 8");
});
s12e9.addEventListener('click', function() {
    modifierTitre("Saison 12 - Episode 9");
});
s12e10.addEventListener('click', function() {
    modifierTitre("Saison 12 - Episode 10");
});
s12e11.addEventListener('click', function() {
    modifierTitre("Saison 12 - Episode 11");
});
s12e12.addEventListener('click', function() {
    modifierTitre("Saison 12 - Episode 12");
});
s12e13.addEventListener('click', function() {
    modifierTitre("Saison 12 - Episode 13");
});


function modifierTitre(nouveauTitre) {
    episodesTitle.textContent = nouveauTitre;
}
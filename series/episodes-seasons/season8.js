let s8e1 = document.getElementById('s8e1');
let s8e2 = document.getElementById('s8e2');
let s8e3 = document.getElementById('s8e3');
let s8e4 = document.getElementById('s8e4');
let s8e5 = document.getElementById('s8e5');
let s8e6 = document.getElementById('s8e6');
let s8e7 = document.getElementById('s8e7');
let s8e8 = document.getElementById('s8e8');
let s8e9 = document.getElementById('s8e9');
let s8e10 = document.getElementById('s8e10');
let s8e11 = document.getElementById('s8e11');
let s8e12 = document.getElementById('s8e12');
let s8e13 = document.getElementById('s8e13');

s8e1.addEventListener('click', function() {
    modifierTitre("Saison 8 - Episode 1");
});
s8e2.addEventListener('click', function() {
    modifierTitre("Saison 8 - Episode 2");
});
s8e3.addEventListener('click', function() {
    modifierTitre("Saison 8 - Episode 3");
});
s8e4.addEventListener('click', function() {
    modifierTitre("Saison 8 - Episode 4");
});
s8e5.addEventListener('click', function() {
    modifierTitre("Saison 8 - Episode 5");
});
s8e6.addEventListener('click', function() {
    modifierTitre("Saison 8 - Episode 6");
});
s8e7.addEventListener('click', function() {
    modifierTitre("Saison 8 - Episode 7");
});
s8e8.addEventListener('click', function() {
    modifierTitre("Saison 8 - Episode 8");
});
s8e9.addEventListener('click', function() {
    modifierTitre("Saison 8 - Episode 9");
});
s8e10.addEventListener('click', function() {
    modifierTitre("Saison 8 - Episode 10");
});
s8e11.addEventListener('click', function() {
    modifierTitre("Saison 8 - Episode 11");
});
s8e12.addEventListener('click', function() {
    modifierTitre("Saison 8 - Episode 12");
});
s8e13.addEventListener('click', function() {
    modifierTitre("Saison 8 - Episode 13");
});


function modifierTitre(nouveauTitre) {
    episodesTitle.textContent = nouveauTitre;
}
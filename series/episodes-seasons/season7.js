let s7e1 = document.getElementById('s7e1');
let s7e2 = document.getElementById('s7e2');
let s7e3 = document.getElementById('s7e3');
let s7e4 = document.getElementById('s7e4');
let s7e5 = document.getElementById('s7e5');
let s7e6 = document.getElementById('s7e6');
let s7e7 = document.getElementById('s7e7');
let s7e8 = document.getElementById('s7e8');
let s7e9 = document.getElementById('s7e9');
let s7e10 = document.getElementById('s7e10');
let s7e11 = document.getElementById('s7e11');
let s7e12 = document.getElementById('s7e12');
let s7e13 = document.getElementById('s7e13');

s7e1.addEventListener('click', function() {
    modifierTitre("Saison 7 - Episode 1");
});
s7e2.addEventListener('click', function() {
    modifierTitre("Saison 7 - Episode 2");
});
s7e3.addEventListener('click', function() {
    modifierTitre("Saison 7 - Episode 3");
});
s7e4.addEventListener('click', function() {
    modifierTitre("Saison 7 - Episode 4");
});
s7e5.addEventListener('click', function() {
    modifierTitre("Saison 7 - Episode 5");
});
s7e6.addEventListener('click', function() {
    modifierTitre("Saison 7 - Episode 6");
});
s7e7.addEventListener('click', function() {
    modifierTitre("Saison 7 - Episode 7");
});
s7e8.addEventListener('click', function() {
    modifierTitre("Saison 7 - Episode 8");
});
s7e9.addEventListener('click', function() {
    modifierTitre("Saison 7 - Episode 9");
});
s7e10.addEventListener('click', function() {
    modifierTitre("Saison 7 - Episode 10");
});
s7e11.addEventListener('click', function() {
    modifierTitre("Saison 7 - Episode 11");
});
s7e12.addEventListener('click', function() {
    modifierTitre("Saison 7 - Episode 12");
});
s7e13.addEventListener('click', function() {
    modifierTitre("Saison 7 - Episode 13");
});


function modifierTitre(nouveauTitre) {
    episodesTitle.textContent = nouveauTitre;
}
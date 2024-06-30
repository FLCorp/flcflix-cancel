let s6e1 = document.getElementById('s6e1');
let s6e2 = document.getElementById('s6e2');
let s6e3 = document.getElementById('s6e3');
let s6e4 = document.getElementById('s6e4');
let s6e5 = document.getElementById('s6e5');
let s6e6 = document.getElementById('s6e6');
let s6e7 = document.getElementById('s6e7');
let s6e8 = document.getElementById('s6e8');
let s6e9 = document.getElementById('s6e9');
let s6e10 = document.getElementById('s6e10');
let s6e11 = document.getElementById('s6e11');
let s6e12 = document.getElementById('s6e12');
let s6e13 = document.getElementById('s6e13');

s6e1.addEventListener('click', function() {
    modifierTitre("Saison 6 - Episode 1");
});
s6e2.addEventListener('click', function() {
    modifierTitre("Saison 6 - Episode 2");
});
s6e3.addEventListener('click', function() {
    modifierTitre("Saison 6 - Episode 3");
});
s6e4.addEventListener('click', function() {
    modifierTitre("Saison 6 - Episode 4");
});
s6e5.addEventListener('click', function() {
    modifierTitre("Saison 6 - Episode 5");
});
s6e6.addEventListener('click', function() {
    modifierTitre("Saison 6 - Episode 6");
});
s6e7.addEventListener('click', function() {
    modifierTitre("Saison 6 - Episode 7");
});
s6e8.addEventListener('click', function() {
    modifierTitre("Saison 6 - Episode 8");
});
s6e9.addEventListener('click', function() {
    modifierTitre("Saison 6 - Episode 9");
});
s6e10.addEventListener('click', function() {
    modifierTitre("Saison 6 - Episode 10");
});
s6e11.addEventListener('click', function() {
    modifierTitre("Saison 6 - Episode 11");
});
s6e12.addEventListener('click', function() {
    modifierTitre("Saison 6 - Episode 12");
});
s6e13.addEventListener('click', function() {
    modifierTitre("Saison 6 - Episode 13");
});


function modifierTitre(nouveauTitre) {
    episodesTitle.textContent = nouveauTitre;
}
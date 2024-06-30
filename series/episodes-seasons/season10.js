let s10e1 = document.getElementById('s10e1');
let s10e2 = document.getElementById('s10e2');
let s10e3 = document.getElementById('s10e3');
let s10e4 = document.getElementById('s10e4');
let s10e5 = document.getElementById('s10e5');
let s10e6 = document.getElementById('s10e6');
let s10e7 = document.getElementById('s10e7');
let s10e8 = document.getElementById('s10e8');
let s10e9 = document.getElementById('s10e9');
let s10e10 = document.getElementById('s10e10');
let s10e11 = document.getElementById('s10e11');
let s10e12 = document.getElementById('s10e12');
let s10e13 = document.getElementById('s10e13');

s10e1.addEventListener('click', function() {
    modifierTitre("Saison 10 - Episode 1");
});
s10e2.addEventListener('click', function() {
    modifierTitre("Saison 10 - Episode 2");
});
s10e3.addEventListener('click', function() {
    modifierTitre("Saison 10 - Episode 3");
});
s10e4.addEventListener('click', function() {
    modifierTitre("Saison 10 - Episode 4");
});
s10e5.addEventListener('click', function() {
    modifierTitre("Saison 10 - Episode 5");
});
s10e6.addEventListener('click', function() {
    modifierTitre("Saison 10 - Episode 6");
});
s10e7.addEventListener('click', function() {
    modifierTitre("Saison 10 - Episode 7");
});
s10e8.addEventListener('click', function() {
    modifierTitre("Saison 10 - Episode 8");
});
s10e9.addEventListener('click', function() {
    modifierTitre("Saison 10 - Episode 9");
});
s10e10.addEventListener('click', function() {
    modifierTitre("Saison 10 - Episode 10");
});
s10e11.addEventListener('click', function() {
    modifierTitre("Saison 10 - Episode 11");
});
s10e12.addEventListener('click', function() {
    modifierTitre("Saison 10 - Episode 12");
});
s10e13.addEventListener('click', function() {
    modifierTitre("Saison 10 - Episode 13");
});


function modifierTitre(nouveauTitre) {
    episodesTitle.textContent = nouveauTitre;
}
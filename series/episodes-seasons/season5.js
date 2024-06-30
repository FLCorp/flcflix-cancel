let s5e1 = document.getElementById('s5e1');
let s5e2 = document.getElementById('s5e2');
let s5e3 = document.getElementById('s5e3');
let s5e4 = document.getElementById('s5e4');
let s5e5 = document.getElementById('s5e5');
let s5e6 = document.getElementById('s5e6');
let s5e7 = document.getElementById('s5e7');
let s5e8 = document.getElementById('s5e8');
let s5e9 = document.getElementById('s5e9');
let s5e10 = document.getElementById('s5e10');
let s5e11 = document.getElementById('s5e11');
let s5e12 = document.getElementById('s5e12');
let s5e13 = document.getElementById('s5e13');

s5e1.addEventListener('click', function() {
    modifierTitre("Saison 5 - Episode 1");
});
s5e2.addEventListener('click', function() {
    modifierTitre("Saison 5 - Episode 2");
});
s5e3.addEventListener('click', function() {
    modifierTitre("Saison 5 - Episode 3");
});
s5e4.addEventListener('click', function() {
    modifierTitre("Saison 5 - Episode 4");
});
s5e5.addEventListener('click', function() {
    modifierTitre("Saison 5 - Episode 5");
});
s5e6.addEventListener('click', function() {
    modifierTitre("Saison 5 - Episode 6");
});
s5e7.addEventListener('click', function() {
    modifierTitre("Saison 5 - Episode 7");
});
s5e8.addEventListener('click', function() {
    modifierTitre("Saison 5 - Episode 8");
});
s5e9.addEventListener('click', function() {
    modifierTitre("Saison 5 - Episode 9");
});
s5e10.addEventListener('click', function() {
    modifierTitre("Saison 5 - Episode 10");
});
s5e11.addEventListener('click', function() {
    modifierTitre("Saison 5 - Episode 11");
});
s5e12.addEventListener('click', function() {
    modifierTitre("Saison 5 - Episode 12");
});
s5e13.addEventListener('click', function() {
    modifierTitre("Saison 5 - Episode 13");
});


function modifierTitre(nouveauTitre) {
    episodesTitle.textContent = nouveauTitre;
}
let s4e1 = document.getElementById('s4e1');
let s4e2 = document.getElementById('s4e2');
let s4e3 = document.getElementById('s4e3');
let s4e4 = document.getElementById('s4e4');
let s4e5 = document.getElementById('s4e5');
let s4e6 = document.getElementById('s4e6');
let s4e7 = document.getElementById('s4e7');
let s4e8 = document.getElementById('s4e8');
let s4e9 = document.getElementById('s4e9');
let s4e10 = document.getElementById('s4e10');
let s4e11 = document.getElementById('s4e11');
let s4e12 = document.getElementById('s4e12');
let s4e13 = document.getElementById('s4e13');

s4e1.addEventListener('click', function() {
    modifierTitre("Saison 4 - Episode 1");
});
s4e2.addEventListener('click', function() {
    modifierTitre("Saison 4 - Episode 2");
});
s4e3.addEventListener('click', function() {
    modifierTitre("Saison 4 - Episode 3");
});
s4e4.addEventListener('click', function() {
    modifierTitre("Saison 4 - Episode 4");
});
s4e5.addEventListener('click', function() {
    modifierTitre("Saison 4 - Episode 5");
});
s4e6.addEventListener('click', function() {
    modifierTitre("Saison 4 - Episode 6");
});
s4e7.addEventListener('click', function() {
    modifierTitre("Saison 4 - Episode 7");
});
s4e8.addEventListener('click', function() {
    modifierTitre("Saison 4 - Episode 8");
});
s4e9.addEventListener('click', function() {
    modifierTitre("Saison 4 - Episode 9");
});
s4e10.addEventListener('click', function() {
    modifierTitre("Saison 4 - Episode 10");
});
s4e11.addEventListener('click', function() {
    modifierTitre("Saison 4 - Episode 11");
});
s4e12.addEventListener('click', function() {
    modifierTitre("Saison 4 - Episode 12");
});
s4e13.addEventListener('click', function() {
    modifierTitre("Saison 4 - Episode 13");
});


function modifierTitre(nouveauTitre) {
    episodesTitle.textContent = nouveauTitre;
}
let s3e1 = document.getElementById('s3e1');
let s3e2 = document.getElementById('s3e2');
let s3e3 = document.getElementById('s3e3');
let s3e4 = document.getElementById('s3e4');
let s3e5 = document.getElementById('s3e5');
let s3e6 = document.getElementById('s3e6');
let s3e7 = document.getElementById('s3e7');
let s3e8 = document.getElementById('s3e8');
let s3e9 = document.getElementById('s3e9');
let s3e10 = document.getElementById('s3e10');
let s3e11 = document.getElementById('s3e11');
let s3e12 = document.getElementById('s3e12');
let s3e13 = document.getElementById('s3e13');

s3e1.addEventListener('click', function() {
    modifierTitre("Saison 3 - Episode 1");
});
s3e2.addEventListener('click', function() {
    modifierTitre("Saison 3 - Episode 2");
});
s3e3.addEventListener('click', function() {
    modifierTitre("Saison 3 - Episode 3");
});
s3e4.addEventListener('click', function() {
    modifierTitre("Saison 3 - Episode 4");
});
s3e5.addEventListener('click', function() {
    modifierTitre("Saison 3 - Episode 5");
});
s3e6.addEventListener('click', function() {
    modifierTitre("Saison 3 - Episode 6");
});
s3e7.addEventListener('click', function() {
    modifierTitre("Saison 3 - Episode 7");
});
s3e8.addEventListener('click', function() {
    modifierTitre("Saison 3 - Episode 8");
});
s3e9.addEventListener('click', function() {
    modifierTitre("Saison 3 - Episode 9");
});
s3e10.addEventListener('click', function() {
    modifierTitre("Saison 3 - Episode 10");
});
s3e11.addEventListener('click', function() {
    modifierTitre("Saison 3 - Episode 11");
});
s3e12.addEventListener('click', function() {
    modifierTitre("Saison 3 - Episode 12");
});
s3e13.addEventListener('click', function() {
    modifierTitre("Saison 3 - Episode 13");
});


function modifierTitre(nouveauTitre) {
    episodesTitle.textContent = nouveauTitre;
}
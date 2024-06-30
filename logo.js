let filmsTitle = document.getElementById('filmsTitle');
let seriesTitle = document.getElementById('seriesTitle');
let documentairesTitle = document.getElementById('documentairesTitle');

filmsTitle.addEventListener("click", function () {
    let filmsSrc = filmsTitle.getAttribute("src");
    if (filmsSrc === "img/FLC-Flix_4-Films-logo_v1.png") {
        filmsTitle.setAttribute("src", "img/FLC-Flix_3-Films-logo_v1.png");
    } else {
        filmsTitle.setAttribute("src", "img/FLC-Flix_4-Films-logo_v1.png");
    }
    if (filmsSrc === "img/FLC-Flix_3-Films-logo_v1.png") {
        filmsTitle.setAttribute("src", "img/FLC-Flix_4-Films-logo_v1.png");
    } else {
        filmsTitle.setAttribute("src", "img/FLC-Flix_3-Films-logo_v1.png");
    }
});

seriesTitle.addEventListener("click", function () {
    let seriesSrc = seriesTitle.getAttribute("src");
    if (seriesSrc === "img/FLC-Flix_4-Series-logo_v1.png") {
        seriesTitle.setAttribute("src", "img/FLC-Flix_3-Series-logo_v1.png");
    } else {
        seriesTitle.setAttribute("src", "img/FLC-Flix_4-Series-logo_v1.png");
    }
    if (seriesSrc === "img/FLC-Flix_3-Series-logo_v1.png") {
        seriesTitle.setAttribute("src", "img/FLC-Flix_4-Series-logo_v1.png");
    } else {
        seriesTitle.setAttribute("src", "img/FLC-Flix_3-Series-logo_v1.png");
    }
});

documentairesTitle.addEventListener("click", function () {
    let documentairesSrc = documentairesTitle.getAttribute("src");
    if (documentairesSrc === "img/FLC-Flix_4-Documentaires-logo_v1.png") {
        documentairesTitle.setAttribute("src", "img/FLC-Flix_3-Documentaires-logo_v1.png");
    } else {
        documentairesTitle.setAttribute("src", "img/FLC-Flix_4-Documentaires-logo_v1.png");
    }
    if (documentairesSrc === "img/FLC-Flix_3-Documentaires-logo_v1.png") {
        documentairesTitle.setAttribute("src", "img/FLC-Flix_4-Documentaires-logo_v1.png");
    } else {
        documentairesTitle.setAttribute("src", "img/FLC-Flix_3-Documentaires-logo_v1.png");
    }
});

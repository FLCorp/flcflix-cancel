let seasonsLogo = document.getElementById('seasonsLogo');
let season1 = document.getElementById('Season1');
let season1Div = document.querySelector('.season1');
let season2 = document.getElementById('Season2');
let season2Div = document.querySelector('.season2');
let season3 = document.getElementById('Season3');
let season3Div = document.querySelector('.season3');
let season4 = document.getElementById('Season4');
let season4Div = document.querySelector('.season4');
let season5 = document.getElementById('Season5');
let season5Div = document.querySelector('.season5');
let season6 = document.getElementById('Season6');
let season6Div = document.querySelector('.season6');
let season7 = document.getElementById('Season7');
let season7Div = document.querySelector('.season7');
let season8 = document.getElementById('Season8');
let season8Div = document.querySelector('.season8');
let season9 = document.getElementById('Season9');
let season9Div = document.querySelector('.season9');
let season10 = document.getElementById('Season10');
let season10Div = document.querySelector('.season10');
let season11 = document.getElementById('Season11');
let season11Div = document.querySelector('.season11');
let season12 = document.getElementById('Season12');
let season12Div = document.querySelector('.season12');

season1.addEventListener('click', function() {
    let seasonsSrc = seasonsLogo.getAttribute("src");
    if (seasonsSrc === "img/Saison2.png", "img/Saison3.png", "img/Saison4.png", "img/Saison5.png", "img/Saison6.png", "img/Saison7.png", "img/Saison8.png", "img/Saison9.png", "img/Saison10.png", "img/Saison11.png", "img/Saison12.png") {
        seasonsLogo.setAttribute("src", "img/Saison1.png");

        season1Div.style.display = "inherit";
        season2Div.style.display = "none";
        season3Div.style.display = "none";
        season4Div.style.display = "none";
        season5Div.style.display = "none";
        season6Div.style.display = "none";
        season7Div.style.display = "none";
        season8Div.style.display = "none";
        season9Div.style.display = "none";
        season10Div.style.display = "none";
        season11Div.style.display = "none";
        season12Div.style.display = "none";
    }
});

season2.addEventListener('click', function() {
    let seasonsSrc = seasonsLogo.getAttribute("src");
    if (seasonsSrc === "img/Saison1.png", "img/Saison3.png", "img/Saison4.png", "img/Saison5.png", "img/Saison6.png", "img/Saison7.png", "img/Saison8.png", "img/Saison9.png", "img/Saison10.png", "img/Saison11.png", "img/Saison12.png") {
        seasonsLogo.setAttribute("src", "img/Saison2.png");

        season2Div.style.display = "inherit";
        season1Div.style.display = "none";
        season3Div.style.display = "none";
        season4Div.style.display = "none";
        season5Div.style.display = "none";
        season6Div.style.display = "none";
        season7Div.style.display = "none";
        season8Div.style.display = "none";
        season9Div.style.display = "none";
        season10Div.style.display = "none";
        season11Div.style.display = "none";
        season12Div.style.display = "none";
    }
});

season3.addEventListener('click', function() {
    let seasonsSrc = seasonsLogo.getAttribute("src");
    if (seasonsSrc === "img/Saison1.png", "img/Saison2.png", "img/Saison4.png", "img/Saison5.png", "img/Saison6.png", "img/Saison7.png", "img/Saison8.png", "img/Saison9.png", "img/Saison10.png", "img/Saison11.png", "img/Saison12.png") {
        seasonsLogo.setAttribute("src", "img/Saison3.png");

        season3Div.style.display = "inherit";
        season1Div.style.display = "none";
        season2Div.style.display = "none";
        season4Div.style.display = "none";
        season5Div.style.display = "none";
        season6Div.style.display = "none";
        season7Div.style.display = "none";
        season8Div.style.display = "none";
        season9Div.style.display = "none";
        season10Div.style.display = "none";
        season11Div.style.display = "none";
        season12Div.style.display = "none";
    }
});

season4.addEventListener('click', function() {
    let seasonsSrc = seasonsLogo.getAttribute("src");
    if (seasonsSrc === "img/Saison1.png", "img/Saison2.png", "img/Saison3.png", "img/Saison5.png", "img/Saison6.png", "img/Saison7.png", "img/Saison8.png", "img/Saison9.png", "img/Saison10.png", "img/Saison11.png", "img/Saison12.png") {
        seasonsLogo.setAttribute("src", "img/Saison4.png");

        season4Div.style.display = "inherit";
        season1Div.style.display = "none";
        season2Div.style.display = "none";
        season3Div.style.display = "none";
        season5Div.style.display = "none";
        season6Div.style.display = "none";
        season7Div.style.display = "none";
        season8Div.style.display = "none";
        season9Div.style.display = "none";
        season10Div.style.display = "none";
        season11Div.style.display = "none";
        season12Div.style.display = "none";
    }
});

season5.addEventListener('click', function() {
    let seasonsSrc = seasonsLogo.getAttribute("src");
    if (seasonsSrc === "img/Saison1.png", "img/Saison2.png", "img/Saison3.png", "img/Saison4.png", "img/Saison6.png", "img/Saison7.png", "img/Saison8.png", "img/Saison9.png", "img/Saison10.png", "img/Saison11.png", "img/Saison12.png") {
        seasonsLogo.setAttribute("src", "img/Saison5.png");

        season5Div.style.display = "inherit";
        season1Div.style.display = "none";
        season2Div.style.display = "none";
        season3Div.style.display = "none";
        season4Div.style.display = "none";
        season6Div.style.display = "none";
        season7Div.style.display = "none";
        season8Div.style.display = "none";
        season9Div.style.display = "none";
        season10Div.style.display = "none";
        season11Div.style.display = "none";
        season12Div.style.display = "none";
    }
});

season6.addEventListener('click', function() {
    let seasonsSrc = seasonsLogo.getAttribute("src");
    if (seasonsSrc === "img/Saison1.png", "img/Saison2.png", "img/Saison3.png", "img/Saison4.png", "img/Saison5.png", "img/Saison7.png", "img/Saison8.png", "img/Saison9.png", "img/Saison10.png", "img/Saison11.png", "img/Saison12.png") {
        seasonsLogo.setAttribute("src", "img/Saison6.png");

        season6Div.style.display = "inherit";
        season1Div.style.display = "none";
        season2Div.style.display = "none";
        season3Div.style.display = "none";
        season4Div.style.display = "none";
        season5Div.style.display = "none";
        season7Div.style.display = "none";
        season8Div.style.display = "none";
        season9Div.style.display = "none";
        season10Div.style.display = "none";
        season11Div.style.display = "none";
        season12Div.style.display = "none";
    }
});

season7.addEventListener('click', function() {
    let seasonsSrc = seasonsLogo.getAttribute("src");
    if (seasonsSrc === "img/Saison1.png", "img/Saison2.png", "img/Saison3.png", "img/Saison4.png", "img/Saison5.png", "img/Saison6.png", "img/Saison8.png", "img/Saison9.png", "img/Saison10.png", "img/Saison11.png", "img/Saison12.png") {
        seasonsLogo.setAttribute("src", "img/Saison7.png");

        season7Div.style.display = "inherit";
        season1Div.style.display = "none";
        season2Div.style.display = "none";
        season3Div.style.display = "none";
        season4Div.style.display = "none";
        season5Div.style.display = "none";
        season6Div.style.display = "none";
        season8Div.style.display = "none";
        season9Div.style.display = "none";
        season10Div.style.display = "none";
        season11Div.style.display = "none";
        season12Div.style.display = "none";
    }
});

season9.addEventListener('click', function() {
    let seasonsSrc = seasonsLogo.getAttribute("src");
    if (seasonsSrc === "img/Saison1.png", "img/Saison2.png", "img/Saison3.png", "img/Saison4.png", "img/Saison5.png", "img/Saison6.png", "img/Saison7.png", "img/Saison8.png", "img/Saison10.png", "img/Saison11.png", "img/Saison12.png") {
        seasonsLogo.setAttribute("src", "img/Saison9.png");

        season9Div.style.display = "inherit";
        season1Div.style.display = "none";
        season2Div.style.display = "none";
        season3Div.style.display = "none";
        season4Div.style.display = "none";
        season5Div.style.display = "none";
        season6Div.style.display = "none";
        season7Div.style.display = "none";
        season8Div.style.display = "none";
        season10Div.style.display = "none";
        season11Div.style.display = "none";
        season12Div.style.display = "none";
    }
});

season10.addEventListener('click', function() {
    let seasonsSrc = seasonsLogo.getAttribute("src");
    if (seasonsSrc === "img/Saison1.png", "img/Saison2.png", "img/Saison3.png", "img/Saison4.png", "img/Saison5.png", "img/Saison6.png", "img/Saison7.png", "img/Saison8.png", "img/Saison9.png", "img/Saison11.png", "img/Saison12.png") {
        seasonsLogo.setAttribute("src", "img/Saison10.png");

        season10Div.style.display = "inherit";
        season1Div.style.display = "none";
        season2Div.style.display = "none";
        season3Div.style.display = "none";
        season4Div.style.display = "none";
        season5Div.style.display = "none";
        season6Div.style.display = "none";
        season7Div.style.display = "none";
        season8Div.style.display = "none";
        season9Div.style.display = "none";
        season11Div.style.display = "none";
        season12Div.style.display = "none";
    }
});

season11.addEventListener('click', function() {
    let seasonsSrc = seasonsLogo.getAttribute("src");
    if (seasonsSrc === "img/Saison1.png", "img/Saison2.png", "img/Saison3.png", "img/Saison4.png", "img/Saison5.png", "img/Saison6.png", "img/Saison7.png", "img/Saison8.png", "img/Saison9.png", "img/Saison10.png", "img/Saison12.png") {
        seasonsLogo.setAttribute("src", "img/Saison11.png");

        season11Div.style.display = "inherit";
        season1Div.style.display = "none";
        season2Div.style.display = "none";
        season3Div.style.display = "none";
        season4Div.style.display = "none";
        season5Div.style.display = "none";
        season6Div.style.display = "none";
        season7Div.style.display = "none";
        season8Div.style.display = "none";
        season9Div.style.display = "none";
        season10Div.style.display = "none";
        season12Div.style.display = "none";
    }
});

season12.addEventListener('click', function() {
    let seasonsSrc = seasonsLogo.getAttribute("src");
    if (seasonsSrc === "img/Saison1.png", "img/Saison2.png", "img/Saison3.png", "img/Saison4.png", "img/Saison5.png", "img/Saison6.png", "img/Saison7.png", "img/Saison8.png", "img/Saison9.png", "img/Saison10.png", "img/Saison11.png") {
        seasonsLogo.setAttribute("src", "img/Saison12.png");

        season12Div.style.display = "inherit";
        season1Div.style.display = "none";
        season2Div.style.display = "none";
        season3Div.style.display = "none";
        season4Div.style.display = "none";
        season5Div.style.display = "none";
        season6Div.style.display = "none";
        season7Div.style.display = "none";
        season8Div.style.display = "none";
        season9Div.style.display = "none";
        season10Div.style.display = "none";
        season11Div.style.display = "none";
    }
});
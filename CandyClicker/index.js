let btnCandy = document.getElementById("btnCandy");
let score = document.getElementById("score");
let autoclickercount = document.getElementById("autoclickercount");

// - - - - - - - - - - Cursor
let priceCursorElement = document.getElementById("priceCursor");
let buyCursor = document.getElementById("buyCursor");
let countUpgradeCursorElement = document.getElementById("countUpgradeCursor");

// - - - - - - - - - - AutoClick
let buyAutoClick = document.getElementById("buyAutoClick");
let priceAutoClickElement = document.getElementById("priceAutoClick");
let countUpgradeAutoClickElement = document.getElementById("countUpgradeAutoClick");

// - - - - - - - - - - Candy+
let buyCandy = document.getElementById("buyCandy");
let priceCandyElement = document.getElementById("priceCandy");
let countUpgradeCandyElement = document.getElementById("countUpgradeCandy");

// - - - - - - - - - - Candy farm
let buyCandyfarm = document.getElementById("buyCandyfarm");
let priceCandyfarmElement = document.getElementById("priceCandyfarm");
let countUpgradeCandyfarmElement = document.getElementById("countUpgradeCandyfarm");

// - - - - - - - - - - Candy mine
let buyCandymine = document.getElementById("buyCandymine");
let priceCandymineElement = document.getElementById("priceCandymine");
let countUpgradeCandymineElement = document.getElementById("countUpgradeCandymine");

// - - - - - - - - - - Candy factory
let buyCandyfactory = document.getElementById("buyCandyfactory");
let priceCandyfactoryElement = document.getElementById("priceCandyfactory");
let countUpgradeCandyfactoryElement = document.getElementById("countUpgradeCandyfactory");

// - - - - - - - - - - - - clicker
let count = 0;
let perSecondCount = 0;
let increment = 1;

// - - - - - - - - - - - - - Price
let priceCursor = 5;
let priceAutoClick = 250;
let priceCandy = 1000;
let priceCandyfarm = 10000;
let priceCandymine = 50000;
let priceCandyfactory = 150000;

// - - - - - - - - - - - AutoClicker
let autoclickerIncrement = 0;
let candyfarmIncrement = 0;
let candyfactoryIncrement = 0;

// - - - - - - - - - Upgrade count
let countUpgradeCursor = 0;
let countUpgradeAutoClick = 0;
let countUpgradeCandy = 0;
let countUpgradeCandyfarm = 0;
let countUpgradeCandymine = 0;
let countUpgradeCandyfactory = 0;

// Functia pentru formatarea numerelor
function formatNumber(value) {
    if (value >= 1_000_000) {
        return (value / 1_000_000).toFixed(1) + "M"; // Milioane
    } else if (value >= 1_000) {
        return (value / 1_000).toFixed(1) + "K"; // Mii
    } else {
        return value; // Dacă nu ajunge la 1000, afișează valoarea exactă
    }
}

// Actualizarea culorii prețurilor în funcție de count
function updatePriceColor() {
    priceCursorElement.style.color = count >= priceCursor ? "green" : "red";
    priceAutoClickElement.style.color = count >= priceAutoClick ? "green" : "red";
    priceCandyElement.style.color = count >= priceCandy ? "green" : "red";
    priceCandyfarmElement.style.color = count >= priceCandyfarm ? "green" : "red";
    priceCandymineElement.style.color = count >= priceCandymine ? "green" : "red";
    priceCandyfactoryElement.style.color = count >= priceCandyfactory ? "green" : "red";
}

// Afisarea scorului cu numărul formatat
btnCandy.onclick = function () {
    count += increment;
    score.innerText = `${formatNumber(count)} candies`;

    updatePriceColor();
};

// Funcția pentru achiziționarea de cursor
buyCursor.onclick = function() {
    if (count >= priceCursor) {
        count -= priceCursor;
        countUpgradeCursor++;
        increment += 49;
        priceCursor += 115;
        score.innerText = `${formatNumber(count)} candies`;
        priceCursorElement.innerText = `${formatNumber(priceCursor)}`;
        countUpgradeCursorElement.innerText = `${countUpgradeCursor}`;
    }

    updatePriceColor();
};

// Funcția pentru achiziționarea de auto-clicker
buyAutoClick.onclick = function() {
    if (count >= priceAutoClick) {
        count -= priceAutoClick;
        countUpgradeAutoClick++;
        priceAutoClick += 350;
        autoclickerIncrement += 25;
        perSecondCount += autoclickerIncrement;
        autoclickercount.innerText = `per second: ${formatNumber(perSecondCount)} candies`;
        score.innerText = `${formatNumber(count)} candies`;
        priceAutoClickElement.innerText = `${formatNumber(priceAutoClick)}`;
        countUpgradeAutoClickElement.innerText = `${countUpgradeAutoClick}`;
    }

    setInterval(() => {
        count += autoclickerIncrement;
        score.innerText = `${formatNumber(count)} candies`;
        updatePriceColor();
    }, 1000);

    updatePriceColor();
};

// Funcția pentru achiziționarea de Candy+
buyCandy.onclick = function() {
    if (count >= priceCandy) {
        count -= priceCandy;
        countUpgradeCandy++;
        increment += 100;
        priceCandy += 1150;
        score.innerText = `${formatNumber(count)} candies`;
        priceCandyElement.innerText = `${formatNumber(priceCandy)}`;
        countUpgradeCandyElement.innerText = `${countUpgradeCandy}`;
    }

    updatePriceColor();
};

// Funcția pentru achiziționarea de auto-clicker Candyfarm
buyCandyfarm.onclick = function() {
    if (count >= priceCandyfarm) {
        count -= priceCandyfarm;
        countUpgradeCandyfarm++;
        priceCandyfarm += 3107; 
        candyfarmIncrement += 185;
        perSecondCount += candyfarmIncrement;
        autoclickercount.innerText = `per second: ${formatNumber(perSecondCount)} candies`;
        score.innerText = `${formatNumber(count)} candies`;
        priceCandyfarmElement.innerText = `${formatNumber(priceCandyfarm)}`;
        countUpgradeCandyfarmElement.innerText = `${countUpgradeCandyfarm}`;
    }
-
    setInterval(() => {
        count += candyfarmIncrement;
        score.innerText = `${formatNumber(count)} candies`;
        updatePriceColor();
    }, 1000);

    updatePriceColor();
};

// Funcția pentru achiziționarea de Candymine
buyCandymine.onclick = function() {
    if (count >= priceCandymine) {
        count -= priceCandymine;
        countUpgradeCandymine++;
        increment += 7273;
        priceCandymine += 8961;
        score.innerText = `${formatNumber(count)} candies`;
        priceCandymineElement.innerText = `${formatNumber(priceCandymine)}`;
        countUpgradeCandymineElement.innerText = `${countUpgradeCandymine}`;
    }

    updatePriceColor();
};

// Funcția pentru achiziționarea de auto-clicker Candyfactory
buyCandyfactory.onclick = function() {
    if (count >= priceCandyfactory) {
        count -= priceCandyfactory;
        countUpgradeCandyfactory++;
        priceCandyfactory += 53714;
        candyfactoryIncrement += 438;
        perSecondCount += candyfactoryIncrement;
        autoclickercount.innerText = `per second: ${formatNumber(perSecondCount)} candies`;
        score.innerText = `${formatNumber(count)} candies`;
        priceCandyfactoryElement.innerText = `${formatNumber(priceCandyfactory)}`;
        countUpgradeCandyfactoryElement.innerText = `${countUpgradeCandyfactory}`;
    }

    setInterval(() => {
        count += candyfactoryIncrement;
        score.innerText = `${formatNumber(count)} candies`;
        updatePriceColor();
    }, 1000);

    updatePriceColor();
};
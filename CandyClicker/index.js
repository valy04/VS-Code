let btnCandy = document.getElementById("btnCandy");
let score = document.getElementById("score");

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

let count = 0;
let increment = 1;
let priceCursor = 5;
let priceAutoClick = 250;
let priceCandy = 1000;
let autoclickerIncrement = 0;
let countUpgradeCursor = 0;
let countUpgradeAutoClick = 0;
let countUpgradeCandy = 0;

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
    priceCursorElement.style.color = count >= priceCursor ? "green" : "";
    priceAutoClickElement.style.color = count >= priceAutoClick ? "green" : "";
    priceCandyElement.style.color = count >= priceCandy ? "green" : "";
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

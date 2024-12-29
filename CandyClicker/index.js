let btnCandy = document.getElementById("btnCandy");
let score = document.getElementById("score");
let autoclickercount = document.getElementById("autoclickercount");
let btnShop = document.getElementById("btnShop");
let closeShop = document.getElementById("closeShop");
let shopMenu = document.getElementById("shopMenu");
let btnBuyskins = document.getElementById("btnBuyskins");

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
    if (value >= 1_000_000_000_000) { // Trilioane
        return (value / 1_000_000_000_000).toFixed(1) + "T";
    } else if (value >= 1_000_000_000) { // Miliarde
        return (value / 1_000_000_000).toFixed(1) + "B";
    } else if (value >= 1_000_000) { // Milioane
        return (value / 1_000_000).toFixed(1) + "M";
    } else if (value >= 1_000) { // Mii
        return (value / 1_000).toFixed(1) + "K";
    } else {
        return value.toString(); // Dacă e mai mic de 1000
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

// - - - - - - - - - - - - Sistem Shop
btnShop.onclick = function() {
    shopMenu.style.display = "block";
    btnShop.style.display = "none";
    btnCandy.style.display = "none";
}

closeShop.onclick = function() {
    shopMenu.style.display = "none";
    btnShop.style.display = "inline-block";
    btnCandy.style.display = "block";
}

const candySkins = [
    { id: 1, price: 10, imgSrc: "../CandyClicker/resources/candyskin3.png", isOwned: false },
    { id: 2, price: 1000, imgSrc: "../CandyClicker/resources/candyskin2.png", isOwned: false },
    { id: 3, price: 2000, imgSrc: "../CandyClicker/resources/candyskin4.png", isOwned: false }
];

let equippedSkin = null; // Variabilă pentru skin-ul echipat
const defaultSkin = "../CandyClicker/resources/pngwing.com.png"; // Imaginea implicită

// Funcția pentru gestionarea unui skin (cumpărare/echipare/dezechipare)
function manageSkin(skin, button) {
    if (!skin.isOwned) {
        // Cumpărare skin
        if (count >= skin.price) {
            count -= skin.price;
            skin.isOwned = true; // Marcăm skin-ul ca deținut
            score.innerText = `${formatNumber(count)} candies`;
            button.innerText = "Equip"; // Actualizăm butonul
            button.style = "margin: 23px 0 0 60px";
            alert(`You purchased the skin!`);
        } else {
            alert("Not enough candies!");
        }
    } else {
        // Skin-ul este deja cumpărat - echipare/dezechipare
        if (equippedSkin === skin) {
            // Dezechipare
            equippedSkin = null;
            btnCandy.querySelector("img").src = defaultSkin; // Revine la imaginea implicită
            button.innerText = "Equip";
        } else {
            // Echipare
            if (equippedSkin) {
                // Resetăm butonul pentru skin-ul echipat anterior
                document.querySelector(`.btn-buy-skin[data-id="${equippedSkin.id}"]`).innerText = "Equip";
            }
            equippedSkin = skin;
            btnCandy.querySelector("img").src = skin.imgSrc; // Schimbă imaginea
            button.innerText = "Unequip";
        }
    }
    
    updatePriceColor();
}

// Asocierea fiecărui buton cu un skin
document.querySelectorAll(".btn-buy-skin").forEach((button, index) => {
    button.setAttribute("data-id", candySkins[index].id); // Adaugăm un atribut pentru identificare
    button.addEventListener("click", () => manageSkin(candySkins[index], button));
});


// Afisarea scorului cu numărul formatat
btnCandy.onclick = function () {
    count += increment;
    score.innerText = `${formatNumber(count)} candies`;

    // btnCandy.style.transform = "scale(0.95)";
    
    // setTimeout(() => {
    //     btnCandy.style.transform = "scale(1)";
    // }, 100);

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
        buyCursor.style.transform = "scale(0.95)";
    }
    
    setTimeout(() => {
        buyCursor.style.transform = "scale(1)";
    }, 100);

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
        buyAutoClick.style.transform = "scale(0.95)";
    }

    setInterval(() => {
        count += autoclickerIncrement;
        score.innerText = `${formatNumber(count)} candies`;
        updatePriceColor();
    }, 1000);

    setTimeout(() => {
        buyAutoClick.style.transform = "scale(1)";
    }, 100);

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
        buyCandy.style.transform = "scale(0.95)";
    }

    setTimeout(() => {
        buyCandy.style.transform = "scale(1)";
    }, 100);

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
        buyCandyfarm.style.transform = "scale(0.95)";
    }
-
    setInterval(() => {
        count += candyfarmIncrement;
        score.innerText = `${formatNumber(count)} candies`;
        updatePriceColor();
    }, 1000);

    setTimeout(() => {
        buyCandyfarm.style.transform = "scale(1)";
    }, 100);

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
        buyCandymine.style.transform = "scale(0.95)";
    }

    setTimeout(() => {
        buyCandymine.style.transform = "scale(1)";
    }, 100);

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
        buyCandyfactory.style.transform = "scale(0.95)";
    }

    setInterval(() => {
        count += candyfactoryIncrement;
        score.innerText = `${formatNumber(count)} candies`;
        updatePriceColor();
    }, 1000);

    setTimeout(() => {
        buyCandyfactory.style.transform = "scale(1)";
    }, 100);

    updatePriceColor();
};
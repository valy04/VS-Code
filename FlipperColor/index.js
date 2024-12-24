let changeColorRed = document.getElementById("changeColorRed");
let changeColorGreen = document.getElementById("changeColorGreen");
let changeColorBlue = document.getElementById("changeColorBlue");
let changeRandom = document.getElementById("changeRandom");
let bgChange = document.getElementById("bgChange");

changeColorRed.onclick = function() {
    bgChange.style.backgroundColor = "red";
    return;
}

changeColorGreen.onclick = function() {
    bgChange.style.backgroundColor = "green";
    return;
}

changeColorBlue.onclick = function() {
    bgChange.style.backgroundColor = "blue";
    return;
}

changeRandom.onclick = function() {
    let bgColors = ["red", "green", "blue"];
    let randomIndex = Math.floor(Math.random() * bgColors.length);
    bgChange.style.backgroundColor = bgColors[randomIndex];
};
let myH1 = document.getElementById("myH1");
let myForm = document.getElementById("myForm");
let myBTN = document.getElementById("myBTN");
let username = document.getElementById("username");
let password = document.getElementById("password");

myBTN.onclick = function() {
    let usernameValue = username.value;
    let passwordValue = password.value;

    if(usernameValue === "admin" && passwordValue === "hartie") {
        myH1.textContent = `Welcome, ${usernameValue}`;
        myForm.style.display = "none";
    }
    else {
        myH1.textContent = `ERROR, try again!`;
    }
}
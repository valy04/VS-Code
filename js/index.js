function afiseazaMesaj() {
    console.log("Salut! Am fost apelat mai târziu.");
}

function executaMaiTârziu(callback) {
    console.log("Fac ceva acum...");
    callback(); // Apelează funcția trimisă ca argument
}

executaMaiTârziu(afiseazaMesaj);

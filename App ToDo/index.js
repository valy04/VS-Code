const btnAdauga = document.getElementById("btnAdauga");

// Funcție pentru a salva obiectivele în localStorage
function salveazaObiective() {
    const obiective = {
        prioritate1: document.getElementById("prioritate1").innerHTML,
        prioritate2: document.getElementById("prioritate2").innerHTML,
        prioritate3: document.getElementById("prioritate3").innerHTML,
    };
    localStorage.setItem("obiective", JSON.stringify(obiective));
}

// Funcție pentru a încărca obiectivele din localStorage
function incarcaObiective() {
    const obiectiveSalvate = localStorage.getItem("obiective");
    if (obiectiveSalvate) {
        const obiective = JSON.parse(obiectiveSalvate);
        document.getElementById("prioritate1").innerHTML = obiective.prioritate1;
        document.getElementById("prioritate2").innerHTML = obiective.prioritate2;
        document.getElementById("prioritate3").innerHTML = obiective.prioritate3;

        // Adaugă evenimentele de click pentru a elimina obiectivele
        document.querySelectorAll("span").forEach(span => {
            span.addEventListener("click", function() {
                span.remove();
                salveazaObiective();
            });
        });
    }
}

// Adaugă un obiectiv
btnAdauga.onclick = function() {
    const obiectiv = document.getElementById("obiectiv").value.trim();
    const prioritate = parseInt(document.getElementById("prioritate").value);

    if (obiectiv.length === 0) {
        alert("Introdu un obiectiv!");
        return;
    }

    if (isNaN(prioritate) || prioritate < 1 || prioritate > 3) {
        alert("Introdu o prioritate cuprinsă între 1 și 3!");
        return;
    }

    document.getElementById("obiectiv").value = "";
    document.getElementById("prioritate").value = "";

    const span = document.createElement("span");
    const text = document.createTextNode(obiectiv);
    span.appendChild(text);

    const lista = document.getElementById(`prioritate${prioritate}`);
    span.addEventListener("click", function() {
        span.remove();
        salveazaObiective();
    });

    lista.appendChild(span);
    salveazaObiective();
};

// Încarcă obiectivele la inițializare
incarcaObiective();
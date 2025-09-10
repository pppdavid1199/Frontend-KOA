function ir()
{
    let nev = document.getElementById("nev").value;
    let irszam = document.getElementById("irszam").value;
    let telepules = document.getElementById("telepules").value;
    let kozterulet = document.getElementById("kozterulet").value;
    let hazszam = document.getElementById("hazszam").value;

    localStorage.setItem("nev", nev);
    localStorage.setItem("irszam", irszam);
    localStorage.setItem("telepules", telepules);
    localStorage.setItem("kozterulet", kozterulet);
    localStorage.setItem("hazszam", hazszam);

    megjelenit();
}

function megjelenit()
{
    const nev = localStorage.getItem("nev");
    const irszam = localStorage.getItem("irszam");
    const telepules = localStorage.getItem("telepules");
    const kozterulet = localStorage.getItem("kozterulet");
    const hazszam = localStorage.getItem("hazszam");

    const kartya = document.getElementById("kartya");

    if (nev || irszam || telepules || kozterulet || hazszam) {
        kartya.innerHTML = `
            <h3>Adatok</h3>
            <p>Név: ${nev}</p>
            <p>Irányítószám: ${irszam}</p>
            <p>Település: ${telepules}</p>
            <p>Közterület: ${kozterulet}</p>
            <p>Házszám: ${hazszam}</p>
        `;
    } else {
        kartya.innerHTML = "Nincs adat";
    }

    window.onload = megjelenit;
}
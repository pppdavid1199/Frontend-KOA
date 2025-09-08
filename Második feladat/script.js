function ir()
{
    let nev = document.getElementById("nev").value;
    let telepules = document.getElementById("telepules").value;
    let irszam = document.getElementById("irszam").value;
    let kozterulet = document.getElementById("kozterulet").value;
    let hazszam = document.getElementById("hazszam").value;

    const kartya = document.getElementById("kartya");
    kartya.innerHTML = `
        <h3>Adatok</h3>
        <p>Név: ${nev}</p>
        <p>Település: ${telepules}</p>
        <p>Irányítószám: ${irszam}</p>
        <p>Közterület: ${kozterulet}</p>
        <p>Házszám: ${hazszam}</p>
    `
}
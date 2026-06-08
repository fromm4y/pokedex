let MAMIFEROS = [];

async function carregarMamiferos() {

    const response = await fetch(
        "./data/mamiferos.json"
    );

    MAMIFEROS = await response.json();
}

function buscarMamifero(nomeCientifico) {

    return MAMIFEROS.find(
        item =>
            item.nome_cientifico?.toLowerCase() ===
            nomeCientifico?.toLowerCase()
    );
}
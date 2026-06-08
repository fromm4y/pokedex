import {
    MAP_CENTER,
    MAP_ZOOM,
    BIOMAS
} from "../config.js";

let mapa;

export function iniciarMapa() {

    if (mapa) return;

    mapa = L.map("mapa")
        .setView(
            MAP_CENTER,
            MAP_ZOOM
        );

    L.tileLayer(
        "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            attribution:
                "&copy; OpenStreetMap"
        }
    ).addTo(mapa);

}

export function adicionarAnimalMapa(animal) {

    if (!animal.biomas) return;

    animal.biomas.forEach(bioma => {

        const posicao =
            BIOMAS[bioma];

        if (!posicao) return;

        L.marker(posicao)
            .addTo(mapa)
            .bindPopup(`
                <strong>${animal.nome}</strong>
                <br>
                ${animal.cientifico}
            `);

    });

}
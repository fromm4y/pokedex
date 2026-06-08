let mapa;

function inicializarMapa() {

    mapa = L.map("mapa")
        .setView([-14.235, -51.9253], 4);

    L.tileLayer(
        "https://tile.openstreetmap.org/{z}/{x}/{y}.png"
    ).addTo(mapa);
}

function mostrarDistribuicao(lat, lng) {

    L.marker([lat, lng])
        .addTo(mapa);
}
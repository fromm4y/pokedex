// =====================================
// APP PRINCIPAL
// =====================================

import { TEMAS } from "./config.js";

import {
    abrirTela,
    mostrarToast,
    renderizarTemas
} from "./ui/ui.js";

import {
    abrirModalApi
} from "./ui/modal.js";

import {
    configurarTabs
} from "./ui/tabs.js";

import {
    iniciarScanner
} from "./features/scanner.js";

import {
    carregarAlbum
} from "./features/album.js";

import {
    inicializarMapa
} from "./features/mapa.js";

import {
    carregarBiomas
} from "./features/bioma.js";


// =====================================
// INICIALIZAÇÃO
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Pokédex da Mata iniciada 🌿");

    iniciarInterface();
    iniciarEventos();

});

function iniciarInterface() {

    renderizarTemas(TEMAS);

    carregarAlbum();

    inicializarMapa();

    carregarBiomas();

    configurarTabs();

    abrirTela("catalogo");

}

function iniciarEventos() {

    const gear = document.getElementById("gear");

    if (gear) {
        gear.addEventListener("click", abrirModalApi);
    }

    const btnVoltar = document.getElementById("btnBack");

    if (btnVoltar) {

        btnVoltar.addEventListener("click", () => {

            abrirTela("catalogo");

        });

    }

}


export function abrirTema(idTema) {

    const tema = TEMAS.find(t => t.id === idTema);

    if (!tema) {
        mostrarToast("Tema não encontrado");
        return;
    }

    window.temaAtual = tema;

    const titulo = document.getElementById("barTitle");
    const subtitulo = document.getElementById("barSub");

    if (titulo) titulo.textContent = tema.nome;

    if (subtitulo) {
        subtitulo.textContent =
            `Identificando: ${tema.alvo}`;
    }

    abrirTela("scanner");

    iniciarScanner();

}

export function voltarCatalogo() {

    abrirTela("catalogo");

}

export function aplicarTemaVisual(tema) {

    document.documentElement.style.setProperty(
        "--glow-primary",
        tema.cor
    );

    document.documentElement.style.setProperty(
        "--glow-secondary",
        tema.cor2
    );

}

window.abrirTema = abrirTema;
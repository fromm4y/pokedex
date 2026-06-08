import {
    abrirScanner,
    voltarInicio
} from "./ui/ui.js";

import {
    iniciarTabs
} from "./ui/tabs.js";

import {
    atualizarAlbum
} from "./features/album.js";

import {
    iniciarMapa
} from "./features/mapa.js";

import {
    iniciarScanner
}
from "./features/scanner.js";

document.addEventListener(
    "DOMContentLoaded",
    () => {

        iniciarTabs();

        iniciarScanner();

        atualizarAlbum();

        document
            .getElementById(
                "btnIniciar"
            )
            .addEventListener(
                "click",
                () => {

                    abrirScanner();

                    setTimeout(
                        iniciarMapa,
                        200
                    );

                }
            );

        document
            .getElementById(
                "btnBack"
            )
            .addEventListener(
                "click",
                voltarInicio
            );

    }
);
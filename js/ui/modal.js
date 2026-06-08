// =====================================
// MODAL DA API GEMINI
// =====================================

import {
    salvarApiKey,
    carregarApiKey
} from "../config.js";

import {
    mostrarToast
} from "./ui.js";


// =====================================
// ELEMENTOS
// =====================================

const modal =
    document.getElementById("modalApi");

const input =
    document.getElementById("apiKeyInput");

const btnSalvar =
    document.getElementById("salvarApi");

const btnFechar =
    document.getElementById("fecharModal");


// =====================================
// ABRIR MODAL
// =====================================

export function abrirModalApi() {

    if (!modal) return;

    input.value = carregarApiKey() || "";

    modal.classList.add("show");

}


// =====================================
// FECHAR MODAL
// =====================================

export function fecharModalApi() {

    if (!modal) return;

    modal.classList.remove("show");

}


// =====================================
// SALVAR CHAVE
// =====================================

function salvarChave() {

    const chave = input.value.trim();

    if (!chave) {

        mostrarToast(
            "Digite uma chave válida."
        );

        return;
    }

    salvarApiKey(chave);

    mostrarToast(
        "Chave salva com sucesso 🌿"
    );

    fecharModalApi();

}


// =====================================
// EVENTOS
// =====================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        if (btnSalvar) {

            btnSalvar.addEventListener(
                "click",
                salvarChave
            );

        }

        if (btnFechar) {

            btnFechar.addEventListener(
                "click",
                fecharModalApi
            );

        }

        if (modal) {

            modal.addEventListener(
                "click",
                (event) => {

                    if (
                        event.target === modal
                    ) {

                        fecharModalApi();

                    }

                }
            );

        }

    }
);
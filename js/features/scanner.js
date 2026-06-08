import {
    analisarImagem
}
from "../api.js";

// =====================================
// ELEMENTOS
// =====================================

const btnCamera =
    document.getElementById("btnCamera");

const btnGaleria =
    document.getElementById("btnGaleria");

const inputCamera =
    document.getElementById("inputCamera");

const inputGaleria =
    document.getElementById("inputGaleria");

const preview =
    document.getElementById("previewImagem");

const analysing =
    document.getElementById("analysing");

// =====================================
// INICIAR
// =====================================

export function iniciarScanner() {

    btnCamera.addEventListener(
        "click",
        () => inputCamera.click()
    );

    btnGaleria.addEventListener(
        "click",
        () => inputGaleria.click()
    );

    inputCamera.addEventListener(
        "change",
        carregarImagem
    );

    inputGaleria.addEventListener(
        "change",
        carregarImagem
    );

}

// =====================================
// CARREGAR IMAGEM
// =====================================

async function carregarImagem(
    evento
) {

    const arquivo =
        evento.target.files[0];

    if (!arquivo) return;

    const reader =
        new FileReader();

    reader.onload =
        async (e) => {

            preview.src =
                e.target.result;

            await identificarAnimal(
                arquivo
            );

        };

    reader.readAsDataURL(
        arquivo
    );

}

// =====================================
// IDENTIFICAÇÃO IA
// =====================================

async function identificarAnimal(
    arquivo
) {

    try {

        analysing.style.display =
            "block";

        const animal =
            await analisarImagem(
                arquivo
            );

        console.log(
            "Resposta Gemini:",
            animal
        );

        preencherTela(
            animal
        );

    }

    catch (erro) {

        console.error(
            erro
        );

        alert(
            "Erro ao identificar animal."
        );

    }

    finally {

        analysing.style.display =
            "none";

    }

}

// =====================================
// RESULTADO
// =====================================

function preencherTela(
    animal
) {

    document.getElementById(
        "nomeAnimal"
    ).textContent =
        animal.nome || "Desconhecido";

    document.getElementById(
        "nomeCientifico"
    ).textContent =
        animal.cientifico || "-";

    document.getElementById(
        "descricao"
    ).textContent =
        animal.descricao || "-";

    document.getElementById(
        "confianca"
    ).textContent =
        `${animal.confianca || 0}%`;

    document.getElementById(
        "bioma"
    ).textContent =
        animal.bioma || "-";

    const lista =
        document.getElementById(
            "curiosidades"
        );

    lista.innerHTML = "";

    if (
        animal.curiosidades &&
        animal.curiosidades.length
    ) {

        animal.curiosidades.forEach(
            curiosidade => {

                const li =
                    document.createElement(
                        "li"
                    );

                li.textContent =
                    curiosidade;

                lista.appendChild(
                    li
                );

            }
        );

    }

}
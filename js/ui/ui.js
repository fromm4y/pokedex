// =====================================
// FUNÇÕES DE INTERFACE
// =====================================

const $ = (id) => document.getElementById(id);


// =====================================
// TROCA DE TELAS
// =====================================

export function abrirTela(nomeTela) {

    const telas = document.querySelectorAll(".screen");

    telas.forEach(tela => {
        tela.classList.remove("active");
    });

    const telaSelecionada =
        document.getElementById(`screen${capitalize(nomeTela)}`);

    if (telaSelecionada) {
        telaSelecionada.classList.add("active");
    }

}


// =====================================
// RENDERIZAÇÃO DOS TEMAS
// =====================================

export function renderizarTemas(temas) {

    const container =
        document.getElementById("catGrid");

    if (!container) return;

    container.innerHTML = "";

    temas.forEach(tema => {

        const card = document.createElement("div");

        card.classList.add("theme-card");

        card.innerHTML = `
            <div class="theme-icon">🌿</div>

            <h3>${tema.nome}</h3>

            <p>${tema.descricao}</p>
        `;

        card.addEventListener("click", () => {

            window.abrirTema(tema.id);

        });

        container.appendChild(card);

    });

}


// =====================================
// TOAST
// =====================================

let toastTimeout;

export function mostrarToast(mensagem) {

    const toast =
        document.getElementById("toast");

    if (!toast) return;

    toast.textContent = mensagem;

    toast.classList.add("show");

    clearTimeout(toastTimeout);

    toastTimeout = setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);

}


// =====================================
// LOADING
// =====================================

export function mostrarLoading() {

    const loading =
        document.getElementById("analysing");

    if (loading) {
        loading.classList.add("on");
    }

}

export function esconderLoading() {

    const loading =
        document.getElementById("analysing");

    if (loading) {
        loading.classList.remove("on");
    }

}


// =====================================
// UTIL
// =====================================

function capitalize(texto) {

    return texto.charAt(0).toUpperCase() +
           texto.slice(1);

}
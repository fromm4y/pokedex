function abrirAba(nome) {

    document
        .querySelectorAll(".tab-content")
        .forEach(tab =>
            tab.style.display = "none"
        );

    document.getElementById(nome)
        .style.display = "block";
}
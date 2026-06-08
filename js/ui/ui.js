export function abrirScanner() {

    document
        .getElementById(
            "screenCatalogo"
        )
        .classList.remove(
            "active"
        );

    document
        .getElementById(
            "screenScanner"
        )
        .classList.add(
            "active"
        );

}

export function voltarInicio() {

    document
        .getElementById(
            "screenScanner"
        )
        .classList.remove(
            "active"
        );

    document
        .getElementById(
            "screenCatalogo"
        )
        .classList.add(
            "active"
        );

}
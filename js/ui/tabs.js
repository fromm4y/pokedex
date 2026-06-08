export function iniciarTabs() {

    const botoes =
        document.querySelectorAll(".tab-btn");

    botoes.forEach(botao => {

        botao.addEventListener(
            "click",
            () => {

                botoes.forEach(btn =>
                    btn.classList.remove(
                        "active"
                    )
                );

                document
                    .querySelectorAll(
                        ".tab-content"
                    )
                    .forEach(tab =>
                        tab.classList.remove(
                            "active"
                        )
                    );

                botao.classList.add(
                    "active"
                );

                const alvo =
                    botao.dataset.tab;

                document
                    .getElementById(alvo)
                    .classList.add(
                        "active"
                    );

            }
        );

    });

}
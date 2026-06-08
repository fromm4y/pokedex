import { API_KEY }
from "./secret.js";

export async function analisarImagem(
    arquivo
) {

    const base64 =
        await converterParaBase64(
            arquivo
        );

    const resposta =
        await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
            {
                method: "POST",

                headers: {
                    "Content-Type":
                        "application/json"
                },

                body: JSON.stringify({

                    contents: [
                        {
                            parts: [

                                {
                                    text:
                                        "Diga apenas Olá"
                                },

                                {
                                    inline_data: {
                                        mime_type:
                                            arquivo.type,
                                        data:
                                            base64
                                    }
                                }

                            ]
                        }
                    ]

                })

            }
        );

    const dados =
        await resposta.json();

    console.log(
        "Resposta Gemini:",
        dados
    );

    return dados;

    console.log(
    JSON.stringify(
        dados,
        null,
        2
    )
);

}


// =====================================
// BASE64
// =====================================

function converterParaBase64(
    arquivo
) {

    return new Promise(
        (resolve, reject) => {

            const reader =
                new FileReader();

            reader.onload =
                () => {

                    resolve(
                        reader.result
                            .split(",")[1]
                    );

                };

            reader.onerror =
                reject;

            reader.readAsDataURL(
                arquivo
            );

        }
    );

}

/*
body: JSON.stringify({

    contents: [
        {
            parts: [

                {
                    text:
`Identifique este mamífero brasileiro.

Responda SOMENTE JSON válido:

{
    "nome":"",
    "cientifico":"",
    "descricao":"",
    "bioma":"",
    "confianca":90,
    "curiosidades":[]
}`
                },

                {
                    inline_data: {
                        mime_type:
                            arquivo.type,
                        data:
                            base64
                    }
                }

            ]
        }
    ]

})
*/
async function identificarMamifero(base64, mimeType) {

    const prompt = `
Você é um mastozoólogo especialista na fauna brasileira.

Analise a imagem enviada.

Retorne APENAS JSON:

{
  "nomePopular":"",
  "nomeCientifico":"",
  "confianca":0,
  "descricao":"",
  "bioma":"",
  "status":"",
  "curiosidades":[]
}
`;

    const body = {
        contents: [
            {
                parts: [
                    { text: prompt },
                    {
                        inline_data: {
                            mime_type: mimeType,
                            data: base64
                        }
                    }
                ]
            }
        ]
    };

    const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${CONFIG.GEMINI_MODEL}:generateContent?key=${CONFIG.API_KEY}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }
    );

    const data = await response.json();

    return JSON.parse(
        data.candidates[0].content.parts[0].text
    );
}
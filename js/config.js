// =====================================
// CONFIGURAÇÕES GERAIS
// =====================================

export const MODELO = "gemini-2.5-flash";

export const LIMIAR_CONFIANCA = 80;


// =====================================
// API KEY
// =====================================

export let API_KEY = ""
export function salvarApiKey(chave) {

    API_KEY = chave;

    localStorage.setItem(
        "gemini_api_key",
        chave
    );

}

export function carregarApiKey() {

    const chave = localStorage.getItem(
        "gemini_api_key"
    );

    if (chave) {
        API_KEY = chave;
    }

    return API_KEY;

}

export const TEMAS = [

    {
        id: "mamiferos",
        nome: "Mamíferos",
        descricao: "Fauna brasileira",
        alvo: "mamífero",
        cor: "#2F855A",
        cor2: "#68D391"
    },

    {
        id: "aves",
        nome: "Aves",
        descricao: "Pássaros e aves nativas",
        alvo: "ave",
        cor: "#276749",
        cor2: "#9AE6B4"
    },

    {
        id: "repteis",
        nome: "Répteis",
        descricao: "Cobras e lagartos",
        alvo: "réptil",
        cor: "#22543D",
        cor2: "#48BB78"
    },

    {
        id: "anfibios",
        nome: "Anfíbios",
        descricao: "Sapos e rãs",
        alvo: "anfíbio",
        cor: "#2D6A4F",
        cor2: "#74C69D"
    },

    {
        id: "plantas",
        nome: "Plantas",
        descricao: "Espécies vegetais",
        alvo: "planta",
        cor: "#1B4332",
        cor2: "#95D5B2"
    },

    {
        id: "insetos",
        nome: "Insetos",
        descricao: "Fauna pequena",
        alvo: "inseto",
        cor: "#40916C",
        cor2: "#B7E4C7"
    }

];

carregarApiKey();
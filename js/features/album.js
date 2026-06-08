function obterAlbum() {

    return JSON.parse(
        localStorage.getItem(CONFIG.STORAGE_KEY)
    ) || [];
}

function salvarNoAlbum(animal) {

    const album = obterAlbum();

    const existe = album.find(
        item => item.nomeCientifico === animal.nomeCientifico
    );

    if (existe) return;

    album.push(animal);

    localStorage.setItem(
        CONFIG.STORAGE_KEY,
        JSON.stringify(album)
    );
}

function carregarAlbum() {

    return obterAlbum();
}
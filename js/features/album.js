import { STORAGE_ALBUM } from "../config.js";

export function carregarAlbum() {

    return JSON.parse(
        localStorage.getItem(STORAGE_ALBUM)
    ) || [];

}

export function salvarAnimal(animal) {

    const album = carregarAlbum();

    const existe = album.find(
        item => item.id === animal.id
    );

    if (existe) return;

    album.push(animal);

    localStorage.setItem(
        STORAGE_ALBUM,
        JSON.stringify(album)
    );

}

export function atualizarAlbum() {

    const album = carregarAlbum();

    const container =
        document.getElementById("album");

    const contador =
        document.getElementById("albumCount");

    container.innerHTML = "";

    contador.textContent =
        `${album.length} espécies`;

    album.forEach(animal => {

        container.innerHTML += `

            <div class="album-item">

                <div class="animal-emoji">

                    ${animal.emoji || "🐾"}

                </div>

                <strong>

                    ${animal.nome}

                </strong>

                <small>

                    ${animal.cientifico}

                </small>

            </div>

        `;

    });

}
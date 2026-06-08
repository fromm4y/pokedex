function mostrarPreview(file) {

    const reader = new FileReader();

    reader.onload = e => {

        document.getElementById(
            "previewImagem"
        ).src = e.target.result;
    };

    reader.readAsDataURL(file);
}
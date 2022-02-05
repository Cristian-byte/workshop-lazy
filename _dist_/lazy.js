const isIntersecting = (entry) => {
    return entry.isIntersecting //True si esta dentro de la pantalla y False si esta fuera
};

const loadImage = (entry) => {
    const container = entry.target //div container
    const imagen = container.firstChild;
    const url = imagen.dataset.src
        //Cargar imagen
    imagen.src = url;

    //desregistra la imagen
    observer.unobserve(container);
};

const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(loadImage)
});

export const registerImage = (imagen) => {
    //IntersectionObserver => Observer(Image)
    observer.observe(imagen)
}
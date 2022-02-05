const isIntersecting = (entry) => {
    return entry.isIntersecting //True si esta dentro de la pantalla y False si esta fuera
};

const accion = (entry) => {
    const nodo = entry.target
    console.log("Hola");

    //desregistra la imagen
    observer.unobserve(nodo)
};

const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(accion)
});

export const registerImage = (imagen) => {
    //IntersectionObserver => Observer(Image)
    observer.observe(imagen)
}
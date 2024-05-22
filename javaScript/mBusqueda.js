
function filtrarImagenes() {
    const input = document.querySelector(".header__input");
    const filtro = input.value.trim().toUpperCase();
    const cards = document.querySelectorAll(".card");
    let encontrado = false;

    cards.forEach(card => {
        const title = card.querySelector(".card__title").textContent.toUpperCase();
        if (title.indexOf(filtro) > -1) {
            card.style.display = "";
            if (!encontrado) {
                card.scrollIntoView({ behavior: "smooth", block: "start" });
                encontrado = true;
            }
        } else {
            card.style.display = "none";
        }
    });
}


document.querySelector(".header__input").addEventListener("input", filtrarImagenes);


document.querySelector(".header__input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        filtrarImagenes();
    }
});

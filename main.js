window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav.menu");
    if (window.scrollY > 80) {
        // Puedes ajustar el valor (50) según cuándo quieras que cambie el color
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    if (header) {
        header.classList.toggle("sticky", window.scrollY > 0);
    }
});
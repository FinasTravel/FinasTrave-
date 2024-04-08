const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    console.log("hello javascript")
    if (header) {
        header.classList.toggle("sticky", window.scrollY > 0);
    }
});

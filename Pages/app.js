const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (header) {
        header.classList.toggle("sticky", window.scrollY >= -1);
      }
});
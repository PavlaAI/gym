// Skript pro základní animaci při načítání stránky
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.service-item');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('fade-in');
        }, index * 300); // Animace zpožděná pro každou službu
    });
});

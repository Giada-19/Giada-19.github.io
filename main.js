document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a[href]");

    links.forEach(link => {
        const url = link.getAttribute("href");

        // Skip anchors, external links, email
        if (
            !url ||
            url.startsWith("#") ||
            url.startsWith("mailto:") ||
            url.startsWith("http")
        ) return;

        link.addEventListener("click", e => {
            e.preventDefault();

            document.body.classList.add("is-transitioning");

            setTimeout(() => {
                window.location.href = url;
            }, 500);
        });
    });
});
const heroSlides = document.querySelectorAll(".hero-slide");
let heroIndex = 0;

function rotateHeroSlides() {
    heroSlides[heroIndex].classList.remove("active");

    heroIndex = (heroIndex + 1) % heroSlides.length;

    heroSlides[heroIndex].classList.add("active");
}

// change slide every 3.5 seconds
setInterval(rotateHeroSlides, 3500);

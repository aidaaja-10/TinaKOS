document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll("section");

    // 1. DYNAMIC ACTIVE MENU SAAT USER SCROLL LAYAR
    window.addEventListener("scroll", () => {
        let currentSectionId = "home";
        const scrollPosition = window.scrollY + 250; // Offset pemicu transisi menu

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute("id");
            }
        });

        // Terapkan class active ke menu yang sesuai
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSectionId}`) {
                link.classList.add("active");
            }
        });

        // 2. STICKY NAVBAR EFFECT (Perubahan visual saat di-scroll)
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "rgba(55, 119, 121, 0.95)";
            navbar.style.padding = "8px 40px";
            navbar.style.top = "15px";
        } else {
            navbar.style.backgroundColor = "rgba(55, 119, 121, 0.65)";
            navbar.style.padding = "10px 40px";
            navbar.style.top = "25px";
        }
    });
});
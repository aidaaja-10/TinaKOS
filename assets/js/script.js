document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".nav-links a");
    const currentPath = window.location.pathname;

    // 1. OTOMATIS AKTIFKAN MENU NAVIGASI SESUAI FILE HTML YANG DIBUKA
    navLinks.forEach(link => {
        link.classList.remove("active");
        const linkHref = link.getAttribute("href");

        if (currentPath.includes(linkHref)) {
            link.classList.add("active");
        } 
        // Kasus default jika membuka domain utama langsung tanpa 'index.html'
        else if ((currentPath === "/" || currentPath === "") && linkHref === "index.html") {
            link.classList.add("active");
        }
    });

    // 2. EFEK NAVBAR SAAT DI-SCROLL
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "rgba(55, 119, 121, 0.95)";
            navbar.style.padding = "8px 40px";
            navbar.style.top = "15px";
        } else {
            if (!navbar.classList.contains("page-navbar")) {
                navbar.style.backgroundColor = "rgba(55, 119, 121, 0.65)";
            }
            navbar.style.padding = "10px 40px";
            navbar.style.top = "25px";
        }
    });
});
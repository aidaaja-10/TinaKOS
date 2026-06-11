document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".nav-links a");

    // Fungsi otomatis untuk memuat file eksternal ke dalam ID index.html
    async function loadComponent(elementId, filePath) {
        try {
            const response = await fetch(filePath);
            if (response.ok) {
                const htmlContent = await response.text();
                document.getElementById(elementId).innerHTML = htmlContent;
            } else {
                console.error(`Gagal memuat berkas: ${filePath}`);
            }
        } catch (error) {
            console.error(`Terjadi kesalahan sistem saat memuat berkas:`, error);
        }
    }

    // Eksekusi pemanggilan semua file halaman
    Promise.all([
        loadComponent("content-panduan", "panduan.html"),
        loadComponent("content-kamar", "kamar.html"),
        loadComponent("content-mutu", "mutu.html"),
        loadComponent("content-kontak", "kontak.html")
    ]).then(() => {
        // Setelah semua konten sukses dimuat, aktifkan fitur pendeteksi scroll
        initScrollFeatures();
    });

    function initScrollFeatures() {
        const sections = document.querySelectorAll("section");

        window.addEventListener("scroll", () => {
            let currentSectionId = "home";
            const scrollPosition = window.scrollY + 250;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    currentSectionId = section.getAttribute("id");
                }
            });

            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${currentSectionId}`) {
                    link.classList.add("active");
                }
            });

            // Efek visual Navbar saat digulir
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
    }
});
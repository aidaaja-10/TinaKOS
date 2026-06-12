// ==========================================================================
// 1. LOGIKA INTERAKTIF TAB SWITCHER PANDUAN (100% JS DASAR & STANDARD)
// ==========================================================================
function bukaLangkah(event, namaLangkah) {
    // Ambil semua elemen penjelasan panduan (yang memiliki class tab-pane)
    var tabPanes = document.getElementsByClassName("tab-pane");
    
    // Sembunyikan semua konten penjelasan menggunakan perulangan for dasar
    for (var i = 0; i < tabPanes.length; i++) {
        tabPanes[i].classList.remove("active");
    }

    // Ambil semua tombol menu tab panduan (yang memiliki class tab-btn)
    var tabButtons = document.getElementsByClassName("tab-btn");
    
    // Matikan status warna aktif pada semua tombol navigasi
    for (var j = 0; j < tabButtons.length; j++) {
        tabButtons[j].classList.remove("active");
    }

    // Tampilkan konten penjelasan yang ID-nya sesuai dengan tombol yang diklik
    document.getElementById(namaLangkah).classList.add("active");

    // Berikan efek aktif (seperti garis bawah oranye) pada tombol yang diklik saat ini
    event.currentTarget.classList.add("active");
}

// 2. KONTROL SCROLL NAVBAR & MENU NAV-LINKS AKTIF 

const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let currentSectionId = "home";
    const scrollPosition = window.scrollY + 250; // Jarak toleransi layar

    // Cek posisi scroll layar terhadap letak section halaman
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSectionId = section.getAttribute("id");
        }
    });

    // Mengubah tanda warna menu aktif pada navbar sesuai posisi scroll
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSectionId}`) {
            link.classList.add("active");
        }
    });

    // Efek visual perubahan kepekatan warna Navbar saat digulir
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "rgba(55, 119, 121, 0.9)";
        navbar.style.padding = "8px 40px";
        navbar.style.top = "15px";
    } else {
        navbar.style.backgroundColor = "rgba(55, 119, 121, 0.65)";
        navbar.style.padding = "10px 40px";
        navbar.style.top = "25px";
    }
});


// DATA KAMAR
const dataKamar = {
    a01: {
        nama: 'Kamar A01',
        kategori: 'Tipe Standar',
        harga: 'Rp700.000',
        img: 'assets/images/kos-depan.jpg',
        fasilitas: ['AC', 'Wi-Fi', 'Kamar Mandi Dalam'],
        wa: 'https://wa.me/6281234567890'
    },
   
};

// MODAL
function bukaModal(idKamar) {
    const data = dataKamar[idKamar];

    document.getElementById('modalNama').textContent = data.nama;
    document.getElementById('modalHarga').textContent = data.harga;
    document.getElementById('modalImg').style.backgroundImage = "url('" + data.img + "')";
    document.getElementById('modalWa').href = data.wa;

    const list = document.getElementById('modalFasilitas');
    list.innerHTML = '';
    data.fasilitas.forEach(function(f) {
        list.innerHTML += '<li>' + f + '</li>';
    });

    document.getElementById('modalKamar').classList.add('aktif');
}

function tutupModal() {
    document.getElementById('modalKamar').classList.remove('aktif');
}

document.getElementById('modalKamar').addEventListener('click', function(e) {
    if (e.target === this) tutupModal();
});

//pindah section ke daftar kamar
function showSection(namaSection) {
    var daftarKamar = document.getElementById('daftarkamar');
    var previewKamar = document.getElementById('kamar');
    var mutu = document.getElementById('mutu');
    var kontak = document.getElementById('kontak');
    var panduan = document.getElementById('panduan');

    if (namaSection === 'daftarkamar') {
        daftarKamar.style.display = 'block';
        previewKamar.style.display = 'none';
        mutu.style.display = 'none';
        kontak.style.display = 'none';
        panduan.style.display = 'none';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function kembaliHome() {
    document.getElementById('daftarkamar').style.display = 'none';
    document.getElementById('kamar').style.display = '';
    document.getElementById('mutu').style.display = '';
    document.getElementById('kontak').style.display = '';
    document.getElementById('panduan').style.display = '';
    document.getElementById('daftarkamar').scrollIntoView({ behavior: 'smooth' });
}
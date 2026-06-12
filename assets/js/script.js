// 1. KONTROL INTERAKTIF TAB 
function bukaLangkah(event, namaLangkah) {

    var tabPanes = document.getElementsByClassName("tab-pane");
    for (var i = 0; i < tabPanes.length; i++) {
        tabPanes[i].classList.remove("active");
    }

    var tabButtons = document.getElementsByClassName("tab-btn");
    for (var j = 0; j < tabButtons.length; j++) {
        tabButtons[j].classList.remove("active");
    }

    document.getElementById(namaLangkah).classList.add("active");
    event.currentTarget.classList.add("active");
}

// 2. LOGIKA NAVIGASI 3 HALAMAN UTAMA

function bukaHalaman(namaHalaman) {

    const daftarHalaman = ['beranda', 'kamarpage', 'kontakpage'];

    daftarHalaman.forEach(hal => {
        const divHalaman = document.getElementById(`halaman-${hal}`);
        if (divHalaman) {
            divHalaman.style.display = 'none';
        }
    });

    const halamanTarget = document.getElementById(`halaman-${namaHalaman}`);
    if (halamanTarget) {
        halamanTarget.style.display = 'block';
    }

    if (namaHalaman === 'kamarpage') {
        document.getElementById('kamar').style.display = 'block';
        document.getElementById('mutu').style.display = 'block';
        document.getElementById('daftarkamar').style.display = 'none';
    }

    const semuaLinkNav = document.querySelectorAll(".nav-links a");
    semuaLinkNav.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("onclick").includes(`'${namaHalaman}'`)) {
            link.classList.add("active");
        }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function tampilkanDaftarKamarPenuh() {
    document.getElementById('kamar').style.display = 'none';       
    document.getElementById('mutu').style.display = 'none';        
    document.getElementById('daftarkamar').style.display = 'block'; 
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 3. EFEK VISUAL NAVBAR SAAT DI-SCROLL

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
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


// 4. INTEGRASI DATA KAMAR 
const dataKamar = {
    a01: {
        nama: 'Kamar A01',
        kategori: 'Tipe Standar',
        harga: 'Rp700.000',
        img: 'assets/images/kos-depan.jpg',
        fasilitas: ['AC', 'Wi-Fi', 'Kamar Mandi Dalam'],
        wa: 'https://wa.me/6281234567890'
    }
};

function bukaModal(idKamar) {
    const data = dataKamar[idKamar];
    if (!data) return; 

    document.getElementById('modalNama').textContent = data.nama;
    document.getElementById('modalHarga').textContent = data.harga;
    document.getElementById('modalImg').style.backgroundImage = "url('" + data.img + "')";
    document.getElementById('modalWa').href = data.wa;

    const listFasilitas = document.getElementById('modalFasilitas');
    listFasilitas.innerHTML = '';
    data.fasilitas.forEach(function(fasilitas) {
        listFasilitas.innerHTML += '<li>' + fasilitas + '</li>';
    });

    document.getElementById('modalKamar').classList.add('aktif');
}

function tutupModal() {
    document.getElementById('modalKamar').classList.remove('aktif');
}

document.getElementById('modalKamar').addEventListener('click', function(e) {
    if (e.target === this) {
        tutupModal();
    }
});
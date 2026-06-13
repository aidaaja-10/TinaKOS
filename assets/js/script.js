// 1. KONTROL INTERAKTIF TAB (ALUR HUNIAN)
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

// 2. LOGIKA NAVIGASI MULTI-PAGE

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


// 3. EFEK NAVBAR SAAT DI-SCROLL

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


// 4. MANAGEMENT DATA KAMAR (DATABASE & RENDERING)

const dataKamar = {
    a01: {
        nama: 'Kamar A01',
        kategori: 'Tipe Eksklusif',
        harga: 'Rp1.200.000',
        img: 'assets/images/kost-2kamar.jpeg',
        fasilitas: ['Wi-Fi', '2 kamar', 'set dapur lengkap','lemari'],
        wa: 'https://wa.me/6285256675414'
    },
    a02: {
        nama: 'Kamar A02',
        kategori: 'Tipe Eksklusif',
        harga: 'Rp1.200.000',
        img: 'assets/images/kost-2kamar.jpeg',
        fasilitas: ['Wi-Fi', '2 kamar', 'set dapur lengkap', 'lemari'],
        wa: 'https://wa.me/6285256675414'
    },
    a03: {
        nama: 'Kamar A03',
        kategori: 'Tipe Eksklusif',
        harga: 'Rp1.200.000',
        img: 'assets/images/kost-2kamar.jpeg',
        fasilitas: ['Wi-Fi', '2 kamar', 'set dapur lengkap','lemari'],
        wa: 'https://wa.me/6285256675414'
    },
    b01: {
        nama: 'Kamar B01',
        kategori: 'Tipe Standar',
        harga: 'Rp800.000',
        img: 'assets/images/kamar1.jpeg',
        fasilitas: ['Wi-Fi', '1 kamar'],
        wa: 'https://wa.me/6285256675414'
    },
    b02: {
        nama: 'Kamar B02',
        kategori: 'Tipe Standar',
        harga: 'Rp800.000',
        img: 'assets/images/kamar1.jpeg',
        fasilitas: ['Wi-Fi', '1 kamar'],
        wa: 'https://wa.me/6285256675414'
    },
    b03: {
        nama: 'Kamar B03',
        kategori: 'Tipe Standar',
        harga: 'Rp800.000',
        img: 'assets/images/kamar1.jpeg',
        fasilitas: ['Wi-Fi', '1 kamar'],
        wa: 'https://wa.me/6285256675414'
    },
    b04: {
        nama: 'Kamar B04',
        kategori: 'Tipe Standar',
        harga: 'Rp800.000',
        img: 'assets/images/kamar1.jpeg',
        fasilitas: ['Wi-Fi', '1 kamar'],
        wa: 'https://wa.me/6285256675414'
    },
    b05: {
        nama: 'Kamar B05',
        kategori: 'Tipe Standar',
        harga: 'Rp800.000',
        img: 'assets/images/kamar1.jpeg',
        fasilitas: ['Wi-Fi', '1 kamar'],
        wa: 'https://wa.me/6285256675414'
    },
    b06: {
        nama: 'Kamar B06',
        kategori: 'Tipe Standar',
        harga: 'Rp800.000',
        img: 'assets/images/kamar1.jpeg',
        fasilitas: ['Wi-Fi', '1 kamar'],
        wa: 'https://wa.me/6285256675414'
    }
};

function buatKartu(id, kamar) {
    const card = document.createElement('div');
    card.className = 'kamar-card';

    card.innerHTML = `
        <div class="kamar-img" style="
            background-image: url(${kamar.img});
            background-size: cover;
            background-position: center;">
        </div>

        <div class="kamar-detail">
            <h3 class="kamar-nama">${kamar.nama}</h3>
            <strong class="kamar-harga">${kamar.harga}</strong>
            <small>/bulan</small>

            <div class="btn-card-group">
                <a href="#" class="btn-card-detail" onclick="bukaModal('${id}')">
                    <img class="btn-icon" src="assets/images/cari.jpeg"" width="16" height="16"> Detail
                </a>
                <a href="${kamar.wa}" target="_blank" class="btn-card-wa">
                    <img class="btn-icon" src="assets/images/wa.png" width="16" height="16"> Hubungi
                </a>
            </div>
        </div>
    `;

    return card;
}

function renderKamar() {
    const grid = document.querySelector('.kamar-grid');
    if (!grid) return;

    Object.entries(dataKamar).forEach(([id, kamar]) => {
        const card = buatKartu(id, kamar);
        grid.appendChild(card);
    });
}

renderKamar();

// 5. INTERAKSI MODAL BOX DETIL
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


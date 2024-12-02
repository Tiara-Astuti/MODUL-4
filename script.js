const dataAlumni = [
    { nama: 'Alisa', jurusan: 'Teknik Informatika', tahunLulus: 2020, pekerjaan: 'Software Engineer' },
    { nama: 'Bobi', jurusan: 'Sistem Informasi', tahunLulus: 2019, pekerjaan: 'Data Analyst' },
    { nama: 'Candra', jurusan: 'Desain komunikasi Visual', tahunLulus: 2010, pekerjaan: 'Dosen Seni Rupa' },
    { nama: 'Diana', jurusan: 'Teknik Sipil', tahunLulus: 2018, pekerjaan: 'Civil Engineer' },
];

const daftarAlumni = document.getElementById('alumni-list');
const inputPencarian = document.getElementById('search');

function tampilkanAlumni(alumni) {
    daftarAlumni.innerHTML = '';
    if (alumni.length === 0) {
        daftarAlumni.innerHTML = '<p>Tidak ada alumni ditemukan.</p>';
        return;
    }
    alumni.forEach(alumnus => {
        const div = document.createElement('div');
        div.className = 'alumni-item';
        div.innerHTML = `
            <strong>${alumnus.nama}</strong> - ${alumnus.jurusan}<br>
            Tahun Lulus: ${alumnus.tahunLulus}<br>
            Pekerjaan Saat Ini: ${alumnus.pekerjaan}
        `;
        daftarAlumni.appendChild(div);
    });
}

function filterAlumni() {
    const query = inputPencarian.value.toLowerCase();
    const alumniTerfilter = dataAlumni.filter(alumnus => 
        alumnus.nama.toLowerCase().includes(query) || 
        alumnus.jurusan.toLowerCase().includes(query)
    );

    // Hanya tampilkan daftar jika ada hasil
    if (query && alumniTerfilter.length > 0) {
        daftarAlumni.style.display = 'block'; // Tampilkan daftar
    } else {
        daftarAlumni.style.display = 'none'; // Sembunyikan daftar
    }

    tampilkanAlumni(alumniTerfilter);
}

// Event listener untuk pencarian
inputPencarian.addEventListener('input', filterAlumni);

// Sembunyikan daftar alumni saat pertama kali
daftarAlumni.style.display = 'none';
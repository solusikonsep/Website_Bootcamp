const todo = [
    { judul: "Membuat Website", status: "design", tanggal: "2024-09-12" }
];

function template(judul, status, index) {
    const elementHTML = `
        <li>
            ${judul} | ${status} | @{NOW.format("YYYY-MM-dd")} | 
            <button onclick="hapus(${index})">Hapus</button>
            <button onclick="ubah(${index})">Ubah</button>
        </li>
    `;
    return elementHTML;
}

function tampilkanTodo() {
    const dataContainer = document.getElementById("data");
    dataContainer.innerHTML = ''; // Kosongkan isi sebelumnya
    todo.map((value, index) => {
        dataContainer.innerHTML += template(value.judul, value.status, index);
    });
}

function tambah() {
    const judul = prompt("Masukan judul todo");
    const status = prompt("Masukan status todo");

    if (judul && status) { // Pastikan input tidak kosong
        const databaru = { judul: judul, status: status, tanggal: new Date().toISOString().split('T')[0] }; // Tambah tanggal
        todo.push(databaru); // Selesai Nambahin

        // Update HTML
        tampilkanTodo();
    }
}

function ubah(index) {
    const judulBaru = prompt("Masukkan judul baru", todo[index].judul);
    const statusBaru = prompt("Masukkan status baru", todo[index].status);

    if (judulBaru !== null && statusBaru !== null) {
        todo[index].judul = judulBaru || todo[index].judul; // Tetap gunakan yang lama jika input kosong
        todo[index].status = statusBaru || todo[index].status; // Tetap gunakan yang lama jika input kosong
        tampilkanTodo(); // Update tampilan
    }
}

function hapus(index) {
    if (confirm(`Apakah Anda yakin ingin menghapus todo "${todo[index].judul}"?`)) {
        todo.splice(index, 1); // Hapus elemen
        tampilkanTodo(); // Update tampilan
    }
}

// Tampilkan todo awal saat halaman dimuat
tampilkanTodo();

const todo = [
    { judul: "Membuat Website", status: "design", tanggal: "2024-09-12"}
];



function template(judul, status, index){
    const elementHTML = `
         <li>
            ${judul} | ${status} | @{NOW.format("YYYY-MM-dd")} | 
            <button onclick="hapus(${index})">Hapus</button>
            <button onclick="ubah(${index})">Ubah</button>
        </li>
    `;
    return elementHTML;
}


function tambah(){

    const judul = prompt("Masukan judul todo");
    const status = prompt("Masukan status todo");

    // console.log(judul, status)
    const databaru = { judul: judul, status: status };
    todo.push(databaru); // Selesai Nambahin

    // Update HTML
    todo.map((value, index) => {
        console.log(value, "Ini index", index);
        document.getElementById("data").innerHTML += template(value.judul, value.status, index);
    })

}

function ubah(index) {
    alert(`Fungsi Ubah | Ini adalah data dengan index ke ${index}`);
};

function hapus(index){
    alert(`Fungsi Hapus | Ini adalah data dengan index ke ${index}`);
};
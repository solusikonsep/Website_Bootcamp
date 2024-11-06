exports.install = function() {

    const buku = [
        {
            "id_buku": 1,
            "judul": "Buku REST API Serie 1",
            "pengarang_id": 1,
            "kategori_id": 2,
            "tahun_terbit": 2023,
            "harga": 100000
          },

          {
            "id_buku": 2,
            "judul": "Buku REST API Serie 2",
            "pengarang_id": 1,
            "kategori_id": 2,
            "tahun_terbit": 2023,
            "harga": 100000
          }
    ];

    ROUTE("GET /api/", function(){
        this.json("Selamat datang di API BOOKS");
    });

    ROUTE("GET /api/buku", function(){
        this.json(buku);
    });

    ROUTE("GET /api/buku/{id}", function(){
        // console.log("Ini adalah id yang dikirim dari URL client ", this.params.id);
        this.json(buku[this.params.id]);
    });



}
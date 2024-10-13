require("@snipkode/server");

ROUTE("GET /", function(){
    this.view("pages/landingpage")
});

ROUTE("GET /todo", function(){
    this.view("pages/todo");
});

ROUTE("GET /dashboard", function(){
    this.view("pages/dashboard");
});


ROUTE("GET /buku", function(){
    this.view("pages/books");
});

ROUTE("GET /penerbit", function(){
    this.view("pages/publisher");
});

ROUTE("GET /pengguna", function(){
    this.view("pages/users");
});



HTTP("debug", { port: 5000 });
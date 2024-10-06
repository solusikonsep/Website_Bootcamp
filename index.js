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



HTTP("debug", { port: 5000 });
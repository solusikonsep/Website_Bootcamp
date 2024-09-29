require("@snipkode/server");

ROUTE("GET /", function(){
    this.view("home")
});

HTTP("debug", { port: 5000 });
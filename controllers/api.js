exports.install = function(){
    ROUTE("GET /api/", function(){
        this.json("Hello World!");
    })
};
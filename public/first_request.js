var express=require('express')
var app=express();
var request=require("request");
app.set("view engine", "ejs");

app.get("/", function(req, res){
   res.render("search");
});

app.get("/recipes",function(req,res){

    var query = req.query.search;
    var url = "https://www.food2fork.com/api/search?key=401b6321935cc652362b625ed19266de&q=" + query;
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200) {
            var data = JSON.parse(body)
            res.render("recipes", {data: data});
        }
      });
});



app.listen('3000',function(){
  console.log('app listening on port 3000...');
});
const express = require("express");
const app = express();// xay nha
const port = process.env.PORT || 5000; // khai bao cong vao
app.listen(port,function () { // hoan thanh xay nha
    console.log("Server is running..");
});
app.use(express.static("public"));// cac file css,image,.. phai dat trong public
app.set("view engine","ejs");

app.get("/home",function(req,res){
    res.render("home");
})

app.get("/cart",function(req,res){
    res.render("cart");
})

app.get("/shop",function(req,res){
    res.render("shop");
})

app.get("/about",function(req,res){
    res.render("about");
})

app.get("/login",function(req,res){
    res.render("login");
})

app.get("/sigin",function(req,res){
    res.render("signin");
})


const express=require("express");
const bodyParser=require("body-parser");
const http=require("http")



const app=express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))
app.set("view engine", "ejs");



app.get("/",function(req,res){
    res.render("list",{Fname:"Faeem"})
})

app.listen(3000,function(){
    console.log("server is running")
})
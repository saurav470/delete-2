const express=require("express");
const app=express();
const path=require("path");
const hbs=require("hbs");
const port=process.env.PORT||8000;
//static path
const staticPath=path.join(__dirname,"../public")
const templatePath=path.join(__dirname,"../public/views")
const partialPath=path.join(__dirname,"../public/partial")

app.use(express.static(staticPath))
// dynamic data
app.set("view engine","hbs");
app.set("views",templatePath);
hbs.registerPartials(partialPath);



//routing
app.get("/",(req,res)=>{
    res.status(200)
    res.render("index")
})
app.get("/about",(req,res)=>{
    res.status(200)
    res.render("about")
})
app.get("/weather",(req,res)=>{
    res.status(200)
    res.render("weather")
})
app.get("/*",(req,res)=>{
    res.status(404)
    res.render("404")
})

app.listen(port,()=>{
    console.log(`listen on port ${port}`);
})
    

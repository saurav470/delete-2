const express=require("express");
const app=express();
const path=require("path")
const hbs=require("hbs");
const port=process.env.port ||8000;
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
    res.render("index" ,{
        happy:"hgfjudhjklodfghiogiloudfioughbk"
    })
})
app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/weather",(req,res)=>{
    res.send("weather")
})
app.get("/*",(req,res)=>{
    res.render("404")
})

app.listen(port,"127.0.0.1",()=>{
    console.log(`listen on port ${port}`);
})
    

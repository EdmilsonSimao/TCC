const express = require("express")
const app = express()
const {engine} = require("express-handlebars")
const bodyParser = require("body-parser")
const adminRouter = require("./rotas/admin")
const path = require("path")

app.engine("handlebars", engine({defaultLayout:"main"}))
app.set("view engine", "handlebars")
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname,"public")))

app.use(adminRouter)

app.listen(3000, ()=>{
    console.log("servidor rodando na porta 3000")
})
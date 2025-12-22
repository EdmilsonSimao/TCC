const express = require("express")
const app = express()
const {engine} = require("express-handlebars")
const bodyParser = require("body-parser")
const adminRouter = require("./rotas/admin")
const routeUser = require("./rotas/routerUser")
const path = require("path")
const flash = require('connect-flash')
const session  = require('express-session')

// configuracao da session
app.use(session({
    secret:"turismo2024",
    resave:true,
    saveUninitialized:true
}))
// config mensagem flash
app.use(flash())

//midlawere para flash
app.use((req,res,next)=>{
    res.locals.success_msg = req.flash("success_msg")
    res.locals.error_msg = req.flash("error_msg")
    next()
})

//cponfiguracoes do handlebars
app.engine("handlebars", engine({defaultLayout:"main"}))
app.set("view engine", "handlebars")

// body parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// pasta publica
app.use(express.static(path.join(__dirname,"public")))

// rotas
app.use(adminRouter)
app.use(routeUser)

// servidor
app.listen(3000, ()=>{
    console.log("servidor rodando na porta 3000")
})
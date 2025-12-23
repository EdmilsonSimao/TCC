const express = require("express")
const route = express.Router()
const {logado} = require("../controls/helpers")

route.get("/", (req, res)=>{
    res.render("home")
})



route.get("/info/:nome", (req, res)=>{
  const pesquisa =  req.params.nome
  const lugar = [
        {
        categoria:"hotel",
        nome: "Hotel Presidente",
        descricao:"O Hotel Presidente tem 100 quartos, entre os quais 8 suites (4 seniores e 4 juniores) e 2 quartos para clientes com mobilidade reduzida",
        image:{
            image1:"./img/hotel-presidente/hotelpresidente.jpg",
            image2:"./img/hotel-continental/continental-1",
            image3:"./img/hotel-continental/continental-2",
            image4:"./img/hotel-continental/continental-3",
            image5:"./img/hotel-continental/continental-4",
        },
    },
        {
        categoria:"hotel",
        nome: "Hotel Epic-Sana",
        descricao:"O Hotel Epic-Sana tem 120 quartos, entre os quais 8 suites (4 seniores e 4 juniores) e 2 quartos para clientes com mobilidade reduzida",
        image:{
            image1:"./img/Epic-sana/epic_sana.jpg",
            image2:"./img/hotel-continental/continental-1",
            image3:"./img/hotel-continental/continental-2",
            image4:"./img/hotel-continental/continental-3",
            image5:"./img/hotel-continental/continental-4",
        },
    },
        {
        categoria:"hotel",
        nome: "Hotel Continental",
        descricao:". O Hotel Continental tem 83 quartos, entre os quais 8 suites (4 seniores e 4 juniores) e 2 quartos para clientes com mobilidade reduzida",
        image:{
            image1:"./img/hotel-continental/hotel-Continental.jpg",
            image2:"./img/hotel-continental/continental-1",
            image3:"./img/hotel-continental/continental-2",
            image4:"./img/hotel-continental/continental-3",
            image5:"./img/hotel-continental/continental-4",
        },
    }, {
        categoria:"praia e lazer",
        nome: "Praia do Mussulo",
        descricao:"praia com aguas calmas e quentes, ideal para familias com criancas pequenas",
        image:{
            image1:"./img/praia/praia.jpg",
            image2:"./img/praia/praia-1.jpg",
            image3:"./img/praia/praia-2.jpg",
            image4:"./img/praia/praia-3.jpg",
            image5:"./img/praia/praia.jpg",
        },
    },
        {
        categoria:"praia e lazer",
        nome: "Baia de Luanda",
         descricao:"praia com aguas calmas e quentes, ideal para familias com criancas pequenas",
        image:{
            image1:"./img/praia/praia.jpg",
            image2:"./img/praia/praia-1.jpg",
            image3:"./img/praia/praia-2.jpg",
            image4:"./img/praia/praia-3.jpg",
            image5:"./img/praia/praia.jpg",
        },
    },
        {
        categoria:"praia e lazer",
        nome: "Praia do cabuledo",
        descricao:"praia com aguas calmas e quentes, ideal para familias com criancas pequenas",
        image:{
            image1:"./img/praia/praia.jpg",
            image2:"./img/praia/praia-1.jpg",
            image3:"./img/praia/praia-2.jpg",
            image4:"./img/praia/praia-3.jpg",
            image5:"./img/praia/praia.jpg",
        },
        
    },
  {
        categoria:"História e Cultura",
        nome: "Museu naciona",
        descricao:"praia com aguas calmas e quentes, ideal para familias com criancas pequenas",
        image:{
            image1:"./img/cultura/cultura.jpg",
            image2:"./img/cultura/cultura-1.jpg",
            image3:"./img/cultura/cultura-2.jpg",
            image4:"./img/cultura/cultura-3.jpg",
            image5:"./img/cultura/cultura-4.jpg",
        },
        
    },
    {
        categoria:"História e Cultura",
        nome: "fortaleza de sao miguel",
        descricao:"praia com aguas calmas e quentes, ideal para familias com criancas pequenas",
        image:{
            image1:"./img/cultura/cultura.jpg",
            image2:"./img/cultura/cultura-1.jpg",
            image3:"./img/cultura/cultura-2.jpg",
            image4:"./img/cultura/cultura-3.jpg",
            image5:"./img/cultura/cultura-4.jpg",
        },
        
    },

{
        categoria:"História e Cultura",
        nome: "Museu naciona",
        descricao:"praia com aguas calmas e quentes, ideal para familias com criancas pequenas",
        image:{
            image1:"./img/cultura/cultura.jpg",
            image2:"./img/cultura/cultura-1.jpg",
            image3:"./img/cultura/cultura-2.jpg",
            image4:"./img/cultura/cultura-3.jpg",
            image5:"./img/cultura/cultura-4.jpg",
        },
        
    }


    ]

    console.log(pesquisa)
const pesquisar = lugar.filter(lugar => lugar.nome.startsWith(pesquisa))
console.log(pesquisar)
 res.render("turismo/info", {lugares: pesquisar})

})

route.get("/destino", (req, res)=>{
    res.render("destino")
})



route.get("/info", (req, res)=>{
    const lugar = [
        {
        categoria:"hotel",
        nome: "Hotel Presidente",
        descricao:"O Hotel Presidente tem 100 quartos, entre os quais 8 suites (4 seniores e 4 juniores) e 2 quartos para clientes com mobilidade reduzida",
        image:{
            image1:"./img/hotel-presidente/hotelpresidente.jpg",
            image2:"./img/hotel-continental/continental-1",
            image3:"./img/hotel-continental/continental-2",
            image4:"./img/hotel-continental/continental-3",
            image5:"./img/hotel-continental/continental-4",
        },
    },
        {
        categoria:"hotel",
        nome: "Hotel Epic-Sana",
        descricao:"O Hotel Epic-Sana tem 120 quartos, entre os quais 8 suites (4 seniores e 4 juniores) e 2 quartos para clientes com mobilidade reduzida",
        image:{
            image1:"./img/Epic-sana/epic_sana.jpg",
            image2:"./img/hotel-continental/continental-1",
            image3:"./img/hotel-continental/continental-2",
            image4:"./img/hotel-continental/continental-3",
            image5:"./img/hotel-continental/continental-4",
        },
    },
        {
        categoria:"hotel",
        nome: "Hotel Continental",
        descricao:". O Hotel Continental tem 83 quartos, entre os quais 8 suites (4 seniores e 4 juniores) e 2 quartos para clientes com mobilidade reduzida",
        image:{
            image1:"./img/hotel-continental/hotel-Continental.jpg",
            image2:"./img/hotel-continental/continental-1",
            image3:"./img/hotel-continental/continental-2",
            image4:"./img/hotel-continental/continental-3",
            image5:"./img/hotel-continental/continental-4",
        },
    }, {
        categoria:"praia e lazer",
        nome: "Praia do Mussulo",
        descricao:"praia com aguas calmas e quentes, ideal para familias com criancas pequenas",
        image:{
            image1:"./img/praia/praia.jpg",
            image2:"./img/praia/praia-1.jpg",
            image3:"./img/praia/praia-2.jpg",
            image4:"./img/praia/praia-3.jpg",
            image5:"./img/praia/praia.jpg",
        },
    },
        {
        categoria:"praia e lazer",
        nome: "Baia de Luanda",
         descricao:"praia com aguas calmas e quentes, ideal para familias com criancas pequenas",
        image:{
            image1:"./img/praia/praia-3.jpg",
            image2:"./img/praia/praia-1.jpg",
            image3:"./img/praia/praia-2.jpg",
            image4:"./img/praia/praia-3.jpg",
            image5:"./img/praia/praia.jpg",
        },
    },
        {
        categoria:"praia e lazer",
        nome: "Praia do cabuledo",
        descricao:"praia com aguas calmas e quentes, ideal para familias com criancas pequenas",
        image:{
            image1:"./img/praia/praia-2.jpg",
            image2:"./img/praia/praia-1.jpg",
            image3:"./img/praia/praia-2.jpg",
            image4:"./img/praia/praia-3.jpg",
            image5:"./img/praia/praia.jpg",
        },
        
    },
  {
        categoria:"História e Cultura",
        nome: "Largo das Heroínas",
        descricao:"praia com aguas calmas e quentes, ideal para familias com criancas pequenas",
        image:{
            image1:"./img/cultura/cultura-3.jpg",
            image2:"./img/cultura/cultura-1.jpg",
            image3:"./img/cultura/cultura-2.jpg",
            image4:"./img/cultura/cultura-3.jpg",
            image5:"./img/cultura/cultura-4.jpg",
        },
        
    },
    {
        categoria:"História e Cultura",
        nome: "Fortaleza de São Miguel",
        descricao:"praia com aguas calmas e quentes, ideal para familias com criancas pequenas",
        image:{
            image1:"./img/cultura/cultura-2.jpg",
            image2:"./img/cultura/cultura-1.jpg",
            image3:"./img/cultura/cultura-2.jpg",
            image4:"./img/cultura/cultura-3.jpg",
            image5:"./img/cultura/cultura-4.jpg",
        },
        
    },

{
        categoria:"História e Cultura",
        nome: "Museu Naciona",
        descricao:"praia com aguas calmas e quentes, ideal para familias com criancas pequenas",
        image:{
            image1:"./img/cultura/cultura-4.jpg",
            image2:"./img/cultura/cultura-1.jpg",
            image3:"./img/cultura/cultura-2.jpg",
            image4:"./img/cultura/cultura-3.jpg",
            image5:"./img/cultura/cultura-4.jpg",
        },
        
    }


    ]

    res.render("turismo/destinos", {lugares: lugar})
})

route.post("/pesquisa", (req, res)=>{

 const {pesquisa}= req.body
console.log(pesquisa)
   const lugar = [
        {
        categoria:"hotel",
        nome: "Hotel Presidente",
        descricao:"O Hotel Presidente tem 100 quartos, entre os quais 8 suites (4 seniores e 4 juniores) e 2 quartos para clientes com mobilidade reduzida",
        image:{
            image1:"./img/hotel-presidente/hotelpresidente.jpg",
            image2:"./img/hotel-continental/continental-1",
            image3:"./img/hotel-continental/continental-2",
            image4:"./img/hotel-continental/continental-3",
            image5:"./img/hotel-continental/continental-4",
        },
    },
        {
        categoria:"hotel",
        nome: "Hotel Epic-Sana",
        descricao:"O Hotel Epic-Sana tem 120 quartos, entre os quais 8 suites (4 seniores e 4 juniores) e 2 quartos para clientes com mobilidade reduzida",
        image:{
            image1:"./img/Epic-sana/epic_sana.jpg",
            image2:"./img/hotel-continental/continental-1",
            image3:"./img/hotel-continental/continental-2",
            image4:"./img/hotel-continental/continental-3",
            image5:"./img/hotel-continental/continental-4",
        },
    },
        {
        categoria:"hotel",
        nome: "Hotel Continental",
        descricao:". O Hotel Continental tem 83 quartos, entre os quais 8 suites (4 seniores e 4 juniores) e 2 quartos para clientes com mobilidade reduzida",
        image:{
            image1:"./img/hotel-continental/hotel-Continental.jpg",
            image2:"./img/hotel-continental/continental-1",
            image3:"./img/hotel-continental/continental-2",
            image4:"./img/hotel-continental/continental-3",
            image5:"./img/hotel-continental/continental-4",
        },
    }, {
        categoria:"praia e lazer",
        nome: "Praia do Mussulo",
        descricao:"praia com aguas calmas e quentes, ideal para familias com criancas pequenas",
        image:{
            image1:"./img/praia/praia.jpg",
            image2:"./img/praia/praia-1.jpg",
            image3:"./img/praia/praia-2.jpg",
            image4:"./img/praia/praia-3.jpg",
            image5:"./img/praia/praia.jpg",
        },
    },
        {
        categoria:"praia e lazer",
        nome: "Baia de Luanda",
         descricao:"praia com aguas calmas e quentes, ideal para familias com criancas pequenas",
        image:{
            image1:"./img/praia/praia.jpg",
            image2:"./img/praia/praia-1.jpg",
            image3:"./img/praia/praia-2.jpg",
            image4:"./img/praia/praia-3.jpg",
            image5:"./img/praia/praia.jpg",
        },
    },
        {
        categoria:"praia e lazer",
        nome: "Praia do cabuledo",
        descricao:"praia com aguas calmas e quentes, ideal para familias com criancas pequenas",
        image:{
            image1:"./img/praia/praia.jpg",
            image2:"./img/praia/praia-1.jpg",
            image3:"./img/praia/praia-2.jpg",
            image4:"./img/praia/praia-3.jpg",
            image5:"./img/praia/praia.jpg",
        },
        
    },
  {
        categoria:"História e Cultura",
        nome: "Museu naciona",
        descricao:"praia com aguas calmas e quentes, ideal para familias com criancas pequenas",
        image:{
            image1:"./img/cultura/cultura.jpg",
            image2:"./img/cultura/cultura-1.jpg",
            image3:"./img/cultura/cultura-2.jpg",
            image4:"./img/cultura/cultura-3.jpg",
            image5:"./img/cultura/cultura-4.jpg",
        },
        
    },
    {
        categoria:"História e Cultura",
        nome: "fortaleza de sao miguel",
        descricao:"praia com aguas calmas e quentes, ideal para familias com criancas pequenas",
        image:{
            image1:"./img/cultura/cultura.jpg",
            image2:"./img/cultura/cultura-1.jpg",
            image3:"./img/cultura/cultura-2.jpg",
            image4:"./img/cultura/cultura-3.jpg",
            image5:"./img/cultura/cultura-4.jpg",
        },
        
    },

{
        categoria:"História e Cultura",
        nome: "Museu naciona",
        descricao:"praia com aguas calmas e quentes, ideal para familias com criancas pequenas",
        image:{
            image1:"./img/cultura/cultura.jpg",
            image2:"./img/cultura/cultura-1.jpg",
            image3:"./img/cultura/cultura-2.jpg",
            image4:"./img/cultura/cultura-3.jpg",
            image5:"./img/cultura/cultura-4.jpg",
        },
        
    }


    ]

    if(pesquisa){
        const pesquisar = lugar.filter(lugar => lugar.categoria === pesquisa )
        console.log(pesquisar)
        res.render("turismo/destinos", {lugares: pesquisar})
    }else{
        res.redirect("/")
    }

   
})

route.get("/contacto", (req, res)=>{
    res.render("contacto")
})

route.get("/sobre", (req, res)=>{
    res.render("sobre")
})
route.get("/servicos", (req, res)=>{
    res.render("servicos")
})
route.get("/destinos", (req, res)=>{
    res.render("turismo/destinos")
})

route.get("/tur",(req, res)=>{
  
 const search = req.body
console.log(search)
    const lugar = [
            {
        categoria:"hotel",
        nome: "Hotel Continental",
        image:{
            image1:"./img/hotel-continental/hotel-Continental.jpg",
            image2:"./img/hotel-continental/continental-1",
            image3:"./img/hotel-continental/continental-2",
            image4:"./img/hotel-continental/continental-3",
            image5:"./img/hotel-continental/continental-4",
        },
        descricao:". O Hotel Continental tem 83 quartos, entre os quais 8 suites (4 seniores e 4 juniores) e 2 quartos para clientes com mobilidade reduzida"
    },
        {
        categoria:"hotel",
        nome: "Hotel Presidente",
        image:{
            image1:"./img/hotel-presidente/hotelpresidente.jpg",
            image2:"./img/hotel-continental/continental-1",
            image3:"./img/hotel-continental/continental-2",
            image4:"./img/hotel-continental/continental-3",
            image5:"./img/hotel-continental/continental-4",
        },
        descricao:". O Hotel Continental tem 83 quartos, entre os quais 8 suites (4 seniores e 4 juniores) e 2 quartos para clientes com mobilidade reduzida"
    },
        {
        categoria:"hotel",
        nome: "Hotel Epic-Sana",
        image:{
            image1:"./img/Epic-sana/epic_sana.jpg",
            image2:"./img/hotel-continental/continental-1",
            image3:"./img/hotel-continental/continental-2",
            image4:"./img/hotel-continental/continental-3",
            image5:"./img/hotel-continental/continental-4",
        },
        descricao:". O Hotel Continental tem 83 quartos, entre os quais 8 suites (4 seniores e 4 juniores) e 2 quartos para clientes com mobilidade reduzida"
    },
        {
        categoria:"hotel", 
        nome: "Hotel Continental",
        image:{
            image1:"./img/hotel-continental/hotel-Continental.jpg",
            image2:"./img/hotel-continental/continental-1",
            image3:"./img/hotel-continental/continental-2",
            image4:"./img/hotel-continental/continental-3",
            image5:"./img/hotel-continental/continental-4",
        },
        descricao:". O Hotel Continental tem 83 quartos, entre os quais 8 suites (4 seniores e 4 juniores) e 2 quartos para clientes com mobilidade reduzida"
    },
        {
        categoria:"hotel",
        nome: "Hotel Continental",
        image:{
            image1:"./img/hotel-continental/hotel-Continental.jpg",
            image2:"./img/hotel-continental/continental-1",
            image3:"./img/hotel-continental/continental-2",
            image4:"./img/hotel-continental/continental-3",
            image5:"./img/hotel-continental/continental-4",
        },
        descricao:". O Hotel Continental tem 83 quartos, entre os quais 8 suites (4 seniores e 4 juniores) e 2 quartos para clientes com mobilidade reduzida"
    }, {
        categoria:"praia",
        nome: "Praia do Mussulo",
        image:{
            image1:"./img/praia/mussulo.jpg",
            image2:"./img/praia/b",
            image3:"./img/praia/",
            image4:"./img/praia/",
            image5:"./img/praia/",
        },
        descricao:". O Hotel Continental tem 83 quartos, entre os quais 8 suites (4 seniores e 4 juniores) e 2 quartos para clientes com mobilidade reduzida"
    },
        {
        categoria:"praia",
        nome: "Baia de Luanda",
        image:{
            image1:"./img/praia/Baia.jpg",
            image2:"./img/praia/b",
            image3:"./img/praia/",
            image4:"./img/praia/",
            image5:"./img/praia/",
        },
        descricao:". O Hotel Continental tem 83 quartos, entre os quais 8 suites (4 seniores e 4 juniores) e 2 quartos para clientes com mobilidade reduzida"
    },

          {
        categoria:"praia",
        nome: "Praia de Cacuaco",
        image:{
            image1:"./img/praia/Kalandula.jpg",
            image2:"./img/praia/b",
            image3:"./img/praia/",
            image4:"./img/praia/",
            image5:"./img/praia/",
        },
        descricao:". O Hotel Continental tem 83 quartos, entre os quais 8 suites (4 seniores e 4 juniores) e 2 quartos para clientes com mobilidade reduzida"
    }
    ]

    res.render("turismo/tur", {lugares: lugar})
})

route.get("/perfil", logado, (req, res)=>{
    res.render("perfil")
})

route.get("/pagamento", (req, res)=>{
    res.render("pagamento")
})

route.get("/dashboard", (req, res)=>{
    res.render("dashboard")
})
route.get("/hospedagem", (req, res)=>{
    res.render("hoteis/hospedagem")
})

route.get("/pesquisa", (req, res)=>{
    res.send("Psquisas")
})


module.exports = route;
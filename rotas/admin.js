const express = require("express")

const route = express.Router()

route.get("/", (req, res)=>{
    res.render("home")
})

route.get("/info", (req, res)=>{
    res.render("turismo/destinos")
})

route.get("/info/:nome", (req, res)=>{
  const pesquisa =  req.params.nome
      const lugar = [
            {
        categoria:"hotel",
        nome: "Hotel Continental",
        image:{
            image1:"/img/hotel-continental/hotel-Continental.jpg",
            image2:"/img/hotel-continental/continental-1.jpg",
            image3:"/img/hotel-continental/continental-2.jpg",
            image4:"/img/hotel-continental/continental-3.jpg",
            image5:"/img/hotel-continental/continental-4.jpg",
        },
        descricao:". O Hotel Continental tem 83 quartos, entre os quais 8 suites (4 seniores e 4 juniores) e 2 quartos para clientes com mobilidade reduzida"
    },
        {
        categoria:"hotel",
        nome: "Hotel Presidente",
        image:{
            image1:"/img/hotel-presidente/hotelpresidente.jpg",
            image2:"/img/hotel-presidente/hotelpresidente -1.jpg",
            image3:"/img/hotel-presidente/hotelpresidente -2.jpg",
            image4:"/img/hotel-presidente/hotelpresidente -3.jpg",
            image5:"/img/hotel-presidente/hotelpresidente -4.jpg",
        },
        descricao:". O Hotel Continental tem 83 quartos, entre os quais 8 suites (4 seniores e 4 juniores) e 2 quartos para clientes com mobilidade reduzida"
    },
        {
        categoria:"hotel",
        nome: "Hotel Epic-Sana",
        image:{
            image1:"/img/Epic-sana/epic_sana.jpg",
            image2:"/img/Epic-sana/epcisana-1.jpg",
            image3:"/img/Epic-sana/epicsana-2.jpg",
            image4:"/img/Epic-sana/epicsana-3.jpg",
            image5:"/img/Epic-sana/epicsana-4.jpg",
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
            image1:"/img/praia/Kalandula.jpg",
            image2:"/img/praia/b",
            image3:"/img/praia/",
            image4:"/img/praia/",
            image5:"/img/praia/",
        },
        descricao:". O Hotel Continental tem 83 quartos, entre os quais 8 suites (4 seniores e 4 juniores) e 2 quartos para clientes com mobilidade reduzida"
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

route.get("/login", (req, res)=>{
    res.render("login")
})

route.get("/pesquisar", (req, res)=>{

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

    res.render("pesquisar", {lugares: lugar})
})

route.post("/pesquisa", (req, res)=>{

 const {pesquisa}= req.body
console.log(pesquisa.length)
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

    if(pesquisa.length > 0){
        const pesquisar = lugar.filter(lugar => lugar.categoria === pesquisa )
        res.render("pesquisar", {lugares: pesquisar})
    }else{
        res.redirect("/pesquisar")
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

route.get("/perfil", (req, res)=>{
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


module.exports = route;
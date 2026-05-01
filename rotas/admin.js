const express = require("express")
const route = express.Router()
const {logado} = require("../controls/helpers")
const {checkReservas} = require("../controls/controlsUsers")
const {addReserva, getReservas, allReservas, updateReserva, getReservaId, deleteReserva} = require("../models/reservas")

//  Lugares
const lugar = [
        {
        id:1,
        categoria:"hotel",
        nome: "Hotel Presidente",
        descricao:"O Hotel Presidente tem 100 quartos, entre os quais 8 suites (4 seniores e 4 juniores) e 2 quartos para clientes com mobilidade reduzida",
        image:{
            image1:"/img/hotel-presidente/hotelpresidente.jpg",
            image2:"/img/hotel-presidente/hotelpresidente -1.jpg",
            image3:"/img/hotel-presidente/hotelpresidente -2.jpg",
            image4:"/img/hotel-presidente/hotelpresidente -3.jpg",
            image5:"/img/hotel-presidente/hotelpresidente -4.jpg",
        },
    },
        {
        id:2,
        categoria:"hotel",
        nome: "Hotel Epic-Sana",
        descricao:"O Hotel Epic-Sana tem 120 quartos, entre os quais 8 suites (4 seniores e 4 juniores) e 2 quartos para clientes com mobilidade reduzida",
        image:{
            image1:"/img/Epic-sana/epic_sana.jpg",
            image2:"/img/Epic-sana/epicsana-2.jpg",
            image3:"/img/Epic-sana/epicsana-3.jpg",
            image4:"/img/Epic-sana/epicsana-4.jpg",
          
        },
    },
        {
        id:3,
        categoria:"hotel",
        nome: "Hotel Continental",
        descricao:". O Hotel Continental tem 83 quartos, entre os quais 8 suites (4 seniores e 4 juniores) e 2 quartos para clientes com mobilidade reduzida",
        image:{
            image1:"/img/hotel-continental/hotel-Continental.jpg",
            image2:"/img/hotel-continental/continental-1.jpg",
            image3:"/img/hotel-continental/continental-2.jpg",
            image4:"/img/hotel-continental/continental-3.jpg",
         
        },
    }, {
        id:4,
        categoria:"praia e lazer",
        nome: "Praia do Morena",
        descricao:"praia com aguas calmas e quentes, ideal para familias com criancas pequenas",
        image:{
            image1:"/img/praia/praia_morena/morena (4).jpg",
            image2:"/img/praia/praia_morena/morena (1).jpg",
            image3:"/img/praia/praia_morena/morena (2).jpg",
            image4:"/img/praia/praia_morena/morena (3).jpg",
           
        },
    },
        {
        id:5,
        categoria:"praia e lazer",
        nome: "Baia de Luanda",
         descricao:"praia com aguas calmas e quentes, ideal para familias com criancas pequenas",
        image:{
            image1:"/img/praia/praia.jpg",
            image2:"/img/praia/baia/baia (1).jpg",
            image3:"/img/praia/baia/baia (2).jpg",
            image4:"/img/praia/baia/baia (3).jpg",
            
        },
    },
        {
        id:6,
        categoria:"praia e lazer",
        nome: "Praia do Mussulo",
        descricao:"praia com aguas calmas e quentes, ideal para familias com criancas pequenas",
        image:{
            image1:"/img/praia/mussulo/mussulo (1).jpg",
            image2:"/img/praia/mussulo/mussulo (4).jpg",
            image3:"/img/praia/mussulo/mussulo (2).jpg",
            image4:"/img/praia/mussulo/mussulo (3).jpg",
            
        },
        
    },
  {
        id:7,
        categoria:"História e Cultura",
        nome: "Reserva nacional da Csala",
        descricao:"praia com aguas calmas e quentes, ideal para familias com criancas pequenas",
        image:{
            image1:"/img/cultura/cultura.jpg",
            image2:"/img/cultura/reserva da caala/reserva (1).jpg",
            image3:"/img/cultura/reserva da caala/reserva (2).jpg",
            image4:"/img/cultura/reserva da caala/reserva (3).jpg",
        },
        
    },
    {
        id:8,
        categoria:"História e Cultura",
        nome: "Palacio de Ferro",
        descricao:"praia com aguas calmas e quentes, ideal para familias com criancas pequenas",
        image:{
            image1:"/img/cultura/placio de ferro/palacio (1).jpg",
            image2:"/img/cultura/placio de ferro/palacio (2).jpg",
            image3:"/img/cultura/placio de ferro/palacio (3).jpg",
            image4:"/img/cultura/placio de ferro/palacio (4).jpg",
            image5:"/img/cultura/placio de ferro/palacio (5).jpg",
        },
        
    },

{
        id:9,
        categoria:"História e Cultura",
        nome: "Museu naciona",
        descricao:"praia com aguas calmas e quentes, ideal para familias com criancas pequenas",
        image:{
            image1:"/img/cultura/cultura.jpg",
            image2:"/img/cultura/Musues de Luanda/museu_escravatura.jpg",
            image3:"/img/cultura/Museus de Luanda/Museu_da_moeda.jpg",
            image4:"/img/cultura/cultura-3.jpg",
            image5:"/img/cultura/cultura-4.jpg",
        },
        
    }


    ]

    // vetor restaurante
const restaurantes = [
    {
      id: 1,
      nome: "Restaurante Bar Convés",
      tipo: "Tradicional",
      tipoClass: "badge-warning",
      localizacao: "Luanda, Ilha do Cabo, Clube Náutico.",
      imagem: {
        image1:"/img/restaurantes/bar_conves/bar_conves (1).png",
        image2:"/img/restaurantes/bar_conves/bar_conves (2).jpg",
        image3:"/img/restaurantes/bar_conves/bar_conves (3).jpg",
        image4:"/img/restaurantes/bar_conves/bar_conves (4).jpg",
      },
      pratos: ["Muamba de Galinha", "Funje", "Calulu"],
      preco_medio: "4.000",
      avaliacao: 4,
      url_map:"https://www.google.com/maps/search/?api=1&query=O+Conv%C3%A9s+Restaurante+Luanda+Angola"
    },
    {
      id: 2,
      nome: "Beach Club",
      tipo: "Luxo",
      tipoClass: "badge-info",
      localizacao: "Luanda, Avenida Murtala Mohammed,",
      imagem: {
        image1:"/img/restaurantes/beach_club/beatch_club (1).jpg",
        image2:"/img/restaurantes/beach_club/beatch_club (2).jpg",
        image3:"/img/restaurantes/beach_club/beatch_club (3).jpg",
        image4:"/img/restaurantes/beach_club/beatch_club (4).jpg",
      },
      pratos: ["Feijoada", "Peixe Grelhado"],
      preco_medio: "6.500",
      avaliacao: 5,
      url_map:"https://www.google.com/maps/search/?api=1&query=Beach+Club+Luanda+Angola"
    },
    {
      id: 3,
      nome: "Espaço Baia",
      tipo: "Luxo",
      tipoClass: "badge-success",
      localizacao: "Talatona",
      imagem: {
        image1:"/img/restaurantes/espaco_bahia/espaco_baia (1).jpg",
        image2:"/img/restaurantes/espaco_bahia/espaco_baia (2).jpg", 
        image3:"/img/restaurantes/espaco_bahia/espaco_baia (3).jpg",
        image4:"/img/restaurantes/espaco_bahia/espaco_baia (4).jpg",
      },
      pratos: ["Lagosta Grelhada", "Carne Wagyu", "Vinhos Premium"],
      preco_medio: "25.000",
      avaliacao: 5,
      url_map:"https://www.google.com/maps/search/?api=1&query=Espa%C3%A7o+Baia+Luanda+Angola"
    }
  ]

//Eventos
  const eventos = [
    {
      id: 1,
      nome: "Festival Summer Beats",
      data: "15 Julho 2026",
      local: "São Paulo - Brasil",
      descricao: "12 atrações confirmadas e experiência VIP disponível.",
      preco: "180.00",
      imagem: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2"
    },
    {
      id: 2,
      nome: "Turnê Rock World 2026",
      data: "02 Agosto 2026",
      local: "Rio de Janeiro - Brasil",
      descricao: "Banda internacional com palco 360°.",
      preco: "250.00",
      imagem: "https://images.unsplash.com/photo-1497032205916-ac775f0649ae"
    },
    {
      id: 3,
      nome: "Jazz Night Experience",
      data: "18 Setembro 2026",
      local: "Curitiba - Brasil",
      descricao: "Noite especial com músicos premiados.",
      preco: "120.00",
      imagem: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
    },
    {
      id: 4,
      nome: "Eletronic Sunset Tour",
      data: "10 Outubro 2026",
      local: "Florianópolis - Brasil",
      descricao: "DJ internacional com show de luzes e efeitos especiais.",
      preco: "220.00",
      imagem: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745"
    }
  ];


// Home rota
route.get("/", (req, res)=>{
    res.render("home")
})

// Info rota with id param
route.get("/info/:id", (req, res)=>{
  const destinoId =  req.params.id
   
const pesquisar= lugar.filter(lugar => lugar.id == destinoId)
 res.render("turismo/info", {lugares: pesquisar[0]})

})
// Info rota
route.get("/info", (req, res)=>{
  
    res.render("turismo/destinos", {lugares: lugar})
})
// Pesquisa rota
route.post("/pesquisa", (req, res)=>{

 const {pesquisa}= req.body

    if(pesquisa){
        const pesquisar = lugar.filter(lugar => lugar.nome === pesquisa || lugar.categoria.startsWith(pesquisa) || lugar.nome.endsWith(pesquisa) || lugar.nome.includes(pesquisa))
        console.log(pesquisar)
        res.render("turismo/destinos", {lugares: pesquisar})
    }else{
           res.render("home", {erro:{texto:"Nenho resultado enctrado ara esta pesquisa"}})
    }

   
})

route.get("/pesquisa/:nome", (req, res)=>{

 const pesquisa= req.params.nome


    if(pesquisa){
        const pesquisar = lugar.filter(lugar => lugar.nome === pesquisa || lugar.categoria.startsWith(pesquisa) || lugar.nome.endsWith(pesquisa) || lugar.nome.includes(pesquisa))
        console.log(pesquisar)
        res.render("turismo/destinos", {lugares: pesquisar})
    }else{
        res.render("home", {erro:{texto:"Nenho resultado enctrado ara esta pesquisa"}})
    }

   
})

// Contacto rota
route.get("/contacto", (req, res)=>{
    res.render("contacto")
})
// About rota
route.get("/sobre", (req, res)=>{
    res.render("sobre")
})
// Servicos rota
route.get("/servicos", (req, res)=>{
    res.render("servicos")
})
// Destinos rota
route.get("/destinos", (req, res)=>{
    res.render("turismo/destinos")
})
// Turismo rota
route.get("/tur",(req, res)=>{
  
 const search = req.body
    console.log(search)
    res.render("turismo/tur", {lugares: lugar})
})
// Perfil rota

route.get("/perfil", logado, async(req, res)=>{
    try {
        const minhaReserva = await  getReservas(req.user.id)
      res.render("perfil", {reservas: minhaReserva.map(reserva => ({
        id: reserva.id,
        destino: reserva.destino,
        data_checkin: new Date(reserva.data_checkin).toLocaleDateString('pt-PT'),
        n_pessoas: reserva.n_pessoas,
        status: reserva.status
      }))})
    } catch (error) {
        res.render("perfil", {erros: [{texto:"não efetuaste nenhum!"}]})
    }
    
})
// Pagamento rota
route.get("/pagamento", (req, res)=>{
    res.render("pagamento")
})

// Dashboard rota
route.get("/dashboard", logado, (req, res)=>{
    res.render("dashboard")
})
// Add hospedagem rota
route.get("/hospedagem", (req, res)=>{
    res.render("hoteis/hospedagem")
})

// Add reserva rota
route.post("/reserva", checkReservas, (req, res)=>{

    try{
        addReserva(req.body, req.user.id)
            req.query.toast = "Reserva feita com sucesso!"
            req.flash("success_msg", [{texto:"Reserva feita com sucesso!"}])
            res.redirect(`info/${req.body.id}`) 
         
    
    } 
    catch(err){
        console.log("Não foi possivel adicionar a reserva "+ err)
        req.flash("error_msg", [{texto:"Não foi possivel processar a sua reserva, tente novamente!"}])
        res.redirect(`info/${req.body.id}`) 
    }
})

// Minha reserva rota admin
route.get("/minhaReserva", logado, async(req, res)=>{
    try {
     const minhaReserva = await getReservas(req.user.id)
    res.render("turismo/reservas", {reservas: minhaReserva.map(reserva => ({
        id: reserva.id,
        destino: reserva.destino,
        data_checkin: new Date(reserva.data_checkin).toLocaleDateString('pt-PT'),
        n_pessoas: reserva.n_pessoas,
        status: reserva.status
    }))})
    } catch (error) {
        res.render("turismo/reservas", {erro: [{texto:"Não foi possivel listar as reservas"}]})
    }
  
})

// Minha reserva rota usuario
route.get("/user/minhaReserva", logado, async(req, res)=>{
    try {
     const minhaReserva = await getReservas(req.user.id)
    res.render("turismo/minhaReserva", {reservas: minhaReserva.map(reserva => ({
        id: reserva.id,
        destino: reserva.destino,
        data_checkin: new Date(reserva.data_checkin).toLocaleDateString('pt-PT'),
        data_checkout: new Date(reserva.data_checkout).toLocaleDateString('pt-PT'),
        n_pessoas: reserva.n_pessoas,
        status: reserva.status
    }))})
    } catch (error) {
        res.render("turismo/minhaReserva", {erro: [{texto:"Não foi possivel listar as reservas"}]})
    }
  
})

// Todas as reservas rota admin
route.get("/allReservas",logado, async(req, res)=>{
    try {
     const minhaReserva = await allReservas()
    res.render("turismo/reservas", {reservas: minhaReserva.map(reserva => ({
        id: reserva.id,
        destino: reserva.destino,
        data_checkin: new Date(reserva.data_checkin).toLocaleDateString('pt-PT'),
        n_pessoas: reserva.n_pessoas,
        status: reserva.status,
        cliente: reserva.cliente
    }))})

    } catch (error) { 
        res.redirect("/")
    }
  
})
// Update reserva rota
route.get("/updateReserva/:id", logado, async(req, res)=>{
    try {
        const [reservas]= await getReservaId(req.params.id, req.user.id)
        function formatDateLocal(date) {
            const d = new Date(date)
            const year = d.getFullYear()
            const month = String(d.getMonth() + 1).padStart(2, "0")
            const day = String(d.getDate()).padStart(2, "0")
                return `${year}-${month}-${day}`
                }
        const value = {
              id: reservas.id,
            destino: reservas.destino,
            data_checkin: formatDateLocal(reservas.data_checkin),
            data_checkout: formatDateLocal(reservas.data_checkout),
            n_pessoas: reservas.n_pessoas,
            status: reservas.status,
            email_cliente: reservas.email_cliente,
            telefone_cliente: reservas.telefone_cliente,
            cliente: reservas.cliente
        }
        if(!req.user.admin){
            return res.render("turismo/detalhesReserva", {reserva : value})
        }
        res.render("turismo/updateReserva", {reserva : value})
    }catch (error) {
        res.render("turismo/reservas", {erros: [{texto: "não foi possível carregar a página de atualização da reserva "+ error}]})
    }
})

route.post("/updateReservas/:id", logado, async(req, res)=>{
     try{
        const [reservaAtualizada ] = await updateReserva(req.body, req.params.id) 
        if(!reservaAtualizada){
            return res.render("turismo/reservas", {erros: [{texto: "não foi possível atualizar a reserva, tente novamente"}]})
        }

        function formatDateLocal(date) {
            const d = new Date(date)
            const year = d.getFullYear()
            const month = String(d.getMonth() + 1).padStart(2, "0")
            const day = String(d.getDate()).padStart(2, "0")
            return `${year}-${month}-${day}`
            }

        const [reservas]= await getReservaId(req.params.id, req.user.id)
        console.log("minuha reserva "+reservaAtualizada)
        const value = {
             id: reservas.id,
            destino: reservas.destino,
            data_checkin: formatDateLocal(reservas.data_checkin),
            data_checkout: formatDateLocal(reservas.data_checkout),
            n_pessoas: reservas.n_pessoas,
            status: reservas.status,
            email_cliente: reservas.email_cliente,
            telefone_cliente: reservas.telefone_cliente,
            cliente: reservas.cliente

            }
             res.render("turismo/updateReserva", {reserva : value, success_msg: [{texto: "reserva atualizada com sucesso!"}]})
     }catch(error){
        res.render("turismo/reservas", {erros: [{texto: "não foi possível atualizar a reserva, tente novamente "+ error}]})
     }
})
// Delete reserva rota
route.get("/deleteReserva/:id", async(req, res)=>{
    try{
        const minhaReserva = await allReservas()
        const delet =  await deleteReserva(req.params.id)
        res.render("turismo/reservas", {reservas: minhaReserva.map(reserva => ({
        id: reserva.id,
        destino: reserva.destino,
        data_checkin: new Date(reserva.data_checkin).toLocaleDateString('pt-PT'),
        n_pessoas: reserva.n_pessoas,
        status: reserva.status,
        cliente: reserva.cliente
    })), success_msg:[{texto: "reserva removida com sucesso!"}]
})
    }catch(error){
        res.render("turismo/reserva", {erros:[{texto: "Não foi possível remover a reserva!"}]})
    }
})
// Restaurantes rota
route.get("/restaurantes", (req, res) => {
  

  res.render("restaurantes/restaurante", { restaurantes })
} 
);
// Detalhes do restaurante rota
route.get("/restaurantes/:id", (req, res) => {
try {

    const restauranteId = parseInt(req.params.id, 10);
    const restaurante = restaurantes.find(res => res.id === restauranteId);
    console.log(restaurante)
res.render("restaurantes/detalhesRestaurante", { restaurante })
}
    catch (error) {
  res.render("erro", {
    mensagem: "Erro ao carregar detalhes do restaurante",
    erro: error
    })
}
});

// Página de reservas de mesa rota
route.get("/reservasMesa/:id", logado, async (req, res) => {
  res.render("restaurantes/reservaMesa",{id : req.params.id})
})

// SALVAR RESERVA
route.post("/reservas/restaurante/:id", logado, async (req, res) => {
  try {
    await criarReservaMesa({
      restaurante_id: req.params.id,
      user_id: req.user.id,
      data_reserva: req.body.data_reserva,
      hora_reserva: req.body.hora_reserva,
      n_pessoas: req.body.n_pessoas,
      observacoes: req.body.observacoes,
    })

    res.redirect("/minhas-reservas")

  } catch (error) {
    res.render("erro", {
      mensagem: "Erro ao criar reserva",
      erro: error
    })
  }
})

route.get("/teste", (req, res) => {

  
  res.render("texte", { eventos });

});

route.get("/praia/:id", (req, res) => {
   const id = parseInt(req.params.id, 10)
   const re = lugar.filter(lugar => lugar.categoria === "praia e lazer" && lugar.id === id) 

    res.render("DetalhePraias", { praia: re,  eventos: [
    {
      titulo: "Festival de Verão",
      data: "12/01/2026",
      local: "Orla da Praia",
      descricao: "Música ao vivo e gastronomia local.",
      preco: "R$ 120,00",
      imagem: "/img/eventos/evento (1).jpg",
      link: "#"
    },
    {
      titulo: "Festival de Verão",
      data: "12/01/2026",
      local: "Orla da Praia",
      descricao: "Música ao vivo e gastronomia local.",
      preco: "R$ 120,00",
      imagem: "/img/eventos/evento (2).jpg",
      link: "#"
    }
    ,
    {
      titulo: "Festival de Verão",
      data: "12/01/2026",
      local: "Orla da Praia",
      descricao: "Música ao vivo e gastronomia local.",
      preco: "R$ 120,00",
      imagem: "/img/eventos/evento (3).jpg",
      link: "#"
    }
  ] })
  
})  


module.exports = route;

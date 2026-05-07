const express= require ("express")
const  {addUser, deleteUser, getUser, updateUser, userOn}= require("../models/users")
const {checkUsers, validarLogin} = require("../controls/controlsUsers")
const bcrypt = require ("bcryptjs")
const passport = require("passport")
const { logado } = require("../controls/helpers")

const router = express.Router()
// listar usuariso
router.get("/users", async(req, res)=>{
    
     try{
       const users = await getUser()
       res.json(users)
     }catch(err){
        res.json({message:"Não conseguimos listar os usuarios "+ err})
     }

})

// listar usuario por id
router.get("/users/:id", logado, async(req, res)=>{
    
    const id = req.params.id
     try{
       const users = await userOn(id)
      //formartar dados do usuário
        function formatDateLocal(date) {
            const d = new Date(date)
            const year = d.getFullYear()
            const month = String(d.getMonth() + 1).padStart(2, "0")
            const day = String(d.getDate()).padStart(2, "0")
            return `${day}/${month}/${year}`
            }

       const user = {
        id:users[0].id,
        nome: users[0].nome, 
        data_nascimento: formatDateLocal(users[0].data_nascimento), 
        email:users[0].email,
        telefone: users[0].telefone,
        pais:users[0].pais,
        genero:users[0].genero
      }
      console.log(user.data_nascimento)
      res.render("updateUsers", {usuario:user})
     }catch(err){
        res.json({message:"Não conseguimos listar os Usuario! "+ err})
     }

})

// actualizar usuario
router.post("/updateusers/:id", logado, async(req, res)=>{

     try{
       const users = await updateUser(req.body, req.params.id)
       console.log(users)
        res.render("users", {usuarios:users})
     }catch(err){
        res.json({message:"Não conseguimos actualizar este Usuario! "+ err})
     }

})

// pagina de cadastro
router.get("/cadastro",  (req, res)=>{
   res.render("cadastro",{
    layout: "clean",
    title: "Login"
  })
})
// adicionar usuario
router.post("/addUsers", checkUsers, async (req, res) => {
  const {
    nome,
    data_nascimento,
    email,
    genero,
    telefone,
    pais,
    senha
  } = req.body;

  try {
    const hash = await bcrypt.hash(senha, 10);

    const userData = {
      nome: nome,
      data_nascimento: data_nascimento,
      email: email,
      genero: genero,
      telefone: telefone,
      pais: pais,
      senha: hash,
      admin: 1
    };

    await addUser(userData);

    return res.redirect("/login");

  } catch (err) {
    console.error(err);
    return res.render("cadastro", {
      erros: [{ texto: "Erro ao criar usuário. Tente novamente." }]
    });
  }
});

// deletar usuario
router.get("/deleteusers/:id", logado, async(req, res)=>{
   
     try{
       const users = await deleteUser(req.params.id)
        res.status(200).json({message:"Usuario deletado com sucesso!"})
     }catch(err){
        res.json({message:"Não conseguimos actualizar este Usuario! "+ err})
     }

})
// pagina de login
router.get("/login", (req, res)=>{
    res.render("login",{
    layout: "clean",
    title: "Login"
  },)
})

// processar login
router.post("/login", validarLogin, (req, res, next)=>{
   passport.authenticate("local", {
      successRedirect:"/",
      failureRedirect:"/cadastro",
      failureFlash:true
   })(req, res, next)

})
// logout
router.get("/logout", (req, res)=>{
  req.logout(function (err) {
    if (err) { return next(err); }

    req.flash("success", "Sessão terminada com sucesso");
    return res.redirect("/");
      });
})



module.exports = router;

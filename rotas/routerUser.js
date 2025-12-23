const express= require ("express")
const  {addUser, deleteUser, getUser, updateUser, userOn}= require("../models/users")
const {checkUsers, validarLogin} = require("../controls/controlsUsers")
const bcrypt = require ("bcryptjs")
const passport = require("passport")

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
router.get("/users/:id", async(req, res)=>{
    
    const id = req.params.id
     try{
       const users = await userOn(id)
       users.length != 0 ? res.status(200).json(users) : res.json({message:"Este usuario não existe!"})
     }catch(err){
        res.json({message:"Não conseguimos listar os Usuario! "+ err})
     }

})

// actualizar usuario
router.put("/updateusers/:id", async(req, res)=>{

     try{
       const users = await updateUser(req.body, req.params.id)
        res.status(200).json({message:"Usuario actualizado com sucesso!"})
     }catch(err){
        res.json({message:"Não conseguimos actualizar este Usuario! "+ err})
     }

})

// pagina de cadastro
router.get("/cadastro", (req, res)=>{
   res.render("cadastro")
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
router.delete("/deleteusers/:id", async(req, res)=>{
   
     try{
       const users = await deleteUser(req.params.id)
        res.status(200).json({message:"Usuario deletado com sucesso!"})
     }catch(err){
        res.json({message:"Não conseguimos actualizar este Usuario! "+ err})
     }

})
// pagina de login
router.get("/login", (req, res)=>{
    res.render("login")
})

// processar login
router.post("/login", validarLogin, (req, res, next)=>{
   passport.authenticate("local", {
      successRedirect:"/perfil",
      failureRedirect:"/cadastro",
      failureFlash:true
   })(req, res, next)

})

router.get("/logout", (req, res)=>{
   req.logout()
   res.redirect("/")
})



module.exports = router;

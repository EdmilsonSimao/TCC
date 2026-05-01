const db = require("../models/database")
const bcrypt = require("bcryptjs")


// Middleware para validar dados do usuário durante o cadastro
const checkUsers = (req, res, next) => {
  const erro = [];

  const {
    nome,
    data_nascimento,
    email,
    telefone,
    senha,
    confirmar_senha
  } = req.body;

  const dataNascimento = new Date(data_nascimento);
  const hoje = new Date();
  const idade = hoje.getFullYear() - dataNascimento.getFullYear();

  if (!nome || nome.length < 3) {
    erro.push({ texto: "O nome deve ter no mínimo 3 caracteres." });
  }

  if (senha !== confirmar_senha) {
    erro.push({ texto: "As senhas não coincidem." });
  }

  if (!email || email.length < 10) {
    erro.push({ texto: "Por favor, insira um email válido." });
  }

  if (idade < 18) {
    erro.push({ texto: "Apenas maiores de idade." });
  }

  if (erro.length > 0) {
    return res.render("cadastro", { erros: erro });
  }

  next();
};

// Middleware para validar dados do usuário durante o login
const validarLogin = async(req, res, next) => {
  const { email, senha } = req.body;
    const erro = [];
try{
  const [user] = await db.execute("SELECT * FROM users WHERE email = ? ", [email]);
  
    const validar = await bcrypt.compare(senha, user[0].senha);

  if (!email || email.length < 10) {
    erro.push({ texto: "Por favor, insira um email válido." });
  }

console.log(validar)

  if (validar == false) {
    erro.push({ texto: "Usuario não encntrado!"});
  }

  if (erro.length > 0) {
    req.flash("error", { texto: "Por favor, insira um email válido." })
    return res.redirect("/login");
  } 
  next();
  }catch(erro){
    return res.render("login", {erros: [{texto: "Usuário ou senha inválida!" }] });
  }
}

//Middleware verificar dados de reservas

 const checkReservas = (req, res, next) => {
  const erro = [];
  const {
    check_in,
    check_out,
    pessoas,
    id
  } = req.body;

  console.log(req.isAuthenticated())

  if(!req.isAuthenticated()){
      console.log(typeof(parseInt(id)))
        req.flash("error_msg", { texto: "Precisa fazer o login para proceder com a reserva." })
        return res.redirect(`info/${req.body.id}`);
    }

  if (!check_in) {
    erro.push({ texto: "A data de check-in é obrigatória." });
  }
  if (!check_out) {
    erro.push({ texto: "A data de check-out é obrigatória." });
  }
  if (!pessoas || pessoas <= 0) {
    erro.push({ texto: "O número de pessoas deve ser maior que zero." });
  }

  if (erro.length > 0) {
    req.flash("error_msg",Error)
    return res.redirect(`info/${req.body.id}`);
  }

  next();
   
 }

module.exports ={
  checkUsers,
  validarLogin,
  checkReservas
}


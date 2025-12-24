const mysql = require("mysql2/promise");

const  db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"feenix",
    database:"turismo"
})

 async function textDatabase() {
   try{
    const [rows] = await db.query("SELECT NOW()")
    console.log("Conexão com a database estabelecida! ", rows)
}catch(err){
    console.error("Erro ao se conectar com a base de dados! ", err);
}  
}


module.exports = db
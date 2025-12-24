const database = require("./database")

const getUser = async()=>{
    try{
        const [user] = await database.execute("SELECT * FROM user")
        console.log(user)
        return user
    }catch(err){
        return err
    }
    
}

const userOn = async (id)=>{

    try{
        const query = "SELECT *FROM  user WHERE id=?"
        const [user] = await database.execute(query,[id])
        return user 
    }catch(err){
        return err
    }
}

const addUser = async (body)=>{
    const {nome, data_nascimento, email, genero, telefone, pais, senha, admin} = body
    // console.log(nome)
    // console.log(email)
    // console.log(genero)
    // console.log(telefone)
    // console.log(pais)
    // console.log(data_nascimento)
    // console.log(senha)


    try{

        const query = "INSERT INTO users(nome, data_nascimento, email, genero, telefone, pais, senha, admin) VALUES(?,?,?,?,?,?,?,?)"
        const [user] = await database.execute(query,[nome, data_nascimento, email, genero, telefone, pais, senha, admin])
        return user 

    }catch(err){

        return err
    }
}

const updateUser = async (body, id)=>{

    const {nome, data_nascimento, email, genero, telefone, pais, senha, admin} = body
    try{

        const query = "UPDATE user SET nome = ?, data_nascimento=?, email, genero=?, telefone=?, nacionalidade=?, senha= ?, admin=? WHERE id=?"
        const [user] = await database.execute(query,[nome, data_nascimento, email, genero, telefone, pais, senha, admin, id])
        return user 

    }catch(err){
        return err
    }
}

const deleteUser = async (id)=>{
    try{
        await database.execute("DELETE FROM user  WHERE id=?",[id])
        return message ="User deletado com sucesso!"
    }catch(err){
        return err
    }
}

module.exports = {
    getUser,
    userOn,
    addUser,
    updateUser,
    deleteUser
}
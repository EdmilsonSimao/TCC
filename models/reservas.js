const db = require("./database.js");

const addReserva = async (reserva, id) => {
    try {
          const query = `
    INSERT INTO reserva (destino, data_checkin, data_checkout, n_pessoas, id_user)
    VALUES (?, ?, ?, ?, ?)`

  return await db.execute(query, [
    destino = "Angola",
    reserva.check_in,
    reserva.check_out,
    reserva.pessoas,
    id_user= id,
  ]);
        
    } catch (error) {
      console.error("Erro ao adicionar reserva:", error);
        return error;
        
    }

};

const getReservas = async(id)=>{
    try {
        
  console.log("usuario com id :"+id)
 const [reservas] = await db.execute(`
  SELECT 
    reserva.id,                             
    reserva.destino,
    reserva.data_checkin,
    reserva.data_checkout,
    reserva.status,
    reserva.n_pessoas,
    users.nome AS cliente,
    users.telefone AS telefone_cliente,
    users.email AS email_cliente
  FROM reserva
  INNER JOIN users ON reserva.id_user = users.id
  WHERE users.id = ?
`, [id]);
  return reservas;
    } catch (error) {

      res.render("erro ao Buscar reservas")
    }
}
const limitReservas = async(id)=>{
    try {
        
  console.log("usuario com id :"+id)
 const [reservas] = await db.execute(`
  SELECT 
    reserva.id,                             
    reserva.destino,
    reserva.data_checkin,
    reserva.data_checkout,
    reserva.status,
    reserva.n_pessoas,
    users.nome AS cliente,
    users.telefone AS telefone_cliente,
    users.email AS email_cliente
  FROM reserva
  INNER JOIN users ON reserva.id_user = users.id
  WHERE users.id = ? order by reserva.id desc limit 5
`, [id]);
  return reservas;
    } catch (error) {

      res.render("erro ao Buscar reservas")
    }
}



const getReservaId = async(id, id_user)=>{
    try {
        
  console.log("usuario com id :"+id)
 const [reservas] = await db.execute(`
  SELECT 
    reserva.id,                             
    reserva.destino,
    reserva.data_checkin,
    reserva.data_checkout,
    reserva.status,
    reserva.n_pessoas,
    users.nome AS cliente,
    users.telefone AS telefone_cliente,
    users.email AS email_cliente
  FROM reserva
  INNER JOIN users ON reserva.id_user = users.id
  WHERE reserva.id = ?
`, [id]);
  return reservas;
    } catch (error) {

      res.render("erro ao Buscar reservas")
    }
}

const allReservas = async()=>{
    try {
        
  console.log("usuario com id :")
 const [reservas] = await db.execute(`
  SELECT 
    reserva.id,                             
    reserva.destino,
    reserva.data_checkin,
    reserva.data_checkout,
    reserva.status,
    reserva.n_pessoas,
    users.nome AS cliente,
    users.telefone AS telefone_cliente,
    users.email AS email_cliente
    
    FROM reserva
  INNER JOIN users ON reserva.id_user = users.id 
`, );
  return reservas;
    } catch (error) {

      res.render("erro ao Buscar reservas")
    }
}

const updateReserva = async(body, id)=>{
    try {
      const { check_in, check_out, status } = body;
        const query = `
    UPDATE reserva
    SET  data_checkin = ?, data_checkout= ?,status = ?
    WHERE id = ?`
  const values = [
    check_in,
    check_out,
    status,
    id,
  ];
  console.log(values)
 const reservaUpdate = await db.execute(query, values);
 return reservaUpdate
 
    } catch (error) {
      console.error("Erro ao actualizar reserva:", error);
        return error;
    }
};

const deleteReserva = async(id) =>{
 try{
   const delet = await db.execute("DELETE FROM reserva WHERE id = ?", [id])
   console.log(delet.status)
   return delet
 }catch(error){
  return error
 }
}

module.exports = { 
  addReserva,
  getReservas,
  allReservas,
  updateReserva,
  getReservaId,
  deleteReserva,
  limitReservas
};
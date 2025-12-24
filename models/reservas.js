const db = require("./database.js");
const addReserva = async (reserva) => {
    try {
          const query = `
    INSERT INTO reservas (check_in, check_out, n_pessoas, destino_id, duracao, status)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  const values = [
    reserva.destino,
    reserva.check_in,
    reserva.check_out,
    reserva.n_pessoas,
    reserva.duracao,
    reserva.status
  ];
  return await db.execute(query, values);
        
    } catch (error) {
        return error;
    }

};
module.exports = { addReserva };
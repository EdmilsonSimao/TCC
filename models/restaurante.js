const db = require("./database")

async function criarReservaMesa(dados) {
  return db.execute(`
    INSERT INTO reservas_mesa
    (restaurante, user_id, data_reserva, hora_reserva, n_pessoas, observacoes)
    VALUES (?, ?, ?, ?, ?, ?)
  `, [
    dados.restaurante,                                           
    dados.user_id,
    dados.data_reserva,
    dados.hora_reserva,
    dados.n_pessoas,
    dados.observacoes
  ])
}

async function listarReservasUsuario(userId) {
  const [rows] = await db.execute(`
    SELECT r.*, res.nome AS restaurante
    FROM reservas_mesa r
    JOIN restaurantes res ON res.id = r.restaurante_id
    WHERE r.user_id = ?
    ORDER BY r.data_reserva DESC
  `, [userId])

  return rows
}

module.exports = {
  criarReservaMesa,
  listarReservasUsuario
}

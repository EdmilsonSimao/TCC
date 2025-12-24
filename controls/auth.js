const LocalStrategy = require("passport-local").Strategy
const db = require("../models/database")
const bcrypt = require("bcryptjs")

module.exports = (passport) => {

  passport.use(
    new LocalStrategy(
      { usernameField: "email", passwordField: "senha" },
      async (email, senha, done) => {
        try {
          const [rows] = await db.execute(
            "SELECT * FROM users WHERE email = ?",
            [email]
          )

          if (rows.length === 0) {
            return done(null, false, { message: "Esta conta não existe" })
          }

          const user = rows[0]

         //console.log(user)
          const validar = await bcrypt.compare(senha, user.senha)

          if (!validar) {
            return done(null, false, { message: "Senha inválida!" })
          }

          return done(null, user)

        } catch (erro) {
          console.error(erro)
          return done(erro)
        }
      }
    )
  )

  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser(async (id, done) => {
    try {
      const [rows] = await db.execute(
        "SELECT * FROM users WHERE id = ?",
        [id]
      )

      done(null, rows[0])
    } catch (erro) {
      done(erro)
    }
  })
}


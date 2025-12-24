module.exports = {
   logado: (req, res, next)=>{
        if(req.isAuthenticated()){
            return next()
        }
        req.flash("error_msg", "voce não está autenticado")
        res.redirect("/")
     }
}
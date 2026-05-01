const nodeMailer = require('nodemailer');

const transporter = nodeMailer.createTransport({
    host:'smtp.gmail.com',
    port:465,
    secure: true,
    auth:{
        user:'edmilsonsimao121@gmail.com',
        pass:'pheenix121&'
    }
})

transporter.sendMail({
    from:'<h3>Empir Young</h3>edmilsonsimao121@gmail.com',
    to:'simaoedson383@gmail.com',
    subject:'Test Email',
    html:' <h1>Olá, Edmar Jr</h1> <p>A sua reserva foi confirmada com sucesso!, obrigado por escolher a Empir Young!</p>',
    text:'<p>O sua reserva foi confirmada com sucesso!, obrigado por escolher a Empir Young!</p>',
}).
then(message => {
    console.log('Email enviado com sucesso', message);
}).catch(err => {
    console.log('Erro ao enviar o email', err);
})
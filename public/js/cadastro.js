
document.getElementById("registerForm").addEventListener("submit", function (e) {


  const password = this.querySelectorAll("input[type='password']")[0].value;
  const confirm = this.querySelectorAll("input[type='password']")[1].value;
  const nascimento = this.querySelector("#data_nascimento").value;
  const nome = this.querySelector("#nome").value;
  const email = this.querySelector("#email").value;
  const telefone = this.querySelector("#telefone").value;
  const dataNascimento = this.querySelector("#nascimento").value;
  const genero = this.querySelector("input[name='genero']:checked").value;
  const hoje = new Date();
  const dataNasc = new Date(dataNascimento);
  const idade = hoje.getFullYear() - dataNasc.getFullYear();
  // const mes = hoje.getMonth() - dataNasc.getMonth();



  if (password !== confirm) {
    alert("As senhas não coincidem.");
      
    return;
  }
      console.log(idade);
      console.log(nome);
      console.log(email);
      console.log(telefone);
      console.log(nascimento);
  //alert("Cadastro realizado com sucesso!"+ idade + nome + email + telefone + nascimento);
});

   
document.querySelector("#openPagamento").addEventListener("submit", (e)=>{
        e.preventDefault()
         console.log(e.target)
         openPayment(2)

         if(e.target.classList === "close"  || e.target.classList.contains("openPagamento")
        ){
          closePayment()
         }


    })

       function openPayment(pessoas) {
        document.getElementById("paymentModal").classList.remove("hidden")
       const npessoas = document.getElementById("nPessoas").value
       const desc = document.querySelector("#qtdPessoas")
       const check_in = document.querySelector("#check_in")
       const check_out = document.querySelector("#check_out")
       const dataEntrada = document.querySelector("#dataEntrada")
       const dataSaida = document.querySelector("#dataSaida")

        dataEntrada.innerHTML = new Date(check_in.value).toLocaleDateString('pt-PT')
        dataSaida.innerHTML = new Date(check_out.value).toLocaleDateString('pt-PT')
        desc.innerHTML = npessoas
        document.getElementById("totalValor").innerText = (25000 * npessoas) + " Kz"
      }


  function closePayment() {
    document.getElementById("paymentModal").classList.add("hidden")
  }

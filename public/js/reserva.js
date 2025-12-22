   
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
        document.getElementById("qtdPessoas").innerText = pessoas
        document.getElementById("totalValor").innerText = (25000 * pessoas) + " Kz"
      }


  function closePayment() {
    document.getElementById("paymentModal").classList.add("hidden")
  }

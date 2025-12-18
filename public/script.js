// import "flyonui/flyonui"
// import "flyonui/dist/accordion"

const abrir = document.querySelector(".openPagamento")
const avaliacao = document.querySelector(".avaliacao")
const nomeAvaliar = document.querySelector("#nomeAvaliar")
const textoAvaliar = document.querySelector("#textoAliacao")
const selecaoAvaliar = document.querySelector("#selecaoAaliacao")



    // abrir.addEventListener("click", (e)=>{
    //     e.preventDefault()
    //    console.log(e.target)
    //      openPayment(2)

    //     //  if(e.target.classList.contains("close") || e.target.classList.contains("openPagamento")
    //     // ){
    //     //   closePayment()
    //     //  }

    // })

   function openPayment(pessoas) {
        document.getElementById("paymentModal").classList.remove("hidden")
        document.getElementById("qtdPessoas").innerText = pessoas
        document.getElementById("totalValor").innerText = (25000 * pessoas) + " Kz"
      }


  function closePayment() {
    document.getElementById("paymentModal").classList.add("hidden")
  }



document.addEventListener("DOMContentLoaded", () => {


 const avaliacao = document.querySelector(".avaliacao")
const nomeAvaliar = document.querySelector("#nomeAvaliar")
const textoAvaliar = document.querySelector("#textoAvaliar")
const selecaoAvaliar = document.querySelector("#selecaoAaliacao")
const formAvaliacao = document.querySelector(".formAvaliar")

formAvaliacao.addEventListener("submit",(e)=>{
  e.preventDefault()

    const divMain = document.createElement("div")
    divMain.classList.add("bg-white", "p-6", "rounded-3xl","shadow")

    const div = document.createElement("div")
    div.classList.add("flex", "justify-between", "mb-2")

    const strong = document.createElement("strong")
    strong.innerHTML= nomeAvaliar.value

    const divStar = document.createElement("div")
    divStar.classList.add("flex", "gap-1")

    const p = document.createElement("p")
    p.classList.add("text-slate-600")
     p.innerHTML= textoAvaliar.value


    avaliacao.appendChild(divMain)
    divMain.appendChild(div)
    div.appendChild(strong)
    div.appendChild(divStar)
    divMain.appendChild(p)
    

  })
})
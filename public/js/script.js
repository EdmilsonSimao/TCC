
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

  // Toastify para mensagens de toast
const toastMessage = new URLSearchParams(window.location.search).get('toast');
if (window.toastMessage) {
  let text = "";

  if (toastMessage === "nenhum_resultado") {
    text = "Nenhum resultado encontrado.";
  }

  Toastify({
    text: text,
    duration: 3000,
    gravity: "top",
    position: "right",
    backgroundColor: "#dc2626", // vermelho
    close: true
  }).showToast();
}
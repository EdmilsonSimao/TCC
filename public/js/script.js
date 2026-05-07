document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // AVALIAÇÕES
  // =========================

  const avaliacao = document.querySelector(".avaliacao")
  const formAvaliacao = document.querySelector(".formAvaliar")
  const nomeAvaliar = document.querySelector("#nomeAvaliar")
  const textoAvaliar = document.querySelector("#textoAvaliar")
  const selecaoAvaliar = document.querySelector("#selecaoAaliacao")

  if (formAvaliacao && avaliacao) {
    formAvaliacao.addEventListener("submit", (e) => {
      e.preventDefault()

      const divMain = document.createElement("div")
      divMain.classList.add("bg-white", "p-6", "rounded-3xl", "shadow")

      const div = document.createElement("div")
      div.classList.add("flex", "justify-between", "mb-2")

      const strong = document.createElement("strong")
      strong.innerHTML = nomeAvaliar ? nomeAvaliar.value : ""

      const divStar = document.createElement("div")
      divStar.classList.add("flex", "gap-1")

      const p = document.createElement("p")
      p.classList.add("text-slate-600")
      p.innerHTML = textoAvaliar ? textoAvaliar.value : ""

      div.appendChild(strong)
      div.appendChild(divStar)

      divMain.appendChild(div)
      divMain.appendChild(p)

      avaliacao.appendChild(divMain)
    })
  }

  // =========================
  // TOASTIFY
  // =========================

  const toastMessage = new URLSearchParams(window.location.search).get("toast")

  if (toastMessage) {
    let text = ""

    if (toastMessage === "nenhum_resultado") {
      text = "Nenhum resultado encontrado."
    }

    if (text) {
      Toastify({
        text: text,
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "#dc2626",
        close: true
      }).showToast()
    }
  }

  // =========================
  // FILTROS DE RESERVA
  // =========================

  const linhas = document.querySelectorAll(".linha-reserva")
  const inputPesq = document.getElementById("input-pesquisa")
  const filtroLabel = document.getElementById("filtro-label")
  const contadorNum = document.getElementById("contador-num")
  const footerCount = document.getElementById("footer-count")
  const semResult = document.getElementById("sem-resultados")
  const btnLimpar = document.getElementById("btn-limpar")
  const itemsFiltro = document.querySelectorAll("[data-filtro]")

  let filtroAtivo = "todas"
  let pesquisaAtiva = ""

  function aplicarFiltros() {
    let visiveis = 0

    linhas.forEach(linha => {
      const status = (linha.dataset.status || "").toLowerCase()
      const cliente = (linha.dataset.cliente || "").toLowerCase()
      const destino = (linha.dataset.destino || "").toLowerCase()
      const termo = pesquisaAtiva.toLowerCase()

      const passaFiltro = filtroAtivo === "todas" || status === filtroAtivo.toLowerCase()
      const passaPesq = !termo || cliente.includes(termo) || destino.includes(termo)

      const mostrar = passaFiltro && passaPesq
      linha.style.display = mostrar ? "" : "none"

      if (mostrar) visiveis++
    })

    if (contadorNum) contadorNum.textContent = visiveis
    if (footerCount) footerCount.textContent = visiveis
    if (semResult) semResult.classList.toggle("hidden", visiveis > 0)

    const filtrosAtivos = filtroAtivo !== "todas" || pesquisaAtiva !== ""

    if (btnLimpar) {
      btnLimpar.classList.toggle("hidden", !filtrosAtivos)
    }
  }

  // =========================
  // EVENTOS FILTROS
  // =========================

  itemsFiltro.forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault()
      filtroAtivo = item.dataset.filtro
      if (filtroLabel) filtroLabel.textContent = item.textContent.trim()
      aplicarFiltros()
    })
  })

  if (inputPesq) {
    inputPesq.addEventListener("input", () => {
      pesquisaAtiva = inputPesq.value
      aplicarFiltros()
    })
  }

  if (btnLimpar) {
    btnLimpar.addEventListener("click", () => {
      filtroAtivo = "todas"
      pesquisaAtiva = ""

      if (inputPesq) inputPesq.value = ""
      if (filtroLabel) filtroLabel.textContent = "Todas"

      aplicarFiltros()
    })
  }

  aplicarFiltros()

if(document.querySelectorAll('.card-reserva')){
  const cards = document.querySelectorAll('.card-reserva')
  const btnsFiltro = document.querySelectorAll('.filtro-btn');
  const contador   = document.getElementById('contador');
  const semResult  = document.getElementById('sem-resultados');

  function filtrar(valor) {
    let visiveis = 0;

    cards.forEach(card => {
      const status = card.dataset.status;
      const mostrar = valor === 'todas' || status === valor;
      card.style.display = mostrar ? '' : 'none';
      if (mostrar) visiveis++;
    });

    if (contador) contador.textContent = visiveis;
    if (semResult) semResult.classList.toggle('hidden', visiveis > 0);

    // Estilo do botão activo
    btnsFiltro.forEach(btn => {
      const ativo = btn.dataset.filtro === valor;
      btn.classList.toggle('btn-primary', ativo);
      btn.classList.toggle('btn-outline', !ativo);
    });
  }

  btnsFiltro.forEach(btn => {
    btn.addEventListener('click', () => filtrar(btn.dataset.filtro));
  });
}

//Filtro de usuários
if( document.querySelectorAll('.linha-usuario')){
  const linhas      = document.querySelectorAll('.linha-usuario');
  const btnsFiltro  = document.querySelectorAll('.filtro-btn');
  const inputPesq   = document.getElementById('input-pesquisa');
  const contador    = document.getElementById('contador');
  const semResult   = document.getElementById('sem-resultados');

  let filtroAtivo   = 'todos';
  let pesquisaAtiva = '';

  function aplicar() {
    let visiveis = 0;

    linhas.forEach(linha => {
      const genero  = linha.dataset.genero;
      const nome    = linha.dataset.nome.toLowerCase();
      const email   = linha.dataset.email.toLowerCase();
      const pais    = linha.dataset.pais.toLowerCase();
      const termo   = pesquisaAtiva.toLowerCase();

      const passaFiltro = filtroAtivo === 'todos' || genero === filtroAtivo;
      const passaPesq   = !termo || nome.includes(termo) || email.includes(termo) || pais.includes(termo);

      const mostrar = passaFiltro && passaPesq;
      linha.style.display = mostrar ? '' : 'none';
      if (mostrar) visiveis++;
    });

    if (contador)  contador.textContent = visiveis;
    if (semResult) semResult.classList.toggle('hidden', visiveis > 0);

    btnsFiltro.forEach(btn => {
      const ativo = btn.dataset.filtro === filtroAtivo;
      btn.classList.toggle('btn-primary', ativo);
      btn.classList.toggle('btn-outline', !ativo);
    });
  }

  btnsFiltro.forEach(btn => {
    btn.addEventListener('click', () => {
      filtroAtivo = btn.dataset.filtro;
      aplicar();
    });
  });

  inputPesq.addEventListener('input', () => {
    pesquisaAtiva = inputPesq.value;
    aplicar();
  });

  aplicar();

}


})



  
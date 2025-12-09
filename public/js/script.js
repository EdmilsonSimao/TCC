/* ============================================
main.js - Script principal do site
--------------------------------------------
• Controla o menu mobile
• Controla o carrossel
• Controla tabs, animações e validações básicas
• Pode ser usado para todo o site
============================================ */


// ==========================
// MENU MOBILE
// ==========================
const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-menu');


// Abrir / Fechar menu
menuBtn?.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});


// Fechar menu ao clicar num link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});


// ==========================
// CARROSSEL DE IMAGENS
// ==========================
let slideIndex = 0;
function iniciarCarrossel() {
    const slides = document.querySelectorAll('.slide');


    if (slides.length > 0) {
        slides.forEach(slide => slide.style.display = 'none');


        slideIndex++;
        if (slideIndex > slides.length) slideIndex = 1;


        if (slides.length > 0) slides[slideIndex - 1].style.display = 'block';


    }
    setTimeout(iniciarCarrossel, 3500); // muda a imagem cada 3.5s
}


// Iniciar carrossel ao carregar página
window.addEventListener('load', iniciarCarrossel);


// ==========================
// VALIDAÇÃO SIMPLES DO FORMULÁRIO DE CONTATO
// ==========================
function validarContato() {
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const msg = document.getElementById('mensagem');


    if (!nome.value || !email.value || !msg.value) {
        alert("Por favor, preencha todos os campos.");
        return false;
    }


    alert("Mensagem enviada com sucesso!");
    return true;
}



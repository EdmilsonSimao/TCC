console.log("JS do cadastro carregou!");

// ============================
// MOSTRAR / OCULTAR SENHA
// ============================

// SENHA PRINCIPAL
const btnVerSenha = document.getElementById('verSenha');
const inputSenha = document.getElementById('senha');

if (btnVerSenha && inputSenha) {
    btnVerSenha.addEventListener('click', function () {
        if (inputSenha.type === 'password') {
            inputSenha.type = 'text';
            this.textContent = 'Ocultar';
        } else {
            inputSenha.type = 'password';
            this.textContent = 'Mostrar';
        }
    });
}

// CONFIRMAR SENHA (somente no cadastro)
const btnVerConfirm = document.getElementById('verConfirmSenha');
const inputConfirm = document.getElementById('confirmarSenha');

if (btnVerConfirm && inputConfirm) {
    btnVerConfirm.addEventListener('click', function () {
        if (inputConfirm.type === 'password') {
            inputConfirm.type = 'text';
            this.textContent = 'Ocultar';
        } else {
            inputConfirm.type = 'password';
            this.textContent = 'Mostrar';
        }
    });
}

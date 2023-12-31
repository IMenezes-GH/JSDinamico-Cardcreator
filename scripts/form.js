const form = document.getElementById("register");

// NOME
const formName = document.getElementById("nome");
const profileName = document.getElementById("profile-name");

// SENHA
const formPassword = document.getElementById("password");
const formPassword2 = document.getElementById("password2");

// EMAIL
const formEmail = document.getElementById("email");
const profileEmail = document.getElementById("profile-email");

// ESTADO (LOCALIZAÇÃO)
const formState = document.getElementById("state");
const profileState = document.getElementById("profile-state");

// DESCRIÇÃO
const formDescription = document.getElementById("description");
const profileDescription = document.getElementById("profile-description");

// FOTO DE PERFIL
const formIMG = document.getElementById("img");
const profileIMG = document.getElementById("profile-img");

const formShapes = document.getElementsByName("shape");

const submitBtn = document.getElementById("submit-button");

// MODAL
const confirmFormModal = document.getElementById("confirm-form-modal");
const successModal = document.getElementById("success-modal");
const failModal = document.getElementById("fail-modal");

const cancelarFormBtn = document.getElementById("cancelar-form-btn");
const confimarFormBtn = document.getElementById("confirmar-form-btn");


// Reseta todos os dados
function btnReset() {
    profileName.innerText = "Nome completo";
    profileEmail.innerText = "email@examplo.com";
    profileState.innerText = "Brazil";
    profileDescription.innerText = "Descrição aqui"
}

function submitForm(element){

    this.event.preventDefault();

    if (validarForm()) {
        confirmFormModal.showModal();
    }
}
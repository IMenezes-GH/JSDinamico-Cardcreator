formName.addEventListener("input", (ev) => {
    const outputLabel = formName.parentElement.children[1]
    outputLabel.innerText = validarNome();
    profileName.innerText = ev.target.value
});

formEmail.addEventListener("input", (ev) => {
    const outputLabel = formEmail.parentElement.children[1]
    outputLabel.innerText = validarEmail();
    profileEmail.innerText = ev.target.value;
});

formPassword.addEventListener("input", (ev) => {
    const outputLabel = formPassword.parentElement.children[1]
    outputLabel.innerText = validarSenha();
    
    if (formPassword.value !== formPassword2.value){
        formPassword.parentElement.children[3].innerText = 'Senhas não são iguais'
    }
})

formPassword2.addEventListener("input", (ev) => {
    if (formPassword.value !== formPassword2.value){
        formPassword.parentElement.children[3].innerText = 'Senhas não são iguais'
    } else {
        formPassword.parentElement.children[3].innerText = ''
    }
})

formState.addEventListener("input", (ev) => profileState.innerText = `${ev.target.value} - Brazil`);
formDescription.addEventListener("input", (ev) => profileDescription.innerText = ev.target.value);

formIMG.addEventListener("input", (ev) => {

    const file = formIMG.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
        profileIMG.style.backgroundImage = `url("${fileReader.result}")`;
    }

    if (file) {
        fileReader.readAsDataURL(file);
    } 

})

formShapes.forEach((el) => {
    el.addEventListener("input", (ev) => {

        profileIMG.style.borderRadius = `${el.value}%`;
    })
})

submitBtn.addEventListener("click", (ev) => {
    // Needed so the browser's default form validation is not prevented, but still don't submit form
    if (validarForm()) {
        ev.preventDefault();
        confirmFormModal.showModal();
    }
})

cancelarFormBtn.addEventListener("click", (ev) => {
    ev.preventDefault();
    confirmFormModal.close();
})

confimarFormBtn.addEventListener("click", (ev) => {
    if (validarForm()){
        successModal.showModal();
        confirmFormModal.close();
    } else {
        failModal.showModal();
        confirmFormModal.close();
    }
})
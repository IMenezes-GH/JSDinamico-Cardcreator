formName.addEventListener("input", (ev) => {
    const outputLabel = formName.parentElement.children[1]
    outputLabel.innerText = validarNome();
    profileName.innerText = ev.target.value
});
formName.addEventListener("focus", (ev) => profileName.innerText = ev.target.value);

formEmail.addEventListener("input", (ev) => {
    const outputLabel = formEmail.parentElement.children[1]
    outputLabel.innerText = validarEmail();
    profileEmail.innerText = ev.target.value;
});
formEmail.addEventListener("focus", (ev) => profileEmail.innerText = ev.target.value);

formPassword.addEventListener("input", (ev) => {
    const outputLabel = formPassword.parentElement.children[1]
    outputLabel.innerText = validarSenha();
    console.log(validarSenha());
    
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
formState.addEventListener("focus", (ev) => profileState.innerText = `${ev.target.value} - Brazil`);

formDescription.addEventListener("input", (ev) => profileDescription.innerText = ev.target.value);
formDescription.addEventListener("focus", (ev) => profileDescription.innerText = ev.target.value)

formIMG.addEventListener("input", (ev) => {

    const file = formIMG.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
        profileIMG.style.backgroundImage = `url("${fileReader.result}")`;
        console.log('test')
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
    confirmFormModal.showModal();
    // confirmFormModal.classList.toggle("show-modal");
})

confirmFormModal.addEventListener("close", (ev) => {
    console.log("close modal")
})
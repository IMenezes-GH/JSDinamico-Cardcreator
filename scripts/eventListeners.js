formName.addEventListener("input", (ev) => {
    const outputLabel = formName.parentElement.children[1]
    try {
        validarNome();
        formName.classList.remove('invalid');
        outputLabel.innerText = '';
    }
    catch (err){
        outputLabel.innerText = err.message;
        formName.classList.add('invalid');
    }

    profileName.innerText = ev.target.value
});

formEmail.addEventListener("input", (ev) => {
    const outputLabel = formEmail.parentElement.children[1]

    try {
        validarEmail();
        outputLabel.innerText = '';
        formEmail.classList.remove('invalid');
    } catch (err){
        outputLabel.innerText = err.message
        formEmail.classList.add('invalid');
    }

    profileEmail.innerText = ev.target.value;
});

formPassword.addEventListener("input", (ev) => {
    const outputLabel = formPassword.parentElement.children[1]

    try {
        validarSenha();
        outputLabel.innerText = "";
        formPassword.classList.remove('invalid');
    }
    catch (err) {
        outputLabel.innerText = err.message;
        formPassword.classList.add('invalid');
    }

})
formPassword2.addEventListener("input", (ev) => {
    const outputLabel = formPassword2.parentElement.children[3];

    try {
        compararSenhas();
        outputLabel.innerText = ''
        formPassword2.classList.remove('invalid');
    } catch (err){

        outputLabel.innerText = err.message;
        formPassword2.classList.add('invalid');
    }
})

formState.addEventListener("input", (ev) => {
    const outputLabel = formState.parentElement.children[1];
    try {
        validarEstado();
        outputLabel.innerText = '';
        formState.classList.remove('invalid');
    } catch (err){
        outputLabel.innerText = err.message;
        formState.classList.add('invalid');
    }
    profileState.innerText = `${ev.target.value} - Brazil`
});
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

cancelarFormBtn.addEventListener("click", (ev) => {
    ev.preventDefault();
    confirmFormModal.close();
})


confimarFormBtn.addEventListener("click", (ev) => {
    ev.preventDefault();
    if (validarForm()){
        confirmFormModal.close();
        confirmFormModal.value = true;
    } else {
        confirmFormModal.close();
        confirmFormModal.value = false;
    }
})

confirmFormModal.addEventListener('close', (ev) => {
    
    if (confirmFormModal.value) {
        successModal.showModal()
        const submitEvent = new SubmitEvent("submit", {submitter: this})
        form.dispatchEvent(submitEvent)

    };
})
function validarNome(){
    const nameRegexp = /[A-Za-z]/
    const nome = formName.value;

    if (nome === undefined) throw new Error('Digite um nome válido.');
    if (nome.trim().length < 1 || !nome.match(nameRegexp)) throw new Error('Digite um nome válido.');
    if (nome.trim().length > 50) throw new Error('Nome muito longo.');
    else return true;
}

function validarSenha(){
    const passwordRegexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$$/
    const password = formPassword.value;
    if (!password.match(passwordRegexp)) throw new Error('Senha inválida. (min: 8, max:20, letras maiúsculas, minúsculas e números)')
    else return true
}

function compararSenhas(){
    const password_1 = formPassword.value;
    const password_2 = formPassword2.value;

    if (password_1 !== password_2) throw new Error('Senhas não são iguais')
    return true;
}

function validarEmail(){
    const emailRegexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (formEmail.value === undefined) throw new Error('Digite um email válido');
    if (formEmail.value.trim().length <= 1) throw new Error('Digite um email válido');
    if (!formEmail.value.match(emailRegexp)) throw new Error('Email inválido');
    else return true;
}

function validarEstado(){
    if (formState.value === '') {
        throw new Error('Escolha um estado.')
    }
    return true;
}

function validarForm(){

    try {
        validarNome();
        validarEmail();
        validarSenha();
        validarEstado();
        compararSenhas();
        return true;
    }
    catch (err){
        return false;
    }
}
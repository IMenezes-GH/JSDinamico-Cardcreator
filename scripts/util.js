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
    if (!formPassword.value.match(passwordRegexp)) throw new Error('Senha inválida')
    else return true
}

function validarEmail(){
    const emailRegexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (formEmail.value === undefined) throw new Error('Digite um email válido');
    if (formEmail.value.trim().length <= 1) throw new Error('Digite um email válido');
    if (!formEmail.value.match(emailRegexp)) throw new Error('Email inválido');
    else return true;
}

function validarForm(){

    try {
        validarNome();
        validarEmail();
        validarSenha();
        return true;
    }
    catch (err){
        // alert(err.message);
        return false;
    }
}
function validarNome(){
    if (formName.value === undefined) return 'Digite um nome válido.';
    if (formName.value.trim().length < 1) return 'Digite um nome válido.';
    if (formName.value.trim().length > 50) return 'Nome muito longo.';
    else return '';
}

function validarSenha(){
    const passwordRegexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$$/
    if (!formPassword.value.match(passwordRegexp)) return 'Senha inválida'
    else return ''
}

function validarEmail(){
    const emailRegexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (formEmail.value === undefined) return 'Digite um email válido';
    if (formEmail.value.trim().length <= 1) return 'Digite um email válido';
    if (!formEmail.value.match(emailRegexp)) return 'Email inválido';
    else return '';
}

function validarForm(){
    
    if (validarNome() !== '') return false;
    if (validarEmail() !== '') return false;
    if (validarSenha() !== '') return false;

    return true;
  
}
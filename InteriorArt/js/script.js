function validar(){
  var nome = document.querySelector("#nome").value;
  var soNome = document.querySelector("#sonome").value;
  var email = document.querySelector("#email").value;
  if(nome =="" && soNome=="" && email=="" || 
  soNome =="" && email =="" || 
  nome =="" && email=="" || 
  nome =="" && soNome==""){
    alert("Preencha todos os campos.")
    nome.focus();
    soNome.focus();
    email.focus();
    return false;
  }else if(nome==""){
    alert("Nome não informado.");
    nome.focus();
    return false;
  }else if(soNome==""){
    alert("Sobrenome não informado.")
    soNome.focus();
    return false;
  }else if(email=="" || 
  email.indexOf("@")== -1 || 
  email.indexOf('.')==-1){
    alert("Email não informado, ou não válido.")
    email.focus();
    return false;
  }else if(document.form.mensagem.value<10){
    alert("Escreva sua mensagem com mais de 10 caracteres!");
    document.form.mensagem.focus();
    return false;
  }
  return true;
}
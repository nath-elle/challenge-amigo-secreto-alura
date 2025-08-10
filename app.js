let listaAmigos = [];


// adiciona amigo na lista ao clicar no botão adicionar
function adicionarAmigo() {
    campo = document.querySelector('input');
    if (campo.value == '') {
        alert('Por favor, insira um nome válido.');
    } else {
        listaAmigos.push(campo.value);
    }
    limparCampo()
    console.log(listaAmigos)
}


// limpa o campo de input
function limparCampo() {
    campo = document.querySelector('input');
    campo.value = '';
}
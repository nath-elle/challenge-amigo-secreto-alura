let listaAmigos = [];

function adicionarAmigo() {
    campo = document.querySelector('input');
    if (campo.value == '') {
        alert('Por favor, insira um nome válido.');
    } else {
        listaAmigos.push(campo.value)
    }
    console.log(listaAmigos)
}

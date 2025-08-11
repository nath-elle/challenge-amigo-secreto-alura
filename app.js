let listaDeAmigos = [];

// adiciona amigo na lista ao clicar no botão adicionar
function adicionarAmigo() {
    campo = document.querySelector('input').value;
    if (campo == '') {
        alert('Por favor, insira um nome válido.');
    } else {
        listaDeAmigos.push(campo);
    }
    atualizarTextoNaTela()
    limparCampo()
    console.log(listaDeAmigos);
}


// limpa o campo de input
function limparCampo() {
    campo = document.querySelector('input');
    campo.value = '';
}

// adiciona elementos no html de acordo com a lista
function atualizarTextoNaTela() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''
    for (let i = 0; i <= listaDeAmigos.length; i++) {
        li = document.createElement('li');
        li.textContent = listaDeAmigos[(i)];
        lista.append(li)
    }
}
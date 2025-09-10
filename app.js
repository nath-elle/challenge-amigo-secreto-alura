let listaDeAmigos = [];

function adicionarAmigo() {
    let campo = document.querySelector('input').value.trim();
    if (campo === '') {
        alert('Por favor, insira um nome válido.');
        return;
    } 

    listaDeAmigos.push(campo);
    atualizarTextoNaTela();
    limparCampo();
}


function limparCampo() {
    let campo = document.querySelector('input');
    campo.value = '';
}


function atualizarTextoNaTela() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < listaDeAmigos.length; i++) {
        li = document.createElement('li');
        li.textContent = listaDeAmigos[(i)];
        lista.append(li);
    }
}


function sortearAmigo() {
    if (listaDeAmigos.length == 0) {
        alert('Preencha a lista de amigos antes de sortear alguém')
    } else {
        let numeroIndice = parseInt(Math.random() * listaDeAmigos.length);
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = listaDeAmigos[(numeroIndice)]
    }
}

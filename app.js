let listaDeAmigos = [];

// adiciona nomes numa lista ao clicar no botão adicionar
function adicionarAmigo() {
    campo = document.querySelector('input').value;
    if (campo == '') {
        alert('Por favor, insira um nome válido.');
    } else {
        listaDeAmigos.push(campo);
    }
    atualizarTextoNaTela();
    limparCampo();
    console.log(listaDeAmigos);
}


// limpa o campo de input de nome
function limparCampo() {
    campo = document.querySelector('input');
    campo.value = '';
}

// cria elementos numa lista no html de acordo com o que existe no array
function atualizarTextoNaTela() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < listaDeAmigos.length; i++) {
        li = document.createElement('li');
        li.textContent = listaDeAmigos[(i)];
        lista.append(li);
    }
}

// sorteia um amigo na array aleatoriamente ao clicar no botao sortear
function sortearAmigo() {
    if (listaDeAmigos.length == 0) {
        alert('Preencha a lista de amigos antes de sortear alguém')
    } else {
        let numeroIndice = parseInt(Math.random() * listaDeAmigos.length);
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = listaDeAmigos[(numeroIndice)]
        console.log(numeroIndice);

    }
}
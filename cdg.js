var anne = {nome:"Anne", vitorias:4, empates:3, derrotas:1, pontos:0};
var heitor = {nome:"Heitor", vitorias:5, empates:2, derrotas:3, pontos:0};
var caio = {nome:"Caio", vitorias:6, empates:2, derrotas:5, pontos:0};



function calculaPontos(jogador) {
    var pontos = jogador.vitorias * 3 + jogador.empates;
    return pontos;
}

anne.pontos = calculaPontos(anne);
heitor.pontos = calculaPontos(heitor);
caio.pontos = calculaPontos(caio);

var jogadores = [anne, heitor, caio];



function exibeJogadoresNaTela (jogadores){
    var elemento = "";
    for (var i = 0; i < jogadores.length; i++){
        elemento += "<tr><td>" + jogadores[i].nome + "</td>";
        elemento += "<td>" + jogadores[i].vitorias + "</td>";
        elemento += "<td>" + jogadores[i].empates + "</td>";
        elemento += "<td>" + jogadores[i].derrotas + "</td>";
        elemento += "<td>" + jogadores[i].pontos + "</td>";
        elemento += "<td><button onClick='adicionarVitoria("+ i +")'>Vitória</button></td>";
        elemento += "<td><button onClick='adicionarEmpate("+ i +")'>Empate</button></td>";
        elemento += "<td><button onClick='adicionarDerrota("+ i +")'>Derrota</button></td>";
        elemento += "</tr>";
    }


    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i){
    var jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i){
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i){
    var jogador = jogadores[i];
    jogador.derrotas++;
    exibeJogadoresNaTela(jogadores);
}



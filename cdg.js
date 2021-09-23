var anne = {nome:"Anne", vitorias:4, empates:3, derrotas:1, pontos:0};
var heitor = {nome:"Heitor", vitorias:5, empates:2, derrotas:3, pontos:0};

calculaPontos(anne);


function calculaPontos(jogador) {
    var pontos = jogador.vitorias * 3 + jogador.empates;
    console.log(pontos);
}



let saldoVitorias = saldoDePartidasRankeadas(335, 227)
let rankDoHeroi = ""

function saldoDePartidasRankeadas(vitorias, derrotas){
    let saldo = vitorias - derrotas
    return saldo
}

if (saldoVitorias < 10){
    rankDoHeroi = "Ferro"
}else if(saldoVitorias >= 11 && saldoVitorias <= 20){
    rankDoHeroi = "Bronze"
}else if(saldoVitorias >= 21 && saldoVitorias <= 50){
    rankDoHeroi = "Prata"
}else if(saldoVitorias >= 51 && saldoVitorias <= 80){
    rankDoHeroi = "Ouro"
}else if(saldoVitorias >= 81 && saldoVitorias <= 90){
    rankDoHeroi = "Diamante"
}else if(saldoVitorias >= 91 && saldoVitorias <= 100){
    rankDoHeroi = "Lendário"
}
else{
    rankDoHeroi = "Imortal"
}

console.log("O Herói tem saldo de vitórias de " + saldoVitorias + " e está no nível " + rankDoHeroi)

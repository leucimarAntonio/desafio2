let vitorias = 102 ;
let derrotas = 18 ;
function calcularEloDoJogador(vitorias, derrotas){
let saldoVitorias = vitorias - derrotas; 
    return saldoVitorias;
}
    
function rankJogador(saldoVitorias){

    if( saldoVitorias <= 10){
    return " Ferro";
    }else if ( saldoVitorias >= 11 && saldoVitorias <= 20){
    return " Bronze";
    }else if ( saldoVitorias >= 21 && saldoVitorias <= 50){
    return " Prata";
    }else if ( saldoVitorias >= 51 && saldoVitorias <= 80){
    return " Ouro";
    }else if ( saldoVitorias >= 81 && saldoVitorias <= 90){
    return "Diamante";
    }else if ( saldoVitorias >= 91 && saldoVitorias <= 100){
    return "Lendario";
    }else  {
    return "Imortal";
 }
}
let saldoVitorias = calcularEloDoJogador(vitorias, derrotas);
let nivel = rankJogador(saldoVitorias);

console.log(`O Herói tem de saldo de ${saldoVitorias} vitoria, está no nível de ${nivel}`)


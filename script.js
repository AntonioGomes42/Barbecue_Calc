const inputs = document.getElementById("inputs");

const quantidadeDeCarneComMenosDeSeisHoras = 400;
const quantidadeDeCarneComMaisDeSeisHoras = 650;

const quantidadeBebidasComMenosDeSeisHoras = 1200;
const quantidadeBebidasComMaisDeSeisHoras = 2000;

const quantidadeAguaComMenosDeSeisHoras = 1000;
const quantidadeAguaComMaisDeSeisHoras = 1500;


let quantidadeDeCarne;
let quantidadeDeBebidas;
let quantidadeDeAgua;

let quantidadeDeCarneEmKg;
let quantidadeDeGarrafasPets;
let quantidadeDeAguaEmL;

async function somar(duracao){
    const quantidadedeadultos = document.getElementById("adultos").value;
    const quantidadedecriancas = document.getElementById("criancas").value;

    if(duracao < 6){
        quantidadeDeCarne = await quantidadeDeCarneNormal(quantidadedeadultos, quantidadedecriancas);
        quantidadeDeBebidas = await quantidadeDeBebidasNormal(quantidadedeadultos, quantidadedecriancas);
        quantidadeDeAgua = await quantidadeDeAguaNormal(quantidadedeadultos, quantidadedecriancas);
    }else{
        quantidadeDeCarne = await quantidadeDeCarneExcedido(quantidadedeadultos, quantidadedecriancas);
        quantidadeDeBebidas = await quantidadeDeBebidasExcedido(quantidadedeadultos, quantidadedecriancas);
        quantidadeDeAgua = await quantidadeDeAguaExcedido(quantidadedeadultos, quantidadedecriancas);
    }
}

function quantidadeDeCarneNormal(adultos, criancas){
    return new Promise((resolve) =>{
    const quantidadeDeCarneAdultos = (adultos * quantidadeDeCarneComMenosDeSeisHoras);
    const quantidadeDeCarneCriancas = (criancas * (quantidadeDeCarneComMenosDeSeisHoras/2));
    const quantidadeTotalDeCarne = quantidadeDeCarneAdultos +  quantidadeDeCarneCriancas;
    resolve(quantidadeTotalDeCarne);
    })
}

function quantidadeDeCarneExcedido(adultos, criancas){
    return new Promise((resolve) =>{
    const quantidadeDeCarneAdultos = adultos * quantidadeDeCarneComMaisDeSeisHoras;
    const quantidadeDeCarneCriancas = criancas * (quantidadeDeCarneComMaisDeSeisHoras/2);
    const quantidadeTotalDeCarne = quantidadeDeCarneAdultos + quantidadeDeCarneCriancas;
    resolve(quantidadeTotalDeCarne);
    })
}

function quantidadeDeBebidasNormal(adultos, criancas){
    return new Promise((resolve) =>{
    const quantidadeDeBebidasAdultos = adultos * quantidadeBebidasComMenosDeSeisHoras;
    const quantidadeDeBebidasCriancas = criancas * (quantidadeBebidasComMenosDeSeisHoras/2);
    const quantidadeTotalDeBebidas = quantidadeDeBebidasAdultos + quantidadeDeBebidasCriancas;
    resolve(quantidadeTotalDeBebidas);
    })
}

function quantidadeDeBebidasExcedido(adultos, criancas){
    return new Promise((resolve) =>{
    const quantidadeDeBebidasAdultos = adultos * quantidadeBebidasComMaisDeSeisHoras;
    const quantidadeDeBebidasCriancas = criancas * (quantidadeBebidasComMaisDeSeisHoras/2);
    const quantidadeTotalDeBebidas = quantidadeDeBebidasAdultos + quantidadeDeBebidasCriancas;
    resolve(quantidadeTotalDeBebidas);
    })
}

function quantidadeDeAguaNormal(adultos, criancas){
    return new Promise((resolve) =>{
    const quantidadeDeAguaAdultos = adultos * quantidadeAguaComMenosDeSeisHoras;
    const quantidadeDeAguaCriancas = criancas * (quantidadeAguaComMenosDeSeisHoras/2);
    const quantidadeTotalDeAgua = quantidadeDeAguaAdultos + quantidadeDeAguaCriancas;
    resolve(quantidadeTotalDeAgua);
    })
}

function quantidadeDeAguaExcedido(adultos, criancas){
    return new Promise((resolve) =>{
    const quantidadeDeAguaAdultos = adultos * quantidadeAguaComMaisDeSeisHoras;
    const quantidadeDeAguaCriancas = criancas * (quantidadeAguaComMaisDeSeisHoras/2);
    const quantidadeTotalDeAgua = quantidadeDeAguaAdultos + quantidadeDeAguaCriancas;
    resolve(quantidadeTotalDeAgua);
    })
}


function adicionarResultado(){
    inputs.innerHTML = `<div id="resultado">
    <h2>Você precisará de:</h2>
    <div class="resultado" id="carnesResultado"">
        ${parseFloat((quantidadeDeCarne/1000).toFixed(2))} kg de Carne(s)
    </div>
    <div class="resultado" id="bebidasResultado">
        ${Math.ceil(quantidadeDeBebidas/2000)} Refrigerante(s) de 2L 
    </div>
    <div class="resultado" id="aguaResultado">
        ${Math.ceil(quantidadeDeAgua/1000)}L de Água
    </div>
</div> `

}

async function mostrarResultado(){
    const duracaodochurrasco = document.getElementById("horas").value;
    await somar(duracaodochurrasco);
    adicionarResultado();
    console.log(quantidadeDeCarne, quantidadeDeBebidas, quantidadeDeAgua)
}
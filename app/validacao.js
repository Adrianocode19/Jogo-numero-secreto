function verificaValorValido(chute) {
    const numero = +chute;

    if(chute === 'game over') {
        document.body.innerHTML = `
        <div class="game-over-tela">
            <h2 class="game-over-titulo">GAME OVER</h2>
            <h3 class="game-over-subtitulo">O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar game-over-btn">Jogar novamente</button>
        
            <footer class="game-over-rodape">
                <a href="https://github.com/Adrianocode19" class="link game-over-link"><i class="fa-solid fa-code fa-beat-fade" style="color: white;"></i> Desenvolvido por Adriano Carlos</a>
            </footer>
        </div>`;
        recognition.stop();

    }else if(chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor Inválido!</div>';
        return;
    }

    if(chuteMaiorOuMenor(numero)) {
        elementoChute.innerHTML +=`<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}!</div>`;
        return;
    }

    if(numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        
        <footer>
            <a href="https://github.com/Adrianocode19" class="link"><i class="fa-solid fa-code fa-beat-fade" style="color: #64CCC5;"></i> Desenvolvido por Adriano Carlos</a>
        </footer>`;
        recognition.stop();
    } else if(numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down" style="color: #DAFFFB;"></i></div>
    </div>`;
    }else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up" style="color: #DAFFFB;"></i></div>
    </div>`;

    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function chuteMaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente') { 
        window.location.reload();
    }
})
console.log(numeroSecreto)


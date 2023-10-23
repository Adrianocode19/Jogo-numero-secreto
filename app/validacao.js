function verificaValorValido(chute) {
    const numero = +chute;

    if(chuteInvalido(numero)) {
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
            <h4>Desenvolvido por Adriano Carlos</h4>
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
    if(e.target.id == 'jogar-novamente') { // e.target.id retorna onde foi clicado dentro da pagina 
        window.location.reload(); // Recarrega a pagína
    }
})



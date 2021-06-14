const button = document.querySelector('button');

const numeroMaximoDePersonagens = 670;

generateRandomNumber = () => {
    //Sorteia um número entre 0 e 670 e soma 1, para evitar erro ao sortear o número zero
    return Math.floor(Math.random() * numeroMaximoDePersonagens) + 1;
}


const getCharacter = (indexElemento, numeroAleatorio) => {
    
    //Chama a API passando o número sorteado 
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
         Accept: 'application/json',
         'Content-type': 'application/json'
        }
    })
    //Espera o processamento e pega os dados em json
    .then((response) => response.json())
    //Com os dados em mãos manipulo o dom para exibir a imagem e o nome do personagem
    .then((data) => {
        const imagem = document.getElementById(`img-${indexElemento}`);
        const nomeDeErrp = document.getElementById(`nome-personagem-${indexElemento}`);
        
        //Atribuo a url da imagem para refletir no html
        imagem.src = data.image;
        imagem.alt = 'imagem do personagem ' + data.name;
        //Atibuo o nome do personagem para refletir no html
        nomeDeErrp.innerText = data.name;
    })
}

const handleWithTheGame = () => {
    //Ao clicar no botão sorteio o número 4 vezes a passo on index do elemento
    for(let indexElemento = 1; indexElemento <= 4; indexElemento++){        
        //Chama a função generateRandomNumber e atribui o número sorteado para a variável numeroAleatorio
        let numeroAleatorio = generateRandomNumber()
        getCharacter(indexElemento, numeroAleatorio)
    }

}

//Adiciona o evento de click ao botão para chamar a função que pega as informações dos personagens
button.addEventListener('click', handleWithTheGame)


/* ======= Funçao para ajustar Area do palco do jogo ========== */
var altura = 0;
var largura = 0;

function ajustaAreaJogo(){

     largura = window.innerWidth;
     altura = window.innerHeight;
    

    console.log(largura, altura);
}

ajustaAreaJogo()

/*========================================*/



/* ========= Funcao para criar as posições randomicas 
do posicionamento do mosquito =====================*/

function posicaoRandomica(){

    //remover o mosquito anterior caso exista

    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
    }

    var posicaoX = Math.floor(Math.random() * largura) -90;
    var posicaoY = Math.floor(Math.random() * altura) -90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    console.log(posicaoX, posicaoY);

    //criar o elemento html
    var mosquito = document.createElement('img');

    mosquito.src = 'imagens/mosca.png';
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px'; 
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';

    document.body.appendChild(mosquito);
}

/*================================================*/


/* ====== Funcao para criar diferentes tamanhos do mosquito ==========*/

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3);

    switch(classe){
        case 0:
            return 'mosquito-1';
        case 1:
            return 'mosquito-2';
        case 2:
            return 'mosquito-3';
    }
}

/*========================================*/



/*====== Função para criar posicionamento do mosquito em lados aleatórios  ===== */

function ladoAleatorio(){

    var classe = Math.floor(Math.random() * 2);

    switch(classe){
        case 0:
            return 'ladoA';
        case 1:
            return 'ladoB';
    }

}

/*========================================*/




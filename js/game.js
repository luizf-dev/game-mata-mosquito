/* ======= Funçao para ajustar Area do palco do jogo ========== */
var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 10;

var criaMosquitoTempo = 1500;

var nivel = window.location.search;
nivel = nivel.replace('?', '');

if(nivel === 'facil'){
    //1500
    criaMosquitoTempo = 1500;
}else if(nivel === 'medio'){
    //1000
    criaMosquitoTempo = 1000;
}else if(nivel === 'dificil'){
    ////750
    criaMosquitoTempo = 750;
}


function ajustaAreaJogo(){

     largura = window.innerWidth;
     altura = window.innerHeight;
    

    console.log(largura, altura);
}

ajustaAreaJogo()

/*========================================*/

var cronometro = setInterval(function(){

    tempo -= 1;

    if(tempo < 0){
        clearInterval(cronometro);
        clearInterval(criaMosquito);    
        window.location.href = 'vitoria.html';
    }else{
         document.getElementById('cronometro').innerHTML = tempo;
    }
    
}, 1000);


/* Funcao para criar as posições randomicas 
do posicionamento do mosquito =====================*/

function posicaoRandomica(){

    //remover o mosquito anterior caso exista

    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()


        //lógica para para o jogo e dar o game over caso perder todos os pontos de vida
        if(vidas > 7){
            window.location.href = 'game-over.html';
        }else{
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png";

            vidas++;            
        }
        
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
    mosquito.onclick = function(){
        this.remove();
    }
    
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




var comecar = document.getElementById('comecar');
var enunciado = document.getElementById('questao');
var questoes = document.getElementById('game');
var questao1 = document.getElementById('questao1');
var questao2 = document.getElementById('questao2');
var questao3 = document.getElementById('questao3');
var questao4 = document.getElementById('questao4');
var questao5 = document.getElementById('questao5');
var questao6 = document.getElementById('questao6');
var questao7 = document.getElementById('questao7');
var questao8 = document.getElementById('questao8');
var questao9 = document.getElementById('questao9');
var questao10 = document.getElementById('questao10');
var questao11 = document.getElementById('questao11');
var questao12 = document.getElementById('questao12');
var questao13 = document.getElementById('questao13');
var questao14 = document.getElementById('questao14');
var questao15 = document.getElementById('questao15');
var questao16 = document.getElementById('questao16');
var ganhou = document.getElementById('ganhou')
var buttonganhou = document.getElementById('button-ganhou');
var perdeu = document.getElementById('perdeu');

document.querySelectorAll('.errou').forEach((el) =>
  el.addEventListener('click', (event) => {
    perdeu.classList.remove('fechado');
  })
);

comecar.addEventListener('click' , ()=>{
        questoes.classList.remove('fechado');
        questao1.classList.remove('fechado');
        comecar.classList.add('fechado');

        document.getElementById('alternativaC1').addEventListener('click', ()=>{
            ganhou.classList.remove('fechado');
            questao1.classList.add('fechado');
            questao2.classList.remove('fechado');
            document.getElementById('premio1').classList.remove('premioatual');
            document.getElementById('premio2').classList.add('premioatual');
        });

        document.getElementById('alternativaD2').addEventListener('click', ()=>{
            ganhou.classList.remove('fechado');
            questao2.classList.add('fechado');
            questao3.classList.remove('fechado');
            document.getElementById('premio2').classList.remove('premioatual');
            document.getElementById('premio3').classList.add('premioatual');
        });

        document.getElementById('alternativaD3').addEventListener('click', ()=>{
            ganhou.classList.remove('fechado');
            questao3.classList.add('fechado');
            questao4.classList.remove('fechado');
            document.getElementById('premio3').classList.remove('premioatual');
            document.getElementById('premio4').classList.add('premioatual');
        });

        document.getElementById('alternativaA4').addEventListener('click', ()=>{
            ganhou.classList.remove('fechado');
            questao4.classList.add('fechado');
            questao5.classList.remove('fechado');
            document.getElementById('premio4').classList.remove('premioatual');
            document.getElementById('premio5').classList.add('premioatual');
        });

        document.getElementById('alternativaA5').addEventListener('click', ()=>{
            ganhou.classList.remove('fechado');
            questao5.classList.add('fechado');
            questao6.classList.remove('fechado');
            document.getElementById('premio5').classList.remove('premioatual');
            document.getElementById('premio6').classList.add('premioatual');
        });

        document.getElementById('alternativaA6').addEventListener('click', ()=>{
            ganhou.classList.remove('fechado');
            questao6.classList.add('fechado');
            questao7.classList.remove('fechado');
            document.getElementById('premio6').classList.remove('premioatual');
            document.getElementById('premio7').classList.add('premioatual');
        });

        document.getElementById('alternativaA7').addEventListener('click', ()=>{
            ganhou.classList.remove('fechado');
            questao7.classList.add('fechado');
            questao8.classList.remove('fechado');
            document.getElementById('premio7').classList.remove('premioatual');
            document.getElementById('premio8').classList.add('premioatual');
        });

        document.getElementById('alternativaA8').addEventListener('click', ()=>{
            ganhou.classList.remove('fechado');
            questao8.classList.add('fechado');
            questao9.classList.remove('fechado');
            document.getElementById('premio8').classList.remove('premioatual');
            document.getElementById('premio9').classList.add('premioatual');
        });

        document.getElementById('alternativaA9').addEventListener('click', ()=>{
            ganhou.classList.remove('fechado');
            questao9.classList.add('fechado');
            questao10.classList.remove('fechado');
            document.getElementById('premio9').classList.remove('premioatual');
            document.getElementById('premio10').classList.add('premioatual');
        });

        document.getElementById('alternativaA10').addEventListener('click', ()=>{
            ganhou.classList.remove('fechado');
            questao10.classList.add('fechado');
            questao11.classList.remove('fechado');
            document.getElementById('premio10').classList.remove('premioatual');
            document.getElementById('premio11').classList.add('premioatual');
        });

        document.getElementById('alternativaA11').addEventListener('click', ()=>{
            ganhou.classList.remove('fechado');
            questao11.classList.add('fechado');
            questao12.classList.remove('fechado');
            document.getElementById('premio11').classList.remove('premioatual');
            document.getElementById('premio12').classList.add('premioatual');
        });

        document.getElementById('alternativaA12').addEventListener('click', ()=>{
            ganhou.classList.remove('fechado');
            questao12.classList.add('fechado');
            questao13.classList.remove('fechado');
            document.getElementById('premio12').classList.remove('premioatual');
            document.getElementById('premio13').classList.add('premioatual');
        });

        document.getElementById('alternativaA13').addEventListener('click', ()=>{
            ganhou.classList.remove('fechado');
            questao13.classList.add('fechado');
            questao14.classList.remove('fechado');
            document.getElementById('premio13').classList.remove('premioatual');
            document.getElementById('premio14').classList.add('premioatual');
        });

        document.getElementById('alternativaA14').addEventListener('click', ()=>{
            ganhou.classList.remove('fechado');
            questao14.classList.add('fechado');
            questao15.classList.remove('fechado');
            document.getElementById('premio14').classList.remove('premioatual');
            document.getElementById('premio15').classList.add('premioatual');
        });

        document.getElementById('alternativaA15').addEventListener('click', ()=>{
            ganhou.classList.remove('fechado');
            questao15.classList.add('fechado');
            questao16.classList.remove('fechado');
            document.getElementById('premio15').classList.remove('premioatual');
            document.getElementById('premio16').classList.add('premioatual');
        });

});

document.getElementById('botaoplacar').addEventListener('click', ()=>{
    document.getElementById('placar').classList.remove('fechado');
})
document.getElementById('voltarperguntas').addEventListener('click', ()=>{
    document.getElementById('placar').classList.add('fechado');
})

document.getElementById('button-ganhou').addEventListener('click', ()=>{
    document.getElementById('ganhou').classList.add('fechado');
})
document.getElementById('button-perdeu').addEventListener('click', ()=>{
    document.getElementById('perdeu').classList.add('fechado');
})
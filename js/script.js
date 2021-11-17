console.log ("Olá");
console.log ("como");
console.log ("vai");
console.log ("estou bem");
console.log ("olá, como vai você")
console.log ("no js para por um comentario de varias linhas por exemplo usamos /* aqui dentro podemos fazer quebras de linhas sem problemas*/")
console.log ("no js para por um comentario de apenas uma linha usamos //aqui podemos escrever o que aquiser mas e apenas uma unica linha")

/*
    comentario
    de 
    varias
    linhas
*/
//comentario de apenas uma linha

//Variaveis---------------------------------------------------------------------------------------------------------------------------

/*
    as variaveis são as "tags": 'var'
    logo depois da declaração(colocar a "tag"), colocamos o nome dela
    as aspas são usadas para indicar para a variavel que aqui escrito é um instring(frase)
*/
   
   var mensajem = "mensajem da variavel";
   console.log (mensajem);
   
   
//as variaveis podem ser numericas como 'var num = 13' esta não sera utilizado aspas
   var num = 13;
   console.log (num)
   
   //se por entre aspas
   var num2 = "13"; //veja que a cor já é diferente 
   console.log (num2)
   //percebi que ele ignora as aspas quando é impresso do console, mas é importante que quando vai se referir a numeros, para uma conta de soma/outros, voce não coloque aspas
   
//elas tambem podem ser booleanas, que seria uma especie de verdadeiro ou falso

    var verdadeiro = true;
    var falso = false;

//elas tambem podem criar vareaveis de outras vareaveis

    var var1 = "alguma coisa";
    var var2 = var1;
    //portanto se colocarmos para que o console imprima a var2, ele ira imprimir o que esta escrito na var1
    console.log (var2)
    //e se pedir pra imprimir a var1
    console.log (var1)

//Funções---------------------------------------------------------------------------------------------------------------------------
/*
    as funções são agupações de codigos
    a função quando declarada pela primeira vez precisa ter um nome igual as var
    depois do nome colocamos dois parenteses, dentro desses parenteses podemos color um ou varios argumentos
    */

function mensagem () {
    var bemvindo = "bem vindo ao console"; 
    var naobemvindo = "seja bem vindo ao inferno";
    var conteudo = true;
    //  cria uma especie de condição
    if (conteudo === true) {
        console.log (bemvindo)
    } else /*se não for true/verdadeiro isso acontecerá*/ {
        console.log (naobemvindo)
    }
}

//para executar uma função precisamos chama-la, assim:
//"nome da função"();
  mensagem(); 



//LOOPS
/* 
    os loops permite que a gente repita o codigo
*/
        //para indicar um conjunto de itens usamos os colchetes e dentro colocamos cada item entre aspas e separados por virgula
var nome = ["Miguel", "Biana", "Luiz", "Nicole", "Yasmim" ]

            //entre parenteses está o argumento da mensagem
function mensagem2(nome) {
    console.log("Olá, " + nome)
}

nome.forEach (function(valor){
    mensagem2 (valor)
})

//OBJETOS 

/*
    Os objetos são um tipo de objeto especial
*/

 
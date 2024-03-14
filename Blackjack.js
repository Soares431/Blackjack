var readline = require("readline-sync")

/* VARIAVEIS*/
var op = 0
var carta = 1
var somaCarta = 0
var somaBanco = 0
var cont = " "
var contador = 0
var space

while(op != 2){

   somaCarta = 0
   somaBanco = 0
   cont = " "
   contador = 0

   console.log("=== BLACKJACK ===")
   console.log()
   console.log("1 - JOGAR")
   console.log("2 - SAIR")
   console.log()
   op = readline.questionInt("Opcao: ")

   var space = readline.question("pressione qualquer teclar para continuar")
   console.clear()

   if(op == 1){

      //Vez do jogador
      console.log("=== VEZ DO JOGADOR ===")
      console.log()

      carta = Math.round(Math.random() * 11)
      console.log("Carta 1 do Jogador: " + carta)  
      somaCarta += carta
      carta = Math.round(Math.random() * 11)
      console.log("Carta 2 do Jogador: " + carta)
      somaCarta += carta
      console.log("Total de cartas do Jogador: " + somaCarta)
      console.log()

      space = readline.question("pressione qualquer teclar para continuar")
      console.clear()

      while(!cont.startsWith("n")){
         
         console.log("Total de cartas do Jogador: " + somaCarta)
         console.log()
         cont = readline.question("Quer mais? [S/N]: ").toLowerCase()

         if(cont.startsWith("s"))
         {
            carta = Math.round(Math.random() * 11)
            console.log("Nova carta do Jogador: " + carta)
            somaCarta += carta
            console.log("Total de cartas do Jogador: " + somaCarta)
            console.log()
         }
         else if(cont.startsWith("n")){
            console.log("FINALIZADO!")
            console.log()
         }
         else{
            console.log("Escolhe direito Carai...")
            console.log()
         }

         space = readline.question("pressione qualquer teclar para continuar")
         console.clear()
      }
      console.log("=== VEZ DO JOGADOR FINALIZADA ===")
      console.log()
      space = readline.question("pressione qualquer teclar para continuar")
      console.clear()

      //VEZ DO BANCO
      console.log("=== VEZ DO BANCO ===")

      var banco1 = Math.round(Math.random() * 11)
      var banco2 = Math.round(Math.random() * 11)
      
      somaBanco = banco1 + banco2
      console.log()
      console.log("Carta 1 do Banco: " + banco1)
      console.log("Carta 2 do Banco: " + banco2)
      console.log("Total de Cartas do Banco: " + somaBanco)
      console.log()

      space = readline.question("pressione qualquer teclar para continuar")
      console.clear()

      while(somaBanco + 5 < 21 && contador < 2){
         
         console.log("=== PEGANDO MAIS 1 CARTA ===")
         contador++
         console.log()
         banco1 = Math.round(Math.random() * 11)
         somaBanco += banco1
         console.log("Carta nova do Banco: " + banco1)
         console.log("Total de Cartas do Banco: " + somaBanco)
         console.log()
         var space = readline.question("pressione qualquer teclar para continuar")
         console.log()

      }

      console.log("=== VEZ DO BANCO FINALIZADA ===")
      console.log()
      space = readline.question("pressione qualquer teclar para continuar")
      console.clear()


      console.log("=== RESULTADO DA PARTIDA ===")

      console.log()
      console.log("Total de Cartas do Jogador: " + somaCarta)
      console.log("Total de Cartas do Banco: " + somaBanco)
      console.log()

      if(somaCarta <= 21 || somaCarta > somaBanco && somaCarta < 21)
         console.log("Jogador Ganhou essa Rodada!")

      else if(somaBanco <= 21 || somaCarta <= somaBanco && somaBanco < 21)
         console.log("Banco Ganhou essa Rodada!")
      else if(somaBanco > 21 && somaCarta > 21)
      console.log("Empate")

      console.log()
      space = readline.question("pressione qualquer teclar para continuar")
      console.clear()
   }
   else{
      console.clear()
      console.log("=== JOGO ENCERRADO ===")
   }

}


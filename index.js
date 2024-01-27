import Player from "./Player/index.js";
import Arena from "./Arena/index.js";

// console.log("the arguments\n\n", process.argv.slice(2))

console.log(Math.random())

// const val = [
//     {
//         player1: {

//         },
//         player2: {

//         }
//     },
//     {
//         player1: {

//         },
//         player2: {

//         }
//     }
// ]

function startMatch () {

    const player1 = new Player(100, 10, 5, 'A')
    const player2 = new Player(80, 7, 10, 'B')
    let attackPlayer = player1.health > player2.health ? player2 : player1
    let defendPlayer = attackPlayer === player1 ? player2 : player1


    do {

        const dice1 = Math.floor(Math.random() * 6) + 1
        const dice2 = Math.floor(Math.random() * 6) + 1
        const attackValue = attackPlayer.attack * dice1
        const defendValue = defendPlayer.strength * dice2

        if(attackValue > defendValue) {
            defendPlayer.health = defendPlayer.health - (attackValue - defendValue)
        }

        attackPlayer = attackPlayer === player1 ? player2 : player1

        defendPlayer = defendPlayer === player1 ? player2 : player1

        console.log(dice1, dice2, attackValue, defendValue, player1.health, player2.health)
        
    } while (player1.health > 0 && player2.health > 0);



}


startMatch()


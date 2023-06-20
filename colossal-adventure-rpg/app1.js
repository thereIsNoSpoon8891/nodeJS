const readline = require("readline-sync");


/* PROBLEMS:
  major: inventory, and items, refactor walk() to be able to use items
  major: showing inventory is only showing values of variables, refactor items into objects?
  minor: text is so far right....
*/

let playerHp = 300; // player hp
let monsterHp = 0; // current monster hp placeholder
let monsterName = "monster name";// current monster name placeholder
let monsterAttack = 0// current monster attack power placeholder
// get data from array to place in the monster variables
let monsterArray = [{monsterName: "Dragon", Hp: 200, attack: 30}, {monsterName: "Warlock", Hp: 150, attack: 20}, {monsterName: "Witch", Hp: 100, attack: 10}]

//get data from iems
//const potion = {itemName: "potion",  stats: playerHp + 50};
//let weapons = {itemName: "short sword", stats: playerBaseAttack + 25}
let sword = 35
//let lootItems = [potion, sword]// does this need to be a method? or can I just reassign the variable?
let potion = 50
let inventory = [" sword ", " potion "];

turnCount = 0 // game is over once the player completes 10 turns or dies

// start game
const name = readline.question("Hi adventurer! welcome to The Dungeon of Doom! It's bad luck to wonder around the dungeon without a name, what's your name stranger? ")
    console.log("Alright " + name + ", I'm Salem! The Magic Cat!  I live in the shadows of the Dungeon. I won't be able to help you fight, but I can do useful things like remind you of your HP and what's in your inventory anytime by entering 'p' in the console. I suggest you find your way out of the Dungeon as fast as you can, there are many dangerous creatures lurking in the shadows!")
    let start = readline.question("Salem says: enter 'go' to start the journey! Press 's' to stay here and hide ")
        if (start === "go") {
            walk()
        } else if(start === "s") {
            console.log("You attempt to hide in the darkness..... something sneaks up behind you and bites your head off! *GAME OVER*")
}
//start walking
function walk() { 
    const decision = readline.question("Salem says: You can enter 'w' walk around the Dungeon until you find your way out, enter 'p' to check your inventory. ")
        if (decision === "w"){
            diceRoll()
        } else if (decision === "p"){// work on useing the items in your inventory, major refactoring
            console.log("Salem says: you have " + inventory + " in your inventory and " + playerHp + " HP")
            walk()
    }
}

// monster is selected// do I need to restructure to decide IF there is a monster?
function monsterEncounter() {
    let randomMonster = Math.floor(Math.random() * monsterArray.length)// generates random index
    let selectedMonster = monsterArray[randomMonster]// access object at selected index
    monsterHp = selectedMonster.Hp // display hp from random object
    monsterName = selectedMonster.monsterName // display monster name
    monsterAttack = selectedMonster.attack
    monsterDisplayAttack = monsterAttack + 10
    console.log("Salem says: Look out " + name + "! a " +  monsterName + " has appeared! it has " + monsterHp + " HP! and " + monsterDisplayAttack + " attack power! ")
    
    let fightDecision = readline.question("press 'f' to fight or 'r' to try and run away! ")// decide to run or fight
    if (fightDecision === "f") {
        fight() // needs to have player and monster attack each other with random damage until hp = 0 
    } else if (fightDecision === "r") {
        attemptRun() //attemptRun() runs odds of escaping 50/50
    }
}
// monster and player fight// major BUG! see problem list^ **FIXED**
function fight () {
        //attacks
    let playerBaseAttack = Math.floor((Math.random() * 10) + 1)// player attack, assigns random number between 1-10  
    let weaponAttack = playerBaseAttack + sword // random number plus sword number(damage) 
    let monsterBaseAttack = Math.floor((Math.random() * 10) + 1)// monster attack damage
    let monsterDisplayHp = monsterBaseAttack + monsterAttack
        //attacks - hp
    playerHp -= monsterAttack + monsterBaseAttack// current player hp - from monster attack 
    monsterHp = monsterHp - weaponAttack // monster hp - attack number from player
    monsterName = monsterName// what monster are you fighting?
    
    console.log("you attack for " + weaponAttack + "HP! the " + monsterName + " has " + monsterHp + "HP left! the monster attacks for " + monsterDisplayHp + " you have " + playerHp + " HP left! ") 
    //console.log(monsterHp, monsterName)// testing
 
        if (playerHp <= 0 ) {
            const replay = readline.question("Oh dear, you are dead.. play again? y or n")
                if(replay === "y") {
                    playerHp = 300 
                    walk()
                } else if (replay === "n"){
                    gameOver = true
}
                } else if (monsterHp <= 0) {
                    playerHp += 40
                    console.log("you deafeated the monster! you are awarded 40 HP! ")
                    walk()
    }
}

    // how is it accessing variables inside the function?, because fight() is within the code block,
    // it has access to all the variables
while (playerHp > 0 && monsterHp > 0) {
    fight()
} 

function attemptRun () {
    const escape = Math.floor((Math.random() * 12) + 1)
    //console.log(escape)// test number produced
    if (escape > 6){
        console.log("THE MONSTER IS TOO FAST! YOU CAN'T ESCAPE! YOU ARE FORCED TO FIGHT FOR YOUR LIFE!")
        fight()
    } else if (escape < 6){
        console.log("you escape with your life!")
        walk()
    }
}

function diceRoll() {
    turnCount += 1;
    console.log("Turn number " + turnCount)
    const possibleFight = Math.floor((Math.random() * 12) + 1)
        if (turnCount === 10){ 
            const playAgain = readline.question("***YOU HAVE SURVIVED THE DUNGEON OF DOOM!*** Play again? 'y' or 'n'." )
            if (playAgain === "y"){
                playerHp = 300
                walk()
            } else if (playAgain === "n"){
                console.log("You found your way out of the Dungeon of Doom! YOU WIN")
            }
        } else if (possibleFight < 8) {
            monsterEncounter()
        } else if (possibleFight > 8) {
            walk()
        } 
}






///////////////**** excess creations *******///////



/*let dragon = {monsterName: "Dragon", Hp: 200,}
let warlock = {monsterName: "Warlock", Hp: 150}
let witch = {monsterName: "Witch", Hp: 100}

const mace = "Mace";
const dagger = "Dagger";
const mithrilSword = "Mithril sword";
*/
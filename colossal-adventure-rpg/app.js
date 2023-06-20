/////////////////////////////////** Colossal-Adventure-RPG**//////////////////////////////////////////////

const readline = require("readline-sync");

/* 
PROBLEMS:
BLOCKERS:

*/

let playerHp = 300; // player hp
let monsterHp = 0; // current monster hp placeholder
let monsterName = "monster name";// current monster name placeholder
let monsterAttack = 0// current monster attack power placeholder

// get data from array to place in the monster variables
let monsterArray = [{monsterName: "DRAGON", Hp: 200, attack: 30}, {monsterName: "WARLOCK", Hp: 150, attack: 20}, 
{monsterName: "WITCH", Hp: 100, attack: 10}, {monsterName: "DEMON", Hp: 170, attack: 25}, {monsterName: "GOBLIN", Hp: 50, attack: 5},
{monsterName: "*DRAGON KING*", Hp: 500, attack: 90}, {monsterName: "BABY DRAGON", Hp: 100, attack: 20}, {monsterName: "LESSER DEMON", Hp: 120, attack: 20}]

let sword = 35
let potion = 50
let inventory = ["sword", " potion"];

turnCount = 0 // game is over once the player completes 10 turns or dies

// start game
const name = readline.question("Hi adventurer! welcome to The Dungeon of Doom! It's bad luck to wonder around the dungeon without a name, what's your name stranger? ")
    console.log("Alright " + name + ", I'm Salem! The Magical Shadow Cat!  I live in the shadows of the Dungeon.",
    "I won't be able to help you fight, but I can do useful things like remind you of your HP and what's in your",
    "inventory anytime by entering 'p' in the console. I suggest you find your way out of the Dungeon as fast as you can,",
    "there are many dangerous creatures lurking in the shadows! If you see the *DRAGON KING* YOU SHOULD RUN!",
    "The Dragon King has claimed many adventurers lives here in the Dungeon!")
    let start = readline.question("Salem says: enter 'go' to start the journey! Press 's' to stay here and hide ")
        if (start === "go") {
            walk()
        } else if(start === "s") {
            console.log("You attempt to hide in the darkness..... something sneaks up behind you and swallows you whole! *GAME OVER*")
}
//start walking
function walk() { 
    const decision = readline.question("Salem says: Enter 'w' to journey thru the Dungeon until you find your way out, enter 'p' to check your inventory. ")
        if (decision === "w"){
            diceRoll()
        } else if (decision === "p"){// work on useing the items in your inventory, major refactoring
            console.log("Salem says: you have " + inventory + " in your inventory and " + playerHp + " HP")
            walk()
    }
}

// monster is selected//
function monsterEncounter() {
    let randomMonster = Math.floor(Math.random() * monsterArray.length)// generates random index
    let selectedMonster = monsterArray[randomMonster]// access object at selected index
    monsterHp = selectedMonster.Hp // display hp from random object
    monsterName = selectedMonster.monsterName // display monster name
    monsterAttack = selectedMonster.attack // monster attack
    monsterDisplayAttack = monsterAttack + 10
    console.log("Salem says: Look out " + name + "! a " +  monsterName + " has appeared! it has " + monsterHp + " HP! and " + monsterDisplayAttack + " attack power! ")
    
    let fightDecision = readline.question("press 'f' to fight or 'r' to try and run away! ")// decide to run or fight
        if (fightDecision === "f") {
            fight() // needs to have player and monster attack each other with random damage until hp = 0 
        } else if (fightDecision === "r") {
            attemptRun() //attemptRun() runs odds of escaping 50/50
    }
}
// monster and player fight//
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
    
 
        if (playerHp <= 0 ) {
            const replay = readline.question("**You are too weak to fight... monsters come from the darkness and devour you!** -Continue Playing?- 'y' or 'n'")
                if(replay === "y") {
                    playerHp = 300 
                    walk()
                } else if (replay === "n"){
                    process.exit()
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
    } else if (escape <= 6){
        console.log("YOU BARELY ESCAPE WITH YOUR LIFE!")
        walk()
    }
}

function diceRoll() {
    turnCount += 1
    console.log("Turn number " + turnCount + " of 10")
    const possibleFight = Math.floor((Math.random() * 12) + 1)
        if (turnCount === 10){ 
            const playAgain = readline.question("***YOU HAVE SURVIVED THE DUNGEON OF DOOM!*** -Continue Playing?- 'y' or 'n'." )
            if (playAgain === "y"){
                playerHp = 300
                walk()
            } else if (playAgain === "n"){
                console.log("You exit the Dungeon never to return....")
                process.exit()
}
        } else if (possibleFight <= 6) {
            monsterEncounter()
        } else if (possibleFight > 6) {
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
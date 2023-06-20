/////////////////////******** Escape Room ****/////////////////////
const readlineSync = require('readline-sync');


let gameOver = false

let hasKey = false

function escapeRoom(){
    const name = readlineSync.question("what is your name? ")
console.log('   Hi ' + name + '!, it looks like you are trapped in a room.... You look around the room, there is a hole in the wall, and a door. ')

while(!gameOver ){
const decision = readlineSync.question('What would you like to do? choose one of the options...enter -open- to try to open the door, -search- to try and search around the room, -hole- to put your hand in the  hole in the wall. ')
    switch (decision) {
        case "open":
            if (hasKey){
                console.log('You open the door and escape! YOU WIN! ') 
                gameOver = true
            } else {
                console.log('the door is locked! ')
            }
            
            break;
        case "search": 
            if(!hasKey){
                console.log('nice job '+ name +' you found the key!, enter -open- to use it on the door.')
                hasKey = true
            } else{
                console.log('what are you looking for ' + name + '?  ')
            }
            
            break;
        case "hole":
            if(!hasKey){
                console.log('Oh No! ' + name +' A werewolf bit your hand off and you bleed to death... GAME OVER ')
                gameOver = true
            } else if(hasKey){
                console.log('Oh No! ' + name + ' A werewolf has eaten your hand off and taken the key with it GAME OVER ')
                gameOver = true
            }
            
            break;

        default: console.log('that didnt work...')
            
    }
}
}
 escapeRoom()




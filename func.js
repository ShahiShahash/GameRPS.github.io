let winMsg = "Victory";
let loseMSg = "Crushing Defeat";
let tieMsg = "Tie";
let moveList = ["Rock", "Paper", "Scissors"];
let h2var = document.querySelectorAll("h2")
// console.log(moveList[1])

function randomMove() {
    return Math.floor(Math.random() * 3)
}
function calcResult(move1,move2){
    let option =document.getElementById("status-head");
    if(move1 === move2){
        option.textContent="tie!";
    }
    else if(move1==2 && move2==1){
        option.textContent="User Wins";
    }
    else if(move1==1 && move2==2){
        option.textContent="Computer Wins";
    }
    else if(move1==0 && move2==1){
        option.textContent="Computer Wins"
    }
    else if(move1==1 && move2==0){
        option.textContent="User Wins"
    }
    else if(move1==0 && move2==2){
        option.textContent="User Wins"
    }
    else if(move1==2 && move2==0){
        option.textContent="Computer Wins"
    }
    h2var[0].textContent = "computer played" + moveList[move2] 
    h2var[1].textContent = "user played" + moveList[move1]
    


}

function startGame(){
    let option =document.getElementById("status-head");
    option.textContent="Choose!";
    let buttons = document.querySelectorAll("button");
    for(let i=0; i<buttons.length; i++){
        buttons[i].textContent = moveList[i];
        buttons[i].style.display = "inline-block";
        buttons[i].addEventListener("click",endGame)
}

}
startGame();

function endGame(event){
    let usermove = moveList.indexOf(event.target.textContent)
    let computermove = randomMove();
    calcResult(usermove,computermove)

}






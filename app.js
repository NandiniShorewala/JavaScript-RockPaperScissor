let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
let userScorePara=document.querySelector("#user-score");
let compScorePara=document.querySelector("#comp-score");
//computer choice
const genCompChoice =() =>{
let options=["Rock","Paper","Scissors"];
const randIdx= Math.floor(Math.random()*3);
return options[randIdx];
};

//Draw
const draw=()=>{
    console.log("Game was draw");
    msg.innerText="Game was draw.Play Again";
    msg.style.background="yellow";
    msg.style.color="black";
};

//Game
const playGame= (userChoice)=>{
    console.log("user choice=",userChoice);
    //generate computer choice ->modular function
    const compChoice=genCompChoice();
    console.log("comp choice=" ,compChoice);
    if(userChoice === compChoice){
     draw();
    }
    else {
        let userWin=true;
        if(userChoice ==="Rock")
       {//scissors,paper
       userWin=compChoice==="Paper"?false:true;
        }
        else if(userChoice ==="Paper")
       {//rock,scissors
        userWin=compChoice==="Scissors"?false:true;
        }
        else{//rock,paper
            userWin=compChoice==="Rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win!!Your choice ${userChoice} beats ${compChoice}`;
        msg.style.background="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("Computer Wins!!,You lose");
        msg.innerText=`You Lose!!Computer choice ${compChoice} beats your ${userChoice}`;
        msg.style.background="red";
    }
}
//User choice
choices.forEach((choice)=> {
    choice.addEventListener("click",() =>{
        const userChoice=choice.getAttribute("id");
        console.log("Choice was clicked",userChoice);
        playGame(userChoice);
    });
});
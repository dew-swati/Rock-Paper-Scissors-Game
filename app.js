let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");
const userScore1=document.querySelector("#user-score");
const compScore1=document.querySelector("#comp-score");

genCompChoice=()=>{
  const options=["rock","paper","scissors"];
  const randIdx= Math.floor(Math.random()*3);
  return options[randIdx];
};

const playGame =(userChoice)=>{
  console.log("UserChoice ", userChoice);
  const compChoice=genCompChoice();
  console.log("CompChoice ", compChoice);

  if(userChoice===compChoice){
    drawGame();
  }
  else{
    userWin=true;
    if(userChoice==="rock"){
      userWin=compChoice==="paper"?false:true;
    }
    else if(userChoice==="paper"){
      userWin=compChoice==="scissors"?false:true;
    }
    else{
      userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
  }
};
drawGame=()=>{
  console.log("Game Draw");
  msg.innerText="Game Draw. Play again.";
  msg.style.backgroundColor="black";

}
showWinner=(userWin,userChoice,compChoice)=>{
  if(userWin){
    userScore++;
    userScore1.innerText=userScore;
   msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}.`;
   msg.style.backgroundColor="green";
  }
  else{
    compScore++;
    compScore1.innerText=compScore;
    msg.innerText=`You Lose! ${compChoice} beats your ${userChoice}.`;
    msg.style.backgroundColor="red";
  }

};

choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id")
    playGame(userChoice);
  })
});
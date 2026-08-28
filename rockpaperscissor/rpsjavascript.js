let userscore = 0;
let computerscore = 0;
const choices =document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const generatecomputerchoice= () =>{
    // rock,paper,scissor
    const option=["rock","paper","scissor"];
    const randomvalue=Math.floor(Math.random()*3);
    return option[randomvalue];

}
const userscorepara =document.querySelector("#user-score");
const computerscorepara =document.querySelector("#computer-score");

const draw = ()=>{
    console.log("Game was draw");
    msg.innerText="Game was draw";
    msg.style.backgroundColor="#081b31";
}
const showwinner =(userwin,userchoice,computerchoice) =>{
    if(userwin){
        userscore++;
        userscorepara.innerText =userscore;
        msg.innerText="You win",userchoice,"beats",computerchoice;
        msg.style.backgroundColor="green";
    }else{
        computerscore++;
        computerscorepara.innerText =computerscore;
        msg.innerText="You lose",computerchoice,"beats",userchoice;
        msg.style.backgroundColor="red";
    }
}
const playgame =(userchoice) =>{
    console.log("user choice =",userchoice);
    // generate computer choice
    const computerchoice=generatecomputerchoice();
    console.log("computer choice =",computerchoice);
    if(userchoice ===computerchoice){
        draw();
    }else{
        let userwin =true;
        if(userchoice==="rock"){
            // scissor ,paper
            userwin = computerchoice==="paper" ? false:true;
        }else if(userchoice==="paper"){
            // paper,rock
            userwin = computerchoice==="scissor" ? false:true;

        }else{
            // rock ,paper
            userwin = computerchoice==="rock"?false :true;
        }
        showwinner(userwin,userchoice,computerchoice);
    }


}
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userchoice =choice.getAttribute("id")
        playgame(userchoice);

    })
    
});
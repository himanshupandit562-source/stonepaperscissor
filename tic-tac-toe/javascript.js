let boxes =document.querySelectorAll(".box");
let resetbutton=document.querySelector("#resetgame");
let newgamebutton =document.querySelector("#newbutton");
let msgcontainer=document.querySelector(".msgcontainer");
let message =document.querySelector("#msg");
let turno = true;
const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6],


];
boxes.forEach((box)  => {
    box.addEventListener("click",() =>{
        console.log("box was clicked");
        
        if(turno){
            box.innerText="o";
            box.classList.add("o");
            turno=false;
        }else{
            box.innerText="x";
            box.classList.add("x");
            turno=true;
        }
        box.disabled=true;
        checkwinner();

    });
});
const showwinner=(winner) =>{
    msg.innerText="consgratulations,winner is",winner;
    msgcontainer.classList.remove("hide");
    disable();
}
const disable =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enable =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        msgcontainer.classList.add("hide");
    }
}
const checkwinner =() => {
    for( let pattern of winpatterns){
        let position0 =boxes[pattern[0]].innerText;
        let position1 =boxes[pattern[1]].innerText;
        let position2 =boxes[pattern[2]].innerText;
        if(position0 !="" && position1 !="" && position2 !=""){
            if(position0 === position1 && position1 === position2){
                

                showwinner(position0);
            }
        }
        
    }
}
const resetgame =()=>{
    trueo=true;
    enable();
}
newgamebutton.addEventListener("click",resetgame);
resetbutton.addEventListener("click",resetgame);
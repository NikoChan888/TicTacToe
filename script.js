let playerSign="X"
const box1= document.getElementById("box1");
const box2= document.getElementById("box2");
const box3= document.getElementById("box3");
const box4= document.getElementById("box4");
const box5= document.getElementById("box5");
const box6= document.getElementById("box6");
const box7= document.getElementById("box7");
const box8= document.getElementById("box8");
const box9= document.getElementById("box9");
const resetBtn= document.getElementById("reset");
function checkWin(i){
    //check if player win
    if((box1.innerText==box2.innerText&&box2.innerText==box3.innerText&&box3.innerText==i)||//three in a row
    (box4.innerText==box5.innerText&&box5.innerText==box6.innerText&&box6.innerText==i)||
    (box7.innerText==box8.innerText&&box8.innerText==box9.innerText&&box9.innerText==i)||
    (box1.innerText==box4.innerText&&box4.innerText==box7.innerText&&box7.innerText==i)||//three in a column
    (box2.innerText==box5.innerText&&box5.innerText==box8.innerText&&box8.innerText==i)||
    (box3.innerText==box6.innerText&&box6.innerText==box9.innerText&&box9.innerText==i)||
    (box1.innerText==box5.innerText&&box5.innerText==box9.innerText&&box9.innerText==i)||//three across
    (box3.innerText==box5.innerText&&box5.innerText==box7.innerText&&box7.innerText==i)){
        alert("Player "+i+" Wins!")
    }
}
function playGame(i,boxNum){
    if(boxNum.innerText==="X"||boxNum.innerText==="O"){
        //nothing happens if box is already selected    
    }else{        
        boxNum.innerText=i//display sign in box
        checkWin(i)//check win
        if(i==="X"){playerSign="O"}else{playerSign="X"}//player switch turn
    }
}

function resetGame(){
    box1.innerText="";
    box2.innerText="";
    box3.innerText="";
    box4.innerText="";
    box5.innerText="";
    box6.innerText="";
    box7.innerText="";
    box8.innerText="";
    box9.innerText="";
}

resetBtn.addEventListener("click",resetGame)
document.getElementById("box1").addEventListener("click", ()=>{playGame(playerSign,box1)});
document.getElementById("box2").addEventListener("click", ()=>{playGame(playerSign,box2)});
document.getElementById("box3").addEventListener("click", ()=>{playGame(playerSign,box3)});
document.getElementById("box4").addEventListener("click", ()=>{playGame(playerSign,box4)});
document.getElementById("box5").addEventListener("click", ()=>{playGame(playerSign,box5)});
document.getElementById("box6").addEventListener("click", ()=>{playGame(playerSign,box6)});
document.getElementById("box7").addEventListener("click", ()=>{playGame(playerSign,box7)});
document.getElementById("box8").addEventListener("click", ()=>{playGame(playerSign,box8)});
document.getElementById("box9").addEventListener("click", ()=>{playGame(playerSign,box9)});
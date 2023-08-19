const bubbleContainer=document.getElementById("bubble_container");
const hit=document.getElementById("hit");
const timer=document.getElementById("timer")
const score=document.getElementById("score");


function randomNumberGenerator(){
    let randNumber=Math.floor(Math.random()*10);
    return randNumber;
}

function fillBubble(){
    let clutter="";
    
    for(let i=1;i<=250;i++)
    {
        let randNum=randomNumberGenerator();
        clutter +=`<div id="bubble" class="bubble">${randNum}</div>`;
    }
    bubbleContainer.innerHTML=clutter;
}

function Updatetime(){  
    let fixTime=60;
    let timevar=setInterval(()=>{
        if(fixTime>=0)
        {
            timer.innerText=fixTime;
            fixTime--;
        }else{
            clearInterval(timevar);
            bubbleContainer.innerText="";
            // let response=confirm("WANT TO RESTART GAME");
            // if(response){
            //     startGame();
            // }else{
            //     alert("Okay Bye")
            // }
        }
    },1000);
   
}

function UpdatingHit(){
    let randomNumber=randomNumberGenerator();
    hit.innerText=randomNumber;
}

let scoreVal=0;
bubbleContainer.addEventListener('click',(details)=>{
    let value=details.target.textContent;
    if(hit.textContent===value){
       scoreVal+=10;
       score.innerText=scoreVal;
    }
    fillBubble();
})


function startGame(){
    fillBubble();
    UpdatingHit();
    Updatetime();
}

startGame();
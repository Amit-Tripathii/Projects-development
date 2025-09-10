let gameSeq = [];
let userSeq = [];

let btns = [
    "yellow", "red", "purple", "green"
];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

let highScore=0;
let h3 = document.createElement("h3");
h3.innerText = `High Score: ${highScore}`;
document.body.appendChild(h3); // add it below the game

//keypress->game start 
document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game started");
        started = true;
        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}


function levelUp() {
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;
    let randomIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randomIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    // console.log(randomIdx);
    // console.log(randColor);
    // console.log(randbtn);
    gameSeq.push(randColor);
    console.log(gameSeq);

    gameFlash(randbtn);

}

function checkAns(idx){
    console.log("curr level:",level);

    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
            
        }
       
    }else{
         if(level > highScore){
            highScore = level;
            h3.innerText = `High Score: ${highScore}`;
        }

        h2.innerHTML=`Game over! Your score was <b>${level} </b>Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
             document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
 
}

function btnPress() {
    let btn = this;
    userFlash(btn);
   
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
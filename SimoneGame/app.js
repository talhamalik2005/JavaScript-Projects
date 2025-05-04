let gameSeq=[];
let userSeq=[];

let started= false;
let level=0;
let body=document.querySelector("body");
let h2 =document.querySelector("h2");
let allBtn =document.querySelectorAll(".btn");
let btn = ["red","green","yellow","purple"];


document.addEventListener("keypress",function(e)
{
// console.log("game started successfully")
console.log(e);
if(started==false)
{
    if(e.key=="Enter"){
    let name=prompt("Enter your name");
        if( name==null ||name==""){console.log("You not enter your name");
        alert("Please enter your name");
        name=prompt("Enter your name");
        }else{
            // console.log("game started now");
        started=true;
        levelup();
        }
        }

    
    else{
        alert("Press Enter to start the game");
        // console.log("You not press enter")
    }
}

});

function btnflash(btn)
{
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },300);
}


function checkans()
{
    console.log(`level is ${level}`);
    let idx = level-1;
    console.log(`userSeq is ${userSeq}`);
    console.log(`gameSeq is ${gameSeq}`);
    if(userSeq[idx]===gameSeq[idx]){
       if(userSeq.length===gameSeq.length){
          setTimeout(function(){
            levelup();
            userSeq=[];
          },1000);
       }
    }else{
        h2.innerText=`Game Over! Press Enter to Restart`; 
        reset()
    }
}

function levelup()
{
    level++;
    h2.innerText=`Your Level Is: ${level}` ;

    let randomNumber=Math.floor(Math.random()*4); 
    let randomColor=btn[randomNumber];
    gameSeq.push(randomColor);
    
    let randomBtn=document.querySelector(`.${randomColor}`);
    btnflash(randomBtn );
    return level;

}

function usrflash(btn)
{
    btn.classList.add("userflash");
    setTimeout(function(){
    btn.classList.remove("userflash") 
    },500);
}


function btnpress(e)
{
    console.log(this)
    // console.log("button pressed");

    usrflash(this);

    userColor =this.getAttribute("id");
    userSeq.push(userColor);
    checkans();
}


for( btns of allBtn){
 btns.addEventListener("click",btnpress)
}

function reset()
{
    gameSeq=[];
    userSeq=[];
    level=0;
    started
    console.log("game reset");
}
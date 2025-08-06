let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const mess=document.querySelector("#msg");

const userscorepara=document.querySelector("#userscore");
const compscorepara=document.querySelector("#compscore");


choices.forEach( (choice)=>{
    choice.addEventListener("click",()=>
    {
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});

const drawgame=()=>
{
console.log("Draw game=");
mess.innerText="Draw Game. Play Again";
mess.style.backgroundColor="orange";
};

const showwinner=(userwin)=>{
    if(userwin)
    {
        userscore++;
        userscorepara.innerText=userscore;
        console.log("You win");
        mess.innerText=("You Win");
        mess.style.backgroundColor="green";
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        console.log("You lose")
        mess.innerText("You Loss");
        mess.style.backgroundColor="red";
    }
}

const playgame=(userchoice)=>{
    console.log("user choice=");
    const compchoice=gencompchoice();
    console.log("comp choices=",compchoice);

    if(userchoice===compchoice)
    {
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock")
        {
            userwin=compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            userwin=compchoice==="scissors"?false:true;
        }
        else{
            userwin=compchoice==="rock"?false:true;

        }
        showwinner(userwin);
    }
};

const gencompchoice=()=>{
    const options=["rock","scissors","paper"];
   const randidx= Math.floor(Math.random()*3);
   return options[randidx];
}

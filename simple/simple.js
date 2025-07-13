let button=document.querySelector("button");
let body=document.querySelector("body");
let curmode="light";
button.addEventListener("click",()=>
{
    if(curmode=="light")
    {
        curmode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }

else{
    curmode="light";
    body.classList.add("light");
    body.classList.remove("dark");
}

console.log("Current mode:", curmode);
});

let c=0;
button.addEventListener("mouseover", () => {
    c++;
    console.log("Mouse over count:", c);
});

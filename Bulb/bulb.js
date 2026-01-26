var a=document.querySelector(".bulb")
var onn=document.querySelector(".on")
var of=document.querySelector(".off")

onn.addEventListener("click",function(){
    a.style.backgroundColor="red"
})

of.addEventListener("click",function(){
    a.style.backgroundColor="rgb(52, 207, 24)";
})
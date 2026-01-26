var a=document.querySelector("h5")

var ad=document.querySelector("#add")

var flag=0;

ad.addEventListener("click",function(){
    if(flag==0)
    {
    a.innerHTML="Friends"
    a.style.color="green"
    ad.innerHTML="Remove Friend"
    flag=1
    }
    else{
    a.innerHTML="Strangers"
    a.style.color="red"
        ad.innerHTML="Add Friend"

    flag=0
    }
})


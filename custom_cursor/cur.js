var a=document.querySelector('.main')
var b=document.querySelector('.cursor')

a.addEventListener('mousemove',function(dets){
    b.style.left=dets.x+"px"
    b.style.top=dets.y+"px"
})
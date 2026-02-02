var val = document.querySelectorAll('.ele')

val.forEach(function (e) {

        
    e.addEventListener('mouseenter', function () {
        e.childNodes[3].style.opacity = 1
    })

    e.addEventListener('mouseleave', function () {
        e.childNodes[3].style.opacity = 0
    })

    e.addEventListener('mousemove', function (dets) {
        e.childNodes[3].style.left = dets.x + "px"
        e.childNodes[3].style.top = dets.y + "px"
    })

})

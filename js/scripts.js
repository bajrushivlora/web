var everything = document.querySelectorAll('.flexbox-work_text');

var myArray = []
var myAnimation = {distance: '150px', duration: 1200, reset: true};


ScrollReveal().reveal(everything, myAnimation);


//opacity
//easing: 'ease-in'
//duration: 2500 (how long animations take to complete)
//distance: 200px
//reset: true===== restarts the animation when u scroll back up
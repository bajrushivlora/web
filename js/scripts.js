var everything = document.querySelectorAll('.flexbox-work_text');
var myAnimation = {distance: '150px', duration: 1400};

ScrollReveal().reveal(everything, myAnimation);

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
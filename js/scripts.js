console.log("hey");


var everythingWork = document.querySelectorAll('.flexbox-work_text');
var myAnimationWork = {distance: '1500px', duration: 1500};

ScrollReveal().reveal(everythingWork, myAnimationWork);



var everythingBio = document.querySelectorAll('#everythingbio');
var myAnimationBio = {distance: '150px', duration: 1700};

ScrollReveal().reveal(everythingBio, myAnimationBio);


function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


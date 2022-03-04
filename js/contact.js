var i;
var one = document.querySelector(".contact-flexbox_bottom1");
var two = document.querySelector(".contact-flexbox_bottom2");
var three = document.querySelector(".contact-flexbox_bottom3");

var link1 = document.getElementById("link1");
var link2 = document.getElementById("link2");
var link3 = document.getElementById("link3");

one.addEventListener('mouseover', changeColor1);
two.addEventListener('mouseover', changeColor2);
three.addEventListener('mouseover', changeColor3);

// link1.addEventListener("mouseout", color1);
// link2.addEventListener("mouseout", color2);
// link3.addEventListener("mouseout", color3);

function changeColor1() {
    link1.style.color = "#5170ed";
    one.style.background = "white";
}

function changeColor2() {
    link2.style.color = "#5170ed";
    two.style.background = "white";
}

function changeColor3() {
    link3.style.color = "#5170ed";
    three.style.background = "white";
}

// function color1() {
//     link1.classList.remove(".bluetext");
//     one.classList.remove(".whitebkgd");
// }

// function color2() {
//     link2.classList.remove(".bluetext");
//     two.classList.remove(".whitebkgd");
// }

// function color3() {
//     link3.classList.remove(".bluetext");
//     three.classList.remove(".whitebkgd");
// }
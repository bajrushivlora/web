var one = document.querySelector(".contact-flexbox_bottom1");
var two = document.querySelector(".contact-flexbox_bottom2");
var three = document.querySelector(".contact-flexbox_bottom3");

var link1 = document.getElementById("link1");
var link2 = document.getElementById("link2");
var link3 = document.getElementById("link3");

link1.addEventListener("mouseover", changeColor1);
link2.addEventListener("mouseover", changeColor1);
link3.addEventListener("mouseover", changeColor1);

link1.addEventListener("mouseout", color1);
link2.addEventListener("mouseout", color2);
link3.addEventListener("mouseout", color3);

function changeColor1() {
    link1.classList.add(".bluetext");
    one.classList.add(".whitebkgd");
}

function changeColor2() {
    link2.classList.add(".bluetext");
    two.classList.add(".whitebkgd");
}

function changeColor3() {
    link3.classList.add(".bluetext");
    three.classList.add(".whitebkgd");
}

function color1() {
    link1.classList.remove(".bluetext");
    one.classList.remove(".whitebkgd");
}

function color2() {
    link2.classList.remove(".bluetext");
    two.classList.remove(".whitebkgd");
}

function color3() {
    link3.classList.remove(".bluetext");
    three.classList.remove(".whitebkgd");
}
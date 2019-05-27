const x = document.querySelector('.bar_one');
const y = document.querySelector('.email');
const z = document.querySelector('.bar_two');
const w = document.querySelector('.linkedin');

x.addEventListener("mouseover", hover);
x.addEventListener("mouseout", hoverOut);

function hover () {
    x.style.backgroundColor = "#fffc70";
    x.style.borderColor = "#fffc70";
    y.style.color = "#000000";
}

function hoverOut () {
    x.style.backgroundColor = "transparent";
    x.style.borderColor = "#ffffff";
    y.style.color = "#fffc70";
}

z.addEventListener("mouseover", mouseover);
z.addEventListener("mouseout", mouseOut);

function mouseover () {
    z.style.backgroundColor = "#fffc70";
    z.style.borderColor = "#fffc70";
    w.style.color = "#000000";
}

function mouseOut () {
    z.style.backgroundColor = "transparent";
    z.style.borderColor = "#ffffff";
    w.style.color = "#fffc70";
}

const a = document.querySelector('.showcase_one');
const b = document.querySelector('.showcase_two');
const c = document.querySelector('.showcase_three');
const d = document.querySelector('.showcase_four');
const e = document.querySelector('.showcase_five');
const f = document.querySelector('.showcase_six');

const aa = document.querySelector('.link_one');
const bb = document.querySelector('.link_two');
const cc = document.querySelector('.link_three');
const dd = document.querySelector('.link_four');
const ee = document.querySelector('.link_five');
const ff = document.querySelector('.link_six');


// ------------------------------------------------------------------------


a.addEventListener("mouseover", over);
a.addEventListener("mouseout", out);

function over () {
    a.style.backgroundColor = "#80ef7a";
    a.style.borderColor = "80ef7a";
    aa.style.color = "#000000";
}

function out () {
    a.style.backgroundColor = "transparent";
    a.style.borderColor = "#ffffff";
    aa.style.color = "#80ef7a";
}

// ------------------------------------------------------------------------


b.addEventListener("mouseover", overr);
b.addEventListener("mouseout", outt);

function overr () {
    b.style.backgroundColor = "#80ef7a";
    b.style.borderColor = "80ef7a";
    bb.style.color = "#000000";
}

function outt () {
    b.style.backgroundColor = "transparent";
    b.style.borderColor = "#ffffff";
    bb.style.color = "#80ef7a";
}
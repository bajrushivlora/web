var plusButton = document.querySelector(".antarctica-menu_zoomin");
var minusButton = document.querySelector(".antarctica-menu_zoomout");
var imageFlexbox = document.querySelector(".antarctica-flexbox");
var flexboxColumn = document.querySelectorAll(".antarctica-flexbox_column");

plusButton.addEventListener("click", oneImageView);
minusButton.addEventListener("click", twoImageView);

function oneImageView() {
  for (var i = 0; i < flexboxColumn.length; i++) {
    flexboxColumn[i].style.flex = "100%";
    flexboxColumn[i].style.maxWidth = "100%";
    flexboxColumn[i].style.padding = "0px";
  }
}

function twoImageView() {
  for(var i = 0; i < flexboxColumn.length; i++) {
    flexboxColumn[i].style.flex = null;
    flexboxColumn[i].style.maxWidth = null;
    flexboxColumn[i].style.padding = null;
  }
}

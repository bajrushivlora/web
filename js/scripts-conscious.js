var plusButton = document.querySelector(".kosovowar-menu_zoomin");
var minusButton = document.querySelector(".kosovowar-menu_zoomout");
var imageFlexbox = document.querySelector(".kosovowar-flexbox");
var flexboxColumn = document.querySelectorAll(".kosovowar-flexbox_column");

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

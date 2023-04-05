var header = document.querySelector('header');
var sticky = header.offsetTop;

function fixedHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
}

window.onscroll = function() { fixedHeader() };

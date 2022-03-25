window.onscroll = function() {scrollFunction()};
let bttButton = document.getElementsByClassName("btt-button")[0];
bttButton.style.display = "none";

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    bttButton.style.display = "block";
  } else {
    bttButton.style.display = "none";
  }
}

$('.btt-link').click(function(e) {
    window.scrollTo(0,0)
})
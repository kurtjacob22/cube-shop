window.onscroll = function () {
  console.log(document.documentElement.scrollTop > 825);
  scrolling();
};

function scrolling() {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    document.getElementById("cart").classList.add("fix-pos");
  } else {
    document.getElementById("cart").classList.remove("fix-pos");
  }
}

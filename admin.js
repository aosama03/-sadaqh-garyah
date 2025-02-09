let name2 = document.querySelector(".name");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    name2.classList.add("fs");
  } else {
    name2.classList.remove("fs");
  }
});

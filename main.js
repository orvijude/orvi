let menuToggle = document.querySelector(".breadsticks");
let menu = document.querySelector(".links-container");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("close");
  menu.classList.toggle("d-none");
  menu.classList.toggle("show-nav");
  document.querySelector("body").classList.toggle("scroll-disable");
});

document.querySelector("#homeNav").addEventListener("click", () => {
  document.querySelector("body").classList.remove("scroll-disable");
  menuToggle.classList.remove("close");
  menu.classList.remove("d-none");
  menu.classList.remove("show-nav");
});

document.querySelector("#projectNav").addEventListener("click", () => {
  document.querySelector("body").classList.remove("scroll-disable");
  menuToggle.classList.remove("close");
  menu.classList.remove("d-none");
  menu.classList.remove("show-nav");
});

document.querySelector("#aboutNav").addEventListener("click", () => {
  document.querySelector("body").classList.remove("scroll-disable");
  menuToggle.classList.remove("close");
  menu.classList.remove("d-none");
  menu.classList.remove("show-nav");
});

document.querySelector("#contactNav").addEventListener("click", () => {
  document.querySelector("body").classList.remove("scroll-disable");
  menuToggle.classList.remove("close");
  menu.classList.remove("d-none");
  menu.classList.remove("show-nav");
});

$(document).ready(function () {
  $("#projectLink, #contactLink, #getStarted, .links-item a").click(function (
    e
  ) {
    var targetHref = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(targetHref).offset().top,
      },
      1000
    );

    e.preventDefault();
  });
});

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".links-item");

window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};

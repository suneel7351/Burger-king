function initSlider() {
  $(".review-container").slick({
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    prevArrow: ".prev-btn",
    nextArrow: ".next-btn",
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
}

$(document).on("ready", function () {
  initSlider();
});

let navBar = document.querySelector(".navigation");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 30) {
    navBar.classList.add("onScroll");
  } else {
    navBar.classList.remove("onScroll");
  }
};

let navLink = document.querySelector(".navLink");
let homeBurger = document.getElementById("homeBurger");

let trigger = document.getElementById("trigger");
let menu = document.querySelector(".menu");
trigger.addEventListener("click", () => {
  menu.classList.toggle("active");
  trigger.classList.toggle("fa-times");
});

document.querySelectorAll(".navlink").forEach((n) =>
  n.addEventListener("click", () => {
    menu.classList.remove("active");
    trigger.classList.remove("fa-times");
  })
);

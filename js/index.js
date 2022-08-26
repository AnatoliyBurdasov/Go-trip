//Carousel

const owl = $(".owl-carousel");
owl.owlCarousel({
  items: 3,
  margin: 20,
  loop: true,
  center: true,
  startPosition: 1,
  responsive: {
    // 830: {
    //   items: 3,
    //   margin: 5,
    // },
    850: {
      startPosition: 1,
      items: 3,
      margin: 20,
    },
    1000: {
      margin: 20,
      items: 3,
    },
    1200: {
      margin: 30,
    },
  },
});
$(".slider__btn--prev").click(function () {
  owl.trigger("next.owl.carousel");
});
$(".slider__btn--next").click(function () {
  owl.trigger("prev.owl.carousel");
});

//Navigation icon

const navBtn = document.querySelector(".nav__toggle");
const nav = document.querySelector(".nav");
const menuIcon = document.querySelector(".menu-icon");

const toggleClass = () => {
  nav.classList.toggle("nav--mobile");
  menuIcon.classList.toggle("menu-icon--active");
};

navBtn.addEventListener("click", toggleClass);

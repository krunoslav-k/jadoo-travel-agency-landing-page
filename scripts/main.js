const cards = document.querySelectorAll(".testimonials__slider__card");
const paginationDots = document.querySelectorAll(
  ".testimonials__pagination-dot"
);
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".main-links-list");

let current = 0;

function updateCards() {
  cards.forEach((card, index) => {
    card.classList.remove("active", "prev", "next");

    if (index === current) {
      card.classList.add("active");
    } else if (
      index === current - 1 ||
      (current === 0 && index === cards.length - 1)
    )
      card.classList.add("prev");
    else if (
      index === current + 1 ||
      (current === cards.length - 1 && index === 0)
    )
      card.classList.add("next");
  });
}

function updateDots() {
  paginationDots.forEach((dot) => {
    dot.classList.remove("active");
  });
  paginationDots[current].classList.add("active");
}

prevBtn.addEventListener("click", () => {
  current = (current - 1 + cards.length) % cards.length;
  updateCards();
  updateDots();
});

nextBtn.addEventListener("click", () => {
  current = (current + 1) % cards.length;
  updateCards();
  updateDots();
});

updateCards();
updateDots();

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("open");
});

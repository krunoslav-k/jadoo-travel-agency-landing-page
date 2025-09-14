const cards = document.querySelectorAll(".testimonials__slider__card");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let current = 0;

function updateCards() {
  cards.forEach((card, index) => {
    card.classList.remove("active", "prev", "next");

    if (index === current) card.classList.add("active");
    else if (
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

prevBtn.addEventListener("click", () => {
  current = (current - 1 + cards.length) % cards.length;
  updateCards();
});

nextBtn.addEventListener("click", () => {
  current = (current + 1) % cards.length;
  updateCards();
});

updateCards();

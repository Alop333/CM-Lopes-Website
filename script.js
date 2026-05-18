const links = document.querySelectorAll("nav a");

links.forEach(link => {

  link.addEventListener("click", () => {

    links.forEach(item => {
      item.classList.remove("active");
    });

    link.classList.add("active");

  });

});


// =========================
// CARROSSEL COVERFLOW
// =========================

const items =
  document.querySelectorAll(".carousel-item");

const nextBtn =
  document.querySelector(".next");

const prevBtn =
  document.querySelector(".prev");

let current = 0;
let interval;


// Atualiza posições
function updateCarousel(direction = "next") {

    items.forEach(item => {

        item.className =
            "carousel-item";

    });

    const prev =
        (current - 1 + items.length)
        % items.length;

    const next =
        (current + 1)
        % items.length;

    items[current]
        .classList.add("active");

    items[prev]
        .classList.add("left");

    items[next]
        .classList.add("right");

    items.forEach((item, index) => {

        if (
            index !== current &&
            index !== prev &&
            index !== next
        ) {

            item.classList.add(
                direction === "next"
                    ? "hidden-right"
                    : "hidden-left"
            );
        }
    });
}


// Próxima
function nextImage(){

    current =
        (current + 1)
        % items.length;

    updateCarousel("next");
}


// Anterior
function prevImage(){

    current =
        (current - 1 + items.length)
        % items.length;

    updateCarousel("prev");
}


// Reinicia timer
function resetInterval(){

  clearInterval(interval);

  interval = setInterval(() => {

    nextImage();

  }, 3000);

}


// Eventos
nextBtn.addEventListener(
  "click",
  () => {

    nextImage();
    resetInterval();

  }
);

prevBtn.addEventListener(
  "click",
  () => {

    prevImage();
    resetInterval();

  }
);


// Inicialização
updateCarousel();
resetInterval();

window.addEventListener("load", () => {

  const leftSection = document.querySelector(".left-section");
  const nav = document.querySelector("nav");
  const sections = document.querySelectorAll(".right-section section");

  // 1. esquerda aparece
  setTimeout(() => {

    leftSection.classList.remove("hidden");
    leftSection.classList.add("fade-left");

  }, 300);

  // 2. menu aparece
  setTimeout(() => {

    nav.classList.remove("hidden");
    nav.classList.add("fade-up");

  }, 1300);

  // 3. subseções aparecem em ordem
  sections.forEach((section, index) => {

    setTimeout(() => {

      section.classList.remove("hidden");
      section.classList.add("fade-up");

    }, 1800 + (index * 500));

  });

});
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
// CARROSSEL
// =========================

const images = document.querySelectorAll(".carousel-images img");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let current = 0;
let interval;


// Exibe imagem
function showImage(index){

  images.forEach(img => {
    img.classList.remove("active");
  });

  images[index].classList.add("active");
}


// Próxima imagem
function nextImage(){

  current++;

  if(current >= images.length){
    current = 0;
  }

  showImage(current);
}


// Imagem anterior
function prevImage(){

  current--;

  if(current < 0){
    current = images.length - 1;
  }

  showImage(current);
}


// Reinicia o temporizador
function resetInterval(){

  clearInterval(interval);

  interval = setInterval(() => {

    nextImage();

  }, 3000);

}


// Clique botão próximo
nextBtn.addEventListener("click", () => {

  nextImage();

  resetInterval();

});


// Clique botão anterior
prevBtn.addEventListener("click", () => {

  prevImage();

  resetInterval();

});

// Inicia automático
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
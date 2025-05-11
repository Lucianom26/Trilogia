const container = document.getElementById("slideshow-container");
  const totalSlides = 50;

  // Crear dinámicamente 45 slides
  for (let i = 1; i <= totalSlides; i++) {
    const slide = document.createElement("div");
    slide.className = "slide";
    if (i === 1) slide.classList.add("active");

    const img = document.createElement("img");
    img.src = `imagen/slide/page${i}.png`; // Asegúrate de tener page1.jpg hasta page45.jpg
    img.alt = `Página ${i}`;
    img.loading = "lazy";

    slide.appendChild(img);
    container.insertBefore(slide, container.children[0]); // Inserta antes de las flechas
  }

  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
  }

  function changeSlide(step) {
    currentSlide = (currentSlide + step + slides.length) % slides.length;
    showSlide(currentSlide);
  }
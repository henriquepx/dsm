// ANIMATION IN PARTNERS SECTION
const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

// ANIMATION NA MAIN
const main = document.querySelector("main");
  const parallaxImages = document.querySelectorAll(".parallax");
  const parallaxAmount = 15; // Ajuste este valor conforme necessário

  main.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth - e.pageX * parallaxAmount) / 100;
    const y = (window.innerHeight - e.pageY * parallaxAmount) / 100;

    parallaxImages.forEach((image) => {
      image.style.transform = `translate(${x}px, ${y}px)`;
    });
  });

// BACK TO TOP
document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
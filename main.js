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


const main = document.querySelector("main");
  const parallaxImages = document.querySelectorAll(".parallax");
  const parallaxAmount = 20; // Ajuste este valor conforme necessário

  main.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth - e.pageX * parallaxAmount) / 100;
    const y = (window.innerHeight - e.pageY * parallaxAmount) / 100;

    parallaxImages.forEach((image) => {
      image.style.transform = `translate(${x}px, ${y}px)`;
    });
  });
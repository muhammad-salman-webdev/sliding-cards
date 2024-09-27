const elements = document.querySelectorAll(
  ".dynamic[data-write-infinite-text]"
);

elements.forEach((element) => {
  const textElement = element.querySelector("span:first-child");
  const originalText = textElement.textContent;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    if (!isDeleting && charIndex < originalText.length) {
      textElement.textContent = originalText.substring(0, charIndex + 1);
      charIndex++;
      setTimeout(typeEffect, 130); // Adjust typing speed
    } else if (isDeleting && charIndex > 0) {
      textElement.textContent = originalText.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(typeEffect, 50); // Adjust deleting speed
    } else if (charIndex === originalText.length) {
      setTimeout(() => {
        isDeleting = true;
        typeEffect();
      }, 500); // Pause before deleting
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      setTimeout(typeEffect, 500); // Pause before typing again
    }
  }

  typeEffect(); // Start the typing effect for each element
});

// data-toggle-card-flip
const flipCards = document.querySelectorAll(
  ".rotating-section-content-sides-container[data-toggle-card-flip]"
);

flipCards.forEach((flipCard) => {
  const toggleBtn = flipCard.querySelector(
    ".rotating-content-front-side-container .side-toggle-btn button[data-flip-toggle-btn]"
  );
  toggleBtn.addEventListener("click", () => {
    flipCard.classList.toggle("toggle");
  });
  const toggleFrontBtn = flipCard.querySelector(
    ".rotating-content-back-side-container .side-toggle-btn button[data-flip-toggle-btn]"
  );
  toggleFrontBtn.addEventListener("click", () => {
    flipCard.classList.toggle("toggle");
  });
});
// All popups Swipers
const allPopupsSwiper = document.querySelectorAll(
  ".rotating-section-popup-main .fliping-popup-swiper"
);
allPopupsSwiper.forEach((popupSwiper, _I) => {
  const swiper = new Swiper(popupSwiper, {
    // Optional parameters
    loop: true,
    speed: 800,

    // Navigation arrows
    navigation: {
      nextEl: ".fliping-popup-slider-btn.next",
      prevEl: ".fliping-popup-slider-btn.prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });

  document.querySelector(".fliping-popup-slider-btn.prev").disabled = true;
});

// Faq functionalities
const allFaqSections = document.querySelectorAll(
  "[data-custom-faq-section-identifier]"
);
allFaqSections.forEach((faqSection) => {
  const faqs = faqSection.querySelectorAll("ul li .custom-faq");
  faqs.forEach((faq, faq_i) => {
    const toggleBtn = faq.querySelector(".custom-faq-q");
    toggleBtn.addEventListener("click", () => {
      faqs.forEach((_faq, _faq_i) => {
        if (faq_i === _faq_i) {
          _faq.classList.toggle("open");
        } else {
          _faq.classList.remove("open");
        }
      });
    });
  });
});

// Making Popups Open and close

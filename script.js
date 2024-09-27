// Select all elements with the class "dynamic" that have the attribute "data-write-infinite-text"
const elements = document.querySelectorAll(
  ".dynamic[data-write-infinite-text]"
);

// Loop through each element to create a typing effect
elements.forEach((element) => {
  // Select the first <span> element inside the current element
  const textElement = element.querySelector("span:first-child");
  // Store the original text content for typing and deleting
  const originalText = textElement.textContent;
  let charIndex = 0; // To track the current character position
  let isDeleting = false; // To toggle between typing and deleting

  // Function to create the typing and deleting effect
  function typeEffect() {
    // If typing and not reached the end of the text
    if (!isDeleting && charIndex < originalText.length) {
      textElement.textContent = originalText.substring(0, charIndex + 1); // Type one more character
      charIndex++; // Increment character index
      setTimeout(typeEffect, 130); // Adjust typing speed
    }
    // If deleting characters
    else if (isDeleting && charIndex > 0) {
      textElement.textContent = originalText.substring(0, charIndex - 1); // Remove one character
      charIndex--; // Decrement character index
      setTimeout(typeEffect, 50); // Adjust deleting speed
    }
    // If the entire text has been typed
    else if (charIndex === originalText.length) {
      setTimeout(() => {
        isDeleting = true; // Switch to deleting mode
        typeEffect();
      }, 500); // Pause before starting to delete
    }
    // If the text has been completely deleted
    else if (isDeleting && charIndex === 0) {
      isDeleting = false; // Switch to typing mode
      setTimeout(typeEffect, 500); // Pause before typing again
    }
  }

  typeEffect(); // Start the typing effect for each element
});

// Select all flip cards that have the attribute "data-toggle-card-flip"
// const flipCards = document.querySelectorAll(
//   ".rotating-section-content-sides-container[data-toggle-card-flip]"
// );

// // Loop through each flip card to add the flipping functionality
// flipCards.forEach((flipCard) => {
//   // Select the front side toggle button
//   const toggleBtn = flipCard.querySelector(
//     ".rotating-content-front-side-container .side-toggle-btn button[data-flip-toggle-btn]"
//   );
//   // Add click event listener to toggle the flip card
//   toggleBtn.addEventListener("click", () => {
//     flipCard.classList.toggle("toggle"); // Add or remove the "toggle" class to flip the card
//   });

//   // Select the back side toggle button
//   const toggleFrontBtn = flipCard.querySelector(
//     ".rotating-content-back-side-container .side-toggle-btn button[data-flip-toggle-btn]"
//   );
//   // Add click event listener to flip the card back
//   toggleFrontBtn.addEventListener("click", () => {
//     flipCard.classList.toggle("toggle"); // Add or remove the "toggle" class to flip the card back
//   });
// });

// Select all swiper popup elements
const allPopupsSwiper = document.querySelectorAll(
  ".rotating-section-popup-main .fliping-popup-swiper"
);

// Loop through each swiper popup and initialize Swiper functionality
allPopupsSwiper.forEach((popupSwiper, _I) => {
  const swiper = new Swiper(popupSwiper, {
    // Swiper options
    loop: true, // Infinite loop
    speed: 800, // Slide transition speed

    // Navigation buttons for swiper
    navigation: {
      nextEl: ".fliping-popup-slider-btn.next",
      prevEl: ".fliping-popup-slider-btn.prev",
    },

    // Scrollbar for swiper
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });

  // Disable the previous button initially
  document.querySelector(".fliping-popup-slider-btn.prev").disabled = true;
});

// Select all FAQ sections
const allFaqSections = document.querySelectorAll(
  "[data-custom-faq-section-identifier]"
);

// Loop through each FAQ section to enable toggle functionality
allFaqSections.forEach((faqSection) => {
  // Select all FAQs within the current section
  const faqs = faqSection.querySelectorAll("ul li .custom-faq");

  // Loop through each FAQ and add toggle functionality
  faqs.forEach((faq, faq_i) => {
    // Select the question toggle button
    const toggleBtn = faq.querySelector(".custom-faq-q");

    // Add click event listener to open/close the FAQ
    toggleBtn.addEventListener("click", () => {
      faqs.forEach((_faq, _faq_i) => {
        if (faq_i === _faq_i) {
          _faq.classList.toggle("open"); // Toggle the "open" class for the current FAQ
        } else {
          _faq.classList.remove("open"); // Close all other FAQs
        }
      });
    });
  });
});

// Select all flip card containers with the attribute "data-flip-card-container-identifier"
const allFlipCardsElems = document.querySelectorAll(
  "section.fliping-content-section[data-flip-card-container-identifier]"
);

// Loop through each flip card to handle popup open/close
allFlipCardsElems.forEach((flipCard) => {
  // Select the "Learn More" button to open the popup
  const popupOpenBtn = flipCard.querySelector(
    "a[data-learn-more-popup-open-btn]"
  );
  // Select the popup container
  const popup = flipCard.querySelector(
    ".rotating-section-popup-main[data-flip-card-toggle-popup-container]"
  );
  // Select the close button inside the popup
  const popupCloseBtn = popup.querySelector(
    "button.c_popup-close-btn[data-flip-popup-close-btn]"
  );

  const body = document.body; // Reference to the body element to disable scrolling when popup is open

  const popupOverlay = flipCard.querySelector(
    ".fliping-overlay[data-fliping-overlay]"
  );

  // Add click event listener to the "Learn More" button to show the popup
  popupOpenBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default link behavior
    popup.classList.add("show"); // Show the popup
    body.classList.add("no-scroll"); // Disable scrolling on the body

    setTimeout(() => {
      popup.scrollTo({ top: 0, behavior: "smooth" }); // Scroll popup content to the top smoothly
      popup.classList.add("anim"); // Add animation class for popup
    }, 10); // Delay to ensure popup is fully visible before animating
  });

  function closePopup() {
    popup.classList.remove("anim"); // Remove animation class
    body.classList.remove("no-scroll"); // Enable scrolling on the body again

    setTimeout(() => {
      popup.classList.remove("show"); // Hide the popup
    }, 300); // Delay to ensure the closing animation finishes
  }

  // Add click event listener to the close button to hide the popup
  popupCloseBtn.addEventListener("click", closePopup);
  popup.addEventListener("click", (e) => {
    e.target === popup ? closePopup() : "";
  });

  // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

  // Loop through each flip card to add the flipping functionality

  const _flipCard = flipCard.querySelector(
    ".rotating-section-content-sides-container[data-toggle-card-flip]"
  );
  // Select the front side toggle button
  const toggleBtn = _flipCard.querySelector(
    ".rotating-content-front-side-container .side-toggle-btn button[data-flip-toggle-btn]"
  );
  // Add click event listener to toggle the flip card
  toggleBtn.addEventListener("click", () => {
    _flipCard.classList.add("toggle"); // Add or remove the "toggle" class to flip the card
    popupOverlay.classList.add("show");
    popupOverlay.style.height = document.body.scrollHeight + "px";
    setTimeout(() => {
      popupOverlay.classList.add("anim");
    }, 10);
  });

  // Select the back side toggle button
  const toggleFrontBtn = _flipCard.querySelector(
    ".rotating-content-back-side-container .side-toggle-btn button[data-flip-toggle-btn]"
  );

  function flipToFront() {
    _flipCard.classList.remove("toggle"); // Add or remove the "toggle" class to flip the card back
    popupOverlay.classList.remove("anim");
    setTimeout(() => {
      popupOverlay.classList.remove("show");
    }, 700);
  }

  // Add click event listener to flip the card back
  toggleFrontBtn.addEventListener("click", flipToFront);
  popupOverlay.addEventListener("click", flipToFront);

  // (((((((((((((((((((((((((((((((())))))))))))))))))))))))))))))))

  const galleryBtns = flipCard.querySelectorAll(
    "#customGallerySection .c-btns > button[data-card-label]"
  );

  const galleryCards = flipCard.querySelectorAll(
    "#customGallerySection .custom_gallery-cards > .custom_gallery-card"
  );

  galleryBtns.forEach((btn, i) => {
    if (btn.classList.contains("active")) {
      const label = btn.getAttribute("data-card-label");
      galleryCards.forEach((card) => {
        const cLabel = card.getAttribute("data-card-label");
        if (cLabel === label) {
          card.classList.add("show");
          card.classList.add("anim");
        }
      });
    }

    btn.addEventListener("click", () => {
      galleryBtns.forEach((_b) => _b.classList.remove("active"));
      btn.classList.add("active");
      const label = btn.getAttribute("data-card-label");
      galleryCards.forEach((card) => {
        // Showing new cards
        const cLabel = card.getAttribute("data-card-label");
        if (label === "all") {
          card.classList.add("show");
          setTimeout(() => {
            card.classList.add("anim");
          }, 10);
        } else {
          if (cLabel === label) {
            card.classList.add("show");
            setTimeout(() => {
              card.classList.add("anim");
            }, 10);
          } else {
            // Hiding previous cards
            card.classList.remove("anim");
            setTimeout(() => {
              card.classList.remove("show");
            }, 600);
          }
        }
      });
    });
  });

  galleryCards.forEach((card, i) => {
    const thumbnail = card.querySelector(".box"),
      overLay = card.querySelector(".overlay"),
      closeIcon = card.querySelector(".close-icon"),
      playPauseBtn = card.querySelector(".play-pause-btn"),
      video = card.querySelector("video");

    thumbnail.addEventListener("click", (event) => {
      card.querySelector(".popup").style.height = popup.scrollHeight + "px";

      const videoPlayer = card.querySelector(".video-container");

      popup.addEventListener("scroll", () => {
        const y = popup.scrollTop;
        console.log(y);
      });

      popup.style.overflow = "hidden";
      card.classList.add("show-popup");

      const y = popup.scrollTop;
      const x = (window.innerHeight - videoPlayer.offsetHeight) / 2;
      videoPlayer.style.top = y + x;

      // console.log(videoPlayer, videoPlayer.offsetHeight);
      // console.log(videoPlayer, videoPlayer.clientHeight);
      // console.log(videoPlayer, videoPlayer.scrollHeight);

      setTimeout(() => {
        card.classList.add("anim-popup");
      }, 10);
    });
    const closeVideo = () => {
      card.classList.remove("anim-popup");
      setTimeout(() => {
        card.classList.remove("show-popup");
        popup.style.overflow = "auto";
      }, 300);

      if (playPauseBtn.classList.contains("played")) {
        playPauseBtn.classList.remove("played");
        video.pause();
      }
    };
    overLay.addEventListener("click", closeVideo);
    closeIcon.addEventListener("click", closeVideo);

    playPauseBtn.addEventListener("click", (e) => {
      playPauseBtn.classList.toggle("played");
      if (playPauseBtn.classList.contains("played")) {
        video.play();
      } else {
        video.pause();
      }
    });
  });
});

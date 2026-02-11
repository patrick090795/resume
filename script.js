// NAVBAR SECTION SWITCH
const navButtons = document.querySelectorAll(".nav-btn");
const sections = document.querySelectorAll(".section");

navButtons.forEach(button => {
  button.addEventListener("click", () => {
    navButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    sections.forEach(section => section.classList.remove("active-section"));

    const target = button.getAttribute("data-section");
    document.getElementById(target).classList.add("active-section");
  });
});


// PROJECT FILTER SYSTEM
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    projectCards.forEach(card => {
      if (filter === "all") {
        card.style.display = "block";
      } else {
        if (card.classList.contains(filter)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      }
    });
  });
});


// TYPING EFFECT
const typingText = document.querySelector(".typing-text");

const roles = [
  "DevOps Engineer",
  "Cloud Engineer",
  "Machine Learning Enthusiast",
  "Software Developer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (!isDeleting) {
    typingText.textContent = currentRole.substring(0, charIndex++);
  } else {
    typingText.textContent = currentRole.substring(0, charIndex--);
  }

  if (charIndex > currentRole.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
    return;
  }

  if (charIndex < 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  setTimeout(typeEffect, isDeleting ? 60 : 100);
}

typeEffect();


// DARK MODE TOGGLE
const darkToggle = document.getElementById("darkModeToggle");

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    darkToggle.innerHTML = `<i class="fa-solid fa-sun"></i> Light Mode`;
  } else {
    darkToggle.innerHTML = `<i class="fa-solid fa-moon"></i> Dark Mode`;
  }
});

// DOWNLOAD RESUME
// The download functionality is now handled by the anchor tag in the HTML, so no JavaScript is needed for this feature.

document.getElementById("downloadResumeBtn").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "resume.pdf";  
  link.download = "Jean_Aime_Patrick_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});


// ===== SKILLS ANIMATION =====
const skillFills = document.querySelectorAll(".skill-fill");

skillFills.forEach((fill) => {
  const targetWidth = fill.dataset.width + "%";
  fill.style.setProperty("--skill-width", targetWidth);
});

const skillsSection = document.querySelector("#skills");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        skillFills.forEach((fill) => {
          fill.classList.add("animate");
        });
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 },
);

if (skillsSection) {
  observer.observe(skillsSection);
}

// ===== HAMBURGER MENU =====
const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector("header nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("change", () => {
    nav.style.display = menuToggle.checked ? "flex" : "";
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.checked = false;
      nav.style.display = "";
    });
  });
}
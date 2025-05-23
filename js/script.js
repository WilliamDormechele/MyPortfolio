// Initialize AOS animations
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 800,
    once: true
  });
});

// AOS Initialization
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 800,
    once: true
  });

  // Dark Mode Toggle
  const toggle = document.getElementById("modeToggle");
  const isDark = localStorage.getItem("darkMode") === "true";
  if (isDark) document.body.classList.add("dark-mode");
  toggle.checked = isDark;

  toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", toggle.checked);
  });
});

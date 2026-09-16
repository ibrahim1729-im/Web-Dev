const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const themeBtn = document.getElementById("themeBtn");
const copyEmail = document.getElementById("copyEmail");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  menuBtn.textContent = navLinks.classList.contains("open") ? "×" : "☰";
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.textContent = "☰";
  });
});

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const light = document.body.classList.contains("light");
  themeBtn.textContent = light ? "☀" : "☾";
  localStorage.setItem("portfolio-theme", light ? "light" : "dark");
});

if (localStorage.getItem("portfolio-theme") === "light") {
  document.body.classList.add("light");
  themeBtn.textContent = "☀";
}

copyEmail.addEventListener("click", async () => {
  const email = "your.email@example.com";
  try {
    await navigator.clipboard.writeText(email);
    copyEmail.textContent = "Copied ✓";
    setTimeout(() => copyEmail.textContent = "Copy Email", 1800);
  } catch {
    copyEmail.textContent = "Copy manually";
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

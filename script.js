document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section?.scrollIntoView({ behavior: 'smooth' });
  });
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    if (pageYOffset >= section.offsetTop - 150) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

document.querySelectorAll('.gallery-grid img, .certificates img').forEach(img => {
  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position:fixed;top:0;left:0;width:100%;height:100%;
      background:rgba(0,0,0,0.8);display:flex;align-items:center;
      justify-content:center;z-index:10000;
    `;
    const enlarged = document.createElement('img');
    enlarged.src = img.src;
    enlarged.style.cssText = 'max-width:90%;max-height:90%;border-radius:10px;';
    overlay.appendChild(enlarged);
    overlay.addEventListener('click', () => document.body.removeChild(overlay));
    document.body.appendChild(overlay);
  });
});

document.getElementById("donateBtn").addEventListener("click", function (e) {
  e.preventDefault();
  const modal = document.getElementById("qrModal");
  modal.style.display = "flex";

  modal.addEventListener("click", () => {
    modal.style.display = "none";
  });
});

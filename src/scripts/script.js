class NavigationManager {
  constructor() {
    this.sections = document.querySelectorAll("section");
    this.navLinks = document.querySelectorAll("header nav ul li a");
    this.init();
  }

  init() {
    this.setupSmoothScrolling();
    this.setupActiveNavigation();
    this.setupImageLightbox();
    this.setupDonateModal();
  }

  setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          targetSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  setupActiveNavigation() {
    window.addEventListener("scroll", () => {
      let current = "";
      
      this.sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (window.pageYOffset >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      this.navLinks.forEach(link => {
        link.classList.remove("active");
        const href = link.getAttribute("href");
        if (href && href.includes(current) && current) {
          link.classList.add("active");
        }
      });
    });
  }

  setupImageLightbox() {
    document.querySelectorAll('.gallery-grid img, .certificates img, .carousel-track img, .awards-gallery img').forEach(img => {
      img.addEventListener('click', () => {
        this.createLightbox(img.src, img.alt);
      });
    });
  }

  createLightbox(imageSrc, altText) {
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML = `
      <div class="lightbox-content">
        <img src="${imageSrc}" alt="${altText}">
        <button class="lightbox-close" aria-label="Close lightbox">&times;</button>
      </div>
    `;
    
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay || e.target.classList.contains('lightbox-close')) {
        document.body.removeChild(overlay);
        document.body.style.overflow = '';
      }
    });
    
    document.body.style.overflow = 'hidden';
    document.body.appendChild(overlay);
  }

  setupDonateModal() {
    const donateBtn = document.querySelector('.donate-btn');
    const modal = document.getElementById("qrModal");
    
    if (donateBtn && modal) {
      donateBtn.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.display = "flex";
        document.body.style.overflow = 'hidden';
      });

      modal.addEventListener("click", (e) => {
        if (e.target === modal || e.target.classList.contains('qr-image')) {
          modal.style.display = "none";
          document.body.style.overflow = '';
        }
      });
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new NavigationManager();
});
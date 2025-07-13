class GalleryManager {
  constructor() {
    this.galleries = {
      medical: this.generateImagePaths('Medical CheckUp Camp/Picture', 1, 83, '.jpg'),
      musical: this.generateImagePaths('Musical Program/PictureNew', 39, 130, '.jpg'),
      ashram: this.generateImagePaths('Vradha Ashram Paradeshi Pura/Pictur', 1, 47, '.jpg')
    };
  }

  generateImagePaths(basePath, start, end, extension) {
    const paths = [];
    for (let i = start; i <= end; i++) {
      paths.push(`src/assets/images/gallery/${basePath} (${i})${extension}`);
    }
    return paths;
  }

  loadGallery(galleryId, imagePaths, altTextPrefix) {
    const container = document.getElementById(galleryId);
    if (!container) return;

    container.innerHTML = '';
    
    imagePaths.forEach((path, index) => {
      const img = document.createElement('img');
      img.src = path;
      img.alt = `${altTextPrefix} ${index + 1}`;
      img.loading = 'lazy';
      img.addEventListener('click', () => this.openLightbox(path, img.alt));
      container.appendChild(img);
    });
  }

  openLightbox(imageSrc, altText) {
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML = `
      <div class="lightbox-content">
        <img src="${imageSrc}" alt="${altText}">
        <button class="lightbox-close">&times;</button>
      </div>
    `;
    
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay || e.target.classList.contains('lightbox-close')) {
        document.body.removeChild(overlay);
      }
    });
    
    document.body.appendChild(overlay);
  }

  init() {
    this.loadGallery('medical-track', this.galleries.medical, 'Medical Camp');
    this.loadGallery('musical-track', this.galleries.musical, 'Musical Program');
    this.loadGallery('ashram-track', this.galleries.ashram, 'Ashram Event');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const galleryManager = new GalleryManager();
  galleryManager.init();
});
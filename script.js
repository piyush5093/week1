const thumbnails = document.querySelectorAll('.thumbnail');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const closeBtn = document.querySelector('.close');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentIndex = 0;

// Open Lightbox
thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        lightbox.classList.add('active');
        lightboxImage.src = thumb.src;
        currentIndex = index;
    });
});

// Close Lightbox
closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

// Navigate Next
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % thumbnails.length;
    lightboxImage.src = thumbnails[currentIndex].src;
});

// Navigate Previous
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
    lightboxImage.src = thumbnails[currentIndex].src;
});

// Close Lightbox on Background Click
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
    }
});

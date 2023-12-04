let currentImageIndex;

document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById('productList');
  const imageOverlay = document.getElementById('imageOverlay');
  const overlayImage = document.getElementById('overlayImage');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  productList.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
      currentImageIndex = Array.from(productList.children).indexOf(event.target);
      showImage();
    }
  });

  function showImage() {
    overlayImage.src = event.target.src;
    imageOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    imageOverlay.addEventListener('click', closeImageOverlay);
  }

  function closeImageOverlay() {
    imageOverlay.style.display = 'none';
    document.body.style.overflow = 'auto';
  }

  prevBtn.addEventListener('click', (event) => {
    imageOverlay.classList.add('fade');
    event.stopPropagation();
    changeImage(-1);
  });

  nextBtn.addEventListener('click', (event) => {
    imageOverlay.classList.add('fade');
    event.stopPropagation();
    changeImage(1);
  });

  imageOverlay.addEventListener('click', closeImageOverlay);
});

function changeImage(direction) {
  currentImageIndex += direction;

  if (currentImageIndex < 0) {
    currentImageIndex = productList.children.length - 1;
  } else if (currentImageIndex >= productList.children.length) {
    currentImageIndex = 0;
  }

  overlayImage.src = productList.children[currentImageIndex].querySelector('img').src;
}

const memeImage = document.getElementById('meme-image');
const memeSound = document.getElementById('meme-sound');

memeImage.addEventListener('click', () => {
  memeSound.play();
});

const animations = ['rotate', 'flip', 'dance'];

setInterval(() => {
  // Remove any existing animation classes
  memeImage.classList.remove(...animations);

  // Add a random animation
  const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
  memeImage.classList.add(randomAnimation);

}, 2000); // Change animation every 2 seconds

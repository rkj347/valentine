// Get elements
const envelope = document.getElementById('envelope');
const question = document.getElementById('question');
const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');
const celebration = document.getElementById('celebration');
const audio = document.getElementById('romanticAudio');

// Open the envelope
envelope.addEventListener('click', () => {
  envelope.classList.add('open');
  setTimeout(() => {
    envelope.classList.add('hidden');
    question.classList.remove('hidden');
  }, 1000);
});

// Handle "Yes" button click
yesButton.addEventListener('click', () => {
  question.classList.add('hidden');
  celebration.classList.remove('hidden');
  document.body.style.background = "#ff6f61";
  audio.play();
  startHearts();
});

// Handle "No" button click (move button)
noButton.addEventListener('click', () => {
  const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
  noButton.style.position = 'absolute';
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
});

// Heart animation
function startHearts() {
    setInterval(() => {
      const heart = document.createElement('div');
      heart.classList.add('heart');
  
      // Randomly choose between heart.png and heart2.png
      const heartType = Math.random() > 0.5 ? 'heart.png' : 'heart2.png';
      heart.style.backgroundImage = `url('${heartType}')`;
  
      heart.style.left = Math.random() * window.innerWidth + 'px';
      heart.style.animationDuration = Math.random() * 3 + 2 + 's';
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 5000);
    }, 300);
  }
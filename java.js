const texts = [
    'Happy Birthday, Angel!',
    'Click anywhere on the screen to play a song'
  ];
  
  let index = 0;
  let isErasing = false;
  let typingSpeed = 100;
  let erasingSpeed = 50;
  let newTextDelay = 2250; // Delay between erasing current text and showing new text
  
  const audio = new Howl({
    src: ["resources/bday_song.mp3"],
    autoplay: true,
    loop: true,
  });

  // Play the audio immediately
  audio.play();

  // Ensure audio doesn't overlap if already playing
  document.addEventListener('click', () => {
    if (audio.playing()) {
      audio.stop();
      audio.play();
    }
  });
  
  function type() {
    const text = texts[index];
    const currentText = document.querySelector('.typewriter');
    if (!isErasing) {
      // Typing animation
      if (currentText.textContent.length < text.length) {
        currentText.textContent = text.slice(0, currentText.textContent.length + 1);
        setTimeout(type, typingSpeed);
      } else {
        // Delay before erasing
        setTimeout(erase, newTextDelay);
      }
    } else {
      // Erasing animation
      if (currentText.textContent.length > 0) {
        currentText.textContent = text.slice(0, currentText.textContent.length - 1);
        setTimeout(erase, erasingSpeed);
      } else {
        // Move to next text
        index++;
        if (index >= texts.length) {
          index = 0; // Loop to the first text
        }
        isErasing = false;
        setTimeout(type, typingSpeed);
      }
    }
  }
  
  function erase() {
    isErasing = true;
    type();
  }
  
  document.addEventListener('DOMContentLoaded', type);
  

// Delay in milliseconds before showing the button
const buttonDelay = 5500;

// Function to show the button after the delay
function showButton() {
  const button = document.getElementById('mainBtn');
  button.classList.add('show');
}

// Wait for the specified delay and then show the button
window.onload = function () {
  setTimeout(showButton, buttonDelay);
};


document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('mainBtn');

  btn.addEventListener('click', function(event) {
    event.preventDefault();

    // Add smooth animation here
    document.body.classList.add('fade-out');
    setTimeout(function() {
      window.location.href = btn.href;
    }, 500); // Adjust the delay as needed
  });
});

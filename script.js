const explodeButton = document.querySelector('.explode-button');
const explosionMessage = document.querySelector('.explosion-message');
const counterElement = document.getElementById('counter');
let clickCounter = 0;

explodeButton.addEventListener('click', () => {
  explosionMessage.classList.remove('hidden');
  clickCounter++;
  counterElement.innerText = clickCounter;
});
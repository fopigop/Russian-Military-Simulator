// Получаем ссылки на элементы кнопки, сообщения и счетчика
const explodeButton = document.querySelector('.explode-button');
const explosionMessage = document.querySelector('.explosion-message');
const clickCounter = document.querySelector('#counter');

// Получаем количество кликов из localStorage или устанавливаем его на 0, если его еще нет
let clickCount = localStorage.getItem('clickCount') || 0;

// Устанавливаем количество кликов в счетчик при загрузке страницы
clickCounter.textContent = clickCount;

// Обновляем количество кликов и счетчик при нажатии на кнопку
explodeButton.addEventListener('click', () => {
  // Увеличиваем количество кликов на 1
  clickCount++;
  // Сохраняем количество кликов в localStorage
  localStorage.setItem('clickCount', clickCount);
  // Обновляем значение в счетчике
  clickCounter.textContent = clickCount;
  // Показываем сообщение об "взрыве"
  explosionMessage.classList.remove('hidden');
});
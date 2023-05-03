// Получаем ссылки на элементы кнопки, сообщения и счетчика
const explodeButton = document.querySelector('.explode-button');
const explosionMessage = document.querySelector('.explosion-message');
const clickCounter = document.querySelector('#counter');

// Получаем количество кликов из localStorage или устанавливаем его на 0, если его еще нет
let clickCount = localStorage.getItem('clickCount') || 0;

// Получаем массив полученных достижений из localStorage или устанавливаем его на пустой массив, если его еще нет
let achievements = JSON.parse(localStorage.getItem('achievements')) || [];

// Функция для проверки достижений
function checkAchievements() {
  if (clickCount >= 1000 && !achievements.includes('achievement1')) {
    alert('Достижение! "Сосун малого разряда"');
    achievements.push('achievement1');
  }
  if (clickCount >= 10000 && !achievements.includes('achievement2')) {
    alert('Достижение! "Пригожин"');
    achievements.push('achievement2');
  }
  if (clickCount >= 100000 && !achievements.includes('achievement3')) {
    alert('Достижение! "Пенис Душнилин"');
    achievements.push('achievement3');
  }
  // Сохраняем массив достижений в localStorage
  localStorage.setItem('achievements', JSON.stringify(achievements));
}

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
  // Добавляем класс pressed
  explodeButton.classList.add('pressed');
  // Удаляем класс pressed через 100 миллисекунд
  setTimeout(() => explodeButton.classList.remove('pressed'), 100);
  // Проверяем достижения
  checkAchievements();
});

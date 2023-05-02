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
  if (clickCount >= 100 && !achievements.includes('achievement1')) {
    alert('Достижение! "Сосун малого разряда"');
    achievements.push('achievement1');
  }
  if (clickCount >= 1000 && !achievements.includes('achievement2')) {
    alert('Достижение! "Повелитель спермы"');
    achievements.push('achievement2');
  }
  if (clickCount >= 10000 && !achievements.includes('achievement3')) {
    alert('Достижение! "Бог спермы');
    achievements.push('achievement3');
  }
  if (clickCount >= 100000 && !achievements.includes('achievement3')) {
    alert('Достижение! "Владимир Владимирович');
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

function checkAchievements() {
  if (clicks >= 1000 && !achievement1) {
    achievement1 = true;
    document.getElementById("achievement1").innerHTML = "Достижение!";
    document.getElementById("achievementsList").innerHTML += "<li>Низший сосун</li>";
  }
  if (clicks >= 10000 && !achievement2) {
    achievement2 = true;
    document.getElementById("achievement2").innerHTML = "Достижение!";
    document.getElementById("achievementsList").innerHTML += "<li>Пригожин</li>";
  }
  if (clicks >= 100000 && !achievement3) {
    achievement3 = true;
    document.getElementById("achievement3").innerHTML = "Достижение!";
    document.getElementById("achievementsList").innerHTML += "<li>Пенис Душнилин</li>";
  }
}

function updateClicks() {
  clicks++;
  document.getElementById("clickCount").innerHTML = clicks;

  checkAchievements();
}

const body = document.body;
const languageToggle = document.getElementById('language-toggle');
const themeToggle = document.getElementById('theme-toggle');
const text = document.getElementById('text');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');
const skillBgLight = document.getElementById('skill-bg-light');
const skillBgDark = document.getElementById('skill-bg-dark');

let isProgrammerLanguage = false;
let isLightTheme = true;

const savedState = localStorage.getItem('pageState');
if (savedState) {
  const { language, theme } = JSON.parse(savedState);
  isProgrammerLanguage = language;
  isLightTheme = theme;
}

body.classList.add('no-transition');

updateLanguage();
updateTheme();

window.addEventListener('load', function() {
  body.classList.remove('no-transition');
});

languageToggle.addEventListener('click', function() {
  toggleLanguage();
  saveState();
});

themeToggle.addEventListener('click', function() {
  toggleTheme();
  saveState();
});

function toggleLanguage() {
  isProgrammerLanguage = !isProgrammerLanguage;
  updateLanguage();
}

function toggleTheme() {
  isLightTheme = !isLightTheme;
  updateTheme();
}

function updateLanguage() {
  const languageButtonText = isProgrammerLanguage ? '🧙‍♂️' : '👨‍💻';
  const textContent = isProgrammerLanguage ? 'Podstawy komputerów' : 'Podstawy komputerów';
  const text2Content = isProgrammerLanguage ? 'Komputer to zaawansowana maszyna, która wykonuje operacje na danych. Można go porównać do skomplikowanego kalkulatora, który potrafi przetwarzać liczby, litery, obrazy i wiele innych informacji.' : 'Możemy porównać komputer do magicznej różdżki, która pozwala na wykonywanie różnych zaklęć. Komputer to jakby nasza magiczna maszyna, która wykonuje różne zadania, takie jak liczenie, rysowanie, czy odtwarzanie muzyki.';
  const text3Content = isProgrammerLanguage ? 'Object programming is magic' : 'Sorcery of programming is amazing';

  languageToggle.textContent = languageButtonText;
  text.textContent = textContent;
  text2.textContent = text2Content;
  text3.textContent = text3Content;

  updateButtonText();
  updateTextColors();

  const einsteinImage = document.getElementById('einstein');

// Ukrywamy obrazek poprzez zmniejszenie jego opacity do 0
einsteinImage.style.opacity = '0';

// Po pewnym czasie (np. 100ms) zmieniamy 'src' na nowy obrazek
setTimeout(() => {
  einsteinImage.src = isProgrammerLanguage ? '../../images/einstein.png' : '../../images/einstein-potter.png';

  // Teraz, po zmianie 'src', przywracamy opacity do 1, aby obrazek stopniowo się pojawiał
  einsteinImage.style.opacity = '1';
}, 150);

  document.title = isProgrammerLanguage ? 'C++ Map' : 'C++ Magic Map';
}

function updateTheme() {
  updateButtonText();
  updateTextColors();

  skillBgLight.style.opacity = isLightTheme ? '1' : '0';
  skillBgDark.style.opacity = isLightTheme ? '0' : '1';

  if (isLightTheme) {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
  } else {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
  }
}

function updateButtonText() {
  themeToggle.textContent = isLightTheme ? (isProgrammerLanguage ? 'Dark' : 'Nox') : (isProgrammerLanguage ? 'Light' : 'Lumos');
}

function updateTextColors() {
  text.style.color = isLightTheme ? '#fff' : '#fff';
  text2.style.color = isLightTheme ? '#fff' : '#fff';
  text3.style.color = isLightTheme ? '#000' : '#fff';
}



function saveState() {
  const state = {
    language: isProgrammerLanguage,
    theme: isLightTheme
  };
  localStorage.setItem('pageState', JSON.stringify(state));
}

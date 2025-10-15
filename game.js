// Инициализация карты
const map = L.map('map').setView([54.526, 15.2551], 4);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Названия стран
const countryNames = {
  en: {
    FR: "France",
    DE: "Germany",
    IT: "Italy",
    PL: "Poland",
    UA: "Ukraine",
    ES: "Spain",
  },
  ru: {
    FR: "Франция",
    DE: "Германия",
    IT: "Италия",
    PL: "Польша",
    UA: "Украина",
    ES: "Испания",
  }
};

// Страны для примера (координаты центров)
const countries = [
  { code: 'FR', lat: 46.6, lon: 2.5 },
  { code: 'DE', lat: 51.2, lon: 10.5 },
  { code: 'IT', lat: 42.8, lon: 12.5 },
  { code: 'PL', lat: 52.0, lon: 19.0 },
  { code: 'UA', lat: 49.0, lon: 32.0 },
  { code: 'ES', lat: 40.4, lon: -3.7 }
];

const tooltip = document.getElementById('tooltip');
let currentLang = 'en';

// Добавление стран на карту
countries.forEach(country => {
  const marker = L.circleMarker([country.lat, country.lon], {
    radius: 10,
    fillColor: "#b08d57",
    color: "#5a4620",
    weight: 2,
    opacity: 1,
    fillOpacity: 0.8
  }).addTo(map);

  marker.on('mouseover', e => {
    tooltip.style.display = 'block';
    tooltip.innerHTML = countryNames[currentLang][country.code];
  });

  marker.on('mousemove', e => {
    tooltip.style.left = (e.originalEvent.pageX + 10) + 'px';
    tooltip.style.top = (e.originalEvent.pageY - 10) + 'px';
  });

  marker.on('mouseout', () => tooltip.style.display = 'none');
});

// Переключение языка
document.getElementById('language-selector').addEventListener('change', (e) => {
  currentLang = e.target.value;
  document.getElementById('title').textContent =
    currentLang === 'en' ? "European Map Game" : "Игра Карта Европы";
});

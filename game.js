// Создаём карту с возможностью сильного приближения
const map = L.map('map', {
  zoomControl: true,
  minZoom: 3,
  maxZoom: 10,
  zoomSnap: 0.5
}).setView([54.5, 15], 4);

// Океан (темно-синий фон)
L.rectangle([[90, -180], [-90, 180]], {
  color: "#001F3F",
  weight: 0,
  fillColor: "#001F3F",
  fillOpacity: 1
}).addTo(map);

// Цвета стран (военные оттенки)
const countryColors = {
  "Ukraine": "#BDB76B",   // тёмно-жёлтый хаки
  "Moldova": "#6B8E23",   // оливковый
  "Poland": "#556B2F",    
  "Germany": "#8B4513",   
  "France": "#2E8B57",    
  "Italy": "#708238",     
  "Romania": "#556B2F",   
  "Belarus": "#6B8E23",   
  "Hungary": "#4B5320",   
  "Bulgaria": "#556B2F",  
  "Spain": "#808000",     
  "Portugal": "#556B2F",
  "Slovakia": "#6B8E23",
  "Czech Republic": "#556B2F",
  "Sweden": "#556B2F",
  "Norway": "#4B5320",
  "Finland": "#708238",
  "Estonia": "#556B2F",
  "Latvia": "#6B8E23",
  "Lithuania": "#556B2F",
  "Denmark": "#4B5320",
  "Netherlands": "#556B2F",
  "Belgium": "#556B2F",
  "Switzerland": "#8B4513",
  "Austria": "#556B2F",
  "Greece": "#6B8E23",
  "Ireland": "#556B2F",
  "United Kingdom": "#556B2F",
  "Luxembourg": "#556B2F"
};

// Активная страна
let activeCountryLayer = null;

// --- Функция добавления границы с миганием ---
function addBorderEffect(layer) {
  const path = layer.getElement();
  if (!path) return;
  path.style.transition = "all 0.5s";
  let blink = 0;
  const interval = setInterval(() => {
    path.style.stroke = blink % 2 === 0 ? "#FFFFFF" : "#333";
    blink++;
    if (!activeCountryLayer || activeCountryLayer.getElement() !== path) {
      clearInterval(interval);
      path.style.stroke = "#333";
    }
  }, 500);
}

function resetBorderEffect(layer) {
  const path = layer.getElement();
  if (!path) return;
  path.style.stroke = "#333";
}

// --- Загружаем страны Европы ---
fetch('https://raw.githubusercontent.com/leakyMirror/map-of-europe/master/GeoJSON/europe.geojson')
  .then(res => res.json())
  .then(data => {
    L.geoJSON(data, {
      style: feature => ({
        color: "#333",  // границы
        weight: 1.5,
        fillColor: countryColors[feature.properties.NAME] || "#556B2F",
        fillOpacity: 0.95
      }),
      onEachFeature: (feature, layer) => {
        layer.bindPopup(`<b>${feature.properties.NAME}</b>`);

        layer.on('click', () => {
          if (activeCountryLayer && activeCountryLayer !== layer) {
            resetBorderEffect(activeCountryLayer);
          }
          activeCountryLayer = layer;
          addBorderEffect(layer);

          // Загружаем регионы и города
          loadRegions(feature.properties.NAME);
        });
      }
    }).addTo(map);
  });

// --- Добавляем города (пример: украинские города) ---
const cities = [
  { name: "Киев", coords: [50.4501, 30.5234], importance: 3 },
  { name: "Харьков", coords: [49.9935, 36.2304], importance: 2 },
  { name: "Чернигов", coords: [51.4982, 31.2893], importance: 1 },
  { name: "Сумы", coords: [50.9077, 34.7981], importance: 1 },
  { name: "Львов", coords: [49.8397, 24.0297], importance: 2 },
  { name: "Одесса", coords: [46.4825, 30.7233], importance: 2 },
  { name: "Днепр", coords: [48.4647, 35.0462], importance: 2 },
  { name: "Запорожье", coords: [47.8388, 35.1396], importance: 1 },
  { name: "Полтава", coords: [49.5883, 34.5514], importance: 1 },
  { name: "Черкассы", coords: [49.4444, 32.0598], importance: 1 },
  { name: "Винница", coords: [49.2331, 28.4682], importance: 1 }
];

cities.forEach(city => {
  const radius = 4 + city.importance * 2; // важные города крупнее
  const marker = L.circleMarker(city.coords, {
    radius,
    color: "#FFD700",
    fillColor: "#FFD700",
    fillOpacity: 0.9
  }).bindPopup(`<b>${city.name}</b>`);
  
  marker.addTo(map);

  // плавная анимация появления
  marker.setStyle({ opacity: 0 });
  setTimeout(() => marker.setStyle({ opacity: 1 }), 300);
});

// --- Загрузка регионов (пример, плавное появление) ---
function loadRegions(countryName) {
  const regionsLinks = {
    "Ukraine": "https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/ukraine-regions.geojson",
    "Poland": "https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/poland-regions.geojson",
    "Germany": "https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/germany-regions.geojson"
    // добавь другие страны по желанию
  };

  if (!regionsLinks[countryName]) return;

  fetch(regionsLinks[countryName])
    .then(res => res.json())
    .then(data => {
      L.geoJSON(data, {
        style: {
          color: "#FFFFFF",
          weight: 1,
          fillColor: "rgba(255,255,255,0.1)",
          fillOpacity: 0
        },
        onEachFeature: (feature, layer) => {
          layer.bindPopup(`<b>${feature.properties.name}</b>`);

          // плавная анимация появления
          layer.setStyle({ fillOpacity: 0 });
          setTimeout(() => layer.setStyle({ fillOpacity: 0.3 }), 300);
        }
      }).addTo(map);
    });
}

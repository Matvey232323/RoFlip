// Создаём карту (без подложки — чистый фон)
const map = L.map('map', {
  zoomControl: true,
  minZoom: 3,
  maxZoom: 8,
  zoomSnap: 0.5
}).setView([54.5, 15], 4);

// Цвета стран
function getRandomColor() {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 60%, 50%)`;
}

// Слой стран Европы
let countriesLayer;
let activeCountryLayer = null;

// Загружаем страны Европы
fetch('https://raw.githubusercontent.com/leakyMirror/map-of-europe/master/GeoJSON/europe.geojson')
  .then(res => res.json())
  .then(data => {
    countriesLayer = L.geoJSON(data, {
      style: feature => ({
        color: "#222",
        weight: 1,
        fillColor: getRandomColor(),
        fillOpacity: 0.8
      }),
      onEachFeature: (feature, layer) => {
        layer.bindPopup(`<b>${feature.properties.NAME}</b>`);
        layer.on('click', () => {
          if (activeCountryLayer && activeCountryLayer !== layer) {
            resetBorderEffect(activeCountryLayer);
          }
          activeCountryLayer = layer;
          addBorderEffect(layer);
          loadRegions(feature.properties.NAME);
        });
      }
    }).addTo(map);
  });

// --- Добавляем города (областные центры Украины) ---
const cities = [
  { name: "Киев", coords: [50.4501, 30.5234] },
  { name: "Харьков", coords: [49.9935, 36.2304] },
  { name: "Чернигов", coords: [51.4982, 31.2893] },
  { name: "Сумы", coords: [50.9077, 34.7981] },
  { name: "Львов", coords: [49.8397, 24.0297] },
  { name: "Одесса", coords: [46.4825, 30.7233] },
  { name: "Днепр", coords: [48.4647, 35.0462] },
  { name: "Запорожье", coords: [47.8388, 35.1396] },
  { name: "Полтава", coords: [49.5883, 34.5514] },
  { name: "Черкассы", coords: [49.4444, 32.0598] },
  { name: "Винница", coords: [49.2331, 28.4682] }
];

cities.forEach(city => {
  L.circleMarker(city.coords, {
    radius: 6,
    color: "#00FFFF",
    fillColor: "#00FFFF",
    fillOpacity: 0.8
  }).bindPopup(`<b>${city.name}</b><br>Областной центр`).addTo(map);
});

// --- Функции мигания границы ---
function addBorderEffect(layer) {
  const path = layer.getElement();
  if (!path) return;
  path.style.animation = "blinkBorder 1.5s infinite";
}

function resetBorderEffect(layer) {
  const path = layer.getElement();
  if (!path) return;
  path.style.animation = "none";
}

// --- Загружаем внутренние регионы (области) при приближении ---
function loadRegions(countryName) {
  // В качестве примера используем украинские области (можно добавить другие)
  const regions = {
    "Ukraine": "https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/ukraine-regions.geojson",
    "Poland": "https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/poland-regions.geojson",
    "Germany": "https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/germany-regions.geojson",
    "France": "https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/france-regions.geojson",
    "Italy": "https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/italy-regions.geojson"
  };

  if (!regions[countryName]) return;

  fetch(regions[countryName])
    .then(res => res.json())
    .then(data => {
      L.geoJSON(data, {
        style: {
          color: "#ffffff",
          weight: 1,
          fillColor: "rgba(255,255,255,0.1)",
          fillOpacity: 0.3
        },
        onEachFeature: (feature, layer) => {
          layer.bindPopup(`<b>${feature.properties.name}</b>`);
        }
      }).addTo(map);
    });
}

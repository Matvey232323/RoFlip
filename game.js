// Создаём карту Европы
const map = L.map('map', {
  zoomControl: false,
  minZoom: 3,
  maxZoom: 7
}).setView([54.5, 15], 4);

// Добавляем красивую подложку (не обычная OpenStreetMap)
L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenTopoMap & OSM contributors'
}).addTo(map);

// --- Список областных центров Украины ---
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

// --- Добавляем города на карту ---
cities.forEach(city => {
  L.circleMarker(city.coords, {
    radius: 6,
    color: "#00FFFF",
    fillColor: "#00FFFF",
    fillOpacity: 0.8
  })
  .bindPopup(`<b>${city.name}</b><br>Областной центр`)
  .addTo(map);
});

// --- Загружаем карту Европы (страны с разными цветами) ---
fetch('https://raw.githubusercontent.com/leakyMirror/map-of-europe/master/GeoJSON/europe.geojson')
  .then(res => res.json())
  .then(data => {
    L.geoJSON(data, {
      style: feature => ({
        color: "#222",
        weight: 1,
        fillColor: getRandomColor(),
        fillOpacity: 0.7
      }),
      onEachFeature: (feature, layer) => {
        layer.bindPopup(`<b>${feature.properties.NAME}</b>`);
      }
    }).addTo(map);
  });

// --- Функция случайного цвета для каждой страны ---
function getRandomColor() {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 70%, 50%)`;
}

// Создаём карту (чистый фон)
const map = L.map('map', {
  zoomControl: true,
  minZoom: 3,
  maxZoom: 6
}).setView([54.5, 15], 4);

// Фиксированные цвета стран
const countryColors = {
  "Ukraine": "#FFD700",   // жёлтый
  "Moldova": "#800080",   // фиолетовый
  "Poland": "#FF0000",    
  "Germany": "#0000FF",   
  "France": "#00FF00",    
  "Italy": "#FFA500",     
  "Romania": "#00CED1",   
  "Belarus": "#FF69B4",   
  "Hungary": "#A52A2A",   
  "Bulgaria": "#8A2BE2",  
  "Spain": "#DC143C",     
  "Portugal": "#FF8C00",
  "Slovakia": "#7FFF00",
  "Czech Republic": "#40E0D0",
  "Sweden": "#FF1493",
  "Norway": "#00FA9A",
  "Finland": "#1E90FF",
  "Estonia": "#FFDAB9",
  "Latvia": "#ADFF2F",
  "Lithuania": "#FF4500",
  "Denmark": "#9400D3",
  "Netherlands": "#00BFFF",
  "Belgium": "#FF6347",
  "Switzerland": "#8B0000",
  "Austria": "#00FF7F",
  "Greece": "#FF69B4",
  "Ireland": "#7CFC00",
  "United Kingdom": "#FF8C00",
  "Luxembourg": "#BA55D3"
};

// Переменная для активной страны
let activeCountryLayer = null;

// Загружаем GeoJSON Европы
fetch('https://raw.githubusercontent.com/leakyMirror/map-of-europe/master/GeoJSON/europe.geojson')
  .then(res => res.json())
  .then(data => {
    L.geoJSON(data, {
      style: feature => ({
        color: "#333",  // границы
        weight: 1.5,
        fillColor: countryColors[feature.properties.NAME] || "#CCCCCC",
        fillOpacity: 0.9
      }),
      onEachFeature: (feature, layer) => {
        layer.bindPopup(`<b>${feature.properties.NAME}</b>`);

        layer.on('click', () => {
          if (activeCountryLayer && activeCountryLayer !== layer) {
            resetBorderEffect(activeCountryLayer);
          }
          activeCountryLayer = layer;
          addBorderEffect(layer);
        });
      }
    }).addTo(map);
  });

// --- Граница мигает белым ---
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

// --- Сброс эффекта ---
function resetBorderEffect(layer) {
  const path = layer.getElement();
  if (!path) return;
  path.style.stroke = "#333";
}

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

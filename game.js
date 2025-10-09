// Базовые данные стран (для примера 5 стран)
const countries = [
    { name: "France", capital: "Paris", army: 50, economy: 100, path: "M500,600 L600,650 L550,750 Z" },
    { name: "Germany", capital: "Berlin", army: 60, economy: 120, path: "M650,400 L750,450 L700,550 Z" },
    { name: "Italy", capital: "Rome", army: 40, economy: 90, path: "M700,800 L780,850 L740,920 Z" },
    { name: "Spain", capital: "Madrid", army: 45, economy: 80, path: "M400,750 L500,800 L450,900 Z" },
    { name: "Poland", capital: "Warsaw", army: 55, economy: 110, path: "M800,350 L900,400 L850,500 Z" }
];

const svg = document.getElementById('europe-map');
const countryName = document.getElementById('country-name');
const countryInfo = document.getElementById('country-info');
const developBtn = document.getElementById('develop-btn');
const moveArmyBtn = document.getElementById('move-army-btn');

let selectedCountry = null;

// Создание стран на карте
countries.forEach(c => {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", c.path);
    path.setAttribute("fill", "#b0c4de");
    path.setAttribute("stroke", "#333");
    path.setAttribute("stroke-width", "2");
    path.style.transition = "fill 0.3s";
    svg.appendChild(path);

    path.addEventListener("mouseover", () => {
        path.setAttribute("fill", "#6b8e23");
    });
    path.addEventListener("mouseout", () => {
        if (selectedCountry !== c) path.setAttribute("fill", "#b0c4de");
    });
    path.addEventListener("click", () => {
        if (selectedCountry) {
            selectedCountry.pathElem.setAttribute("fill", "#b0c4de");
        }
        selectedCountry = c;
        c.pathElem = path;
        path.setAttribute("fill", "#ffa500");
        updateInfoPanel();
    });
});

// Обновление панели информации
function updateInfoPanel() {
    if (!selectedCountry) return;
    countryName.textContent = selectedCountry.name;
    countryInfo.textContent = `Столица: ${selectedCountry.capital}\nАрмия: ${selectedCountry.army}\nЭкономика: ${selectedCountry.economy}`;
    developBtn.disabled = false;
    moveArmyBtn.disabled = false;
}

// Кнопка развития экономики
developBtn.addEventListener("click", () => {
    if (!selectedCountry) return;
    selectedCountry.economy += 20;
    updateInfoPanel();
});

// Кнопка перемещения армии
moveArmyBtn.addEventListener("click", () => {
    if (!selectedCountry) return;
    selectedCountry.army += 10;
    updateInfoPanel();
});

// Кнопка следующего года
document.getElementById("next-turn-btn").addEventListener("click", () => {
    countries.forEach(c => c.economy += 10); // простое увеличение экономики
    if (selectedCountry) updateInfoPanel();
});

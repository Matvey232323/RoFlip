let gameState = {
    currentCountry: null,
    selectedCountry: null,
    countries: {},
    turn: 1,
    year: 2023,
    zoom: 1,
    offsetX: 0,
    offsetY: 0
};

document.addEventListener('DOMContentLoaded', () => {
    initializeGame();
    setupEventListeners();
    generateEuropeMap();
});

function initializeGame() {
    gameState.countries = {
        russia: {name:"Россия", color:"#8B4513", capital:{x:750,y:150,name:"Москва"}, cities:[{x:750,y:150,name:"Москва",isCapital:true}]},
        germany: {name:"Германия", color:"#696969", capital:{x:500,y:170,name:"Берлин"}, cities:[{x:500,y:170,name:"Берлин",isCapital:true}]},
        france: {name:"Франция", color:"#2F4F4F", capital:{x:470,y:180,name:"Париж"}, cities:[{x:470,y:180,name:"Париж",isCapital:true}]},
        uk: {name:"Великобритания", color:"#4682B4", capital:{x:440,y:130,name:"Лондон"}, cities:[{x:440,y:130,name:"Лондон",isCapital:true}]},
        italy: {name:"Италия", color:"#CD853F", capital:{x:480,y:210,name:"Рим"}, cities:[{x:480,y:210,name:"Рим",isCapital:true}]}
    };
}

function setupEventListeners() {
    document.getElementById('start-game-btn').onclick = () => {
        document.getElementById('country-selection').style.display = 'block';
    };
    document.getElementById('confirm-country').onclick = () => {
        gameState.currentCountry = document.getElementById('country-select').value;
        document.getElementById('game-menu').style.display = 'none';
        selectCountry(gameState.currentCountry);
    };
}

function generateEuropeMap() {
    const svg = document.getElementById('world-map');

    // Генерация стран
    for (let id in gameState.countries) {
        const c = gameState.countries[id];
        const path = document.createElementNS("http://www.w3.org/2000/svg","path");
        path.setAttribute("class","country");
        path.setAttribute("id",id);
        path.setAttribute("fill",c.color);
        path.setAttribute("d", generateEuropeShape(id));
        path.onclick = () => selectCountry(id);
        svg.appendChild(path);

        // Города
        c.cities.forEach(city=>{
            const circle = document.createElementNS("http://www.w3.org/2000/svg","circle");
            circle.setAttribute("class",city.isCapital?"city city-capital":"city");
            circle.setAttribute("cx",city.x);
            circle.setAttribute("cy",city.y);
            circle.setAttribute("r",city.isCapital?4:3);
            svg.appendChild(circle);
        });
    }
}

function generateEuropeShape(id) {
    const shapes = {
        russia: "M700,100 L780,110 L800,180 L750,200 L720,180 L690,160 L680,120 Z",
        germany: "M480,150 L520,160 L510,190 L490,200 L470,190 L460,160 Z",
        france: "M450,160 L490,170 L480,200 L460,210 L440,200 L430,170 Z",
        uk: "M420,120 L440,130 L430,150 L410,140 Z",
        italy: "M470,200 L490,210 L480,230 L460,220 Z"
    };
    return shapes[id] || "M0,0 L50,0 L50,50 L0,50 Z";
}

function selectCountry(id) {
    gameState.selectedCountry = id;
    document.querySelectorAll(".country").forEach(c=>c.classList.remove("selected"));
    document.getElementById(id).classList.add("selected");
}

// Локализация
const translations = {
    uk: {
        "play": "Грати",
        "settings": "Налаштування",
        "instructions": "Навчання",
        "help": "Довідка",
        "language": "Мова",
        "exit": "Вийти з гри",
        "volume": "Гучність:",
        "difficulty": "Складність:",
        "easy": "Легкий",
        "medium": "Середній",
        "hard": "Складний",
        "fullscreen": "Повноекранний режим",
        "effects": "Спецефекти",
        "apply": "Застосувати",
        "close": "Закрити",
        "goal": "Мета гри: збивати ворожі дрони-камікадзе для захисту міст",
        "controls": "Керування:",
        "controls-arrows": "← →: Наведення системи ППО",
        "controls-space": "Пробіл: Запуск ракети",
        "controls-r": "R: Перезарядка",
        "goal-protect": "Мета: захистити місто від ворожих дронів",
        "goal-radar": "Уважно стежте за радаром і не допускайте прориву дронів",
        "help-desc": "Гра 'ППО: Збивання шахадів' - це симулятор протиповітряної оборони, де ви захищаєте міста від ворожих дронів.",
        "version": "Версія: 1.0 'Щит Вітчизни'",
        "features": "Особливості:",
        "feature1": "- Реалістична фізика польоту ракет",
        "feature2": "- Різні типи ворожих цілей",
        "feature3": "- Система покращення ППО",
        "feature4": "- Різні локації для захисту",
        "exit-confirm": "Ви впевнені, що хочете вийти з гри?",
        "yes": "Так",
        "no": "Ні",
        "choose-side": "Вибір сторони",
        "choose-side-desc": "Виберіть сторону, за яку будете грати:",
        "russia": "Росія",
        "ukraine": "Україна",
        "choose-difficulty": "Вибір складності",
        "choose-difficulty-desc": "Виберіть рівень складності:",
        "loading": "Завантаження",
        "loading-desc": "Йде підготовка до місії...",
        "back": "Назад",
        "choose-language": "Вибір мови",
        "choose-language-desc": "Виберіть бажану мову:",
        "ukrainian": "Українська",
        "russian": "Русский",
        "english": "English",
        "target-info": "Ціль: ",
        "health": "Здоров'я: ",
        "fuel": "Паливо: ",
        "range": "Дальність: ",
        "buy-fuel": "Купити паливо (100)",
        "upgrade-shahed": "Покращити шахед (500)",
        "upgrade-missile": "Покращити ракету (800)",
        "pvo-system": "Система ППО",
        "factory": "Завод",
        "military": "Військова ціль",
        "money": "Гроші:",
        "shaheds": "Шахеди:",
        "missiles": "Ракети:",
        "launch-shahed": "Запустити шахед (1)",
        "launch-missile": "Запустити ракету (2)",
        "add-waypoint": "Додати точку маршруту (50)",
        "clear-waypoints": "Очистити маршрут",
        "pvo-level": "Рівень ППО:",
        "jet-shahed": "Реактивний шахед (1500)",
        "upgrade-fuel": "Покращити паливо (300)"
    },
    ru: {
        "play": "Играть",
        "settings": "Настройки",
        "instructions": "Обучение",
        "help": "Справка",
        "language": "Язык",
        "exit": "Покинуть игру",
        "volume": "Громкость:",
        "difficulty": "Сложность:",
        "easy": "Легкий",
        "medium": "Средний",
        "hard": "Сложный",
        "fullscreen": "Полноэкранный режим",
        "effects": "Спецэффекты",
        "apply": "Применить",
        "close": "Закрыть",
        "goal": "Цель игры: сбивать вражеские дроны-камикадзе для защиты городов",
        "controls": "Управление:",
        "controls-arrows": "← →: Наведение системы ПВО",
        "controls-space": "Пробел: Запуск ракеты",
        "controls-r": "R: Перезарядка",
        "goal-protect": "Цель: защитить город от вражеских дронов",
        "goal-radar": "Внимательно следите за радаром и не допускайте прорыва дронов",
        "help-desc": "Игра 'ПВО: Сбивание шахедов' - это симулятор противовоздушной обороны, где вы защищаете города от вражеских дронов.",
        "version": "Версия: 1.0 'Щит Отечества'",
        "features": "Особенности:",
        "feature1": "- Реалистичная физика полета ракет",
        "feature2": "- Разные типы вражеских целей",
        "feature3": "- Система улучшения ПВО",
        "feature4": "- Разные локации для защиты",
        "exit-confirm": "Вы уверены, что хотите покинуть игру?",
        "yes": "Да",
        "no": "Нет",
        "choose-side": "Выбор стороны",
        "choose-side-desc": "Выберите сторону, за которую будете играть:",
        "russia": "Россия",
        "ukraine": "Украина",
        "choose-difficulty": "Выбор сложности",
        "choose-difficulty-desc": "Выберите уровень сложности:",
        "loading": "Загрузка",
        "loading-desc": "Идет подготовка к миссии...",
        "back": "Назад",
        "choose-language": "Выбор языка",
        "choose-language-desc": "Выберите предпочитаемый язык:",
        "ukrainian": "Українська",
        "russian": "Русский",
        "english": "English",
        "target-info": "Цель: ",
        "health": "Здоровье: ",
        "fuel": "Топливо: ",
        "range": "Дальность: ",
        "buy-fuel": "Купить топливо (100)",
        "upgrade-shahed": "Улучшить шахед (500)",
        "upgrade-missile": "Улучшить ракету (800)",
        "pvo-system": "Система ПВО",
        "factory": "Завод",
        "military": "Военная цель",
        "money": "Деньги:",
        "shaheds": "Шахеды:",
        "missiles": "Ракеты:",
        "launch-shahed": "Запустить шахед (1)",
        "launch-missile": "Запустить ракету (2)",
        "add-waypoint": "Добавить точку маршрута (50)",
        "clear-waypoints": "Очистить маршрут",
        "pvo-level": "Уровень ПВО:",
        "jet-shahed": "Реактивный шахед (1500)",
        "upgrade-fuel": "Улучшить топливо (300)"
    },
    en: {
        "play": "Play",
        "settings": "Settings",
        "instructions": "Tutorial",
        "help": "Help",
        "language": "Language",
        "exit": "Exit Game",
        "volume": "Volume:",
        "difficulty": "Difficulty:",
        "easy": "Easy",
        "medium": "Medium",
        "hard": "Hard",
        "fullscreen": "Fullscreen Mode",
        "effects": "Effects",
        "apply": "Apply",
        "close": "Close",
        "goal": "Game goal: shoot down enemy kamikaze drones to protect cities",
        "controls": "Controls:",
        "controls-arrows": "← →: Aiming the air defense system",
        "controls-space": "Space: Launch missile",
        "controls-r": "R: Reload",
        "goal-protect": "Goal: protect the city from enemy drones",
        "goal-radar": "Watch the radar carefully and don't let drones break through",
        "help-desc": "Game 'Air Defense: Shooting Down Shaheds' is an air defense simulator where you protect cities from enemy drones.",
        "version": "Version: 1.0 'Shield of the Fatherland'",
        "features": "Features:",
        "feature1": "- Realistic missile flight physics",
        "feature2": "- Different types of enemy targets",
        "feature3": "- Air defense upgrade system",
        "feature4": "- Different locations to protect",
        "exit-confirm": "Are you sure you want to exit the game?",
        "yes": "Yes",
        "no": "No",
        "choose-side": "Choose side",
        "choose-side-desc": "Choose the side you will play for:",
        "russia": "Russia",
        "ukraine": "Ukraine",
        "choose-difficulty": "Choose difficulty",
        "choose-difficulty-desc": "Select difficulty level:",
        "loading": "Loading",
        "loading-desc": "Mission preparation in progress...",
        "back": "Back",
        "choose-language": "Language selection",
        "choose-language-desc": "Select preferred language:",
        "ukrainian": "Ukrainian",
        "russian": "Russian",
        "english": "English",
        "target-info": "Target: ",
        "health": "Health: ",
        "fuel": "Fuel: ",
        "range": "Range: ",
        "buy-fuel": "Buy fuel (100)",
        "upgrade-shahed": "Upgrade shahed (500)",
        "upgrade-missile": "Upgrade missile (800)",
        "pvo-system": "Air Defense System",
        "factory": "Factory",
        "military": "Military Target",
        "money": "Money:",
        "shaheds": "Shaheds:",
        "missiles": "Missiles:",
        "launch-shahed": "Launch shahed (1)",
        "launch-missile": "Launch missile (2)",
        "add-waypoint": "Add waypoint (50)",
        "clear-waypoints": "Clear route",
        "pvo-level": "Air Defense Level:",
        "jet-shahed": "Jet Shahed (1500)",
        "upgrade-fuel": "Upgrade fuel (300)"
    }
};

let currentLanguage = 'ru';

function setLanguage(lang) {
    currentLanguage = lang;
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    localStorage.setItem('gameLanguage', lang);
}

// Игровые переменные
let canvas, ctx;
let playerSide = 'russia';
let difficulty = 'medium';
let money = 1000;
let shaheds = 5;
let missiles = 3;
let fuel = 100;
let gameObjects = [];
let factories = [];
let militaryTargets = [];
let pvoSystems = [];
let selectedTarget = null;
let gameInterval;
let waypoints = [];
let pvoLevel = 1;
let pvoSpawnChance = 0.3;
let gameTime = 0;
let gameActive = false;
let explosions = [];
let gamePaused = false;
let targetInfoWindow = null;
let shahedLevel = 1;
let missileLevel = 1;
let isAddingWaypoint = false;
let fuelLevel = 1;
let jetShaheds = 0;

class Explosion {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.life = 1.0;
        this.maxLife = 1.0;
    }
    
    update() {
        this.life -= 0.05;
        return this.life > 0;
    }
    
    draw() {
        const alpha = this.life / this.maxLife;
        const radius = this.size * (1 - alpha) * 2;
        
        ctx.globalAlpha = alpha;
        ctx.fillStyle = 'orange';
        ctx.beginPath();
        ctx.arc(this.x, this.y, radius, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(this.x, this.y, radius * 0.6, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.globalAlpha = 1.0;
    }
}

class GameObject {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
        this.speed = 0;
        this.direction = 0;
        this.health = 100;
        this.target = null;
        this.id = Math.random().toString(36).substr(2, 9);
        this.waypointIndex = 0;
        this.evasionChance = 0;
        this.fuel = 100;
        this.maxFuel = 100;
        this.isJet = false;
        
        switch(type) {
            case 'shahed':
                this.speed = 2 + (shahedLevel * 0.5);
                this.evasionChance = 0.1 + (shahedLevel * 0.05);
                this.health = 50;
                this.fuel = 100 * fuelLevel;
                this.maxFuel = 100 * fuelLevel;
                break;
            case 'jet-shahed':
                this.speed = 4 + (shahedLevel * 0.8);
                this.evasionChance = 0.2 + (shahedLevel * 0.08);
                this.health = 70;
                this.fuel = 150 * fuelLevel;
                this.maxFuel = 150 * fuelLevel;
                this.isJet = true;
                break;
            case 'missile':
                this.speed = 4 + (missileLevel * 0.8);
                this.evasionChance = 0.3 + (missileLevel * 0.1);
                this.health = 30;
                this.fuel = 150 * fuelLevel;
                this.maxFuel = 150 * fuelLevel;
                break;
            case 'pvo':
                this.speed = 0;
                this.health = 100;
                this.range = 100 + (pvoLevel * 20);
                this.cooldown = 0;
                this.fireRate = 30 - (pvoLevel * 2);
                break;
            case 'factory':
                this.health = 200;
                break;
            case 'military':
                this.health = 300;
                break;
        }
    }

    update() {
        if (this.type === 'pvo' && this.cooldown > 0) {
            this.cooldown--;
        }
        
        if (this.type === 'pvo' && this.cooldown === 0) {
            for (const obj of gameObjects) {
                if ((obj.type === 'shahed' || obj.type === 'missile' || obj.type === 'jet-shahed') && obj.target) {
                    const dx = obj.x - this.x;
                    const dy = obj.y - this.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < this.range) {
                        const hitChance = 0.7 - (obj.evasionChance * 0.5);
                        if (Math.random() < hitChance) {
                            explosions.push(new Explosion(obj.x, obj.y, 10));
                            gameObjects = gameObjects.filter(o => o.id !== obj.id);
                            this.cooldown = this.fireRate;
                            break;
                        }
                    }
                }
            }
        }
        
        if ((this.type === 'shahed' || this.type === 'missile' || this.type === 'jet-shahed') && this.fuel > 0) {
            this.fuel -= 0.1;
            if (this.fuel <= 0) {
                explosions.push(new Explosion(this.x, this.y, 5));
                return false;
            }
        }
        
        if (waypoints.length > 0 && (this.type === 'shahed' || this.type === 'missile' || this.type === 'jet-shahed')) {
            if (this.waypointIndex < waypoints.length) {
                this.target = waypoints[this.waypointIndex];
                
                const dx = this.target.x - this.x;
                const dy = this.target.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 5) {
                    this.waypointIndex++;
                } else {
                    this.direction = Math.atan2(dy, dx);
                    this.x += Math.cos(this.direction) * this.speed;
                    this.y += Math.sin(this.direction) * this.speed;
                }
            } else if (this.target) {
                const dx = this.target.x - this.x;
                const dy = this.target.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance > 5) {
                    this.direction = Math.atan2(dy, dx);
                    this.x += Math.cos(this.direction) * this.speed;
                    this.y += Math.sin(this.direction) * this.speed;
                } else {
                    explosions.push(new Explosion(this.x, this.y, 20));
                    let damage = this.type === 'shahed' ? 50 : 100;
                    if (this.type === 'jet-shahed') damage = 80;
                    this.target.health -= damage;
                    
                    if (this.target.health <= 0) {
                        let reward = 0;
                        if (this.target.type === 'factory') reward = 500;
                        else if (this.target.type === 'military') reward = 800;
                        
                        money += reward;
                        gameObjects = gameObjects.filter(obj => obj.id !== this.target.id);
                        
                        if (this.target.type === 'factory') {
                            factories = factories.filter(f => f.id !== this.target.id);
                        } else {
                            militaryTargets = militaryTargets.filter(m => m.id !== this.target.id);
                        }
                    }
                    return false;
                }
            }
        } else if (this.target) {
            const dx = this.target.x - this.x;
            const dy = this.target.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance > 5) {
                this.direction = Math.atan2(dy, dx);
                this.x += Math.cos(this.direction) * this.speed;
                this.y += Math.sin(this.direction) * this.speed;
            } else if (this.type === 'shahed' || this.type === 'missile' || this.type === 'jet-shahed') {
                explosions.push(new Explosion(this.x, this.y, 20));
                let damage = this.type === 'shahed' ? 50 : 100;
                if (this.type === 'jet-shahed') damage = 80;
                this.target.health -= damage;
                
                if (this.target.health <= 0) {
                    let reward = 0;
                    if (this.target.type === 'factory') reward = 500;
                    else if (this.target.type === 'military') reward = 800;
                    
                    money += reward;
                    gameObjects = gameObjects.filter(obj => obj.id !== this.target.id);
                    
                    if (this.target.type === 'factory') {
                        factories = factories.filter(f => f.id !== this.target.id);
                    } else {
                        militaryTargets = militaryTargets.filter(m => m.id !== this.target.id);
                    }
                }
                return false;
            }
        }
        return true;
    }

    draw() {
        ctx.fillStyle = this.getColor();
        
        if (this.type === 'pvo') {
            ctx.strokeStyle = 'rgba(0, 0, 255, 0.2)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.range, 0, Math.PI * 2);
            ctx.stroke();
        }
        
        ctx.beginPath();
        
        if (this.type === 'shahed') {
            ctx.moveTo(this.x, this.y - 6);
            ctx.lineTo(this.x - 4, this.y + 4);
            ctx.lineTo(this.x + 4, this.y + 4);
        } else if (this.type === 'jet-shahed') {
            ctx.moveTo(this.x, this.y - 8);
            ctx.lineTo(this.x - 6, this.y + 4);
            ctx.lineTo(this.x + 6, this.y + 4);
            ctx.moveTo(this.x - 4, this.y - 2);
            ctx.lineTo(this.x - 8, this.y - 6);
            ctx.moveTo(this.x + 4, this.y - 2);
            ctx.lineTo(this.x + 8, this.y - 6);
        } else if (this.type === 'missile') {
            ctx.moveTo(this.x, this.y - 8);
            ctx.lineTo(this.x - 3, this.y + 6);
            ctx.lineTo(this.x + 3, this.y + 6);
        } else if (this.type === 'factory') {
            ctx.rect(this.x - 8, this.y - 8, 16, 16);
        } else if (this.type === 'military') {
            ctx.moveTo(this.x, this.y - 8);
            for (let i = 1; i <= 6; i++) {
                const angle = (i * 2 * Math.PI / 6) - (Math.PI / 2);
                ctx.lineTo(this.x + 8 * Math.cos(angle), this.y + 8 * Math.sin(angle));
            }
        } else if (this.type === 'pvo') {
            ctx.arc(this.x, this.y, 6, 0, Math.PI * 2);
        }
        
        ctx.closePath();
        ctx.fill();
        
        if (this.type === 'factory' || this.type === 'military') {
            ctx.fillStyle = 'white';
            ctx.font = '10px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(Math.round(this.health), this.x, this.y - 12);
        }
        
        if (this.type === 'shahed' || this.type === 'missile' || this.type === 'jet-shahed') {
            const fuelPercentage = this.fuel / this.maxFuel;
            ctx.fillStyle = 'green';
            ctx.fillRect(this.x - 10, this.y + 10, 20 * fuelPercentage, 3);
            ctx.strokeStyle = 'white';
            ctx.strokeRect(this.x - 10, this.y + 10, 20, 3);
            
            if (this.isJet) {
                ctx.fillStyle = 'orange';
                ctx.beginPath();
                ctx.moveTo(this.x - 3, this.y + 6);
                ctx.lineTo(this.x - 6, this.y + 12);
                ctx.lineTo(this.x, this.y + 6);
                ctx.fill();
                
                ctx.beginPath();
                ctx.moveTo(this.x + 3, this.y + 6);
                ctx.lineTo(this.x + 6, this.y + 12);
                ctx.lineTo(this.x, this.y + 6);
                ctx.fill();
            }
        }
    }

    getColor() {
        switch (this.type) {
            case 'shahed': return 'gray';
            case 'jet-shahed': return 'darkgray';
            case 'missile': return 'red';
            case 'pvo': return 'blue';
            case 'factory': return 'green';
            case 'military': return 'orange';
            default: return 'white';
        }
    }
}

function initGame() {
    canvas = document.getElementById('game-canvas');
    ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    createTargets();
    createPVOSystems();
    
    document.getElementById('game-ui').style.display = 'block';
    document.getElementById('route-info').style.display = 'block';
    document.getElementById('pause-btn').style.display = 'flex';
    document.getElementById('main-menu').style.display = 'none';
    document.getElementById('game-canvas').style.display = 'block';
    
    gameActive = true;
    gameInterval = setInterval(gameLoop, 1000 / 60);
    
    setInterval(spawnPVO, 10000);
    
    setInterval(() => {
        if (!gamePaused) gameTime++;
    }, 1000);
    
    updateUI();
}

function createTargets() {
    const factoryCount = 3 + Math.floor(Math.random() * 3);
    for (let i = 0; i < factoryCount; i++) {
        const factory = new GameObject(
            Math.random() * canvas.width * 0.8 + canvas.width * 0.1,
            Math.random() * canvas.height * 0.8 + canvas.height * 0.1,
            'factory'
        );
        factories.push(factory);
        gameObjects.push(factory);
    }
    
    const militaryCount = 2 + Math.floor(Math.random() * 3);
    for (let i = 0; i < militaryCount; i++) {
        const military = new GameObject(
            Math.random() * canvas.width * 0.8 + canvas.width * 0.1,
            Math.random() * canvas.height * 0.8 + canvas.height * 0.1,
            'military'
        );
        militaryTargets.push(military);
        gameObjects.push(military);
    }
}

function createPVOSystems() {
    const pvoCount = 2 + Math.floor(Math.random() * 3);
    for (let i = 0; i < pvoCount; i++) {
        const pvo = new GameObject(
            Math.random() * canvas.width * 0.8 + canvas.width * 0.1,
            Math.random() * canvas.height * 0.8 + canvas.height * 0.1,
            'pvo'
        );
        pvo.speed = 0;
        pvoSystems.push(pvo);
        gameObjects.push(pvo);
    }
}

function spawnPVO() {
    if (!gameActive || gamePaused) return;
    
    if (Math.random() < pvoSpawnChance) {
        const pvo = new GameObject(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            'pvo'
        );
        pvo.speed = 0;
        pvoSystems.push(pvo);
        gameObjects.push(pvo);
        
        if (gameTime % 60 === 0) {
            pvoLevel++;
            pvoSpawnChance += 0.05;
            document.getElementById('pvo-level').textContent = pvoLevel;
        }
    }
}

function spawnShahed() {
    if (shaheds > 0 && fuel >= 20 && (selectedTarget || waypoints.length > 0)) {
        const shahed = new GameObject(50, canvas.height / 2, 'shahed');
        
        if (waypoints.length > 0) {
            shahed.target = waypoints[0];
        } else {
            shahed.target = selectedTarget;
        }
        
        gameObjects.push(shahed);
        shaheds--;
        fuel -= 20;
        
        document.getElementById('launch-sound').play();
        updateUI();
    }
}

function spawnJetShahed() {
    if (jetShaheds > 0 && fuel >= 40 && (selectedTarget || waypoints.length > 0)) {
        const jetShahed = new GameObject(50, canvas.height / 2, 'jet-shahed');
        
        if (waypoints.length > 0) {
            jetShahed.target = waypoints[0];
        } else {
            jetShahed.target = selectedTarget;
        }
        
        gameObjects.push(jetShahed);
        jetShaheds--;
        fuel -= 40;
        
        document.getElementById('launch-sound').play();
        updateUI();
    }
}

function spawnMissile() {
    if (missiles > 0 && fuel >= 30 && (selectedTarget || waypoints.length > 0)) {
        const missile = new GameObject(50, canvas.height / 2, 'missile');
        
        if (waypoints.length > 0) {
            missile.target = waypoints[0];
        } else {
            missile.target = selectedTarget;
        }
        
        gameObjects.push(missile);
        missiles--;
        fuel -= 30;
        
        document.getElementById('launch-sound').play();
        updateUI();
    }
}

function addWaypoint(x, y) {
    if (money >= 50) {
        money -= 50;
        const waypoint = {x: x, y: y};
        waypoints.push(waypoint);
        updateUI();
        updateRouteInfo();
    }
}

function clearWaypoints() {
    waypoints = [];
    updateRouteInfo();
}

function updateRouteInfo() {
    document.getElementById('waypoint-count').textContent = waypoints.length;
    
    let length = 0;
    for (let i = 1; i < waypoints.length; i++) {
        const dx = waypoints[i].x - waypoints[i-1].x;
        const dy = waypoints[i].y - waypoints[i-1].y;
        length += Math.sqrt(dx * dx + dy * dy);
    }
    document.getElementById('route-length').textContent = Math.round(length);
}

function buyShahed() {
    if (money >= 200) {
        money -= 200;
        shaheds++;
        updateUI();
    }
}

function buyJetShahed() {
    if (money >= 1500) {
        money -= 1500;
        jetShaheds++;
        updateUI();
    }
}

function buyMissile() {
    if (money >= 300) {
        money -= 300;
        missiles++;
        updateUI();
    }
}

function buyFuel() {
    if (money >= 100) {
        money -= 100;
        fuel += 50;
        if (fuel > 100 * fuelLevel) fuel = 100 * fuelLevel;
        updateUI();
    }
}

function upgradeShahed() {
    if (money >= 500) {
        money -= 500;
        shahedLevel++;
        updateUI();
    }
}

function upgradeMissile() {
    if (money >= 800) {
        money -= 800;
        missileLevel++;
        updateUI();
    }
}

function upgradeFuel() {
    if (money >= 300) {
        money -= 300;
        fuelLevel += 0.5;
        fuel = 100 * fuelLevel;
        updateUI();
    }
}

function showTargetInfo(obj) {
    if (targetInfoWindow) {
        targetInfoWindow.remove();
    }
    
    targetInfoWindow = document.createElement('div');
    targetInfoWindow.className = 'target-info-window';
    targetInfoWindow.style.position = 'absolute';
    targetInfoWindow.style.left = (obj.x + 20) + 'px';
    targetInfoWindow.style.top = (obj.y - 50) + 'px';
    targetInfoWindow.style.background = 'rgba(0, 0, 0, 0.8)';
    targetInfoWindow.style.color = 'white';
    targetInfoWindow.style.padding = '10px';
    targetInfoWindow.style.borderRadius = '5px';
    targetInfoWindow.style.zIndex = '10';
    targetInfoWindow.style.border = '2px solid #5d4c3a';
    
    let infoText = translations[currentLanguage]['target-info'];
    if (obj.type === 'factory') {
        infoText += translations[currentLanguage]['factory'];
    } else if (obj.type === 'military') {
        infoText += translations[currentLanguage]['military'];
    } else if (obj.type === 'pvo') {
        infoText += translations[currentLanguage]['pvo-system'];
    }
    
    infoText += '<br>' + translations[currentLanguage]['health'] + Math.round(obj.health);
    
    if (obj.type === 'pvo') {
        infoText += '<br>' + translations[currentLanguage]['range'] + Math.round(obj.range);
    }
    
    if (obj.type === 'shahed' || obj.type === 'jet-shahed' || obj.type === 'missile') {
        infoText += '<br>' + translations[currentLanguage]['fuel'] + Math.round(obj.fuel);
    }
    
    targetInfoWindow.innerHTML = infoText;
    document.getElementById('game-container').appendChild(targetInfoWindow);
    
    setTimeout(() => {
        if (targetInfoWindow) {
            targetInfoWindow.remove();
            targetInfoWindow = null;
        }
    }, 3000);
}

function updateUI() {
    document.getElementById('money').textContent = money;
    document.getElementById('shaheds').textContent = shaheds;
    document.getElementById('missiles').textContent = missiles;
    document.getElementById('fuel').textContent = Math.round(fuel);
    document.getElementById('shahed-level').textContent = shahedLevel;
    document.getElementById('missile-level').textContent = missileLevel;
    document.getElementById('pvo-level').textContent = pvoLevel;
    
    document.getElementById('buy-shahed').disabled = money < 200;
    document.getElementById('buy-missile').disabled = money < 300;
    document.getElementById('add-waypoint').disabled = money < 50;
    document.getElementById('buy-fuel').disabled = money < 100;
    document.getElementById('upgrade-shahed').disabled = money < 500;
    document.getElementById('upgrade-missile').disabled = money < 800;
    document.getElementById('launch-shahed').disabled = shaheds <= 0 || fuel < 20;
    document.getElementById('launch-missile').disabled = missiles <= 0 || fuel < 30;
    document.getElementById('jet-shahed').disabled = jetShaheds <= 0 || fuel < 40;
    document.getElementById('upgrade-fuel').disabled = money < 300;
}

function togglePause() {
    gamePaused = !gamePaused;
    document.getElementById('pause-btn').textContent = gamePaused ? '▶️' : '⏸️';
}

function gameLoop() {
    if (gamePaused) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Рисуем фон
    ctx.fillStyle = '#1c3b6f';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Рисуем землю
    ctx.fillStyle = '#2d5a2d';
    ctx.fillRect(0, canvas.height - 50, canvas.width, 50);
    
    // Рисуем маршрут
    for (let i = 0; i < waypoints.length; i++) {
        ctx.fillStyle = 'rgba(255, 255, 0, 0.5)';
        ctx.beginPath();
        ctx.arc(waypoints[i].x, waypoints[i].y, 5, 0, Math.PI * 2);
        ctx.fill();
        
        if (i > 0) {
            ctx.strokeStyle = 'rgba(255, 255, 0, 0.3)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(waypoints[i-1].x, waypoints[i-1].y);
            ctx.lineTo(waypoints[i].x, waypoints[i].y);
            ctx.stroke();
        }
    }
    
    // Обновляем и рисуем игровые объекты
    gameObjects = gameObjects.filter(obj => {
        if (obj.update() === false) return false;
        
        if ((obj.type === 'shahed' || obj.type === 'missile' || obj.type === 'jet-shahed') && obj.target) {
            for (const pvo of pvoSystems) {
                const dx = obj.x - pvo.x;
                const dy = obj.y - pvo.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < pvo.range && Math.random() < 0.05) {
                    explosions.push(new Explosion(obj.x, obj.y, 10));
                    document.getElementById('explosion-sound').play();
                    return false;
                }
            }
        }
        
        obj.draw();
        return true;
    });
    
    // Обновляем и рисуем взрывы
    explosions = explosions.filter(explosion => {
        if (explosion.update() === false) return false;
        explosion.draw();
        return true;
    });
    
    // Подсвечиваем выбранную цель
    if (selectedTarget) {
        ctx.strokeStyle = 'yellow';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(selectedTarget.x, selectedTarget.y, 10, 0, Math.PI * 2);
        ctx.stroke();
    }
    
    // Проверяем условия победы/поражения
    if (factories.length === 0 && militaryTargets.length === 0) {
        alert('Победа! Все цели уничтожены!');
        resetGame();
    }
}

function resetGame() {
    clearInterval(gameInterval);
    gameActive = false;
    gameObjects = [];
    factories = [];
    militaryTargets = [];
    pvoSystems = [];
    waypoints = [];
    explosions = [];
    money = 1000;
    shaheds = 5;
    missiles = 3;
    jetShaheds = 0;
    fuel = 100;
    pvoLevel = 1;
    pvoSpawnChance = 0.3;
    gameTime = 0;
    shahedLevel = 1;
    missileLevel = 1;
    fuelLevel = 1;
    
    if (targetInfoWindow) {
        targetInfoWindow.remove();
        targetInfoWindow = null;
    }
    
    document.getElementById('game-canvas').style.display = 'none';
    document.getElementById('game-ui').style.display = 'none';
    document.getElementById('route-info').style.display = 'none';
    document.getElementById('pause-btn').style.display = 'none';
    document.getElementById('main-menu').style.display = 'block';
}

// Функции для показа/скрытия окон
function showWindow(windowId) {
    document.querySelectorAll('.gui-window').forEach(w => {
        w.classList.remove('active');
    });
    document.getElementById(windowId).classList.add('active');
}

function hideAllWindows() {
    document.querySelectorAll('.gui-window').forEach(w => {
        w.classList.remove('active');
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('gameLanguage');
    if (savedLanguage) setLanguage(savedLanguage);
    
    // Основные кнопки меню
    document.getElementById('play-btn').addEventListener('click', function() {
        showWindow('side-window');
    });
    
    document.getElementById('settings-btn').addEventListener('click', function() {
        showWindow('settings-window');
    });
    
    document.getElementById('instructions-btn').addEventListener('click', function() {
        showWindow('instructions-window');
    });
    
    document.getElementById('help-btn').addEventListener('click', function() {
        showWindow('help-window');
    });
    
    document.getElementById('exit-btn').addEventListener('click', function() {
        showWindow('exit-window');
    });
    
    // Кнопки закрытия окон
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.id !== 'confirm-exit') {
                hideAllWindows();
            }
        });
    });
    
    // Игровые кнопки
    document.getElementById('buy-shahed').addEventListener('click', buyShahed);
    document.getElementById('buy-missile').addEventListener('click', buyMissile);
    document.getElementById('buy-fuel').addEventListener('click', buyFuel);
    document.getElementById('upgrade-shahed').addEventListener('click', upgradeShahed);
    document.getElementById('upgrade-missile').addEventListener('click', upgradeMissile);
    document.getElementById('upgrade-fuel').addEventListener('click', upgradeFuel);
    document.getElementById('launch-shahed').addEventListener('click', spawnShahed);
    document.getElementById('launch-missile').addEventListener('click', spawnMissile);
    document.getElementById('jet-shahed').addEventListener('click', spawnJetShahed);
    
    document.getElementById('add-waypoint').addEventListener('click', function() {
        if (money >= 50) {
            isAddingWaypoint = true;
            alert(translations[currentLanguage]['add-waypoint']);
        } else {
            alert('Недостаточно денег для добавления точки маршрута!');
        }
    });
    
    document.getElementById('clear-waypoints').addEventListener('click', clearWaypoints);
    document.getElementById('pause-btn').addEventListener('click', togglePause);
    
    // Выбор стороны
    document.querySelectorAll('.side-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            playerSide = this.getAttribute('data-side');
            hideAllWindows();
            showWindow('difficulty-window');
        });
    });
    
    // Выбор сложности
    document.querySelectorAll('.difficulty-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            difficulty = this.getAttribute('data-difficulty');
            hideAllWindows();
            showWindow('loading-window');
            
            // Запускаем анимацию загрузки
            const progressBar = document.querySelector('.loading-progress');
            progressBar.style.width = '0%';
            setTimeout(() => {
                progressBar.style.width = '100%';
            }, 10);
            
            setTimeout(() => {
                hideAllWindows();
                document.getElementById('game-canvas').style.display = 'block';
                initGame();
            }, 4000);
        });
    });
    
    // Выбор языка
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
            hideAllWindows();
        });
    });
    
    // Кнопка языка в настройках
    document.getElementById('language-settings-btn').addEventListener('click', function() {
        showWindow('language-window');
    });
    
    // Клики по canvas
    canvas.addEventListener('click', function(event) {
        if (!gameActive) return;
        
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        
        if (isAddingWaypoint) {
            addWaypoint(x, y);
            isAddingWaypoint = false;
            return;
        }
        
        for (const obj of gameObjects) {
            const dx = obj.x - x;
            const dy = obj.y - y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 15) {
                selectedTarget = obj;
                showTargetInfo(obj);
                break;
            }
        }
    });
    
    // Горячие клавиши
    document.addEventListener('keydown', function(event) {
        if (!gameActive || gamePaused) return;
        
        if (event.key === '1') spawnShahed();
        else if (event.key === '2') spawnMissile();
        else if (event.key === '3') spawnJetShahed();
        else if (event.key === 'p' || event.key === 'P') togglePause();
    });
    
    // Громкость
    document.getElementById('volume').addEventListener('input', function() {
        const volume = this.value / 100;
        document.getElementById('music').volume = volume;
        document.getElementById('launch-sound').volume = volume;
        document.getElementById('explosion-sound').volume = volume;
    });
    
    // Подтверждение выхода
    document.getElementById('confirm-exit').addEventListener('click', function() {
        if (confirm(translations[currentLanguage]['exit-confirm'])) {
            window.close();
        }
    });
    
    // Кнопка назад
    document.querySelectorAll('.close-btn[data-i18n="back"]').forEach(btn => {
        btn.addEventListener('click', function() {
            hideAllWindows();
        });
    });
    
    // Музыка
    let musicPlaying = true;
    document.getElementById('music-toggle').addEventListener('click', function() {
        musicPlaying = !musicPlaying;
        if (musicPlaying) {
            document.getElementById('music').play();
            this.style.color = "#c8a878";
        } else {
            document.getElementById('music').pause();
            this.style.color = "#5d4c3a";
        }
    });
    
    window.addEventListener('resize', function() {
        if (canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
    });
    
    setInterval(updateUI, 1000);
});
let currentLevel = 1;
let lives = 3;
const totalLevels = 100;
let activeMemoryPattern = [];
let playerMemoryInput = [];
let isAcceptingInput = true;

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function startGame() {
    currentLevel = 1;
    lives = 3;
    showScreen('gameplayScreen');
    loadLevel();
}

function resetToStart() {
    showScreen('startScreen');
}

function jumpToLevel(lvl) {
    currentLevel = lvl;
    loadLevel();
}

function failLevel() {
    lives--;
    updateStats();
    document.getElementById('gameWindow').classList.add('shake');
    setTimeout(() => {
        document.getElementById('gameWindow').classList.remove('shake');
    }, 500);

    if (lives <= 0) {
        document.getElementById('failAnalysis').innerText = `Your brain hit its ceiling at Level ${currentLevel}. Estimated Brain Age: ${Math.min(80, 80 - Math.floor(currentLevel * 0.5))} years old.`;
        showScreen('gameoverScreen');
    } else {
        loadLevel(); // reload current level structure
    }
}

function nextLevel() {
    currentLevel++;
    if (currentLevel > totalLevels) {
        const finalAge = Math.max(20, 80 - Math.floor(totalLevels * 0.6));
        document.getElementById('finalBrainAge').innerText = `${finalAge} Years Old`;
        showScreen('winScreen');
    } else {
        loadLevel();
    }
}

function updateStats() {
    document.getElementById('levelDisplay').innerText = `Level ${currentLevel}/${totalLevels}`;
    document.getElementById('livesDisplay').innerText = "❤️".repeat(lives);
    document.getElementById('progressBar').style.width = `${(currentLevel / totalLevels) * 100}%`;
}

function loadLevel() {
    updateStats();
    const zone = document.getElementById('gameZone');
    const qBox = document.getElementById('questionText');
    zone.innerHTML = "";
    isAcceptingInput = true;

    // Determine archetype based on math rotation
    const levelType = (currentLevel - 1) % 5;

    // Math scaling factor based on level progression
    const difficultyScale = Math.floor(currentLevel / 5) + 1;

    switch(levelType) {
        case 0: // Stroop Test (Attention)
            generateStroopLevel(zone, qBox, difficultyScale);
            break;
        case 1: // Memory Grid
            generateMemoryLevel(zone, qBox, difficultyScale);
            break;
        case 2: // Math Logic
            generateMathLevel(zone, qBox, difficultyScale);
            break;
        case 3: // Logic Trick
            generateTrickLevel(zone, qBox, difficultyScale);
            break;
        case 4: // Odd One Out
            generateObservationLevel(zone, qBox, difficultyScale);
            break;
    }
}

// --- PUZZLE GENERATORS ---

function generateStroopLevel(zone, qBox, scale) {
    const colors = [
        { name: 'Red', hex: '#ef4444' },
        { name: 'Blue', hex: '#3b82f6' },
        { name: 'Green', hex: '#10b981' },
        { name: 'Yellow', hex: '#f59e0b' }
    ];

    // Pick targets
    const targetColorObj = colors[Math.floor(Math.random() * colors.length)];
    const textWordObj = colors[(colors.indexOf(targetColorObj) + 1) % colors.length];

    const askWordColor = Math.random() > 0.5;

    if (askWordColor) {
        qBox.innerHTML = `What is the physical color of the word below?`;
    } else {
        qBox.innerHTML = `What word is spelled out below?`;
    }

    // Central word display
    const targetText = document.createElement('h2');
    targetText.innerText = textWordObj.name.toUpperCase();
    targetText.style.color = targetColorObj.hex;
    targetText.style.fontSize = '2.5rem';
    targetText.style.marginBottom = '25px';
    zone.appendChild(targetText);

    // Choice options
    const grid = document.createElement('div');
    grid.className = 'options-grid';

    colors.forEach(col => {
        const button = document.createElement('button');
        button.className = 'btn';
        button.innerText = col.name;
        button.onclick = () => {
            const correctAns = askWordColor ? targetColorObj.name : textWordObj.name;
            if (col.name === correctAns) {
                nextLevel();
            } else {
                failLevel();
            }
        };
        grid.appendChild(button);
    });
    zone.appendChild(grid);
}

function generateMemoryLevel(zone, qBox, scale) {
    qBox.innerText = "Remember and duplicate the green pattern!";
    
    const gridSize = scale > 8 ? 5 : (scale > 4 ? 4 : 3);
    const activeCount = Math.min(gridSize + 1, 7);

    const grid = document.createElement('div');
    grid.className = 'pattern-grid';
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    grid.style.width = '240px';

    const totalTiles = gridSize * gridSize;
    activeMemoryPattern = [];
    playerMemoryInput = [];

    // Pick random unique tiles to flash
    while(activeMemoryPattern.length < activeCount) {
        let idx = Math.floor(Math.random() * totalTiles);
        if(!activeMemoryPattern.includes(idx)) {
            activeMemoryPattern.push(idx);
        }
    }

    const tiles = [];
    for(let i=0; i<totalTiles; i++) {
        const tile = document.createElement('div');
        tile.className = 'tile';
        tile.dataset.index = i;
        grid.appendChild(tile);
        tiles.push(tile);
    }
    zone.appendChild(grid);

    // Show Pattern
    isAcceptingInput = false;
    let step = 0;
    const flashTimer = setInterval(() => {
        if(step < activeMemoryPattern.length) {
            const idx = activeMemoryPattern[step];
            tiles[idx].classList.add('active');
            setTimeout(() => tiles[idx].classList.remove('active'), 600);
            step++;
        } else {
            clearInterval(flashTimer);
            isAcceptingInput = true;
            qBox.innerText = "Repeat the pattern!";
        }
    }, 900);

    tiles.forEach((tile, index) => {
        tile.onclick = () => {
            if(!isAcceptingInput) return;

            if(activeMemoryPattern.includes(index)) {
                if(!playerMemoryInput.includes(index)) {
                    playerMemoryInput.push(index);
                    tile.classList.add('correct');
                    
                    if(playerMemoryInput.length === activeMemoryPattern.length) {
                        isAcceptingInput = false;
                        setTimeout(nextLevel, 500);
                    }
                }
            } else {
                tile.classList.add('wrong');
                isAcceptingInput = false;
                setTimeout(failLevel, 500);
            }
        };
    });
}

function generateMathLevel(zone, qBox, scale) {
    qBox.innerText = "Complete the expression!";
    
    let num1 = Math.floor(Math.random() * (10 * scale)) + 2;
    let num2 = Math.floor(Math.random() * (5 * scale)) + 2;
    let ans = num1 + num2;
    let opt1 = ans + Math.floor(Math.random() * 5) + 1;
    let opt2 = ans - Math.floor(Math.random() * 4) - 1;

    // Generate formula representation
    const mathDisplay = document.createElement('div');
    mathDisplay.style.fontSize = '2rem';
    mathDisplay.style.fontWeight = '700';
    mathDisplay.style.marginBottom = '30px';
    mathDisplay.innerText = `${num1} + ${num2} = ?`;
    zone.appendChild(mathDisplay);

    const grid = document.createElement('div');
    grid.className = 'options-grid';

    const opts = [ans, opt1, opt2].sort(() => Math.random() - 0.5);
    opts.forEach(opt => {
        const button = document.createElement('button');
        button.className = 'btn';
        button.innerText = opt;
        button.onclick = () => {
            if (opt === ans) {
                nextLevel();
            } else {
                failLevel();
            }
        };
        grid.appendChild(button);
    });
    zone.appendChild(grid);
}

function generateTrickLevel(zone, qBox, scale) {
    // Trick questions
    const tricks = [
        {
            q: "Click the lightest weight item below:",
            options: ["1 lb Gold", "1 lb Feathers", "0.5 lb Lead", "They equal"],
            ans: "0.5 lb Lead"
        },
        {
            q: "Click the physically largest button:",
            options: ["Elephant", "Ant", "Galaxy", "Microbe"],
            ans: "Elephant",
            styled: true // Target size manipulation
        },
        {
            q: "What color is a banana inside its skin?",
            options: ["Yellow", "White/Cream", "Green", "Brown"],
            ans: "White/Cream"
        }
    ];

    const currentTrick = tricks[Math.floor(Math.random() * tricks.length)];
    qBox.innerText = currentTrick.q;

    const grid = document.createElement('div');
    grid.className = 'options-grid';

    currentTrick.options.forEach(opt => {
        const button = document.createElement('button');
        button.className = 'btn';
        button.innerText = opt;
        
        // If special styling for "physically largest", scale the buttons
        if (currentTrick.styled) {
            if (opt === "Elephant") button.style.transform = 'scale(1.25)';
            if (opt === "Ant") button.style.transform = 'scale(0.7)';
            if (opt === "Galaxy") button.style.transform = 'scale(0.85)';
        }

        button.onclick = () => {
            if (opt === currentTrick.ans) {
                nextLevel();
            } else {
                failLevel();
            }
        };
        grid.appendChild(button);
    });
    zone.appendChild(grid);
}

function generateObservationLevel(zone, qBox, scale) {
    qBox.innerText = "Find the odd one out!";
    
    const gridSize = Math.min(4 + Math.floor(scale / 2), 6);
    const grid = document.createElement('div');
    grid.className = 'pattern-grid';
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    grid.style.width = '240px';

    const total = gridSize * gridSize;
    const oddIdx = Math.floor(Math.random() * total);

    // Simulating odd-one-out symbols (e.g. O vs 0, or M vs W)
    const pairs = [
        { normal: 'O', odd: 'Q' },
        { normal: 'E', odd: 'F' },
        { normal: '8', odd: 'B' },
        { normal: 'i', odd: 'l' }
    ];
    const activePair = pairs[Math.floor(Math.random() * pairs.length)];

    for(let i=0; i<total; i++) {
        const button = document.createElement('button');
        button.className = 'btn';
        button.style.padding = '8px';
        button.style.fontSize = '1.2rem';
        button.innerText = (i === oddIdx) ? activePair.odd : activePair.normal;
        
        button.onclick = () => {
            if (i === oddIdx) {
                nextLevel();
            } else {
                failLevel();
            }
        };
        grid.appendChild(button);
    }
    zone.appendChild(grid);
}

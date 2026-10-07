<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ultimate Brain Test: 100+ Levels</title>
    <style>
        :root {
            --primary: #4f46e5;
            --primary-hover: #4338ca;
            --background: #f3f4f6;
            --card: #ffffff;
            --text: #1f2937;
            --success: #10b981;
            --danger: #ef4444;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background-color: var(--background);
            color: var(--text);
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
        }

        .game-container {
            background: var(--card);
            border-radius: 20px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            width: 100%;
            max-width: 500px;
            padding: 30px;
            text-align: center;
            position: relative;
            overflow: hidden;
            transition: transform 0.2s ease;
        }

        .shake {
            animation: shake 0.5s;
        }

        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            20%, 60% { transform: translateX(-10px); }
            40%, 80% { transform: translateX(10px); }
        }

        /* Stats Bar */
        .stats-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 25px;
            font-weight: 700;
            color: #4b5563;
        }

        .level-badge {
            background: #e0e7ff;
            color: var(--primary);
            padding: 6px 16px;
            border-radius: 20px;
            font-size: 0.95rem;
        }

        .lives {
            color: var(--danger);
            font-size: 1.2rem;
        }

        /* Question & Target Area */
        .question-box {
            font-size: 1.35rem;
            font-weight: 600;
            margin-bottom: 30px;
            min-height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            line-height: 1.4;
        }

        .interactive-zone {
            min-height: 250px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-bottom: 30px;
        }

        /* Options layout */
        .options-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            width: 100%;
        }

        .btn {
            background: #f9fafb;
            border: 2px solid #e5e7eb;
            padding: 16px;
            border-radius: 12px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            color: var(--text);
        }

        .btn:hover {
            border-color: var(--primary);
            background: #f5f3ff;
        }

        /* Grid specific patterns */
        .pattern-grid {
            display: grid;
            gap: 8px;
            margin: 0 auto;
        }

        .tile {
            background-color: #e5e7eb;
            border-radius: 8px;
            cursor: pointer;
            aspect-ratio: 1;
            transition: background-color 0.2s ease, transform 0.1s;
        }

        .tile:active {
            transform: scale(0.95);
        }

        .tile.active {
            background-color: var(--primary);
        }

        .tile.correct {
            background-color: var(--success);
        }

        .tile.wrong {
            background-color: var(--danger);
        }

        /* Progress Bar */
        .progress-container {
            width: 100%;
            height: 6px;
            background: #e5e7eb;
            border-radius: 3px;
            margin-top: 20px;
            overflow: hidden;
        }

        .progress-bar {
            height: 100%;
            width: 1%;
            background: var(--primary);
            transition: width 0.3s ease;
        }

        /* Screens */
        .screen {
            display: none;
        }

        .screen.active {
            display: block;
        }

        .hero-title {
            font-size: 2rem;
            color: var(--primary);
            margin-bottom: 15px;
        }

        .test-controls {
            margin-top: 20px;
            display: flex;
            gap: 10px;
            justify-content: center;
        }

        .btn-small {
            padding: 6px 12px;
            font-size: 0.8rem;
            background: #e5e7eb;
            border: none;
            border-radius: 6px;
            cursor: pointer;
        }
    </style>
</head>
<body>

    <div class="game-container" id="gameWindow">
        
        <!-- START SCREEN -->
        <div id="startScreen" class="screen active">
            <h1 class="hero-title">Brain Age Test</h1>
            <p style="color: #6b7280; margin-bottom: 30px;">100+ procedural levels of logic, math, memory, and perception puzzles.</p>
            <button class="btn" style="width: 100%; background: var(--primary); color: white;" onclick="startGame()">Start Test</button>
        </div>

        <!-- GAMEPLAY SCREEN -->
        <div id="gameplayScreen" class="screen">
            <div class="stats-bar">
                <span class="level-badge" id="levelDisplay">Level 1/100</span>
                <span class="lives" id="livesDisplay">❤️❤️❤️</span>
            </div>
            
            <div class="question-box" id="questionText">
                Question will appear here...
            </div>

            <div class="interactive-zone" id="gameZone">
                <!-- Content injected programmatically -->
            </div>

            <div class="progress-container">
                <div class="progress-bar" id="progressBar"></div>
            </div>

            <div class="test-controls">
                <button class="btn-small" onclick="jumpToLevel(25)">Level 25</button>
                <button class="btn-small" onclick="jumpToLevel(50)">Level 50</button>
                <button class="btn-small" onclick="jumpToLevel(75)">Level 75</button>
                <button class="btn-small" onclick="jumpToLevel(100)">Level 100</button>
            </div>
        </div>

        <!-- GAMEOVER SCREEN -->
        <div id="gameoverScreen" class="screen">
            <h1 class="hero-title" style="color: var(--danger);">Test Failed!</h1>
            <p id="failAnalysis" style="margin-bottom: 30px;">Your brain overloaded at Level 1.</p>
            <button class="btn" style="width: 100%; background: var(--primary); color: white;" onclick="resetToStart()">Try Again</button>
        </div>

        <!-- WIN SCREEN -->
        <div id="winScreen" class="screen">
            <h1 class="hero-title" style="color: var(--success);">Incredible!</h1>
            <p style="margin-bottom: 10px; font-weight: bold;">You completed the entire Brain Test program!</p>
            <p style="color: #6b7280; margin-bottom: 30px;">Calculated Brain Age: <span style="color: var(--primary); font-size: 1.5rem;" id="finalBrainAge">20</span></p>
            <button class="btn" style="width: 100%; background: var(--primary); color: white;" onclick="resetToStart()">Play Again</button>
        </div>

    </div>

    <script>
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
    </script>
</body>
</html>

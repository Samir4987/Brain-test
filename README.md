# Brain Game 🧠

A challenging cognitive test game featuring 100+ procedural levels that assess attention, memory, logic, math skills, and perception abilities.

## 🎮 Game Features

- **100 Progressive Levels** - Difficulty scales as you advance
- **5 Puzzle Types** (rotating every 5 levels):
  - **Stroop Test** - Test color perception and attention
  - **Memory Grid** - Remember and replicate patterns
  - **Math Logic** - Solve increasingly complex arithmetic
  - **Logic Tricks** - Overcome cognitive biases
  - **Odd One Out** - Observation and pattern recognition

- **Lives System** - 3 lives to complete the test
- **Brain Age Score** - Your calculated brain age at the end
- **Quick Jump** - Skip to levels 25, 50, 75, or 100 for testing
- **Progress Tracking** - Visual progress bar and level counter

## 🚀 How to Play

1. Open `index.html` in your web browser
2. Click "Start Test" to begin
3. Complete each puzzle correctly to advance
4. Lose all 3 lives and the test ends
5. Complete all 100 levels to see your final Brain Age score

## 🎯 Puzzle Types Explained

### Stroop Test (Levels 1, 6, 11, etc.)
Test your attention by identifying either the physical color of a word or the word itself when they don't match.

### Memory Grid (Levels 2, 7, 12, etc.)
Watch a sequence of tiles light up, then click them in the same order. Grid size and sequence length increase with difficulty.

### Math Logic (Levels 3, 8, 13, etc.)
Solve simple addition problems. Numbers get larger as you progress.

### Logic Tricks (Levels 4, 9, 14, etc.)
Answer trick questions that test your reasoning beyond obvious answers.

### Odd One Out (Levels 5, 10, 15, etc.)
Identify the unique item in a grid of similar-looking items. Grid size increases with difficulty.

## 📊 Difficulty Scaling

The game uses a difficulty multiplier that increases every 5 levels:
- Levels 1-5: Scale 1
- Levels 6-10: Scale 2
- Levels 11-15: Scale 3
- And so on...

This affects:
- Number magnitude in math puzzles
- Grid size in memory and observation puzzles
- Pattern complexity

## 🎨 Design

- Clean, modern UI with Indigo primary color scheme
- Responsive design - works on desktop and mobile
- Smooth animations and visual feedback
- Color-coded feedback (green for correct, red for wrong)

## 📁 File Structure

```
brain-test/
├── index.html      # Main game file (HTML + CSS + JavaScript)
└── README.md       # This file
```

## ⌨️ Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling and animations
- **Vanilla JavaScript** - Game logic and state management

No external dependencies required!

## 🔧 Customization

You can easily customize the game by modifying the HTML file:

- Change colors in the `:root` CSS variables
- Adjust `totalLevels` constant to increase/decrease level count
- Modify difficulty scaling in the `loadLevel()` function
- Add new trick questions in `generateTrickLevel()`
- Adjust animation timing (search for `setTimeout` values)

## 💡 Tips for Players

1. **Stroop Test** - Focus on the exact question asked; don't assume
2. **Memory Grid** - Try to remember the pattern in chunks rather than individual tiles
3. **Math Logic** - Mental math gets harder; take your time
4. **Logic Tricks** - Think literally; the answer might be more obvious than you think
5. **Odd One Out** - Scan systematically from top to bottom

## 📝 License

Open source - feel free to use and modify!

## 🎓 Educational Value

This game is designed to engage multiple cognitive domains:
- **Attention** - Stroop Test exercises selective attention
- **Working Memory** - Memory Grid challenges short-term recall
- **Processing Speed** - Math Logic tests calculation speed
- **Reasoning** - Logic Tricks require problem-solving
- **Perception** - Odd One Out develops visual discrimination

---

**Have fun testing your brain! 🧠⚡**

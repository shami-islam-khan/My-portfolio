let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = false;
let playWithComputer = false;
let firstPlayer = 'X';

const playFriendBtn = document.getElementById('play-friend');
const playComputerBtn = document.getElementById('play-computer');
const resetGameBtn = document.getElementById('reset-game');
const cells = document.querySelectorAll('.cell');
const winnerDisplay = document.getElementById('winner');

playFriendBtn.addEventListener('click', () => {
    playWithComputer = false;
    startGame();
});

playComputerBtn.addEventListener('click', () => {
    playWithComputer = true;
    startGame();
});

resetGameBtn.addEventListener('click', startGame);

cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

function startGame() {
    gameActive = true;
    resetGame();
    currentPlayer = firstPlayer;
    firstPlayer = firstPlayer === 'X' ? 'O' : 'X';
    if (playWithComputer && currentPlayer === 'O') {
        setTimeout(computerMove, 500);
    }
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    cells.forEach(cell => {
        cell.textContent = '';
        cell.style.pointerEvents = 'auto';
    });
    winnerDisplay.textContent = '';
}

function handleCellClick(event) {
    const cell = event.target;
    const index = cell.getAttribute('data-index');

    if (board[index] !== '' || !gameActive) return;

    board[index] = currentPlayer;
    cell.textContent = currentPlayer;

    if (checkWinner()) {
        gameActive = false;
        winnerDisplay.textContent = `${currentPlayer} Has Won!`;
        return;
    }

    if (!board.includes('')) {
        gameActive = false;
        winnerDisplay.textContent = `It's a Draw!`;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

    if (playWithComputer && currentPlayer === 'O') {
        setTimeout(computerMove, 500);
    }
}

function computerMove() {
    const emptyCells = board.map((cell, index) => cell === '' ? index : null).filter(val => val !== null);
    const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    board[randomIndex] = 'O';
    cells[randomIndex].textContent = 'O';
    cells[randomIndex].style.pointerEvents = 'none';

    if (checkWinner()) {
        gameActive = false;
        winnerDisplay.textContent = 'O Has Won!';
        return;
    }

    if (!board.includes('')) {
        gameActive = false;
        winnerDisplay.textContent = `It's a Draw!`;
        return;
    }

    currentPlayer = 'X';
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winningCombinations.some(combination => {
        return combination.every(index => board[index] === currentPlayer);
    });
}

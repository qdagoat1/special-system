let score = 0;
let player = document.getElementById('player');
let ball = document.getElementById('ball');
let scoreDisplay = document.getElementById('score');

let playerPosition = 150; // Initial player position

// Function to move the player
function movePlayer(event) {
    if (event.key === 'ArrowLeft' && playerPosition > 0) {
        playerPosition -= 20;
    } else if (event.key === 'ArrowRight' && playerPosition < 350) {
        playerPosition += 20;
    }
    player.style.left = playerPosition + 'px';
}

// Function to drop the ball and check collision
function dropBall() {
    let ballPositionY = parseInt(ball.style.top) || 0;
    let ballPositionX = parseInt(ball.style.left) || 0;

    ballPositionY += 5;

    if (ballPositionY > 550 && ballPositionX > playerPosition - 25 && ballPositionX < playerPosition + 25) {
        score++;
        scoreDisplay.textContent = "Score: " + score;
        ball.style.top = '0px';
        ball.style.left = Math.floor(Math.random() * 370) + 'px';
    }

    if (ballPositionY > 600) {
        ball.style.top = '0px';
        ball.style.left = Math.floor(Math.random() * 370) + 'px';
    }

    ball.style.top = ballPositionY + 'px';
}

// Event listener for player movement
window.addEventListener('keydown', movePlayer);

// Game loop
setInterval(dropBall, 20);

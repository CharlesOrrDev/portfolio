import React from 'react'

const page = () =>
{
  return (
    <>
      <div className="m-0 p-0 flex justify-center items-center min-h-[100vh] bg-[linear-gradient(180deg,_#1a0b2e_0%,_#2d1b3d_50%,_#0f0519_100%)] overflow-hidden">
        <div className="relative w-[400px] h-[600px] border-[3px] border-[#ff6b35] rounded-[10px] overflow-hidden bg-[linear-gradient(180deg,_#2d1b3d_0%,_#1a0b2e_100%)] shadow-[0_0_20px_rgba(255,107,53,0.5)]">

          <canvas className="block bg-[linear-gradient(180deg,_#2d1b3d_0%,_#1a0b2e_100%)] w-[400px] h-[600px]"></canvas>

          

        </div>
      </div>
    </>
  )
}

export default page
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Halloween Flappy Bat</title>
//     <style>
//         #ui {
//             position: absolute;
//             top: 20px;
//             left: 20px;
//             color: #ff6b35;
//             font-size: 18px;
//             font-weight: bold;
//             z-index: 10;
//             text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
//         }
        
//         #gameOver {
//             position: absolute;
//             top: 50%;
//             left: 50%;
//             transform: translate(-50%, -50%);
//             text-align: center;
//             color: #ff6b35;
//             font-size: 24px;
//             font-weight: bold;
//             background: rgba(0,0,0,0.8);
//             padding: 30px;
//             border-radius: 15px;
//             border: 2px solid #ff6b35;
//             display: none;
//             z-index: 20;
//         }
        
//         #startScreen {
//             position: absolute;
//             top: 50%;
//             left: 50%;
//             transform: translate(-50%, -50%);
//             text-align: center;
//             color: #ff6b35;
//             font-size: 18px;
//             font-weight: bold;
//             background: rgba(0,0,0,0.9);
//             padding: 20px;
//             border-radius: 15px;
//             border: 2px solid #ff6b35;
//             z-index: 20;
//             max-width: 350px;
//             box-shadow: 0 0 20px rgba(255, 107, 53, 0.3);
//         }
        
//         button {
//             background: #ff6b35;
//             color: white;
//             border: none;
//             padding: 12px 24px;
//             font-size: 18px;
//             font-weight: bold;
//             border-radius: 8px;
//             cursor: pointer;
//             margin: 15px;
//             transition: all 0.3s;
//             box-shadow: 0 4px 8px rgba(0,0,0,0.3);
//         }
        
//         button:hover {
//             background: #ff8c42;
//             transform: scale(1.05);
//         }
        
//         #powerUpIndicator {
//             position: absolute;
//             top: 60px;
//             left: 20px;
//             color: #ffff00;
//             font-size: 14px;
//             font-weight: bold;
//             z-index: 10;
//             text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
//         }
//     </style>
// </head>
// <body>
//     <div id="gameContainer">
//         <canvas id="gameCanvas"></canvas>
        
//         <div id="ui">
//             <div>Score: <span id="score">0</span></div>
//             <div>Lives: <span id="lives">3</span></div>
//         </div>
        
//         <div id="powerUpIndicator"></div>
        
//         <div id="startScreen">
//             <h2>🦇 Halloween Flappy Bat 🎃</h2>
//             <p>Navigate through haunted pumpkins!</p>
//             <p>Collect power-ups:</p>
//             <p>⭐ Shield - Protection from obstacles</p>
//             <p>⚡ Speed Boost - Faster movement</p>
//             <p>💀 Ghost Mode - Phase through obstacles</p>
//             <p>❤️ Extra Life - Gain a life</p>
//             <button onclick="startGame()">Start Game</button>
//             <p style="font-size: 14px; margin-top: 20px;">Press SPACE or click to flap!</p>
//         </div>
        
//         <div id="gameOver">
//             <h2>Game Over!</h2>
//             <p>Final Score: <span id="finalScore">0</span></p>
//             <button onclick="restartGame()">Play Again</button>
//         </div>
//     </div>

//     <script>
//         const canvas = document.getElementById('gameCanvas');
//         const ctx = canvas.getContext('2d');
        
//         let gameState = 'start'; // 'start', 'playing', 'gameOver'
//         let score = 0;
//         let lives = 3;
//         let frame = 0;
//         let gameStartTime = 0;
        
//         // Bat object
//         const bat = {
//             x: 80,
//             y: 300,
//             width: 30,
//             height: 25,
//             velocity: 0,
//             gravity: 0.4,
//             jumpStrength: -8,
//             angle: 0
//         };
        
//         // Game objects arrays
//         let obstacles = [];
//         let powerUps = [];
//         let particles = [];
        
//         // Power-up system
//         let activePowerUps = {
//             shield: 0,
//             speedBoost: 0,
//             ghostMode: 0
//         };
        
//         // Power-up types
//         const powerUpTypes = [
//             { type: 'shield', color: '#00ffff', symbol: '🛡️', duration: 300 },
//             { type: 'speedBoost', color: '#ffff00', symbol: '⚡', duration: 200 },
//             { type: 'ghostMode', color: '#ff00ff', symbol: '👻', duration: 250 },
//             { type: 'extraLife', color: '#ff0000', symbol: '❤️', duration: 0 }
//         ];
        
//         function drawBat() {
//             ctx.save();
//             ctx.translate(bat.x + bat.width/2, bat.y + bat.height/2);
//             ctx.rotate(bat.angle);
            
//             const wingFlap = Math.sin(frame * 0.3) * 8;
//             const bodyColor = activePowerUps.ghostMode > 0 ? 'rgba(80, 60, 100, 0.6)' : '#4a4a4a';
//             const wingColor = activePowerUps.ghostMode > 0 ? 'rgba(40, 30, 50, 0.6)' : '#2a2a2a';
            
//             // Bat wings (behind body)
//             ctx.fillStyle = wingColor;
//             ctx.beginPath();
//             // Left wing
//             ctx.ellipse(-12, -3 + wingFlap, 10, 12, Math.PI * 0.2, 0, Math.PI * 2);
//             ctx.fill();
//             // Right wing  
//             ctx.beginPath();
//             ctx.ellipse(12, -3 + wingFlap, 10, 12, -Math.PI * 0.2, 0, Math.PI * 2);
//             ctx.fill();
            
//             // Wing membrane details
//             ctx.strokeStyle = wingColor;
//             ctx.lineWidth = 1;
//             ctx.beginPath();
//             ctx.moveTo(-18, -8 + wingFlap);
//             ctx.lineTo(-8, 2 + wingFlap);
//             ctx.moveTo(-15, -2 + wingFlap);
//             ctx.lineTo(-6, 6 + wingFlap);
//             ctx.stroke();
            
//             ctx.beginPath();
//             ctx.moveTo(18, -8 + wingFlap);
//             ctx.lineTo(8, 2 + wingFlap);
//             ctx.moveTo(15, -2 + wingFlap);  
//             ctx.lineTo(6, 6 + wingFlap);
//             ctx.stroke();
            
//             // Bat body (round and chubby)
//             ctx.fillStyle = bodyColor;
//             ctx.beginPath();
//             ctx.ellipse(0, 0, 12, 10, 0, 0, Math.PI * 2);
//             ctx.fill();
            
//             // Cute little ears
//             ctx.fillStyle = bodyColor;
//             ctx.beginPath();
//             ctx.ellipse(-6, -8, 3, 5, Math.PI * 0.1, 0, Math.PI * 2);
//             ctx.fill();
//             ctx.beginPath();
//             ctx.ellipse(6, -8, 3, 5, -Math.PI * 0.1, 0, Math.PI * 2);
//             ctx.fill();
            
//             // Inner ears (pink)
//             ctx.fillStyle = activePowerUps.ghostMode > 0 ? 'rgba(255, 182, 193, 0.6)' : '#ffb6c1';
//             ctx.beginPath();
//             ctx.ellipse(-6, -8, 1.5, 3, Math.PI * 0.1, 0, Math.PI * 2);
//             ctx.fill();
//             ctx.beginPath();
//             ctx.ellipse(6, -8, 1.5, 3, -Math.PI * 0.1, 0, Math.PI * 2);
//             ctx.fill();
            
//             // Cute big eyes
//             ctx.fillStyle = '#ffffff';
//             ctx.beginPath();
//             ctx.ellipse(-4, -2, 3, 4, 0, 0, Math.PI * 2);
//             ctx.fill();
//             ctx.beginPath();
//             ctx.ellipse(4, -2, 3, 4, 0, 0, Math.PI * 2);
//             ctx.fill();
            
//             // Eye pupils with slight animation
//             const eyeOffset = Math.sin(frame * 0.1) * 0.5;
//             ctx.fillStyle = '#ff4444';
//             ctx.beginPath();
//             ctx.ellipse(-4 + eyeOffset, -1, 1.5, 2, 0, 0, Math.PI * 2);
//             ctx.fill();
//             ctx.beginPath();
//             ctx.ellipse(4 + eyeOffset, -1, 1.5, 2, 0, 0, Math.PI * 2);
//             ctx.fill();
            
//             // Eye shine (makes it extra cute)
//             ctx.fillStyle = '#ffffff';
//             ctx.beginPath();
//             ctx.ellipse(-4.5, -2, 0.8, 1, 0, 0, Math.PI * 2);
//             ctx.fill();
//             ctx.beginPath();
//             ctx.ellipse(3.5, -2, 0.8, 1, 0, 0, Math.PI * 2);
//             ctx.fill();
            
//             // Cute little nose
//             ctx.fillStyle = activePowerUps.ghostMode > 0 ? 'rgba(255, 182, 193, 0.6)' : '#ffb6c1';
//             ctx.beginPath();
//             ctx.ellipse(0, 1, 1, 0.8, 0, 0, Math.PI * 2);
//             ctx.fill();
            
//             // Small smile
//             ctx.strokeStyle = '#333';
//             ctx.lineWidth = 1;
//             ctx.beginPath();
//             ctx.arc(0, 3, 2, 0, Math.PI);
//             ctx.stroke();
            
//             // Shield effect
//             if (activePowerUps.shield > 0) {
//                 ctx.strokeStyle = '#00ffff';
//                 ctx.lineWidth = 3;
//                 ctx.setLineDash([5, 5]);
//                 ctx.beginPath();
//                 ctx.arc(0, 0, 25, 0, Math.PI * 2);
//                 ctx.stroke();
//                 ctx.setLineDash([]);
//             }
            
//             ctx.restore();
//         }
        
//         function drawObstacle(obstacle) {
//             const centerX = obstacle.x + obstacle.width/2;
//             const centerY = obstacle.y + obstacle.height/2;
//             const pumpkinWidth = obstacle.width * 0.8;
//             const pumpkinHeight = obstacle.height;
            
//             // Draw pumpkin shape with curves
//             ctx.fillStyle = '#ff6b35';
//             ctx.beginPath();
            
//             // Create pumpkin outline with curves
//             const segments = 6;
//             const segmentWidth = pumpkinWidth / segments;
            
//             for (let i = 0; i <= segments; i++) {
//                 const x = obstacle.x + obstacle.width * 0.1 + i * segmentWidth;
//                 const topY = obstacle.y;
//                 const bottomY = obstacle.y + obstacle.height;
                
//                 if (i === 0) {
//                     ctx.moveTo(x, topY);
//                 } else {
//                     // Create wavy pumpkin ridges
//                     const waveHeight = 8;
//                     const midX = x - segmentWidth/2;
//                     const topMidY = topY + waveHeight * Math.sin(i * Math.PI / segments);
//                     const bottomMidY = bottomY - waveHeight * Math.sin(i * Math.PI / segments);
                    
//                     ctx.quadraticCurveTo(midX, topMidY, x, topY);
//                 }
//             }
            
//             // Right side
//             ctx.lineTo(obstacle.x + obstacle.width * 0.9, obstacle.y + obstacle.height);
            
//             // Bottom with curves
//             for (let i = segments; i >= 0; i--) {
//                 const x = obstacle.x + obstacle.width * 0.1 + i * segmentWidth;
//                 const bottomY = obstacle.y + obstacle.height;
                
//                 if (i === segments) {
//                     ctx.lineTo(x, bottomY);
//                 } else {
//                     const waveHeight = 8;
//                     const midX = x + segmentWidth/2;
//                     const bottomMidY = bottomY - waveHeight * Math.sin(i * Math.PI / segments);
                    
//                     ctx.quadraticCurveTo(midX, bottomMidY, x, bottomY);
//                 }
//             }
            
//             ctx.closePath();
//             ctx.fill();
            
//             // Add pumpkin ridges
//             ctx.strokeStyle = '#e55a2b';
//             ctx.lineWidth = 2;
//             for (let i = 1; i < segments; i++) {
//                 const x = obstacle.x + obstacle.width * 0.1 + i * segmentWidth;
//                 ctx.beginPath();
//                 ctx.moveTo(x, obstacle.y);
//                 ctx.lineTo(x, obstacle.y + obstacle.height);
//                 ctx.stroke();
//             }
            
//             // Pumpkin face (only if obstacle is tall enough)
//             if (obstacle.height > 60) {
//                 ctx.fillStyle = '#000';
                
//                 // Eyes (triangular)
//                 ctx.beginPath();
//                 ctx.moveTo(centerX - 20, centerY - 20);
//                 ctx.lineTo(centerX - 10, centerY - 10);
//                 ctx.lineTo(centerX - 20, centerY - 5);
//                 ctx.closePath();
//                 ctx.fill();
                
//                 ctx.beginPath();
//                 ctx.moveTo(centerX + 20, centerY - 20);
//                 ctx.lineTo(centerX + 10, centerY - 10);
//                 ctx.lineTo(centerX + 20, centerY - 5);
//                 ctx.closePath();
//                 ctx.fill();
                
//                 // Jagged mouth
//                 ctx.beginPath();
//                 ctx.moveTo(centerX - 15, centerY + 5);
//                 ctx.lineTo(centerX - 10, centerY + 15);
//                 ctx.lineTo(centerX - 5, centerY + 5);
//                 ctx.lineTo(centerX, centerY + 15);
//                 ctx.lineTo(centerX + 5, centerY + 5);
//                 ctx.lineTo(centerX + 10, centerY + 15);
//                 ctx.lineTo(centerX + 15, centerY + 5);
//                 ctx.closePath();
//                 ctx.fill();
//             }
            
//             // Stem (more organic)
//             if (obstacle.y === 0) { // Top obstacle
//                 ctx.fillStyle = '#2d5a2d';
//                 ctx.beginPath();
//                 ctx.moveTo(centerX - 5, obstacle.y + obstacle.height);
//                 ctx.quadraticCurveTo(centerX - 3, obstacle.y + obstacle.height + 5, centerX - 2, obstacle.y + obstacle.height + 10);
//                 ctx.quadraticCurveTo(centerX + 2, obstacle.y + obstacle.height + 8, centerX + 5, obstacle.y + obstacle.height);
//                 ctx.closePath();
//                 ctx.fill();
//             }
//         }
        
//         function drawPowerUp(powerUp) {
//             ctx.save();
//             ctx.translate(powerUp.x + 15, powerUp.y + 15);
//             ctx.rotate(frame * 0.05);
            
//             // Outer glow
//             const gradient = ctx.createRadialGradient(0, 0, 5, 0, 0, 25);
//             gradient.addColorStop(0, powerUp.color);
//             gradient.addColorStop(0.4, powerUp.color + '88');
//             gradient.addColorStop(1, powerUp.color + '00');
            
//             ctx.fillStyle = gradient;
//             ctx.fillRect(-25, -25, 50, 50);
            
//             // Main orb (circular)
//             const orbGradient = ctx.createRadialGradient(-5, -5, 0, 0, 0, 15);
//             orbGradient.addColorStop(0, '#ffffff');
//             orbGradient.addColorStop(0.3, powerUp.color);
//             orbGradient.addColorStop(1, powerUp.color + 'aa');
            
//             ctx.fillStyle = orbGradient;
//             ctx.beginPath();
//             ctx.arc(0, 0, 15, 0, Math.PI * 2);
//             ctx.fill();
            
//             // Sparkle effect
//             ctx.fillStyle = '#ffffff';
//             for (let i = 0; i < 4; i++) {
//                 const angle = (frame * 0.1 + i * Math.PI / 2);
//                 const sparkleX = Math.cos(angle) * 20;
//                 const sparkleY = Math.sin(angle) * 20;
//                 ctx.beginPath();
//                 ctx.arc(sparkleX, sparkleY, 2, 0, Math.PI * 2);
//                 ctx.fill();
//             }
            
//             // Symbol (larger and centered)
//             ctx.fillStyle = '#000';
//             ctx.font = 'bold 14px Arial';
//             ctx.textAlign = 'center';
//             ctx.textBaseline = 'middle';
//             ctx.fillText(powerUp.symbol, 0, 0);
            
//             ctx.restore();
//         }
        
//         function drawParticle(particle) {
//             ctx.save();
//             ctx.globalAlpha = particle.alpha;
//             ctx.fillStyle = particle.color;
//             ctx.beginPath();
//             ctx.arc(particle.x, particle.y, particle.size/2, 0, Math.PI * 2);
//             ctx.fill();
//             ctx.restore();
//         }
        
//         function drawBackground() {
//             // Stars
//             ctx.fillStyle = '#ffffff';
//             for (let i = 0; i < 50; i++) {
//                 const x = (i * 37) % canvas.width;
//                 const y = (i * 23) % canvas.height;
//                 const twinkle = Math.sin(frame * 0.02 + i) * 0.5 + 0.5;
//                 ctx.globalAlpha = twinkle;
//                 ctx.fillRect(x, y, 2, 2);
//             }
//             ctx.globalAlpha = 1;
            
//             // Spooky trees silhouette
//             ctx.fillStyle = '#0a0a0a';
//             ctx.fillRect(0, canvas.height - 60, canvas.width, 60);
            
//             // Tree shapes (more organic)
//             for (let i = 0; i < 5; i++) {
//                 const x = i * 80 + 20;
                
//                 // Tree trunk
//                 ctx.beginPath();
//                 ctx.moveTo(x, canvas.height - 60);
//                 ctx.quadraticCurveTo(x + 3, canvas.height - 70, x + 7, canvas.height - 80);
//                 ctx.quadraticCurveTo(x + 12, canvas.height - 70, x + 15, canvas.height - 60);
//                 ctx.closePath();
//                 ctx.fill();
                
//                 // Tree crown (organic shape)
//                 ctx.beginPath();
//                 ctx.arc(x + 7, canvas.height - 80, 25, 0, Math.PI * 2);
//                 ctx.fill();
                
//                 // Add some irregular bumps to make it less perfect
//                 ctx.beginPath();
//                 ctx.arc(x - 5, canvas.height - 75, 12, 0, Math.PI * 2);
//                 ctx.fill();
//                 ctx.beginPath();
//                 ctx.arc(x + 19, canvas.height - 75, 12, 0, Math.PI * 2);
//                 ctx.fill();
//             }
//         }
        
//         function createObstacle() {
//             const gap = 150;
//             const minHeight = 80;
//             const groundHeight = 60;
//             const maxHeight = canvas.height - gap - minHeight - groundHeight;
//             const topHeight = Math.random() * (maxHeight - minHeight) + minHeight;
            
//             obstacles.push({
//                 x: canvas.width,
//                 y: 0,
//                 width: 60,
//                 height: topHeight,
//                 scored: false
//             });
            
//             obstacles.push({
//                 x: canvas.width,
//                 y: topHeight + gap,
//                 width: 60,
//                 height: canvas.height - topHeight - gap - groundHeight,
//                 scored: false
//             });
            
//             // Create power-up in the gap between obstacles
//             if (Math.random() < 0.4) {
//                 const powerUpType = powerUpTypes[Math.floor(Math.random() * powerUpTypes.length)];
//                 const gapCenterY = topHeight + gap / 2;
//                 const powerUpY = gapCenterY - 15 + (Math.random() - 0.5) * 60;
                
//                 const safePowerUpY = Math.max(80, Math.min(powerUpY, canvas.height - groundHeight - 50));
                
//                 powerUps.push({
//                     x: canvas.width + 30,
//                     y: safePowerUpY,
//                     width: 30,
//                     height: 30,
//                     ...powerUpType
//                 });
//             }
//         }
        
//         function createPowerUp() {
//             if (Math.random() < 0.3) {
//                 const powerUpType = powerUpTypes[Math.floor(Math.random() * powerUpTypes.length)];
                
//                 const minY = 80;
//                 const maxY = canvas.height - 120 - 30;
//                 const safeY = Math.random() * (maxY - minY) + minY;
                
//                 powerUps.push({
//                     x: canvas.width,
//                     y: safeY,
//                     width: 30,
//                     height: 30,
//                     ...powerUpType
//                 });
//             }
//         }
        
//         function createParticles(x, y, color) {
//             for (let i = 0; i < 10; i++) {
//                 particles.push({
//                     x: x,
//                     y: y,
//                     vx: (Math.random() - 0.5) * 10,
//                     vy: (Math.random() - 0.5) * 10,
//                     size: Math.random() * 4 + 2,
//                     color: color,
//                     alpha: 1,
//                     decay: 0.02
//                 });
//             }
//         }
        
//         function updateGame() {
//             if (gameState !== 'playing') return;
            
//             frame++;
            
//             const gracePeriodActive = frame < gameStartTime + 180;
            
//             const speedMultiplier = activePowerUps.speedBoost > 0 ? 1.5 : 1;
//             if (!gracePeriodActive) {
//                 bat.velocity += bat.gravity;
//             }
//             bat.y += bat.velocity * speedMultiplier;
//             bat.angle = Math.min(Math.max(bat.velocity * 0.1, -0.5), 0.5);
            
//             Object.keys(activePowerUps).forEach(key => {
//                 if (activePowerUps[key] > 0) {
//                     activePowerUps[key]--;
//                 }
//             });
            
//             if (frame % 120 === 0 && !gracePeriodActive) {
//                 createObstacle();
//             }
            
//             obstacles.forEach((obstacle, index) => {
//                 obstacle.x -= 3;
                
//                 if (!obstacle.scored && obstacle.x + obstacle.width < bat.x) {
//                     obstacle.scored = true;
//                     if (index % 2 === 0) {
//                         score += 10;
//                         updateUI();
//                     }
//                 }
                
//                 if (obstacle.x + obstacle.width < 0) {
//                     obstacles.splice(index, 1);
//                 }
//             });
            
//             powerUps.forEach((powerUp, index) => {
//                 powerUp.x -= 3;
                
//                 if (bat.x < powerUp.x + powerUp.width &&
//                     bat.x + bat.width > powerUp.x &&
//                     bat.y < powerUp.y + powerUp.height &&
//                     bat.y + bat.height > powerUp.y) {
                    
//                     if (powerUp.type === 'extraLife') {
//                         lives++;
//                     } else {
//                         activePowerUps[powerUp.type] = powerUp.duration;
//                     }
                    
//                     createParticles(powerUp.x + 15, powerUp.y + 15, powerUp.color);
//                     powerUps.splice(index, 1);
//                     score += 5;
//                     updateUI();
//                 }
                
//                 if (powerUp.x + powerUp.width < 0) {
//                     powerUps.splice(index, 1);
//                 }
//             });
            
//             particles.forEach((particle, index) => {
//                 particle.x += particle.vx;
//                 particle.y += particle.vy;
//                 particle.alpha -= particle.decay;
                
//                 if (particle.alpha <= 0) {
//                     particles.splice(index, 1);
//                 }
//             });
            
//             if (activePowerUps.ghostMode === 0) {
//                 obstacles.forEach(obstacle => {
//                     if (bat.x < obstacle.x + obstacle.width &&
//                         bat.x + bat.width > obstacle.x &&
//                         bat.y < obstacle.y + obstacle.height &&
//                         bat.y + bat.height > obstacle.y) {
                        
//                         if (activePowerUps.shield > 0) {
//                             activePowerUps.shield = 0;
//                             createParticles(bat.x + bat.width/2, bat.y + bat.height/2, '#00ffff');
//                         } else {
//                             lives--;
//                             createParticles(bat.x + bat.width/2, bat.y + bat.height/2, '#ff0000');
//                             if (lives <= 0) {
//                                 gameOver();
//                             } else {
//                                 bat.y = 300;
//                                 bat.velocity = 0;
//                             }
//                             updateUI();
//                         }
//                     }
//                 });
//             }
            
//             const groundHeight = 60;
//             if (bat.y + bat.height > canvas.height - groundHeight || bat.y < 0) {
//                 if (activePowerUps.shield > 0) {
//                     activePowerUps.shield = 0;
//                     bat.y = Math.max(0, Math.min(bat.y, canvas.height - groundHeight - bat.height));
//                     bat.velocity = 0;
//                 } else {
//                     lives--;
//                     if (lives <= 0) {
//                         gameOver();
//                     } else {
//                         bat.y = 300;
//                         bat.velocity = 0;
//                     }
//                     updateUI();
//                 }
//             }
//         }
        
//         function render() {
//             ctx.clearRect(0, 0, canvas.width, canvas.height);
            
//             drawBackground();
            
//             if (gameState === 'playing') {
//                 obstacles.forEach(drawObstacle);
//                 powerUps.forEach(drawPowerUp);
//                 particles.forEach(drawParticle);
//                 drawBat();
                
//                 const gracePeriodActive = frame < gameStartTime + 180;
//                 if (gracePeriodActive) {
//                     const secondsLeft = Math.ceil((gameStartTime + 180 - frame) / 60);
//                     ctx.fillStyle = '#ffff00';
//                     ctx.font = 'bold 24px Arial';
//                     ctx.textAlign = 'center';
//                     ctx.fillText(`Get Ready! ${secondsLeft}`, canvas.width/2, 100);
                    
//                     ctx.fillStyle = '#ffffff';
//                     ctx.font = '14px Arial';
//                     ctx.fillText('Controls disabled during countdown', canvas.width/2, 130);
//                     ctx.textAlign = 'left';
//                 }
                
//                 updatePowerUpIndicator();
//             }
//         }
        
//         function updateUI() {
//             document.getElementById('score').textContent = score;
//             document.getElementById('lives').textContent = lives;
//         }
        
//         function updatePowerUpIndicator() {
//             let indicator = '';
//             if (activePowerUps.shield > 0) indicator += '🛡️ Shield ';
//             if (activePowerUps.speedBoost > 0) indicator += '⚡ Speed ';
//             if (activePowerUps.ghostMode > 0) indicator += '👻 Ghost ';
            
//             document.getElementById('powerUpIndicator').textContent = indicator;
//         }
        
//         function startGame() {
//             gameState = 'playing';
//             document.getElementById('startScreen').style.display = 'none';
//             document.getElementById('gameOver').style.display = 'none';
//             resetGame();
//             gameStartTime = frame;
//         }
        
//         function gameOver() {
//             gameState = 'gameOver';
//             document.getElementById('finalScore').textContent = score;
//             document.getElementById('gameOver').style.display = 'block';
//         }
        
//         function restartGame() {
//             document.getElementById('gameOver').style.display = 'none';
//             resetGame();
//             gameState = 'playing';
//         }
        
//         function resetGame() {
//             bat.y = 300;
//             bat.velocity = 0;
//             obstacles.length = 0;
//             powerUps.length = 0;
//             particles.length = 0;
//             score = 0;
//             lives = 3;
//             frame = 0;
//             gameStartTime = 0;
//             activePowerUps = { shield: 0, speedBoost: 0, ghostMode: 0 };
//             updateUI();
//         }
        
//         function jump() {
//             if (gameState === 'playing') {
//                 const gracePeriodActive = frame < gameStartTime + 180;
//                 if (!gracePeriodActive) {
//                     bat.velocity = bat.jumpStrength;
//                 }
//             }
//         }
        
//         // Event listeners
//         document.addEventListener('keydown', (e) => {
//             if (e.code === 'Space') {
//                 e.preventDefault();
//                 jump();
//             }
//         });
        
//         canvas.addEventListener('click', jump);
        
//         // Game loop
//         function gameLoop() {
//             updateGame();
//             render();
//             requestAnimationFrame(gameLoop);
//         }
        
//         // Start the game loop
//         gameLoop();
//     </script>
// </body>
// </html>
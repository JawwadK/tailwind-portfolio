import React, { useEffect, useRef, useState } from "react";

const SpaceShooter = () => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let enemySpawnTimer;

    // Game state
    let player = {
      x: 50,
      y: canvas.height / 2,
      width: 30,
      height: 20,
      speed: 5,
      bullets: [],
      health: 100,
    };

    let enemies = [];
    let particles = [];
    const keys = {};

    // Event listeners
    const handleKeyDown = (e) => {
      keys[e.key] = true;
      if (e.key === " " && gameStarted && !gameOver) {
        player.bullets.push({
          x: player.x + player.width,
          y: player.y + player.height / 2,
          width: 10,
          height: 4,
          speed: 7,
        });
      }
    };

    const handleKeyUp = (e) => {
      keys[e.key] = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // Game functions
    const movePlayer = () => {
      if (keys["ArrowUp"] && player.y > 0) player.y -= player.speed;
      if (keys["ArrowDown"] && player.y < canvas.height - player.height)
        player.y += player.speed;
    };

    const createParticles = (x, y, color) => {
      for (let i = 0; i < 5; i++) {
        particles.push({
          x,
          y,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 5,
          speedY: (Math.random() - 0.5) * 5,
          color,
          life: 1,
        });
      }
    };

    const spawnEnemy = () => {
      if (gameStarted && !gameOver) {
        const enemy = {
          x: canvas.width,
          y: Math.random() * (canvas.height - 20),
          width: 20,
          height: 20,
          speed: Math.random() * 2 + 2,
        };
        enemies.push(enemy);
      }
    };

    const checkCollisions = () => {
      // Bullet-enemy collisions
      player.bullets.forEach((bullet, bulletIndex) => {
        enemies.forEach((enemy, enemyIndex) => {
          if (
            bullet.x < enemy.x + enemy.width &&
            bullet.x + bullet.width > enemy.x &&
            bullet.y < enemy.y + enemy.height &&
            bullet.y + bullet.height > enemy.y
          ) {
            createParticles(enemy.x, enemy.y, "#ff4444");
            enemies.splice(enemyIndex, 1);
            player.bullets.splice(bulletIndex, 1);
            setScore((prev) => prev + 10);
          }
        });
      });

      // Player-enemy collisions
      enemies.forEach((enemy, index) => {
        if (
          player.x < enemy.x + enemy.width &&
          player.x + player.width > enemy.x &&
          player.y < enemy.y + enemy.height &&
          player.y + player.height > enemy.y
        ) {
          player.health -= 20;
          enemies.splice(index, 1);
          createParticles(enemy.x, enemy.y, "#ff8866");

          if (player.health <= 0) {
            setGameOver(true);
          }
        }
      });
    };

    const draw = () => {
      // Clear canvas
      ctx.fillStyle = "#0a192f";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      ctx.fillStyle = "#ffffff";
      for (let i = 0; i < 50; i++) {
        ctx.fillRect(
          Math.sin(Date.now() * 0.001 + i) * canvas.width + canvas.width,
          Math.cos(Date.now() * 0.001 + i) * canvas.height,
          2,
          2
        );
      }

      // Draw player
      ctx.fillStyle = "#64ffda";
      ctx.fillRect(player.x, player.y, player.width, player.height);

      // Draw bullets
      ctx.fillStyle = "#ffffff";
      player.bullets.forEach((bullet) => {
        ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
      });

      // Draw enemies
      ctx.fillStyle = "#ff4444";
      enemies.forEach((enemy) => {
        ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
      });

      // Draw particles
      particles.forEach((particle) => {
        ctx.fillStyle = `rgba(${particle.color}, ${particle.life})`;
        ctx.fillRect(particle.x, particle.y, particle.size, particle.size);
      });

      // Draw health bar
      ctx.fillStyle = "#64ffda";
      ctx.fillRect(10, 10, (player.health / 100) * 150, 10);
      ctx.strokeStyle = "#ffffff";
      ctx.strokeRect(10, 10, 150, 10);

      // Draw score
      ctx.fillStyle = "#ffffff";
      ctx.font = "20px Arial";
      ctx.fillText(`Score: ${score}`, canvas.width - 100, 30);
    };

    const update = () => {
      if (!gameStarted || gameOver) return;

      movePlayer();

      // Update bullets
      player.bullets.forEach((bullet, index) => {
        bullet.x += bullet.speed;
        if (bullet.x > canvas.width) {
          player.bullets.splice(index, 1);
        }
      });

      // Update enemies
      enemies.forEach((enemy, index) => {
        enemy.x -= enemy.speed;
        if (enemy.x + enemy.width < 0) {
          enemies.splice(index, 1);
        }
      });

      // Update particles
      particles.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.life -= 0.02;
        if (particle.life <= 0) {
          particles.splice(index, 1);
        }
      });

      checkCollisions();
      draw();
      animationFrameId = requestAnimationFrame(update);
    };

    // Start game loop
    const startGame = () => {
      setGameStarted(true);
      setGameOver(false);
      setScore(0);
      player.health = 100;
      enemies = [];
      particles = [];
      player.bullets = [];
      player.x = 50;
      player.y = canvas.height / 2;

      enemySpawnTimer = setInterval(spawnEnemy, 2000);
      update();
    };

    // Cleanup
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      cancelAnimationFrame(animationFrameId);
      clearInterval(enemySpawnTimer);
    };
  }, [gameStarted, gameOver]);

  return (
    <section id="game" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-center font-bold text-4xl mb-8">
          Space Shooter
          <hr className="w-6 h-1 mx-auto my-4 bg-cyan-900 border-0 rounded-full" />
        </h1>

        <div className="text-center mb-4">
          {!gameStarted ? (
            <div className="mb-4">
              <h2 className="text-xl mb-4">Controls:</h2>
              <p className="mb-2">↑ / ↓ - Move Up/Down</p>
              <p className="mb-4">Space - Shoot</p>
              <button
                onClick={() => setGameStarted(true)}
                className="px-6 py-2 bg-cyan-900 text-white rounded-lg hover:bg-cyan-800 transition-colors"
              >
                Start Game
              </button>
            </div>
          ) : gameOver ? (
            <div className="mb-4">
              <h2 className="text-2xl mb-2">Game Over!</h2>
              <p className="text-xl mb-4">Final Score: {score}</p>
              <button
                onClick={() => setGameStarted(true)}
                className="px-6 py-2 bg-cyan-900 text-white rounded-lg hover:bg-cyan-800 transition-colors"
              >
                Play Again
              </button>
            </div>
          ) : null}
        </div>

        <div className="relative w-full" style={{ height: "400px" }}>
          <canvas
            ref={canvasRef}
            width={800}
            height={400}
            className="absolute top-0 left-0 w-full h-full border-2 border-cyan-900 rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default SpaceShooter;

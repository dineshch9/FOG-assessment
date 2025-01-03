import React, { useEffect, useRef } from "react";


const FallingSquares = () => {
  const canvasRef = useRef(null);
  const numSquares = 30; // Increase number for more squares
  const trailLength = 10; // Adjust for longer trails
  const colorTransitionSpeed = 0.02; // Smoother color transitions
  const gravity = 0.1; // Simulates downward acceleration
  const bounceFactor = -0.6; // Rebound effect when hitting the bottom

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Random RGB Color Generator
    const randomColor = () =>
      Array(3)
        .fill()
        .map(() => Math.floor(Math.random() * 255));

    // Interpolate color towards a target color
    const interpolateColor = (current, target, speed) =>
      current.map((c, i) => c + (target[i] - c) * speed);

    // Square structure with physics
    const squares = Array(numSquares)
      .fill()
      .map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2, // Random horizontal velocity
        vy: Math.random() * 2, // Random downward velocity
        color: randomColor(),
        trail: [],
      }));

    let targetColor = randomColor();

    const drawSquare = (square) => {
      square.trail.forEach((pos, i) => {
        const trailOpacity = (trailLength - i) / trailLength;
        ctx.fillStyle = `rgba(${square.color.join(",")}, ${trailOpacity})`;
        ctx.fillRect(pos.x, pos.y, 10, 10); // Fixed size for squares
      });
      ctx.fillStyle = `rgb(${square.color.join(",")})`;
      ctx.fillRect(square.x, square.y, 10, 10);
    };

    const updateSquare = (square) => {
      square.trail.unshift({ x: square.x, y: square.y });
      if (square.trail.length > trailLength) square.trail.pop();

      // Update position using velocity
      square.x += square.vx;
      square.y += square.vy;

      // Apply gravity
      square.vy += gravity;

      // Handle bouncing off edges
      if (square.y + 10 > canvas.height) {
        square.y = canvas.height - 10;
        square.vy *= bounceFactor; // Reverse velocity and dampen
      }
      if (square.x + 10 > canvas.width || square.x < 0) {
        square.vx *= -1; // Reverse horizontal velocity
      }

      // Update color
      square.color = interpolateColor(square.color, targetColor, colorTransitionSpeed);
    };

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      squares.forEach((square) => {
        updateSquare(square);
        drawSquare(square);
      });

      // Update target color randomly when it's close to the current color
      if (squares[0].color.every((c, i) => Math.abs(c - targetColor[i]) < 5)) {
        targetColor = randomColor();
      }

      requestAnimationFrame(loop);
    };

    requestAnimationFrame(loop);

    return () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, []);

  return (
    <div className="container">
      <canvas ref={canvasRef} className="canvas" />
    </div>
  );
};

export default FallingSquares;

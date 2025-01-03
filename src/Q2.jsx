import React, { useEffect, useRef } from "react";

const FallingSquares = () => {
  const canvasRef = useRef(null);
  const numSquares = 30; 
  const trailLength = 30; 
  const colorTransitionSpeed = 0.02; 
  const gravity = 0.1; 
  const columnWidth = 50; 

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Generate a random RGB color
    const randomColor = () =>
      Array(3)
        .fill()
        .map(() => Math.floor(Math.random() * 255));

    // Interpolate color towards a target color
    const interpolateColor = (current, target, speed) =>
      current.map((c, i) => c + (target[i] - c) * speed);

    // Calculate the number of columns
    const numColumns = Math.floor(canvas.width / columnWidth);

    // Initialize squares with random positions, velocities, and colors
    const squares = Array(numSquares)
      .fill()
      .map(() => ({
        x: Math.floor(Math.random() * numColumns) * columnWidth + columnWidth / 2 - 5, // Centered in column
        y: Math.random() * canvas.height,
        vy: Math.random() * 2 + 1, // Random vertical velocity
        color: randomColor(),
        trail: [],
      }));

    let targetColor = randomColor();

    const drawGrid = () => {
      ctx.strokeStyle = "rgba(200, 200, 200, 0.5)";
      ctx.lineWidth = 1;

      // Draw vertical lines
      for (let i = 0; i <= canvas.width; i += columnWidth) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
      }

      // Draw horizontal lines (optional)
      for (let i = 0; i <= canvas.height; i += columnWidth) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.stroke();
      }
    };

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
      square.y += square.vy;

      // Respawn square when it hits the bottom
      if (square.y > canvas.height) {
        square.y = -10; // Start above the canvas
        square.x = Math.floor(Math.random() * numColumns) * columnWidth + columnWidth / 2 - 5; // Centered in a random column
        square.vy = Math.random() * 2 + 1; // Random speed
        square.trail = []; // Reset trail
        square.color = randomColor(); // New random color
      }

      // Update color
      square.color = interpolateColor(square.color, targetColor, colorTransitionSpeed);
    };

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the grid
      drawGrid();

      squares.forEach((square) => {
        updateSquare(square);
        drawSquare(square);
      });

      // Change target color randomly when close to the current color
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

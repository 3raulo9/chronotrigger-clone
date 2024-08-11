import React, { useState, useEffect } from 'react';
import './Game.css';  // Assuming you have some basic CSS for positioning

function Game() {
  const [position, setPosition] = useState({ x: 100, y: 100 });

  const handleKeyPress = (event) => {
    const { x, y } = position;
    switch(event.key) {
      case 'ArrowUp': setPosition({ x, y: y - 10 }); break;
      case 'ArrowDown': setPosition({ x, y: y + 10 }); break;
      case 'ArrowLeft': setPosition({ x: x - 10, y }); break;
      case 'ArrowRight': setPosition({ x: x + 10, y }); break;
      default: break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [position]);

  return (
    <div className="game" style={{ backgroundImage: `url('/background.jpg')` }}>
      <div
        className="character"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      >
        {/* You can use a sprite here */}
        <img src="/character.png" alt="character" />
      </div>
    </div>
  );
}

export default Game;

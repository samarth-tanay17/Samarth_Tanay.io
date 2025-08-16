import React, { useState } from 'react';
import './photo.css';
import profile from './assets/profile.jpg'; // place your local image at src/assets/profile.jpg

export default function PhotoPanel() {
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const handleMove = (e) => {
    const card = e.currentTarget.querySelector('.idCard');
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // 0 -> w
    const y = e.clientY - rect.top;  // 0 -> h
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const ry = ((x - midX) / midX) * 8; // rotateY
    const rx = -((y - midY) / midY) * 8; // rotateX
    setTilt({ rx, ry });
  };

  const reset = () => setTilt({ rx: 0, ry: 0 });

  return (
    <div className="photoWrapper" onMouseMove={handleMove} onMouseLeave={reset}>
      <div className="lanyard" aria-hidden="true" />
      <div
        className="idCard"
        style={{ '--rx': `${tilt.rx}deg`, '--ry': `${tilt.ry}deg` }}
      >
        <div className="cardChrome">
          <div className="cardTopBar">
            <span className="logo">ST</span>
          </div>
          <div className="photoFrame">
            <img src={profile} alt="Profile" className="photo" />
          </div>
        </div>
      </div>
      <div className="hint">[Samarth Tanay]</div>
    </div>
  );
}

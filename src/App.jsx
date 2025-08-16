import React, { useState, useEffect } from 'react';
import './layout.css';
import Terminal from './Terminal.jsx';
import PhotoPanel from './PhotoPanel.jsx';

export default function App() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="appShell">
      <header className="siteHeader">
        <div className="name">Samarth Tanay</div>
        <div className="tagline">Software & AI Engineer</div>
      </header>
      <div className="layout">
        <div className="leftPane">
          <PhotoPanel />
        </div>
        <div className="rightPane">
          <Terminal />
        </div>
      </div>
      <footer className="siteFooter">
        <div className="leftStatus">samarth@portfolio:~$</div>
        <div className="rightClock">{now.toLocaleString()}</div>
      </footer>
    </div>
  );
}

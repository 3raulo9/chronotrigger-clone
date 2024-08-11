import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Game from './components/Game';  // Correct path since Game.js is directly under src

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Game />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

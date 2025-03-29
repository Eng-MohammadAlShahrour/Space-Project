import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [spaceDebris, setSpaceDebris] = useState([]);
  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/space-debris')
      .then(response => response.json())
      .then(data => setSpaceDebris(data.data))
      .catch(error => console.log('Error fetching data:', error));
  }, []);
  return (
    <div className="App">
      <h1>Space Debris Information</h1>
      <ul>
        {spaceDebris.map(debris => (
          <li key={debris.id}>
            <h3>{debris.attributes.name}</h3>
            <p><span>Mass:</span> {debris.attributes.mass} kg</p>
            <p><span>Mission:</span> {debris.attributes.mission}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

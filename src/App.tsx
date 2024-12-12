import React from 'react';
import { GameCanvas } from './components/GameCanvas';
import { LocationDetails } from './components/LocationDetails';
import { useGameLogic } from './hooks/useGameLogic';
import { locations, roads } from './data/locations';

function App() {
  const gameState = useGameLogic(locations, roads);
  const currentLocation = locations.find(loc => loc.id === gameState.showingLocation);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-[1fr_500px] gap-8">
        <LocationDetails 
          location={currentLocation}
          className="h-[calc(100vh-4rem)]"
        />
        <div>
          <GameCanvas
            width={500}
            height={500}
            locations={locations}
            roads={roads}
            gameState={gameState}
          />
          <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-gray-800 mb-2">Controls</h3>
            <div className="text-sm text-gray-600 space-y-1">
              <p>⬆️ ⬇️ ⬅️ ➡️ - Move along the career path</p>
              <p>🖱️ Click - Select location</p>
              <p>SPACE - View/hide location details</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
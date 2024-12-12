import { useState, useCallback, useEffect } from 'react';
import { Location, Road, GameState } from '../types/game';

export function useGameLogic(locations: Location[], roads: Road[]) {
  const [gameState, setGameState] = useState<GameState>({
    playerX: locations[0].x,
    playerY: locations[0].y,
    showingLocation: null,
    currentRoad: null,
    hoveredLocation: null,
  });

  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    const speed = 5;
    let newX = gameState.playerX;
    let newY = gameState.playerY;

    switch (e.key) {
      case 'ArrowLeft':
        newX -= speed;
        break;
      case 'ArrowRight':
        newX += speed;
        break;
      case 'ArrowUp':
        newY -= speed;
        break;
      case 'ArrowDown':
        newY += speed;
        break;
      case ' ':
        const location = locations.find(loc => 
          Math.abs(loc.x - gameState.playerX) < 20 && 
          Math.abs(loc.y - gameState.playerY) < 20
        );
        if (location) {
          setGameState(prev => ({
            ...prev,
            showingLocation: prev.showingLocation === location.id ? null : location.id
          }));
        }
        return;
    }

    // Check if new position is on a road
    const isOnRoad = roads.some(road => {
      return road.points.some((point, i) => {
        if (i === 0) return false;
        const prevPoint = road.points[i - 1];
        
        const d = distanceToLineSegment(
          prevPoint[0], prevPoint[1],
          point[0], point[1],
          newX, newY
        );
        return d < 15;
      });
    });

    if (isOnRoad) {
      setGameState(prev => ({
        ...prev,
        playerX: newX,
        playerY: newY
      }));
    }
  }, [gameState, locations, roads]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  const handleLocationClick = useCallback((locationId: string) => {
    const location = locations.find(loc => loc.id === locationId);
    if (location) {
      setGameState(prev => ({
        ...prev,
        playerX: location.x,
        playerY: location.y,
        showingLocation: prev.showingLocation === locationId ? null : locationId
      }));
    }
  }, [locations]);

  const handleLocationHover = useCallback((locationId: string | null) => {
    setGameState(prev => ({
      ...prev,
      hoveredLocation: locationId
    }));
  }, []);

  return {
    ...gameState,
    onLocationClick: handleLocationClick,
    onLocationHover: handleLocationHover,
  };
}

// Helper function to calculate distance from point to line segment
function distanceToLineSegment(x1: number, y1: number, x2: number, y2: number, px: number, py: number) {
  const A = px - x1;
  const B = py - y1;
  const C = x2 - x1;
  const D = y2 - y1;

  const dot = A * C + B * D;
  const len_sq = C * C + D * D;
  let param = -1;

  if (len_sq !== 0) {
    param = dot / len_sq;
  }

  let xx, yy;

  if (param < 0) {
    xx = x1;
    yy = y1;
  } else if (param > 1) {
    xx = x2;
    yy = y2;
  } else {
    xx = x1 + param * C;
    yy = y1 + param * D;
  }

  const dx = px - xx;
  const dy = py - yy;
  return Math.sqrt(dx * dx + dy * dy);
}
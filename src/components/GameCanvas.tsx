import React, { useEffect, useRef, MouseEvent } from 'react';
import { Location, Road, GameState } from '../types/game';

interface GameCanvasProps {
  width: number;
  height: number;
  locations: Location[];
  roads: Road[];
  gameState: GameState & {
    onLocationClick: (locationId: string) => void;
    onLocationHover: (locationId: string | null) => void;
  };
}

export function GameCanvas({ width, height, locations, roads, gameState }: GameCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw roads
    ctx.strokeStyle = '#E5E7EB';
    ctx.lineWidth = 20;
    roads.forEach(road => {
      ctx.beginPath();
      ctx.moveTo(road.points[0][0], road.points[0][1]);
      road.points.slice(1).forEach(point => {
        ctx.lineTo(point[0], point[1]);
      });
      ctx.stroke();
    });

    // Draw locations
    locations.forEach(location => {
      const isSelected = location.id === gameState.showingLocation;
      const isHovered = location.id === gameState.hoveredLocation;
      
      ctx.strokeStyle = isHovered ? '#4F46E5' : '#6366F1';
      ctx.lineWidth = isHovered ? 3 : 2;
      ctx.fillStyle = isSelected ? '#6366F1' : '#FFFFFF';
      
      // Draw location box
      ctx.beginPath();
      ctx.rect(location.x - 15, location.y - 15, 30, 30);
      ctx.fill();
      ctx.stroke();

      // Draw location title on hover
      if (isHovered) {
        ctx.font = '14px sans-serif';
        ctx.fillStyle = '#1F2937';
        ctx.textAlign = 'center';
        ctx.fillText(location.title, location.x, location.y - 25);
      }
    });

    // Draw player
    ctx.fillStyle = '#3B82F6';
    ctx.beginPath();
    ctx.arc(gameState.playerX, gameState.playerY, 8, 0, Math.PI * 2);
    ctx.fill();
  }, [width, height, locations, roads, gameState]);

  const handleMouseMove = (e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const hoveredLocation = locations.find(loc => 
      Math.abs(loc.x - x) < 20 && Math.abs(loc.y - y) < 20
    );

    gameState.onLocationHover(hoveredLocation?.id || null);
  };

  const handleMouseClick = (e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const clickedLocation = locations.find(loc => 
      Math.abs(loc.x - x) < 20 && Math.abs(loc.y - y) < 20
    );

    if (clickedLocation) {
      gameState.onLocationClick(clickedLocation.id);
    }
  };

  const handleMouseLeave = () => {
    gameState.onLocationHover(null);
  };

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className="bg-white rounded-lg shadow-md cursor-pointer"
      onMouseMove={handleMouseMove}
      onClick={handleMouseClick}
      onMouseLeave={handleMouseLeave}
    />
  );
}
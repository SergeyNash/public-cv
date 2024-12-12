import React from 'react';
import { Location } from '../types/game';

interface LocationInfoProps {
  location: Location | null;
  className?: string;
}

export function LocationInfo({ location, className = '' }: LocationInfoProps) {
  if (!location) return null;

  return (
    <div className={`bg-white p-6 rounded-lg shadow-md ${className}`}>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{location.title}</h3>
      <p className="text-gray-600">{location.description}</p>
    </div>
  );
}
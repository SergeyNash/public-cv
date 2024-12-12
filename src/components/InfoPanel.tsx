import React from 'react';
import { MapIcon } from 'lucide-react';

interface InfoPanelProps {
  className?: string;
}

export function InfoPanel({ className = '' }: InfoPanelProps) {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-md ${className}`}>
      <div className="flex items-center gap-2 mb-6">
        <MapIcon className="w-6 h-6 text-indigo-600" />
        <h2 className="text-2xl font-bold text-gray-900">Career Path Explorer</h2>
      </div>

      <div className="space-y-6">
        <section>
          <h3 className="font-semibold text-lg text-gray-800 mb-2">About</h3>
          <p className="text-gray-600">
            Explore a journey through different career stages. Navigate the path using arrow keys and
            press SPACE to view details about each position.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-lg text-gray-800 mb-2">Controls</h3>
          <ul className="space-y-2 text-gray-600">
            <li>⬆️ ⬇️ ⬅️ ➡️ - Move character</li>
            <li>SPACE - View/hide location details</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-lg text-gray-800 mb-2">Legend</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <span className="text-gray-600">Current Position</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-300 rounded"></div>
              <span className="text-gray-600">Career Path</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-indigo-500 rounded"></div>
              <span className="text-gray-600">Career Milestone</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
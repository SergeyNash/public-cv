import React from 'react';
import { Location } from '../types/game';
import { CodeBlock } from './CodeBlock';
import { Section } from './Section';

interface LocationDetailsProps {
  location: Location | null;
  className?: string;
}

export function LocationDetails({ location, className = '' }: LocationDetailsProps) {
  if (!location) {
    return (
      <div className={`bg-white p-6 rounded-lg shadow-md ${className}`}>
        <p className="text-gray-500 italic">Select a location to view details</p>
      </div>
    );
  }

  return (
    <div className={`bg-white p-6 rounded-lg shadow-md overflow-y-auto ${className}`}>
      <h2 className="text-3xl font-bold text-gray-900 mb-2">{location.title}</h2>
      <p className="text-lg text-gray-600 mb-6">{location.description}</p>

      {location.sections.map((section, index) => (
        <Section key={index} title={section.title}>
          <p className="text-gray-700">{section.content}</p>
        </Section>
      ))}

      {location.techStack && (
        <Section title="Technology Stack">
          <div className="flex flex-wrap gap-2">
            {location.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </Section>
      )}

      {location.achievements && (
        <Section title="Key Achievements">
          <ul className="list-disc list-inside space-y-2">
            {location.achievements.map((achievement, index) => (
              <li key={index} className="text-gray-700">{achievement}</li>
            ))}
          </ul>
        </Section>
      )}
    </div>
  );
}
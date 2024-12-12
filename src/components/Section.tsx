import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export function Section({ title, children }: SectionProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">
        {title}
      </h2>
      <div className="prose prose-gray max-w-none">
        {children}
      </div>
    </div>
  );
}
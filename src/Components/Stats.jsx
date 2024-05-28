import React from 'react';

function StatsCard({ title, stat }) {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-400 hover:text-white duration-300">
      <h4 className="text-xl font-medium text-gray-800 mb-2">{title}</h4>
      <span className="text-3xl font-bold text-gray-900">{stat}</span>
    </div>
  );
}

export default function Stats() {
  return (
    <div className="my-16">
      <h2 className="text-4xl font-bold text-center mb-12">Our Achievements</h2>
      <div className="flex flex-wrap justify-center gap-8">
        <StatsCard title="Years Of Experience" stat="16" />
        <StatsCard title="Consultants" stat="40" />
        <StatsCard title="Services" stat="10+" />
        <StatsCard title="Products" stat="30+" />
      </div>
    </div>
  );
}

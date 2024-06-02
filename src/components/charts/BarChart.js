// src/components/charts/BarChart.js
import React from 'react';

const BarChart = ({ data }) => {
  const portCounts = data.reduce((counts, item) => {
    counts[item.dest_port] = (counts[item.dest_port] || 0) + 1;
    return counts;
  }, {});

  const topPorts = Object.entries(portCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h2 className="text-white text-lg mb-2">Top 5 Destination Ports</h2>
      <div>
        {topPorts.map(([port, count]) => (
          <div key={port} className="flex items-center mb-2">
            <div className="w-16">{port}</div>
            <div className="bg-blue-500 h-8 w-px mr-2"></div>
            <div>{count}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChart;

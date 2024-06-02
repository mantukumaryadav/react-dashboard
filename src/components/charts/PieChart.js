// src/components/charts/PieChart.js
import React from 'react';

const PieChart = ({ data }) => {
  const protocolCounts = data.reduce((counts, item) => {
    counts[item.proto] = (counts[item.proto] || 0) + 1;
    return counts;
  }, {});

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h2 className="text-white text-lg mb-2">Protocol Distribution</h2>
      <div>
        {Object.entries(protocolCounts).map(([protocol, count]) => (
          <div key={protocol} className="flex items-center mb-2">
            <div className="w-6 h-6 rounded-full mr-2" style={{ backgroundColor: protocol === 'TCP' ? '#4299E1' : (protocol === 'UDP' ? '#48BB78' : '#ED64A6') }}></div>
            <div>{protocol}: {count}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChart;

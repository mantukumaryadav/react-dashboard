// src/components/charts/StackedBarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';

const StackedBarChart = ({ data }) => {
  const alertCounts = data.reduce((counts, item) => {
    counts[item.alert.severity] = (counts[item.alert.severity] || 0) + 1;
    return counts;
  }, {});

  const chartData = {
    labels: Object.keys(alertCounts),
    datasets: [
      {
        label: 'Alerts by Severity',
        data: Object.values(alertCounts),
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgba(255, 205, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h2 className="text-white text-lg mb-2">Alerts by Severity</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default StackedBarChart;

// src/components/charts/LineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ data }) => {
  const timestamps = data.map(item => item.timestamp);
  const alertsPerDay = timestamps.reduce((counts, timestamp) => {
    const day = timestamp.split('T')[0];
    counts[day] = (counts[day] || 0) + 1;
    return counts;
  }, {});

  const chartData = {
    labels: Object.keys(alertsPerDay),
    datasets: [
      {
        label: 'Alerts per Day',
        data: Object.values(alertsPerDay),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h2 className="text-white text-lg mb-2">Alerts Over Time</h2>
      <Line data={chartData} />
    </div>
  );
};

export default LineChart;

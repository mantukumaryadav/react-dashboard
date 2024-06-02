// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Fetch dummy data
      const response = await axios.get('/dummy-data.json');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Graph 1</h2>
          <LineChart width={400} height={300} data={data}>
            <XAxis dataKey="timestamp" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="src_port" stroke="#8884d8" />
          </LineChart>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Graph 2</h2>
          <LineChart width={400} height={300} data={data}>
            <XAxis dataKey="timestamp" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="dest_port" stroke="#82ca9d" />
          </LineChart>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Graph 3</h2>
          <LineChart width={400} height={300} data={data}>
            <XAxis dataKey="timestamp" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="proto" stroke="#ffc658" />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

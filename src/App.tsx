// import React, { useEffect, useState } from 'react';
// import { fetchData } from './components/services/api';
// import { ApiResponse } from './components/types/data';
// import BarChart from './components/BarChart';
// import PieChart from './components/PieChart';
// import LineChart from './components/LineChart';
// import Table from './components/Table';
// import Summary from './components/Summary';
import React from 'react';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar/>
      <Dashboard />
      
    </div>
  );
};

export default App;

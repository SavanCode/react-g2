import React from 'react';
import './style.css';
import Line from './components/Line';
import './components/circles';
import BarChart from './components/Bar';
import AnotherBar from './components/Bar2';

const lineStyles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

export default function App() {
  return (
    <>
      <AnotherBar />
      <div style={lineStyles}>
        <h2>This is the Line Graph</h2>
        <Line />
      </div>
      <BarChart />
    </>
  );
}

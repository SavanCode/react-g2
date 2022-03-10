import React from 'react';
import './style.css';
import Line from './components/Line';
import './components/circles';
import BarChart from './components/Bar';
import AnotherBar from './components/Bar2';
import Bar3 from './components/Bar3';
import Pie from './components/Pie';
import Circle from './components/Circle';
import Circle2 from './components/Circle/circle2';
import Map from './components/Map';
import Areachart from './components/Areachart';
import Multipleviewchart from './components/MultipleView';

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
      <Pie />
      <Circle />
      <Circle2 />
      <Bar3 />
      <Map />
      <Areachart />
      <Multipleviewchart />
    </>
  );
}

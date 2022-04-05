import React from 'react';
import './style.css';
import Line from './components/Line';
import './components/circles';
import BarChart from './components/Bar';
import AnotherBar from './components/Bar2';
import Bar3 from './components/Bar3';
import Bar4 from './components/Bar4';
import Pie from './components/Pie';
import Circle from './components/Circle';
import Circle2 from './components/Circle/circle2';
// import Map from './components/Map';
import Areachart from './components/AreaChart';
import Multipleviewchart from './components/MultipleView';
import CircleBar from './components/CircleBar';
import MultiAreaChart from './components/MultiAreaChart';
import BarSample from './components/BarSample';

const lineStyles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

export default function App() {
  let data = [
    { type: '未知', value: 654, percent: 0.02 },
    { type: '17 岁以下', value: 654, percent: 0.02 },
    { type: '18-24 岁', value: 4400, percent: 0.2 },
    { type: '25-29 岁', value: 5300, percent: 0.24 },
    { type: '30-39 岁', value: 6200, percent: 0.28 },
    { type: '40-49 岁', value: 3300, percent: 0.14 },
    { type: '50 岁以上', value: 1500, percent: 0.06 },
  ];

  const itemStyle = {
    width: '100vw',
    height: '50vh',
    border: '1px solid #ccc',
  };
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
      <Bar4 />
      {/* <Map /> */}
      <Areachart />
      <Multipleviewchart />
      <CircleBar />
      <MultiAreaChart />
      component Sample
      <BarSample
        data={data}
        itemStyle={itemStyle}
        containerName="BarSample"
        tooltipTitle="销售额(万)"
        x="type"
        y="value"
        contentExtra="percent"
        xLabelColor="black"
        barTextStyle={{ textAlign: 'center', fill: 'red' }}
      />
    </>
  );
}

import React, { Component } from 'react';
import { Chart } from '@antv/g2';
class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pieData: [
        { item: '事例一', count: 40, percent: 0.4 },
        { item: '事例二', count: 21, percent: 0.21 },
        { item: '事例三', count: 17, percent: 0.17 },
        { item: '事例四', count: 13, percent: 0.13 },
        { item: '事例五', count: 9, percent: 0.09 },
      ],
    };
  }
  componentDidMount() {
    this.readPieChart();
  }

  readPieChart() {
    const chart = new Chart({
      container: 'container2',
      autoFit: true,
    });
    chart.data(this.state.pieData);

    chart.coordinate('theta', {
      radius: 0.85,
    });

    chart.scale('percent', {
      formatter: (val) => {
        val = val * 100 + '%';
        return val;
      },
    });
    chart.tooltip({
      showTitle: false,
      showMarkers: false,
    });
    chart.axis(false); // 关闭坐标轴
    const interval = chart
      .interval()
      .adjust('stack')
      .position('percent')
      .color('item')
      .label('percent', {
        offset: -40,
        style: {
          textAlign: 'center',
          shadowBlur: 2,
          shadowColor: 'rgba(0, 0, 0, .45)',
          fill: '#fff',
        },
      })
      .tooltip('item*percent', (item, percent) => {
        percent = percent * 100 + '%';
        return {
          name: item,
          value: percent,
        };
      })
      .style({
        lineWidth: 1,
        stroke: '#fff',
      });
    chart.interaction('element-single-selected');
    chart.render();

    // 默认选择
    // interval.elements[0].setState('selected', true);
  }
  render() {
    const itemStyle = {
      width: '100vw',
      height: '50vh',
      border: '1px solid #ccc',
    };
    const itemStyle3 = {
      width: '100vw',
      height: '50vh',
      border: '1px solid #ccc',
    };
    const divStyle = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    };
    return (
      <div style={divStyle}>
        <div style={itemStyle} id="container2"></div>
      </div>
    );
  }
}

export default Hello;

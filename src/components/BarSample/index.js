import React, { Component, useEffect } from 'react';
import { Chart } from '@antv/g2';

const BarSample = ({
  data,
  itemStyle,
  containerName,
  tooltipTitle,
  x,
  y,
  contentExtra,
}) => {
  useEffect(() => {
    readHistogram(data);
  });

  function readHistogram(data) {
    const chart = new Chart({
      container: containerName,
      autoFit: true,
      height: 500,
      padding: [50, 20, 50, 20],
    });
    chart.data(data);
    chart.scale(y, {
      alias: tooltipTitle,
    });

    chart.axis(x, {
      tickLine: {
        alignTick: false,
      },
    });
    chart.axis(y, false);

    chart.tooltip({
      showMarkers: false,
    });
    chart.interval().position(x + '*' + y);
    chart.interaction('element-active');

    // 添加文本标注
    data.forEach((item) => {
      chart
        .annotation()
        .text({
          position: [item[x], item[y]],
          content: item[y],
          style: {
            textAlign: 'center',
          },
          offsetY: -30,
        })
        .text({
          position: [item[x], item[y]],
          content: contentExtra
            ? (item[contentExtra] * 100).toFixed(0) + '%'
            : '',
          style: {
            textAlign: 'center',
          },
          offsetY: -12,
        });
    });
    chart.render();
  }
  return <div style={itemStyle} id={containerName}></div>;
};

export default BarSample;

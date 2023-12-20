import React from 'react';
import Chart from 'react-apexcharts';

const LoadingBar = ({ data, title }) => {
  const options = {
    chart: {
      height: 350,
      type: 'radialBar',
      foreColor: '#fff',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '70%',
        },
      },
    },
    labels: [title],
  };

  let series = [
    parseFloat(data)
  ];

  return (
    <div>
      <Chart options={options} series={series} type="radialBar" width="195" />
    </div>
  );
};

export default LoadingBar;

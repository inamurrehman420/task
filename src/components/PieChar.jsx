import React from 'react';
import 'chart.js/auto';
import { Doughnut, Pie } from 'react-chartjs-2';

const data = {
  labels: ['A', 'B', 'C', 'D'],
  datasets: [
    {
      label: 'Risk Score Distribution',
      data: [45.7, 51.5, 23.2, 51.5],
      backgroundColor: ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'],
      hoverBackgroundColor: ['#0077FE', '#00B49F', '#FFAA28', '#FF7042']
    }
  ]
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        position: 'bottom'
      }
    }
  },
  legend: {
    position: 'left'
  },
  tooltips: {
    callbacks: {
      label: function(tooltipItem, data) {
        const dataset = data.datasets[tooltipItem.datasetIndex];
        const currentValue = dataset.data[tooltipItem.index];
        return ` ${currentValue}%`;
      }
    }
  }
};

const RiskPieChart = () => (
    <div style={{ height: '400px', width: '400px' }}>
      <Doughnut data={data} options={options} />
    </div>
);

export default RiskPieChart;

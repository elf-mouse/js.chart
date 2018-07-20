import {
  chartColors,
  randomScalingFactor
} from './utils';

let labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
let datasets = [{
  label: 'My First dataset',
  backgroundColor: chartColors.red,
  borderColor: chartColors.red,
  data: [
    randomScalingFactor(),
    randomScalingFactor(),
    randomScalingFactor(),
    randomScalingFactor(),
    randomScalingFactor(),
    randomScalingFactor(),
    randomScalingFactor()
  ],
  fill: false,
}, {
  label: 'My Second dataset',
  fill: false,
  backgroundColor: chartColors.blue,
  borderColor: chartColors.blue,
  data: [
    randomScalingFactor(),
    randomScalingFactor(),
    randomScalingFactor(),
    randomScalingFactor(),
    randomScalingFactor(),
    randomScalingFactor(),
    randomScalingFactor()
  ],
}];

console.log('datasets', datasets);

var config = {
  type: 'line',
  data: {
    labels,
    datasets
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: 'Chart.js Line Chart'
    },
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Month'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Value'
        }
      }]
    }
  }
};

export default config;

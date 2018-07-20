import Chart from 'chart.js';
import config from './config';

var ctx = document.getElementById('myChart').getContext("2d");;
new Chart(ctx, config);

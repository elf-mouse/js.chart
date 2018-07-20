const chartColors = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)'
};

const utils = {
  _seed: 0,
  srand(seed) {
    this._seed = seed;
  },
  rand(min, max) {
    var seed = this._seed;
    min = min === undefined ? 0 : min;
    max = max === undefined ? 1 : max;
    this._seed = (seed * 9301 + 49297) % 233280;
    return min + (this._seed / 233280) * (max - min);
  }
}

const randomScalingFactor = () => {
  return Math.round(utils.rand(0, 100));
}

utils.srand(Date.now());

export {
  chartColors,
  randomScalingFactor
};

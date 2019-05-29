const jquery = require('jquery');
const d3 = require('d3');
window.$ = window.jQuery = jquery;
window.d3 = d3;

import './index.scss';
import radialLineChart from './src/components/radialLineChart/radialLineChart';
import slider from './src/components/slider/slider';
import barChart from './src/components/barChart/barChart';

$(document).ready(function() {
  /**
   * @description render markup
   */
  $('#root').prepend(`
  <div class="data-section">
    ${barChart()}
    ${radialLineChart()}
  </div>
  ${slider()}
`);
});

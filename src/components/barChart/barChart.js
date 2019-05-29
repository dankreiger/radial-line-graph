import './barChart.scss';

const barChart = () => `<div class="characteristics">
<div class="charts">
  <div class="chart chart--dev">
    <ul class="chart--horiz">
      <li class="chart__bar puppies active" data-bar="puppies"">
        <span class="chart__label">
          Puppies
        </span>
      </li>
      <li class="chart__bar cats" data-bar="cats" ">
        <span class="chart__label">
          Cats
        </span>
      </li>
      <li class="chart__bar corporations" data-bar="corporations"">
        <span class="chart__label">
          Corporations
        </span>
      </li>
    </ul>
  </div>
</div>
</div>
`;

export default barChart;

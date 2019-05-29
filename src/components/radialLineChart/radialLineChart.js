import "./radialLineChart.scss";
import { puppiesImage } from "../../../data/sampleImages";

const radialLineChart = () => `
  <svg width="500" height="500">
  <defs id="mdef">
    <pattern id="image" x="0" y="0" height="100%" width="100%">
      <image x="0" y="0" width="250" height="250" xlink:href="${puppiesImage}"></image>
    </pattern>
  </defs>
  </svg>
`;

export default radialLineChart;

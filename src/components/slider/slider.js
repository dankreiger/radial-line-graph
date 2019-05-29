import "./slider.scss";

const slider = () => `
<div class="slider">
<input class="input-track" type="range" min="0" max="360" value="0" />
<output for="fader" id="car"><i class="fas fa-car-side"></i></output>
<div class="road"></div>
</div>`;

export default slider;

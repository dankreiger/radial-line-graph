export const calcBarWidth = (currentItem, currentLabel, sliderValue) => ({
  width: `calc(${(currentItem[Math.floor((sliderValue / 360) * 20)] / 20) *
    100}%)`
});

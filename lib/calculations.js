export const calcBarWidth = (currentItem, currentLabel, sliderValue) => ({
  width: `calc(${(currentItem[Math.floor((sliderValue / 360) * 10)] / 20) *
    100}% + ${currentLabel.width()}px)`
});

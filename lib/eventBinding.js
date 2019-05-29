import {
  catImage,
  puppiesImage,
  setSvgImage,
  corporationsImage
} from "../data/sampleImages";
import { calcBarWidth } from "./calculations";
import { puppies, cats, corporations } from "../data/sampleData";
import { road } from "./road";

$(document).ready(function() {
  $("input").on("input change", ({ target }) => {
    const { value } = target;
    $(".data-circle, .main-circle").css({
      transform: `rotate(${-1 * value}deg)`
    });
    const perc = (value / 360) * 100;
    $("#car").css({ left: `${perc}%`, transform: `translateX(${perc * -1}%)` });

    // max value 20 for data
    const currentBar = $(".chart__bar.active");
    const currentLabel = $(".chart__bar.active .chart__label");
    // switch (currentBar.data('bar')) {
    //   case 'puppies':
    //     currentBar.css(calcBarWidth(puppies, currentLabel, value));
    //     break;
    //   case 'cats':
    //     currentBar.css(calcBarWidth(cats, currentLabel, value));
    //     break;
    //   case 'corporations':
    //     currentBar.css(calcBarWidth(corporations, currentLabel, value));
    //     break;
    // }

    $(".chart__bar").each(function() {
      const that = $(this);
      const thatLabel = that.find(".chart__label");
      switch (that.data("bar")) {
        case "puppies":
          that.css(calcBarWidth(puppies, thatLabel, value));
          break;
        case "cats":
          that.css(calcBarWidth(cats, thatLabel, value));
          break;
        case "corporations":
          that.css(calcBarWidth(corporations, thatLabel, value));
          break;
      }
    });
  });

  // bind bar click listeners
  $(".chart__bar").click(function() {
    const that = $(this);
    $(".chart__bar, .data-circle").removeClass("active");
    that.addClass("active");
    switch (that.data("bar")) {
      case "puppies":
        $(`.data-circle.circle-puppies`).addClass("active");
        setSvgImage(puppiesImage);
        road.drawCurrentLine("puppies");
        break;
      case "cats":
        $(`.data-circle.circle-cats`).addClass("active");
        setSvgImage(catImage);
        road.drawCurrentLine("cats");
        break;
      case "corporations":
        $(`.data-circle.circle-corporations`).addClass("active");
        setSvgImage(corporationsImage);
        road.drawCurrentLine("corporations");
        break;
    }
  });
});

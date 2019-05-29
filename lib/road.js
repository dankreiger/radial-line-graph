import { puppies, dataPoints, corporations, cats } from '../data/sampleData';

export const road = {
  getCurrentItem: function(current) {
    switch (current) {
      case 'puppies':
        return puppies;
        break;
      case 'cats':
        return cats;
        break;
      case 'corporations':
        return corporations;
        break;
    }
  },
  drawCurrentLine: function(current) {
    const currentItem = road.getCurrentItem(current);
    const width = window.innerWidth; // Use the window's width
    const height = 30; // Use the window's height

    // The number of datapoints
    const n = dataPoints;

    // 5. X scale will use the index of our data
    const xScale = d3
      .scaleLinear()
      .domain([0, n - 1]) // input
      .range([0, width]); // output

    // 6. Y scale will use the randomly generate number
    const yScale = d3
      .scaleLinear()
      .domain([0, Math.max(...currentItem)]) // input
      .range([height, 0]); // output

    // 7. d3's line generator
    const line = d3
      .line()
      .x(function(d, i) {
        return xScale(i);
      }) // set the x values for the line generator
      .y(function(d) {
        return yScale(d.y);
      }) // set the y values for the line generator
      .curve(d3.curveMonotoneX); // apply smoothing to the line

    // 8. An array of objects of length N. Each object has key -> value pair, the key being "y" and the value is a random number
    const dataset = d3.range(n).map(function(d, i) {
      console.log(currentItem[i]);
      return { y: currentItem[i] };
    });

    $('.roadSvg').remove();

    // 1. Add the SVG to the page and employ #2
    const svg = d3
      .select('.slider')
      .append('svg')
      .attr('class', 'roadSvg')
      .attr('width', width)
      .attr('height', height)
      .append('g');

    // 3. Call the x axis in a group tag
    svg
      .append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(xScale)); // Create an axis component with d3.axisBottom

    // 4. Call the y axis in a group tag
    svg
      .append('g')
      .attr('class', 'y axis')
      .call(d3.axisLeft(yScale)); // Create an axis component with d3.axisLeft

    // 9. Append the path, bind the data, and call the line generator
    svg
      .append('path')
      .datum(dataset) // 10. Binds data to the line
      .attr('class', `line ${current}`) // Assign a class for styling
      .attr('d', line); // 11. Calls the line generator
  }
};

$(document).ready(function() {
  const current = $('.chart__bar.active').data('bar');
  // road.drawCurrentLine(current);
});

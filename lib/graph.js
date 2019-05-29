import { puppies, cats, corporations } from '../data/sampleData';
import { calcBarWidth } from './calculations';

$(document).ready(function() {
  const svg = d3.select('svg');
  const margin = {
    top: 50,
    right: 50,
    bottom: 50,
    left: 50
  };
  const width = +svg.attr('width') - margin.left - margin.right;
  const height = +svg.attr('height') - margin.top - margin.bottom;

  // content area
  const vis = svg
    .append('g')
    .attr(
      'transform',
      `translate(${margin.left + width / 2},${margin.top + height / 2})`
    );

  // // show area inside of margins
  // const rect = vis
  //   .append('rect')
  //   .attr('class', 'content')
  //   .attr('width', width)
  //   .attr('height', height)
  //   .attr('transform', `translate(${-width / 2},${-height / 2})`);

  // show scales
  const xScale = d3
    .scaleLinear()
    .domain([-100, 100])
    .range([-width / 2, width / 2]);
  const yScale = d3
    .scaleLinear()
    .domain([100, -100])
    .range([-height / 2, height / 2]);

  // vis.append('g').call(d3.axisTop(xScale));
  // vis.append('g').call(d3.axisLeft(yScale));

  // draw circle
  const pi = Math.PI;
  const radius = 63.66;

  const length = 10;
  const amplitude = 20;

  const radialGenerator = d3
    .lineRadial()
    .angle(d => {
      return d.angle;
    })
    .radius(d => d.radius)
    .curve(d3.curveCardinalClosed);

  const radialScale = d3
    .scaleLinear()
    .domain([0, length])
    .range([0, pi * 2]);

  console.log(radius, xScale(radius));

  // d3.range(length).map(d => {
  //   console.log(xScale(radius)  * amplitude)
  // })

  const puppiesData = d3.range(length).map(function(d, i) {
    return {
      angle: radialScale(d),
      // radius: xScale(radius) + Math.sin(d) * amplitude
      radius: xScale(radius) + puppies[i]
    };
  });

  const catsData = d3.range(length).map(function(d, i) {
    return {
      angle: radialScale(d),
      // radius: xScale(radius) + Math.sin(d) * amplitude
      radius: xScale(radius) + cats[i]
    };
  });

  const corporationsData = d3.range(length).map(function(d, i) {
    return {
      angle: radialScale(d),
      // radius: xScale(radius) + Math.sin(d) * amplitude
      radius: xScale(radius) + corporations[i]
    };
  });

  const puppiesWave = vis
    .append('path')
    .attr('d', radialGenerator(puppiesData))
    .attr('class', 'data-circle circle-puppies');

  const catsWave = vis
    .append('path')
    .attr('d', radialGenerator(catsData))
    .attr('class', 'data-circle circle-cats');

  const corporationsWave = vis
    .append('path')
    .attr('d', radialGenerator(corporationsData))
    .attr('class', 'data-circle circle-corporations');

  const circle = vis
    .append('circle')
    // .style('stroke-dasharray', '3, 3')
    // .style('stroke', 'black')
    .style('fill', 'gray')
    .attr('r', xScale(radius))
    .attr('cx', 0)
    .attr('cy', 0)
    .style('fill', 'url(#image)')
    .attr('class', '.main-circle');

  $('.chart__bar').each(function() {
    const that = $(this);
    const thatLabel = that.find('.chart__label');
    switch (that.data('bar')) {
      case 'puppies':
        that.css(calcBarWidth(puppies, thatLabel, puppies[0]));
        break;
      case 'cats':
        that.css(calcBarWidth(cats, thatLabel, cats[0]));
        break;
      case 'corporations':
        that.css(calcBarWidth(corporations, thatLabel, corporations[0]));
        break;
    }
  });
});

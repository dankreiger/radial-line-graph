export const puppiesImage =
  'https://www.animaladventure.com/hs-fs/hubfs/AA%20Site/Pages/AA%20Pages/Home/dog-toys-circle.png?width=400&name=dog-toys-circle.png';
export const catImage =
  'http://animalhousepethotel.com/web/wp-content/uploads/2015/11/circle-cat-boarding.png';
export const corporationsImage =
  'http://www.iconarchive.com/download/i75801/martz90/circle/apple-2.ico';

export const setSvgImage = image => {
  document
    .querySelector('image')
    .setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', image);
};

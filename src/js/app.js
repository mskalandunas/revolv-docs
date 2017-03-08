'use strict';

const Carousel   = require(__dirname + '/lib/carousel');
const collection = require(__dirname + '/lib/collection');
const nodes      = [...document.querySelectorAll('.carousel')];
const carousels  = [];

for (let i = 0, len = nodes.length; i < len; i++) {
  carousels.push(new Carousel(collection[0], nodes[i]));
  carousels[i].build();
};

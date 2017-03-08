'use strict';

const Carousel   = require(__dirname + '/lib/carousel');
const collection = require(__dirname + '/lib/collection');
const len        = collection.length;
const nodes      = [...document.querySelectorAll('.carousel')];

for (let i = 0, len = collection.length; i < len; i++) {
  new Carousel(collection[i], nodes[i])
};

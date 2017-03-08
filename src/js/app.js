'use strict';

const Carousel   = require(__dirname + '/lib/carousel');
const collection = require(__dirname + '/lib/collection');
const nodes      = [...document.querySelectorAll('.carousel')];
const carousels  = [];


// for (let i = 0, len = nodes.length; i < len; i++) {
//   carousels.push(new Carousel(collection[0], nodes[i]));
//   carousels[i].build();
// };

// for (let i = 0, len = nodes.length; i < len; i++) {
//   carousels.push(new Carousel(collection[1], nodes[i]));
//   carousels[i].build();
// };

const _one_ = new Carousel(collection[0], nodes[0]);
const _two_ = new Carousel(collection[1], nodes[1]);
_one_.build();
_two_.build();

console.log(carousels);
console.log(nodes);

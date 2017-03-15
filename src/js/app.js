'use strict';

const Revolv     = require(__dirname + '/lib/revolv');
const collection = require(__dirname + '/lib/collection');
const len        = collection.length;
const nodes      = [...document.querySelectorAll('.revolv')];

for (let i = 0, len = collection.length; i < len; i++) {
  new Revolv(collection[i], nodes[i])
};

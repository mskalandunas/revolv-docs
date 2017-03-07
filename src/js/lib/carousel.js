'use strict';

const carousels = [];
const local     = require(__dirname + '/carousels');
const nodes     = [...document.querySelectorAll('.carousel')];
// take in an object
// sort by some number
// possible caption
// dev needs to use designated classes for this to work
// carousel-node-container
// carousel-node
// carousel-image
// carousel-anchor
// carousel-caption

// link


// new carousel
// put object into carousel
//
// carousel.a        = carousel-anchor
// carousel.caption  = carousel-caption
// carousel.position (just in the object)
// carousel.SOMETHING = something for the alt tag on the img

class Carousel {
  constructor(obj, node) {
    this.o         = obj;
    this.node      = node;
    this.container = this.node.querySelector('.carousel-node-container');

    this.container.addEventListener('click', this.active);
  };

  active() {
    console.log(this);
  };

  build() {
    for (let i = 0, len = this.o.length; i < len; i++) {
      let node = document.createElement('div');

      node.setAttribute('class', 'carousel-node');
      this.container.appendChild(node);
    };

    this.container.children[0].classList.add('active');
  };
};

for (let i = 0, len = nodes.length; i < len; i++) {
  carousels.push(new Carousel(local, nodes[i]));
  carousels[i].build();
};

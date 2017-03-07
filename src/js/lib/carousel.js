'use strict';

const carousels = [];
const local     = require(__dirname + '/carousels');
const nodes     = [...document.querySelectorAll('.carousel')];
// take in an object
// sort by some number
// possible caption
// link


// new carousel
// put object into carousel
//
// carousel.a        = carousel-anchor
// carousel.caption  = carousel-caption
// carousel.position (just in the object)

class Carousel {
  constructor(obj, node) {
    this.o = obj;
    this.node = node;
  };

  build() {
    let container = this.node.querySelector('.carousel-node-container');

    for (let i = 0, len = this.o.length; i < len; i++) {
      let node = document.createElement('div');

      node.setAttribute('class', 'carousel-node');
      container.appendChild(node);
    };

    container.children[0].classList.add('active');
  };

  display() {
    // console.log(this.node.querySelector('.carousel-node-container'));
    // console.log(this.o);
    // console.log(this.node);
  };
};

for (let i = 0, len = nodes.length; i < len; i++) {
  carousels.push(new Carousel(local, nodes[i]));
  // carousels[0].display();
  carousels[0].build();
};


// function carousel() {
//   for (let i = 0, len = data.length; i < len; i++) {
//     let node = document.createElement('div');

//     node.setAttribute('class', 'carousel-node');
//     node.dataset.announcement = i;
//     node.addEventListener('click', active);
//     container.appendChild(node);
//   };

//   container.children[0].classList.add('active');
// };

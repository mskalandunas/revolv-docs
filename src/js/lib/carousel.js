'use strict';

class Carousel {
  constructor(obj, node) {
    this.o         = obj;
    this.node      = node;
    this.img       = this.node.querySelector('img');
    this.container = this.node.querySelector('.carousel-node-container');
    this.container.addEventListener('click', this.active.bind(this), true);
  };

  active(e) {
    let that = e.srcElement;

    if (!that.classList.contains('carousel-node') || that.classList.contains('active')) {
      return;
    };

    this.img.setAttribute('src', this.o[that.dataset.pos].src);
    this.container.querySelector('.active').classList.remove('active');
    that.classList.add('active');
  };

  build() {
    for (let i = 0, len = this.o.length; i < len; i++) {
      let node = document.createElement('div');

      node.setAttribute('class', 'carousel-node');
      node.dataset.pos = i;
      this.container.appendChild(node);
    };

    this.container.children[0].classList.add('active');
  };
};

module.exports = Carousel;

// take in an object
// sort by some number
// possible caption
// dev needs to use designated classes for this to work
// carousel
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

// basic use
// NEED     – an array of objects, each with an image source and a position in the carousel – MAY JUST LEAVE SORTING UP TO THE USER
// NEED     - a class called "carousel"
// NEED     - a class called "carousel-node-container"
// NEED     - an image within the carousel class element
// NEED     – that carousel node container to be a div within the carousel element
// OPTIONAL – have a "carousel-caption" class
// OPTIONAL – have a "carousel-anchor" class

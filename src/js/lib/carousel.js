'use strict';

class Carousel {
  constructor(obj, node) {
    this.o         = obj;
    this.node      = node;
    this.img       = this.node.querySelector('img');
    this.container = this.node.querySelector('.carousel-node-container');
    this.caption   = this.node.querySelector('.carousel-caption');
    this.anchor    = this.node.querySelector('.carousel-anchor');

    this.container.addEventListener('click', this.active.bind(this), true);
    this.build();
  };

  active(e) {
    let that = e.srcElement;
    let o    = this.o[that.dataset.position];

    if (!that.classList.contains('carousel-node') || that.classList.contains('active-node')) {
      return;
    };

    if (o.hasOwnProperty('caption')) {
      this.caption.innerHTML = o.caption;
    };

    if (o.hasOwnProperty('link')) {
      this.anchor.href = o.link;
    };

    this.img.setAttribute('src', o.src);
    this.container.querySelector('.active-node').classList.remove('active-node');
    that.classList.add('active-node');
  };

  build() {
    for (let i = 0, len = this.o.length; i < len; i++) {
      let node = document.createElement('div');

      node.setAttribute('class', 'carousel-node');
      node.dataset.position = i;
      this.container.appendChild(node);
    };

    this.container.children[0].classList.add('active-node');
  };
};

module.exports = Carousel;

// basic use
// NEED     – an array of objects, each with an image source and a position in the carousel – MAY JUST LEAVE SORTING UP TO THE USER
// NEED     - a class called "carousel"
// NEED     - a class called "carousel-node-container"
// NEED     - an image within the carousel class element
// NEED     – that carousel node container to be a div within the carousel element
// OPTIONAL – have a "carousel-caption" class
// OPTIONAL – have a "carousel-anchor" class

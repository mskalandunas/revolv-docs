'use strict';

class Carousel {
  constructor(obj, node) {
    this.o         = obj;
    this.node      = node;
    this.img       = this.node.querySelector('img');
    this.container = this.node.querySelector('.carousel-node-container');
    this.caption   = this.node.querySelector('.carousel-caption');
    this.anchor    = this.node.querySelector('.carousel-anchor');
    this.built     = false;

    this.container.addEventListener('click', this.active.bind(this), true);
    this.build();
    this.active();
    this.built     = true;
  };

  active(e) {
    let that;
    let o;

    if (!this.built) {
      that = this.container.children[0];
      o    = this.o[0];
    } else {
      that = e.srcElement
      o    = this.o[that.dataset.position];
    };

    if (e && !e.srcElement.classList.contains('carousel-node')) {
      return;
    };

    if (o.hasOwnProperty('title')) {
      this.img.setAttribute('title', o.title);
    };

    if (o.hasOwnProperty('caption')) {
      this.caption.innerHTML = o.caption;
    };

    if (this.anchor != null) {
      o.hasOwnProperty('link') ? this.anchor.href = o.link : this.anchor.removeAttribute('href');
    };

    console.log(o);
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

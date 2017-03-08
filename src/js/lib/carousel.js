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

    if (o.hasOwnProperty('title')) {
      this.img.setAttribute('title', o.title);
    };

    if (o.hasOwnProperty('caption')) {
      this.caption.innerHTML = o.caption;
    };

    if (this.anchor != null) {
      o.hasOwnProperty('link') ? this.anchor.href = o.link : this.anchor.removeAttribute('href');
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

    if (this.o[0].hasOwnProperty('caption')) {
      this.caption.innerHTML = this.o[0].caption;
    };

    if (this.o[0].hasOwnProperty('link')) {
      this.anchor.href = this.o[0].link;
    };

    if (this.o[0].hasOwnProperty('alt')) {
      this.anchor.setAttribute('alt', this.o[0].alt);
    };

    if (this.o[0].hasOwnProperty('title')) {
      this.img.setAttribute('title', this.o[0].title);
    };

    this.container.children[0].classList.add('active-node');
  };
};

module.exports = Carousel;

'use strict';

class Revolv {
  constructor(obj, node) {
    this.o         = obj;
    this.node      = node;
    this.img       = this.node.querySelector('img');
    this.container = this.node.querySelector('.revolv-node-container');
    this.caption   = this.node.querySelector('.revolv-caption');
    this.anchor    = this.node.querySelector('.revolv-anchor');
    this.previous  = this.node.querySelector('.revolv-previous');
    this.next      = this.node.querySelector('.revolv-next');
    this.built     = false;

    this.container.addEventListener('click', this.move.bind(this), true);
    this.build();
    this.move();
    this.built     = true;
  };

  build() {
    for (let i = 0, len = this.o.length; i < len; i++) {
      let node = document.createElement('div');

      node.setAttribute('class', 'revolv-node');
      node.dataset.position = i;
      this.container.appendChild(node);
    };

    if (this.previous != null) {
      this.previous.addEventListener('click', this.move.bind(this), true);
    };

    if (this.next != null) {
      this.next.addEventListener('click', this.move.bind(this), true);
    };

    this.container.children[0].classList.add('active-node');
  };

  move(e) {
    let that;
    let o;
    let src;

    if (e && e.srcElement.classList.contains('revolv-node-container')) {
      return;
    };

    if (!this.built) {
      that  = this.container.children[0];
      o     = this.o[0];
    } else if (e.srcElement.classList.contains('revolv-node')) {
      that  = e.srcElement;
      o     = this.o[that.dataset.position];
    } else if (e.srcElement.classList.contains('revolv-next')) {
      let c = +this.node.querySelector('.active-node').dataset.position + 1;
      let l = this.o.length;
      that  =  c < l ? this.node.querySelector(`[data-position='${c}']`) : this.node.querySelector(`[data-position='0']`);
      o     = this.o[that.dataset.position];
    } else if (e.srcElement.classList.contains('revolv-previous')) {
      let c = +this.node.querySelector('.active-node').dataset.position - 1;
      let l = this.o.length;
      that  =  c >= 0 ? this.node.querySelector(`[data-position='${c}']`) : this.node.querySelector(`[data-position='${l - 1}']`);
      o     = this.o[that.dataset.position];
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
};

module.exports = Revolv;

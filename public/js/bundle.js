/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	const Carousel   = __webpack_require__(1);
	const collection = __webpack_require__(2);
	const len        = collection.length;
	const nodes      = [...document.querySelectorAll('.carousel')];

	for (let i = 0, len = collection.length; i < len; i++) {
	  new Carousel(collection[i], nodes[i])
	};


/***/ },
/* 1 */
/***/ function(module, exports) {

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


/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	const collection = [
	  [
	    {
	      src: '../img/1.jpg',
	      title: 'Rime'
	    },
	    {
	      src: '../img/2.jpg',
	      title: 'Totem Teller'
	    },
	    {
	      src: '../img/3.jpg',
	      title: 'Rain World'
	    }
	  ],
	  [
	    {
	      src: '../img/4.jpg',
	      caption: 'Monument Valley',
	      link: 'https://www.youtube.com/watch?v=wC1jHHF_Wjo',
	      alt: 'Monument Valley',
	      title: 'Monument Valley'
	    },
	    {
	      src: '../img/5.jpg',
	      caption: 'Hyper Light Drifter',
	      link: 'https://www.youtube.com/watch?v=nWufEJ1Ava0',
	      alt: 'Hyper Light Drifter',
	      title: 'Hyper Light Drifter'
	    },
	    {
	      src: '../img/6.jpg',
	      caption: 'Transistor',
	      link: 'https://www.youtube.com/watch?v=pJmtn6JP7Ug',
	      alt: 'Transistor',
	      title: 'Transistor'
	    },
	    {
	      src: '../img/7.jpg',
	      caption: 'Night in the Woods',
	      link: 'https://www.youtube.com/watch?v=u17kM8oSz3k',
	      alt: 'Night in the Woods',
	      title: 'Night in the Woods'
	    }
	  ]
	];

	module.exports = collection;


/***/ }
/******/ ]);
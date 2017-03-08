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


/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	const collection = [
	  [
	    {
	      src: '../img/1.jpg'
	    },
	    {
	      src: '../img/2.jpg'
	    },
	    {
	      src: '../img/3.jpg'
	    }
	  ],
	  [
	    {
	      src: '../img/4.jpg',
	      caption: 'Monument Valley',
	      link: 'https://www.youtube.com/watch?v=wC1jHHF_Wjo',
	      alt: 'Monument Valley'
	    },
	    {
	      src: '../img/5.jpg',
	      caption: 'Hyper Light Drifter',
	      link: 'https://www.youtube.com/watch?v=nWufEJ1Ava0',
	      alt: 'Hyper Light Drifter'
	    },
	    {
	      src: '../img/6.jpg',
	      caption: 'Transistor',
	      link: 'https://www.youtube.com/watch?v=pJmtn6JP7Ug',
	      alt: 'Transistor'
	    },
	    {
	      src: '../img/7.jpg',
	      caption: 'Night in the Woods',
	      link: 'https://www.youtube.com/watch?v=u17kM8oSz3k',
	      alt: 'Night in the Woods'
	    }
	  ]
	];

	module.exports = collection;


/***/ }
/******/ ]);
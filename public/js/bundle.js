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
	const nodes      = [...document.querySelectorAll('.carousel')];
	const carousels  = [];

	for (let i = 0, len = nodes.length; i < len; i++) {
	  carousels.push(new Carousel(collection[0], nodes[i]));
	  carousels[i].build();
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
	      node.dataset.pos = this.o[i].pos;
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


/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	const collection = [
	  [
	    {
	      src: '../img/1.jpg',
	      pos: 0
	    },
	    {
	      src: '../img/2.jpg',
	      pos: 1
	    },
	    {
	      src: '../img/3.jpg',
	      pos: 2
	    }
	  ]
	];

	module.exports = collection;


/***/ }
/******/ ]);
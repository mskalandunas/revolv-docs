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

	__webpack_require__(1);

	// carousel build needs to happen here


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	const carousels = [];
	const local     = __webpack_require__(2);
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


/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	const local = [
	  {
	    src: '../img/1.jpg'
	  },
	  {
	    src: '../img/2.jpg'
	  },
	  {
	    src: '../img/3.jpg'
	  }
	];

	module.exports = local;


/***/ }
/******/ ]);
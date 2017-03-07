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
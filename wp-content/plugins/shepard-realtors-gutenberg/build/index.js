/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/brand/index.js":
/*!***************************************!*\
  !*** ./src/components/brand/index.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities */ "./src/utilities/index.js");

var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    MediaUpload = _wp$blockEditor.MediaUpload;
var Button = wp.components.Button;

registerBlockType('shepard-realtors/brand', {
  title: 'Brand',
  description: 'Shepard Realtors Brand Block',
  icon: 'superhero-alt',
  category: 'shepard-realtors',
  attributes: {
    brandDescription: {
      type: 'string',
      source: 'html',
      selector: '.brand-section h6'
    },
    brandImage: {
      type: 'string',
      selector: '.brand-section__image'
    },
    brandImageAltText: {
      type: 'string',
      selector: '.brand-section__image'
    }
  },
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        brandDescription = _props$attributes.brandDescription,
        brandImage = _props$attributes.brandImage,
        brandImageAltText = _props$attributes.brandImageAltText,
        setAttributes = props.setAttributes;

    var getBrandDescription = function getBrandDescription(newDescription) {
      setAttributes({
        brandDescription: newDescription
      });
    };

    var selectImage = function selectImage(image) {
      setAttributes({
        brandImage: image.sizes.full.url
      });
      setAttributes({
        brandImageAltText: image.alt
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", {
      className: "brand-section"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "container container-separation-y"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: selectImage,
      type: "image",
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
          className: "upload-button-image",
          onClick: open,
          icon: "format-image",
          showTooltip: "true",
          label: "Change image"
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: brandImage,
      class: "brand-section__image",
      alt: brandImageAltText
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h6", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: "Add your brand description",
      onChange: getBrandDescription,
      value: brandDescription
    }))));
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        brandDescription = _props$attributes2.brandDescription,
        brandImage = _props$attributes2.brandImage,
        brandImageAltText = _props$attributes2.brandImageAltText;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", {
      className: "brand-section"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "container container-separation-y"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: brandImage,
      class: "brand-section__image",
      alt: brandImageAltText
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h6", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: brandDescription
    }))));
  }
});

/***/ }),

/***/ "./src/components/hero/index.js":
/*!**************************************!*\
  !*** ./src/components/hero/index.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities */ "./src/utilities/index.js");

var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    MediaUpload = _wp$blockEditor.MediaUpload;
var Button = wp.components.Button;

registerBlockType('shepard-realtors/hero', {
  title: 'Hero',
  description: 'Shepard Realtors Hero Image Block',
  icon: 'format-image',
  category: 'shepard-realtors',
  attributes: {
    heroImage: {
      type: 'string',
      selector: '.hero-image-section'
    },
    heroImageTitle: {
      type: 'string',
      source: 'html',
      selector: '.hero-image-section h5'
    },
    heroImageDescription: {
      type: 'string',
      source: 'html',
      selector: '.hero-image-section p'
    }
  },
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        heroImage = _props$attributes.heroImage,
        heroImageTitle = _props$attributes.heroImageTitle,
        heroImageDescription = _props$attributes.heroImageDescription,
        setAttributes = props.setAttributes;

    var getHeroImageTitle = function getHeroImageTitle(newTitle) {
      setAttributes({
        heroImageTitle: newTitle
      });
    };

    var getHeroImageDescription = function getHeroImageDescription(newDescription) {
      setAttributes({
        heroImageDescription: newDescription
      });
    };

    var selectHeroImage = function selectHeroImage(image) {
      setAttributes({
        heroImage: image.sizes.full.url
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", {
      class: "hero-image-section",
      style: {
        backgroundImage: "url(".concat(Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["setDefaultImage"])(heroImage), ")")
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "container container-separation-y"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: selectHeroImage,
      type: "image",
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
          className: "upload-button-image",
          onClick: open,
          icon: "format-image",
          showTooltip: "true",
          label: "Change image"
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h5", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: "Add your title",
      onChange: getHeroImageTitle,
      value: heroImageTitle
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: "Add your description",
      onChange: getHeroImageDescription,
      value: heroImageDescription
    }))));
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        heroImage = _props$attributes2.heroImage,
        heroImageTitle = _props$attributes2.heroImageTitle,
        heroImageDescription = _props$attributes2.heroImageDescription;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", {
      class: "hero-image-section",
      style: {
        backgroundImage: "url(".concat(Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["setDefaultImage"])(heroImage), ")")
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "container container-separation-y"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h5", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: heroImageTitle
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: heroImageDescription
    }))));
  }
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/styles.scss */ "./src/scss/styles.scss");
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_brand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/brand */ "./src/components/brand/index.js");
/* harmony import */ var _components_hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/hero */ "./src/components/hero/index.js");
// Styles
 // Components




/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/utilities/index.js":
/*!********************************!*\
  !*** ./src/utilities/index.js ***!
  \********************************/
/*! exports provided: setDefaultImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDefaultImage", function() { return setDefaultImage; });
var setDefaultImage = function setDefaultImage(image) {
  if (image !== undefined) {
    return image;
  } else {
    return 'https://wallpapercave.com/wp/wp8179173.jpg';
  }
};



/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
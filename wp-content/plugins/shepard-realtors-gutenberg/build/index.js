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

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

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

/***/ "./src/components/dream-houses/index.js":
/*!**********************************************!*\
  !*** ./src/components/dream-houses/index.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities */ "./src/utilities/index.js");


var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    MediaUpload = _wp$blockEditor.MediaUpload,
    URLInputButton = _wp$blockEditor.URLInputButton,
    InspectorControls = _wp$blockEditor.InspectorControls;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    PanelBody = _wp$components.PanelBody;

registerBlockType('shepard-realtors/dream-houses', {
  title: 'Dream Houses',
  description: 'Shepard Realtors Dream Houses Block',
  icon: 'admin-multisite',
  category: 'shepard-realtors',
  attributes: {
    dreamHouseDescriptionOne: {
      type: 'string',
      source: 'html',
      selector: '.dreamHouseDescriptionOne'
    },
    dreamHouseDescriptionTwo: {
      type: 'string',
      source: 'html',
      selector: '.dreamHouseDescriptionTwo'
    },
    dreamHouseDescriptionThree: {
      type: 'string',
      source: 'html',
      selector: '.dreamHouseDescriptionThree'
    },
    dreamHouseImageOne: {
      type: 'string',
      selector: '.dreamHouseImageOne'
    },
    dreamHouseImageOneAltText: {
      type: 'string',
      selector: '.dreamHouseImageOne'
    },
    dreamHouseImageTwo: {
      type: 'string',
      selector: '.dreamHouseImageTwo'
    },
    dreamHouseImageTwoAltText: {
      type: 'string',
      selector: '.dreamHouseImageTwo'
    },
    dreamHouseImageThree: {
      type: 'string',
      selector: '.dreamHouseImageThree'
    },
    dreamHouseImageThreeAltText: {
      type: 'string',
      selector: '.dreamHouseImageThree'
    },
    dreamHouseLinkOne: {
      type: 'string',
      source: 'attribute',
      selector: 'a.dreamHouseLinkTitleOne',
      attribute: 'href'
    },
    dreamHouseLinkTwo: {
      type: 'string',
      source: 'attribute',
      selector: 'a.dreamHouseLinkTitleTwo',
      attribute: 'href'
    },
    dreamHouseLinkThree: {
      type: 'string',
      source: 'attribute',
      selector: 'a.dreamHouseLinkTitleThree',
      attribute: 'href'
    },
    dreamHouseLinkTitleOne: {
      type: 'string',
      source: 'text',
      selector: 'a.dreamHouseLinkTitleOne'
    },
    dreamHouseLinkTitleTwo: {
      type: 'string',
      source: 'text',
      selector: 'a.dreamHouseLinkTitleTwo'
    },
    dreamHouseLinkTitleThree: {
      type: 'string',
      source: 'text',
      selector: 'a.dreamHouseLinkTitleThree'
    }
  },
  edit: function edit(props) {
    var _createElement, _createElement2, _createElement3;

    var _props$attributes = props.attributes,
        dreamHouseDescriptionOne = _props$attributes.dreamHouseDescriptionOne,
        dreamHouseDescriptionTwo = _props$attributes.dreamHouseDescriptionTwo,
        dreamHouseDescriptionThree = _props$attributes.dreamHouseDescriptionThree,
        dreamHouseImageOne = _props$attributes.dreamHouseImageOne,
        dreamHouseImageOneAltText = _props$attributes.dreamHouseImageOneAltText,
        dreamHouseImageTwo = _props$attributes.dreamHouseImageTwo,
        dreamHouseImageTwoAltText = _props$attributes.dreamHouseImageTwoAltText,
        dreamHouseImageThree = _props$attributes.dreamHouseImageThree,
        dreamHouseImageThreeAltText = _props$attributes.dreamHouseImageThreeAltText,
        dreamHouseLinkOne = _props$attributes.dreamHouseLinkOne,
        dreamHouseLinkTwo = _props$attributes.dreamHouseLinkTwo,
        dreamHouseLinkThree = _props$attributes.dreamHouseLinkThree,
        dreamHouseLinkTitleOne = _props$attributes.dreamHouseLinkTitleOne,
        dreamHouseLinkTitleTwo = _props$attributes.dreamHouseLinkTitleTwo,
        dreamHouseLinkTitleThree = _props$attributes.dreamHouseLinkTitleThree,
        setAttributes = props.setAttributes;

    var getDreamHouseDescriptionOne = function getDreamHouseDescriptionOne(textOne) {
      setAttributes({
        dreamHouseDescriptionOne: textOne
      });
    };

    var getDreamHouseDescriptionTwo = function getDreamHouseDescriptionTwo(textTwo) {
      setAttributes({
        dreamHouseDescriptionTwo: textTwo
      });
    };

    var getDreamHouseDescriptionThree = function getDreamHouseDescriptionThree(textThree) {
      setAttributes({
        dreamHouseDescriptionThree: textThree
      });
    };

    var selectDreamHouseImageOne = function selectDreamHouseImageOne(imageOne) {
      setAttributes({
        dreamHouseImageOne: imageOne.sizes.full.url
      });
      setAttributes({
        dreamHouseImageOneAltText: imageOne.alt
      });
    };

    var selectDreamHouseImageTwo = function selectDreamHouseImageTwo(imageTwo) {
      setAttributes({
        dreamHouseImageTwo: imageTwo.sizes.full.url
      });
      setAttributes({
        dreamHouseImageTwoAltText: imageTwo.alt
      });
    };

    var selectDreamHouseImageThree = function selectDreamHouseImageThree(imageThree) {
      setAttributes({
        dreamHouseImageThree: imageThree.sizes.full.url
      });
      setAttributes({
        dreamHouseImageThreeAltText: imageThree.alt
      });
    };

    var getDreamHouseLinkOne = function getDreamHouseLinkOne(linkOne) {
      setAttributes({
        dreamHouseLinkOne: linkOne
      });
    };

    var getDreamHouseLinkTwo = function getDreamHouseLinkTwo(linkTwo) {
      setAttributes({
        dreamHouseLinkTwo: linkTwo
      });
    };

    var getDreamHouseLinkThree = function getDreamHouseLinkThree(linkThree) {
      setAttributes({
        dreamHouseLinkThree: linkThree
      });
    };

    var getDreamHouseLinkTitleOne = function getDreamHouseLinkTitleOne(linkTitleOne) {
      setAttributes({
        dreamHouseLinkTitleOne: linkTitleOne
      });
    };

    var getDreamHouseLinkTitleTwo = function getDreamHouseLinkTitleTwo(linkTitleTwo) {
      setAttributes({
        dreamHouseLinkTitleTwo: linkTitleTwo
      });
    };

    var getDreamHouseLinkTitleThree = function getDreamHouseLinkTitleThree(linkTitleThree) {
      setAttributes({
        dreamHouseLinkTitleThree: linkTitleThree
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: 'Dream House Settings First',
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "components-base-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "components-base-control__field"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(URLInputButton, {
      placeholder: "Add link",
      onChange: getDreamHouseLinkOne,
      url: dreamHouseLinkOne
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText, {
      placeholder: "Add link title",
      onChange: getDreamHouseLinkTitleOne,
      value: dreamHouseLinkTitleOne
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: 'Dream House Settings Second',
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "components-base-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "components-base-control__field"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(URLInputButton, {
      placeholder: "Add link",
      onChange: getDreamHouseLinkTwo,
      url: dreamHouseLinkTwo
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText, {
      placeholder: "Add link title",
      onChange: getDreamHouseLinkTitleTwo,
      value: dreamHouseLinkTitleTwo
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: 'Dream House Settings Third',
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "components-base-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "components-base-control__field"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(URLInputButton, {
      placeholder: "Add link",
      onChange: getDreamHouseLinkThree,
      url: dreamHouseLinkThree
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText, {
      placeholder: "Add link title",
      onChange: getDreamHouseLinkTitleThree,
      value: dreamHouseLinkTitleThree
    }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "card__wrap--outer"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "card__wrap--inner"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "card"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUpload, {
      onSelect: selectDreamHouseImageOne,
      type: "image",
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
          className: "upload-button-image",
          onClick: open,
          icon: "format-image",
          showTooltip: "true",
          label: "Change image"
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", (_createElement = {
      src: Object(_utilities__WEBPACK_IMPORTED_MODULE_2__["setDefaultImage"])(dreamHouseImageOne),
      className: "card__image"
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_createElement, "className", "dreamHouseImageOne"), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_createElement, "alt", dreamHouseImageOneAltText), _createElement)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "card__item card__flexible"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
      className: "dreamHouseDescriptionOne"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText, {
      placeholder: "Add your description",
      onChange: getDreamHouseDescriptionOne,
      value: dreamHouseDescriptionOne
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "card__footer"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
      className: "button button__outline button__icon button__outline--right-arrow card__button dreamHouseLinkTitleOne",
      target: "_self",
      rel: "noopener",
      href: dreamHouseLinkOne
    }, dreamHouseLinkTitleOne, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", null))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "card__wrap--inner"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "card"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUpload, {
      onSelect: selectDreamHouseImageTwo,
      type: "image",
      render: function render(_ref2) {
        var open = _ref2.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
          className: "upload-button-image",
          onClick: open,
          icon: "format-image",
          showTooltip: "true",
          label: "Change image"
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", (_createElement2 = {
      src: Object(_utilities__WEBPACK_IMPORTED_MODULE_2__["setDefaultImage"])(dreamHouseImageTwo),
      className: "card__image"
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_createElement2, "className", "dreamHouseImageTwo"), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_createElement2, "alt", dreamHouseImageTwoAltText), _createElement2)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "card__item card__flexible"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
      className: "dreamHouseDescriptionTwo"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText, {
      placeholder: "Add your description",
      onChange: getDreamHouseDescriptionTwo,
      value: dreamHouseDescriptionTwo
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "card__footer"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
      className: "button button__outline button__icon button__outline--right-arrow card__button dreamHouseLinkTitleTwo",
      target: "_self",
      rel: "noopener",
      href: dreamHouseLinkTwo
    }, dreamHouseLinkTitleTwo, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", null))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "card__wrap--inner"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "card"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUpload, {
      onSelect: selectDreamHouseImageThree,
      type: "image",
      render: function render(_ref3) {
        var open = _ref3.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
          className: "upload-button-image",
          onClick: open,
          icon: "format-image",
          showTooltip: "true",
          label: "Change image"
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", (_createElement3 = {
      src: Object(_utilities__WEBPACK_IMPORTED_MODULE_2__["setDefaultImage"])(dreamHouseImageThree),
      className: "card__image"
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_createElement3, "className", "dreamHouseImageThree"), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_createElement3, "alt", dreamHouseImageThreeAltText), _createElement3)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "card__item card__flexible"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
      className: "dreamHouseDescriptionThree"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText, {
      placeholder: "Add your description",
      onChange: getDreamHouseDescriptionThree,
      value: dreamHouseDescriptionThree
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "card__footer"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
      className: "button button__outline button__icon button__outline--right-arrow card__button dreamHouseLinkTitleThree",
      target: "_self",
      rel: "noopener",
      href: dreamHouseLinkThree
    }, dreamHouseLinkTitleThree, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", null)))))));
  },
  save: function save(props) {
    var _createElement4, _createElement5, _createElement6;

    var _props$attributes2 = props.attributes,
        dreamHouseDescriptionOne = _props$attributes2.dreamHouseDescriptionOne,
        dreamHouseDescriptionTwo = _props$attributes2.dreamHouseDescriptionTwo,
        dreamHouseDescriptionThree = _props$attributes2.dreamHouseDescriptionThree,
        dreamHouseImageOne = _props$attributes2.dreamHouseImageOne,
        dreamHouseImageOneAltText = _props$attributes2.dreamHouseImageOneAltText,
        dreamHouseImageTwo = _props$attributes2.dreamHouseImageTwo,
        dreamHouseImageTwoAltText = _props$attributes2.dreamHouseImageTwoAltText,
        dreamHouseImageThree = _props$attributes2.dreamHouseImageThree,
        dreamHouseImageThreeAltText = _props$attributes2.dreamHouseImageThreeAltText,
        dreamHouseLinkOne = _props$attributes2.dreamHouseLinkOne,
        dreamHouseLinkTwo = _props$attributes2.dreamHouseLinkTwo,
        dreamHouseLinkThree = _props$attributes2.dreamHouseLinkThree,
        dreamHouseLinkTitleOne = _props$attributes2.dreamHouseLinkTitleOne,
        dreamHouseLinkTitleTwo = _props$attributes2.dreamHouseLinkTitleTwo,
        dreamHouseLinkTitleThree = _props$attributes2.dreamHouseLinkTitleThree;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "card__wrap--outer"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "card__wrap--inner"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "card"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", (_createElement4 = {
      src: Object(_utilities__WEBPACK_IMPORTED_MODULE_2__["setDefaultImage"])(dreamHouseImageOne),
      className: "card__image"
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_createElement4, "className", "dreamHouseImageOne"), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_createElement4, "alt", dreamHouseImageOneAltText), _createElement4)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "card__item card__flexible"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
      className: "dreamHouseDescriptionOne"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
      value: dreamHouseDescriptionOne
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "card__footer"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
      className: "button button__outline button__icon button__outline--right-arrow card__button dreamHouseLinkTitleOne",
      target: "_self",
      rel: "noopener",
      href: dreamHouseLinkOne
    }, dreamHouseLinkTitleOne, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", null))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "card__wrap--inner"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "card"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", (_createElement5 = {
      src: Object(_utilities__WEBPACK_IMPORTED_MODULE_2__["setDefaultImage"])(dreamHouseImageTwo),
      className: "card__image"
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_createElement5, "className", "dreamHouseImageTwo"), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_createElement5, "alt", dreamHouseImageTwoAltText), _createElement5)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "card__item card__flexible"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
      className: "dreamHouseDescriptionTwo"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
      value: dreamHouseDescriptionTwo
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "card__footer"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
      className: "button button__outline button__icon button__outline--right-arrow card__button dreamHouseLinkTitleTwo",
      target: "_self",
      rel: "noopener",
      href: dreamHouseLinkTwo
    }, dreamHouseLinkTitleTwo, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", null))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "card__wrap--inner"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "card"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", (_createElement6 = {
      src: Object(_utilities__WEBPACK_IMPORTED_MODULE_2__["setDefaultImage"])(dreamHouseImageThree),
      className: "card__image"
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_createElement6, "className", "dreamHouseImageThree"), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_createElement6, "alt", dreamHouseImageThreeAltText), _createElement6)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "card__item card__flexible"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
      className: "dreamHouseDescriptionThree"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
      value: dreamHouseDescriptionThree
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "card__footer"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
      className: "button button__outline button__icon button__outline--right-arrow card__button dreamHouseLinkTitleThree",
      target: "_self",
      rel: "noopener",
      href: dreamHouseLinkThree
    }, dreamHouseLinkTitleThree, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", null))))));
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

/***/ "./src/components/properties/index.js":
/*!********************************************!*\
  !*** ./src/components/properties/index.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_PropertiesContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../containers/PropertiesContainer */ "./src/containers/PropertiesContainer/index.js");

var registerBlockType = wp.blocks.registerBlockType;
var withSelect = wp.data.withSelect;
var _wp$components = wp.components,
    Placeholder = _wp$components.Placeholder,
    Spinner = _wp$components.Spinner;

registerBlockType('shepard-realtors/properties', {
  title: 'Properties',
  description: 'Shepard Realtors Properties Block',
  icon: 'admin-multisite',
  category: 'shepard-realtors',
  edit: withSelect(function (select) {
    var _select = select('core'),
        getEntityRecords = _select.getEntityRecords;

    var propertyQuery = {
      per_page: 3
    };
    return {
      propertiesList: getEntityRecords('postType', 'property', propertyQuery)
    };
  })(function (props) {
    var propertiesList = props.propertiesList;
    var hasPosts = Array.isArray(propertiesList) && propertiesList.length;

    if (!hasPosts) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Placeholder, null, !Array.isArray(propertiesList) ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Spinner, null) : 'No properties found.');
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_containers_PropertiesContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
      properties: propertiesList
    });
  }),
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./src/components/propertiesItem/index.js":
/*!************************************************!*\
  !*** ./src/components/propertiesItem/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_icons_bedrooms_quantity_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/icons/bedrooms-quantity.svg */ "./src/images/icons/bedrooms-quantity.svg");
/* harmony import */ var _images_icons_bathrooms_quantity_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/icons/bathrooms-quantity.svg */ "./src/images/icons/bathrooms-quantity.svg");
/* harmony import */ var _images_icons_sq_ft_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/icons/sq-ft.svg */ "./src/images/icons/sq-ft.svg");
/* harmony import */ var _images_icons_acre_lot_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/icons/acre-lot.svg */ "./src/images/icons/acre-lot.svg");







var PropertiesItem = function PropertiesItem(_ref) {
  var propData = _ref.propData;
  var featured_image = propData.featured_image,
      property_address_one = propData.property_address_one,
      property_address_two = propData.property_address_two,
      property_price = propData.property_price,
      property_bedrooms_quantity = propData.property_bedrooms_quantity,
      property_bathrooms_quantity = propData.property_bathrooms_quantity,
      property_sq_ft = propData.property_sq_ft,
      property_acre_lot = propData.property_acre_lot;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "card__wrap--inner properties-container__cards-inner-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "card properties-container__card"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    src: featured_image,
    className: "card__image properties-container__image"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "card__item card__flexible properties-container__flexible"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "properties-container__address-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "properties-container__address-one"
  }, property_address_one), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "properties-container__address-two"
  }, property_address_two)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "properties-container__price-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "properties-container__price"
  }, property_price))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "card__footer properties-container__footer"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "properties-container__details-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_images_icons_bedrooms_quantity_svg__WEBPACK_IMPORTED_MODULE_2__["ReactComponent"], {
    className: "properties-container__detail-svg-image"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "properties-container__details-text"
  }, property_bedrooms_quantity)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "properties-container__details-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_images_icons_bathrooms_quantity_svg__WEBPACK_IMPORTED_MODULE_3__["ReactComponent"], {
    className: "properties-container__detail-svg-image"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "properties-container__details-text"
  }, property_bathrooms_quantity)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "properties-container__details-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_images_icons_sq_ft_svg__WEBPACK_IMPORTED_MODULE_4__["ReactComponent"], {
    className: "properties-container__detail-svg-image"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "properties-container__details-text"
  }, property_sq_ft), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "properties-container__details-text"
  }, "Sq Ft")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "properties-container__details-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_images_icons_acre_lot_svg__WEBPACK_IMPORTED_MODULE_5__["ReactComponent"], {
    className: "properties-container__detail-svg-image"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "properties-container__details-text"
  }, property_acre_lot), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "properties-container__details-text"
  }, "Acre lot")))));
};

/* harmony default export */ __webpack_exports__["default"] = (PropertiesItem);

/***/ }),

/***/ "./src/containers/PropertiesContainer/index.js":
/*!*****************************************************!*\
  !*** ./src/containers/PropertiesContainer/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_propertiesItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/propertiesItem */ "./src/components/propertiesItem/index.js");




var PropertiesContainer = function PropertiesContainer(_ref) {
  var properties = _ref.properties;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", {
    className: "properties-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
    class: "properties-container__main-title"
  }, "Featured Properties"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "card__wrap--outer properties-container__cards-wrapper"
  }, properties.map(function (propData) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_propertiesItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: propData.id,
      propData: propData
    });
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (PropertiesContainer);

/***/ }),

/***/ "./src/images/icons/acre-lot.svg":
/*!***************************************!*\
  !*** ./src/images/icons/acre-lot.svg ***!
  \***************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgAcreLot; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path, _path2, _path3;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgAcreLot(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 20,
    height: 20,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M7.437 6.472a.68.68 0 00-.962.961l.318.319a.68.68 0 00.962-.962l-.318-.318z",
    fill: "#AAADC3",
    stroke: "#AAADC3",
    strokeWidth: 0.1
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M14.87 15.83h0a.682.682 0 11.968-.962l3.014 3.022h0a.68.68 0 01-.479 1.16h0H1.63a.68.68 0 01-.68-.68V1.627v0h0a.68.68 0 011.16-.48h0l3.55 3.55h0a.682.682 0 010 .962s0 0 0 0l9.21 10.172zm0 0l.87.87-.87-.87zm1.029 1.168a.58.58 0 00-.158-.297l.158.297zm0 0a.58.58 0 01-.034.334m.034-.334l-.034.334m0 0a.58.58 0 01-.213.26m.213-.26l-.213.26m0 0a.58.58 0 01-.322.098m.322-.098l-.322.098m0 0H2.888a.58.58 0 01-.578-.578V4.67m13.02 13.02L2.31 4.67m0 0a.58.58 0 01.99-.411m-.99.41l.99-.41m0 0s0 0 0 0l1.4 1.4s0 0 0 0l-1.4-1.4z",
    fill: "#AAADC3",
    stroke: "#AAADC3",
    strokeWidth: 0.1
  })), _path3 || (_path3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M11.633 10.67a.68.68 0 10-.962.962l.318.318a.68.68 0 10.962-.962l-.318-.318zM9.536 8.57a.68.68 0 10-.962.963l.318.318a.68.68 0 00.962-.962l-.318-.318zM13.733 12.767a.68.68 0 10-.962.962l.318.318a.68.68 0 10.962-.961l-.318-.319z",
    fill: "#AAADC3",
    stroke: "#AAADC3",
    strokeWidth: 0.1
  })));
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuNDM2ODMgNi40NzE2MUM3LjE3MTIzIDYuMjA2MDEgNi43NDA2MSA2LjIwNjAxIDYuNDc1MDEgNi40NzE2MUM2LjIwOTQyIDYuNzM3MjEgNi4yMDk0MiA3LjE2NzgyIDYuNDc1MDEgNy40MzM0Mkw2Ljc5MzI2IDcuNzUxNjdDNy4wNTg4NiA4LjAxNzI3IDcuNDg5NDggOC4wMTcyNyA3Ljc1NTA4IDcuNzUxNjdDOC4wMjA2NyA3LjQ4NjA3IDguMDIwNjcgNy4wNTU0NiA3Ljc1NTA4IDYuNzg5ODZMNy40MzY4MyA2LjQ3MTYxWiIgZmlsbD0iI0FBQURDMyIgc3Ryb2tlPSIjQUFBREMzIiBzdHJva2Utd2lkdGg9IjAuMSIvPgo8cGF0aCBkPSJNMTQuODcwOSAxNS44MzA4TDE0Ljg3MDggMTUuODMwOEMxNC43NDM1IDE1LjcwMjkgMTQuNjcyIDE1LjUyOTggMTQuNjcyIDE1LjM0OTRDMTQuNjcyIDE1LjE2OSAxNC43NDM1IDE0Ljk5NTkgMTQuODcwOCAxNC44NjhDMTQuOTMzOSAxNC44MDM5IDE1LjAwOTEgMTQuNzUzIDE1LjA5MjEgMTQuNzE4MkMxNS4xNzUxIDE0LjY4MzMgMTUuMjY0MyAxNC42NjU0IDE1LjM1NDMgMTQuNjY1NEMxNS40NDQ0IDE0LjY2NTQgMTUuNTMzNiAxNC42ODMzIDE1LjYxNjYgMTQuNzE4MkMxNS42OTk2IDE0Ljc1MyAxNS43NzQ4IDE0LjgwMzkgMTUuODM3OSAxNC44NjgxQzE1LjgzNzkgMTQuODY4MSAxNS44MzggMTQuODY4MiAxNS44MzgxIDE0Ljg2ODNMMTguODUyMyAxNy44OTA1TDE4Ljg1MjQgMTcuODkwNkMxOC45NDY5IDE3Ljk4NTcgMTkuMDExMSAxOC4xMDY2IDE5LjAzNzEgMTguMjM4MUMxOS4wNjMxIDE4LjM2OTYgMTkuMDQ5NiAxOC41MDU5IDE4Ljk5ODQgMTguNjI5N0MxOC45NDcyIDE4Ljc1MzYgMTguODYwNSAxOC44NTk2IDE4Ljc0OTMgMTguOTM0NEMxOC42MzggMTkuMDA5MSAxOC41MDcxIDE5LjA0OTQgMTguMzczMSAxOS4wNUwxOC4zNzI4IDE5LjA1TDEuNjMwMSAxOS4wNUMxLjQ0OTczIDE5LjA1IDEuMjc2NzQgMTguOTc4MyAxLjE0OTIgMTguODUwOEMxLjAyMTY1IDE4LjcyMzMgMC45NSAxOC41NTAzIDAuOTUgMTguMzY5OVYxLjYyNzE2VjEuNjI2OTNMMC45NTAwMDEgMS42MjY5M0MwLjk1MDYyNyAxLjQ5Mjg4IDAuOTkwODUzIDEuMzYyIDEuMDY1NjMgMS4yNTA3NEMxLjE0MDQgMS4xMzk0OSAxLjI0NjM4IDEuMDUyOCAxLjM3MDI2IDEuMDAxNTlDMS40OTQxNSAwLjk1MDM3OCAxLjYzMDQgMC45MzY5MTUgMS43NjE5MSAwLjk2Mjg5NkMxLjg5MzQyIDAuOTg4ODc2IDIuMDE0MzEgMS4wNTMxNCAyLjEwOTQxIDEuMTQ3NjJMMi4xMDk1MiAxLjE0NzcyTDUuNjYwMSA0LjY5NjNMNS42NjAxOCA0LjY5NjM4QzUuNzg3NTEgNC44MjQyMiA1Ljg1OSA0Ljk5NzMxIDUuODU5IDUuMTc3NzRDNS44NTkgNS4zNTgxNyA1Ljc4NzUyIDUuNTMxMjUgNS42NjAxOSA1LjY1OTA5QzUuNjYwMTggNS42NTkxIDUuNjYwMTggNS42NTkxIDUuNjYwMTggNS42NTkxTDE0Ljg3MDkgMTUuODMwOFpNMTQuODcwOSAxNS44MzA4TDE1Ljc0MDkgMTYuNzAwOUwxNC44NzA5IDE1LjgzMDhaTTE1Ljg5ODYgMTYuOTk3N0MxNS44NzY1IDE2Ljg4NTQgMTUuODIxNyAxNi43ODIyIDE1Ljc0MTEgMTYuNzAxTDE1Ljg5ODYgMTYuOTk3N1pNMTUuODk4NiAxNi45OTc3QzE1LjkyMDcgMTcuMTEwMSAxNS45MDkgMTcuMjI2NCAxNS44NjUxIDE3LjMzMjJNMTUuODk4NiAxNi45OTc3TDE1Ljg2NTEgMTcuMzMyMk0xNS44NjUxIDE3LjMzMjJDMTUuODIxMiAxNy40Mzc5IDE1Ljc0NyAxNy41MjgzIDE1LjY1MTggMTcuNTkxOU0xNS44NjUxIDE3LjMzMjJMMTUuNjUxOCAxNy41OTE5TTE1LjY1MTggMTcuNTkxOUMxNS41NTY2IDE3LjY1NTYgMTUuNDQ0OCAxNy42ODk2IDE1LjMzMDMgMTcuNjg5OE0xNS42NTE4IDE3LjU5MTlMMTUuMzMwMyAxNy42ODk4TTE1LjMzMDMgMTcuNjg5OEgyLjg4ODQ3QzIuNzM1MjUgMTcuNjg5MyAyLjU4ODQ1IDE3LjYyODIgMi40ODAxMSAxNy41MTk5QzIuMzcxNzkgMTcuNDExNiAyLjMxMDcxIDE3LjI2NDggMi4zMTAyMSAxNy4xMTE2VjQuNjY5NzNNMTUuMzMwMyAxNy42ODk4TDIuMzEwMjEgNC42Njk3M00yLjMxMDIxIDQuNjY5NzNDMi4zMTAzOCA0LjU1NTI0IDIuMzQ0NDMgNC40NDMzNSAyLjQwODA3IDQuMzQ4MTdDMi40NzE3MSA0LjI1Mjk5IDIuNTYyMDkgNC4xNzg3NyAyLjY2NzgzIDQuMTM0ODZDMi43NzM1NyA0LjA5MDk1IDIuODg5OTQgNC4wNzkzMSAzLjAwMjI4IDQuMTAxNDFDMy4xMTQ2MSA0LjEyMzUxIDMuMjE3ODkgNC4xNzgzNSAzLjI5OTExIDQuMjU5MDJNMi4zMTAyMSA0LjY2OTczTDMuMjk5MTEgNC4yNTkwMk0zLjI5OTExIDQuMjU5MDJDMy4yOTkxMiA0LjI1OTAzIDMuMjk5MTMgNC4yNTkwNCAzLjI5OTE0IDQuMjU5MDZMNC42OTkxOCA1LjY1OTA5QzQuNjk5MiA1LjY1OTExIDQuNjk5MjIgNS42NTkxMyA0LjY5OTI0IDUuNjU5MTVMMy4yOTkxMSA0LjI1OTAyWiIgZmlsbD0iI0FBQURDMyIgc3Ryb2tlPSIjQUFBREMzIiBzdHJva2Utd2lkdGg9IjAuMSIvPgo8cGF0aCBkPSJNMTEuNjMyOSAxMC42N0MxMS4zNjczIDEwLjQwNDQgMTAuOTM2NyAxMC40MDQ0IDEwLjY3MTEgMTAuNjdDMTAuNDA1NSAxMC45MzU2IDEwLjQwNTUgMTEuMzY2MiAxMC42NzExIDExLjYzMThMMTAuOTg5NCAxMS45NTAxQzExLjI1NSAxMi4yMTU3IDExLjY4NTYgMTIuMjE1NyAxMS45NTEyIDExLjk1MDFDMTIuMjE2OCAxMS42ODQ1IDEyLjIxNjggMTEuMjUzOSAxMS45NTEyIDEwLjk4ODNMMTEuNjMyOSAxMC42N1oiIGZpbGw9IiNBQUFEQzMiIHN0cm9rZT0iI0FBQURDMyIgc3Ryb2tlLXdpZHRoPSIwLjEiLz4KPHBhdGggZD0iTTkuNTM1NTggOC41NzA3OUM5LjI2OTk4IDguMzA1MTkgOC44MzkzNyA4LjMwNTE5IDguNTczNzcgOC41NzA3OUM4LjMwODE3IDguODM2MzkgOC4zMDgxNyA5LjI2NzAxIDguNTczNzcgOS41MzI2TDguODkyMDIgOS44NTA4NUM5LjE1NzYyIDEwLjExNjQgOS41ODgyMyAxMC4xMTY0IDkuODUzODMgOS44NTA4NUMxMC4xMTk0IDkuNTg1MjYgMTAuMTE5NCA5LjE1NDY0IDkuODUzODMgOC44ODkwNEw5LjUzNTU4IDguNTcwNzlaIiBmaWxsPSIjQUFBREMzIiBzdHJva2U9IiNBQUFEQzMiIHN0cm9rZS13aWR0aD0iMC4xIi8+CjxwYXRoIGQ9Ik0xMy43MzMgMTIuNzY3NEMxMy40Njc0IDEyLjUwMTggMTMuMDM2OCAxMi41MDE4IDEyLjc3MTIgMTIuNzY3NEMxMi41MDU2IDEzLjAzMyAxMi41MDU2IDEzLjQ2MzYgMTIuNzcxMiAxMy43MjkyTDEzLjA4OTUgMTQuMDQ3NEMxMy4zNTUxIDE0LjMxMyAxMy43ODU3IDE0LjMxMyAxNC4wNTEzIDE0LjA0NzRDMTQuMzE2OSAxMy43ODE4IDE0LjMxNjkgMTMuMzUxMiAxNC4wNTEzIDEzLjA4NTZMMTMuNzMzIDEyLjc2NzRaIiBmaWxsPSIjQUFBREMzIiBzdHJva2U9IiNBQUFEQzMiIHN0cm9rZS13aWR0aD0iMC4xIi8+Cjwvc3ZnPgo=");


/***/ }),

/***/ "./src/images/icons/bathrooms-quantity.svg":
/*!*************************************************!*\
  !*** ./src/images/icons/bathrooms-quantity.svg ***!
  \*************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgBathroomsQuantity; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgBathroomsQuantity(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 22,
    height: 17,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M20.302 8.342h-.132V3.093A2.196 2.196 0 0017.977.9c-.927 0-1.713.583-2.032 1.395h-.294a.797.797 0 100 1.596h1.86a.797.797 0 00.529-1.392.597.597 0 01.534.594v5.249H1.698a.797.797 0 100 1.595H2.76V11c0 1.494.729 2.816 1.844 3.636l-.447.447a.793.793 0 000 1.127.802.802 0 00.564.234c.202 0 .41-.08.564-.234l.847-.847c.367.095.748.151 1.147.151h7.442c.399 0 .78-.056 1.147-.151l.847.847a.802.802 0 00.564.234c.202 0 .41-.08.564-.234a.793.793 0 000-1.128s0 0 0 0l-.447-.446A4.506 4.506 0 0019.239 11V9.937H20.302a.797.797 0 100-1.595zM17.644 11a2.93 2.93 0 01-2.923 2.923H7.279A2.93 2.93 0 014.356 11V9.937h13.288V11z",
    fill: "#AAADC3",
    stroke: "#AAADC3",
    strokeWidth: 0.2
  })));
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAyMiAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwLjMwMjMgOC4zNDE4NkgyMC4xNjk4VjMuMDkzMDJDMjAuMTY5OCAxLjg4NDMxIDE5LjE4NTUgMC45IDE3Ljk3NjcgMC45QzE3LjA1MDQgMC45IDE2LjI2NCAxLjQ4Mjc5IDE1Ljk0NDYgMi4yOTUzNUgxNS42NTEyQzE1LjIwOTkgMi4yOTUzNSAxNC44NTM1IDIuNjUxNzUgMTQuODUzNSAzLjA5MzAyQzE0Ljg1MzUgMy41MzQzIDE1LjIwOTkgMy44OTA3IDE1LjY1MTIgMy44OTA3SDE3LjUxMTZDMTcuOTUyOSAzLjg5MDcgMTguMzA5MyAzLjUzNDMgMTguMzA5MyAzLjA5MzAyQzE4LjMwOTMgMi44NTU3IDE4LjIwNDQgMi42NDQxNyAxOC4wMzk5IDIuNDk4NjJDMTguMzQwOSAyLjUzMDAyIDE4LjU3NDQgMi43ODM1MyAxOC41NzQ0IDMuMDkzMDJWOC4zNDE4NkgxOC40NDE5SDE2LjU4MTRIMy41NTgxNEgxLjY5NzY3QzEuMjU2NCA4LjM0MTg2IDAuOSA4LjY5ODI2IDAuOSA5LjEzOTUzQzAuOSA5LjU4MDgxIDEuMjU2NCA5LjkzNzIxIDEuNjk3NjcgOS45MzcyMUgyLjc2MDQ3VjExQzIuNzYwNDcgMTIuNDkzNyAzLjQ4ODggMTMuODE2MyA0LjYwNCAxNC42MzZMNC4xNTcyIDE1LjA4MjhDMy44NDQxNiAxNS4zOTU4IDMuODQzMTkgMTUuOTAxMiA0LjE1NzUgMTYuMjEwNUM0LjMxMTc0IDE2LjM2NDYgNC41MTg3MSAxNi40NDQyIDQuNzIwOTMgMTYuNDQ0MkM0LjkyMzI5IDE2LjQ0NDIgNS4xMzAzOSAxNi4zNjQ1IDUuMjg0NjYgMTYuMjEwMkw2LjEzMjMxIDE1LjM2MjZDNi40OTkxNSAxNS40NTc5IDYuODgwMTcgMTUuNTE0IDcuMjc5MDcgMTUuNTE0SDE0LjcyMDlDMTUuMTE5OCAxNS41MTQgMTUuNTAwOCAxNS40NTc5IDE1Ljg2NzcgMTUuMzYyNkwxNi43MTUzIDE2LjIxMDJDMTYuODY5NiAxNi4zNjQ1IDE3LjA3NjcgMTYuNDQ0MiAxNy4yNzkxIDE2LjQ0NDJDMTcuNDgxNCAxNi40NDQyIDE3LjY4ODUgMTYuMzY0NSAxNy44NDI4IDE2LjIxMDJDMTguMTU1OCAxNS44OTcyIDE4LjE1NjggMTUuMzkxOCAxNy44NDI2IDE1LjA4MjVDMTcuODQyNCAxNS4wODI0IDE3Ljg0MjMgMTUuMDgyMyAxNy44NDIyIDE1LjA4MjJMMTcuMzk1OSAxNC42MzU5QzE4LjUxNTQgMTMuODEyIDE5LjIzOTUgMTIuNDg5MyAxOS4yMzk1IDExVjkuOTM3MjFIMTkuMzcyMUgyMC4zMDIzQzIwLjc0MzYgOS45MzcyMSAyMS4xIDkuNTgwODEgMjEuMSA5LjEzOTUzQzIxLjEgOC42OTgyNiAyMC43NDM2IDguMzQxODYgMjAuMzAyMyA4LjM0MTg2Wk0xNy42NDQyIDExQzE3LjY0NDIgMTIuNjA5OSAxNi4zMzA4IDEzLjkyMzMgMTQuNzIwOSAxMy45MjMzSDcuMjc5MDdDNS42NjkxOCAxMy45MjMzIDQuMzU1ODEgMTIuNjA5OSA0LjM1NTgxIDExVjkuOTM3MjFIMTYuNTgxNEgxNy42NDQyVjExWiIgZmlsbD0iI0FBQURDMyIgc3Ryb2tlPSIjQUFBREMzIiBzdHJva2Utd2lkdGg9IjAuMiIvPgo8L3N2Zz4K");


/***/ }),

/***/ "./src/images/icons/bedrooms-quantity.svg":
/*!************************************************!*\
  !*** ./src/images/icons/bedrooms-quantity.svg ***!
  \************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgBedroomsQuantity; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgBedroomsQuantity(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 20,
    height: 14,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M19 5.78V3c0-1.65-1.35-3-3-3h-4c-.77 0-1.47.3-2 .78C9.47.3 8.77 0 8 0H4C2.35 0 1 1.35 1 3v2.78C.39 6.33 0 7.12 0 8v5c0 .55.45 1 1 1s1-.45 1-1v-1h16v1c0 .55.45 1 1 1s1-.45 1-1V8c0-.88-.39-1.67-1-2.22zM12 2h4c.55 0 1 .45 1 1v2h-6V3c0-.55.45-1 1-1zM3 3c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v2H3V3zm-1 7V8c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v2H2z",
    fill: "#AAADC3"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAyMCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5IDUuNzhWM0MxOSAxLjM1IDE3LjY1IDAgMTYgMEgxMkMxMS4yMyAwIDEwLjUzIDAuMyAxMCAwLjc4QzkuNDcgMC4zIDguNzcgMCA4IDBINEMyLjM1IDAgMSAxLjM1IDEgM1Y1Ljc4QzAuMzkgNi4zMyAwIDcuMTIgMCA4VjEzQzAgMTMuNTUgMC40NSAxNCAxIDE0QzEuNTUgMTQgMiAxMy41NSAyIDEzVjEySDE4VjEzQzE4IDEzLjU1IDE4LjQ1IDE0IDE5IDE0QzE5LjU1IDE0IDIwIDEzLjU1IDIwIDEzVjhDMjAgNy4xMiAxOS42MSA2LjMzIDE5IDUuNzhaTTEyIDJIMTZDMTYuNTUgMiAxNyAyLjQ1IDE3IDNWNUgxMVYzQzExIDIuNDUgMTEuNDUgMiAxMiAyWk0zIDNDMyAyLjQ1IDMuNDUgMiA0IDJIOEM4LjU1IDIgOSAyLjQ1IDkgM1Y1SDNWM1pNMiAxMFY4QzIgNy40NSAyLjQ1IDcgMyA3SDE3QzE3LjU1IDcgMTggNy40NSAxOCA4VjEwSDJaIiBmaWxsPSIjQUFBREMzIi8+Cjwvc3ZnPgo=");


/***/ }),

/***/ "./src/images/icons/sq-ft.svg":
/*!************************************!*\
  !*** ./src/images/icons/sq-ft.svg ***!
  \************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgSqFt; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgSqFt(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 20,
    height: 17,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M17 9h1.7c.46 0 .68-.57.33-.87L10.67.6c-.38-.34-.96-.34-1.34 0L.97 8.13c-.34.3-.13.87.33.87H3v3H2c-.55 0-1 .45-1 1s.45 1 1 1h1v2c0 .55.45 1 1 1s1-.45 1-1v-2h4v2c0 .55.45 1 1 1s1-.45 1-1v-2h4v2c0 .55.45 1 1 1s1-.45 1-1v-2h1c.55 0 1-.45 1-1s-.45-1-1-1h-1V9zM5 12V7.19l4-3.6V12H5zm6 0V3.59l4 3.6V12h-4z",
    fill: "#AAADC3"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAyMCAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3IDlIMTguN0MxOS4xNiA5IDE5LjM4IDguNDMgMTkuMDMgOC4xM0wxMC42NyAwLjYwMDAwMUMxMC4yOSAwLjI2MDAwMSA5LjcxMDAxIDAuMjYwMDAxIDkuMzMwMDEgMC42MDAwMDFMMC45NzAwMDcgOC4xM0MwLjYzMDAwNyA4LjQzIDAuODQwMDA2IDkgMS4zMDAwMSA5SDMuMDAwMDFWMTJIMi4wMDAwMUMxLjQ1MDAxIDEyIDEuMDAwMDEgMTIuNDUgMS4wMDAwMSAxM0MxLjAwMDAxIDEzLjU1IDEuNDUwMDEgMTQgMi4wMDAwMSAxNEgzLjAwMDAxVjE2QzMuMDAwMDEgMTYuNTUgMy40NTAwMSAxNyA0LjAwMDAxIDE3QzQuNTUwMDEgMTcgNS4wMDAwMSAxNi41NSA1LjAwMDAxIDE2VjE0SDkuMDAwMDFWMTZDOS4wMDAwMSAxNi41NSA5LjQ1MDAxIDE3IDEwIDE3QzEwLjU1IDE3IDExIDE2LjU1IDExIDE2VjE0SDE1VjE2QzE1IDE2LjU1IDE1LjQ1IDE3IDE2IDE3QzE2LjU1IDE3IDE3IDE2LjU1IDE3IDE2VjE0SDE4QzE4LjU1IDE0IDE5IDEzLjU1IDE5IDEzQzE5IDEyLjQ1IDE4LjU1IDEyIDE4IDEySDE3VjlaTTUuMDAwMDEgMTJWNy4xOUw5LjAwMDAxIDMuNTlWMTJINS4wMDAwMVpNMTEgMTJWMy41OUwxNSA3LjE5VjEySDExWiIgZmlsbD0iI0FBQURDMyIvPgo8L3N2Zz4K");


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
/* harmony import */ var _components_dream_houses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dream-houses */ "./src/components/dream-houses/index.js");
/* harmony import */ var _components_properties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/properties */ "./src/components/properties/index.js");
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
    return 'https://adrianahoyos.com/ahcatalogodigital_v2/wp-content/uploads/2021/01/1-SK-SALA-SERPENT-2.png';
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

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
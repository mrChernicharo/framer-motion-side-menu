module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ContentPlaceholder.tsx":
/*!*******************************************!*\
  !*** ./components/ContentPlaceholder.tsx ***!
  \*******************************************/
/*! exports provided: Word, ContentPlaceholder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Word\", function() { return Word; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContentPlaceholder\", function() { return ContentPlaceholder; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @popmotion/popcorn */ \"@popmotion/popcorn\");\n/* harmony import */ var _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/felipechernicharo/Desktop/Dev/testes/framer-motion-side-menu/components/ContentPlaceholder.tsx\";\n\n\n\n\nconst randomInt = (min, max) => Math.round(Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_3__[\"mix\"])(min, max, Math.random()));\n\nconst generateParagraphLength = () => randomInt(5, 20);\n\nconst generateWordLength = () => randomInt(20, 100); // Randomly generate some paragraphs of word lengths\n\n\nconst paragraphs = [...Array(3)].map(() => {\n  return [...Array(generateParagraphLength())].map(generateWordLength);\n});\nconst Word = ({\n  width\n}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n  className: \"word\",\n  style: {\n    width\n  }\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 14,\n  columnNumber: 36\n}, undefined);\n\nconst Paragraph = ({\n  words\n}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n  className: \"paragraph\",\n  children: words.map((width, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Word, {\n    width: width\n  }, i, false, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 7\n  }, undefined))\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 17,\n  columnNumber: 3\n}, undefined);\n\nconst ContentPlaceholder = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"motion\"].div, {\n  variants: {\n    collapsed: {\n      scale: 0.8\n    },\n    open: {\n      scale: 1\n    }\n  },\n  transition: {\n    duration: 1\n  },\n  className: \"content-placeholder\",\n  children: paragraphs.map((words, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Paragraph, {\n    words: words\n  }, i, false, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 7\n  }, undefined))\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 25,\n  columnNumber: 3\n}, undefined);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbnRlbnRQbGFjZWhvbGRlci50c3g/Y2ZmZSJdLCJuYW1lcyI6WyJyYW5kb21JbnQiLCJtaW4iLCJtYXgiLCJNYXRoIiwicm91bmQiLCJtaXgiLCJyYW5kb20iLCJnZW5lcmF0ZVBhcmFncmFwaExlbmd0aCIsImdlbmVyYXRlV29yZExlbmd0aCIsInBhcmFncmFwaHMiLCJBcnJheSIsIm1hcCIsIldvcmQiLCJ3aWR0aCIsIlBhcmFncmFwaCIsIndvcmRzIiwiaSIsIkNvbnRlbnRQbGFjZWhvbGRlciIsImNvbGxhcHNlZCIsInNjYWxlIiwib3BlbiIsImR1cmF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFNBQVMsR0FBRyxDQUFDQyxHQUFELEVBQU1DLEdBQU4sS0FBY0MsSUFBSSxDQUFDQyxLQUFMLENBQVdDLDhEQUFHLENBQUNKLEdBQUQsRUFBTUMsR0FBTixFQUFXQyxJQUFJLENBQUNHLE1BQUwsRUFBWCxDQUFkLENBQWhDOztBQUNBLE1BQU1DLHVCQUF1QixHQUFHLE1BQU1QLFNBQVMsQ0FBQyxDQUFELEVBQUksRUFBSixDQUEvQzs7QUFDQSxNQUFNUSxrQkFBa0IsR0FBRyxNQUFNUixTQUFTLENBQUMsRUFBRCxFQUFLLEdBQUwsQ0FBMUMsQyxDQUVBOzs7QUFDQSxNQUFNUyxVQUFVLEdBQUcsQ0FBQyxHQUFHQyxLQUFLLENBQUMsQ0FBRCxDQUFULEVBQWNDLEdBQWQsQ0FBa0IsTUFBTTtBQUN6QyxTQUFPLENBQUMsR0FBR0QsS0FBSyxDQUFDSCx1QkFBdUIsRUFBeEIsQ0FBVCxFQUFzQ0ksR0FBdEMsQ0FBMENILGtCQUExQyxDQUFQO0FBQ0QsQ0FGa0IsQ0FBbkI7QUFJTyxNQUFNSSxJQUFJLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsa0JBQWU7QUFBSyxXQUFTLEVBQUMsTUFBZjtBQUFzQixPQUFLLEVBQUU7QUFBRUE7QUFBRjtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQTVCOztBQUVQLE1BQU1DLFNBQVMsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxrQkFDaEI7QUFBSyxXQUFTLEVBQUMsV0FBZjtBQUFBLFlBQ0dBLEtBQUssQ0FBQ0osR0FBTixDQUFVLENBQUNFLEtBQUQsRUFBUUcsQ0FBUixrQkFDVCxxRUFBQyxJQUFEO0FBQWMsU0FBSyxFQUFFSDtBQUFyQixLQUFXRyxDQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjs7QUFRTyxNQUFNQyxrQkFBa0IsR0FBRyxtQkFDaEMscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0UsVUFBUSxFQUFFO0FBQUVDLGFBQVMsRUFBRTtBQUFFQyxXQUFLLEVBQUU7QUFBVCxLQUFiO0FBQTZCQyxRQUFJLEVBQUU7QUFBRUQsV0FBSyxFQUFFO0FBQVQ7QUFBbkMsR0FEWjtBQUVFLFlBQVUsRUFBRTtBQUFFRSxZQUFRLEVBQUU7QUFBWixHQUZkO0FBR0UsV0FBUyxFQUFDLHFCQUhaO0FBQUEsWUFLR1osVUFBVSxDQUFDRSxHQUFYLENBQWUsQ0FBQ0ksS0FBRCxFQUFRQyxDQUFSLGtCQUNkLHFFQUFDLFNBQUQ7QUFBbUIsU0FBSyxFQUFFRDtBQUExQixLQUFnQkMsQ0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUREO0FBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURLIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Db250ZW50UGxhY2Vob2xkZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgbWl4IH0gZnJvbSBcIkBwb3Btb3Rpb24vcG9wY29yblwiO1xuXG5jb25zdCByYW5kb21JbnQgPSAobWluLCBtYXgpID0+IE1hdGgucm91bmQobWl4KG1pbiwgbWF4LCBNYXRoLnJhbmRvbSgpKSk7XG5jb25zdCBnZW5lcmF0ZVBhcmFncmFwaExlbmd0aCA9ICgpID0+IHJhbmRvbUludCg1LCAyMCk7XG5jb25zdCBnZW5lcmF0ZVdvcmRMZW5ndGggPSAoKSA9PiByYW5kb21JbnQoMjAsIDEwMCk7XG5cbi8vIFJhbmRvbWx5IGdlbmVyYXRlIHNvbWUgcGFyYWdyYXBocyBvZiB3b3JkIGxlbmd0aHNcbmNvbnN0IHBhcmFncmFwaHMgPSBbLi4uQXJyYXkoMyldLm1hcCgoKSA9PiB7XG4gIHJldHVybiBbLi4uQXJyYXkoZ2VuZXJhdGVQYXJhZ3JhcGhMZW5ndGgoKSldLm1hcChnZW5lcmF0ZVdvcmRMZW5ndGgpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBXb3JkID0gKHsgd2lkdGggfSkgPT4gPGRpdiBjbGFzc05hbWU9XCJ3b3JkXCIgc3R5bGU9e3sgd2lkdGggfX0gLz47XG5cbmNvbnN0IFBhcmFncmFwaCA9ICh7IHdvcmRzIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJwYXJhZ3JhcGhcIj5cbiAgICB7d29yZHMubWFwKCh3aWR0aCwgaSkgPT4gKFxuICAgICAgPFdvcmQga2V5PXtpfSB3aWR0aD17d2lkdGh9IC8+XG4gICAgKSl9XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGNvbnN0IENvbnRlbnRQbGFjZWhvbGRlciA9ICgpID0+IChcbiAgPG1vdGlvbi5kaXZcbiAgICB2YXJpYW50cz17eyBjb2xsYXBzZWQ6IHsgc2NhbGU6IDAuOCB9LCBvcGVuOiB7IHNjYWxlOiAxIH0gfX1cbiAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAxIH19XG4gICAgY2xhc3NOYW1lPVwiY29udGVudC1wbGFjZWhvbGRlclwiXG4gID5cbiAgICB7cGFyYWdyYXBocy5tYXAoKHdvcmRzLCBpKSA9PiAoXG4gICAgICA8UGFyYWdyYXBoIGtleT17aX0gd29yZHM9e3dvcmRzfSAvPlxuICAgICkpfVxuICA8L21vdGlvbi5kaXY+XG4pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ContentPlaceholder.tsx\n");

/***/ }),

/***/ "./components/Example.tsx":
/*!********************************!*\
  !*** ./components/Example.tsx ***!
  \********************************/
/*! exports provided: Example */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Example\", function() { return Example; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ContentPlaceholder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContentPlaceholder */ \"./components/ContentPlaceholder.tsx\");\n\n\nvar _jsxFileName = \"/Users/felipechernicharo/Desktop/Dev/testes/framer-motion-side-menu/components/Example.tsx\";\n\n\n\n\nconst Accordion = ({\n  i,\n  expanded,\n  setExpanded\n}) => {\n  const isOpen = i === expanded; // By using `AnimatePresence` to mount and unmount the contents, we can animate\n  // them in and out while also only rendering the contents of open accordions\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"motion\"].header, {\n      initial: false,\n      onClick: () => setExpanded(isOpen ? false : i),\n      animate: {\n        backgroundColor: isOpen ? \"#FF0088\" : \"#0055FF\"\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        style: {\n          textAlign: \"center\",\n          paddingTop: 7\n        },\n        children: \"Header Item\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"AnimatePresence\"], {\n      initial: false,\n      children: isOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"motion\"].section, {\n        initial: \"collapsed\",\n        animate: \"open\",\n        exit: \"collapsed\",\n        variants: {\n          open: {\n            opacity: 1,\n            height: \"auto\"\n          },\n          collapsed: {\n            opacity: 0,\n            height: 0\n          }\n        },\n        transition: {\n          duration: 0.8,\n          ease: [0.04, 0.62, 0.23, 0.98]\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ContentPlaceholder__WEBPACK_IMPORTED_MODULE_3__[\"ContentPlaceholder\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 13\n        }, undefined)\n      }, \"content\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 11\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\nconst Example = () => {\n  // This approach is if you only want max one section open at a time. If you want multiple\n  // sections to potentially be open simultaneously, they can all be given their own `useState`.\n  const {\n    0: expanded,\n    1: setExpanded\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: accordionIds.map(i => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Accordion, {\n      i: i,\n      expanded: expanded,\n      setExpanded: setExpanded\n    }, i, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }, undefined))\n  }, void 0, false);\n};\nconst accordionIds = [0, 1, 2, 3];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0V4YW1wbGUudHN4PzFhOTQiXSwibmFtZXMiOlsiQWNjb3JkaW9uIiwiaSIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJpc09wZW4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0ZXh0QWxpZ24iLCJwYWRkaW5nVG9wIiwib3BlbiIsIm9wYWNpdHkiLCJoZWlnaHQiLCJjb2xsYXBzZWQiLCJkdXJhdGlvbiIsImVhc2UiLCJFeGFtcGxlIiwidXNlU3RhdGUiLCJhY2NvcmRpb25JZHMiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxTQUFTLEdBQUcsQ0FBQztBQUFFQyxHQUFGO0FBQUtDLFVBQUw7QUFBZUM7QUFBZixDQUFELEtBQWtDO0FBQ2xELFFBQU1DLE1BQU0sR0FBR0gsQ0FBQyxLQUFLQyxRQUFyQixDQURrRCxDQUdsRDtBQUNBOztBQUNBLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsb0RBQUQsQ0FBUSxNQUFSO0FBQ0UsYUFBTyxFQUFFLEtBRFg7QUFFRSxhQUFPLEVBQUUsTUFBTUMsV0FBVyxDQUFDQyxNQUFNLEdBQUcsS0FBSCxHQUFXSCxDQUFsQixDQUY1QjtBQUdFLGFBQU8sRUFBRTtBQUNQSSx1QkFBZSxFQUFFRCxNQUFNLEdBQUcsU0FBSCxHQUFlO0FBRC9CLE9BSFg7QUFBQSw2QkFPRTtBQUFHLGFBQUssRUFBRTtBQUFFRSxtQkFBUyxFQUFFLFFBQWI7QUFBdUJDLG9CQUFVLEVBQUU7QUFBbkMsU0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFXRSxxRUFBQyw2REFBRDtBQUFpQixhQUFPLEVBQUUsS0FBMUI7QUFBQSxnQkFDR0gsTUFBTSxpQkFDTCxxRUFBQyxvREFBRCxDQUFRLE9BQVI7QUFFRSxlQUFPLEVBQUMsV0FGVjtBQUdFLGVBQU8sRUFBQyxNQUhWO0FBSUUsWUFBSSxFQUFDLFdBSlA7QUFLRSxnQkFBUSxFQUFFO0FBQ1JJLGNBQUksRUFBRTtBQUFFQyxtQkFBTyxFQUFFLENBQVg7QUFBY0Msa0JBQU0sRUFBRTtBQUF0QixXQURFO0FBRVJDLG1CQUFTLEVBQUU7QUFBRUYsbUJBQU8sRUFBRSxDQUFYO0FBQWNDLGtCQUFNLEVBQUU7QUFBdEI7QUFGSCxTQUxaO0FBU0Usa0JBQVUsRUFBRTtBQUFFRSxrQkFBUSxFQUFFLEdBQVo7QUFBaUJDLGNBQUksRUFBRSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixJQUFuQjtBQUF2QixTQVRkO0FBQUEsK0JBV0UscUVBQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVhGLFNBQ00sU0FETjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYRjtBQUFBLGtCQURGO0FBK0JELENBcENEOztBQXNDTyxNQUFNQyxPQUFPLEdBQUcsTUFBTTtBQUMzQjtBQUNBO0FBQ0EsUUFBTTtBQUFBLE9BQUNaLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCWSxzREFBUSxDQUFpQixDQUFqQixDQUF4QztBQUVBLHNCQUNFO0FBQUEsY0FDR0MsWUFBWSxDQUFDQyxHQUFiLENBQWtCaEIsQ0FBRCxpQkFDaEIscUVBQUMsU0FBRDtBQUVFLE9BQUMsRUFBRUEsQ0FGTDtBQUdFLGNBQVEsRUFBRUMsUUFIWjtBQUlFLGlCQUFXLEVBQUVDO0FBSmYsT0FDT0YsQ0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUREO0FBREgsbUJBREY7QUFZRCxDQWpCTTtBQW1CUCxNQUFNZSxZQUFZLEdBQUcsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLENBQXJCIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9FeGFtcGxlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlYWN0Tm9kZSwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IENvbnRlbnRQbGFjZWhvbGRlciB9IGZyb20gXCIuL0NvbnRlbnRQbGFjZWhvbGRlclwiO1xuXG5jb25zdCBBY2NvcmRpb24gPSAoeyBpLCBleHBhbmRlZCwgc2V0RXhwYW5kZWQgfSkgPT4ge1xuICBjb25zdCBpc09wZW4gPSBpID09PSBleHBhbmRlZDtcblxuICAvLyBCeSB1c2luZyBgQW5pbWF0ZVByZXNlbmNlYCB0byBtb3VudCBhbmQgdW5tb3VudCB0aGUgY29udGVudHMsIHdlIGNhbiBhbmltYXRlXG4gIC8vIHRoZW0gaW4gYW5kIG91dCB3aGlsZSBhbHNvIG9ubHkgcmVuZGVyaW5nIHRoZSBjb250ZW50cyBvZiBvcGVuIGFjY29yZGlvbnNcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG1vdGlvbi5oZWFkZXJcbiAgICAgICAgaW5pdGlhbD17ZmFsc2V9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEV4cGFuZGVkKGlzT3BlbiA/IGZhbHNlIDogaSl9XG4gICAgICAgIGFuaW1hdGU9e3tcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzT3BlbiA/IFwiI0ZGMDA4OFwiIDogXCIjMDA1NUZGXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxwIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgcGFkZGluZ1RvcDogNyB9fT5IZWFkZXIgSXRlbTwvcD5cbiAgICAgIDwvbW90aW9uLmhlYWRlcj5cblxuICAgICAgPEFuaW1hdGVQcmVzZW5jZSBpbml0aWFsPXtmYWxzZX0+XG4gICAgICAgIHtpc09wZW4gJiYgKFxuICAgICAgICAgIDxtb3Rpb24uc2VjdGlvblxuICAgICAgICAgICAga2V5PVwiY29udGVudFwiXG4gICAgICAgICAgICBpbml0aWFsPVwiY29sbGFwc2VkXCJcbiAgICAgICAgICAgIGFuaW1hdGU9XCJvcGVuXCJcbiAgICAgICAgICAgIGV4aXQ9XCJjb2xsYXBzZWRcIlxuICAgICAgICAgICAgdmFyaWFudHM9e3tcbiAgICAgICAgICAgICAgb3BlbjogeyBvcGFjaXR5OiAxLCBoZWlnaHQ6IFwiYXV0b1wiIH0sXG4gICAgICAgICAgICAgIGNvbGxhcHNlZDogeyBvcGFjaXR5OiAwLCBoZWlnaHQ6IDAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjgsIGVhc2U6IFswLjA0LCAwLjYyLCAwLjIzLCAwLjk4XSB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDb250ZW50UGxhY2Vob2xkZXIgLz5cbiAgICAgICAgICA8L21vdGlvbi5zZWN0aW9uPlxuICAgICAgICApfVxuICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgRXhhbXBsZSA9ICgpID0+IHtcbiAgLy8gVGhpcyBhcHByb2FjaCBpcyBpZiB5b3Ugb25seSB3YW50IG1heCBvbmUgc2VjdGlvbiBvcGVuIGF0IGEgdGltZS4gSWYgeW91IHdhbnQgbXVsdGlwbGVcbiAgLy8gc2VjdGlvbnMgdG8gcG90ZW50aWFsbHkgYmUgb3BlbiBzaW11bHRhbmVvdXNseSwgdGhleSBjYW4gYWxsIGJlIGdpdmVuIHRoZWlyIG93biBgdXNlU3RhdGVgLlxuICBjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IHVzZVN0YXRlPGZhbHNlIHwgbnVtYmVyPigwKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7YWNjb3JkaW9uSWRzLm1hcCgoaSkgPT4gKFxuICAgICAgICA8QWNjb3JkaW9uXG4gICAgICAgICAga2V5PXtpfVxuICAgICAgICAgIGk9e2l9XG4gICAgICAgICAgZXhwYW5kZWQ9e2V4cGFuZGVkfVxuICAgICAgICAgIHNldEV4cGFuZGVkPXtzZXRFeHBhbmRlZH1cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgYWNjb3JkaW9uSWRzID0gWzAsIDEsIDIsIDNdO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Example.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Example__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Example */ \"./components/Example.tsx\");\n\nvar _jsxFileName = \"/Users/felipechernicharo/Desktop/Dev/testes/framer-motion-side-menu/pages/index.tsx\";\n\nconst arr = [1, 2, 3, 4];\nfunction Home() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"example-container\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Example__WEBPACK_IMPORTED_MODULE_1__[\"Example\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJhcnIiLCJIb21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFFQSxNQUFNQSxHQUFHLEdBQUcsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLENBQVo7QUFFZSxTQUFTQyxJQUFULEdBQWdCO0FBQzdCLHNCQUNFO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUEsMkJBQ0UscUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXhhbXBsZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL0V4YW1wbGVcIjtcblxuY29uc3QgYXJyID0gWzEsIDIsIDMsIDRdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhhbXBsZS1jb250YWluZXJcIj5cbiAgICAgIDxFeGFtcGxlIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "@popmotion/popcorn":
/*!*************************************!*\
  !*** external "@popmotion/popcorn" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@popmotion/popcorn\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcG9wbW90aW9uL3BvcGNvcm5cIj9lMmQ1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBwb3Btb3Rpb24vcG9wY29ybi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBwb3Btb3Rpb24vcG9wY29yblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@popmotion/popcorn\n");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"framer-motion\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmcmFtZXItbW90aW9uXCI/ZmY3ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJmcmFtZXItbW90aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnJhbWVyLW1vdGlvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///framer-motion\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });
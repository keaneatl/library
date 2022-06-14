/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Roboto-Regular.ttf */ "./src/fonts/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Roboto-Bold.ttf */ "./src/fonts/Roboto-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/mainbglight.jpg */ "./src/images/mainbglight.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* variables */\n:root {\n  --primary: #60efbc;\n  --secondary: #58d5c9;\n}\n\n/* base styles */\nhtml {\n  font-size: 16px;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\n.mark-read-bg {\n  background: rgb(0, 0, 0);\n  background: linear-gradient(\n    142deg,\n    rgba(0, 0, 0, 1) 3%,\n    rgba(91, 90, 90, 1) 68%,\n    rgba(134, 133, 133, 1) 89%\n  );\n  margin: 1.2rem 1rem;\n  padding: 1.25rem;\n  min-width: 9.9rem;\n  width: 50%;\n  max-width: 14rem;\n  min-height: 10.5rem;\n  border-radius: 10px;\n  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);\n  transition: all 0.2s;\n}\n\n.mark-sample-read {\n  background: rgb(0, 0, 0);\n  background: linear-gradient(\n    142deg,\n    rgba(0, 0, 0, 1) 3%,\n    rgba(91, 90, 90, 1) 68%,\n    rgba(134, 133, 133, 1) 89%\n  );\n  margin: 1.2rem 1rem;\n  padding: 1.25rem;\n  min-width: 9.9rem;\n  width: 50%;\n  max-width: 14rem;\n  min-height: 10.5rem;\n  border-radius: 10px;\n  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);\n  transition: all 0.2s;\n}\n\n#hambgmenu {\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100%;\n  background-color: white;\n}\n\n.close-hambg-icon {\n  margin-bottom: 10px;\n  height: 2rem;\n  cursor: pointer;\n}\n\n/* fonts */\n@font-face {\n  font-family: Roboto;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n  font-family: Roboto-Bold;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  font-weight: bold;\n}\n\n.hambg-login {\n  font-family: Roboto-Bold;\n  font-size: 1.5rem;\n}\n.header-container {\n  font-family: Roboto-Bold;\n  background-color: white;\n}\n\n.main-header {\n  font-size: 2rem;\n}\n\n.mark-read {\n  font-family: Roboto-Bold;\n  color: white;\n}\n\n.footer {\n  font-family: Roboto-Bold;\n  color: var(--secondary);\n}\n#add-book-container {\n  font-family: Roboto;\n}\n\n/* mobile styles */\n.main-container {\n  height: 100vh;\n  max-height: 100%;\n  width: 100%;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: 100%;\n  background-position: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.header-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  height: 5.7rem;\n  width: 100%;\n}\n\n.sign-in {\n  display: none;\n}\n\n.hambg-icon {\n  height: 2rem;\n  cursor: pointer;\n}\n\n#add-book-container {\n  display: none;\n  margin: 120px auto;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  height: 65%;\n  width: 55%;\n  background-color: white;\n  border-radius: 10px;\n  z-index: 1;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.45);\n}\n\n#submit-book {\n  width: 100px;\n  height: 38px;\n  border: 0;\n  border-radius: 5px;\n  font-family: Roboto-bold;\n  cursor: pointer;\n}\n\ninput {\n  width: 80%;\n}\n\n.form-item {\n  margin: 0.5rem;\n}\n\n.close-form {\n  margin: 25px 0 0 10px;\n  height: 1rem;\n  align-self: flex-start;\n  cursor: pointer;\n}\n\n.add-book {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.books-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: white;\n  border-radius: 10px;\n  height: 100%;\n  width: 90%;\n  margin: 2rem 0 0 0;\n  overflow: auto;\n}\n\n.book-card {\n  background: radial-gradient(var(--primary), var(--secondary));\n  margin: 1.2rem 1rem;\n  padding: 1.25rem;\n  min-width: 9.9rem;\n  width: 50%;\n  max-width: 14rem;\n  min-height: 10.5rem;\n  border-radius: 10px;\n  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);\n  transition: all 0.2s;\n}\n\n.book-card:hover {\n  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);\n  transform: scale(1.01);\n}\n\n.delete-book {\n  height: 1rem;\n  cursor: pointer;\n}\n\n.mark-read {\n  cursor: pointer;\n  float: right;\n}\n\n.book {\n  margin: 1.6rem;\n  line-height: 1.3;\n  color: white;\n  text-align: justify;\n}\n\n.add-book-button {\n  width: 90%;\n  bottom: 0;\n  margin: auto 0;\n  position: sticky;\n  background: radial-gradient(var(--primary), var(--secondary));\n  border: 0;\n  border-radius: 10px 10px 0 0;\n  color: white;\n  padding-top: 0.6rem;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n\n.add-book-button:hover {\n  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);\n  transform: scale(1.01);\n}\n\n.add-ico {\n  height: 1.2rem;\n}\n\n.add-book-txt {\n  display: none;\n}\n\n.footer {\n  background-color: white;\n  width: 14rem;\n  height: 1.5rem;\n  border-radius: 5px;\n  text-align: center;\n  margin: 0.8rem;\n  padding: 0.4rem;\n}\n\n/* small tablet styles */\n@media screen and (min-width: 620px) {\n  .sign-in {\n    display: inherit;\n  }\n\n  .hambg-icon {\n    display: none;\n  }\n\n  .book-card {\n    margin: 0.7rem;\n  }\n\n  .add-book-button {\n    width: 20%;\n  }\n\n  .footer {\n    padding-bottom: 0.3rem;\n  }\n}\n\n/* large tablet styles */\n@media screen and (min-width: 820px) {\n  .books-container {\n    flex-direction: row;\n    justify-content: center;\n    align-items: flex-start;\n    flex-wrap: wrap;\n  }\n\n  .book-card {\n    width: 25%;\n  }\n}\n\n/* desktop styles */\n@media screen and (min-width: 1020px) {\n  .books-container {\n    justify-content: space-evenly;\n  }\n  .add-book-txt {\n    display: inherit;\n    font-family: Roboto-bold;\n  }\n\n  .add-book-button {\n    margin: auto 1rem;\n    padding: 0.6rem 0.5rem 0.5rem 0.5rem;\n    border-radius: 10px;\n    width: 15%;\n    max-width: 10rem;\n    bottom: 0.8rem;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    align-items: center;\n    align-self: flex-end;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"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","sourcesContent":["/* variables */\n:root {\n  --primary: #60efbc;\n  --secondary: #58d5c9;\n}\n\n/* base styles */\nhtml {\n  font-size: 16px;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\n.mark-read-bg {\n  background: rgb(0, 0, 0);\n  background: linear-gradient(\n    142deg,\n    rgba(0, 0, 0, 1) 3%,\n    rgba(91, 90, 90, 1) 68%,\n    rgba(134, 133, 133, 1) 89%\n  );\n  margin: 1.2rem 1rem;\n  padding: 1.25rem;\n  min-width: 9.9rem;\n  width: 50%;\n  max-width: 14rem;\n  min-height: 10.5rem;\n  border-radius: 10px;\n  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);\n  transition: all 0.2s;\n}\n\n.mark-sample-read {\n  background: rgb(0, 0, 0);\n  background: linear-gradient(\n    142deg,\n    rgba(0, 0, 0, 1) 3%,\n    rgba(91, 90, 90, 1) 68%,\n    rgba(134, 133, 133, 1) 89%\n  );\n  margin: 1.2rem 1rem;\n  padding: 1.25rem;\n  min-width: 9.9rem;\n  width: 50%;\n  max-width: 14rem;\n  min-height: 10.5rem;\n  border-radius: 10px;\n  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);\n  transition: all 0.2s;\n}\n\n#hambgmenu {\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100%;\n  background-color: white;\n}\n\n.close-hambg-icon {\n  margin-bottom: 10px;\n  height: 2rem;\n  cursor: pointer;\n}\n\n/* fonts */\n@font-face {\n  font-family: Roboto;\n  src: url(../fonts/Roboto-Regular.ttf);\n}\n\n@font-face {\n  font-family: Roboto-Bold;\n  src: url(../fonts/Roboto-Bold.ttf);\n  font-weight: bold;\n}\n\n.hambg-login {\n  font-family: Roboto-Bold;\n  font-size: 1.5rem;\n}\n.header-container {\n  font-family: Roboto-Bold;\n  background-color: white;\n}\n\n.main-header {\n  font-size: 2rem;\n}\n\n.mark-read {\n  font-family: Roboto-Bold;\n  color: white;\n}\n\n.footer {\n  font-family: Roboto-Bold;\n  color: var(--secondary);\n}\n#add-book-container {\n  font-family: Roboto;\n}\n\n/* mobile styles */\n.main-container {\n  height: 100vh;\n  max-height: 100%;\n  width: 100%;\n  background-image: url(../images/mainbglight.jpg);\n  background-size: 100%;\n  background-position: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.header-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  height: 5.7rem;\n  width: 100%;\n}\n\n.sign-in {\n  display: none;\n}\n\n.hambg-icon {\n  height: 2rem;\n  cursor: pointer;\n}\n\n#add-book-container {\n  display: none;\n  margin: 120px auto;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  height: 65%;\n  width: 55%;\n  background-color: white;\n  border-radius: 10px;\n  z-index: 1;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.45);\n}\n\n#submit-book {\n  width: 100px;\n  height: 38px;\n  border: 0;\n  border-radius: 5px;\n  font-family: Roboto-bold;\n  cursor: pointer;\n}\n\ninput {\n  width: 80%;\n}\n\n.form-item {\n  margin: 0.5rem;\n}\n\n.close-form {\n  margin: 25px 0 0 10px;\n  height: 1rem;\n  align-self: flex-start;\n  cursor: pointer;\n}\n\n.add-book {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.books-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: white;\n  border-radius: 10px;\n  height: 100%;\n  width: 90%;\n  margin: 2rem 0 0 0;\n  overflow: auto;\n}\n\n.book-card {\n  background: radial-gradient(var(--primary), var(--secondary));\n  margin: 1.2rem 1rem;\n  padding: 1.25rem;\n  min-width: 9.9rem;\n  width: 50%;\n  max-width: 14rem;\n  min-height: 10.5rem;\n  border-radius: 10px;\n  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);\n  transition: all 0.2s;\n}\n\n.book-card:hover {\n  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);\n  transform: scale(1.01);\n}\n\n.delete-book {\n  height: 1rem;\n  cursor: pointer;\n}\n\n.mark-read {\n  cursor: pointer;\n  float: right;\n}\n\n.book {\n  margin: 1.6rem;\n  line-height: 1.3;\n  color: white;\n  text-align: justify;\n}\n\n.add-book-button {\n  width: 90%;\n  bottom: 0;\n  margin: auto 0;\n  position: sticky;\n  background: radial-gradient(var(--primary), var(--secondary));\n  border: 0;\n  border-radius: 10px 10px 0 0;\n  color: white;\n  padding-top: 0.6rem;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n\n.add-book-button:hover {\n  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);\n  transform: scale(1.01);\n}\n\n.add-ico {\n  height: 1.2rem;\n}\n\n.add-book-txt {\n  display: none;\n}\n\n.footer {\n  background-color: white;\n  width: 14rem;\n  height: 1.5rem;\n  border-radius: 5px;\n  text-align: center;\n  margin: 0.8rem;\n  padding: 0.4rem;\n}\n\n/* small tablet styles */\n@media screen and (min-width: 620px) {\n  .sign-in {\n    display: inherit;\n  }\n\n  .hambg-icon {\n    display: none;\n  }\n\n  .book-card {\n    margin: 0.7rem;\n  }\n\n  .add-book-button {\n    width: 20%;\n  }\n\n  .footer {\n    padding-bottom: 0.3rem;\n  }\n}\n\n/* large tablet styles */\n@media screen and (min-width: 820px) {\n  .books-container {\n    flex-direction: row;\n    justify-content: center;\n    align-items: flex-start;\n    flex-wrap: wrap;\n  }\n\n  .book-card {\n    width: 25%;\n  }\n}\n\n/* desktop styles */\n@media screen and (min-width: 1020px) {\n  .books-container {\n    justify-content: space-evenly;\n  }\n  .add-book-txt {\n    display: inherit;\n    font-family: Roboto-bold;\n  }\n\n  .add-book-button {\n    margin: auto 1rem;\n    padding: 0.6rem 0.5rem 0.5rem 0.5rem;\n    border-radius: 10px;\n    width: 15%;\n    max-width: 10rem;\n    bottom: 0.8rem;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    align-items: center;\n    align-self: flex-end;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}", "",{"version":3,"sources":["webpack://./src/styles/reset.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/reset.css":
/*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/fonts/Roboto-Bold.ttf":
/*!***********************************!*\
  !*** ./src/fonts/Roboto-Bold.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Roboto-Bold.ttf";

/***/ }),

/***/ "./src/fonts/Roboto-Regular.ttf":
/*!**************************************!*\
  !*** ./src/fonts/Roboto-Regular.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Roboto-Regular.ttf";

/***/ }),

/***/ "./src/images/mainbglight.jpg":
/*!************************************!*\
  !*** ./src/images/mainbglight.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "mainbglight.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/reset.css */ "./src/styles/reset.css");


class Book {
    constructor(title, author, pages, status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
        this.collectInfo;
    }
    collectInfo() {
        const { title, author, pages } = this;
        return `${title} by ${author}, ${pages} pages.`;
    }
}
const library = (() => {
    let myLibrary = [];
    // cache DOM
    const submitBook = document.querySelector("#submit-book");
    const addBookContainer = document.querySelector("#add-book-container");
    const addBookButton = document.querySelector(".add-book-button");
    const closeForm = document.querySelector(".close-form");
    // bind events
    submitBook.addEventListener("click", () => {
        addBookToLib(myLibrary);
        displayLibrary(myLibrary);
    });
    submitBook.addEventListener("click", () => {
        addBookContainer.removeAttribute("style");
        addBookButton.removeAttribute("style");
    });
    addBookButton.addEventListener("click", () => {
        addBookContainer.setAttribute("style", "display: flex;");
        addBookButton.setAttribute("style", "display: none;");
    });
    closeForm.addEventListener("click", () => {
        addBookContainer.removeAttribute("style");
        addBookButton.removeAttribute("style");
    });
    if (!localStorage.getItem("savedLibrary")) {
        createLibStorage();
    }
    myLibrary = getStoredLibrary();
    displayLibrary(myLibrary);
})();
function createLibStorage() {
    const sampleBook = new Book("Harry Potter and the Philosopher's Stone", "J.K Rowling", 223, "Planning to Read");
    localStorage.setItem("savedLibrary", JSON.stringify([sampleBook]));
}
function updateLibraryStorage(newLib) {
    localStorage.setItem("savedLibrary", JSON.stringify(newLib));
}
function addBookToLib(lib) {
    const bookTitle = document.querySelector("#book-title");
    const bookAuthor = document.querySelector("#book-author");
    const bookPages = document.querySelector("#book-pages");
    const bookStatus = document.querySelector("input[name=book_status]:checked");
    if (!bookTitle.value || !bookAuthor.value || !bookPages.value) {
        return;
    }
    const newBook = new Book(bookTitle.value, bookAuthor.value, +bookPages.value, bookStatus.value);
    lib.push(newBook);
    updateLibraryStorage(lib);
    resetNewBookForm();
}
function getStoredLibrary() {
    const storedLibrary = JSON.parse(localStorage.getItem("savedLibrary"));
    storedLibrary.map((book) => {
        const { title, author, pages } = book;
        book.collectInfo = () => {
            return `${title} by ${author}, ${pages} pages.`;
        };
        return book;
    });
    return storedLibrary;
}
function displayLibrary(myLibrary) {
    const booksContainer = document.querySelector(".books-container");
    myLibrary.forEach((book, i) => {
        if (!!document.getElementById(`book-${i}`)) {
            return;
        }
        const newBookCard = document.createElement("div");
        const newBookDesc = document.createElement("p");
        const markBookRead = document.createElement("p");
        const deleteNewBook = document.createElement("img");
        const newBookInfo = book.collectInfo();
        deleteNewBook.setAttribute("src", "images/cardclose.png");
        deleteNewBook.classList.add("delete-book");
        deleteNewBook.addEventListener("click", () => {
            myLibrary.splice(i, 1);
            newBookCard.remove();
            localStorage.setItem("savedLibrary", JSON.stringify(myLibrary));
        });
        newBookCard.classList.add("book-card");
        newBookCard.setAttribute("id", `book-${i}`);
        newBookDesc.textContent = `${newBookInfo}`;
        newBookDesc.classList.add("book");
        markBookRead.textContent = "Mark as read";
        markBookRead.classList.add("mark-read");
        markBookRead.addEventListener("click", () => {
            newBookCard.classList.toggle("book-card");
            newBookCard.classList.toggle("mark-read-bg");
            book.status === "Read"
                ? (book.status = "Planning to Read")
                : (book.status = "Read");
            localStorage.setItem("savedLibrary", JSON.stringify(myLibrary));
        });
        if (book.status === "Read") {
            newBookCard.classList.toggle("book-card");
            newBookCard.classList.toggle("mark-read-bg");
        }
        newBookCard.append(deleteNewBook);
        newBookCard.append(newBookDesc);
        newBookCard.append(markBookRead);
        booksContainer.append(newBookCard);
    });
}
const hamBurgerMenu = (() => {
    // cache DOM
    const hamBurgerIcon = document.querySelector(".hambg-icon");
    const hamBurgerMenu = document.querySelector("#hambgmenu");
    const closeHamBurgerIcon = document.querySelector(".close-hambg-icon");
    const mainContainer = document.querySelector(".main-container");
    // bind events
    hamBurgerIcon.addEventListener("click", () => {
        mainContainer.setAttribute("style", "display: none;");
        hamBurgerMenu.setAttribute("style", "display: flex;");
    });
    closeHamBurgerIcon.addEventListener("click", () => {
        mainContainer.removeAttribute("style");
        hamBurgerMenu.removeAttribute("style");
    });
})();
function resetNewBookForm() {
    const bookTitle = document.querySelector("#book-title");
    const bookAuthor = document.querySelector("#book-author");
    const bookPages = document.querySelector("#book-pages");
    bookTitle.value = "";
    bookAuthor.value = "";
    bookPages.value = "";
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsRUFBRSxDQUFDO0FBRUwsU0FBUyxnQkFBZ0I7SUFDdkIsTUFBTSxTQUFTLEdBQXFCLFFBQVEsQ0FBQyxhQUFhLENBQ3hELGFBQWEsQ0FDTSxDQUFDO0lBQ3RCLE1BQU0sVUFBVSxHQUFxQixRQUFRLENBQUMsYUFBYSxDQUN6RCxjQUFjLENBQ0ssQ0FBQztJQUN0QixNQUFNLFNBQVMsR0FBcUIsUUFBUSxDQUFDLGFBQWEsQ0FDeEQsYUFBYSxDQUNNLENBQUM7SUFFdEIsU0FBUyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDckIsVUFBVSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDdEIsU0FBUyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDdkIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xpYnJhcnkvLi9zcmMvc3R5bGVzL21haW4uY3NzIiwid2VicGFjazovL2xpYnJhcnkvLi9zcmMvc3R5bGVzL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL3NyYy9zdHlsZXMvbWFpbi5jc3M/ZTgwYSIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vc3JjL3N0eWxlcy9yZXNldC5jc3M/NGNmYiIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2xpYnJhcnkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9saWJyYXJ5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9saWJyYXJ5L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xpYnJhcnkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9saWJyYXJ5L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2xpYnJhcnkvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvUm9ib3RvLUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL21haW5iZ2xpZ2h0LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogdmFyaWFibGVzICovXFxuOnJvb3Qge1xcbiAgLS1wcmltYXJ5OiAjNjBlZmJjO1xcbiAgLS1zZWNvbmRhcnk6ICM1OGQ1Yzk7XFxufVxcblxcbi8qIGJhc2Ugc3R5bGVzICovXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5tYXJrLXJlYWQtYmcge1xcbiAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDApO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICAxNDJkZWcsXFxuICAgIHJnYmEoMCwgMCwgMCwgMSkgMyUsXFxuICAgIHJnYmEoOTEsIDkwLCA5MCwgMSkgNjglLFxcbiAgICByZ2JhKDEzNCwgMTMzLCAxMzMsIDEpIDg5JVxcbiAgKTtcXG4gIG1hcmdpbjogMS4ycmVtIDFyZW07XFxuICBwYWRkaW5nOiAxLjI1cmVtO1xcbiAgbWluLXdpZHRoOiA5LjlyZW07XFxuICB3aWR0aDogNTAlO1xcbiAgbWF4LXdpZHRoOiAxNHJlbTtcXG4gIG1pbi1oZWlnaHQ6IDEwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDZweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXG59XFxuXFxuLm1hcmstc2FtcGxlLXJlYWQge1xcbiAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDApO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICAxNDJkZWcsXFxuICAgIHJnYmEoMCwgMCwgMCwgMSkgMyUsXFxuICAgIHJnYmEoOTEsIDkwLCA5MCwgMSkgNjglLFxcbiAgICByZ2JhKDEzNCwgMTMzLCAxMzMsIDEpIDg5JVxcbiAgKTtcXG4gIG1hcmdpbjogMS4ycmVtIDFyZW07XFxuICBwYWRkaW5nOiAxLjI1cmVtO1xcbiAgbWluLXdpZHRoOiA5LjlyZW07XFxuICB3aWR0aDogNTAlO1xcbiAgbWF4LXdpZHRoOiAxNHJlbTtcXG4gIG1pbi1oZWlnaHQ6IDEwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDZweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXG59XFxuXFxuI2hhbWJnbWVudSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uY2xvc2UtaGFtYmctaWNvbiB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBmb250cyAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogUm9ib3RvLUJvbGQ7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmhhbWJnLWxvZ2luIHtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8tQm9sZDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxuICBmb250LWZhbWlseTogUm9ib3RvLUJvbGQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1haW4taGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLm1hcmstcmVhZCB7XFxuICBmb250LWZhbWlseTogUm9ib3RvLUJvbGQ7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5mb290ZXIge1xcbiAgZm9udC1mYW1pbHk6IFJvYm90by1Cb2xkO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxufVxcbiNhZGQtYm9vay1jb250YWluZXIge1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG59XFxuXFxuLyogbW9iaWxlIHN0eWxlcyAqL1xcbi5tYWluLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlci1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDUuN3JlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc2lnbi1pbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaGFtYmctaWNvbiB7XFxuICBoZWlnaHQ6IDJyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNhZGQtYm9vay1jb250YWluZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG1hcmdpbjogMTIwcHggYXV0bztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGhlaWdodDogNjUlO1xcbiAgd2lkdGg6IDU1JTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHotaW5kZXg6IDE7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXG59XFxuXFxuI3N1Ym1pdC1ib29rIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMzhweDtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8tYm9sZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaW5wdXQge1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLmZvcm0taXRlbSB7XFxuICBtYXJnaW46IDAuNXJlbTtcXG59XFxuXFxuLmNsb3NlLWZvcm0ge1xcbiAgbWFyZ2luOiAyNXB4IDAgMCAxMHB4O1xcbiAgaGVpZ2h0OiAxcmVtO1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC1ib29rIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJvb2tzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiAycmVtIDAgMCAwO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5ib29rLWNhcmQge1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KHZhcigtLXByaW1hcnkpLCB2YXIoLS1zZWNvbmRhcnkpKTtcXG4gIG1hcmdpbjogMS4ycmVtIDFyZW07XFxuICBwYWRkaW5nOiAxLjI1cmVtO1xcbiAgbWluLXdpZHRoOiA5LjlyZW07XFxuICB3aWR0aDogNTAlO1xcbiAgbWF4LXdpZHRoOiAxNHJlbTtcXG4gIG1pbi1oZWlnaHQ6IDEwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDZweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXG59XFxuXFxuLmJvb2stY2FyZDpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwcHggNnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcXG59XFxuXFxuLmRlbGV0ZS1ib29rIHtcXG4gIGhlaWdodDogMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1hcmstcmVhZCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmbG9hdDogcmlnaHQ7XFxufVxcblxcbi5ib29rIHtcXG4gIG1hcmdpbjogMS42cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcblxcbi5hZGQtYm9vay1idXR0b24ge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGJvdHRvbTogMDtcXG4gIG1hcmdpbjogYXV0byAwO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCh2YXIoLS1wcmltYXJ5KSwgdmFyKC0tc2Vjb25kYXJ5KSk7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZy10b3A6IDAuNnJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG5cXG4uYWRkLWJvb2stYnV0dG9uOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDBweCA2cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xcbn1cXG5cXG4uYWRkLWljbyB7XFxuICBoZWlnaHQ6IDEuMnJlbTtcXG59XFxuXFxuLmFkZC1ib29rLXR4dCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDE0cmVtO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDAuOHJlbTtcXG4gIHBhZGRpbmc6IDAuNHJlbTtcXG59XFxuXFxuLyogc21hbGwgdGFibGV0IHN0eWxlcyAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYyMHB4KSB7XFxuICAuc2lnbi1pbiB7XFxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XFxuICB9XFxuXFxuICAuaGFtYmctaWNvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAuYm9vay1jYXJkIHtcXG4gICAgbWFyZ2luOiAwLjdyZW07XFxuICB9XFxuXFxuICAuYWRkLWJvb2stYnV0dG9uIHtcXG4gICAgd2lkdGg6IDIwJTtcXG4gIH1cXG5cXG4gIC5mb290ZXIge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4zcmVtO1xcbiAgfVxcbn1cXG5cXG4vKiBsYXJnZSB0YWJsZXQgc3R5bGVzICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODIwcHgpIHtcXG4gIC5ib29rcy1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gIH1cXG5cXG4gIC5ib29rLWNhcmQge1xcbiAgICB3aWR0aDogMjUlO1xcbiAgfVxcbn1cXG5cXG4vKiBkZXNrdG9wIHN0eWxlcyAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjBweCkge1xcbiAgLmJvb2tzLWNvbnRhaW5lciB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgfVxcbiAgLmFkZC1ib29rLXR4dCB7XFxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8tYm9sZDtcXG4gIH1cXG5cXG4gIC5hZGQtYm9vay1idXR0b24ge1xcbiAgICBtYXJnaW46IGF1dG8gMXJlbTtcXG4gICAgcGFkZGluZzogMC42cmVtIDAuNXJlbSAwLjVyZW0gMC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB3aWR0aDogMTUlO1xcbiAgICBtYXgtd2lkdGg6IDEwcmVtO1xcbiAgICBib3R0b206IDAuOHJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGNBQWM7QUFD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ICAtLXByaW1hcnk6ICM2MGVmYmM7XFxuICAtLXNlY29uZGFyeTogIzU4ZDVjOTtcXG59XFxuXFxuLyogYmFzZSBzdHlsZXMgKi9cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLm1hcmstcmVhZC1iZyB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMCk7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIDE0MmRlZyxcXG4gICAgcmdiYSgwLCAwLCAwLCAxKSAzJSxcXG4gICAgcmdiYSg5MSwgOTAsIDkwLCAxKSA2OCUsXFxuICAgIHJnYmEoMTM0LCAxMzMsIDEzMywgMSkgODklXFxuICApO1xcbiAgbWFyZ2luOiAxLjJyZW0gMXJlbTtcXG4gIHBhZGRpbmc6IDEuMjVyZW07XFxuICBtaW4td2lkdGg6IDkuOXJlbTtcXG4gIHdpZHRoOiA1MCU7XFxuICBtYXgtd2lkdGg6IDE0cmVtO1xcbiAgbWluLWhlaWdodDogMTAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAwcHggNnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcbn1cXG5cXG4ubWFyay1zYW1wbGUtcmVhZCB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMCk7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIDE0MmRlZyxcXG4gICAgcmdiYSgwLCAwLCAwLCAxKSAzJSxcXG4gICAgcmdiYSg5MSwgOTAsIDkwLCAxKSA2OCUsXFxuICAgIHJnYmEoMTM0LCAxMzMsIDEzMywgMSkgODklXFxuICApO1xcbiAgbWFyZ2luOiAxLjJyZW0gMXJlbTtcXG4gIHBhZGRpbmc6IDEuMjVyZW07XFxuICBtaW4td2lkdGg6IDkuOXJlbTtcXG4gIHdpZHRoOiA1MCU7XFxuICBtYXgtd2lkdGg6IDE0cmVtO1xcbiAgbWluLWhlaWdodDogMTAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAwcHggNnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcbn1cXG5cXG4jaGFtYmdtZW51IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5jbG9zZS1oYW1iZy1pY29uIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBoZWlnaHQ6IDJyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIGZvbnRzICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgc3JjOiB1cmwoLi4vZm9udHMvUm9ib3RvLVJlZ3VsYXIudHRmKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogUm9ib3RvLUJvbGQ7XFxuICBzcmM6IHVybCguLi9mb250cy9Sb2JvdG8tQm9sZC50dGYpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5oYW1iZy1sb2dpbiB7XFxuICBmb250LWZhbWlseTogUm9ib3RvLUJvbGQ7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuLmhlYWRlci1jb250YWluZXIge1xcbiAgZm9udC1mYW1pbHk6IFJvYm90by1Cb2xkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5tYWluLWhlYWRlciB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5tYXJrLXJlYWQge1xcbiAgZm9udC1mYW1pbHk6IFJvYm90by1Cb2xkO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8tQm9sZDtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbn1cXG4jYWRkLWJvb2stY29udGFpbmVyIHtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxufVxcblxcbi8qIG1vYmlsZSBzdHlsZXMgKi9cXG4ubWFpbi1jb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWFnZXMvbWFpbmJnbGlnaHQuanBnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlci1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDUuN3JlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc2lnbi1pbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaGFtYmctaWNvbiB7XFxuICBoZWlnaHQ6IDJyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNhZGQtYm9vay1jb250YWluZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG1hcmdpbjogMTIwcHggYXV0bztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGhlaWdodDogNjUlO1xcbiAgd2lkdGg6IDU1JTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHotaW5kZXg6IDE7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXG59XFxuXFxuI3N1Ym1pdC1ib29rIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMzhweDtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8tYm9sZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaW5wdXQge1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLmZvcm0taXRlbSB7XFxuICBtYXJnaW46IDAuNXJlbTtcXG59XFxuXFxuLmNsb3NlLWZvcm0ge1xcbiAgbWFyZ2luOiAyNXB4IDAgMCAxMHB4O1xcbiAgaGVpZ2h0OiAxcmVtO1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC1ib29rIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJvb2tzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiAycmVtIDAgMCAwO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5ib29rLWNhcmQge1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KHZhcigtLXByaW1hcnkpLCB2YXIoLS1zZWNvbmRhcnkpKTtcXG4gIG1hcmdpbjogMS4ycmVtIDFyZW07XFxuICBwYWRkaW5nOiAxLjI1cmVtO1xcbiAgbWluLXdpZHRoOiA5LjlyZW07XFxuICB3aWR0aDogNTAlO1xcbiAgbWF4LXdpZHRoOiAxNHJlbTtcXG4gIG1pbi1oZWlnaHQ6IDEwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDZweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXG59XFxuXFxuLmJvb2stY2FyZDpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwcHggNnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcXG59XFxuXFxuLmRlbGV0ZS1ib29rIHtcXG4gIGhlaWdodDogMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1hcmstcmVhZCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmbG9hdDogcmlnaHQ7XFxufVxcblxcbi5ib29rIHtcXG4gIG1hcmdpbjogMS42cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcblxcbi5hZGQtYm9vay1idXR0b24ge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGJvdHRvbTogMDtcXG4gIG1hcmdpbjogYXV0byAwO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCh2YXIoLS1wcmltYXJ5KSwgdmFyKC0tc2Vjb25kYXJ5KSk7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZy10b3A6IDAuNnJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG5cXG4uYWRkLWJvb2stYnV0dG9uOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDBweCA2cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xcbn1cXG5cXG4uYWRkLWljbyB7XFxuICBoZWlnaHQ6IDEuMnJlbTtcXG59XFxuXFxuLmFkZC1ib29rLXR4dCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDE0cmVtO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDAuOHJlbTtcXG4gIHBhZGRpbmc6IDAuNHJlbTtcXG59XFxuXFxuLyogc21hbGwgdGFibGV0IHN0eWxlcyAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYyMHB4KSB7XFxuICAuc2lnbi1pbiB7XFxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XFxuICB9XFxuXFxuICAuaGFtYmctaWNvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAuYm9vay1jYXJkIHtcXG4gICAgbWFyZ2luOiAwLjdyZW07XFxuICB9XFxuXFxuICAuYWRkLWJvb2stYnV0dG9uIHtcXG4gICAgd2lkdGg6IDIwJTtcXG4gIH1cXG5cXG4gIC5mb290ZXIge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4zcmVtO1xcbiAgfVxcbn1cXG5cXG4vKiBsYXJnZSB0YWJsZXQgc3R5bGVzICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODIwcHgpIHtcXG4gIC5ib29rcy1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gIH1cXG5cXG4gIC5ib29rLWNhcmQge1xcbiAgICB3aWR0aDogMjUlO1xcbiAgfVxcbn1cXG5cXG4vKiBkZXNrdG9wIHN0eWxlcyAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjBweCkge1xcbiAgLmJvb2tzLWNvbnRhaW5lciB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgfVxcbiAgLmFkZC1ib29rLXR4dCB7XFxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8tYm9sZDtcXG4gIH1cXG5cXG4gIC5hZGQtYm9vay1idXR0b24ge1xcbiAgICBtYXJnaW46IGF1dG8gMXJlbTtcXG4gICAgcGFkZGluZzogMC42cmVtIDAuNXJlbSAwLjVyZW0gMC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB3aWR0aDogMTUlO1xcbiAgICBtYXgtd2lkdGg6IDEwcmVtO1xcbiAgICBib3R0b206IDAuOHJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FHQzs7QUFFRDs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiYnVuZGxlXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGVzL21haW4uY3NzXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9yZXNldC5jc3NcIjtcblxuY2xhc3MgQm9vayB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGF1dGhvcjogc3RyaW5nO1xuICBwYWdlczogbnVtYmVyO1xuICBzdGF0dXM6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcih0aXRsZTogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgcGFnZXM6IG51bWJlciwgc3RhdHVzOiBzdHJpbmcpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5hdXRob3IgPSBhdXRob3I7XG4gICAgdGhpcy5wYWdlcyA9IHBhZ2VzO1xuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgIHRoaXMuY29sbGVjdEluZm87XG4gIH1cblxuICBwdWJsaWMgY29sbGVjdEluZm8oKSB7XG4gICAgY29uc3QgeyB0aXRsZSwgYXV0aG9yLCBwYWdlcyB9ID0gdGhpcztcbiAgICByZXR1cm4gYCR7dGl0bGV9IGJ5ICR7YXV0aG9yfSwgJHtwYWdlc30gcGFnZXMuYDtcbiAgfVxufVxuXG5pbnRlcmZhY2UgUGFyc2VkQm9vayB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGF1dGhvcjogc3RyaW5nO1xuICBwYWdlczogbnVtYmVyO1xuICBzdGF0dXM6IHN0cmluZztcbiAgY29sbGVjdEluZm8oKTogc3RyaW5nO1xufVxuXG5jb25zdCBsaWJyYXJ5ID0gKCgpID0+IHtcbiAgbGV0IG15TGlicmFyeTogQXJyYXk8Qm9vaz4gPSBbXTtcblxuICAvLyBjYWNoZSBET01cbiAgY29uc3Qgc3VibWl0Qm9vazogSFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiI3N1Ym1pdC1ib29rXCJcbiAgKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgY29uc3QgYWRkQm9va0NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiI2FkZC1ib29rLWNvbnRhaW5lclwiXG4gICkgYXMgSFRNTERpdkVsZW1lbnQ7XG4gIGNvbnN0IGFkZEJvb2tCdXR0b246IEhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi5hZGQtYm9vay1idXR0b25cIlxuICApIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICBjb25zdCBjbG9zZUZvcm06IEhUTUxJbWFnZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLmNsb3NlLWZvcm1cIlxuICApIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XG5cbiAgLy8gYmluZCBldmVudHNcbiAgc3VibWl0Qm9vay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGFkZEJvb2tUb0xpYihteUxpYnJhcnkpO1xuICAgIGRpc3BsYXlMaWJyYXJ5KG15TGlicmFyeSk7XG4gIH0pO1xuICBzdWJtaXRCb29rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYWRkQm9va0NvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKTtcbiAgICBhZGRCb29rQnV0dG9uLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpO1xuICB9KTtcbiAgYWRkQm9va0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGFkZEJvb2tDb250YWluZXIuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBmbGV4O1wiKTtcbiAgICBhZGRCb29rQnV0dG9uLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogbm9uZTtcIik7XG4gIH0pO1xuICBjbG9zZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBhZGRCb29rQ29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpO1xuICAgIGFkZEJvb2tCdXR0b24ucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIik7XG4gIH0pO1xuXG4gIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzYXZlZExpYnJhcnlcIikpIHtcbiAgICBjcmVhdGVMaWJTdG9yYWdlKCk7XG4gIH1cbiAgbXlMaWJyYXJ5ID0gZ2V0U3RvcmVkTGlicmFyeSgpO1xuICBkaXNwbGF5TGlicmFyeShteUxpYnJhcnkpO1xufSkoKTtcblxuZnVuY3Rpb24gY3JlYXRlTGliU3RvcmFnZSgpIHtcbiAgY29uc3Qgc2FtcGxlQm9vayA9IG5ldyBCb29rKFxuICAgIFwiSGFycnkgUG90dGVyIGFuZCB0aGUgUGhpbG9zb3BoZXIncyBTdG9uZVwiLFxuICAgIFwiSi5LIFJvd2xpbmdcIixcbiAgICAyMjMsXG4gICAgXCJQbGFubmluZyB0byBSZWFkXCJcbiAgKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzYXZlZExpYnJhcnlcIiwgSlNPTi5zdHJpbmdpZnkoW3NhbXBsZUJvb2tdKSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpYnJhcnlTdG9yYWdlKG5ld0xpYjogQXJyYXk8Qm9vaz4pIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzYXZlZExpYnJhcnlcIiwgSlNPTi5zdHJpbmdpZnkobmV3TGliKSk7XG59XG5cbmZ1bmN0aW9uIGFkZEJvb2tUb0xpYihsaWI6IEFycmF5PEJvb2s+KSB7XG4gIGNvbnN0IGJvb2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9vay10aXRsZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICBjb25zdCBib29rQXV0aG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib29rLWF1dGhvclwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuXG4gIGNvbnN0IGJvb2tQYWdlczogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIjYm9vay1wYWdlc1wiXG4gICkgYXMgSFRNTElucHV0RWxlbWVudDtcblxuICBjb25zdCBib29rU3RhdHVzOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcImlucHV0W25hbWU9Ym9va19zdGF0dXNdOmNoZWNrZWRcIlxuICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgaWYgKCFib29rVGl0bGUudmFsdWUgfHwgIWJvb2tBdXRob3IudmFsdWUgfHwgIWJvb2tQYWdlcy52YWx1ZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IG5ld0Jvb2sgPSBuZXcgQm9vayhcbiAgICBib29rVGl0bGUudmFsdWUsXG4gICAgYm9va0F1dGhvci52YWx1ZSxcbiAgICArYm9va1BhZ2VzLnZhbHVlLFxuICAgIGJvb2tTdGF0dXMudmFsdWVcbiAgKTtcblxuICBsaWIucHVzaChuZXdCb29rKTtcbiAgdXBkYXRlTGlicmFyeVN0b3JhZ2UobGliKTtcbiAgcmVzZXROZXdCb29rRm9ybSgpO1xufVxuXG5mdW5jdGlvbiBnZXRTdG9yZWRMaWJyYXJ5KCkge1xuICBjb25zdCBzdG9yZWRMaWJyYXJ5OiBBcnJheTxCb29rPiA9IEpTT04ucGFyc2UoXG4gICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzYXZlZExpYnJhcnlcIikgYXMgc3RyaW5nXG4gICk7XG4gIHN0b3JlZExpYnJhcnkubWFwKChib29rOiBQYXJzZWRCb29rKSA9PiB7XG4gICAgY29uc3QgeyB0aXRsZSwgYXV0aG9yLCBwYWdlcyB9ID0gYm9vaztcbiAgICBib29rLmNvbGxlY3RJbmZvID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIGAke3RpdGxlfSBieSAke2F1dGhvcn0sICR7cGFnZXN9IHBhZ2VzLmA7XG4gICAgfTtcbiAgICByZXR1cm4gYm9vaztcbiAgfSk7XG5cbiAgcmV0dXJuIHN0b3JlZExpYnJhcnk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlMaWJyYXJ5KG15TGlicmFyeTogQXJyYXk8Qm9vaz4pIHtcbiAgY29uc3QgYm9va3NDb250YWluZXI6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi5ib29rcy1jb250YWluZXJcIlxuICApIGFzIEhUTUxEaXZFbGVtZW50O1xuXG4gIG15TGlicmFyeS5mb3JFYWNoKChib29rLCBpKSA9PiB7XG4gICAgaWYgKCEhZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGJvb2stJHtpfWApKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbmV3Qm9va0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG5ld0Jvb2tEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgbWFya0Jvb2tSZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgZGVsZXRlTmV3Qm9vayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgY29uc3QgbmV3Qm9va0luZm8gPSBib29rLmNvbGxlY3RJbmZvKCk7XG4gICAgZGVsZXRlTmV3Qm9vay5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCJpbWFnZXMvY2FyZGNsb3NlLnBuZ1wiKTtcbiAgICBkZWxldGVOZXdCb29rLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtYm9va1wiKTtcbiAgICBkZWxldGVOZXdCb29rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBteUxpYnJhcnkuc3BsaWNlKGksIDEpO1xuICAgICAgbmV3Qm9va0NhcmQucmVtb3ZlKCk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNhdmVkTGlicmFyeVwiLCBKU09OLnN0cmluZ2lmeShteUxpYnJhcnkpKTtcbiAgICB9KTtcblxuICAgIG5ld0Jvb2tDYXJkLmNsYXNzTGlzdC5hZGQoXCJib29rLWNhcmRcIik7XG4gICAgbmV3Qm9va0NhcmQuc2V0QXR0cmlidXRlKFwiaWRcIiwgYGJvb2stJHtpfWApO1xuICAgIG5ld0Jvb2tEZXNjLnRleHRDb250ZW50ID0gYCR7bmV3Qm9va0luZm99YDtcbiAgICBuZXdCb29rRGVzYy5jbGFzc0xpc3QuYWRkKFwiYm9va1wiKTtcbiAgICBtYXJrQm9va1JlYWQudGV4dENvbnRlbnQgPSBcIk1hcmsgYXMgcmVhZFwiO1xuICAgIG1hcmtCb29rUmVhZC5jbGFzc0xpc3QuYWRkKFwibWFyay1yZWFkXCIpO1xuICAgIG1hcmtCb29rUmVhZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgbmV3Qm9va0NhcmQuY2xhc3NMaXN0LnRvZ2dsZShcImJvb2stY2FyZFwiKTtcbiAgICAgIG5ld0Jvb2tDYXJkLmNsYXNzTGlzdC50b2dnbGUoXCJtYXJrLXJlYWQtYmdcIik7XG4gICAgICBib29rLnN0YXR1cyA9PT0gXCJSZWFkXCJcbiAgICAgICAgPyAoYm9vay5zdGF0dXMgPSBcIlBsYW5uaW5nIHRvIFJlYWRcIilcbiAgICAgICAgOiAoYm9vay5zdGF0dXMgPSBcIlJlYWRcIik7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNhdmVkTGlicmFyeVwiLCBKU09OLnN0cmluZ2lmeShteUxpYnJhcnkpKTtcbiAgICB9KTtcbiAgICBpZiAoYm9vay5zdGF0dXMgPT09IFwiUmVhZFwiKSB7XG4gICAgICBuZXdCb29rQ2FyZC5jbGFzc0xpc3QudG9nZ2xlKFwiYm9vay1jYXJkXCIpO1xuICAgICAgbmV3Qm9va0NhcmQuY2xhc3NMaXN0LnRvZ2dsZShcIm1hcmstcmVhZC1iZ1wiKTtcbiAgICB9XG5cbiAgICBuZXdCb29rQ2FyZC5hcHBlbmQoZGVsZXRlTmV3Qm9vayk7XG4gICAgbmV3Qm9va0NhcmQuYXBwZW5kKG5ld0Jvb2tEZXNjKTtcbiAgICBuZXdCb29rQ2FyZC5hcHBlbmQobWFya0Jvb2tSZWFkKTtcbiAgICBib29rc0NvbnRhaW5lci5hcHBlbmQobmV3Qm9va0NhcmQpO1xuICB9KTtcbn1cblxuY29uc3QgaGFtQnVyZ2VyTWVudSA9ICgoKSA9PiB7XG4gIC8vIGNhY2hlIERPTVxuICBjb25zdCBoYW1CdXJnZXJJY29uOiBIVE1MSW1hZ2VFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi5oYW1iZy1pY29uXCJcbiAgKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xuICBjb25zdCBoYW1CdXJnZXJNZW51OiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIjaGFtYmdtZW51XCJcbiAgKSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgY29uc3QgY2xvc2VIYW1CdXJnZXJJY29uOiBIVE1MSW1hZ2VFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi5jbG9zZS1oYW1iZy1pY29uXCJcbiAgKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xuICBjb25zdCBtYWluQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIubWFpbi1jb250YWluZXJcIlxuICApIGFzIEhUTUxEaXZFbGVtZW50O1xuXG4gIC8vIGJpbmQgZXZlbnRzXG4gIGhhbUJ1cmdlckljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtYWluQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogbm9uZTtcIik7XG4gICAgaGFtQnVyZ2VyTWVudS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6IGZsZXg7XCIpO1xuICB9KTtcbiAgY2xvc2VIYW1CdXJnZXJJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbWFpbkNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKTtcbiAgICBoYW1CdXJnZXJNZW51LnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpO1xuICB9KTtcbn0pKCk7XG5cbmZ1bmN0aW9uIHJlc2V0TmV3Qm9va0Zvcm0oKSB7XG4gIGNvbnN0IGJvb2tUaXRsZTogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIjYm9vay10aXRsZVwiXG4gICkgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgY29uc3QgYm9va0F1dGhvcjogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIjYm9vay1hdXRob3JcIlxuICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gIGNvbnN0IGJvb2tQYWdlczogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIjYm9vay1wYWdlc1wiXG4gICkgYXMgSFRNTElucHV0RWxlbWVudDtcblxuICBib29rVGl0bGUudmFsdWUgPSBcIlwiO1xuICBib29rQXV0aG9yLnZhbHVlID0gXCJcIjtcbiAgYm9va1BhZ2VzLnZhbHVlID0gXCJcIjtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
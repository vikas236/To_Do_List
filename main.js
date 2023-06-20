/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/navbar.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/navbar.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, `/* .Navbar styling */

nav {
    position: fixed;
}

.nav, .nav .left, .nav .right {
    width: 100vw;
    height: 45px;
    background: #282828;
    display: flex;
    align-items: center;
}

.nav {
    justify-content: space-around;
}

/* Styling left side of .navbar  */

/* Hamburger for sidebar */
.nav .hamburger {
    width: 30px;
    height: 30px;
    border-radius: 5px;
    position: relative;
    transition: .3s;
    margin-left: 25px;
    cursor: pointer;
}

.nav .hamburger:hover {
    background: rgba(255, 255, 255, .3);
}

.nav .left .ham, .ham::before, .ham::after {
    width: 15px;
    height: 1px;
    background: white;
    border-radius: 25px;
}

.ham {
    margin: 14px 8px;
}

.ham::before, .ham::after {
    content: "";
    position: absolute;
    display: inline-block;
}

.ham::before {
    top: 9px;
}

.ham::after {
    bottom: 10px;
}

/* Home button and search icon */
.nav .left .home, .nav .left .mag_glass {
    width: 30px;
    height: 30px;
    padding: 5px;
    border-radius: 5px;
    transition: .3s;
    cursor: pointer;
}

.nav .left .home:hover {
    background: rgba(255, 255, 255, .3);
}

.nav .left path {
    fill: white;
}

.mag_glass {
    position: absolute;
    left: 10px;
    top: -1px;
}

/* Search bar in .nav */
.nav .search {
    position: relative;
}

.nav .left input{
    width: 200px;
    height: 28px;
    background: rgba(116, 116, 116, .3);
    border: none;
    outline: none;
    border-radius: 3px;
    margin-left: 10px;
    padding-left: 30px;
    padding-top: 2px;
    transition: .4s;
}

.nav .left input:hover {
    background: white;
    color: rgba(0, 0, 0, .4);
}

.nav .left input::placeholder {
    color: white;
}

.nav .left input:focus{
    border: none;
    outline: none;
    width: 350px;
    background: white;
    color: rgba(0, 0, 0, .4);
}


/* Styling right side of .navbar */

.nav .right {
    width: 275px;
    display: flex;
    justify-content: space-around;
    margin-right: 35px;
}

.nav .right .upgrade {
    background: rgba(116, 116, 116, .3);
    padding: 5px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;
    transition: .2s;
}

.upgrade_pro, .upgrade .hover_title {
    display: flex;
    align-items: center;
}

.nav .right .upgrade:hover {
    background: rgba(116, 116, 116, 1);
}

/* Star symbol in upgrde box */
.nav .right .upgrade svg {
    width: 20px;
    height: 20px;
    margin-right: 5px;
    cursor: pointer;
}

.nav .right .upgrade path {
    fill: #FFD093;
}

.nav .right .upgrade span {
    color: white;
    font-size: 12px;
}

.right .upgrade .hover_text {
    width: 300px;
    display: none;
    position: absolute;
    top: 50px;
    right: 25px;
    background: #282828;
    color: white;
    padding: 25px;
    border-radius: 10px;
}

.right .upgrade:hover .hover_text {
    display: block;
}


/* Plus icon */
.nav .right svg {
    width: 30px;
    height: 30px;
    border-radius: 5px;
    cursor: pointer;
}

.nav .right > svg:hover {
    background: rgba(116, 116, 116, .3);
}

.nav .right path {
    fill: white;
}

/* Help icon */
.nav .right .help {
    padding: 2px;
}

/* Notification icon */
.nav .right .notification {
    padding: 2px;
}`, "",{"version":3,"sources":["webpack://./src/css/navbar.css"],"names":[],"mappings":"AAAA,oBAAoB;;AAEpB;IACI,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,6BAA6B;AACjC;;AAEA,kCAAkC;;AAElC,0BAA0B;AAC1B;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;IACf,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,WAAW;IACX,WAAW;IACX,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,qBAAqB;AACzB;;AAEA;IACI,QAAQ;AACZ;;AAEA;IACI,YAAY;AAChB;;AAEA,gCAAgC;AAChC;IACI,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,SAAS;AACb;;AAEA,uBAAuB;AACvB;IACI,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,mCAAmC;IACnC,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,wBAAwB;AAC5B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,iBAAiB;IACjB,wBAAwB;AAC5B;;;AAGA,kCAAkC;;AAElC;IACI,YAAY;IACZ,aAAa;IACb,6BAA6B;IAC7B,kBAAkB;AACtB;;AAEA;IACI,mCAAmC;IACnC,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,kCAAkC;AACtC;;AAEA,8BAA8B;AAC9B;IACI,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,cAAc;AAClB;;;AAGA,cAAc;AACd;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,WAAW;AACf;;AAEA,cAAc;AACd;IACI,YAAY;AAChB;;AAEA,sBAAsB;AACtB;IACI,YAAY;AAChB","sourcesContent":["/* .Navbar styling */\r\n\r\nnav {\r\n    position: fixed;\r\n}\r\n\r\n.nav, .nav .left, .nav .right {\r\n    width: 100vw;\r\n    height: 45px;\r\n    background: #282828;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.nav {\r\n    justify-content: space-around;\r\n}\r\n\r\n/* Styling left side of .navbar  */\r\n\r\n/* Hamburger for sidebar */\r\n.nav .hamburger {\r\n    width: 30px;\r\n    height: 30px;\r\n    border-radius: 5px;\r\n    position: relative;\r\n    transition: .3s;\r\n    margin-left: 25px;\r\n    cursor: pointer;\r\n}\r\n\r\n.nav .hamburger:hover {\r\n    background: rgba(255, 255, 255, .3);\r\n}\r\n\r\n.nav .left .ham, .ham::before, .ham::after {\r\n    width: 15px;\r\n    height: 1px;\r\n    background: white;\r\n    border-radius: 25px;\r\n}\r\n\r\n.ham {\r\n    margin: 14px 8px;\r\n}\r\n\r\n.ham::before, .ham::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: inline-block;\r\n}\r\n\r\n.ham::before {\r\n    top: 9px;\r\n}\r\n\r\n.ham::after {\r\n    bottom: 10px;\r\n}\r\n\r\n/* Home button and search icon */\r\n.nav .left .home, .nav .left .mag_glass {\r\n    width: 30px;\r\n    height: 30px;\r\n    padding: 5px;\r\n    border-radius: 5px;\r\n    transition: .3s;\r\n    cursor: pointer;\r\n}\r\n\r\n.nav .left .home:hover {\r\n    background: rgba(255, 255, 255, .3);\r\n}\r\n\r\n.nav .left path {\r\n    fill: white;\r\n}\r\n\r\n.mag_glass {\r\n    position: absolute;\r\n    left: 10px;\r\n    top: -1px;\r\n}\r\n\r\n/* Search bar in .nav */\r\n.nav .search {\r\n    position: relative;\r\n}\r\n\r\n.nav .left input{\r\n    width: 200px;\r\n    height: 28px;\r\n    background: rgba(116, 116, 116, .3);\r\n    border: none;\r\n    outline: none;\r\n    border-radius: 3px;\r\n    margin-left: 10px;\r\n    padding-left: 30px;\r\n    padding-top: 2px;\r\n    transition: .4s;\r\n}\r\n\r\n.nav .left input:hover {\r\n    background: white;\r\n    color: rgba(0, 0, 0, .4);\r\n}\r\n\r\n.nav .left input::placeholder {\r\n    color: white;\r\n}\r\n\r\n.nav .left input:focus{\r\n    border: none;\r\n    outline: none;\r\n    width: 350px;\r\n    background: white;\r\n    color: rgba(0, 0, 0, .4);\r\n}\r\n\r\n\r\n/* Styling right side of .navbar */\r\n\r\n.nav .right {\r\n    width: 275px;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    margin-right: 35px;\r\n}\r\n\r\n.nav .right .upgrade {\r\n    background: rgba(116, 116, 116, .3);\r\n    padding: 5px;\r\n    display: flex;\r\n    align-items: center;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    transition: .2s;\r\n}\r\n\r\n.upgrade_pro, .upgrade .hover_title {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.nav .right .upgrade:hover {\r\n    background: rgba(116, 116, 116, 1);\r\n}\r\n\r\n/* Star symbol in upgrde box */\r\n.nav .right .upgrade svg {\r\n    width: 20px;\r\n    height: 20px;\r\n    margin-right: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n.nav .right .upgrade path {\r\n    fill: #FFD093;\r\n}\r\n\r\n.nav .right .upgrade span {\r\n    color: white;\r\n    font-size: 12px;\r\n}\r\n\r\n.right .upgrade .hover_text {\r\n    width: 300px;\r\n    display: none;\r\n    position: absolute;\r\n    top: 50px;\r\n    right: 25px;\r\n    background: #282828;\r\n    color: white;\r\n    padding: 25px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.right .upgrade:hover .hover_text {\r\n    display: block;\r\n}\r\n\r\n\r\n/* Plus icon */\r\n.nav .right svg {\r\n    width: 30px;\r\n    height: 30px;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n.nav .right > svg:hover {\r\n    background: rgba(116, 116, 116, .3);\r\n}\r\n\r\n.nav .right path {\r\n    fill: white;\r\n}\r\n\r\n/* Help icon */\r\n.nav .right .help {\r\n    padding: 2px;\r\n}\r\n\r\n/* Notification icon */\r\n.nav .right .notification {\r\n    padding: 2px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/sidebar.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/sidebar.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, `/* Sidebar */

.sidebar {
    width: 300px;
    height: 100vh;
    background: #FAFAFA;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    padding: 25px;
    transform: translateX(-300px);
    transition: .2s;
    position: fixed;
    top: 45px;

}

.sidebar.active {
    transform: translateX(0px);
}

.sidebar .project:hover, .project.active {
    background: #EEEEEE;
    cursor: pointer;
}


/* section names eg: inbox */
.section_name {
    font-size: 14px;
    margin-left: 10px;
    font-weight: 100;
}

/* Projects section */
.projects_title.section {
    margin-top: 10px;
    width: 250px;
    height: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
}

.projects_title span{
    color: rgba(0, 0, 0, .7);
}

.projects_title svg {
    width: 20px;
    height: 20px;
    cursor: pointer;
}

.projects_title path {
    fill: rgba(0, 0, 0, .7);
}

.project {
    display: inline-block;
    color: rgba(0, 0, 0, .7);
    width: 225px;
    height: 35px;
    padding-left: 10px;
    margin-left: 15px;
    padding-top: 7px;
    border-radius: 5px;
    position: relative;
    margin-top: 5px;
}

.default_project {
    padding-top: 3px;
    margin-top: 10px;
}

.house_icon {
    width: 20px;
    height: 20px;
    margin-left: 10px;
    position: relative;
    top: 3px;
}

.project_name {
    margin-left: 15px;
    margin-top: -5px;
    width: 260px;
}

.project_name input {
    width: 150px;
    border-radius: 5px;
    height: 30px;
    border: 1px solid blue;
    padding: 5px;
    outline: none;
    margin-right: 5px;
    font-size: 14px;
}

.project_name:hover {
    background: none;
}

.project_name svg {
    width: 35px;
    height: 35px;
    padding: 5px;
    cursor: pointer;
    position: relative;
    top: 14px;
    margin-left: -5px;
}

.project_name svg:hover, span.project svg:hover {
    background: rgba(0, 0, 0, .1);
    border-radius: 5px;

}

span.project svg {
    width: 25px;
    height: 25px;
    cursor: pointer;
    position: absolute;
    inset: 5px 190px;
}`, "",{"version":3,"sources":["webpack://./src/css/sidebar.css"],"names":[],"mappings":"AAAA,YAAY;;AAEZ;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,qBAAqB;IACrB,iBAAiB;IACjB,aAAa;IACb,6BAA6B;IAC7B,eAAe;IACf,eAAe;IACf,SAAS;;AAEb;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,mBAAmB;IACnB,eAAe;AACnB;;;AAGA,4BAA4B;AAC5B;IACI,eAAe;IACf,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA,qBAAqB;AACrB;IACI,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;IACrB,wBAAwB;IACxB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,QAAQ;AACZ;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,sBAAsB;IACtB,YAAY;IACZ,aAAa;IACb,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,kBAAkB;IAClB,SAAS;IACT,iBAAiB;AACrB;;AAEA;IACI,6BAA6B;IAC7B,kBAAkB;;AAEtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,eAAe;IACf,kBAAkB;IAClB,gBAAgB;AACpB","sourcesContent":["/* Sidebar */\r\n\r\n.sidebar {\r\n    width: 300px;\r\n    height: 100vh;\r\n    background: #FAFAFA;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: left;\r\n    align-items: left;\r\n    padding: 25px;\r\n    transform: translateX(-300px);\r\n    transition: .2s;\r\n    position: fixed;\r\n    top: 45px;\r\n\r\n}\r\n\r\n.sidebar.active {\r\n    transform: translateX(0px);\r\n}\r\n\r\n.sidebar .project:hover, .project.active {\r\n    background: #EEEEEE;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n/* section names eg: inbox */\r\n.section_name {\r\n    font-size: 14px;\r\n    margin-left: 10px;\r\n    font-weight: 100;\r\n}\r\n\r\n/* Projects section */\r\n.projects_title.section {\r\n    margin-top: 10px;\r\n    width: 250px;\r\n    height: 35px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 0 10px;\r\n}\r\n\r\n.projects_title span{\r\n    color: rgba(0, 0, 0, .7);\r\n}\r\n\r\n.projects_title svg {\r\n    width: 20px;\r\n    height: 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n.projects_title path {\r\n    fill: rgba(0, 0, 0, .7);\r\n}\r\n\r\n.project {\r\n    display: inline-block;\r\n    color: rgba(0, 0, 0, .7);\r\n    width: 225px;\r\n    height: 35px;\r\n    padding-left: 10px;\r\n    margin-left: 15px;\r\n    padding-top: 7px;\r\n    border-radius: 5px;\r\n    position: relative;\r\n    margin-top: 5px;\r\n}\r\n\r\n.default_project {\r\n    padding-top: 3px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.house_icon {\r\n    width: 20px;\r\n    height: 20px;\r\n    margin-left: 10px;\r\n    position: relative;\r\n    top: 3px;\r\n}\r\n\r\n.project_name {\r\n    margin-left: 15px;\r\n    margin-top: -5px;\r\n    width: 260px;\r\n}\r\n\r\n.project_name input {\r\n    width: 150px;\r\n    border-radius: 5px;\r\n    height: 30px;\r\n    border: 1px solid blue;\r\n    padding: 5px;\r\n    outline: none;\r\n    margin-right: 5px;\r\n    font-size: 14px;\r\n}\r\n\r\n.project_name:hover {\r\n    background: none;\r\n}\r\n\r\n.project_name svg {\r\n    width: 35px;\r\n    height: 35px;\r\n    padding: 5px;\r\n    cursor: pointer;\r\n    position: relative;\r\n    top: 14px;\r\n    margin-left: -5px;\r\n}\r\n\r\n.project_name svg:hover, span.project svg:hover {\r\n    background: rgba(0, 0, 0, .1);\r\n    border-radius: 5px;\r\n\r\n}\r\n\r\nspan.project svg {\r\n    width: 25px;\r\n    height: 25px;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    inset: 5px 190px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/tasks.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/tasks.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, `/* Task title and List */
.tasks {
    width: 850px;
    height: 750px;
    position: relative;
    inset: 100px 700px;
    padding: 25px;
}

.tasks .add_task {
    width: 115px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    margin-left: 15px;
    padding: 5px 10px;
    border-radius: 5px;
}

.add_task:hover {
    background: rgba(0, 0, 0, .1);
}

.add_task span {
    margin-top: 3px;
}

/* Add new task */
.new_task {
    height: 0;
    width: 500px;
    opacity: 0;
    transform: scale(.3) translateY(1250px);
    position: absolute;
    inset: 200px 700px;
    display: flex;
    flex-direction: column;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0px 0px 50px -19px rgba(0,0,0,0.75);
    transition: .3s;
    z-index: 1;
}

.new_task.active {
    height: 250px;
    opacity: 1;
    transform: scale(1) translateY(0);
}

input.task_name {
    border: none;
    font-size: 24px;
    outline: none;
}

textarea.task_description {
    height: 100px;
    outline: none;
    border: none;
    margin-left: 5px;
    margin-top: 5px;
    resize: none;
    font-size: 14px;
}

.new_task .btns {
    display: flex;
    margin-top: 25px;
    width: 200px;
    height: 30px;
    justify-content: space-between;
}

.task_due, .task_priority {
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, .3)
}

.task_priority {
    background: white;
}

.task_due:hover, .task_priority:hover {
    background: rgba(0, 0, 0, .05);
    cursor: pointer;
}

.new_task .confirm_btns {
    display: flex;
    justify-content: right;
}

.cancel_task, .confirm_task {
    width: 75px;
    height: 30px;
    margin-right: 10px;
    border: none;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
}

.confirm_task {
    background:rgba(0, 0, 0, .3);
    color: white;
}

.confirm_task.active {
    background: rgba(0, 0, 0, .8);
}

.confirm_task.active:hover {
    background: rgba(0, 0, 0, 1);
}

.new_task hr {
    width: 500px;
    color: rgba(0, 0, 0, .3);
    margin-left: -15px;
}

.confirm_task {
    margin: 0;
}

.wall {
    width: 100vw;
    height: 100vh;
    position: fixed;
    inset: 0;
    display: none;
}

.wall.active {
    display: block;
}`, "",{"version":3,"sources":["webpack://./src/css/tasks.css"],"names":[],"mappings":"AAAA,wBAAwB;AACxB;IACI,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,eAAe;IACf,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,eAAe;AACnB;;AAEA,iBAAiB;AACjB;IACI,SAAS;IACT,YAAY;IACZ,UAAU;IACV,uCAAuC;IACvC,kBAAkB;IAClB,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,mBAAmB;IACnB,+CAA+C;IAC/C,eAAe;IACf,UAAU;AACd;;AAEA;IACI,aAAa;IACb,UAAU;IACV,iCAAiC;AACrC;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,YAAY;IACZ,gBAAgB;IAChB,eAAe;IACf,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;IAClB;AACJ;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,8BAA8B;IAC9B,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,4BAA4B;IAC5B,YAAY;AAChB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,YAAY;IACZ,wBAAwB;IACxB,kBAAkB;AACtB;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,eAAe;IACf,QAAQ;IACR,aAAa;AACjB;;AAEA;IACI,cAAc;AAClB","sourcesContent":["/* Task title and List */\r\n.tasks {\r\n    width: 850px;\r\n    height: 750px;\r\n    position: relative;\r\n    inset: 100px 700px;\r\n    padding: 25px;\r\n}\r\n\r\n.tasks .add_task {\r\n    width: 115px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    margin-left: 15px;\r\n    padding: 5px 10px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.add_task:hover {\r\n    background: rgba(0, 0, 0, .1);\r\n}\r\n\r\n.add_task span {\r\n    margin-top: 3px;\r\n}\r\n\r\n/* Add new task */\r\n.new_task {\r\n    height: 0;\r\n    width: 500px;\r\n    opacity: 0;\r\n    transform: scale(.3) translateY(1250px);\r\n    position: absolute;\r\n    inset: 200px 700px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 15px;\r\n    border-radius: 10px;\r\n    box-shadow: 0px 0px 50px -19px rgba(0,0,0,0.75);\r\n    transition: .3s;\r\n    z-index: 1;\r\n}\r\n\r\n.new_task.active {\r\n    height: 250px;\r\n    opacity: 1;\r\n    transform: scale(1) translateY(0);\r\n}\r\n\r\ninput.task_name {\r\n    border: none;\r\n    font-size: 24px;\r\n    outline: none;\r\n}\r\n\r\ntextarea.task_description {\r\n    height: 100px;\r\n    outline: none;\r\n    border: none;\r\n    margin-left: 5px;\r\n    margin-top: 5px;\r\n    resize: none;\r\n    font-size: 14px;\r\n}\r\n\r\n.new_task .btns {\r\n    display: flex;\r\n    margin-top: 25px;\r\n    width: 200px;\r\n    height: 30px;\r\n    justify-content: space-between;\r\n}\r\n\r\n.task_due, .task_priority {\r\n    border-radius: 5px;\r\n    border: 1px solid rgba(0, 0, 0, .3)\r\n}\r\n\r\n.task_priority {\r\n    background: white;\r\n}\r\n\r\n.task_due:hover, .task_priority:hover {\r\n    background: rgba(0, 0, 0, .05);\r\n    cursor: pointer;\r\n}\r\n\r\n.new_task .confirm_btns {\r\n    display: flex;\r\n    justify-content: right;\r\n}\r\n\r\n.cancel_task, .confirm_task {\r\n    width: 75px;\r\n    height: 30px;\r\n    margin-right: 10px;\r\n    border: none;\r\n    outline: none;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n.confirm_task {\r\n    background:rgba(0, 0, 0, .3);\r\n    color: white;\r\n}\r\n\r\n.confirm_task.active {\r\n    background: rgba(0, 0, 0, .8);\r\n}\r\n\r\n.confirm_task.active:hover {\r\n    background: rgba(0, 0, 0, 1);\r\n}\r\n\r\n.new_task hr {\r\n    width: 500px;\r\n    color: rgba(0, 0, 0, .3);\r\n    margin-left: -15px;\r\n}\r\n\r\n.confirm_task {\r\n    margin: 0;\r\n}\r\n\r\n.wall {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    position: fixed;\r\n    inset: 0;\r\n    display: none;\r\n}\r\n\r\n.wall.active {\r\n    display: block;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/upgrade_box.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/upgrade_box.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, `/* Upgrade plans box display */
.upgrade_plans,
.upgrade_plans .left,
.upgrade_plans .right {
    display: flex;
    flex-direction: column;
}

.upgrade_plans {
    width: 750px;
    height: 550px;
    position: absolute;
    background: linear-gradient(90deg, white 0%, white 60%, #FFFAF4 60%);
    left: 600px;
    top: 150px;
    border-radius: 10px;
    flex-direction: row;
    overflow: hidden;
    padding: 20px;
    display: none;
    transition: all 0.3s ease;
    z-index: 1;
}

.upgrade_plans.active {
    display: flex;
}

.upgrade_plans .left {
    width: 450px;
    justify-content: space-between;
    padding: 0 10px;
}

.upgrade_plans #yearly_plan,
.upgrade_plans #monthly_plan {
    width: 0px;
    height: 0px;
    display: none;
}

.upgrade_plans .plan_label {
    width: 400px;
    height: 75px;
    border-radius: 10px;
    padding: 15px;
    border: 1px solid rgba(0, 0, 0, .1);
    color: rgba(0, 0, 0, .6);
    cursor: pointer;
    position: relative;
}

.plan_label:nth-of-type(2) {
    margin-top: 10px;
}

.upgrade_plans .plan_type:checked+.plan_label {
    background: white;
    border: 1px solid rgba(0, 0, 0, .5);
}

.upgrade_plans .plan_type:checked+.plan_label .brighten {
    color: black;
}

.plan_label .time {
    display: block;
    margin-bottom: 10px;
}

label::before,
label::after {
    content: "";
    background: rgba(0, 0, 0, .5);
    display: inline-block;
    position: absolute;
}

.plan_type:checked+label::before {
    width: 2px;
    height: 8px;
    transform: rotate(-45deg);
    left: 357px;
    top: 35px;
}

.plan_type:checked+label::after {
    width: 2px;
    height: 16px;
    transform: rotate(45deg);
    left: 365px;
    top: 27px;
}

.upgrade_plans p {
    color: rgba(0, 0, 0, .5);
}

.upgrade_plans .final_remainder {
    font-size: 12px;
    margin-top: 50px;
}

.upgrade_plans .final_remainder+p {
    font-size: 12px;
}

.upgrade_plans .checkout {
    width: 400px;
    height: 32px;
    background: rgba(18, 18, 18, .9);
    color: white;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    transition: .3s;
}

.upgrade_plans .checkout:hover {
    background: #121212;
}

/* upgrade plan box right side */
.upgrade_plans .right {
    padding: 25px;
}

.upgrade_plans .right svg {
    width: 150px;
    height: 150px;
    background: #FFFAF4;
    color: black;
    margin-left: 25px;
}

.upgrade_plans .right img {
    width: 200px;
    height: 200px;
    display: block;
    margin-top: -10px;
}

.upgrade_plans .right .pro_adv {
    list-style: none;
    padding: 0;
    margin-top: -10px;
}

.upgrade_plans .right li {
    margin-bottom: 10px;
    font-size: 14px;
    color: rgba(0, 0, 0, .6);
}

.upgrade_plans .right .pro_adv li::before {
    content: '✓';
    margin-right: 10px;
    color: #0C860C;
}

.upgrade_plans .right .learn_more {
    color: rgba(0, 0, 0, .6);
    font-size: 14px;
    margin-top: -15px;
}

.upgrade_plans .right .learn_more::before {
    content: "ⓘ";
    color: rgba(0, 0, 0, .6);
    font-size: 14px;
    margin-right: 10px;
    text-decoration: none;
}`, "",{"version":3,"sources":["webpack://./src/css/upgrade_box.css"],"names":[],"mappings":"AAAA,8BAA8B;AAC9B;;;IAGI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,oEAAoE;IACpE,WAAW;IACX,UAAU;IACV,mBAAmB;IACnB,mBAAmB;IACnB,gBAAgB;IAChB,aAAa;IACb,aAAa;IACb,yBAAyB;IACzB,UAAU;AACd;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,8BAA8B;IAC9B,eAAe;AACnB;;AAEA;;IAEI,UAAU;IACV,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,mCAAmC;IACnC,wBAAwB;IACxB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,mCAAmC;AACvC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,mBAAmB;AACvB;;AAEA;;IAEI,WAAW;IACX,6BAA6B;IAC7B,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,WAAW;IACX,yBAAyB;IACzB,WAAW;IACX,SAAS;AACb;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,wBAAwB;IACxB,WAAW;IACX,SAAS;AACb;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,gCAAgC;IAChC,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,mBAAmB;AACvB;;AAEA,gCAAgC;AAChC;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,UAAU;IACV,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;IACnB,eAAe;IACf,wBAAwB;AAC5B;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,wBAAwB;IACxB,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,wBAAwB;IACxB,eAAe;IACf,kBAAkB;IAClB,qBAAqB;AACzB","sourcesContent":["/* Upgrade plans box display */\r\n.upgrade_plans,\r\n.upgrade_plans .left,\r\n.upgrade_plans .right {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.upgrade_plans {\r\n    width: 750px;\r\n    height: 550px;\r\n    position: absolute;\r\n    background: linear-gradient(90deg, white 0%, white 60%, #FFFAF4 60%);\r\n    left: 600px;\r\n    top: 150px;\r\n    border-radius: 10px;\r\n    flex-direction: row;\r\n    overflow: hidden;\r\n    padding: 20px;\r\n    display: none;\r\n    transition: all 0.3s ease;\r\n    z-index: 1;\r\n}\r\n\r\n.upgrade_plans.active {\r\n    display: flex;\r\n}\r\n\r\n.upgrade_plans .left {\r\n    width: 450px;\r\n    justify-content: space-between;\r\n    padding: 0 10px;\r\n}\r\n\r\n.upgrade_plans #yearly_plan,\r\n.upgrade_plans #monthly_plan {\r\n    width: 0px;\r\n    height: 0px;\r\n    display: none;\r\n}\r\n\r\n.upgrade_plans .plan_label {\r\n    width: 400px;\r\n    height: 75px;\r\n    border-radius: 10px;\r\n    padding: 15px;\r\n    border: 1px solid rgba(0, 0, 0, .1);\r\n    color: rgba(0, 0, 0, .6);\r\n    cursor: pointer;\r\n    position: relative;\r\n}\r\n\r\n.plan_label:nth-of-type(2) {\r\n    margin-top: 10px;\r\n}\r\n\r\n.upgrade_plans .plan_type:checked+.plan_label {\r\n    background: white;\r\n    border: 1px solid rgba(0, 0, 0, .5);\r\n}\r\n\r\n.upgrade_plans .plan_type:checked+.plan_label .brighten {\r\n    color: black;\r\n}\r\n\r\n.plan_label .time {\r\n    display: block;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nlabel::before,\r\nlabel::after {\r\n    content: \"\";\r\n    background: rgba(0, 0, 0, .5);\r\n    display: inline-block;\r\n    position: absolute;\r\n}\r\n\r\n.plan_type:checked+label::before {\r\n    width: 2px;\r\n    height: 8px;\r\n    transform: rotate(-45deg);\r\n    left: 357px;\r\n    top: 35px;\r\n}\r\n\r\n.plan_type:checked+label::after {\r\n    width: 2px;\r\n    height: 16px;\r\n    transform: rotate(45deg);\r\n    left: 365px;\r\n    top: 27px;\r\n}\r\n\r\n.upgrade_plans p {\r\n    color: rgba(0, 0, 0, .5);\r\n}\r\n\r\n.upgrade_plans .final_remainder {\r\n    font-size: 12px;\r\n    margin-top: 50px;\r\n}\r\n\r\n.upgrade_plans .final_remainder+p {\r\n    font-size: 12px;\r\n}\r\n\r\n.upgrade_plans .checkout {\r\n    width: 400px;\r\n    height: 32px;\r\n    background: rgba(18, 18, 18, .9);\r\n    color: white;\r\n    cursor: pointer;\r\n    border: none;\r\n    border-radius: 5px;\r\n    transition: .3s;\r\n}\r\n\r\n.upgrade_plans .checkout:hover {\r\n    background: #121212;\r\n}\r\n\r\n/* upgrade plan box right side */\r\n.upgrade_plans .right {\r\n    padding: 25px;\r\n}\r\n\r\n.upgrade_plans .right svg {\r\n    width: 150px;\r\n    height: 150px;\r\n    background: #FFFAF4;\r\n    color: black;\r\n    margin-left: 25px;\r\n}\r\n\r\n.upgrade_plans .right img {\r\n    width: 200px;\r\n    height: 200px;\r\n    display: block;\r\n    margin-top: -10px;\r\n}\r\n\r\n.upgrade_plans .right .pro_adv {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin-top: -10px;\r\n}\r\n\r\n.upgrade_plans .right li {\r\n    margin-bottom: 10px;\r\n    font-size: 14px;\r\n    color: rgba(0, 0, 0, .6);\r\n}\r\n\r\n.upgrade_plans .right .pro_adv li::before {\r\n    content: '✓';\r\n    margin-right: 10px;\r\n    color: #0C860C;\r\n}\r\n\r\n.upgrade_plans .right .learn_more {\r\n    color: rgba(0, 0, 0, .6);\r\n    font-size: 14px;\r\n    margin-top: -15px;\r\n}\r\n\r\n.upgrade_plans .right .learn_more::before {\r\n    content: \"ⓘ\";\r\n    color: rgba(0, 0, 0, .6);\r\n    font-size: 14px;\r\n    margin-right: 10px;\r\n    text-decoration: none;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    box-sizing: border-box;
    font-family: sans-serif;
}

body {
    margin: 0;
}

.dim {
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);
    display: none;
    position: fixed;
    inset: 0px;
    transition: .2;
}

.dim.active {
    display: block;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,aAAa;IACb,eAAe;IACf,UAAU;IACV,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB","sourcesContent":["* {\r\n    box-sizing: border-box;\r\n    font-family: sans-serif;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n}\r\n\r\n.dim {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background: rgba(0, 0, 0, 0.3);\r\n    display: none;\r\n    position: fixed;\r\n    inset: 0px;\r\n    transition: .2;\r\n}\r\n\r\n.dim.active {\r\n    display: block;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/navbar.css":
/*!****************************!*\
  !*** ./src/css/navbar.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./navbar.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/navbar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/sidebar.css":
/*!*****************************!*\
  !*** ./src/css/sidebar.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./sidebar.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/sidebar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/tasks.css":
/*!***************************!*\
  !*** ./src/css/tasks.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_tasks_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./tasks.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/tasks.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_tasks_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_tasks_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_tasks_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_tasks_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/upgrade_box.css":
/*!*********************************!*\
  !*** ./src/css/upgrade_box.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_upgrade_box_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./upgrade_box.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/upgrade_box.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_upgrade_box_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_upgrade_box_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_upgrade_box_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_upgrade_box_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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

"use strict";


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

"use strict";


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

"use strict";


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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

"use strict";


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

/***/ "./src/javascript/navbar.js":
/*!**********************************!*\
  !*** ./src/javascript/navbar.js ***!
  \**********************************/
/***/ (() => {

// Calling html elements
const body = document.querySelector("body");
const search = document.querySelector(".search");
const mag_glass = document.querySelector(".mag_glass");
const search_box = search.childNodes[3];
const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");
const upgrade_box = document.querySelector(".upgrade_plans");
const upgrade_btn = document.querySelector(".upgrade");
const dim = document.querySelector(".dim");


// Open side bar on click on hamburger
hamburger.addEventListener("click", function() {
    sidebar.classList.toggle("active");
})

const search_colors = () => {
    console.log("working");
    search_box.addEventListener("mouseover", function() {
        (mag_glass.childNodes[3]).style.fill = "rgba(0, 0, 0, .4)";
    })
    search_box.addEventListener("mouseout", function() {
        if (document.activeElement != search_box) { (mag_glass.childNodes[3]).style.fill = "white"; };
    })

    search_box.addEventListener("focus", function() {
        (mag_glass.childNodes[3]).style.fill = "rgba(0, 0, 0, .4)";
    })
    search_box.addEventListener("blur", function() {
        (mag_glass.childNodes[3]).style.fill = "white";
    })
};

// Display upgrade plans window on clicking upgrade
upgrade_btn.addEventListener("click", function() {
    upgrade_box.classList.toggle("active");
    dim.classList.toggle("active");
});

// Dim background while showing upgrade plans
dim.addEventListener("click", function() {
    dim.classList.toggle("active");
    upgrade_box.classList.remove("active");
})

/***/ }),

/***/ "./src/javascript/sidebar.js":
/*!***********************************!*\
  !*** ./src/javascript/sidebar.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icons_house_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../icons/house.png */ "./src/icons/house.png");
// Images


// Calling elements
const title = document.querySelector(".project_title");
const list = document.querySelector(".project_list");
const project = document.querySelector(".project");
const house_icon = document.querySelector(".house_icon")
const add_project = document.querySelector(".add_project");


// Functions

const el = (() => {
    const default_list = () => {
        list.innerHTML = `<span class="default_project project active">Home
                        <img class="house_icon" src="./images/house.png" alt="house">
                        </span>`
    }

    const new_project = () => {
        const length = (list.childNodes).length
        if (!(list.childNodes[length - 1]).classList.contains("project_name")) {
            list.innerHTML += `<div class="project_name"><input class="project_name_input" required>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check</title><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" /></svg>`
            const name = document.querySelector(".project_name_input");
            add_cancel_project();
        }
    }

    const add_cancel_project = () => {
        const project_input = document.querySelector(".project_name");
        const minus = project_input.childNodes[2];
        const plus = project_input.childNodes[4];
        const name = document.querySelector(".project_name_input");
        name.focus();
        minus.addEventListener("click", function () { list.removeChild(project_input); });
        plus.addEventListener("click", confirm_title);
        name.addEventListener("keydown", function (el) {
            if (el.key == "Enter") { confirm_title(); }
            else if (el.key == "Escape") { list.removeChild(project_input); };
        })
    }

    const confirm_title = () => {
        const project_input = document.querySelector(".project_name");
        const name = document.querySelector(".project_name_input");
        let project = name.value;
        if (project != "") {
            list.removeChild(project_input);
            list.innerHTML += `<span class="project">${project}
                            <svg class="delete" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>
                            </span>`
            remove_project();
        };
    }

    const remove_project = () => {
        const remove = document.querySelectorAll(".delete");
        for (let i = 0; i < remove.length; i++) {
            remove[i].addEventListener("click", function () {
                list.removeChild(remove[i].parentElement);
            })
        }
    }

    const add_project = () => {

    }

    return { add_project, default_list, new_project };
})();



// Event handling

add_project.addEventListener("click", el.new_project);
el.default_list();

/***/ }),

/***/ "./src/javascript/tasks.js":
/*!*********************************!*\
  !*** ./src/javascript/tasks.js ***!
  \*********************************/
/***/ (() => {

// Calling Elements
const add_task = document.querySelectorAll(".add_task");
const new_task = document.querySelector(".new_task");
const task_name = document.querySelector(".task_name");
const textArea = document.querySelector(".task_description");
const cancel = document.querySelector(".cancel_task");
const confirm = document.querySelector(".confirm_task");
const wall = document.querySelector(".wall");


// Functions

const el = (() => {
    const show = () => {
        new_task.classList.add("active");
        wall.classList.add("active");
    }

    const valid_task = () => {
        if (task_name.value != "") { confirm.classList.add("active"); }
        else if (task_name.value == "") { confirm.classList.remove("active"); };
    }

    const close = () => {
        new_task.classList.remove("active");
        wall.classList.remove("active");
    }

    return { show, close, valid_task };
})();


// Events

for (let i = 0; i < add_task.length; i++) {
    add_task[i].addEventListener("click", el.show);
};
cancel.addEventListener("click", el.close);
wall.addEventListener("click", el.close);

el.valid_task();

/***/ }),

/***/ "./src/icons/house.png":
/*!*****************************!*\
  !*** ./src/icons/house.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/house.png";

/***/ }),

/***/ "./src/images/panda.png":
/*!******************************!*\
  !*** ./src/images/panda.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/panda.png";

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
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _css_navbar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/navbar.css */ "./src/css/navbar.css");
/* harmony import */ var _css_tasks_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/tasks.css */ "./src/css/tasks.css");
/* harmony import */ var _css_upgrade_box_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/upgrade_box.css */ "./src/css/upgrade_box.css");
/* harmony import */ var _css_sidebar_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/sidebar.css */ "./src/css/sidebar.css");
/* harmony import */ var _javascript_navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./javascript/navbar */ "./src/javascript/navbar.js");
/* harmony import */ var _javascript_navbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_javascript_navbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _javascript_sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./javascript/sidebar */ "./src/javascript/sidebar.js");
/* harmony import */ var _javascript_tasks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./javascript/tasks */ "./src/javascript/tasks.js");
/* harmony import */ var _javascript_tasks__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_javascript_tasks__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _images_panda_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/panda.png */ "./src/images/panda.png");
// css files







// javascript files





// import images and icons


_javascript_navbar__WEBPACK_IMPORTED_MODULE_5__.search_colors;


const panda_icon = document.querySelector(".panda_icon");
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyw2RkFBNkYsTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsUUFBUSxhQUFhLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDJGQUEyRixNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFB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YTtXQUM3RDs7Ozs7V0NOQTs7Ozs7V0NBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNxQjtBQUNLO0FBQ0Q7QUFDTTtBQUNKO0FBQzNCO0FBQ0E7QUFDQTtBQUM4QztBQUNFO0FBQ0o7QUFDNUM7QUFDQTtBQUNBO0FBQ3VDO0FBQ3ZDO0FBQ0EsNkRBQW9CO0FBQ3BCO0FBQ0E7QUFDQSx5RCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvY3NzL25hdmJhci5jc3MiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9jc3Mvc2lkZWJhci5jc3MiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9jc3MvdGFza3MuY3NzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvY3NzL3VwZ3JhZGVfYm94LmNzcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9jc3MvbmF2YmFyLmNzcz8yMmE3Iiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvY3NzL3NpZGViYXIuY3NzP2UxOTMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9jc3MvdGFza3MuY3NzP2Q4MzQiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9jc3MvdXBncmFkZV9ib3guY3NzPzUyNWMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvamF2YXNjcmlwdC9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9qYXZhc2NyaXB0L3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9qYXZhc2NyaXB0L3Rhc2tzLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogLk5hdmJhciBzdHlsaW5nICovXHJcblxyXG5uYXYge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG59XHJcblxyXG4ubmF2LCAubmF2IC5sZWZ0LCAubmF2IC5yaWdodCB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjgyODI4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uYXYge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi8qIFN0eWxpbmcgbGVmdCBzaWRlIG9mIC5uYXZiYXIgICovXHJcblxyXG4vKiBIYW1idXJnZXIgZm9yIHNpZGViYXIgKi9cclxuLm5hdiAuaGFtYnVyZ2VyIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNpdGlvbjogLjNzO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5uYXYgLmhhbWJ1cmdlcjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4zKTtcclxufVxyXG5cclxuLm5hdiAubGVmdCAuaGFtLCAuaGFtOjpiZWZvcmUsIC5oYW06OmFmdGVyIHtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbn1cclxuXHJcbi5oYW0ge1xyXG4gICAgbWFyZ2luOiAxNHB4IDhweDtcclxufVxyXG5cclxuLmhhbTo6YmVmb3JlLCAuaGFtOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uaGFtOjpiZWZvcmUge1xyXG4gICAgdG9wOiA5cHg7XHJcbn1cclxuXHJcbi5oYW06OmFmdGVyIHtcclxuICAgIGJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLyogSG9tZSBidXR0b24gYW5kIHNlYXJjaCBpY29uICovXHJcbi5uYXYgLmxlZnQgLmhvbWUsIC5uYXYgLmxlZnQgLm1hZ19nbGFzcyB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHRyYW5zaXRpb246IC4zcztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm5hdiAubGVmdCAuaG9tZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4zKTtcclxufVxyXG5cclxuLm5hdiAubGVmdCBwYXRoIHtcclxuICAgIGZpbGw6IHdoaXRlO1xyXG59XHJcblxyXG4ubWFnX2dsYXNzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDEwcHg7XHJcbiAgICB0b3A6IC0xcHg7XHJcbn1cclxuXHJcbi8qIFNlYXJjaCBiYXIgaW4gLm5hdiAqL1xyXG4ubmF2IC5zZWFyY2gge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubmF2IC5sZWZ0IGlucHV0e1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMTYsIDExNiwgMTE2LCAuMyk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xyXG4gICAgdHJhbnNpdGlvbjogLjRzO1xyXG59XHJcblxyXG4ubmF2IC5sZWZ0IGlucHV0OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjQpO1xyXG59XHJcblxyXG4ubmF2IC5sZWZ0IGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5uYXYgLmxlZnQgaW5wdXQ6Zm9jdXN7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuNCk7XHJcbn1cclxuXHJcblxyXG4vKiBTdHlsaW5nIHJpZ2h0IHNpZGUgb2YgLm5hdmJhciAqL1xyXG5cclxuLm5hdiAucmlnaHQge1xyXG4gICAgd2lkdGg6IDI3NXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzNXB4O1xyXG59XHJcblxyXG4ubmF2IC5yaWdodCAudXBncmFkZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDExNiwgMTE2LCAxMTYsIC4zKTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogLjJzO1xyXG59XHJcblxyXG4udXBncmFkZV9wcm8sIC51cGdyYWRlIC5ob3Zlcl90aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm5hdiAucmlnaHQgLnVwZ3JhZGU6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMTYsIDExNiwgMTE2LCAxKTtcclxufVxyXG5cclxuLyogU3RhciBzeW1ib2wgaW4gdXBncmRlIGJveCAqL1xyXG4ubmF2IC5yaWdodCAudXBncmFkZSBzdmcge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm5hdiAucmlnaHQgLnVwZ3JhZGUgcGF0aCB7XHJcbiAgICBmaWxsOiAjRkZEMDkzO1xyXG59XHJcblxyXG4ubmF2IC5yaWdodCAudXBncmFkZSBzcGFuIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLnJpZ2h0IC51cGdyYWRlIC5ob3Zlcl90ZXh0IHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwcHg7XHJcbiAgICByaWdodDogMjVweDtcclxuICAgIGJhY2tncm91bmQ6ICMyODI4Mjg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLnJpZ2h0IC51cGdyYWRlOmhvdmVyIC5ob3Zlcl90ZXh0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5cclxuLyogUGx1cyBpY29uICovXHJcbi5uYXYgLnJpZ2h0IHN2ZyB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm5hdiAucmlnaHQgPiBzdmc6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMTYsIDExNiwgMTE2LCAuMyk7XHJcbn1cclxuXHJcbi5uYXYgLnJpZ2h0IHBhdGgge1xyXG4gICAgZmlsbDogd2hpdGU7XHJcbn1cclxuXHJcbi8qIEhlbHAgaWNvbiAqL1xyXG4ubmF2IC5yaWdodCAuaGVscCB7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbn1cclxuXHJcbi8qIE5vdGlmaWNhdGlvbiBpY29uICovXHJcbi5uYXYgLnJpZ2h0IC5ub3RpZmljYXRpb24ge1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL25hdmJhci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsb0JBQW9COztBQUVwQjtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBLGtDQUFrQzs7QUFFbEMsMEJBQTBCO0FBQzFCO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksUUFBUTtBQUNaOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQSxnQ0FBZ0M7QUFDaEM7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQSx1QkFBdUI7QUFDdkI7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsd0JBQXdCO0FBQzVCOzs7QUFHQSxrQ0FBa0M7O0FBRWxDO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUEsOEJBQThCO0FBQzlCO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7O0FBR0EsY0FBYztBQUNkO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQSxjQUFjO0FBQ2Q7SUFDSSxZQUFZO0FBQ2hCOztBQUVBLHNCQUFzQjtBQUN0QjtJQUNJLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogLk5hdmJhciBzdHlsaW5nICovXFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LCAubmF2IC5sZWZ0LCAubmF2IC5yaWdodCB7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgaGVpZ2h0OiA0NXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMjgyODI4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbi8qIFN0eWxpbmcgbGVmdCBzaWRlIG9mIC5uYXZiYXIgICovXFxyXFxuXFxyXFxuLyogSGFtYnVyZ2VyIGZvciBzaWRlYmFyICovXFxyXFxuLm5hdiAuaGFtYnVyZ2VyIHtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRyYW5zaXRpb246IC4zcztcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiAuaGFtYnVyZ2VyOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMyk7XFxyXFxufVxcclxcblxcclxcbi5uYXYgLmxlZnQgLmhhbSwgLmhhbTo6YmVmb3JlLCAuaGFtOjphZnRlciB7XFxyXFxuICAgIHdpZHRoOiAxNXB4O1xcclxcbiAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5oYW0ge1xcclxcbiAgICBtYXJnaW46IDE0cHggOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGFtOjpiZWZvcmUsIC5oYW06OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uaGFtOjpiZWZvcmUge1xcclxcbiAgICB0b3A6IDlweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhhbTo6YWZ0ZXIge1xcclxcbiAgICBib3R0b206IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIEhvbWUgYnV0dG9uIGFuZCBzZWFyY2ggaWNvbiAqL1xcclxcbi5uYXYgLmxlZnQgLmhvbWUsIC5uYXYgLmxlZnQgLm1hZ19nbGFzcyB7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAuM3M7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiAubGVmdCAuaG9tZTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IC5sZWZ0IHBhdGgge1xcclxcbiAgICBmaWxsOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1hZ19nbGFzcyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogMTBweDtcXHJcXG4gICAgdG9wOiAtMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTZWFyY2ggYmFyIGluIC5uYXYgKi9cXHJcXG4ubmF2IC5zZWFyY2gge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5uYXYgLmxlZnQgaW5wdXR7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAyOHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDExNiwgMTE2LCAxMTYsIC4zKTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAycHg7XFxyXFxuICAgIHRyYW5zaXRpb246IC40cztcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiAubGVmdCBpbnB1dDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuNCk7XFxyXFxufVxcclxcblxcclxcbi5uYXYgLmxlZnQgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IC5sZWZ0IGlucHV0OmZvY3Vze1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIHdpZHRoOiAzNTBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC40KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogU3R5bGluZyByaWdodCBzaWRlIG9mIC5uYXZiYXIgKi9cXHJcXG5cXHJcXG4ubmF2IC5yaWdodCB7XFxyXFxuICAgIHdpZHRoOiAyNzVweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMzVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiAucmlnaHQgLnVwZ3JhZGUge1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDExNiwgMTE2LCAxMTYsIC4zKTtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4udXBncmFkZV9wcm8sIC51cGdyYWRlIC5ob3Zlcl90aXRsZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYXYgLnJpZ2h0IC51cGdyYWRlOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMTYsIDExNiwgMTE2LCAxKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogU3RhciBzeW1ib2wgaW4gdXBncmRlIGJveCAqL1xcclxcbi5uYXYgLnJpZ2h0IC51cGdyYWRlIHN2ZyB7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYXYgLnJpZ2h0IC51cGdyYWRlIHBhdGgge1xcclxcbiAgICBmaWxsOiAjRkZEMDkzO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IC5yaWdodCAudXBncmFkZSBzcGFuIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5yaWdodCAudXBncmFkZSAuaG92ZXJfdGV4dCB7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDUwcHg7XFxyXFxuICAgIHJpZ2h0OiAyNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMjgyODI4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHBhZGRpbmc6IDI1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5yaWdodCAudXBncmFkZTpob3ZlciAuaG92ZXJfdGV4dCB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBQbHVzIGljb24gKi9cXHJcXG4ubmF2IC5yaWdodCBzdmcge1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiAucmlnaHQgPiBzdmc6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDExNiwgMTE2LCAxMTYsIC4zKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiAucmlnaHQgcGF0aCB7XFxyXFxuICAgIGZpbGw6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIZWxwIGljb24gKi9cXHJcXG4ubmF2IC5yaWdodCAuaGVscCB7XFxyXFxuICAgIHBhZGRpbmc6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogTm90aWZpY2F0aW9uIGljb24gKi9cXHJcXG4ubmF2IC5yaWdodCAubm90aWZpY2F0aW9uIHtcXHJcXG4gICAgcGFkZGluZzogMnB4O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIFNpZGViYXIgKi9cclxuXHJcbi5zaWRlYmFyIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgICBhbGlnbi1pdGVtczogbGVmdDtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTMwMHB4KTtcclxuICAgIHRyYW5zaXRpb246IC4ycztcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNDVweDtcclxuXHJcbn1cclxuXHJcbi5zaWRlYmFyLmFjdGl2ZSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcclxufVxyXG5cclxuLnNpZGViYXIgLnByb2plY3Q6aG92ZXIsIC5wcm9qZWN0LmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRUVFRUVFO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5cclxuLyogc2VjdGlvbiBuYW1lcyBlZzogaW5ib3ggKi9cclxuLnNlY3Rpb25fbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbn1cclxuXHJcbi8qIFByb2plY3RzIHNlY3Rpb24gKi9cclxuLnByb2plY3RzX3RpdGxlLnNlY3Rpb24ge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG59XHJcblxyXG4ucHJvamVjdHNfdGl0bGUgc3BhbntcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC43KTtcclxufVxyXG5cclxuLnByb2plY3RzX3RpdGxlIHN2ZyB7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnByb2plY3RzX3RpdGxlIHBhdGgge1xyXG4gICAgZmlsbDogcmdiYSgwLCAwLCAwLCAuNyk7XHJcbn1cclxuXHJcbi5wcm9qZWN0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC43KTtcclxuICAgIHdpZHRoOiAyMjVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDdweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLmRlZmF1bHRfcHJvamVjdCB7XHJcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmhvdXNlX2ljb24ge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogM3B4O1xyXG59XHJcblxyXG4ucHJvamVjdF9uYW1lIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTVweDtcclxuICAgIHdpZHRoOiAyNjBweDtcclxufVxyXG5cclxuLnByb2plY3RfbmFtZSBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4ucHJvamVjdF9uYW1lOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuXHJcbi5wcm9qZWN0X25hbWUgc3ZnIHtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAxNHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC01cHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0X25hbWUgc3ZnOmhvdmVyLCBzcGFuLnByb2plY3Qgc3ZnOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxufVxyXG5cclxuc3Bhbi5wcm9qZWN0IHN2ZyB7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGluc2V0OiA1cHggMTkwcHg7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc2lkZWJhci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsWUFBWTs7QUFFWjtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixlQUFlO0lBQ2YsU0FBUzs7QUFFYjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COzs7QUFHQSw0QkFBNEI7QUFDNUI7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQSxxQkFBcUI7QUFDckI7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0Isa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogU2lkZWJhciAqL1xcclxcblxcclxcbi5zaWRlYmFyIHtcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBsZWZ0O1xcclxcbiAgICBwYWRkaW5nOiAyNXB4O1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTMwMHB4KTtcXHJcXG4gICAgdHJhbnNpdGlvbjogLjJzO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogNDVweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIuYWN0aXZlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIC5wcm9qZWN0OmhvdmVyLCAucHJvamVjdC5hY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjRUVFRUVFO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIHNlY3Rpb24gbmFtZXMgZWc6IGluYm94ICovXFxyXFxuLnNlY3Rpb25fbmFtZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxyXFxufVxcclxcblxcclxcbi8qIFByb2plY3RzIHNlY3Rpb24gKi9cXHJcXG4ucHJvamVjdHNfdGl0bGUuc2VjdGlvbiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIHdpZHRoOiAyNTBweDtcXHJcXG4gICAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzX3RpdGxlIHNwYW57XFxyXFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC43KTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzX3RpdGxlIHN2ZyB7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzX3RpdGxlIHBhdGgge1xcclxcbiAgICBmaWxsOiByZ2JhKDAsIDAsIDAsIC43KTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC43KTtcXHJcXG4gICAgd2lkdGg6IDIyNXB4O1xcclxcbiAgICBoZWlnaHQ6IDM1cHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA3cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5kZWZhdWx0X3Byb2plY3Qge1xcclxcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaG91c2VfaWNvbiB7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRvcDogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdF9uYW1lIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IC01cHg7XFxyXFxuICAgIHdpZHRoOiAyNjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RfbmFtZSBpbnB1dCB7XFxyXFxuICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RfbmFtZTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0X25hbWUgc3ZnIHtcXHJcXG4gICAgd2lkdGg6IDM1cHg7XFxyXFxuICAgIGhlaWdodDogMzVweDtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdG9wOiAxNHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RfbmFtZSBzdmc6aG92ZXIsIHNwYW4ucHJvamVjdCBzdmc6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC4xKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5zcGFuLnByb2plY3Qgc3ZnIHtcXHJcXG4gICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGluc2V0OiA1cHggMTkwcHg7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogVGFzayB0aXRsZSBhbmQgTGlzdCAqL1xyXG4udGFza3Mge1xyXG4gICAgd2lkdGg6IDg1MHB4O1xyXG4gICAgaGVpZ2h0OiA3NTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGluc2V0OiAxMDBweCA3MDBweDtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbn1cclxuXHJcbi50YXNrcyAuYWRkX3Rhc2sge1xyXG4gICAgd2lkdGg6IDExNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uYWRkX3Rhc2s6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuMSk7XHJcbn1cclxuXHJcbi5hZGRfdGFzayBzcGFuIHtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxufVxyXG5cclxuLyogQWRkIG5ldyB0YXNrICovXHJcbi5uZXdfdGFzayB7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSguMykgdHJhbnNsYXRlWSgxMjUwcHgpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaW5zZXQ6IDIwMHB4IDcwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNTBweCAtMTlweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgdHJhbnNpdGlvbjogLjNzO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLm5ld190YXNrLmFjdGl2ZSB7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlWSgwKTtcclxufVxyXG5cclxuaW5wdXQudGFza19uYW1lIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbnRleHRhcmVhLnRhc2tfZGVzY3JpcHRpb24ge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgcmVzaXplOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4ubmV3X3Rhc2sgLmJ0bnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi50YXNrX2R1ZSwgLnRhc2tfcHJpb3JpdHkge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMylcclxufVxyXG5cclxuLnRhc2tfcHJpb3JpdHkge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi50YXNrX2R1ZTpob3ZlciwgLnRhc2tfcHJpb3JpdHk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuMDUpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubmV3X3Rhc2sgLmNvbmZpcm1fYnRucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcclxufVxyXG5cclxuLmNhbmNlbF90YXNrLCAuY29uZmlybV90YXNrIHtcclxuICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNvbmZpcm1fdGFzayB7XHJcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMCwgMCwgMCwgLjMpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY29uZmlybV90YXNrLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC44KTtcclxufVxyXG5cclxuLmNvbmZpcm1fdGFzay5hY3RpdmU6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAxKTtcclxufVxyXG5cclxuLm5ld190YXNrIGhyIHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC4zKTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxufVxyXG5cclxuLmNvbmZpcm1fdGFzayB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi53YWxsIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBpbnNldDogMDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi53YWxsLmFjdGl2ZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy90YXNrcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsd0JBQXdCO0FBQ3hCO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQSxpQkFBaUI7QUFDakI7SUFDSSxTQUFTO0lBQ1QsWUFBWTtJQUNaLFVBQVU7SUFDVix1Q0FBdUM7SUFDdkMsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsK0NBQStDO0lBQy9DLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBQ1osOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLFFBQVE7SUFDUixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBUYXNrIHRpdGxlIGFuZCBMaXN0ICovXFxyXFxuLnRhc2tzIHtcXHJcXG4gICAgd2lkdGg6IDg1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDc1MHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGluc2V0OiAxMDBweCA3MDBweDtcXHJcXG4gICAgcGFkZGluZzogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tzIC5hZGRfdGFzayB7XFxyXFxuICAgIHdpZHRoOiAxMTVweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcclxcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkX3Rhc2s6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZF90YXNrIHNwYW4ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAzcHg7XFxyXFxufVxcclxcblxcclxcbi8qIEFkZCBuZXcgdGFzayAqL1xcclxcbi5uZXdfdGFzayB7XFxyXFxuICAgIGhlaWdodDogMDtcXHJcXG4gICAgd2lkdGg6IDUwMHB4O1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC4zKSB0cmFuc2xhdGVZKDEyNTBweCk7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgaW5zZXQ6IDIwMHB4IDcwMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDUwcHggLTE5cHggcmdiYSgwLDAsMCwwLjc1KTtcXHJcXG4gICAgdHJhbnNpdGlvbjogLjNzO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3X3Rhc2suYWN0aXZlIHtcXHJcXG4gICAgaGVpZ2h0OiAyNTBweDtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGVZKDApO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dC50YXNrX25hbWUge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEudGFza19kZXNjcmlwdGlvbiB7XFxyXFxuICAgIGhlaWdodDogMTAwcHg7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgICByZXNpemU6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld190YXNrIC5idG5zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjVweDtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tfZHVlLCAudGFza19wcmlvcml0eSB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMylcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tfcHJpb3JpdHkge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tfZHVlOmhvdmVyLCAudGFza19wcmlvcml0eTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjA1KTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3X3Rhc2sgLmNvbmZpcm1fYnRucyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogcmlnaHQ7XFxyXFxufVxcclxcblxcclxcbi5jYW5jZWxfdGFzaywgLmNvbmZpcm1fdGFzayB7XFxyXFxuICAgIHdpZHRoOiA3NXB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbmZpcm1fdGFzayB7XFxyXFxuICAgIGJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLCAuMyk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbmZpcm1fdGFzay5hY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC44KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbmZpcm1fdGFzay5hY3RpdmU6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDEpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3X3Rhc2sgaHIge1xcclxcbiAgICB3aWR0aDogNTAwcHg7XFxyXFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC4zKTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29uZmlybV90YXNrIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ud2FsbCB7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBpbnNldDogMDtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLndhbGwuYWN0aXZlIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogVXBncmFkZSBwbGFucyBib3ggZGlzcGxheSAqL1xyXG4udXBncmFkZV9wbGFucyxcclxuLnVwZ3JhZGVfcGxhbnMgLmxlZnQsXHJcbi51cGdyYWRlX3BsYW5zIC5yaWdodCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnVwZ3JhZGVfcGxhbnMge1xyXG4gICAgd2lkdGg6IDc1MHB4O1xyXG4gICAgaGVpZ2h0OiA1NTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgd2hpdGUgMCUsIHdoaXRlIDYwJSwgI0ZGRkFGNCA2MCUpO1xyXG4gICAgbGVmdDogNjAwcHg7XHJcbiAgICB0b3A6IDE1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLnVwZ3JhZGVfcGxhbnMuYWN0aXZlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi51cGdyYWRlX3BsYW5zIC5sZWZ0IHtcclxuICAgIHdpZHRoOiA0NTBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxufVxyXG5cclxuLnVwZ3JhZGVfcGxhbnMgI3llYXJseV9wbGFuLFxyXG4udXBncmFkZV9wbGFucyAjbW9udGhseV9wbGFuIHtcclxuICAgIHdpZHRoOiAwcHg7XHJcbiAgICBoZWlnaHQ6IDBweDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi51cGdyYWRlX3BsYW5zIC5wbGFuX2xhYmVsIHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGhlaWdodDogNzVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMSk7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuNik7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5wbGFuX2xhYmVsOm50aC1vZi10eXBlKDIpIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi51cGdyYWRlX3BsYW5zIC5wbGFuX3R5cGU6Y2hlY2tlZCsucGxhbl9sYWJlbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjUpO1xyXG59XHJcblxyXG4udXBncmFkZV9wbGFucyAucGxhbl90eXBlOmNoZWNrZWQrLnBsYW5fbGFiZWwgLmJyaWdodGVuIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnBsYW5fbGFiZWwgLnRpbWUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5sYWJlbDo6YmVmb3JlLFxyXG5sYWJlbDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjUpO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4ucGxhbl90eXBlOmNoZWNrZWQrbGFiZWw6OmJlZm9yZSB7XHJcbiAgICB3aWR0aDogMnB4O1xyXG4gICAgaGVpZ2h0OiA4cHg7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgbGVmdDogMzU3cHg7XHJcbiAgICB0b3A6IDM1cHg7XHJcbn1cclxuXHJcbi5wbGFuX3R5cGU6Y2hlY2tlZCtsYWJlbDo6YWZ0ZXIge1xyXG4gICAgd2lkdGg6IDJweDtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIGxlZnQ6IDM2NXB4O1xyXG4gICAgdG9wOiAyN3B4O1xyXG59XHJcblxyXG4udXBncmFkZV9wbGFucyBwIHtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcclxufVxyXG5cclxuLnVwZ3JhZGVfcGxhbnMgLmZpbmFsX3JlbWFpbmRlciB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG4udXBncmFkZV9wbGFucyAuZmluYWxfcmVtYWluZGVyK3Age1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4udXBncmFkZV9wbGFucyAuY2hlY2tvdXQge1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxOCwgMTgsIDE4LCAuOSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3M7XHJcbn1cclxuXHJcbi51cGdyYWRlX3BsYW5zIC5jaGVja291dDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTIxMjEyO1xyXG59XHJcblxyXG4vKiB1cGdyYWRlIHBsYW4gYm94IHJpZ2h0IHNpZGUgKi9cclxuLnVwZ3JhZGVfcGxhbnMgLnJpZ2h0IHtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbn1cclxuXHJcbi51cGdyYWRlX3BsYW5zIC5yaWdodCBzdmcge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZBRjQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcclxufVxyXG5cclxuLnVwZ3JhZGVfcGxhbnMgLnJpZ2h0IGltZyB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxufVxyXG5cclxuLnVwZ3JhZGVfcGxhbnMgLnJpZ2h0IC5wcm9fYWR2IHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbn1cclxuXHJcbi51cGdyYWRlX3BsYW5zIC5yaWdodCBsaSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjYpO1xyXG59XHJcblxyXG4udXBncmFkZV9wbGFucyAucmlnaHQgLnByb19hZHYgbGk6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAn4pyTJztcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGNvbG9yOiAjMEM4NjBDO1xyXG59XHJcblxyXG4udXBncmFkZV9wbGFucyAucmlnaHQgLmxlYXJuX21vcmUge1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjYpO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbn1cclxuXHJcbi51cGdyYWRlX3BsYW5zIC5yaWdodCAubGVhcm5fbW9yZTo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwi4pOYXCI7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuNik7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvdXBncmFkZV9ib3guY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDhCQUE4QjtBQUM5Qjs7O0lBR0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG9FQUFvRTtJQUNwRSxXQUFXO0lBQ1gsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksVUFBVTtJQUNWLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1DQUFtQztJQUNuQyx3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsU0FBUztBQUNiOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsV0FBVztJQUNYLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUEsZ0NBQWdDO0FBQ2hDO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFVwZ3JhZGUgcGxhbnMgYm94IGRpc3BsYXkgKi9cXHJcXG4udXBncmFkZV9wbGFucyxcXHJcXG4udXBncmFkZV9wbGFucyAubGVmdCxcXHJcXG4udXBncmFkZV9wbGFucyAucmlnaHQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4udXBncmFkZV9wbGFucyB7XFxyXFxuICAgIHdpZHRoOiA3NTBweDtcXHJcXG4gICAgaGVpZ2h0OiA1NTBweDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHdoaXRlIDAlLCB3aGl0ZSA2MCUsICNGRkZBRjQgNjAlKTtcXHJcXG4gICAgbGVmdDogNjAwcHg7XFxyXFxuICAgIHRvcDogMTUwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi51cGdyYWRlX3BsYW5zLmFjdGl2ZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi51cGdyYWRlX3BsYW5zIC5sZWZ0IHtcXHJcXG4gICAgd2lkdGg6IDQ1MHB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnVwZ3JhZGVfcGxhbnMgI3llYXJseV9wbGFuLFxcclxcbi51cGdyYWRlX3BsYW5zICNtb250aGx5X3BsYW4ge1xcclxcbiAgICB3aWR0aDogMHB4O1xcclxcbiAgICBoZWlnaHQ6IDBweDtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnVwZ3JhZGVfcGxhbnMgLnBsYW5fbGFiZWwge1xcclxcbiAgICB3aWR0aDogNDAwcHg7XFxyXFxuICAgIGhlaWdodDogNzVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMSk7XFxyXFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC42KTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5wbGFuX2xhYmVsOm50aC1vZi10eXBlKDIpIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnVwZ3JhZGVfcGxhbnMgLnBsYW5fdHlwZTpjaGVja2VkKy5wbGFuX2xhYmVsIHtcXHJcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjUpO1xcclxcbn1cXHJcXG5cXHJcXG4udXBncmFkZV9wbGFucyAucGxhbl90eXBlOmNoZWNrZWQrLnBsYW5fbGFiZWwgLmJyaWdodGVuIHtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ucGxhbl9sYWJlbCAudGltZSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5sYWJlbDo6YmVmb3JlLFxcclxcbmxhYmVsOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC41KTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcblxcclxcbi5wbGFuX3R5cGU6Y2hlY2tlZCtsYWJlbDo6YmVmb3JlIHtcXHJcXG4gICAgd2lkdGg6IDJweDtcXHJcXG4gICAgaGVpZ2h0OiA4cHg7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxyXFxuICAgIGxlZnQ6IDM1N3B4O1xcclxcbiAgICB0b3A6IDM1cHg7XFxyXFxufVxcclxcblxcclxcbi5wbGFuX3R5cGU6Y2hlY2tlZCtsYWJlbDo6YWZ0ZXIge1xcclxcbiAgICB3aWR0aDogMnB4O1xcclxcbiAgICBoZWlnaHQ6IDE2cHg7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG4gICAgbGVmdDogMzY1cHg7XFxyXFxuICAgIHRvcDogMjdweDtcXHJcXG59XFxyXFxuXFxyXFxuLnVwZ3JhZGVfcGxhbnMgcCB7XFxyXFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcXHJcXG59XFxyXFxuXFxyXFxuLnVwZ3JhZGVfcGxhbnMgLmZpbmFsX3JlbWFpbmRlciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnVwZ3JhZGVfcGxhbnMgLmZpbmFsX3JlbWFpbmRlcitwIHtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4udXBncmFkZV9wbGFucyAuY2hlY2tvdXQge1xcclxcbiAgICB3aWR0aDogNDAwcHg7XFxyXFxuICAgIGhlaWdodDogMzJweDtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgxOCwgMTgsIDE4LCAuOSk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4udXBncmFkZV9wbGFucyAuY2hlY2tvdXQ6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMTIxMjEyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB1cGdyYWRlIHBsYW4gYm94IHJpZ2h0IHNpZGUgKi9cXHJcXG4udXBncmFkZV9wbGFucyAucmlnaHQge1xcclxcbiAgICBwYWRkaW5nOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udXBncmFkZV9wbGFucyAucmlnaHQgc3ZnIHtcXHJcXG4gICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjRkZGQUY0O1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udXBncmFkZV9wbGFucyAucmlnaHQgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XFxyXFxufVxcclxcblxcclxcbi51cGdyYWRlX3BsYW5zIC5yaWdodCAucHJvX2FkdiB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udXBncmFkZV9wbGFucyAucmlnaHQgbGkge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC42KTtcXHJcXG59XFxyXFxuXFxyXFxuLnVwZ3JhZGVfcGxhbnMgLnJpZ2h0IC5wcm9fYWR2IGxpOjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiAn4pyTJztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbiAgICBjb2xvcjogIzBDODYwQztcXHJcXG59XFxyXFxuXFxyXFxuLnVwZ3JhZGVfcGxhbnMgLnJpZ2h0IC5sZWFybl9tb3JlIHtcXHJcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjYpO1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IC0xNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udXBncmFkZV9wbGFucyAucmlnaHQgLmxlYXJuX21vcmU6OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCLik5hcXFwiO1xcclxcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuNik7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uZGltIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgaW5zZXQ6IDBweDtcclxuICAgIHRyYW5zaXRpb246IC4yO1xyXG59XHJcblxyXG4uZGltLmFjdGl2ZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsZUFBZTtJQUNmLFVBQVU7SUFDVixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5kaW0ge1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBpbnNldDogMHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAuMjtcXHJcXG59XFxyXFxuXFxyXFxuLmRpbS5hY3RpdmUge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2YmFyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2YmFyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaWRlYmFyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2lkZWJhci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGFza3MuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90YXNrcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdXBncmFkZV9ib3guY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi91cGdyYWRlX2JveC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIENhbGxpbmcgaHRtbCBlbGVtZW50c1xyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcbmNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoXCIpO1xyXG5jb25zdCBtYWdfZ2xhc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1hZ19nbGFzc1wiKTtcclxuY29uc3Qgc2VhcmNoX2JveCA9IHNlYXJjaC5jaGlsZE5vZGVzWzNdO1xyXG5jb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhhbWJ1cmdlclwiKTtcclxuY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKTtcclxuY29uc3QgdXBncmFkZV9ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVwZ3JhZGVfcGxhbnNcIik7XHJcbmNvbnN0IHVwZ3JhZGVfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51cGdyYWRlXCIpO1xyXG5jb25zdCBkaW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpbVwiKTtcclxuXHJcblxyXG4vLyBPcGVuIHNpZGUgYmFyIG9uIGNsaWNrIG9uIGhhbWJ1cmdlclxyXG5oYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgc2lkZWJhci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG59KVxyXG5cclxuY29uc3Qgc2VhcmNoX2NvbG9ycyA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwid29ya2luZ1wiKTtcclxuICAgIHNlYXJjaF9ib3guYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAobWFnX2dsYXNzLmNoaWxkTm9kZXNbM10pLnN0eWxlLmZpbGwgPSBcInJnYmEoMCwgMCwgMCwgLjQpXCI7XHJcbiAgICB9KVxyXG4gICAgc2VhcmNoX2JveC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT0gc2VhcmNoX2JveCkgeyAobWFnX2dsYXNzLmNoaWxkTm9kZXNbM10pLnN0eWxlLmZpbGwgPSBcIndoaXRlXCI7IH07XHJcbiAgICB9KVxyXG5cclxuICAgIHNlYXJjaF9ib3guYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIChtYWdfZ2xhc3MuY2hpbGROb2Rlc1szXSkuc3R5bGUuZmlsbCA9IFwicmdiYSgwLCAwLCAwLCAuNClcIjtcclxuICAgIH0pXHJcbiAgICBzZWFyY2hfYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIChtYWdfZ2xhc3MuY2hpbGROb2Rlc1szXSkuc3R5bGUuZmlsbCA9IFwid2hpdGVcIjtcclxuICAgIH0pXHJcbn07XHJcblxyXG4vLyBEaXNwbGF5IHVwZ3JhZGUgcGxhbnMgd2luZG93IG9uIGNsaWNraW5nIHVwZ3JhZGVcclxudXBncmFkZV9idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgdXBncmFkZV9ib3guY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICAgIGRpbS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG59KTtcclxuXHJcbi8vIERpbSBiYWNrZ3JvdW5kIHdoaWxlIHNob3dpbmcgdXBncmFkZSBwbGFuc1xyXG5kaW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgZGltLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICB1cGdyYWRlX2JveC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG59KSIsIi8vIEltYWdlc1xyXG5pbXBvcnQgaG91c2UgZnJvbSAnLi4vaWNvbnMvaG91c2UucG5nJ1xyXG5cclxuLy8gQ2FsbGluZyBlbGVtZW50c1xyXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdF90aXRsZVwiKTtcclxuY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdF9saXN0XCIpO1xyXG5jb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0XCIpO1xyXG5jb25zdCBob3VzZV9pY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob3VzZV9pY29uXCIpXHJcbmNvbnN0IGFkZF9wcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRfcHJvamVjdFwiKTtcclxuXHJcblxyXG4vLyBGdW5jdGlvbnNcclxuXHJcbmNvbnN0IGVsID0gKCgpID0+IHtcclxuICAgIGNvbnN0IGRlZmF1bHRfbGlzdCA9ICgpID0+IHtcclxuICAgICAgICBsaXN0LmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cImRlZmF1bHRfcHJvamVjdCBwcm9qZWN0IGFjdGl2ZVwiPkhvbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImhvdXNlX2ljb25cIiBzcmM9XCIuL2ltYWdlcy9ob3VzZS5wbmdcIiBhbHQ9XCJob3VzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+YFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5ld19wcm9qZWN0ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IChsaXN0LmNoaWxkTm9kZXMpLmxlbmd0aFxyXG4gICAgICAgIGlmICghKGxpc3QuY2hpbGROb2Rlc1tsZW5ndGggLSAxXSkuY2xhc3NMaXN0LmNvbnRhaW5zKFwicHJvamVjdF9uYW1lXCIpKSB7XHJcbiAgICAgICAgICAgIGxpc3QuaW5uZXJIVE1MICs9IGA8ZGl2IGNsYXNzPVwicHJvamVjdF9uYW1lXCI+PGlucHV0IGNsYXNzPVwicHJvamVjdF9uYW1lX2lucHV0XCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5jbG9zZTwvdGl0bGU+PHBhdGggZD1cIk0xOSw2LjQxTDE3LjU5LDVMMTIsMTAuNTlMNi40MSw1TDUsNi40MUwxMC41OSwxMkw1LDE3LjU5TDYuNDEsMTlMMTIsMTMuNDFMMTcuNTksMTlMMTksMTcuNTlMMTMuNDEsMTJMMTksNi40MVpcIiAvPjwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+Y2hlY2s8L3RpdGxlPjxwYXRoIGQ9XCJNMjEsN0w5LDE5TDMuNSwxMy41TDQuOTEsMTIuMDlMOSwxNi4xN0wxOS41OSw1LjU5TDIxLDdaXCIgLz48L3N2Zz5gXHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RfbmFtZV9pbnB1dFwiKTtcclxuICAgICAgICAgICAgYWRkX2NhbmNlbF9wcm9qZWN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFkZF9jYW5jZWxfcHJvamVjdCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0X2lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0X25hbWVcIik7XHJcbiAgICAgICAgY29uc3QgbWludXMgPSBwcm9qZWN0X2lucHV0LmNoaWxkTm9kZXNbMl07XHJcbiAgICAgICAgY29uc3QgcGx1cyA9IHByb2plY3RfaW5wdXQuY2hpbGROb2Rlc1s0XTtcclxuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0X25hbWVfaW5wdXRcIik7XHJcbiAgICAgICAgbmFtZS5mb2N1cygpO1xyXG4gICAgICAgIG1pbnVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7IGxpc3QucmVtb3ZlQ2hpbGQocHJvamVjdF9pbnB1dCk7IH0pO1xyXG4gICAgICAgIHBsdXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNvbmZpcm1fdGl0bGUpO1xyXG4gICAgICAgIG5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgICAgIGlmIChlbC5rZXkgPT0gXCJFbnRlclwiKSB7IGNvbmZpcm1fdGl0bGUoKTsgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChlbC5rZXkgPT0gXCJFc2NhcGVcIikgeyBsaXN0LnJlbW92ZUNoaWxkKHByb2plY3RfaW5wdXQpOyB9O1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29uZmlybV90aXRsZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0X2lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0X25hbWVcIik7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdF9uYW1lX2lucHV0XCIpO1xyXG4gICAgICAgIGxldCBwcm9qZWN0ID0gbmFtZS52YWx1ZTtcclxuICAgICAgICBpZiAocHJvamVjdCAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGxpc3QucmVtb3ZlQ2hpbGQocHJvamVjdF9pbnB1dCk7XHJcbiAgICAgICAgICAgIGxpc3QuaW5uZXJIVE1MICs9IGA8c3BhbiBjbGFzcz1cInByb2plY3RcIj4ke3Byb2plY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwiZGVsZXRlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTE5LDRIMTUuNUwxNC41LDNIOS41TDguNSw0SDVWNkgxOU02LDE5QTIsMiAwIDAsMCA4LDIxSDE2QTIsMiAwIDAsMCAxOCwxOVY3SDZWMTlaXCIgLz48L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5gXHJcbiAgICAgICAgICAgIHJlbW92ZV9wcm9qZWN0KCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW1vdmVfcHJvamVjdCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCByZW1vdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZVwiKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlbW92ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICByZW1vdmVbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGxpc3QucmVtb3ZlQ2hpbGQocmVtb3ZlW2ldLnBhcmVudEVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZGRfcHJvamVjdCA9ICgpID0+IHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgYWRkX3Byb2plY3QsIGRlZmF1bHRfbGlzdCwgbmV3X3Byb2plY3QgfTtcclxufSkoKTtcclxuXHJcblxyXG5cclxuLy8gRXZlbnQgaGFuZGxpbmdcclxuXHJcbmFkZF9wcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlbC5uZXdfcHJvamVjdCk7XHJcbmVsLmRlZmF1bHRfbGlzdCgpOyIsIi8vIENhbGxpbmcgRWxlbWVudHNcclxuY29uc3QgYWRkX3Rhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFkZF90YXNrXCIpO1xyXG5jb25zdCBuZXdfdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3X3Rhc2tcIik7XHJcbmNvbnN0IHRhc2tfbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza19uYW1lXCIpO1xyXG5jb25zdCB0ZXh0QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza19kZXNjcmlwdGlvblwiKTtcclxuY29uc3QgY2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYW5jZWxfdGFza1wiKTtcclxuY29uc3QgY29uZmlybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29uZmlybV90YXNrXCIpO1xyXG5jb25zdCB3YWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53YWxsXCIpO1xyXG5cclxuXHJcbi8vIEZ1bmN0aW9uc1xyXG5cclxuY29uc3QgZWwgPSAoKCkgPT4ge1xyXG4gICAgY29uc3Qgc2hvdyA9ICgpID0+IHtcclxuICAgICAgICBuZXdfdGFzay5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIHdhbGwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB2YWxpZF90YXNrID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh0YXNrX25hbWUudmFsdWUgIT0gXCJcIikgeyBjb25maXJtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7IH1cclxuICAgICAgICBlbHNlIGlmICh0YXNrX25hbWUudmFsdWUgPT0gXCJcIikgeyBjb25maXJtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7IH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgbmV3X3Rhc2suY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICB3YWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc2hvdywgY2xvc2UsIHZhbGlkX3Rhc2sgfTtcclxufSkoKTtcclxuXHJcblxyXG4vLyBFdmVudHNcclxuXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgYWRkX3Rhc2subGVuZ3RoOyBpKyspIHtcclxuICAgIGFkZF90YXNrW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlbC5zaG93KTtcclxufTtcclxuY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlbC5jbG9zZSk7XHJcbndhbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVsLmNsb3NlKTtcclxuXHJcbmVsLnZhbGlkX3Rhc2soKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBjc3MgZmlsZXNcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCAnLi9jc3MvbmF2YmFyLmNzcyc7XHJcbmltcG9ydCAnLi9jc3MvdGFza3MuY3NzJztcclxuaW1wb3J0ICcuL2Nzcy91cGdyYWRlX2JveC5jc3MnO1xyXG5pbXBvcnQgJy4vY3NzL3NpZGViYXIuY3NzJztcclxuXHJcblxyXG4vLyBqYXZhc2NyaXB0IGZpbGVzXHJcbmltcG9ydCAqIGFzIG5hdmJhciBmcm9tICcuL2phdmFzY3JpcHQvbmF2YmFyJztcclxuaW1wb3J0ICogYXMgc2lkZWJhciBmcm9tICcuL2phdmFzY3JpcHQvc2lkZWJhcic7XHJcbmltcG9ydCAqIGFzIHRhc2tzIGZyb20gJy4vamF2YXNjcmlwdC90YXNrcyc7XHJcblxyXG5cclxuLy8gaW1wb3J0IGltYWdlcyBhbmQgaWNvbnNcclxuaW1wb3J0IHBhbmRhIGZyb20gXCIuL2ltYWdlcy9wYW5kYS5wbmdcIjtcclxuXHJcbm5hdmJhci5zZWFyY2hfY29sb3JzO1xyXG5cclxuXHJcbmNvbnN0IHBhbmRhX2ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhbmRhX2ljb25cIik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
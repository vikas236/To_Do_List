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

.sidebar .project:hover, .project.active_project {
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
}`, "",{"version":3,"sources":["webpack://./src/css/sidebar.css"],"names":[],"mappings":"AAAA,YAAY;;AAEZ;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,qBAAqB;IACrB,iBAAiB;IACjB,aAAa;IACb,6BAA6B;IAC7B,eAAe;IACf,eAAe;IACf,SAAS;;AAEb;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,mBAAmB;IACnB,eAAe;AACnB;;;AAGA,4BAA4B;AAC5B;IACI,eAAe;IACf,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA,qBAAqB;AACrB;IACI,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;IACrB,wBAAwB;IACxB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,QAAQ;AACZ;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,sBAAsB;IACtB,YAAY;IACZ,aAAa;IACb,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,kBAAkB;IAClB,SAAS;IACT,iBAAiB;AACrB;;AAEA;IACI,6BAA6B;IAC7B,kBAAkB;;AAEtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,eAAe;IACf,kBAAkB;IAClB,gBAAgB;AACpB","sourcesContent":["/* Sidebar */\r\n\r\n.sidebar {\r\n    width: 300px;\r\n    height: 100vh;\r\n    background: #FAFAFA;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: left;\r\n    align-items: left;\r\n    padding: 25px;\r\n    transform: translateX(-300px);\r\n    transition: .2s;\r\n    position: fixed;\r\n    top: 45px;\r\n\r\n}\r\n\r\n.sidebar.active {\r\n    transform: translateX(0px);\r\n}\r\n\r\n.sidebar .project:hover, .project.active_project {\r\n    background: #EEEEEE;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n/* section names eg: inbox */\r\n.section_name {\r\n    font-size: 14px;\r\n    margin-left: 10px;\r\n    font-weight: 100;\r\n}\r\n\r\n/* Projects section */\r\n.projects_title.section {\r\n    margin-top: 10px;\r\n    width: 250px;\r\n    height: 35px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 0 10px;\r\n}\r\n\r\n.projects_title span{\r\n    color: rgba(0, 0, 0, .7);\r\n}\r\n\r\n.projects_title svg {\r\n    width: 20px;\r\n    height: 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n.projects_title path {\r\n    fill: rgba(0, 0, 0, .7);\r\n}\r\n\r\n.project {\r\n    display: inline-block;\r\n    color: rgba(0, 0, 0, .7);\r\n    width: 225px;\r\n    height: 35px;\r\n    padding-left: 10px;\r\n    margin-left: 15px;\r\n    padding-top: 7px;\r\n    border-radius: 5px;\r\n    position: relative;\r\n    margin-top: 5px;\r\n}\r\n\r\n.default_project {\r\n    padding-top: 3px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.house_icon {\r\n    width: 20px;\r\n    height: 20px;\r\n    margin-left: 10px;\r\n    position: relative;\r\n    top: 3px;\r\n}\r\n\r\n.project_name {\r\n    margin-left: 15px;\r\n    margin-top: -5px;\r\n    width: 260px;\r\n}\r\n\r\n.project_name input {\r\n    width: 150px;\r\n    border-radius: 5px;\r\n    height: 30px;\r\n    border: 1px solid blue;\r\n    padding: 5px;\r\n    outline: none;\r\n    margin-right: 5px;\r\n    font-size: 14px;\r\n}\r\n\r\n.project_name:hover {\r\n    background: none;\r\n}\r\n\r\n.project_name svg {\r\n    width: 35px;\r\n    height: 35px;\r\n    padding: 5px;\r\n    cursor: pointer;\r\n    position: relative;\r\n    top: 14px;\r\n    margin-left: -5px;\r\n}\r\n\r\n.project_name svg:hover, span.project svg:hover {\r\n    background: rgba(0, 0, 0, .1);\r\n    border-radius: 5px;\r\n\r\n}\r\n\r\nspan.project svg {\r\n    width: 25px;\r\n    height: 25px;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    inset: 5px 190px;\r\n}"],"sourceRoot":""}]);
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
    background: white;
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
    z-index: 3;
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

.confirm_task.active_task {
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
}

/* Task List */
.task_list {
    width: 650px;
    height: fit-content;
    position: absolute;
    inset: 200px 700px;
    padding: 25px;
    padding-left: 50px;
}

.task_list h3 {
    font-size: 16px;
    margin: 0;
}

.task_details {
    font-size: 13px;
    margin: 0;
    font-weight: 100;
    color: rgba(0, 0, 0, .7);
}

.task_date {
    font-size: 12px;
    position: relative;
}`, "",{"version":3,"sources":["webpack://./src/css/tasks.css"],"names":[],"mappings":"AAAA,wBAAwB;AACxB;IACI,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,eAAe;IACf,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,eAAe;AACnB;;AAEA,iBAAiB;AACjB;IACI,SAAS;IACT,YAAY;IACZ,iBAAiB;IACjB,UAAU;IACV,uCAAuC;IACvC,kBAAkB;IAClB,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,mBAAmB;IACnB,+CAA+C;IAC/C,eAAe;IACf,UAAU;AACd;;AAEA;IACI,aAAa;IACb,UAAU;IACV,iCAAiC;AACrC;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,YAAY;IACZ,gBAAgB;IAChB,eAAe;IACf,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;IAClB;AACJ;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,8BAA8B;IAC9B,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,4BAA4B;IAC5B,YAAY;AAChB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,YAAY;IACZ,wBAAwB;IACxB,kBAAkB;AACtB;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,eAAe;IACf,QAAQ;IACR,aAAa;AACjB;;AAEA;IACI,cAAc;AAClB;;AAEA,cAAc;AACd;IACI,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;IAClB,kBAAkB;IAClB,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,SAAS;AACb;;AAEA;IACI,eAAe;IACf,SAAS;IACT,gBAAgB;IAChB,wBAAwB;AAC5B;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB","sourcesContent":["/* Task title and List */\r\n.tasks {\r\n    width: 850px;\r\n    height: 750px;\r\n    position: relative;\r\n    inset: 100px 700px;\r\n    padding: 25px;\r\n}\r\n\r\n.tasks .add_task {\r\n    width: 115px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    margin-left: 15px;\r\n    padding: 5px 10px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.add_task:hover {\r\n    background: rgba(0, 0, 0, .1);\r\n}\r\n\r\n.add_task span {\r\n    margin-top: 3px;\r\n}\r\n\r\n/* Add new task */\r\n.new_task {\r\n    height: 0;\r\n    width: 500px;\r\n    background: white;\r\n    opacity: 0;\r\n    transform: scale(.3) translateY(1250px);\r\n    position: absolute;\r\n    inset: 200px 700px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 15px;\r\n    border-radius: 10px;\r\n    box-shadow: 0px 0px 50px -19px rgba(0,0,0,0.75);\r\n    transition: .3s;\r\n    z-index: 3;\r\n}\r\n\r\n.new_task.active {\r\n    height: 250px;\r\n    opacity: 1;\r\n    transform: scale(1) translateY(0);\r\n}\r\n\r\ninput.task_name {\r\n    border: none;\r\n    font-size: 24px;\r\n    outline: none;\r\n}\r\n\r\ntextarea.task_description {\r\n    height: 100px;\r\n    outline: none;\r\n    border: none;\r\n    margin-left: 5px;\r\n    margin-top: 5px;\r\n    resize: none;\r\n    font-size: 14px;\r\n}\r\n\r\n.new_task .btns {\r\n    display: flex;\r\n    margin-top: 25px;\r\n    width: 200px;\r\n    height: 30px;\r\n    justify-content: space-between;\r\n}\r\n\r\n.task_due, .task_priority {\r\n    border-radius: 5px;\r\n    border: 1px solid rgba(0, 0, 0, .3)\r\n}\r\n\r\n.task_priority {\r\n    background: white;\r\n}\r\n\r\n.task_due:hover, .task_priority:hover {\r\n    background: rgba(0, 0, 0, .05);\r\n    cursor: pointer;\r\n}\r\n\r\n.new_task .confirm_btns {\r\n    display: flex;\r\n    justify-content: right;\r\n}\r\n\r\n.cancel_task, .confirm_task {\r\n    width: 75px;\r\n    height: 30px;\r\n    margin-right: 10px;\r\n    border: none;\r\n    outline: none;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n.confirm_task {\r\n    background:rgba(0, 0, 0, .3);\r\n    color: white;\r\n}\r\n\r\n.confirm_task.active_task {\r\n    background: rgba(0, 0, 0, .8);\r\n}\r\n\r\n.confirm_task.active:hover {\r\n    background: rgba(0, 0, 0, 1);\r\n}\r\n\r\n.new_task hr {\r\n    width: 500px;\r\n    color: rgba(0, 0, 0, .3);\r\n    margin-left: -15px;\r\n}\r\n\r\n.confirm_task {\r\n    margin: 0;\r\n}\r\n\r\n.wall {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    position: fixed;\r\n    inset: 0;\r\n    display: none;\r\n}\r\n\r\n.wall.active {\r\n    display: block;\r\n}\r\n\r\n/* Task List */\r\n.task_list {\r\n    width: 650px;\r\n    height: fit-content;\r\n    position: absolute;\r\n    inset: 200px 700px;\r\n    padding: 25px;\r\n    padding-left: 50px;\r\n}\r\n\r\n.task_list h3 {\r\n    font-size: 16px;\r\n    margin: 0;\r\n}\r\n\r\n.task_details {\r\n    font-size: 13px;\r\n    margin: 0;\r\n    font-weight: 100;\r\n    color: rgba(0, 0, 0, .7);\r\n}\r\n\r\n.task_date {\r\n    font-size: 12px;\r\n    position: relative;\r\n}"],"sourceRoot":""}]);
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
    width: 0px;
    height: 0px;
    position: absolute;
    background: linear-gradient(90deg, white 0%, white 60%, #FFFAF4 60%);
    left: 600px;
    top: 150px;
    border-radius: 10px;
    flex-direction: row;
    overflow: hidden;
    padding: 20px;
    opacity: 0;
    transition: 0.1s transform, .6s opacity;
    z-index: 1;
}

.upgrade_plans.active {
    width: 750px;
    height: 550px;
    opacity: 1;
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
}`, "",{"version":3,"sources":["webpack://./src/css/upgrade_box.css"],"names":[],"mappings":"AAAA,8BAA8B;AAC9B;;;IAGI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,UAAU;IACV,WAAW;IACX,kBAAkB;IAClB,oEAAoE;IACpE,WAAW;IACX,UAAU;IACV,mBAAmB;IACnB,mBAAmB;IACnB,gBAAgB;IAChB,aAAa;IACb,UAAU;IACV,uCAAuC;IACvC,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,8BAA8B;IAC9B,eAAe;AACnB;;AAEA;;IAEI,UAAU;IACV,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,mCAAmC;IACnC,wBAAwB;IACxB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,mCAAmC;AACvC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,mBAAmB;AACvB;;AAEA;;IAEI,WAAW;IACX,6BAA6B;IAC7B,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,WAAW;IACX,yBAAyB;IACzB,WAAW;IACX,SAAS;AACb;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,wBAAwB;IACxB,WAAW;IACX,SAAS;AACb;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,gCAAgC;IAChC,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,mBAAmB;AACvB;;AAEA,gCAAgC;AAChC;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,UAAU;IACV,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;IACnB,eAAe;IACf,wBAAwB;AAC5B;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,wBAAwB;IACxB,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,wBAAwB;IACxB,eAAe;IACf,kBAAkB;IAClB,qBAAqB;AACzB","sourcesContent":["/* Upgrade plans box display */\r\n.upgrade_plans,\r\n.upgrade_plans .left,\r\n.upgrade_plans .right {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.upgrade_plans {\r\n    width: 0px;\r\n    height: 0px;\r\n    position: absolute;\r\n    background: linear-gradient(90deg, white 0%, white 60%, #FFFAF4 60%);\r\n    left: 600px;\r\n    top: 150px;\r\n    border-radius: 10px;\r\n    flex-direction: row;\r\n    overflow: hidden;\r\n    padding: 20px;\r\n    opacity: 0;\r\n    transition: 0.1s transform, .6s opacity;\r\n    z-index: 1;\r\n}\r\n\r\n.upgrade_plans.active {\r\n    width: 750px;\r\n    height: 550px;\r\n    opacity: 1;\r\n}\r\n\r\n.upgrade_plans .left {\r\n    width: 450px;\r\n    justify-content: space-between;\r\n    padding: 0 10px;\r\n}\r\n\r\n.upgrade_plans #yearly_plan,\r\n.upgrade_plans #monthly_plan {\r\n    width: 0px;\r\n    height: 0px;\r\n    display: none;\r\n}\r\n\r\n.upgrade_plans .plan_label {\r\n    width: 400px;\r\n    height: 75px;\r\n    border-radius: 10px;\r\n    padding: 15px;\r\n    border: 1px solid rgba(0, 0, 0, .1);\r\n    color: rgba(0, 0, 0, .6);\r\n    cursor: pointer;\r\n    position: relative;\r\n}\r\n\r\n.plan_label:nth-of-type(2) {\r\n    margin-top: 10px;\r\n}\r\n\r\n.upgrade_plans .plan_type:checked+.plan_label {\r\n    background: white;\r\n    border: 1px solid rgba(0, 0, 0, .5);\r\n}\r\n\r\n.upgrade_plans .plan_type:checked+.plan_label .brighten {\r\n    color: black;\r\n}\r\n\r\n.plan_label .time {\r\n    display: block;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nlabel::before,\r\nlabel::after {\r\n    content: \"\";\r\n    background: rgba(0, 0, 0, .5);\r\n    display: inline-block;\r\n    position: absolute;\r\n}\r\n\r\n.plan_type:checked+label::before {\r\n    width: 2px;\r\n    height: 8px;\r\n    transform: rotate(-45deg);\r\n    left: 357px;\r\n    top: 35px;\r\n}\r\n\r\n.plan_type:checked+label::after {\r\n    width: 2px;\r\n    height: 16px;\r\n    transform: rotate(45deg);\r\n    left: 365px;\r\n    top: 27px;\r\n}\r\n\r\n.upgrade_plans p {\r\n    color: rgba(0, 0, 0, .5);\r\n}\r\n\r\n.upgrade_plans .final_remainder {\r\n    font-size: 12px;\r\n    margin-top: 50px;\r\n}\r\n\r\n.upgrade_plans .final_remainder+p {\r\n    font-size: 12px;\r\n}\r\n\r\n.upgrade_plans .checkout {\r\n    width: 400px;\r\n    height: 32px;\r\n    background: rgba(18, 18, 18, .9);\r\n    color: white;\r\n    cursor: pointer;\r\n    border: none;\r\n    border-radius: 5px;\r\n    transition: .3s;\r\n}\r\n\r\n.upgrade_plans .checkout:hover {\r\n    background: #121212;\r\n}\r\n\r\n/* upgrade plan box right side */\r\n.upgrade_plans .right {\r\n    padding: 25px;\r\n}\r\n\r\n.upgrade_plans .right svg {\r\n    width: 150px;\r\n    height: 150px;\r\n    background: #FFFAF4;\r\n    color: black;\r\n    margin-left: 25px;\r\n}\r\n\r\n.upgrade_plans .right img {\r\n    width: 200px;\r\n    height: 200px;\r\n    display: block;\r\n    margin-top: -10px;\r\n}\r\n\r\n.upgrade_plans .right .pro_adv {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin-top: -10px;\r\n}\r\n\r\n.upgrade_plans .right li {\r\n    margin-bottom: 10px;\r\n    font-size: 14px;\r\n    color: rgba(0, 0, 0, .6);\r\n}\r\n\r\n.upgrade_plans .right .pro_adv li::before {\r\n    content: '✓';\r\n    margin-right: 10px;\r\n    color: #0C860C;\r\n}\r\n\r\n.upgrade_plans .right .learn_more {\r\n    color: rgba(0, 0, 0, .6);\r\n    font-size: 14px;\r\n    margin-top: -15px;\r\n}\r\n\r\n.upgrade_plans .right .learn_more::before {\r\n    content: \"ⓘ\";\r\n    color: rgba(0, 0, 0, .6);\r\n    font-size: 14px;\r\n    margin-right: 10px;\r\n    text-decoration: none;\r\n}"],"sourceRoot":""}]);
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
}

.task {
    margin-bottom: 25px;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,aAAa;IACb,eAAe;IACf,UAAU;IACV,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,mBAAmB;AACvB","sourcesContent":["* {\r\n    box-sizing: border-box;\r\n    font-family: sans-serif;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n}\r\n\r\n.dim {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background: rgba(0, 0, 0, 0.3);\r\n    display: none;\r\n    position: fixed;\r\n    inset: 0px;\r\n    transition: .2;\r\n}\r\n\r\n.dim.active {\r\n    display: block;\r\n}\r\n\r\n.task {\r\n    margin-bottom: 25px;\r\n}"],"sourceRoot":""}]);
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


const el = (() => {
    const search_colors = () => {
        search_box.addEventListener("mouseover", function () {
            (mag_glass.childNodes[3]).style.fill = "rgba(0, 0, 0, .4)";
        })
        search_box.addEventListener("mouseout", function () {
            if (document.activeElement != search_box) { (mag_glass.childNodes[3]).style.fill = "white"; };
        })

        search_box.addEventListener("focus", function () {
            (mag_glass.childNodes[3]).style.fill = "rgba(0, 0, 0, .4)";
        })
        search_box.addEventListener("blur", function () {
            (mag_glass.childNodes[3]).style.fill = "white";
        })
    };

    const show = () => {
        upgrade_box.classList.toggle("active");
        dim.classList.toggle("active");
    }

    const close = () => {
        sidebar.classList.toggle("active");
    }


    return { search_colors, show, close };
})();

// Events

upgrade_btn.addEventListener("click", el.show);


// Open side bar on click on hamburger
hamburger.addEventListener("click", el.close);

// Dim background while showing upgrade plans
dim.addEventListener("click", function () {
    dim.classList.toggle("active");
    upgrade_box.classList.remove("active");
})
el.search_colors();

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
        list.innerHTML = `<span class="default_project project active_project">Home
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
const task_list = document.querySelector(".task_list");
const add_task = document.querySelectorAll(".add_task");
const new_task = document.querySelector(".new_task");
const task_name = document.querySelector(".task_name");
const task_textarea = document.querySelector(".task_description");
const task_due = document.querySelector(".task_due");
const task_priority = document.querySelector(".task_priority");
const cancel = document.querySelector(".cancel_task");
const confirm = document.querySelector(".confirm_task");
const wall = document.querySelector(".wall");
const Home = [];

// Functions

const el = (() => {
  const show = () => {
    new_task.classList.add("active");
    wall.classList.add("active");
    task_name.focus();
    document.addEventListener("keydown", (down) => {
      if (down.key == "Escape") {
        close();
      } else if (down.key == "Enter") {
      }
    });
    empty();
  };

  const generate_list = (arr) => {
    task_list.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
      const task = task_list.appendChild(document.createElement("div"));
      task.classList.add("task");
      task.innerHTML = `
        <h3 class="task_title">${Home[i].title}</h3>
        <span class="task_date">${Home[i].due}</span>
        <hr>
        <h4 class="task_details">${Home[i].description}</h4>`;
    }
  };

  const confirm_task = () => {
    if (valid_task()) {
      let name = task_name.value;
      let task = {};
      Home.push(
        create_task(
          name,
          task_textarea.value,
          task_due.value,
          task_priority.value
        )
      );
    }
    generate_list(Home);
  };

  const Home_project = () => {
    Home.push(
      create_task("buy milk", "buy milk from market", "12-2-2023", "high")
    );
    Home.push(
      create_task(
        "drink milk",
        "don't forget to drink your milk",
        "14-5-2023",
        "high"
      )
    );
    generate_list(Home);
  };

  const create_task = (title, description, due, priority) => {
    let task = {};
    task.title = title;
    task.description = description;
    task.due = due;
    task.priority = priority;
    close();

    return task;
  };

  const valid_task = () => {
    if (task_name.value != "" && task_due.value != "") {
      confirm.classList.add("active_task");
      return true;
    } else {
      confirm.classList.remove("active_task");
      return false;
    }
  };

  const empty = () => {
    task_name.value = "";
    task_due.value = "";
    task_textarea.value = "";
  };

  const close = () => {
    new_task.classList.remove("active");
    wall.classList.remove("active");
    empty();
  };

  return { Home_project, show, close, valid_task, confirm_task };
})();

// Events

el.Home_project();
for (let i = 0; i < add_task.length; i++) {
  add_task[i].addEventListener("click", el.show);
}
cancel.addEventListener("click", el.close);
wall.addEventListener("click", el.close);
task_name.addEventListener("input", el.valid_task);
confirm.addEventListener("click", el.confirm_task);


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




const add_project = document.querySelector(".add_project");
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyw2RkFBNkYsTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsUUFBUSxhQUFhLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sMkZBQTJGLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpR0FBaUcsUUFBUSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsZ0lBQWdJLHNCQUFzQiwrQkFBK0IsS0FBSyx3QkFBd0IsbUJBQW1CLG9CQUFvQiwyQkFBMkIsNkVBQTZFLG9CQUFvQixtQkFBbUIsNEJBQTRCLDRCQUE0Qix5QkFBeUIsc0JBQXNCLG1CQUFtQixnREFBZ0QsbUJBQW1CLEtBQUssK0JBQStCLHFCQUFxQixzQkFBc0IsbUJBQW1CLEtBQUssOEJBQThCLHFCQUFxQix1Q0FBdUMsd0JBQXdCLEtBQUssc0VBQXNFLG1CQUFtQixvQkFBb0Isc0JBQXNCLEtBQUssb0NBQW9DLHFCQUFxQixxQkFBcUIsNEJBQTRCLHNCQUFzQiw0Q0FBNEMsaUNBQWlDLHdCQUF3QiwyQkFBMkIsS0FBSyxvQ0FBb0MseUJBQXlCLEtBQUssdURBQXVELDBCQUEwQiw0Q0FBNEMsS0FBSyxpRUFBaUUscUJBQXFCLEtBQUssMkJBQTJCLHVCQUF1Qiw0QkFBNEIsS0FBSyx3Q0FBd0Msc0JBQXNCLHNDQUFzQyw4QkFBOEIsMkJBQTJCLEtBQUssMENBQTBDLG1CQUFtQixvQkFBb0Isa0NBQWtDLG9CQUFvQixrQkFBa0IsS0FBSyx5Q0FBeUMsbUJBQW1CLHFCQUFxQixpQ0FBaUMsb0JBQW9CLGtCQUFrQixLQUFLLDBCQUEwQixpQ0FBaUMsS0FBSyx5Q0FBeUMsd0JBQXdCLHlCQUF5QixLQUFLLDJDQUEyQyx3QkFBd0IsS0FBSyxrQ0FBa0MscUJBQXFCLHFCQUFxQix5Q0FBeUMscUJBQXFCLHdCQUF3QixxQkFBcUIsMkJBQTJCLHdCQUF3QixLQUFLLHdDQUF3Qyw0QkFBNEIsS0FBSyxvRUFBb0Usc0JBQXNCLEtBQUssbUNBQW1DLHFCQUFxQixzQkFBc0IsNEJBQTRCLHFCQUFxQiwwQkFBMEIsS0FBSyxtQ0FBbUMscUJBQXFCLHNCQUFzQix1QkFBdUIsMEJBQTBCLEtBQUssd0NBQXdDLHlCQUF5QixtQkFBbUIsMEJBQTBCLEtBQUssa0NBQWtDLDRCQUE0Qix3QkFBd0IsaUNBQWlDLEtBQUssbURBQW1ELHFCQUFxQiwyQkFBMkIsdUJBQXVCLEtBQUssMkNBQTJDLGlDQUFpQyx3QkFBd0IsMEJBQTBCLEtBQUssbURBQW1ELHVCQUF1QixpQ0FBaUMsd0JBQXdCLDJCQUEyQiw4QkFBOEIsS0FBSyxtQkFBbUI7QUFDMWdLO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckx2QztBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSw2QkFBNkIsK0JBQStCLGdDQUFnQyxLQUFLLGNBQWMsa0JBQWtCLEtBQUssY0FBYyxxQkFBcUIsc0JBQXNCLHVDQUF1QyxzQkFBc0Isd0JBQXdCLG1CQUFtQix1QkFBdUIsS0FBSyxxQkFBcUIsdUJBQXVCLEtBQUssZUFBZSw0QkFBNEIsS0FBSyxtQkFBbUI7QUFDaHNCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7OztBQ2hDMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBdUc7QUFDdkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx1RkFBTzs7OztBQUlpRDtBQUN6RSxPQUFPLGlFQUFlLHVGQUFPLElBQUksdUZBQU8sVUFBVSx1RkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUF3RztBQUN4RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHdGQUFPOzs7O0FBSWtEO0FBQzFFLE9BQU8saUVBQWUsd0ZBQU8sSUFBSSx3RkFBTyxVQUFVLHdGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXNHO0FBQ3RHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJZ0Q7QUFDeEUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBNEc7QUFDNUc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyw0RkFBTzs7OztBQUlzRDtBQUM5RSxPQUFPLGlFQUFlLDRGQUFPLElBQUksNEZBQU8sVUFBVSw0RkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSx3REFBd0Q7QUFDeEQsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUN2REE7QUFDc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxrQ0FBa0M7QUFDeEY7QUFDQTtBQUNBLHFDQUFxQztBQUNyQywyQ0FBMkM7QUFDM0MsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtQkFBbUI7QUFDM0M7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUMvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdCQUFnQjtBQUNwQztBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsY0FBYztBQUMvQyxrQ0FBa0MsWUFBWTtBQUM5QztBQUNBLG1DQUFtQyxvQkFBb0I7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IscUJBQXFCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0SEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1dDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDcUI7QUFDSztBQUNEO0FBQ007QUFDSjtBQUMzQjtBQUNBO0FBQ0E7QUFDOEM7QUFDRTtBQUNKO0FBQzVDO0FBQ0E7QUFDQTtBQUN1QztBQUN2QztBQUNBO0FBQ0E7QUFDQSwyRCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvY3NzL25hdmJhci5jc3MiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9jc3Mvc2lkZWJhci5jc3MiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9jc3MvdGFza3MuY3NzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvY3NzL3VwZ3JhZGVfYm94LmNzcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9jc3MvbmF2YmFyLmNzcz8yMmE3Iiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvY3NzL3NpZGViYXIuY3NzP2UxOTMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9jc3MvdGFza3MuY3NzP2Q4MzQiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9jc3MvdXBncmFkZV9ib3guY3NzPzUyNWMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b19kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3QvLi9zcmMvamF2YXNjcmlwdC9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9qYXZhc2NyaXB0L3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9qYXZhc2NyaXB0L3Rhc2tzLmpzIiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b19kb19saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvX2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9fZG9fbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogLk5hdmJhciBzdHlsaW5nICovXHJcblxyXG5uYXYge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG59XHJcblxyXG4ubmF2LCAubmF2IC5sZWZ0LCAubmF2IC5yaWdodCB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjgyODI4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uYXYge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi8qIFN0eWxpbmcgbGVmdCBzaWRlIG9mIC5uYXZiYXIgICovXHJcblxyXG4vKiBIYW1idXJnZXIgZm9yIHNpZGViYXIgKi9cclxuLm5hdiAuaGFtYnVyZ2VyIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNpdGlvbjogLjNzO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5uYXYgLmhhbWJ1cmdlcjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4zKTtcclxufVxyXG5cclxuLm5hdiAubGVmdCAuaGFtLCAuaGFtOjpiZWZvcmUsIC5oYW06OmFmdGVyIHtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbn1cclxuXHJcbi5oYW0ge1xyXG4gICAgbWFyZ2luOiAxNHB4IDhweDtcclxufVxyXG5cclxuLmhhbTo6YmVmb3JlLCAuaGFtOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uaGFtOjpiZWZvcmUge1xyXG4gICAgdG9wOiA5cHg7XHJcbn1cclxuXHJcbi5oYW06OmFmdGVyIHtcclxuICAgIGJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLyogSG9tZSBidXR0b24gYW5kIHNlYXJjaCBpY29uICovXHJcbi5uYXYgLmxlZnQgLmhvbWUsIC5uYXYgLmxlZnQgLm1hZ19nbGFzcyB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHRyYW5zaXRpb246IC4zcztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm5hdiAubGVmdCAuaG9tZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4zKTtcclxufVxyXG5cclxuLm5hdiAubGVmdCBwYXRoIHtcclxuICAgIGZpbGw6IHdoaXRlO1xyXG59XHJcblxyXG4ubWFnX2dsYXNzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDEwcHg7XHJcbiAgICB0b3A6IC0xcHg7XHJcbn1cclxuXHJcbi8qIFNlYXJjaCBiYXIgaW4gLm5hdiAqL1xyXG4ubmF2IC5zZWFyY2gge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubmF2IC5sZWZ0IGlucHV0e1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMTYsIDExNiwgMTE2LCAuMyk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xyXG4gICAgdHJhbnNpdGlvbjogLjRzO1xyXG59XHJcblxyXG4ubmF2IC5sZWZ0IGlucHV0OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjQpO1xyXG59XHJcblxyXG4ubmF2IC5sZWZ0IGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5uYXYgLmxlZnQgaW5wdXQ6Zm9jdXN7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuNCk7XHJcbn1cclxuXHJcblxyXG4vKiBTdHlsaW5nIHJpZ2h0IHNpZGUgb2YgLm5hdmJhciAqL1xyXG5cclxuLm5hdiAucmlnaHQge1xyXG4gICAgd2lkdGg6IDI3NXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzNXB4O1xyXG59XHJcblxyXG4ubmF2IC5yaWdodCAudXBncmFkZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDExNiwgMTE2LCAxMTYsIC4zKTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogLjJzO1xyXG59XHJcblxyXG4udXBncmFkZV9wcm8sIC51cGdyYWRlIC5ob3Zlcl90aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm5hdiAucmlnaHQgLnVwZ3JhZGU6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMTYsIDExNiwgMTE2LCAxKTtcclxufVxyXG5cclxuLyogU3RhciBzeW1ib2wgaW4gdXBncmRlIGJveCAqL1xyXG4ubmF2IC5yaWdodCAudXBncmFkZSBzdmcge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm5hdiAucmlnaHQgLnVwZ3JhZGUgcGF0aCB7XHJcbiAgICBmaWxsOiAjRkZEMDkzO1xyXG59XHJcblxyXG4ubmF2IC5yaWdodCAudXBncmFkZSBzcGFuIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLnJpZ2h0IC51cGdyYWRlIC5ob3Zlcl90ZXh0IHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwcHg7XHJcbiAgICByaWdodDogMjVweDtcclxuICAgIGJhY2tncm91bmQ6ICMyODI4Mjg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLnJpZ2h0IC51cGdyYWRlOmhvdmVyIC5ob3Zlcl90ZXh0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5cclxuLyogUGx1cyBpY29uICovXHJcbi5uYXYgLnJpZ2h0IHN2ZyB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm5hdiAucmlnaHQgPiBzdmc6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMTYsIDExNiwgMTE2LCAuMyk7XHJcbn1cclxuXHJcbi5uYXYgLnJpZ2h0IHBhdGgge1xyXG4gICAgZmlsbDogd2hpdGU7XHJcbn1cclxuXHJcbi8qIEhlbHAgaWNvbiAqL1xyXG4ubmF2IC5yaWdodCAuaGVscCB7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbn1cclxuXHJcbi8qIE5vdGlmaWNhdGlvbiBpY29uICovXHJcbi5uYXYgLnJpZ2h0IC5ub3RpZmljYXRpb24ge1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL25hdmJhci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsb0JBQW9COztBQUVwQjtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBLGtDQUFrQzs7QUFFbEMsMEJBQTBCO0FBQzFCO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksUUFBUTtBQUNaOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQSxnQ0FBZ0M7QUFDaEM7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQSx1QkFBdUI7QUFDdkI7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsd0JBQXdCO0FBQzVCOzs7QUFHQSxrQ0FBa0M7O0FBRWxDO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUEsOEJBQThCO0FBQzlCO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7O0FBR0EsY0FBYztBQUNkO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQSxjQUFjO0FBQ2Q7SUFDSSxZQUFZO0FBQ2hCOztBQUVBLHNCQUFzQjtBQUN0QjtJQUNJLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogLk5hdmJhciBzdHlsaW5nICovXFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LCAubmF2IC5sZWZ0LCAubmF2IC5yaWdodCB7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgaGVpZ2h0OiA0NXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMjgyODI4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbi8qIFN0eWxpbmcgbGVmdCBzaWRlIG9mIC5uYXZiYXIgICovXFxyXFxuXFxyXFxuLyogSGFtYnVyZ2VyIGZvciBzaWRlYmFyICovXFxyXFxuLm5hdiAuaGFtYnVyZ2VyIHtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRyYW5zaXRpb246IC4zcztcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiAuaGFtYnVyZ2VyOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMyk7XFxyXFxufVxcclxcblxcclxcbi5uYXYgLmxlZnQgLmhhbSwgLmhhbTo6YmVmb3JlLCAuaGFtOjphZnRlciB7XFxyXFxuICAgIHdpZHRoOiAxNXB4O1xcclxcbiAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5oYW0ge1xcclxcbiAgICBtYXJnaW46IDE0cHggOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGFtOjpiZWZvcmUsIC5oYW06OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uaGFtOjpiZWZvcmUge1xcclxcbiAgICB0b3A6IDlweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhhbTo6YWZ0ZXIge1xcclxcbiAgICBib3R0b206IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIEhvbWUgYnV0dG9uIGFuZCBzZWFyY2ggaWNvbiAqL1xcclxcbi5uYXYgLmxlZnQgLmhvbWUsIC5uYXYgLmxlZnQgLm1hZ19nbGFzcyB7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAuM3M7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiAubGVmdCAuaG9tZTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IC5sZWZ0IHBhdGgge1xcclxcbiAgICBmaWxsOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1hZ19nbGFzcyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogMTBweDtcXHJcXG4gICAgdG9wOiAtMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTZWFyY2ggYmFyIGluIC5uYXYgKi9cXHJcXG4ubmF2IC5zZWFyY2gge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5uYXYgLmxlZnQgaW5wdXR7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAyOHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDExNiwgMTE2LCAxMTYsIC4zKTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAycHg7XFxyXFxuICAgIHRyYW5zaXRpb246IC40cztcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiAubGVmdCBpbnB1dDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuNCk7XFxyXFxufVxcclxcblxcclxcbi5uYXYgLmxlZnQgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IC5sZWZ0IGlucHV0OmZvY3Vze1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIHdpZHRoOiAzNTBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC40KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogU3R5bGluZyByaWdodCBzaWRlIG9mIC5uYXZiYXIgKi9cXHJcXG5cXHJcXG4ubmF2IC5yaWdodCB7XFxyXFxuICAgIHdpZHRoOiAyNzVweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMzVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiAucmlnaHQgLnVwZ3JhZGUge1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDExNiwgMTE2LCAxMTYsIC4zKTtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4udXBncmFkZV9wcm8sIC51cGdyYWRlIC5ob3Zlcl90aXRsZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYXYgLnJpZ2h0IC51cGdyYWRlOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMTYsIDExNiwgMTE2LCAxKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogU3RhciBzeW1ib2wgaW4gdXBncmRlIGJveCAqL1xcclxcbi5uYXYgLnJpZ2h0IC51cGdyYWRlIHN2ZyB7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYXYgLnJpZ2h0IC51cGdyYWRlIHBhdGgge1xcclxcbiAgICBmaWxsOiAjRkZEMDkzO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IC5yaWdodCAudXBncmFkZSBzcGFuIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5yaWdodCAudXBncmFkZSAuaG92ZXJfdGV4dCB7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDUwcHg7XFxyXFxuICAgIHJpZ2h0OiAyNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMjgyODI4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHBhZGRpbmc6IDI1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5yaWdodCAudXBncmFkZTpob3ZlciAuaG92ZXJfdGV4dCB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBQbHVzIGljb24gKi9cXHJcXG4ubmF2IC5yaWdodCBzdmcge1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiAucmlnaHQgPiBzdmc6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDExNiwgMTE2LCAxMTYsIC4zKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiAucmlnaHQgcGF0aCB7XFxyXFxuICAgIGZpbGw6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIZWxwIGljb24gKi9cXHJcXG4ubmF2IC5yaWdodCAuaGVscCB7XFxyXFxuICAgIHBhZGRpbmc6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogTm90aWZpY2F0aW9uIGljb24gKi9cXHJcXG4ubmF2IC5yaWdodCAubm90aWZpY2F0aW9uIHtcXHJcXG4gICAgcGFkZGluZzogMnB4O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIFNpZGViYXIgKi9cclxuXHJcbi5zaWRlYmFyIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgICBhbGlnbi1pdGVtczogbGVmdDtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTMwMHB4KTtcclxuICAgIHRyYW5zaXRpb246IC4ycztcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNDVweDtcclxuXHJcbn1cclxuXHJcbi5zaWRlYmFyLmFjdGl2ZSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcclxufVxyXG5cclxuLnNpZGViYXIgLnByb2plY3Q6aG92ZXIsIC5wcm9qZWN0LmFjdGl2ZV9wcm9qZWN0IHtcclxuICAgIGJhY2tncm91bmQ6ICNFRUVFRUU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG4vKiBzZWN0aW9uIG5hbWVzIGVnOiBpbmJveCAqL1xyXG4uc2VjdGlvbl9uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxufVxyXG5cclxuLyogUHJvamVjdHMgc2VjdGlvbiAqL1xyXG4ucHJvamVjdHNfdGl0bGUuc2VjdGlvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0c190aXRsZSBzcGFue1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjcpO1xyXG59XHJcblxyXG4ucHJvamVjdHNfdGl0bGUgc3ZnIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucHJvamVjdHNfdGl0bGUgcGF0aCB7XHJcbiAgICBmaWxsOiByZ2JhKDAsIDAsIDAsIC43KTtcclxufVxyXG5cclxuLnByb2plY3Qge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjcpO1xyXG4gICAgd2lkdGg6IDIyNXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogN3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4uZGVmYXVsdF9wcm9qZWN0IHtcclxuICAgIHBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uaG91c2VfaWNvbiB7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAzcHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0X25hbWUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgd2lkdGg6IDI2MHB4O1xyXG59XHJcblxyXG4ucHJvamVjdF9uYW1lIGlucHV0IHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0X25hbWU6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG5cclxuLnByb2plY3RfbmFtZSBzdmcge1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDE0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcclxufVxyXG5cclxuLnByb2plY3RfbmFtZSBzdmc6aG92ZXIsIHNwYW4ucHJvamVjdCBzdmc6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG59XHJcblxyXG5zcGFuLnByb2plY3Qgc3ZnIHtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaW5zZXQ6IDVweCAxOTBweDtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zaWRlYmFyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxZQUFZOztBQUVaO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLGVBQWU7SUFDZixTQUFTOztBQUViOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7OztBQUdBLDRCQUE0QjtBQUM1QjtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBLHFCQUFxQjtBQUNyQjtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsU0FBUztJQUNULGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBTaWRlYmFyICovXFxyXFxuXFxyXFxuLnNpZGViYXIge1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNGQUZBRkE7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGxlZnQ7XFxyXFxuICAgIHBhZGRpbmc6IDI1cHg7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzAwcHgpO1xcclxcbiAgICB0cmFuc2l0aW9uOiAuMnM7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiA0NXB4O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhci5hY3RpdmUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIgLnByb2plY3Q6aG92ZXIsIC5wcm9qZWN0LmFjdGl2ZV9wcm9qZWN0IHtcXHJcXG4gICAgYmFja2dyb3VuZDogI0VFRUVFRTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBzZWN0aW9uIG5hbWVzIGVnOiBpbmJveCAqL1xcclxcbi5zZWN0aW9uX25hbWUge1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogMTAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQcm9qZWN0cyBzZWN0aW9uICovXFxyXFxuLnByb2plY3RzX3RpdGxlLnNlY3Rpb24ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICB3aWR0aDogMjUwcHg7XFxyXFxuICAgIGhlaWdodDogMzVweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0c190aXRsZSBzcGFue1xcclxcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuNyk7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0c190aXRsZSBzdmcge1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0c190aXRsZSBwYXRoIHtcXHJcXG4gICAgZmlsbDogcmdiYSgwLCAwLCAwLCAuNyk7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0IHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuNyk7XFxyXFxuICAgIHdpZHRoOiAyMjVweDtcXHJcXG4gICAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogN3B4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVmYXVsdF9wcm9qZWN0IHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDNweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdXNlX2ljb24ge1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB0b3A6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RfbmFtZSB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xcclxcbiAgICB3aWR0aDogMjYwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0X25hbWUgaW5wdXQge1xcclxcbiAgICB3aWR0aDogMTUwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0X25hbWU6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdF9uYW1lIHN2ZyB7XFxyXFxuICAgIHdpZHRoOiAzNXB4O1xcclxcbiAgICBoZWlnaHQ6IDM1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRvcDogMTRweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC01cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0X25hbWUgc3ZnOmhvdmVyLCBzcGFuLnByb2plY3Qgc3ZnOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuMSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuc3Bhbi5wcm9qZWN0IHN2ZyB7XFxyXFxuICAgIHdpZHRoOiAyNXB4O1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBpbnNldDogNXB4IDE5MHB4O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIFRhc2sgdGl0bGUgYW5kIExpc3QgKi9cclxuLnRhc2tzIHtcclxuICAgIHdpZHRoOiA4NTBweDtcclxuICAgIGhlaWdodDogNzUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBpbnNldDogMTAwcHggNzAwcHg7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG59XHJcblxyXG4udGFza3MgLmFkZF90YXNrIHtcclxuICAgIHdpZHRoOiAxMTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmFkZF90YXNrOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjEpO1xyXG59XHJcblxyXG4uYWRkX3Rhc2sgc3BhbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbn1cclxuXHJcbi8qIEFkZCBuZXcgdGFzayAqL1xyXG4ubmV3X3Rhc2sge1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSguMykgdHJhbnNsYXRlWSgxMjUwcHgpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaW5zZXQ6IDIwMHB4IDcwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNTBweCAtMTlweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgdHJhbnNpdGlvbjogLjNzO1xyXG4gICAgei1pbmRleDogMztcclxufVxyXG5cclxuLm5ld190YXNrLmFjdGl2ZSB7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlWSgwKTtcclxufVxyXG5cclxuaW5wdXQudGFza19uYW1lIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbnRleHRhcmVhLnRhc2tfZGVzY3JpcHRpb24ge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgcmVzaXplOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4ubmV3X3Rhc2sgLmJ0bnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi50YXNrX2R1ZSwgLnRhc2tfcHJpb3JpdHkge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMylcclxufVxyXG5cclxuLnRhc2tfcHJpb3JpdHkge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi50YXNrX2R1ZTpob3ZlciwgLnRhc2tfcHJpb3JpdHk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuMDUpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubmV3X3Rhc2sgLmNvbmZpcm1fYnRucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcclxufVxyXG5cclxuLmNhbmNlbF90YXNrLCAuY29uZmlybV90YXNrIHtcclxuICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNvbmZpcm1fdGFzayB7XHJcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMCwgMCwgMCwgLjMpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY29uZmlybV90YXNrLmFjdGl2ZV90YXNrIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjgpO1xyXG59XHJcblxyXG4uY29uZmlybV90YXNrLmFjdGl2ZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDEpO1xyXG59XHJcblxyXG4ubmV3X3Rhc2sgaHIge1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjMpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG59XHJcblxyXG4uY29uZmlybV90YXNrIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLndhbGwge1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGluc2V0OiAwO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLndhbGwuYWN0aXZlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4vKiBUYXNrIExpc3QgKi9cclxuLnRhc2tfbGlzdCB7XHJcbiAgICB3aWR0aDogNjUwcHg7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaW5zZXQ6IDIwMHB4IDcwMHB4O1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxufVxyXG5cclxuLnRhc2tfbGlzdCBoMyB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi50YXNrX2RldGFpbHMge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC43KTtcclxufVxyXG5cclxuLnRhc2tfZGF0ZSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvdGFza3MuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHdCQUF3QjtBQUN4QjtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUEsaUJBQWlCO0FBQ2pCO0lBQ0ksU0FBUztJQUNULFlBQVk7SUFDWixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLHVDQUF1QztJQUN2QyxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwrQ0FBK0M7SUFDL0MsZUFBZTtJQUNmLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7SUFDWiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEI7QUFDSjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2YsUUFBUTtJQUNSLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBLGNBQWM7QUFDZDtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogVGFzayB0aXRsZSBhbmQgTGlzdCAqL1xcclxcbi50YXNrcyB7XFxyXFxuICAgIHdpZHRoOiA4NTBweDtcXHJcXG4gICAgaGVpZ2h0OiA3NTBweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBpbnNldDogMTAwcHggNzAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrcyAuYWRkX3Rhc2sge1xcclxcbiAgICB3aWR0aDogMTE1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcXHJcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZF90YXNrOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuMSk7XFxyXFxufVxcclxcblxcclxcbi5hZGRfdGFzayBzcGFuIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBBZGQgbmV3IHRhc2sgKi9cXHJcXG4ubmV3X3Rhc2sge1xcclxcbiAgICBoZWlnaHQ6IDA7XFxyXFxuICAgIHdpZHRoOiA1MDBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoLjMpIHRyYW5zbGF0ZVkoMTI1MHB4KTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBpbnNldDogMjAwcHggNzAwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNTBweCAtMTlweCByZ2JhKDAsMCwwLDAuNzUpO1xcclxcbiAgICB0cmFuc2l0aW9uOiAuM3M7XFxyXFxuICAgIHotaW5kZXg6IDM7XFxyXFxufVxcclxcblxcclxcbi5uZXdfdGFzay5hY3RpdmUge1xcclxcbiAgICBoZWlnaHQ6IDI1MHB4O1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVkoMCk7XFxyXFxufVxcclxcblxcclxcbmlucHV0LnRhc2tfbmFtZSB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYS50YXNrX2Rlc2NyaXB0aW9uIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICAgIHJlc2l6ZTogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3X3Rhc2sgLmJ0bnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza19kdWUsIC50YXNrX3ByaW9yaXR5IHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zKVxcclxcbn1cXHJcXG5cXHJcXG4udGFza19wcmlvcml0eSB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza19kdWU6aG92ZXIsIC50YXNrX3ByaW9yaXR5OmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuMDUpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uZXdfdGFzayAuY29uZmlybV9idG5zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbmNlbF90YXNrLCAuY29uZmlybV90YXNrIHtcXHJcXG4gICAgd2lkdGg6IDc1cHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29uZmlybV90YXNrIHtcXHJcXG4gICAgYmFja2dyb3VuZDpyZ2JhKDAsIDAsIDAsIC4zKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29uZmlybV90YXNrLmFjdGl2ZV90YXNrIHtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuOCk7XFxyXFxufVxcclxcblxcclxcbi5jb25maXJtX3Rhc2suYWN0aXZlOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAxKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld190YXNrIGhyIHtcXHJcXG4gICAgd2lkdGg6IDUwMHB4O1xcclxcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuMyk7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbmZpcm1fdGFzayB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLndhbGwge1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgaW5zZXQ6IDA7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi53YWxsLmFjdGl2ZSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUYXNrIExpc3QgKi9cXHJcXG4udGFza19saXN0IHtcXHJcXG4gICAgd2lkdGg6IDY1MHB4O1xcclxcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGluc2V0OiAyMDBweCA3MDBweDtcXHJcXG4gICAgcGFkZGluZzogMjVweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFza19saXN0IGgzIHtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi50YXNrX2RldGFpbHMge1xcclxcbiAgICBmb250LXNpemU6IDEzcHg7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXHJcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjcpO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza19kYXRlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogVXBncmFkZSBwbGFucyBib3ggZGlzcGxheSAqL1xyXG4udXBncmFkZV9wbGFucyxcclxuLnVwZ3JhZGVfcGxhbnMgLmxlZnQsXHJcbi51cGdyYWRlX3BsYW5zIC5yaWdodCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnVwZ3JhZGVfcGxhbnMge1xyXG4gICAgd2lkdGg6IDBweDtcclxuICAgIGhlaWdodDogMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB3aGl0ZSAwJSwgd2hpdGUgNjAlLCAjRkZGQUY0IDYwJSk7XHJcbiAgICBsZWZ0OiA2MDBweDtcclxuICAgIHRvcDogMTUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IDAuMXMgdHJhbnNmb3JtLCAuNnMgb3BhY2l0eTtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi51cGdyYWRlX3BsYW5zLmFjdGl2ZSB7XHJcbiAgICB3aWR0aDogNzUwcHg7XHJcbiAgICBoZWlnaHQ6IDU1MHB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLnVwZ3JhZGVfcGxhbnMgLmxlZnQge1xyXG4gICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG59XHJcblxyXG4udXBncmFkZV9wbGFucyAjeWVhcmx5X3BsYW4sXHJcbi51cGdyYWRlX3BsYW5zICNtb250aGx5X3BsYW4ge1xyXG4gICAgd2lkdGg6IDBweDtcclxuICAgIGhlaWdodDogMHB4O1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnVwZ3JhZGVfcGxhbnMgLnBsYW5fbGFiZWwge1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4xKTtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC42KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnBsYW5fbGFiZWw6bnRoLW9mLXR5cGUoMikge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnVwZ3JhZGVfcGxhbnMgLnBsYW5fdHlwZTpjaGVja2VkKy5wbGFuX2xhYmVsIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuNSk7XHJcbn1cclxuXHJcbi51cGdyYWRlX3BsYW5zIC5wbGFuX3R5cGU6Y2hlY2tlZCsucGxhbl9sYWJlbCAuYnJpZ2h0ZW4ge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ucGxhbl9sYWJlbCAudGltZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbmxhYmVsOjpiZWZvcmUsXHJcbmxhYmVsOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuNSk7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5wbGFuX3R5cGU6Y2hlY2tlZCtsYWJlbDo6YmVmb3JlIHtcclxuICAgIHdpZHRoOiAycHg7XHJcbiAgICBoZWlnaHQ6IDhweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICBsZWZ0OiAzNTdweDtcclxuICAgIHRvcDogMzVweDtcclxufVxyXG5cclxuLnBsYW5fdHlwZTpjaGVja2VkK2xhYmVsOjphZnRlciB7XHJcbiAgICB3aWR0aDogMnB4O1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgbGVmdDogMzY1cHg7XHJcbiAgICB0b3A6IDI3cHg7XHJcbn1cclxuXHJcbi51cGdyYWRlX3BsYW5zIHAge1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjUpO1xyXG59XHJcblxyXG4udXBncmFkZV9wbGFucyAuZmluYWxfcmVtYWluZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi51cGdyYWRlX3BsYW5zIC5maW5hbF9yZW1haW5kZXIrcCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi51cGdyYWRlX3BsYW5zIC5jaGVja291dCB7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE4LCAxOCwgMTgsIC45KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHRyYW5zaXRpb246IC4zcztcclxufVxyXG5cclxuLnVwZ3JhZGVfcGxhbnMgLmNoZWNrb3V0OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMxMjEyMTI7XHJcbn1cclxuXHJcbi8qIHVwZ3JhZGUgcGxhbiBib3ggcmlnaHQgc2lkZSAqL1xyXG4udXBncmFkZV9wbGFucyAucmlnaHQge1xyXG4gICAgcGFkZGluZzogMjVweDtcclxufVxyXG5cclxuLnVwZ3JhZGVfcGxhbnMgLnJpZ2h0IHN2ZyB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkFGNDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG59XHJcblxyXG4udXBncmFkZV9wbGFucyAucmlnaHQgaW1nIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG59XHJcblxyXG4udXBncmFkZV9wbGFucyAucmlnaHQgLnByb19hZHYge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxufVxyXG5cclxuLnVwZ3JhZGVfcGxhbnMgLnJpZ2h0IGxpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuNik7XHJcbn1cclxuXHJcbi51cGdyYWRlX3BsYW5zIC5yaWdodCAucHJvX2FkdiBsaTo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICfinJMnO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgY29sb3I6ICMwQzg2MEM7XHJcbn1cclxuXHJcbi51cGdyYWRlX3BsYW5zIC5yaWdodCAubGVhcm5fbW9yZSB7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuNik7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcclxufVxyXG5cclxuLnVwZ3JhZGVfcGxhbnMgLnJpZ2h0IC5sZWFybl9tb3JlOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCLik5hcIjtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC42KTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy91cGdyYWRlX2JveC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsOEJBQThCO0FBQzlCOzs7SUFHSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsb0VBQW9FO0lBQ3BFLFdBQVc7SUFDWCxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFVBQVU7SUFDVix1Q0FBdUM7SUFDdkMsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksVUFBVTtJQUNWLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1DQUFtQztJQUNuQyx3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsU0FBUztBQUNiOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsV0FBVztJQUNYLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUEsZ0NBQWdDO0FBQ2hDO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFVwZ3JhZGUgcGxhbnMgYm94IGRpc3BsYXkgKi9cXHJcXG4udXBncmFkZV9wbGFucyxcXHJcXG4udXBncmFkZV9wbGFucyAubGVmdCxcXHJcXG4udXBncmFkZV9wbGFucyAucmlnaHQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4udXBncmFkZV9wbGFucyB7XFxyXFxuICAgIHdpZHRoOiAwcHg7XFxyXFxuICAgIGhlaWdodDogMHB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgd2hpdGUgMCUsIHdoaXRlIDYwJSwgI0ZGRkFGNCA2MCUpO1xcclxcbiAgICBsZWZ0OiA2MDBweDtcXHJcXG4gICAgdG9wOiAxNTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4xcyB0cmFuc2Zvcm0sIC42cyBvcGFjaXR5O1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4udXBncmFkZV9wbGFucy5hY3RpdmUge1xcclxcbiAgICB3aWR0aDogNzUwcHg7XFxyXFxuICAgIGhlaWdodDogNTUwcHg7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi51cGdyYWRlX3BsYW5zIC5sZWZ0IHtcXHJcXG4gICAgd2lkdGg6IDQ1MHB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnVwZ3JhZGVfcGxhbnMgI3llYXJseV9wbGFuLFxcclxcbi51cGdyYWRlX3BsYW5zICNtb250aGx5X3BsYW4ge1xcclxcbiAgICB3aWR0aDogMHB4O1xcclxcbiAgICBoZWlnaHQ6IDBweDtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnVwZ3JhZGVfcGxhbnMgLnBsYW5fbGFiZWwge1xcclxcbiAgICB3aWR0aDogNDAwcHg7XFxyXFxuICAgIGhlaWdodDogNzVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMSk7XFxyXFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC42KTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5wbGFuX2xhYmVsOm50aC1vZi10eXBlKDIpIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnVwZ3JhZGVfcGxhbnMgLnBsYW5fdHlwZTpjaGVja2VkKy5wbGFuX2xhYmVsIHtcXHJcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjUpO1xcclxcbn1cXHJcXG5cXHJcXG4udXBncmFkZV9wbGFucyAucGxhbl90eXBlOmNoZWNrZWQrLnBsYW5fbGFiZWwgLmJyaWdodGVuIHtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ucGxhbl9sYWJlbCAudGltZSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5sYWJlbDo6YmVmb3JlLFxcclxcbmxhYmVsOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC41KTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcblxcclxcbi5wbGFuX3R5cGU6Y2hlY2tlZCtsYWJlbDo6YmVmb3JlIHtcXHJcXG4gICAgd2lkdGg6IDJweDtcXHJcXG4gICAgaGVpZ2h0OiA4cHg7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxyXFxuICAgIGxlZnQ6IDM1N3B4O1xcclxcbiAgICB0b3A6IDM1cHg7XFxyXFxufVxcclxcblxcclxcbi5wbGFuX3R5cGU6Y2hlY2tlZCtsYWJlbDo6YWZ0ZXIge1xcclxcbiAgICB3aWR0aDogMnB4O1xcclxcbiAgICBoZWlnaHQ6IDE2cHg7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG4gICAgbGVmdDogMzY1cHg7XFxyXFxuICAgIHRvcDogMjdweDtcXHJcXG59XFxyXFxuXFxyXFxuLnVwZ3JhZGVfcGxhbnMgcCB7XFxyXFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcXHJcXG59XFxyXFxuXFxyXFxuLnVwZ3JhZGVfcGxhbnMgLmZpbmFsX3JlbWFpbmRlciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnVwZ3JhZGVfcGxhbnMgLmZpbmFsX3JlbWFpbmRlcitwIHtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4udXBncmFkZV9wbGFucyAuY2hlY2tvdXQge1xcclxcbiAgICB3aWR0aDogNDAwcHg7XFxyXFxuICAgIGhlaWdodDogMzJweDtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgxOCwgMTgsIDE4LCAuOSk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4udXBncmFkZV9wbGFucyAuY2hlY2tvdXQ6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMTIxMjEyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB1cGdyYWRlIHBsYW4gYm94IHJpZ2h0IHNpZGUgKi9cXHJcXG4udXBncmFkZV9wbGFucyAucmlnaHQge1xcclxcbiAgICBwYWRkaW5nOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udXBncmFkZV9wbGFucyAucmlnaHQgc3ZnIHtcXHJcXG4gICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjRkZGQUY0O1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udXBncmFkZV9wbGFucyAucmlnaHQgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XFxyXFxufVxcclxcblxcclxcbi51cGdyYWRlX3BsYW5zIC5yaWdodCAucHJvX2FkdiB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udXBncmFkZV9wbGFucyAucmlnaHQgbGkge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC42KTtcXHJcXG59XFxyXFxuXFxyXFxuLnVwZ3JhZGVfcGxhbnMgLnJpZ2h0IC5wcm9fYWR2IGxpOjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiAn4pyTJztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbiAgICBjb2xvcjogIzBDODYwQztcXHJcXG59XFxyXFxuXFxyXFxuLnVwZ3JhZGVfcGxhbnMgLnJpZ2h0IC5sZWFybl9tb3JlIHtcXHJcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjYpO1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IC0xNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udXBncmFkZV9wbGFucyAucmlnaHQgLmxlYXJuX21vcmU6OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCLik5hcXFwiO1xcclxcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuNik7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uZGltIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgaW5zZXQ6IDBweDtcclxuICAgIHRyYW5zaXRpb246IC4yO1xyXG59XHJcblxyXG4uZGltLmFjdGl2ZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnRhc2sge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsZUFBZTtJQUNmLFVBQVU7SUFDVixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5kaW0ge1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBpbnNldDogMHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAuMjtcXHJcXG59XFxyXFxuXFxyXFxuLmRpbS5hY3RpdmUge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXZiYXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXZiYXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NpZGViYXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaWRlYmFyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90YXNrcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Rhc2tzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi91cGdyYWRlX2JveC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3VwZ3JhZGVfYm94LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gQ2FsbGluZyBodG1sIGVsZW1lbnRzXHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hcIik7XHJcbmNvbnN0IG1hZ19nbGFzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFnX2dsYXNzXCIpO1xyXG5jb25zdCBzZWFyY2hfYm94ID0gc2VhcmNoLmNoaWxkTm9kZXNbM107XHJcbmNvbnN0IGhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGFtYnVyZ2VyXCIpO1xyXG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyXCIpO1xyXG5jb25zdCB1cGdyYWRlX2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXBncmFkZV9wbGFuc1wiKTtcclxuY29uc3QgdXBncmFkZV9idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVwZ3JhZGVcIik7XHJcbmNvbnN0IGRpbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGltXCIpO1xyXG5cclxuXHJcbmNvbnN0IGVsID0gKCgpID0+IHtcclxuICAgIGNvbnN0IHNlYXJjaF9jb2xvcnMgPSAoKSA9PiB7XHJcbiAgICAgICAgc2VhcmNoX2JveC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgKG1hZ19nbGFzcy5jaGlsZE5vZGVzWzNdKS5zdHlsZS5maWxsID0gXCJyZ2JhKDAsIDAsIDAsIC40KVwiO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc2VhcmNoX2JveC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPSBzZWFyY2hfYm94KSB7IChtYWdfZ2xhc3MuY2hpbGROb2Rlc1szXSkuc3R5bGUuZmlsbCA9IFwid2hpdGVcIjsgfTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBzZWFyY2hfYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIChtYWdfZ2xhc3MuY2hpbGROb2Rlc1szXSkuc3R5bGUuZmlsbCA9IFwicmdiYSgwLCAwLCAwLCAuNClcIjtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHNlYXJjaF9ib3guYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAobWFnX2dsYXNzLmNoaWxkTm9kZXNbM10pLnN0eWxlLmZpbGwgPSBcIndoaXRlXCI7XHJcbiAgICAgICAgfSlcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2hvdyA9ICgpID0+IHtcclxuICAgICAgICB1cGdyYWRlX2JveC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIGRpbS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgIHNpZGViYXIuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIHsgc2VhcmNoX2NvbG9ycywgc2hvdywgY2xvc2UgfTtcclxufSkoKTtcclxuXHJcbi8vIEV2ZW50c1xyXG5cclxudXBncmFkZV9idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVsLnNob3cpO1xyXG5cclxuXHJcbi8vIE9wZW4gc2lkZSBiYXIgb24gY2xpY2sgb24gaGFtYnVyZ2VyXHJcbmhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWwuY2xvc2UpO1xyXG5cclxuLy8gRGltIGJhY2tncm91bmQgd2hpbGUgc2hvd2luZyB1cGdyYWRlIHBsYW5zXHJcbmRpbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgZGltLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICB1cGdyYWRlX2JveC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG59KVxyXG5lbC5zZWFyY2hfY29sb3JzKCk7IiwiLy8gSW1hZ2VzXHJcbmltcG9ydCBob3VzZSBmcm9tICcuLi9pY29ucy9ob3VzZS5wbmcnXHJcblxyXG4vLyBDYWxsaW5nIGVsZW1lbnRzXHJcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0X3RpdGxlXCIpO1xyXG5jb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0X2xpc3RcIik7XHJcbmNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RcIik7XHJcbmNvbnN0IGhvdXNlX2ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvdXNlX2ljb25cIilcclxuY29uc3QgYWRkX3Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZF9wcm9qZWN0XCIpO1xyXG5cclxuXHJcbi8vIEZ1bmN0aW9uc1xyXG5cclxuY29uc3QgZWwgPSAoKCkgPT4ge1xyXG4gICAgY29uc3QgZGVmYXVsdF9saXN0ID0gKCkgPT4ge1xyXG4gICAgICAgIGxpc3QuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwiZGVmYXVsdF9wcm9qZWN0IHByb2plY3QgYWN0aXZlX3Byb2plY3RcIj5Ib21lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJob3VzZV9pY29uXCIgc3JjPVwiLi9pbWFnZXMvaG91c2UucG5nXCIgYWx0PVwiaG91c2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPmBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBuZXdfcHJvamVjdCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBsZW5ndGggPSAobGlzdC5jaGlsZE5vZGVzKS5sZW5ndGhcclxuICAgICAgICBpZiAoIShsaXN0LmNoaWxkTm9kZXNbbGVuZ3RoIC0gMV0pLmNsYXNzTGlzdC5jb250YWlucyhcInByb2plY3RfbmFtZVwiKSkge1xyXG4gICAgICAgICAgICBsaXN0LmlubmVySFRNTCArPSBgPGRpdiBjbGFzcz1cInByb2plY3RfbmFtZVwiPjxpbnB1dCBjbGFzcz1cInByb2plY3RfbmFtZV9pbnB1dFwiIHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+Y2xvc2U8L3RpdGxlPjxwYXRoIGQ9XCJNMTksNi40MUwxNy41OSw1TDEyLDEwLjU5TDYuNDEsNUw1LDYuNDFMMTAuNTksMTJMNSwxNy41OUw2LjQxLDE5TDEyLDEzLjQxTDE3LjU5LDE5TDE5LDE3LjU5TDEzLjQxLDEyTDE5LDYuNDFaXCIgLz48L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPmNoZWNrPC90aXRsZT48cGF0aCBkPVwiTTIxLDdMOSwxOUwzLjUsMTMuNUw0LjkxLDEyLjA5TDksMTYuMTdMMTkuNTksNS41OUwyMSw3WlwiIC8+PC9zdmc+YFxyXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0X25hbWVfaW5wdXRcIik7XHJcbiAgICAgICAgICAgIGFkZF9jYW5jZWxfcHJvamVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZGRfY2FuY2VsX3Byb2plY3QgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdF9pbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdF9uYW1lXCIpO1xyXG4gICAgICAgIGNvbnN0IG1pbnVzID0gcHJvamVjdF9pbnB1dC5jaGlsZE5vZGVzWzJdO1xyXG4gICAgICAgIGNvbnN0IHBsdXMgPSBwcm9qZWN0X2lucHV0LmNoaWxkTm9kZXNbNF07XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdF9uYW1lX2lucHV0XCIpO1xyXG4gICAgICAgIG5hbWUuZm9jdXMoKTtcclxuICAgICAgICBtaW51cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkgeyBsaXN0LnJlbW92ZUNoaWxkKHByb2plY3RfaW5wdXQpOyB9KTtcclxuICAgICAgICBwbHVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjb25maXJtX3RpdGxlKTtcclxuICAgICAgICBuYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgICAgICBpZiAoZWwua2V5ID09IFwiRW50ZXJcIikgeyBjb25maXJtX3RpdGxlKCk7IH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZWwua2V5ID09IFwiRXNjYXBlXCIpIHsgbGlzdC5yZW1vdmVDaGlsZChwcm9qZWN0X2lucHV0KTsgfTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvbmZpcm1fdGl0bGUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdF9pbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdF9uYW1lXCIpO1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RfbmFtZV9pbnB1dFwiKTtcclxuICAgICAgICBsZXQgcHJvamVjdCA9IG5hbWUudmFsdWU7XHJcbiAgICAgICAgaWYgKHByb2plY3QgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBsaXN0LnJlbW92ZUNoaWxkKHByb2plY3RfaW5wdXQpO1xyXG4gICAgICAgICAgICBsaXN0LmlubmVySFRNTCArPSBgPHNwYW4gY2xhc3M9XCJwcm9qZWN0XCI+JHtwcm9qZWN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImRlbGV0ZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0xOSw0SDE1LjVMMTQuNSwzSDkuNUw4LjUsNEg1VjZIMTlNNiwxOUEyLDIgMCAwLDAgOCwyMUgxNkEyLDIgMCAwLDAgMTgsMTlWN0g2VjE5WlwiIC8+PC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+YFxyXG4gICAgICAgICAgICByZW1vdmVfcHJvamVjdCgpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVtb3ZlX3Byb2plY3QgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVtb3ZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWxldGVcIik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZW1vdmUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgcmVtb3ZlW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0LnJlbW92ZUNoaWxkKHJlbW92ZVtpXS5wYXJlbnRFbGVtZW50KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWRkX3Byb2plY3QgPSAoKSA9PiB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IGFkZF9wcm9qZWN0LCBkZWZhdWx0X2xpc3QsIG5ld19wcm9qZWN0IH07XHJcbn0pKCk7XHJcblxyXG5cclxuXHJcbi8vIEV2ZW50IGhhbmRsaW5nXHJcblxyXG5hZGRfcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWwubmV3X3Byb2plY3QpO1xyXG5lbC5kZWZhdWx0X2xpc3QoKTsiLCIvLyBDYWxsaW5nIEVsZW1lbnRzXHJcbmNvbnN0IHRhc2tfbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza19saXN0XCIpO1xyXG5jb25zdCBhZGRfdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWRkX3Rhc2tcIik7XHJcbmNvbnN0IG5ld190YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdfdGFza1wiKTtcclxuY29uc3QgdGFza19uYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrX25hbWVcIik7XHJcbmNvbnN0IHRhc2tfdGV4dGFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tfZGVzY3JpcHRpb25cIik7XHJcbmNvbnN0IHRhc2tfZHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrX2R1ZVwiKTtcclxuY29uc3QgdGFza19wcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza19wcmlvcml0eVwiKTtcclxuY29uc3QgY2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYW5jZWxfdGFza1wiKTtcclxuY29uc3QgY29uZmlybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29uZmlybV90YXNrXCIpO1xyXG5jb25zdCB3YWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53YWxsXCIpO1xyXG5jb25zdCBIb21lID0gW107XHJcblxyXG4vLyBGdW5jdGlvbnNcclxuXHJcbmNvbnN0IGVsID0gKCgpID0+IHtcclxuICBjb25zdCBzaG93ID0gKCkgPT4ge1xyXG4gICAgbmV3X3Rhc2suY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgIHdhbGwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgIHRhc2tfbmFtZS5mb2N1cygpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGRvd24pID0+IHtcclxuICAgICAgaWYgKGRvd24ua2V5ID09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgICBjbG9zZSgpO1xyXG4gICAgICB9IGVsc2UgaWYgKGRvd24ua2V5ID09IFwiRW50ZXJcIikge1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGVtcHR5KCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2VuZXJhdGVfbGlzdCA9IChhcnIpID0+IHtcclxuICAgIHRhc2tfbGlzdC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgdGFzayA9IHRhc2tfbGlzdC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcclxuICAgICAgdGFzay5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcclxuICAgICAgdGFzay5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGgzIGNsYXNzPVwidGFza190aXRsZVwiPiR7SG9tZVtpXS50aXRsZX08L2gzPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwidGFza19kYXRlXCI+JHtIb21lW2ldLmR1ZX08L3NwYW4+XHJcbiAgICAgICAgPGhyPlxyXG4gICAgICAgIDxoNCBjbGFzcz1cInRhc2tfZGV0YWlsc1wiPiR7SG9tZVtpXS5kZXNjcmlwdGlvbn08L2g0PmA7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29uZmlybV90YXNrID0gKCkgPT4ge1xyXG4gICAgaWYgKHZhbGlkX3Rhc2soKSkge1xyXG4gICAgICBsZXQgbmFtZSA9IHRhc2tfbmFtZS52YWx1ZTtcclxuICAgICAgbGV0IHRhc2sgPSB7fTtcclxuICAgICAgSG9tZS5wdXNoKFxyXG4gICAgICAgIGNyZWF0ZV90YXNrKFxyXG4gICAgICAgICAgbmFtZSxcclxuICAgICAgICAgIHRhc2tfdGV4dGFyZWEudmFsdWUsXHJcbiAgICAgICAgICB0YXNrX2R1ZS52YWx1ZSxcclxuICAgICAgICAgIHRhc2tfcHJpb3JpdHkudmFsdWVcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBnZW5lcmF0ZV9saXN0KEhvbWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IEhvbWVfcHJvamVjdCA9ICgpID0+IHtcclxuICAgIEhvbWUucHVzaChcclxuICAgICAgY3JlYXRlX3Rhc2soXCJidXkgbWlsa1wiLCBcImJ1eSBtaWxrIGZyb20gbWFya2V0XCIsIFwiMTItMi0yMDIzXCIsIFwiaGlnaFwiKVxyXG4gICAgKTtcclxuICAgIEhvbWUucHVzaChcclxuICAgICAgY3JlYXRlX3Rhc2soXHJcbiAgICAgICAgXCJkcmluayBtaWxrXCIsXHJcbiAgICAgICAgXCJkb24ndCBmb3JnZXQgdG8gZHJpbmsgeW91ciBtaWxrXCIsXHJcbiAgICAgICAgXCIxNC01LTIwMjNcIixcclxuICAgICAgICBcImhpZ2hcIlxyXG4gICAgICApXHJcbiAgICApO1xyXG4gICAgZ2VuZXJhdGVfbGlzdChIb21lKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjcmVhdGVfdGFzayA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZSwgcHJpb3JpdHkpID0+IHtcclxuICAgIGxldCB0YXNrID0ge307XHJcbiAgICB0YXNrLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0YXNrLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0YXNrLmR1ZSA9IGR1ZTtcclxuICAgIHRhc2sucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIGNsb3NlKCk7XHJcblxyXG4gICAgcmV0dXJuIHRhc2s7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdmFsaWRfdGFzayA9ICgpID0+IHtcclxuICAgIGlmICh0YXNrX25hbWUudmFsdWUgIT0gXCJcIiAmJiB0YXNrX2R1ZS52YWx1ZSAhPSBcIlwiKSB7XHJcbiAgICAgIGNvbmZpcm0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZV90YXNrXCIpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbmZpcm0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZV90YXNrXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZW1wdHkgPSAoKSA9PiB7XHJcbiAgICB0YXNrX25hbWUudmFsdWUgPSBcIlwiO1xyXG4gICAgdGFza19kdWUudmFsdWUgPSBcIlwiO1xyXG4gICAgdGFza190ZXh0YXJlYS52YWx1ZSA9IFwiXCI7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2xvc2UgPSAoKSA9PiB7XHJcbiAgICBuZXdfdGFzay5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgd2FsbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgZW1wdHkoKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4geyBIb21lX3Byb2plY3QsIHNob3csIGNsb3NlLCB2YWxpZF90YXNrLCBjb25maXJtX3Rhc2sgfTtcclxufSkoKTtcclxuXHJcbi8vIEV2ZW50c1xyXG5cclxuZWwuSG9tZV9wcm9qZWN0KCk7XHJcbmZvciAobGV0IGkgPSAwOyBpIDwgYWRkX3Rhc2subGVuZ3RoOyBpKyspIHtcclxuICBhZGRfdGFza1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWwuc2hvdyk7XHJcbn1cclxuY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlbC5jbG9zZSk7XHJcbndhbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVsLmNsb3NlKTtcclxudGFza19uYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBlbC52YWxpZF90YXNrKTtcclxuY29uZmlybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWwuY29uZmlybV90YXNrKTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gY3NzIGZpbGVzXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgJy4vY3NzL25hdmJhci5jc3MnO1xyXG5pbXBvcnQgJy4vY3NzL3Rhc2tzLmNzcyc7XHJcbmltcG9ydCAnLi9jc3MvdXBncmFkZV9ib3guY3NzJztcclxuaW1wb3J0ICcuL2Nzcy9zaWRlYmFyLmNzcyc7XHJcblxyXG5cclxuLy8gamF2YXNjcmlwdCBmaWxlc1xyXG5pbXBvcnQgKiBhcyBuYXZiYXIgZnJvbSAnLi9qYXZhc2NyaXB0L25hdmJhcic7XHJcbmltcG9ydCAqIGFzIHNpZGViYXIgZnJvbSAnLi9qYXZhc2NyaXB0L3NpZGViYXInO1xyXG5pbXBvcnQgKiBhcyB0YXNrcyBmcm9tICcuL2phdmFzY3JpcHQvdGFza3MnO1xyXG5cclxuXHJcbi8vIGltcG9ydCBpbWFnZXMgYW5kIGljb25zXHJcbmltcG9ydCBwYW5kYSBmcm9tIFwiLi9pbWFnZXMvcGFuZGEucG5nXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IGFkZF9wcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRfcHJvamVjdFwiKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
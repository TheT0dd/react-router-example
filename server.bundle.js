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

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var _express = __webpack_require__(1);

	var _express2 = _interopRequireDefault(_express);

	var _path = __webpack_require__(2);

	var _path2 = _interopRequireDefault(_path);

	var _compression = __webpack_require__(3);

	var _compression2 = _interopRequireDefault(_compression);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(5);

	var _reactRouter = __webpack_require__(6);

	var _routes = __webpack_require__(7);

	var _routes2 = _interopRequireDefault(_routes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// and these to match the url to routes and then render


	// React related stuff for server rendering
	var app = (0, _express2.default)();

	// must be first!

	// we'll use this to render our app to an html string
	// server.js
	app.use((0, _compression2.default)());
	// serve our static stuff like index.css
	app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));

	// send all requests to index.html so browserHistory in React Router works
	app.get('*', function (req, res) {
		// res.sendFile(path.join(__dirname, 'public', 'index.html'))

		// match the routes to the url
		(0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirect, props) {
			// in here we can make some decisions all at once
			if (err) {
				// there was an error somewhere during route matching
				res.status(500).send(err.message);
			} else if (redirect) {
				// we haven't talked about `onEnter` hooks on routes, but before a
				// route is entered, it can redirect. Here we handle on the server.
				res.redirect(redirect.pathname + redirect.search);
			} else if (props) {
				// if we got props then we matched a route and can render
				// NOTE: `RouterContext` is what the `Router` renders. `Router` keeps these
				// `props` in its state as it listens to `browserHistory`. But on the
				// server our app is stateless, so we need to use `match` to
				// get these props before rendering.
				var appHtml = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, props));
				res.send(renderPage(appHtml));
			} else {
				// no errors, no redirect, we just didn't match anything
				// NOTE: dump the HTML into a template, lots of ways to do this, but none are
				// really influenced by React Router, so we're just using a little
				// function, `renderPage`
				res.status(404).send('Not Found');
			}
		});
	});

	function renderPage(appHtml) {
		return '\n    <!doctype html public="storage">\n    <html>\n    <meta charset=utf-8/>\n    <title>My First React Router App</title>\n    <link rel=stylesheet href=/index.css>\n    <div id=app>' + appHtml + '</div>\n    <script src="/bundle.js"></script>\n   ';
	}

	var PORT = process.env.PORT || 8080;

	app.listen(PORT, function () {
		console.log('Production Express server running at localhost:' + PORT);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(8);

	var _reactRouter = __webpack_require__(6);

	var _History = __webpack_require__(9);

	var _History2 = _interopRequireDefault(_History);

	var _App = __webpack_require__(10);

	var _App2 = _interopRequireDefault(_App);

	var _Home = __webpack_require__(12);

	var _Home2 = _interopRequireDefault(_Home);

	var _About = __webpack_require__(13);

	var _About2 = _interopRequireDefault(_About);

	var _Repos = __webpack_require__(14);

	var _Repos2 = _interopRequireDefault(_Repos);

	var _Repo = __webpack_require__(15);

	var _Repo2 = _interopRequireDefault(_Repo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createElement(
		_reactRouter.Route,
		{ path: '/', component: _App2.default },
		_react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
		_react2.default.createElement(
			_reactRouter.Route,
			{ path: '/repos', component: _Repos2.default },
			_react2.default.createElement(_reactRouter.Route, { path: '/repos/:userName/:repoName', component: _Repo2.default })
		),
		_react2.default.createElement(_reactRouter.Route, { path: '/about', component: _About2.default })
	);

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("react-dom");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRouter = __webpack_require__(6);

	exports.default = _reactRouter.browserHistory; /// This modules exists so that all other modules
	// may use the same history (browserHistory vs hashHistory)

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _NavLink = __webpack_require__(11);

	var _NavLink2 = _interopRequireDefault(_NavLink);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (props) {
		return _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(
				'h1',
				null,
				'React Router Tutorial'
			),
			_react2.default.createElement(
				'ul',
				{ role: 'nav' },
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						_NavLink2.default,
						{ to: '/', onlyActiveOnIndex: true },
						'Home'
					)
				),
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						_NavLink2.default,
						{ to: '/about' },
						'About'
					)
				),
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						_NavLink2.default,
						{ to: '/repos' },
						'Repos'
					)
				)
			),
			props.children
		);
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (props) {
		return _react2.default.createElement(_reactRouter.Link, _extends({}, props, { activeClassName: 'active' }));
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
		return _react2.default.createElement(
			'div',
			null,
			'Home'
		);
	}; // modules/Home.js

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
		return _react2.default.createElement(
			'div',
			null,
			'About'
		);
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _NavLink = __webpack_require__(11);

	var _NavLink2 = _interopRequireDefault(_NavLink);

	var _History = __webpack_require__(9);

	var _History2 = _interopRequireDefault(_History);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Repos = function (_React$Component) {
		_inherits(Repos, _React$Component);

		function Repos() {
			_classCallCheck(this, Repos);

			return _possibleConstructorReturn(this, (Repos.__proto__ || Object.getPrototypeOf(Repos)).apply(this, arguments));
		}

		_createClass(Repos, [{
			key: 'handleSubmit',


			// add this method
			value: function handleSubmit(event) {
				event.preventDefault();
				var userName = event.target.elements[0].value;
				var repo = event.target.elements[1].value;
				var path = '/repos/' + userName + '/' + repo;

				// OPTION 1: import history from our custom history module
				_History2.default.push(path);

				// OPTION 2: assume browserHistory is used
				// (with care, should be same as history passed in router)
				// browserHistory.push(path)
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'h2',
						null,
						'Repos'
					),
					_react2.default.createElement(
						'ul',
						null,
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								_NavLink2.default,
								{ to: '/repos/reactjs/react-router' },
								'React Router'
							)
						),
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								_NavLink2.default,
								{ to: '/repos/facebook/react' },
								'React'
							)
						),
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								'form',
								{ onSubmit: this.handleSubmit },
								_react2.default.createElement('input', { type: 'text', placeholder: 'userName' }),
								'/ ',
								' ',
								_react2.default.createElement('input', { type: 'text', placeholder: 'repo' }),
								' ',
								_react2.default.createElement(
									'button',
									{ type: 'submit' },
									'Go'
								)
							)
						)
					),
					this.props.children
				);
			}
		}]);

		return Repos;
	}(_react2.default.Component);

	exports.default = Repos;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (props) {
		return _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(
				'h2',
				null,
				props.params.repoName
			)
		);
	};

/***/ }
/******/ ]);
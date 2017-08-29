(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('lodash'), require('react'), require('prop-types')) :
	typeof define === 'function' && define.amd ? define(['lodash', 'react', 'prop-types'], factory) :
	(global.ReactDebounceIframe = factory(global._,global.React,global.PropTypes));
}(this, (function (_,React,PropTypes) { 'use strict';

_ = _ && _.hasOwnProperty('default') ? _['default'] : _;
var React__default = 'default' in React ? React['default'] : React;
PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Iframe = function (_Component) {
  _inherits(Iframe, _Component);

  function Iframe(props) {
    _classCallCheck(this, Iframe);

    var _this = _possibleConstructorReturn(this, (Iframe.__proto__ || Object.getPrototypeOf(Iframe)).call(this, props));

    _this.timer = null;
    _this.state = {
      src: props.src
    };
    return _this;
  }

  _createClass(Iframe, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      var src = nextProps.src,
          debounceWait = nextProps.debounceWait;

      // Not debounce at all

      if (!debounceWait) {
        this.setState({ src: src });
        if (this.timer) {
          clearTimeout(this.timer);
          this.timer = null;
        }
        return;
      }

      // Delay to change
      if (this.timer) {
        clearTimeout(this.timer);
        console.log('Iframe - previous src has been cancelled.');
      }
      this.timer = setTimeout(function () {
        console.log('Iframe - ' + src + ' is applied');
        _this2.setState({ src: src });
        _this2.timer = null;
      }, debounceWait);
    }
  }, {
    key: 'render',
    value: function render() {
      var otherProps = _.omit(this.props, ['debounceWait', 'src', 'title']);
      var src = this.state.src;


      return React__default.createElement('iframe', _extends({ src: src, title: this.props.title }, otherProps));
    }
  }]);

  return Iframe;
}(React.Component);

Iframe.displayName = 'Iframe';
Iframe.propTypes = {
  src: PropTypes.string.isRequired,
  debounceWait: PropTypes.number
};
Iframe.defaultProps = {
  debounceWait: 0
};

return Iframe;

})));

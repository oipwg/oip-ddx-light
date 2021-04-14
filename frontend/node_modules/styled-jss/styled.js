'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _propTypes = require('prop-types');

var _theming = require('theming');

var _filterProps = require('./utils/filterProps');

var _filterProps2 = _interopRequireDefault(_filterProps);

var _composeClasses = require('./utils/composeClasses');

var _composeClasses2 = _interopRequireDefault(_composeClasses);

var _generateTagName = require('./utils/generateTagName');

var _generateTagName2 = _interopRequireDefault(_generateTagName);

var _getSeparatedStyles2 = require('./utils/getSeparatedStyles');

var _getSeparatedStyles3 = _interopRequireDefault(_getSeparatedStyles2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var getElementName = function getElementName(element) {
  return element.displayName || element.name || 'StyledElement';
};

var getParamsByElement = function getParamsByElement(element) {
  if (typeof element === 'string') return { tagName: element };
  if (element.tagName) return element;

  return {
    tagName: getElementName(element),
    reactComponent: element
  };
};

var styled = function styled(_ref) {
  var element = _ref.element,
      ownStyle = _ref.ownStyle,
      mountSheet = _ref.mountSheet,
      jss = _ref.jss;

  var _getParamsByElement = getParamsByElement(element),
      _getParamsByElement$s = _getParamsByElement.style,
      style = _getParamsByElement$s === undefined ? [] : _getParamsByElement$s,
      tagName = _getParamsByElement.tagName,
      reactComponent = _getParamsByElement.reactComponent;

  var elementStyle = style.concat(ownStyle);

  var _getSeparatedStyles = _getSeparatedStyles3.default.apply(undefined, _toConsumableArray(elementStyle)),
      dynamicStyle = _getSeparatedStyles.dynamicStyle,
      staticStyle = _getSeparatedStyles.staticStyle;

  var staticTagName = staticStyle && (0, _generateTagName2.default)(tagName);

  var isFunctionStyle = typeof dynamicStyle === 'function';

  var availableDynamicTagNames = [];
  var classMap = {};

  var staticClassName = void 0;

  var StyledElement = function (_Component) {
    _inherits(StyledElement, _Component);

    // If the base component is a React component (and thus neither an intrinsic tag or a
    // styled element), make sure to keep a reference to the component around. Otherwise deeply
    // nested styled elements won't render the base component correctly.
    function StyledElement(props, context) {
      _classCallCheck(this, StyledElement);

      var _this = _possibleConstructorReturn(this, (StyledElement.__proto__ || Object.getPrototypeOf(StyledElement)).call(this, props, context));

      _this.setTheme = function (theme) {
        return _this.setState({ theme: theme });
      };

      _this.dynamicTagName = '';
      _this.staticClassName = '';


      if (!_this.dynamicTagName && dynamicStyle) {
        _this.dynamicTagName = availableDynamicTagNames.pop() || (0, _generateTagName2.default)(tagName);
      }

      _this.state = {};

      if (context[_theming.channel]) {
        _this.state.theme = _theming.themeListener.initial(context);
      }

      _this.staticClassName = staticClassName;
      return _this;
    }

    _createClass(StyledElement, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.sheet = this.sheet || mountSheet();
        var rulesIndex = this.sheet.rules.index;
        var rulesTotal = rulesIndex.length;

        if (staticStyle && !this.sheet.getRule(staticTagName)) {
          this.sheet.addRule(staticTagName, staticStyle);
        }

        if (!dynamicStyle) return;

        if (!this.sheet.getRule(this.dynamicTagName)) {
          this.sheet.addRule(this.dynamicTagName, dynamicStyle);
        }

        classMap[this.dynamicTagName] = classMap[this.dynamicTagName] || rulesIndex.slice(rulesTotal);

        this.updateSheet(this.props, this.state);
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.state.theme) {
          this.subscriptionId = _theming.themeListener.subscribe(this.context, this.setTheme);
        }
      }
    }, {
      key: 'componentWillUpdate',
      value: function componentWillUpdate(nextProps, nextState) {
        if (dynamicStyle) this.updateSheet(nextProps, nextState);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        availableDynamicTagNames.push(this.dynamicTagName);

        if (this.subscriptionId) {
          _theming.themeListener.unsubscribe(this.context, this.subscriptionId);
        }
      }
    }, {
      key: 'updateSheet',
      value: function updateSheet(props, state) {
        var rule = void 0;
        var ruleIndex = 0;

        var styleProps = state.theme ? Object.assign({}, state, props) : props;

        // nested styles become to flatten rules, so we need to update each nested rule
        for (ruleIndex; ruleIndex < classMap[this.dynamicTagName].length; ruleIndex++) {
          rule = classMap[this.dynamicTagName][ruleIndex];

          if (isFunctionStyle) {
            this.sheet.update(rule.key, styleProps);
          } else {
            this.sheet.update(rule.key, styleProps);
          }
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            children = _props.children,
            className = _props.className,
            attrs = _objectWithoutProperties(_props, ['children', 'className']);

        var props = reactComponent ? attrs : (0, _filterProps2.default)(tagName, attrs);
        var tagClass = (0, _composeClasses2.default)([this.staticClassName, staticTagName && this.sheet.classes[staticTagName], this.dynamicTagName && this.sheet.classes[this.dynamicTagName], className]);

        return (0, _react.createElement)(reactComponent || tagName, Object.assign({}, props, { className: tagClass }), children);
      }
    }]);

    return StyledElement;
  }(_react.Component);

  // $FlowIgnore


  StyledElement.tagName = tagName;
  StyledElement.style = elementStyle;
  StyledElement.reactComponent = reactComponent;
  StyledElement.contextTypes = _defineProperty({}, _theming.channel, _propTypes.object);
  StyledElement.valueOf = function () {
    if (!staticClassName) {
      staticClassName = '' + jss.generateClassName({
        key: (0, _generateTagName2.default)('static')
      });
    }

    return '.' + staticClassName;
  };

  // $FlowIgnore
  StyledElement.toString = StyledElement.valueOf;

  return StyledElement;
};

exports.default = styled;
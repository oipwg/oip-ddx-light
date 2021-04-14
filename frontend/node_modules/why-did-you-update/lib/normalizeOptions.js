'use strict';

exports.__esModule = true;
exports.normalizeOptions = exports.DEFAULT_EXCLUDE = exports.DEFAULT_INCLUDE = undefined;

var _isString2 = require('lodash/isString');

var _isString3 = _interopRequireDefault(_isString2);

var _defaultNotifier = require('./defaultNotifier');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_INCLUDE = exports.DEFAULT_INCLUDE = /./;
var DEFAULT_EXCLUDE = exports.DEFAULT_EXCLUDE = /[^a-zA-Z0-9()]/;

var toRegExp = function toRegExp(s) {
  return (0, _isString3.default)(s) ? new RegExp('^' + s + '$') : s;
};
var toArray = function toArray(o) {
  return o ? [].concat(o) : [];
};

var normalizeOptions = exports.normalizeOptions = function normalizeOptions() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _opts$include = opts.include,
      include = _opts$include === undefined ? [DEFAULT_INCLUDE] : _opts$include,
      _opts$exclude = opts.exclude,
      exclude = _opts$exclude === undefined ? [DEFAULT_EXCLUDE] : _opts$exclude,
      _opts$groupByComponen = opts.groupByComponent,
      groupByComponent = _opts$groupByComponen === undefined ? true : _opts$groupByComponen,
      _opts$collapseCompone = opts.collapseComponentGroups,
      collapseComponentGroups = _opts$collapseCompone === undefined ? true : _opts$collapseCompone,
      _opts$notifier = opts.notifier,
      notifier = _opts$notifier === undefined ? _defaultNotifier.defaultNotifier : _opts$notifier;


  return {
    notifier: notifier,
    include: toArray(include).map(toRegExp),
    exclude: toArray(exclude).map(toRegExp),
    groupByComponent: groupByComponent,
    collapseComponentGroups: collapseComponentGroups
  };
};
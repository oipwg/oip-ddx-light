import _pick from 'lodash/pick';
import _every from 'lodash/every';
import _filter from 'lodash/filter';
import _keys from 'lodash/keys';
import _union from 'lodash/union';
import _isFunction from 'lodash/isFunction';
import _isEqual from 'lodash/isEqual';

import isEqual from 'react-fast-compare';

export var DIFF_TYPES = {
  UNAVOIDABLE: 'unavoidable',
  SAME: 'same',
  EQUAL: 'equal',
  FUNCTIONS: 'functions'
};

export var classifyDiff = function classifyDiff(prev, next, name) {
  if (prev === next) {
    return {
      type: DIFF_TYPES.SAME,
      name: name,
      prev: prev,
      next: next
    };
  }

  if (isEqual(prev, next)) {
    return {
      type: DIFF_TYPES.EQUAL,
      name: name,
      prev: prev,
      next: next
    };
  }

  if (!prev || !next) {
    return {
      type: DIFF_TYPES.UNAVOIDABLE,
      name: name,
      prev: prev,
      next: next
    };
  }

  var isChanged = function isChanged(key) {
    return prev[key] !== next[key] && !_isEqual(prev[key], next[key]);
  };
  var isSameFunction = function isSameFunction(key) {
    var prevFn = prev[key];
    var nextFn = next[key];
    return _isFunction(prevFn) && _isFunction(nextFn) && prevFn.name === nextFn.name;
  };

  var keys = _union(_keys(prev), _keys(next));
  var changedKeys = _filter(keys, isChanged);

  if (changedKeys.length && _every(changedKeys, isSameFunction)) {
    return {
      type: DIFF_TYPES.FUNCTIONS,
      name: name,
      prev: _pick(prev, changedKeys),
      next: _pick(next, changedKeys)
    };
  }

  return {
    type: DIFF_TYPES.UNAVOIDABLE,
    name: name,
    prev: prev,
    next: next
  };
};
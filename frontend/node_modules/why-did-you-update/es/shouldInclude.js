import _some from 'lodash/some';


export var shouldInclude = function shouldInclude(displayName, _ref) {
  var include = _ref.include,
      exclude = _ref.exclude;

  return _some(include, function (r) {
    return r.test(displayName);
  }) && !_some(exclude, function (r) {
    return r.test(displayName);
  });
};
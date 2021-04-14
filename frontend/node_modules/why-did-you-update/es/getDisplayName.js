export var getDisplayName = function getDisplayName(ctor) {
  return ctor.displayName || ctor.name;
};
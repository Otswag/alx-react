const { fromJS, isImmutable } = require('immutable');
function getImmutableObject(object) {
  if (typeof object !== 'object' || object === null || isImmutable(object)) {
    return null;
  }
  return fromJS(object);
}
module.exports = getImmutableObject;

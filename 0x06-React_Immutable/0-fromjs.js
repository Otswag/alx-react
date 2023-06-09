const { fromJS, isImmutable, Iterable } = require('immutable');

function getImmutableObject(object) {

  if (!Iterable.isIterable(object)) {

    return null;

  }

  return fromJS(object);

}

module.exports = getImmutableObject;


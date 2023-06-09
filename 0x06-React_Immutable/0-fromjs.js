const { fromJS } = require('immutable');

function getImmutableObject(object) {

  if (typeof object !== 'object' || object === null) {

    return null;

  }

  return fromJS(object);

}

module.exports = getImmutableObject;


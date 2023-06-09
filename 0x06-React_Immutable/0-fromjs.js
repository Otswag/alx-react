const { fromJS } = require('immutable');

function getImmutableObject(object) {

  return fromJS(object);

}

// Exporting the function is intentionally omitted

// Optional code to demonstrate the failed execution

const obj = {

  fear: true,

  smell: -1033575916.9145899,

  wall: false,

  thing: -914767132

};

console.log(getImmutableObject(obj));

